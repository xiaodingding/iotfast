/*
==========================================================================
物联网快速开发自动生成菜单SQL,只生成一次,按需修改.
生成日期：2022-07-02 23:41:34
生成路径: data/gen_sql/mqtt/mqtt_topic_menu.sql
生成人：dwx
==========================================================================
*/
-- 当前日期
select @now := now();
-- 目录 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(0,'mqtt/mqttTopic','MQTT客户端的订阅信息管理','form','','MQTT客户端的订阅信息管理',0,0,0,0,'/mqtt/mqttTopic','','',0,'sys_admin',0,@now,@now,NULL );
-- 菜单父目录ID
SELECT @parentId := LAST_INSERT_ID();
-- 菜单 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/mqtt/mqttTopic/index','MQTT客户端的订阅信息列表','list','','MQTT客户端的订阅信息列表',1,0,0,0,'/mqtt/mqttTopic/list','','mqtt/mqttTopic/list',0,'sys_admin',0,@now,@now,NULL );
-- 按钮父目录ID
SELECT @parentId := LAST_INSERT_ID();
-- 按钮 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/mqtt/mqttTopic/get','MQTT客户端的订阅信息查询','','','MQTT客户端的订阅信息查询',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/mqtt/mqttTopic/add','MQTT客户端的订阅信息添加','','','MQTT客户端的订阅信息添加',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/mqtt/mqttTopic/edit','MQTT客户端的订阅信息修改','','','MQTT客户端的订阅信息修改',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/mqtt/mqttTopic/delete','MQTT客户端的订阅信息删除','','','MQTT客户端的订阅信息删除',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
