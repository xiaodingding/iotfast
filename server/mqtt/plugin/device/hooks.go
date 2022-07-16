package device

import (
	"context"

	"github.com/gogf/gf/v2/frame/g"

	mqttApi "github.com/xiaodingding/iotfast/api/v1/mqtt"
	mqttService "github.com/xiaodingding/iotfast/internal/app/mqtt/service"

	deviceConst "github.com/xiaodingding/iotfast/internal/app/device/consts"
	deviceService "github.com/xiaodingding/iotfast/internal/app/device/service"
	"github.com/xiaodingding/iotfast/library/libCodec"
	gmqtt "github.com/xiaodingding/iotfast/server/mqtt"
	"github.com/xiaodingding/iotfast/server/mqtt/pkg/codes"
	"github.com/xiaodingding/iotfast/server/mqtt/pkg/packets"
	"github.com/xiaodingding/iotfast/server/mqtt/server"

	"go.uber.org/zap"
)

func (d *Device) HookWrapper() server.HookWrapper {
	return server.HookWrapper{
		OnBasicAuthWrapper:    d.OnBasicAuthWrapper,
		OnSubscribeWrapper:    d.OnSubscribeWrapper,
		OnSubscribedWrapper:   d.OnSubscribedWrapper,
		OnUnsubscribedWrapper: d.OnUnsubscribedWrapper,
		OnMsgArrivedWrapper:   d.OnMsgArrivedWrapper,
		OnConnectedWrapper:    d.OnConnectedWrapper,
		OnClosedWrapper:       d.OnClosedWrapper,
	}
}

func (d *Device) validateDevice(ctx context.Context, username string, password string, clientID string) (status bool, err error) {

	if username == "" || password == "" {
		return false, nil
	}

	status, err = deviceService.DeviceInfo().Auth(ctx, username, password)

	return
}

func (d *Device) OnBasicAuthWrapper(pre server.OnBasicAuth) server.OnBasicAuth {
	return func(ctx context.Context, client server.Client, req *server.ConnectRequest) (err error) {
		err = pre(ctx, client, req)
		if err != nil {
			return err
		}
		ok, err := d.validateDevice(ctx, string(req.Connect.Username), string(req.Connect.Password), string(req.Connect.ClientID))
		if err != nil {
			return err
		}
		if !ok {
			log.Debug("authentication failed", zap.String("device sn", string(req.Connect.Username)))
			v := client.Version()
			if packets.IsVersion3X(v) {
				return &codes.Error{
					Code: codes.V3NotAuthorized,
				}
			}
			if packets.IsVersion5(v) {
				return &codes.Error{
					Code: codes.NotAuthorized,
				}
			}
		}
		return nil
	}
}

func (d *Device) OnSubscribeWrapper(pre server.OnSubscribe) server.OnSubscribe {
	return func(ctx context.Context, client server.Client, req *server.SubscribeRequest) error {
		username := client.ClientOptions().Username
		// iterate all subscriptions in the Subscribe packet.
		for k, v := range req.Subscriptions {
			switch username {
			case "root":
				// if root, there are not limit on the subscription qos level.
			case "qos0":
				// if qos0, grants qos0 level
				req.GrantQoS(k, packets.Qos0)
			case "qos1":
				// if qos1, grants at most qos 1 qos level.
				if v.Sub.QoS > packets.Qos1 {
					req.GrantQoS(k, packets.Qos1)
				}
			case "publishonly":
				// reject any subscriptions for the publishonly client.
				req.Reject(k, &codes.Error{
					Code: codes.NotAuthorized,
					ErrorDetails: codes.ErrorDetails{
						ReasonString: []byte("publish only"),
					},
				})
			}
		}
		return nil
	}
}

func (d *Device) OnUnsubscribedWrapper(pre server.OnUnsubscribed) server.OnUnsubscribed {
	return func(ctx context.Context, client server.Client, topicName string) {
		err := mqttService.MqttTopic().DeleteByClientIdAndTopic(ctx, client.ClientOptions().ClientID, topicName)
		if err != nil {
			g.Log().Error(ctx, "save topic info error", err)
		}
	}
}

func (d *Device) OnSubscribedWrapper(pre server.OnSubscribed) server.OnSubscribed {
	return func(ctx context.Context, client server.Client, subscription *gmqtt.Subscription) {
		req := &mqttApi.MqttTopicAddReq{}
		req.ClientId = client.ClientOptions().ClientID
		req.Name = client.Connection().RemoteAddr().String()
		req.Topic = subscription.TopicFilter
		req.Qos = int(subscription.QoS)
		req.RetainAsPub = subscription.RetainAsPublished
		req.RetainHandle = subscription.RetainHandling
		err := mqttService.MqttTopic().Add(ctx, req)
		if err != nil {
			g.Log().Error(ctx, "save topic info error", err)
		}
	}
}

