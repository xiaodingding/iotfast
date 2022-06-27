/*
==========================================================================
物联网快速开发自动生成菜单SQL,只生成一次,按需修改.
生成日期：2022-06-27 23:24:19
生成路径: data/gen_sql/test/mqtt_topic_record_menu.sql
生成人：dwx
==========================================================================
*/
-- 当前日期
select @now := now();
-- 目录 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(0,'test/mqttTopicRecord','MQTT需要进行记录的Topic管理','form','','MQTT需要进行记录的Topic管理',0,0,0,0,'/test/mqttTopicRecord','','',0,'sys_admin',0,@now,@now,NULL );
-- 菜单父目录ID
SELECT @parentId := LAST_INSERT_ID();
-- 菜单 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/test/mqttTopicRecord/index','MQTT需要进行记录的Topic列表','list','','MQTT需要进行记录的Topic列表',1,0,0,0,'/test/mqttTopicRecord/list','','test/mqttTopicRecord/list',0,'sys_admin',0,@now,@now,NULL );
-- 按钮父目录ID
SELECT @parentId := LAST_INSERT_ID();
-- 按钮 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/test/mqttTopicRecord/get','MQTT需要进行记录的Topic查询','','','MQTT需要进行记录的Topic查询',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/test/mqttTopicRecord/add','MQTT需要进行记录的Topic添加','','','MQTT需要进行记录的Topic添加',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/test/mqttTopicRecord/edit','MQTT需要进行记录的Topic修改','','','MQTT需要进行记录的Topic修改',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/test/mqttTopicRecord/delete','MQTT需要进行记录的Topic删除','','','MQTT需要进行记录的Topic删除',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
