package server

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestTopicNew(t *testing.T) {
	Topic := TopicNew()
	require.NotNil(t, Topic)
	require.NotNil(t, Topic.Root)
}

func BenchmarkTopicNew(b *testing.B) {
	for n := 0; n < b.N; n++ {
		TopicNew()
	}
}

func TestPoperate(t *testing.T) {
	Topic := TopicNew()
	child := Topic.poperate("path/to/my/mqtt")
	require.Equal(t, "mqtt", child.Key)
	require.NotNil(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"])

	child = Topic.poperate("a/b/c/d/e")
	require.Equal(t, "e", child.Key)
	child = Topic.poperate("a/b/c/c/a")
	require.Equal(t, "a", child.Key)
}

func BenchmarkPoperate(b *testing.B) {
	Topic := TopicNew()
	for n := 0; n < b.N; n++ {
		Topic.poperate("path/to/my/mqtt")
	}
}

func TestUnpoperate(t *testing.T) {
	Topic := TopicNew()
	Topic.Subscribe("path/to/my/mqtt", "client-1", 0)
	require.Contains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"].Clients, "client-1")

	Topic.Subscribe("path/to/another/mqtt", "client-1", 0)
	require.Contains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["another"].Leaves["mqtt"].Clients, "client-1")

	pk := MessagePacket{TopicName: "path/to/retained/message", Payload: []byte{'h', 'e', 'l', 'l', 'o'}}
	Topic.RetainMessage(pk)
	require.NotNil(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["retained"].Leaves["message"])
	require.Equal(t, pk, Topic.Root.Leaves["path"].Leaves["to"].Leaves["retained"].Leaves["message"].Message)

	pk2 := MessagePacket{TopicName: "path/to/my/mqtt", Payload: []byte{'s', 'h', 'a', 'r', 'e', 'd'}}
	Topic.RetainMessage(pk2)
	require.NotNil(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"])
	require.Equal(t, pk2, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"].Message)

	Topic.unpoperate("path/to/my/mqtt", "", true) // delete retained
	require.Contains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"].Clients, "client-1")
	require.Equal(t, false, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"].Message.Retain)

	Topic.unpoperate("path/to/my/mqtt", "client-1", false) // unsubscribe client
	require.Nil(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"])

	Topic.unpoperate("path/to/retained/message", "", true) // delete retained
	require.NotContains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves, "my")

	Topic.unpoperate("path/to/whatever", "client-1", false) // unsubscribe client
	require.Nil(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"])

	//require.Empty(t, Topic.Root.Leaves["path"])

}

func BenchmarkUnpoperate(b *testing.B) {
	Topic := TopicNew()
	for n := 0; n < b.N; n++ {
		Topic.poperate("path/to/my/mqtt")
	}
}

func TestRetainMessage(t *testing.T) {
	pk := MessagePacket{
		Retain:    true,
		TopicName: "path/to/my/mqtt",
		Payload:   []byte{'h', 'e', 'l', 'l', 'o'},
	}
	pk2 := MessagePacket{
		Retain:    true,
		TopicName: "path/to/another/mqtt",
		Payload:   []byte{'h', 'e', 'l', 'l', 'o'},
	}

	Topic := TopicNew()
	q := Topic.RetainMessage(pk)
	require.Equal(t, int64(1), q)
	require.NotNil(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"])
	require.Equal(t, pk, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"].Message)

	Topic.Subscribe("path/to/another/mqtt", "client-1", 0)
	require.NotNil(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["another"].Leaves["mqtt"].Clients["client-1"])
	require.NotNil(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["another"].Leaves["mqtt"])

	q = Topic.RetainMessage(pk2)
	require.Equal(t, int64(1), q)
	require.NotNil(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["another"].Leaves["mqtt"])
	require.Equal(t, pk2, Topic.Root.Leaves["path"].Leaves["to"].Leaves["another"].Leaves["mqtt"].Message)
	require.Contains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["another"].Leaves["mqtt"].Clients, "client-1")

	// The same message already exists, but we're not doing a deep-copy check, so it's considered
	// to be a TopicNew message.
	q = Topic.RetainMessage(pk2)
	require.Equal(t, int64(1), q)
	require.NotNil(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["another"].Leaves["mqtt"])
	require.Equal(t, pk2, Topic.Root.Leaves["path"].Leaves["to"].Leaves["another"].Leaves["mqtt"].Message)
	require.Contains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["another"].Leaves["mqtt"].Clients, "client-1")

	// Delete retained
	pk3 := MessagePacket{TopicName: "path/to/another/mqtt", Payload: []byte{}}
	q = Topic.RetainMessage(pk3)
	require.Equal(t, int64(-1), q)
	require.NotNil(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"])
	require.Equal(t, pk, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"].Message)
	require.Equal(t, false, Topic.Root.Leaves["path"].Leaves["to"].Leaves["another"].Leaves["mqtt"].Message.Retain)

	// Second Delete retained
	q = Topic.RetainMessage(pk3)
	require.Equal(t, int64(0), q)
	require.NotNil(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"])
	require.Equal(t, pk, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"].Message)
	require.Equal(t, false, Topic.Root.Leaves["path"].Leaves["to"].Leaves["another"].Leaves["mqtt"].Message.Retain)

}

func BenchmarkRetainMessage(b *testing.B) {
	Topic := TopicNew()
	pk := MessagePacket{TopicName: "path/to/another/mqtt"}
	for n := 0; n < b.N; n++ {
		Topic.RetainMessage(pk)
	}
}

func TestSubscribeOK(t *testing.T) {
	Topic := TopicNew()

	q := Topic.Subscribe("path/to/my/mqtt", "client-1", 0)
	require.Equal(t, true, q)

	q = Topic.Subscribe("path/to/my/mqtt", "client-1", 0)
	require.Equal(t, false, q)

	q = Topic.Subscribe("path/to/my/mqtt", "client-2", 0)
	require.Equal(t, true, q)

	q = Topic.Subscribe("path/to/another/mqtt", "client-1", 0)
	require.Equal(t, true, q)

	q = Topic.Subscribe("path/+", "client-2", 0)
	require.Equal(t, true, q)

	q = Topic.Subscribe("#", "client-3", 0)
	require.Equal(t, true, q)

	require.Contains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"].Clients, "client-1")
	require.Equal(t, "path/to/my/mqtt", Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"].Filter)
	require.Equal(t, "mqtt", Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"].Key)
	require.Equal(t, Topic.Root.Leaves["path"], Topic.Root.Leaves["path"].Leaves["to"].Parent)
	require.NotNil(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"].Clients, "client-2")

	require.Contains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["another"].Leaves["mqtt"].Clients, "client-1")
	require.Contains(t, Topic.Root.Leaves["path"].Leaves["+"].Clients, "client-2")
	require.Contains(t, Topic.Root.Leaves["#"].Clients, "client-3")
}

func BenchmarkSubscribe(b *testing.B) {
	Topic := TopicNew()
	for n := 0; n < b.N; n++ {
		Topic.Subscribe("path/to/mqtt/basic", "client-1", 0)
	}
}

func TestUnsubscribeA(t *testing.T) {
	Topic := TopicNew()
	Topic.Subscribe("path/to/my/mqtt", "client-1", 0)
	Topic.Subscribe("path/to/+/mqtt", "client-1", 0)
	Topic.Subscribe("path/to/stuff", "client-1", 0)
	Topic.Subscribe("path/to/stuff", "client-2", 0)
	Topic.Subscribe("#", "client-3", 0)
	require.Contains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"].Leaves["mqtt"].Clients, "client-1")
	require.Contains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["+"].Leaves["mqtt"].Clients, "client-1")
	require.Contains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["stuff"].Clients, "client-1")
	require.Contains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["stuff"].Clients, "client-2")
	require.Contains(t, Topic.Root.Leaves["#"].Clients, "client-3")

	ok := Topic.Unsubscribe("path/to/my/mqtt", "client-1")
	require.Equal(t, true, ok)

	require.Nil(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["my"])
	require.Contains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["+"].Leaves["mqtt"].Clients, "client-1")

	ok = Topic.Unsubscribe("path/to/stuff", "client-1")
	require.Equal(t, true, ok)

	require.NotContains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["stuff"].Clients, "client-1")
	require.Contains(t, Topic.Root.Leaves["path"].Leaves["to"].Leaves["stuff"].Clients, "client-2")
	require.Contains(t, Topic.Root.Leaves["#"].Clients, "client-3")

	ok = Topic.Unsubscribe("fdasfdas/dfsfads/sa", "client-1")
	require.Equal(t, false, ok)

}

func TestUnsubscribeCascade(t *testing.T) {
	Topic := TopicNew()
	Topic.Subscribe("a/b/c", "client-1", 0)
	Topic.Subscribe("a/b/c/e/e", "client-1", 0)

	ok := Topic.Unsubscribe("a/b/c/e/e", "client-1")
	require.Equal(t, true, ok)
	require.NotEmpty(t, Topic.Root.Leaves)
	require.Contains(t, Topic.Root.Leaves["a"].Leaves["b"].Leaves["c"].Clients, "client-1")
}

// This benchmark is Unsubscribe-Subscribe
func BenchmarkUnsubscribe(b *testing.B) {
	Topic := TopicNew()

	for n := 0; n < b.N; n++ {
		Topic.Subscribe("path/to/my/mqtt", "client-1", 0)
		Topic.Unsubscribe("path/to/mqtt/basic", "client-1")
	}
}

func TestSubscribersFind(t *testing.T) {
	tt := []struct {
		filter string
		topic  string
		len    int
	}{
		{
			filter: "a",
			topic:  "a",
			len:    1,
		},
		{
			filter: "a/",
			topic:  "a",
			len:    0,
		},
		{
			filter: "a/",
			topic:  "a/",
			len:    1,
		},
		{
			filter: "/a",
			topic:  "/a",
			len:    1,
		},
		{
			filter: "path/to/my/mqtt",
			topic:  "path/to/my/mqtt",
			len:    1,
		},
		{
			filter: "path/to/+/mqtt",
			topic:  "path/to/my/mqtt",
			len:    1,
		},
		{
			filter: "+/to/+/mqtt",
			topic:  "path/to/my/mqtt",
			len:    1,
		},
		{
			filter: "#",
			topic:  "path/to/my/mqtt",
			len:    1,
		},
		{
			filter: "+/+/+/+",
			topic:  "path/to/my/mqtt",
			len:    1,
		},
		{
			filter: "+/+/+/#",
			topic:  "path/to/my/mqtt",
			len:    1,
		},
		{
			filter: "zen/#",
			topic:  "zen",
			len:    1,
		},
		{
			filter: "+/+/#",
			topic:  "path/to/my/mqtt",
			len:    1,
		},
		{
			filter: "path/to/",
			topic:  "path/to/my/mqtt",
			len:    0,
		},
		{
			filter: "#/stuff",
			topic:  "path/to/my/mqtt",
			len:    0,
		},
		{
			filter: "$SYS/#",
			topic:  "$SYS/info",
			len:    1,
		},
		{
			filter: "#",
			topic:  "$SYS/info",
			len:    0,
		},
		{
			filter: "+/info",
			topic:  "$SYS/info",
			len:    0,
		},
	}

	for i, check := range tt {
		Topic := TopicNew()
		Topic.Subscribe(check.filter, "client-1", 0)
		clients := Topic.Subscribers(check.topic)
		//spew.Dump(clients)
		require.Equal(t, check.len, len(clients), "Unexpected clients len at %d %s %s", i, check.filter, check.topic)
	}

}

func BenchmarkSubscribers(b *testing.B) {
	Topic := TopicNew()
	Topic.Subscribe("path/to/my/mqtt", "client-1", 0)
	Topic.Subscribe("path/to/+/mqtt", "client-1", 0)
	Topic.Subscribe("something/things/stuff/+", "client-1", 0)
	Topic.Subscribe("path/to/stuff", "client-2", 0)
	Topic.Subscribe("#", "client-3", 0)

	for n := 0; n < b.N; n++ {
		Topic.Subscribers("path/to/testing/mqtt")
	}
}

func TestIsolateParticle(t *testing.T) {
	particle, hasNext := isolateParticle("path/to/my/mqtt", 0)
	require.Equal(t, "path", particle)
	require.Equal(t, true, hasNext)
	particle, hasNext = isolateParticle("path/to/my/mqtt", 1)
	require.Equal(t, "to", particle)
	require.Equal(t, true, hasNext)
	particle, hasNext = isolateParticle("path/to/my/mqtt", 2)
	require.Equal(t, "my", particle)
	require.Equal(t, true, hasNext)
	particle, hasNext = isolateParticle("path/to/my/mqtt", 3)
	require.Equal(t, "mqtt", particle)
	require.Equal(t, false, hasNext)

	particle, hasNext = isolateParticle("/path/", 0)
	require.Equal(t, "", particle)
	require.Equal(t, true, hasNext)
	particle, hasNext = isolateParticle("/path/", 1)
	require.Equal(t, "path", particle)
	require.Equal(t, true, hasNext)
	particle, hasNext = isolateParticle("/path/", 2)
	require.Equal(t, "", particle)
	require.Equal(t, false, hasNext)

	particle, hasNext = isolateParticle("a/b/c/+/+", 3)
	require.Equal(t, "+", particle)
	require.Equal(t, true, hasNext)
	particle, hasNext = isolateParticle("a/b/c/+/+", 4)
	require.Equal(t, "+", particle)
	require.Equal(t, false, hasNext)
}

func BenchmarkIsolateParticle(b *testing.B) {
	for n := 0; n < b.N; n++ {
		isolateParticle("path/to/my/mqtt", 3)
	}
}

func TestMessagesPattern(t *testing.T) {
	tt := []struct {
		packet MessagePacket
		filter string
		len    int
	}{
		{
			MessagePacket{TopicName: "a/b/c/d", Payload: []byte{'h', 'e', 'l', 'l', 'o'}, Retain: true},
			"a/b/c/d",
			1,
		},
		{
			MessagePacket{TopicName: "a/b/c/e", Payload: []byte{'h', 'e', 'l', 'l', 'o'}, Retain: true},
			"a/+/c/+",
			2,
		},
		{
			MessagePacket{TopicName: "a/b/d/f", Payload: []byte{'h', 'e', 'l', 'l', 'o'}, Retain: true},
			"+/+/+/+",
			3,
		},
		{
			MessagePacket{TopicName: "q/w/e/r/t/y", Payload: []byte{'h', 'e', 'l', 'l', 'o'}, Retain: true},
			"q/w/e/#",
			1,
		},
		{
			MessagePacket{TopicName: "q/w/x/r/t/x", Payload: []byte{'h', 'e', 'l', 'l', 'o'}, Retain: true},
			"q/#",
			2,
		},
		{
			MessagePacket{TopicName: "asd", Payload: []byte{'h', 'e', 'l', 'l', 'o'}, Retain: true},
			"asd",
			1,
		},
		{
			MessagePacket{TopicName: "$SYS/testing", Payload: []byte{'h', 'e', 'l', 'l', 'o'}, Retain: true},
			"#",
			8,
		},
		{
			MessagePacket{TopicName: "$SYS/test", Payload: []byte{'h', 'e', 'l', 'l', 'o'}, Retain: true},
			"+/testing",
			0,
		},
		{
			MessagePacket{TopicName: "$SYS/info", Payload: []byte{'h', 'e', 'l', 'l', 'o'}, Retain: true},
			"$SYS/info",
			1,
		},
		{
			MessagePacket{TopicName: "$SYS/b", Payload: []byte{'h', 'e', 'l', 'l', 'o'}, Retain: true},
			"$SYS/#",
			4,
		},
		{
			MessagePacket{TopicName: "asd/fgh/jkl", Payload: []byte{'h', 'e', 'l', 'l', 'o'}, Retain: true},
			"#",
			8,
		},
		{
			MessagePacket{TopicName: "stuff/asdadsa/dsfdsafdsadfsa/dsfdsf/sdsadas", Payload: []byte{'h', 'e', 'l', 'l', 'o'}, Retain: true},
			"stuff/#/things", // Topicer will ignore trailing /things
			1,
		},
	}
	Topic := TopicNew()
	for _, check := range tt {
		Topic.RetainMessage(check.packet)
	}

	for i, check := range tt {
		messages := Topic.Messages(check.filter)
		require.Equal(t, check.len, len(messages), "Unexpected messages len at %d %s %s", i, check.filter, check.packet.TopicName)
	}
}

func TestMessagesFind(t *testing.T) {
	Topic := TopicNew()
	Topic.RetainMessage(MessagePacket{TopicName: "a/a", Payload: []byte{'a'}, Retain: true})
	Topic.RetainMessage(MessagePacket{TopicName: "a/b", Payload: []byte{'b'}, Retain: true})
	messages := Topic.Messages("a/a")
	require.Equal(t, 1, len(messages))

	messages = Topic.Messages("a/+")
	require.Equal(t, 2, len(messages))
}

func BenchmarkMessages(b *testing.B) {
	Topic := TopicNew()
	Topic.RetainMessage(MessagePacket{TopicName: "path/to/my/mqtt"})
	Topic.RetainMessage(MessagePacket{TopicName: "path/to/another/mqtt"})
	Topic.RetainMessage(MessagePacket{TopicName: "path/a/some/mqtt"})
	Topic.RetainMessage(MessagePacket{TopicName: "what/is"})
	Topic.RetainMessage(MessagePacket{TopicName: "q/w/e/r/t/y"})

	for n := 0; n < b.N; n++ {
		Topic.Messages("path/to/+/mqtt")
	}
}