func (d *Device) OnMsgArrivedWrapper(pre server.OnMsgArrived) server.OnMsgArrived {
	return func(ctx context.Context, client server.Client, req *server.MsgArrivedRequest) error {
		version := client.Version()

		if client.ClientOptions().Username == "subscribeonly" {
			switch version {
			case packets.Version311:
				// For v3 client:
				// If a Server implementation does not authorize a PUBLISH to be performed by a Client;
				// it has no way of informing that Client. It MUST either make a positive acknowledgement,
				// according to the normal QoS rules, or close the Network Connection [MQTT-3.3.5-2].
				req.Drop()
				// Or close the client.
				// client.Close()
				return nil

			case packets.Version5:
				return &codes.Error{
					Code: codes.NotAuthorized,
				}
				// Or close the client. For V5 clients, it is recommended to use Disconnect() to send a disconnect packet to client, which is a good feature introduced by V5.
				//req.Drop()
				//client.Disconnect(&packets.Disconnect{
				//	Version: packets.Version5,
				//	Code:    codes.UnspecifiedError,
				//})
				//return
			}
		}

		if req.Message.QoS == packets.Qos2 {
			req.Drop()
			return &codes.Error{
				Code: codes.NotAuthorized,
				ErrorDetails: codes.ErrorDetails{
					ReasonString: []byte("not authorized"),
					UserProperties: []struct {
						K []byte
						V []byte
					}{
						{
							K: []byte("user property key"),
							V: []byte("user property value"),
						},
					},
				},
			}
		}

		if isMatch := packets.TopicMatch([]byte(req.Message.Topic), []byte("/device/+/report")); true == isMatch {
			// Access(client.ClientOptions().Username, req.Message.Topic, req.Message.Payload)
			// g.Log().Printf(ctx, "topic:%s, QoS:%v, payload:%s", req.Message.Topic, req.Message.QoS, req.Message.Payload)
			mqttParse, err := libCodec.Open("mqtt")
			if err != nil {
				g.Log().Error(ctx, "get mqtt parse plugin error")
				return err
			}

			if mqttParse != nil {
				msg, err := mqttParse.Encode(ctx, req.Message.Payload)
				if err != nil {
					g.Log().Error(ctx, "mqtt data parse code error", err)
					return err
				}
				// g.Log().Print(ctx, "mqtt parse msg:", msg, "err:", err)
				err = mqttParse.Save(ctx, msg)
				return err
			}
		}

		return nil
	}
}

func (d *Device) OnConnectedWrapper(pre server.OnConnected) server.OnConnected {
	return func(ctx context.Context, client server.Client) {
		if client.ClientOptions().Username == "" {
			log.Debug("Connect Faild", zap.String("IP:", client.Connection().RemoteAddr().String()), zap.String("ClientID:", client.ClientOptions().ClientID))
			client.Close()
			return
		}
		//Status(client.ClientOptions().Username, true)
		log.Debug("client Connect ", zap.String("ClientID:", client.ClientOptions().ClientID))

		mqttService.MqttStatus().Update(ctx, client.ClientOptions().Username, client.ClientOptions().ClientID, client.Connection().RemoteAddr().String(), deviceConst.DeviceStatusOnLine)
		deviceService.DeviceInfo().UpdateStatus(ctx, client.ClientOptions().Username, deviceConst.DeviceStatusOnLine)
	}
}

func (d *Device) OnClosedWrapper(pre server.OnClosed) server.OnClosed {
	return func(ctx context.Context, client server.Client, err error) {
		if client != nil && nil != client.ClientOptions() {
			// log.Debug("client id:" + client.ClientOptions().ClientID + "is closed with error:" + err.Error())
			//Status(client.ClientOptions().Username, false)
			g.Log().Debug(ctx, "client id:"+client.ClientOptions().ClientID+" is closed with error: ", err)
			mqttService.MqttStatus().Update(ctx, client.ClientOptions().Username, client.ClientOptions().ClientID, "", deviceConst.DeviceStatusOffLine)
			mqttService.MqttTopic().DeleteByClientId(ctx, client.ClientOptions().ClientID)
			deviceService.DeviceInfo().UpdateStatus(ctx, client.ClientOptions().Username, deviceConst.DeviceStatusOffLine)
		} else {
			g.Log().Debug(ctx, "clinet is nil", client)
		}
	}
}
