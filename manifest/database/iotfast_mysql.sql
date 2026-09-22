SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- Drop database if exists (optional, comment out if not needed)
-- DROP DATABASE IF EXISTS `iotfast`;
-- CREATE DATABASE `iotfast` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- USE `iotfast`;


SET FOREIGN_KEY_CHECKS=0;
START TRANSACTION;
CREATE TABLE IF NOT EXISTS `casbin_rule` (
  `ptype` VARCHAR(10),
  `v0` VARCHAR(256),
  `v1` VARCHAR(256),
  `v2` VARCHAR(256),
  `v3` VARCHAR(256),
  `v4` VARCHAR(256),
  `v5` VARCHAR(256)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO casbin_rule VALUES('p','2','2','All','','','');
INSERT INTO casbin_rule VALUES('p','3','2','All','','','');
INSERT INTO casbin_rule VALUES('p','4','2','All','','','');
INSERT INTO casbin_rule VALUES('p','3','3','All','','','');
INSERT INTO casbin_rule VALUES('p','2','3','All','','','');
INSERT INTO casbin_rule VALUES('p','5','4','All','','','');
INSERT INTO casbin_rule VALUES('p','2','10','All','','','');
INSERT INTO casbin_rule VALUES('p','8','2','All','','','');
INSERT INTO casbin_rule VALUES('p','8','4','All','','','');
INSERT INTO casbin_rule VALUES('p','1','10','All','','','');
INSERT INTO casbin_rule VALUES('p','1','12','All','','','');
INSERT INTO casbin_rule VALUES('p','1','13','All','','','');
INSERT INTO casbin_rule VALUES('p','1','14','All','','','');
INSERT INTO casbin_rule VALUES('g','42','1','','','','');
INSERT INTO casbin_rule VALUES('g','42','2','','','','');
INSERT INTO casbin_rule VALUES('g','1','1','','','','');
INSERT INTO casbin_rule VALUES('g','1','2','','','','');
INSERT INTO casbin_rule VALUES('g','2','3','','','','');
INSERT INTO casbin_rule VALUES('g','2','2','','','','');
INSERT INTO casbin_rule VALUES('g','4','2','','','','');
INSERT INTO casbin_rule VALUES('g','5','2','','','','');
INSERT INTO casbin_rule VALUES('g','7','2','','','','');
INSERT INTO casbin_rule VALUES('g','8','2','','','','');
INSERT INTO casbin_rule VALUES('g','10','2','','','','');
INSERT INTO casbin_rule VALUES('g','14','2','','','','');
INSERT INTO casbin_rule VALUES('g','15','2','','','','');
INSERT INTO casbin_rule VALUES('g','16','2','','','','');
INSERT INTO casbin_rule VALUES('p','4','1','All','','','');
INSERT INTO casbin_rule VALUES('p','2','1','All','','','');
INSERT INTO casbin_rule VALUES('p','8','1','All','','','');
INSERT INTO casbin_rule VALUES('p','1','1','All','','','');
INSERT INTO casbin_rule VALUES('g','6','2','','','','');
INSERT INTO casbin_rule VALUES('g','3','2','','','','');
CREATE TABLE IF NOT EXISTS `device_category_data` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `category_id` INT(11) NOT NULL,
  `device_id` INT(11) NOT NULL,
  `data_int` INT(255),
  `data_str` VARCHAR(255),
  `data_double` DOUBLE,
  `created_at` TEXT

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO device_category_data VALUES(1,1,1,1,'1',1.0,'2022-06-24 21:22:21');
INSERT INTO device_category_data VALUES(2,2,1,2,'1',1.0,'2022-06-24 21:22:21');
INSERT INTO device_category_data VALUES(3,1,1,3,'3',3.0,'2022-06-24 21:22:21');
INSERT INTO device_category_data VALUES(4,2,1,4,'4',4.0,'2022-06-24 21:22:21');
INSERT INTO device_category_data VALUES(5,1,1,5,'5',5.0,'2022-06-24 21:22:21');
INSERT INTO device_category_data VALUES(6,2,1,6,'6',6.0,'2022-06-24 21:22:21');
INSERT INTO device_category_data VALUES(7,1,1,7,'7',7.0,'2022-06-24 21:22:21');
INSERT INTO device_category_data VALUES(8,2,1,8,'8',8.0,'2022-06-24 21:22:21');
INSERT INTO device_category_data VALUES(9,1,1,9,'9',9.0,'2022-06-24 21:22:21');
INSERT INTO device_category_data VALUES(10,2,1,10,'10',10.0,'2022-06-24 21:22:21');
INSERT INTO device_category_data VALUES(11,1,1,0,'',0.0,'2022-07-13 08:08:07');
INSERT INTO device_category_data VALUES(12,2,1,0,'',0.0,'2022-07-13 08:08:07');
INSERT INTO device_category_data VALUES(13,1,1,0,'',0.0,'2022-07-13 08:10:28');
INSERT INTO device_category_data VALUES(14,2,1,0,'',0.0,'2022-07-13 08:10:28');
INSERT INTO device_category_data VALUES(15,1,1,0,'',0.0,'2022-07-13 08:12:25');
INSERT INTO device_category_data VALUES(16,2,1,0,'',0.0,'2022-07-13 08:12:25');
INSERT INTO device_category_data VALUES(17,1,1,0,'',0.0,'2022-07-13 08:15:38');
INSERT INTO device_category_data VALUES(18,2,1,0,'',0.0,'2022-07-13 08:15:38');
INSERT INTO device_category_data VALUES(19,1,1,0,'',0.0,'2022-07-13 08:17:05');
INSERT INTO device_category_data VALUES(20,2,1,0,'',0.0,'2022-07-13 08:17:05');
INSERT INTO device_category_data VALUES(21,1,1,0,'',23.19999999999999929,'2022-07-13 08:21:13');
INSERT INTO device_category_data VALUES(22,2,1,0,'',20.0,'2022-07-13 08:21:13');
INSERT INTO device_category_data VALUES(23,1,1,0,'',23.19999999999999929,'2022-07-13 08:23:06');
INSERT INTO device_category_data VALUES(24,2,1,0,'',20.0,'2022-07-13 08:23:06');
INSERT INTO device_category_data VALUES(25,1,1,0,'',23.19999999999999929,'2022-07-13 08:24:42');
INSERT INTO device_category_data VALUES(26,2,1,0,'',20.0,'2022-07-13 08:24:42');
INSERT INTO device_category_data VALUES(27,1,1,0,'',23.19999999999999929,'2022-07-13 08:26:10');
INSERT INTO device_category_data VALUES(28,2,1,0,'',20.0,'2022-07-13 08:26:10');
INSERT INTO device_category_data VALUES(29,1,1,0,'',23.19999999999999929,'2022-07-13 08:28:11');
INSERT INTO device_category_data VALUES(30,2,1,0,'',20.0,'2022-07-13 08:28:11');
INSERT INTO device_category_data VALUES(31,1,1,0,'',23.19999999999999929,'2022-07-13 11:24:53');
INSERT INTO device_category_data VALUES(32,2,1,0,'',20.0,'2022-07-13 11:24:53');
INSERT INTO device_category_data VALUES(33,1,1,0,'',23.19999999999999929,'2022-07-13 23:35:13');
INSERT INTO device_category_data VALUES(34,2,1,0,'',20.0,'2022-07-13 23:35:13');
INSERT INTO device_category_data VALUES(35,1,1,0,'',23.19999999999999929,'2022-07-13 23:36:20');
INSERT INTO device_category_data VALUES(36,2,1,0,'',20.0,'2022-07-13 23:36:20');
INSERT INTO device_category_data VALUES(37,1,1,0,'',23.19999999999999929,'2022-07-13 23:38:17');
INSERT INTO device_category_data VALUES(38,2,1,0,'',20.0,'2022-07-13 23:38:17');
INSERT INTO device_category_data VALUES(39,1,1,0,'',23.19999999999999929,'2022-07-13 23:38:18');
INSERT INTO device_category_data VALUES(40,2,1,0,'',20.0,'2022-07-13 23:38:18');
INSERT INTO device_category_data VALUES(41,1,1,0,'',23.19999999999999929,'2022-07-13 23:38:19');
INSERT INTO device_category_data VALUES(42,2,1,0,'',20.0,'2022-07-13 23:38:19');
INSERT INTO device_category_data VALUES(43,1,1,0,'',23.19999999999999929,'2022-07-13 23:38:20');
INSERT INTO device_category_data VALUES(44,2,1,0,'',20.0,'2022-07-13 23:38:20');
INSERT INTO device_category_data VALUES(45,1,1,0,'',23.19999999999999929,'2022-07-13 23:41:57');
INSERT INTO device_category_data VALUES(46,2,1,0,'',20.0,'2022-07-13 23:41:57');
INSERT INTO device_category_data VALUES(47,1,1,0,'',23.19999999999999929,'2022-07-13 23:46:18');
INSERT INTO device_category_data VALUES(48,2,1,0,'',20.0,'2022-07-13 23:46:18');
INSERT INTO device_category_data VALUES(49,1,1,0,'',23.19999999999999929,'2022-07-13 23:51:11');
INSERT INTO device_category_data VALUES(50,2,1,0,'',20.0,'2022-07-13 23:51:11');
INSERT INTO device_category_data VALUES(51,1,1,0,'',23.19999999999999929,'2022-07-13 23:52:13');
INSERT INTO device_category_data VALUES(52,2,1,0,'',20.0,'2022-07-13 23:52:13');
INSERT INTO device_category_data VALUES(53,1,1,0,'',23.19999999999999929,'2022-07-14 00:00:42');
INSERT INTO device_category_data VALUES(54,2,1,0,'',20.0,'2022-07-14 00:00:42');
INSERT INTO device_category_data VALUES(55,1,1,0,'',23.19999999999999929,'2022-07-14 00:01:48');
INSERT INTO device_category_data VALUES(56,2,1,0,'',20.0,'2022-07-14 00:01:48');
INSERT INTO device_category_data VALUES(57,1,1,0,'',23.19999999999999929,'2022-07-14 00:05:35');
INSERT INTO device_category_data VALUES(58,2,1,0,'',20.0,'2022-07-14 00:05:35');
INSERT INTO device_category_data VALUES(59,1,1,0,'',23.19999999999999929,'2022-07-14 00:07:54');
INSERT INTO device_category_data VALUES(60,2,1,0,'',20.0,'2022-07-14 00:07:54');
INSERT INTO device_category_data VALUES(61,1,1,0,'',23.19999999999999929,'2022-07-14 00:09:12');
INSERT INTO device_category_data VALUES(62,2,1,0,'',20.0,'2022-07-14 00:09:12');
INSERT INTO device_category_data VALUES(63,1,1,0,'',23.19999999999999929,'2022-07-14 00:09:17');
INSERT INTO device_category_data VALUES(64,2,1,0,'',20.0,'2022-07-14 00:09:17');
INSERT INTO device_category_data VALUES(65,1,1,0,'',23.19999999999999929,'2022-07-14 00:15:52');
INSERT INTO device_category_data VALUES(66,2,1,0,'',20.0,'2022-07-14 00:15:52');
INSERT INTO device_category_data VALUES(67,1,1,0,'',23.19999999999999929,'2022-07-14 00:17:01');
INSERT INTO device_category_data VALUES(68,2,1,0,'',20.0,'2022-07-14 00:17:01');
INSERT INTO device_category_data VALUES(69,1,1,0,'',23.19999999999999929,'2022-07-14 00:18:01');
INSERT INTO device_category_data VALUES(70,2,1,0,'',20.0,'2022-07-14 00:18:01');
INSERT INTO device_category_data VALUES(72,2,1,0,'',20.0,NULL);
INSERT INTO device_category_data VALUES(73,1,0,0,'',23.19999999999999929,'2022-07-14 00:33:59');
INSERT INTO device_category_data VALUES(74,1,0,0,'',20.0,'2022-07-14 00:33:59');
INSERT INTO device_category_data VALUES(75,1,1,0,'',23.19999999999999929,'2022-07-12 01:02:03');
INSERT INTO device_category_data VALUES(76,1,1,0,'',23.19999999999999929,'2022-07-12 01:02:03');
INSERT INTO device_category_data VALUES(77,2,1,0,'',20.0,'2022-07-12 01:02:03');
INSERT INTO device_category_data VALUES(78,1,1,0,'',23.19999999999999929,'2022-07-12 01:02:03');
INSERT INTO device_category_data VALUES(79,2,1,0,'',20.0,'2022-07-12 01:02:03');
INSERT INTO device_category_data VALUES(80,1,1,0,'',23.19999999999999929,'2022-07-12 01:02:03');
INSERT INTO device_category_data VALUES(81,2,1,0,'',20.0,'2022-07-12 01:02:03');
INSERT INTO device_category_data VALUES(82,1,1,0,'',23.19999999999999929,'2022-07-12 01:02:03');
INSERT INTO device_category_data VALUES(83,2,1,0,'',20.0,'2022-07-12 01:02:03');
CREATE TABLE IF NOT EXISTS `device_categoty` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `kind_id` INT(11),
  `name` VARCHAR(255),
  `mark` VARCHAR(255),
  `data_type` INT(4),
  `logic_type` INT(4),
  `unit` VARCHAR(255),
  `ratio` VARCHAR(255),
  `format` VARCHAR(255),
  `home_show` INT(4),
  `remark` VARCHAR(255),
  `created_at` DATETIME,
  `updated_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO device_categoty VALUES(1,1,'温度','temperature',6,2,'℃','','',0,'','2022-06-24 18:11:58','2022-06-24 22:58:45');
INSERT INTO device_categoty VALUES(2,1,'湿度','humidity',6,2,'%','','',0,'','2022-06-24 21:31:05','2022-06-24 22:59:14');
CREATE TABLE IF NOT EXISTS `device_group` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255),
  `created_at` DATETIME,
  `updated_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO device_group VALUES(1,'第一組','2022-06-22 22:33:24','2022-06-22 22:33:24');
CREATE TABLE IF NOT EXISTS `device_info` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255),
  `group` INT(11) NOT NULL,
  `sn` VARCHAR(255) NOT NULL,
  `pwd` VARCHAR(255),
  `kind` INT(11) NOT NULL,
  `logo` VARCHAR(255),
  `monitor` INT(11),
  `location` INT(11),
  `created_at` DATETIME,
  `updated_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO device_info VALUES(1,'第一个温湿度',1,'1','1',1,'1',1,1,'2022-06-22 11:38:52','2022-06-23 20:52:50');
CREATE TABLE IF NOT EXISTS `device_kind` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255),
  `mark` VARCHAR(255),
  `time_out` INT(11) NOT NULL,
  `created_at` DATETIME,
  `updated_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO device_kind VALUES(1,'温湿度','humiture',30,'2022-06-22 22:36:06','2022-06-22 22:36:06');
INSERT INTO device_kind VALUES(2,'温度','temperature',30,'2022-06-23 20:32:18','2022-06-23 20:32:18');
INSERT INTO device_kind VALUES(3,'湿度','humidity',30,'2022-06-23 20:32:57','2022-06-23 20:32:57');
CREATE TABLE IF NOT EXISTS `device_label` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255),
  `created_at` DATETIME,
  `updated_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO device_label VALUES(1,'123','2022-06-22 11:56:47','2022-06-22 11:56:47');
INSERT INTO device_label VALUES(2,'1','2022-07-13 00:30:55','2022-07-13 00:30:55');
CREATE TABLE IF NOT EXISTS `device_label_data` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `label_id` INT(11),
  `device_id` INT(11)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE IF NOT EXISTS `device_status` (
  `status_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `device_id` INT(11) NOT NULL,
  `status` INT(4) NOT NULL,
  `time_out` INT(11) NOT NULL,
  `up_time` INT(11),
  `down_time` INT(11),
  `last_data_update_time` INT(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO device_status VALUES(2,1,0,30,1657952039,1657952125,0);
CREATE TABLE IF NOT EXISTS `link_info` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255),
  `mark` VARCHAR(255),
  `created_at` DATETIME,
  `updated_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO link_info VALUES(1,'串口','serial','2022-07-16 22:55:59','2022-07-16 22:55:59');
INSERT INTO link_info VALUES(2,'TCP','TCP','2022-07-16 23:11:44','2022-07-16 23:11:44');
INSERT INTO link_info VALUES(3,'UDP','UDP','2022-07-16 23:11:53','2022-07-16 23:11:53');
CREATE TABLE IF NOT EXISTS `link_net` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255),
  `mark` VARCHAR(255),
  `remote_type` INT(4),
  `remote_addr` VARCHAR(255),
  `remote_port` VARCHAR(255),
  `timeout` INT(11),
  `created_at` DATETIME,
  `updated_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO link_net VALUES(1,'本地连接1','local',0,'127.0.0.1','65532',30,'2022-07-16 23:04:28','2022-07-16 23:04:28');
CREATE TABLE IF NOT EXISTS `link_serial` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255),
  `mark` VARCHAR(255),
  `serial_name` VARCHAR(255),
  `serial_baund` INT(11),
  `serial_parity` VARCHAR(1),
  `serial_data` INT(4),
  `serial_stop` INT(4),
  `created_at` DATETIME,
  `updated_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO link_serial VALUES(1,'com1','com1','com1',115200,'0',8,1,'2022-07-16 22:52:34','2022-07-16 22:53:50');
CREATE TABLE IF NOT EXISTS `mqtt_msg_record` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `device_sn` VARCHAR(255),
  `topic_id` INT(11),
  `client_name` VARCHAR(255),
  `client_id` VARCHAR(255),
  `qos` INT(4),
  `payload` TEXT,
  `creat_time` INT(10) NOT NULL,
  CONSTRAINT `mqtt_msg_record_ibfk_1` FOREIGN KEY (`topic_id`) REFERENCES `mqtt_topic_record` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO mqtt_msg_record VALUES(1,NULL,1,'dfdf','dfds',0,'fdfdfdfd',1623077375);
INSERT INTO mqtt_msg_record VALUES(3,NULL,1,'1','af15c8c7-b148-46da-9fde-4de34ffc22941623080724757',0,replace('{\n`timestamp`:1601196762389, \n`messageId`:"1",\n`sn`:"1",\n`properties`:{`temperature`:30,`humidity`:32} \n}','\n',char(10)),1623080980);
INSERT INTO mqtt_msg_record VALUES(4,NULL,1,'1','0776d641026e46949eae92920f4b8d89',0,'3564',1623854067);
INSERT INTO mqtt_msg_record VALUES(5,NULL,2,'1','96a64031d74e4179bcb08b52226c6cdd',0,'dfdfdf',1627652266);
INSERT INTO mqtt_msg_record VALUES(6,NULL,2,'1','96a64031d74e4179bcb08b52226c6cdd',0,'dfdfdf',1627652268);
INSERT INTO mqtt_msg_record VALUES(7,NULL,2,'1','7aedd36bf90e494cb1f36d45256042aa',0,'',1636380354);
CREATE TABLE IF NOT EXISTS `mqtt_status` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255),
  `clientId` VARCHAR(255),
  `status` INT(4),
  `userName` VARCHAR(255),
  `created_at` DATETIME,
  `updated_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO mqtt_status VALUES(1,'test','a0d1cf11430efe16c0ea4d69197d34be',0,'test','2022-06-27 23:24:19','2022-06-27 23:24:19');
INSERT INTO mqtt_status VALUES(2,'127.0.0.1:51195','MQTT_FX_Client',0,'1','2022-07-15 22:43:23','2022-07-16 14:15:25');
CREATE TABLE IF NOT EXISTS `mqtt_topic` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255),
  `clientId` VARCHAR(255),
  `topic` VARCHAR(255),
  `qos` INT(4),
  `retainAsPub` INT(1),
  `retainHandle` VARCHAR(1),
  `created_at` DATETIME,
  `updated_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO mqtt_topic VALUES(1,'status','a0d1cf11430efe16c0ea4d69197d34be','/device/status',0,NULL,NULL,'2022-06-27 23:24:19','2022-06-27 23:24:19');
CREATE TABLE IF NOT EXISTS `mqtt_topic_record` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255),
  `topic` VARCHAR(255),
  `qos` INT(4),
  `remark` VARCHAR(255),
  `creat_time` INT(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO mqtt_topic_record VALUES(1,'消息测试','/msg',0,'',1623077140);
INSERT INTO mqtt_topic_record VALUES(2,'productId/deviceId/properties/report','productId/deviceId/properties/report',0,'',1627648586);
INSERT INTO mqtt_topic_record VALUES(3,'/device/1','/device/1',0,'',1634571744);
CREATE TABLE IF NOT EXISTS `sys_auth_rule` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `pid` INT(10) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `icon` VARCHAR(300) NOT NULL,
  `condition` VARCHAR(255) NOT NULL,
  `remark` VARCHAR(255) NOT NULL,
  `menu_type` INT(3) NOT NULL,
  `weigh` INT(11) NOT NULL,
  `is_hide` INT(3) NOT NULL,
  `always_show` INT(3),
  `path` VARCHAR(100) NOT NULL,
  `jump_path` VARCHAR(100),
  `component` VARCHAR(100) NOT NULL,
  `is_link` INT(3) NOT NULL,
  `module_type` VARCHAR(30) NOT NULL,
  `model_id` INT(10) NOT NULL,
  `is_iframe` INT(3) NOT NULL,
  `is_cached` INT(3) NOT NULL,
  `redirect` VARCHAR(255) NOT NULL,
  `is_affix` INT(3) NOT NULL,
  `link_url` VARCHAR(500) NOT NULL,
  `created_at` DATETIME,
  `updated_at` DATETIME,
  `deleted_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_auth_rule VALUES(1,0,'api/v1/system/auth','权限管理','ele-Stamp','','',0,30,0,0,'/system/auth',NULL,'layout/routerView/parent',0,'',0,0,1,'0',0,'','2022-03-24 15:03:37','2022-04-14 16:29:19',NULL);
INSERT INTO sys_auth_rule VALUES(2,1,'api/v1/system/auth/menuList','菜单管理','ele-Calendar','','',1,0,0,0,'/system/auth/menuList',NULL,'system/menu/index',0,'',0,0,1,'',0,'','2022-03-24 17:24:13','2022-03-29 10:54:49',NULL);
INSERT INTO sys_auth_rule VALUES(3,2,'api/v1/system/menu/add','添加菜单','','','',2,0,0,0,'',NULL,'',0,'',0,0,1,'',0,'','2022-03-29 16:48:43','2022-03-29 17:05:19',NULL);
INSERT INTO sys_auth_rule VALUES(4,2,'api/v1/system/menu/update','修改菜单','','','',2,0,0,0,'',NULL,'',0,'',0,0,1,'',0,'','2022-03-29 17:04:25','2022-03-29 18:11:36',NULL);
INSERT INTO sys_auth_rule VALUES(10,1,'api/v1/system/role/list','角色管理','iconfont icon-juxingkaobei','','',1,0,0,0,'/system/auth/roleList',NULL,'system/role/index',0,'',0,0,1,'',0,'','2022-03-29 18:15:03','2022-03-30 10:25:34',NULL);
INSERT INTO sys_auth_rule VALUES(11,2,'api/v1/system/menu/delete','删除菜单','','','',2,0,0,0,'',NULL,'',0,'',0,0,1,'',0,'','2022-04-06 14:49:10','2022-04-06 14:49:17',NULL);
INSERT INTO sys_auth_rule VALUES(12,10,'api/v1/system/role/add','添加角色','','','',2,0,0,0,'',NULL,'',0,'',0,0,1,'',0,'','2022-04-06 14:49:46','2022-04-06 14:49:46',NULL);
INSERT INTO sys_auth_rule VALUES(13,10,'/api/v1/system/role/edit','修改角色','','','',2,0,0,0,'',NULL,'',0,'',0,0,1,'',0,'','2022-04-06 14:50:08','2022-04-06 14:50:08',NULL);
INSERT INTO sys_auth_rule VALUES(14,10,'/api/v1/system/role/delete','删除角色','','','',2,0,0,0,'',NULL,'',0,'',0,0,1,'',0,'','2022-04-06 14:50:22','2022-04-06 14:50:22',NULL);
INSERT INTO sys_auth_rule VALUES(15,1,'api/v1/system/dept/list','部门管理','iconfont icon-siweidaotu','','',1,0,0,0,'/system/auth/deptList',NULL,'system/dept/index',0,'',0,0,1,'',0,'','2022-04-06 14:52:23','2022-04-07 22:59:20',NULL);
INSERT INTO sys_auth_rule VALUES(16,17,'aliyun','阿里云-iframe','iconfont icon-diannao1','','',1,0,0,0,'/demo/outLink/aliyun',NULL,'layout/routerView/iframes',1,'',0,1,1,'',0,'https://www.aliyun.com/daily-act/ecs/activity_selection?spm=5176.8789780.J_3965641470.5.568845b58KHj51','2022-04-06 17:26:29','2022-04-07 15:27:17','2022-06-22 21:24:43');
INSERT INTO sys_auth_rule VALUES(17,0,'outLink','外链测试','iconfont icon-zhongduancanshu','','',0,20,0,0,'/demo/outLink',NULL,'layout/routerView/parent',0,'',0,0,1,'',0,'','2022-04-07 15:20:51','2022-04-14 16:29:07','2022-06-22 21:24:43');
INSERT INTO sys_auth_rule VALUES(18,17,'tenyun','腾讯云-外链','iconfont icon-shouye_dongtaihui','','',1,0,0,0,'/demo/outLink/tenyun',NULL,'layout/routerView/link',1,'',0,0,1,'',0,'https://cloud.tencent.com/act/new?cps_key=20b1c3842f74986b2894e2c5fcde7ea2&fromSource=gwzcw.3775555.3775555.3775555&utm_id=gwzcw.3775555.3775555.3775555&utm_medium=cpc','2022-04-07 15:23:52','2022-04-07 15:27:25','2022-06-22 21:24:43');
INSERT INTO sys_auth_rule VALUES(19,15,'api/v1/system/dept/add','添加部门','','','',2,0,0,0,'',NULL,'',0,'',0,0,1,'',0,'','2022-04-07 22:56:39','2022-04-07 22:56:39',NULL);
INSERT INTO sys_auth_rule VALUES(20,15,'api/v1/system/dept/edit','修改部门','','','',2,0,0,0,'',NULL,'',0,'',0,0,1,'',0,'','2022-04-07 22:57:00','2022-04-07 22:57:00',NULL);
INSERT INTO sys_auth_rule VALUES(21,15,'api/v1/system/dept/delete','删除部门','','','',2,0,0,0,'',NULL,'',0,'',0,0,1,'',0,'','2022-04-07 22:57:30','2022-04-07 22:57:30',NULL);
INSERT INTO sys_auth_rule VALUES(22,1,'api/v1/system/post/list','岗位管理','iconfont icon-neiqianshujuchucun','','',1,0,0,0,'/system/auth/postList',NULL,'system/post/index',0,'',0,0,1,'',0,'','2022-04-07 22:58:46','2022-04-09 14:26:15',NULL);
INSERT INTO sys_auth_rule VALUES(23,22,'api/v1/system/post/add','添加岗位','','','',2,0,0,0,'',NULL,'',0,'',0,0,1,'',0,'','2022-04-09 14:14:49','2022-04-09 14:14:49',NULL);
INSERT INTO sys_auth_rule VALUES(24,22,'api/v1/system/post/edit','修改岗位','','','',2,0,0,0,'',NULL,'',0,'',0,0,1,'',0,'','2022-04-09 14:15:25','2022-04-09 14:15:25',NULL);
INSERT INTO sys_auth_rule VALUES(25,22,'api/v1/system/post/delete','删除岗位','','','',2,0,0,0,'',NULL,'',0,'',0,0,1,'',0,'','2022-04-09 14:15:47','2022-04-09 14:15:47',NULL);
INSERT INTO sys_auth_rule VALUES(26,1,'api/v1/system/user/list','用户管理','ele-User','','',1,0,0,0,'/system/auth/user/list',NULL,'system/user/index',0,'',0,0,1,'',0,'','2022-04-09 14:19:10','2022-04-09 14:19:58',NULL);
INSERT INTO sys_auth_rule VALUES(27,0,'api/v1/system/dict','系统配置','iconfont icon-shuxingtu','','',0,40,0,0,'/system/dict',NULL,'layout/routerView/parent',0,'',0,0,1,'654',0,'','2022-04-14 16:28:51','2022-04-18 14:40:56',NULL);
INSERT INTO sys_auth_rule VALUES(28,27,'api/v1/system/dict/type/list','字典管理','iconfont icon-crew_feature','','',1,0,0,0,'/system/dict/type/list',NULL,'system/dict/index',0,'',0,0,1,'',0,'','2022-04-14 16:32:10','2022-04-16 17:02:50',NULL);
INSERT INTO sys_auth_rule VALUES(29,27,'api/v1/system/dict/dataList','字典数据管理','iconfont icon-putong','','',1,0,1,0,'/system/dict/data/list/:dictType',NULL,'system/dict/dataList',0,'',0,0,1,'',0,'','2022-04-18 12:04:17','2022-04-18 14:58:43',NULL);
INSERT INTO sys_auth_rule VALUES(30,27,'api/v1/system/config/list','参数管理','ele-Cherry','','',1,0,0,0,'/system/config/list',NULL,'system/config/index',0,'',0,0,1,'',0,'','2022-04-18 21:05:20','2022-04-18 21:13:19',NULL);
INSERT INTO sys_auth_rule VALUES(31,0,'api/v1/system/monitor','系统监控','iconfont icon-xuanzeqi','','',0,30,0,0,'/system/monitor',NULL,'layout/routerView/parent',0,'',0,0,1,'',0,'','2022-04-19 10:40:19','2022-04-19 10:44:38',NULL);
INSERT INTO sys_auth_rule VALUES(32,31,'api/v1/system/monitor/server','服务监控','iconfont icon-shuju','','',1,0,0,0,'/system/monitor/server',NULL,'system/monitor/server/index',0,'',0,0,1,'',0,'','2022-04-19 10:43:32','2022-04-19 10:44:47',NULL);
INSERT INTO sys_auth_rule VALUES(33,31,'api/swagger','api文档','iconfont icon--chaifenlie','','',1,0,0,0,'/system/swagger',NULL,'layout/routerView/iframes',1,'',0,1,1,'',0,'http://localhost:8201/swagger','2022-04-21 09:23:43','2022-04-21 11:19:49',NULL);
INSERT INTO sys_auth_rule VALUES(34,31,'api/v1/system/loginLog/list','登录日志','ele-Clock','','',1,0,0,0,'/system/monitor/loginLog',NULL,'system/monitor/loginLog/index',0,'',0,0,1,'',0,'','2022-06-08 16:04:05','2022-06-08 16:04:05',NULL);
INSERT INTO sys_auth_rule VALUES(35,108,'api/v1/system/gen/list','代码生成','iconfont icon-shuju1','','',1,0,0,0,'/system/gen/list',NULL,'system/gen/index',0,'',0,0,1,'',0,'','2022-06-11 23:36:44','2022-06-22 21:27:30',NULL);
INSERT INTO sys_auth_rule VALUES(36,35,'api/v1/system/gen/edit','表信息修改','','','',1,0,1,0,'/system/gen/editTable',NULL,'system/gen/editTable',0,'',0,0,1,'',0,'','2022-06-12 14:34:26','2022-06-12 14:38:51',NULL);
INSERT INTO sys_auth_rule VALUES(37,108,'api/v1/system/job/list','定时任务','iconfont icon-wenducanshu-05','','',1,0,0,0,'/system/job/list',NULL,'system/job/index',0,'',0,0,1,'',0,'','2022-06-19 10:33:55','2022-06-22 21:27:40',NULL);
INSERT INTO sys_auth_rule VALUES(42,0,'device/deviceInfo','设备管理','iconfont icon-crew_feature','','',0,0,0,1,'/device/deviceInfo','','',0,'sys_admin',0,0,0,'',0,'','2022-06-22 02:20:12','2022-06-22 21:25:29',NULL);
INSERT INTO sys_auth_rule VALUES(43,42,'api/v1/device/deviceInfo/list','设备信息','iconfont icon-diannao','','',1,0,0,1,'/device/deviceInfo/list','','device/info/index',0,'sys_admin',0,0,0,'',0,'','2022-06-22 02:20:12','2022-06-22 21:40:06',NULL);
INSERT INTO sys_auth_rule VALUES(44,43,'api/v1/device/deviceInfo/get','设备信息查询','','','设备信息查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'','2022-06-22 02:20:12','2022-06-22 02:20:12',NULL);
INSERT INTO sys_auth_rule VALUES(45,43,'api/v1/device/deviceInfo/add','设备信息添加','','','设备信息添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'','2022-06-22 02:20:12','2022-06-22 02:20:12',NULL);
INSERT INTO sys_auth_rule VALUES(46,43,'api/v1/device/deviceInfo/edit','设备信息修改','','','设备信息修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'','2022-06-22 02:20:12','2022-06-22 02:20:12',NULL);
INSERT INTO sys_auth_rule VALUES(47,43,'api/v1/device/deviceInfo/delete','设备信息删除','','','设备信息删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'','2022-06-22 02:20:12','2022-06-22 02:20:12',NULL);
INSERT INTO sys_auth_rule VALUES(63,0,'device/deviceLabel','设备标签管理','form','','设备标签管理',0,0,0,0,'/device/deviceLabel','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,'2022-06-22 11:24:38');
INSERT INTO sys_auth_rule VALUES(64,42,'api/v1/device/deviceLabel/index','设备标签','iconfont icon-bolangneng','','',1,0,0,0,'/device/deviceLabel/list','','device/label/index',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-06-22 21:40:20',NULL);
INSERT INTO sys_auth_rule VALUES(65,64,'api/v1/device/deviceLabel/get','设备标签查询','','','设备标签查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(66,64,'api/v1/device/deviceLabel/add','设备标签添加','','','设备标签添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(67,64,'api/v1/device/deviceLabel/edit','设备标签修改','','','设备标签修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(68,64,'api/v1/device/deviceLabel/delete','设备标签删除','','','设备标签删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(72,0,'device/deviceStatus','设备状态管理','form','','设备状态管理',0,0,0,0,'/device/deviceStatus','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,'2022-06-22 21:01:57');
INSERT INTO sys_auth_rule VALUES(73,42,'api/v1/device/deviceStatus/index','设备状态','iconfont icon-diqiu','','',1,0,0,0,'/device/deviceStatus/list','','device/status/index',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-06-22 21:40:38',NULL);
INSERT INTO sys_auth_rule VALUES(74,73,'api/v1/device/deviceStatus/get','设备状态查询','','','设备状态查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(75,73,'api/v1/device/deviceStatus/add','设备状态添加','','','设备状态添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(76,73,'api/v1/device/deviceStatus/edit','设备状态修改','','','设备状态修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(77,73,'api/v1/device/deviceStatus/delete','设备状态删除','','','设备状态删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(78,0,'device/deviceKind','设备种类管理','form','','设备种类管理',0,0,0,0,'/device/deviceKind','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,'2022-06-22 21:02:36');
INSERT INTO sys_auth_rule VALUES(79,42,'api/v1/device/deviceKind/index','设备模板','ele-Collection','','',1,0,0,0,'/device/deviceKind/list','','device/kind/index',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-06-22 21:42:09',NULL);
INSERT INTO sys_auth_rule VALUES(80,79,'api/v1/device/deviceKind/get','设备种类查询','','','设备种类查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(81,79,'api/v1/device/deviceKind/add','设备种类添加','','','设备种类添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(82,79,'api/v1/device/deviceKind/edit','设备种类修改','','','设备种类修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(83,79,'api/v1/device/deviceKind/delete','设备种类删除','','','设备种类删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(84,0,'device/deviceGroup','设备分组管理','form','','设备分组管理',0,0,0,0,'/device/deviceGroup','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,'2022-06-22 21:02:49');
INSERT INTO sys_auth_rule VALUES(85,42,'api/v1/device/deviceGroup/index','设备分组','iconfont icon-biaodan','','',1,0,0,0,'/device/deviceGroup/list','','device/group/index',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-06-22 21:41:00',NULL);
INSERT INTO sys_auth_rule VALUES(86,85,'api/v1/device/deviceGroup/get','设备分组查询','','','设备分组查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(87,85,'api/v1/device/deviceGroup/add','设备分组添加','','','设备分组添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(88,85,'api/v1/device/deviceGroup/edit','设备分组修改','','','设备分组修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(89,85,'api/v1/device/deviceGroup/delete','设备分组删除','','','设备分组删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(90,0,'device/deviceCategoty','设备类别管理','form','','设备类别管理',0,0,0,0,'/device/deviceCategoty','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,'2022-06-22 21:02:46');
INSERT INTO sys_auth_rule VALUES(91,42,'api/v1/device/deviceCategoty/index','属性类别','iconfont icon-yangan','','',1,0,1,0,'/device/deviceCategoty/list','','device/categoty/index',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-06-22 21:43:42',NULL);
INSERT INTO sys_auth_rule VALUES(92,91,'api/v1/device/deviceCategoty/get','设备类别查询','','','设备类别查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(93,91,'api/v1/device/deviceCategoty/add','设备类别添加','','','设备类别添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(94,91,'api/v1/device/deviceCategoty/edit','设备类别修改','','','设备类别修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(95,91,'api/v1/device/deviceCategoty/delete','设备类别删除','','','设备类别删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(96,0,'device/deviceCategoryData','设备类别数据管理','form','','设备类别数据管理',0,0,0,0,'/device/deviceCategoryData','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,'2022-06-22 21:02:44');
INSERT INTO sys_auth_rule VALUES(97,42,'api/v1/device/deviceCategoryData/index','属性数据','iconfont icon-ico_shuju','','',1,0,1,0,'/device/deviceCategoryData/list','','device/categoryData/index',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-06-22 21:45:58',NULL);
INSERT INTO sys_auth_rule VALUES(98,97,'api/v1/device/deviceCategoryData/get','设备类别数据查询','','','设备类别数据查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(99,97,'api/v1/device/deviceCategoryData/add','设备类别数据添加','','','设备类别数据添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(100,97,'api/v1/device/deviceCategoryData/edit','设备类别数据修改','','','设备类别数据修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(101,97,'api/v1/device/deviceCategoryData/delete','设备类别数据删除','','','设备类别数据删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(102,0,'device/deviceLabelData','设备标签数据管理','form','','设备标签数据管理',0,0,0,0,'/device/deviceLabelData','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,'2022-06-22 21:02:42');
INSERT INTO sys_auth_rule VALUES(103,42,'api/v1/device/deviceLabelData/index','关联标签','iconfont icon-dongtai','','',1,0,1,0,'/device/deviceLabelData/list','','device/labelData/index',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-06-22 21:45:22',NULL);
INSERT INTO sys_auth_rule VALUES(104,103,'api/v1/device/deviceLabelData/get','设备标签数据查询','','','设备标签数据查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(105,103,'api/v1/device/deviceLabelData/add','设备标签数据添加','','','设备标签数据添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(106,103,'api/v1/device/deviceLabelData/edit','设备标签数据修改','','','设备标签数据修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(107,103,'api/v1/device/deviceLabelData/delete','设备标签数据删除','','','设备标签数据删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(108,0,'api/v1/system/tool','系统工具','iconfont icon-zhongyingwenyuyan','','',0,0,0,0,'/system/tool','','',0,'',0,0,1,'',0,'','2022-06-22 21:26:21','2022-06-22 21:27:16',NULL);
INSERT INTO sys_auth_rule VALUES(109,43,'api/v1/device/deviceData/get','设备详细信息','','','',1,0,1,0,'/device/deviceInfo/detail','','device/info/detail',0,'',0,0,1,'',0,'','2022-06-23 23:55:32','2022-06-23 23:58:27',NULL);
INSERT INTO sys_auth_rule VALUES(110,43,'api/v1/device/deviceData/history','设备历史数据','iconfont icon-putong','','',1,0,1,0,'/device/deviceInfo/history','','device/info/history',0,'',0,0,1,'',0,'','2022-06-25 18:15:08','2022-06-25 18:15:08',NULL);
INSERT INTO sys_auth_rule VALUES(111,0,'mqtt','MQTT管理','iconfont icon-diannao','','',0,0,0,0,'/mqtt','','',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-06-27 23:39:46',NULL);
INSERT INTO sys_auth_rule VALUES(112,111,'api/v1/mqtt/mqttTopicRecord/index','Topic管理','iconfont icon-bolangneng','','',1,0,0,0,'/mqtt/mqttTopicRecord/list','','mqtt/mqttTopicRecord/index',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-06-27 23:39:36',NULL);
INSERT INTO sys_auth_rule VALUES(113,112,'api/v1/test/mqttTopicRecord/get','MQTT需要进行记录的Topic查询','','','MQTT需要进行记录的Topic查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(114,112,'api/v1/test/mqttTopicRecord/add','MQTT需要进行记录的Topic添加','','','MQTT需要进行记录的Topic添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(115,112,'api/v1/test/mqttTopicRecord/edit','MQTT需要进行记录的Topic修改','','','MQTT需要进行记录的Topic修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(116,112,'api/v1/test/mqttTopicRecord/delete','MQTT需要进行记录的Topic删除','','','MQTT需要进行记录的Topic删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(117,0,'mqtt/mqttMsgRecord','MQTT的消息记录管理','form','','MQTT的消息记录管理',0,0,0,0,'/mqtt/mqttMsgRecord','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,'2022-06-27 23:40:03');
INSERT INTO sys_auth_rule VALUES(118,111,'api/v1/mqtt/mqttMsgRecord/list','消息管理','iconfont icon-neiqianshujuchucun','','',1,0,0,0,'/mqtt/mqttMsgRecord/list','','mqtt/mqttMsgRecord/index',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-06-27 23:41:18',NULL);
INSERT INTO sys_auth_rule VALUES(119,118,'api/v1/mqtt/mqttMsgRecord/get','MQTT的消息记录查询','','','MQTT的消息记录查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(120,118,'api/v1/mqtt/mqttMsgRecord/add','MQTT的消息记录添加','','','MQTT的消息记录添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(121,118,'api/v1/mqtt/mqttMsgRecord/edit','MQTT的消息记录修改','','','MQTT的消息记录修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(122,118,'api/v1/mqtt/mqttMsgRecord/delete','MQTT的消息记录删除','','','MQTT的消息记录删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(123,0,'mqtt/mqttStatus','MQTT客户端连接状态管理','form','','MQTT客户端连接状态管理',0,0,0,0,'/mqtt/mqttStatus','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,'2022-07-02 23:51:59');
INSERT INTO sys_auth_rule VALUES(124,111,'api/v1/mqtt/mqttStatus/index','连接状态','iconfont icon-bolangneng','','',1,0,0,0,'/mqtt/mqttStatus/list','','mqtt/mqttStatus/index',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-07-02 23:52:15',NULL);
INSERT INTO sys_auth_rule VALUES(125,124,'api/v1/mqtt/mqttStatus/get','MQTT客户端连接状态查询','','','MQTT客户端连接状态查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(126,124,'api/v1/mqtt/mqttStatus/add','MQTT客户端连接状态添加','','','MQTT客户端连接状态添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(127,124,'api/v1/mqtt/mqttStatus/edit','MQTT客户端连接状态修改','','','MQTT客户端连接状态修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(128,124,'api/v1/mqtt/mqttStatus/delete','MQTT客户端连接状态删除','','','MQTT客户端连接状态删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(129,0,'mqtt/mqttTopic','MQTT客户端的订阅信息管理','form','','MQTT客户端的订阅信息管理',0,0,0,0,'/mqtt/mqttTopic','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,'2022-07-02 23:52:02');
INSERT INTO sys_auth_rule VALUES(130,111,'api/v1/mqtt/mqttTopic/index','订阅信息','ele-Basketball','','',1,0,1,0,'/mqtt/mqttTopic/list','','mqtt/mqttTopic/index',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-07-02 23:51:55',NULL);
INSERT INTO sys_auth_rule VALUES(131,130,'api/v1/mqtt/mqttTopic/get','MQTT客户端的订阅信息查询','','','MQTT客户端的订阅信息查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(132,130,'api/v1/mqtt/mqttTopic/add','MQTT客户端的订阅信息添加','','','MQTT客户端的订阅信息添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(133,130,'api/v1/mqtt/mqttTopic/edit','MQTT客户端的订阅信息修改','','','MQTT客户端的订阅信息修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(134,130,'api/v1/mqtt/mqttTopic/delete','MQTT客户端的订阅信息删除','','','MQTT客户端的订阅信息删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(137,0,'link/linkInfo','连接管理','iconfont icon-dianhua','','',0,0,0,0,'/link/linkInfo','','',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-07-16 15:54:15',NULL);
INSERT INTO sys_auth_rule VALUES(138,137,'api/v1/link/linkInfo/index','连接列表','iconfont icon-wenducanshu-05','','',1,0,0,0,'/link/linkInfo/list','','link/linkInfo/index',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-07-16 15:55:40',NULL);
INSERT INTO sys_auth_rule VALUES(139,138,'api/v1/link/linkInfo/get','连接信息管理查询','','','连接信息管理查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(140,138,'api/v1/link/linkInfo/add','连接信息管理添加','','','连接信息管理添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(141,138,'api/v1/link/linkInfo/edit','连接信息管理修改','','','连接信息管理修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(142,138,'api/v1/link/linkInfo/delete','连接信息管理删除','','','连接信息管理删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(143,0,'link/linkSerial','串口连接信息管理管理','form','','串口连接信息管理管理',0,0,0,0,'/link/linkSerial','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,'2022-07-16 16:04:45');
INSERT INTO sys_auth_rule VALUES(144,137,'api/v1/link/linkSerial/index','串口列表','iconfont icon-diannao101','','',1,0,0,0,'/link/linkSerial/list','','link/linkSerial/index',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-07-16 16:05:02',NULL);
INSERT INTO sys_auth_rule VALUES(145,144,'api/v1/link/linkSerial/get','串口连接信息管理查询','','','串口连接信息管理查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(146,144,'api/v1/link/linkSerial/add','串口连接信息管理添加','','','串口连接信息管理添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(147,144,'api/v1/link/linkSerial/edit','串口连接信息管理修改','','','串口连接信息管理修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(148,144,'api/v1/link/linkSerial/delete','串口连接信息管理删除','','','串口连接信息管理删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(149,0,'link/linkNet','网络连接信息管理管理','form','','网络连接信息管理管理',0,0,0,0,'/link/linkNet','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,'2022-07-16 16:04:42');
INSERT INTO sys_auth_rule VALUES(150,137,'api/v1/link/linkNet/index','网络列表','iconfont icon-diqiu1','','',1,0,0,0,'/link/linkNet/list','','link/linkNet/index',0,'sys_admin',0,0,0,'',0,'',NULL,'2022-07-16 16:05:20',NULL);
INSERT INTO sys_auth_rule VALUES(151,150,'api/v1/link/linkNet/get','网络连接信息管理查询','','','网络连接信息管理查询',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(152,150,'api/v1/link/linkNet/add','网络连接信息管理添加','','','网络连接信息管理添加',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(153,150,'api/v1/link/linkNet/edit','网络连接信息管理修改','','','网络连接信息管理修改',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
INSERT INTO sys_auth_rule VALUES(154,150,'api/v1/link/linkNet/delete','网络连接信息管理删除','','','网络连接信息管理删除',2,0,1,1,'','','',0,'sys_admin',0,0,0,'',0,'',NULL,NULL,NULL);
CREATE TABLE IF NOT EXISTS `sys_config` (
  `config_id` INT(10) NOT NULL,
  `config_name` VARCHAR(100),
  `config_key` VARCHAR(100),
  `config_value` VARCHAR(500),
  `config_type` INT(1),
  `create_by` INT(10),
  `update_by` INT(10),
  `remark` VARCHAR(500),
  `created_at` DATETIME,
  `updated_at` DATETIME,
  PRIMARY KEY (`config_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_config VALUES(1,'文件上传-文件大小','sys.uploadFile.fileSize','50M',1,31,31,'文件上传大小限制',NULL,'2022-06-08 17:02:29');
INSERT INTO sys_config VALUES(2,'文件上传-文件类型','sys.uploadFile.fileType','doc,docx,zip,xls,xlsx,rar,jpg,jpeg,gif,npm,png',1,31,31,'文件上传后缀类型限制',NULL,NULL);
INSERT INTO sys_config VALUES(3,'图片上传-图片类型','sys.uploadFile.imageType','jpg,jpeg,gif,npm,png',1,31,0,'图片上传后缀类型限制',NULL,NULL);
INSERT INTO sys_config VALUES(4,'图片上传-图片大小','sys.uploadFile.imageSize','50M',1,31,31,'图片上传大小限制',NULL,NULL);
INSERT INTO sys_config VALUES(11,'静态资源','static.resource','/',1,2,0,'',NULL,NULL);
CREATE TABLE IF NOT EXISTS `sys_dept` (
  `dept_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `parent_id` INT(20),
  `ancestors` VARCHAR(50),
  `dept_name` VARCHAR(30),
  `order_num` INT(11),
  `leader` VARCHAR(20),
  `phone` VARCHAR(11),
  `email` VARCHAR(50),
  `status` INT(3),
  `created_by` INT(20),
  `updated_by` INT(20),
  `created_at` DATETIME,
  `updated_at` DATETIME,
  `deleted_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_dept VALUES(100,0,'0','云南科技',0,'dwx','15888888888','dwx@qq.com',1,0,31,'2021-07-13 15:56:52','2022-06-08 16:36:34',NULL);
INSERT INTO sys_dept VALUES(101,100,'0,100','昆明总公司',1,'若依','15888888888','ry@qq.com',1,0,31,'2021-07-13 15:56:52','2022-06-08 16:36:45',NULL);
INSERT INTO sys_dept VALUES(102,100,'0,100','长沙分公司',2,'若依','15888888888','ry@qq.com',1,0,NULL,'2021-07-13 15:56:52','2021-07-13 15:56:52',NULL);
INSERT INTO sys_dept VALUES(103,101,'0,100,101','研发部门',1,'若依','15888888888','ry@qq.com',1,0,NULL,'2021-07-13 15:56:52','2021-07-13 15:56:52',NULL);
INSERT INTO sys_dept VALUES(104,101,'0,100,101','市场部门',2,'若依','15888888888','ry@qq.com',1,0,31,'2021-07-13 15:56:52','2021-11-04 09:16:38',NULL);
INSERT INTO sys_dept VALUES(105,101,'0,100,101','测试部门',3,'若依','15888888888','ry@qq.com',1,0,NULL,'2021-07-13 15:56:52','2021-07-13 15:56:52',NULL);
INSERT INTO sys_dept VALUES(106,101,'0,100,101','财务部门',4,'若依','15888888888','ry@qq.com',1,0,NULL,'2021-07-13 15:56:52','2021-07-13 15:56:52',NULL);
INSERT INTO sys_dept VALUES(107,101,'0,100,101','运维部门',5,'若依','15888888888','ry@qq.com',1,0,NULL,'2021-07-13 15:56:52','2021-07-13 15:56:52',NULL);
INSERT INTO sys_dept VALUES(108,102,'0,100,102','市场部门',1,'若依','15888888888','ry@qq.com',1,0,NULL,'2021-07-13 15:56:52','2021-07-13 15:56:52',NULL);
INSERT INTO sys_dept VALUES(109,102,'0,100,102','财务部门',2,'若依','15888888888','ry@qq.com',1,0,NULL,'2021-07-13 15:56:52','2021-07-13 15:56:52',NULL);
INSERT INTO sys_dept VALUES(200,100,'','大数据',1,'小刘','18888888888','liou@qq.com',1,0,NULL,'2021-07-13 15:56:52','2021-07-13 15:56:52',NULL);
INSERT INTO sys_dept VALUES(201,100,'','开发',1,'老李','18888888888','li@qq.com',0,31,NULL,'2021-07-13 15:56:52','2022-04-07 22:35:21',NULL);
INSERT INTO sys_dept VALUES(202,108,'','外勤',1,'小a','18888888888','aa@qq.com',1,0,NULL,'2021-07-13 15:56:52','2021-07-13 15:56:52',NULL);
INSERT INTO sys_dept VALUES(203,108,'','行政',0,'aa','18888888888','aa@qq.com',0,0,NULL,'2021-07-13 15:56:52','2021-07-13 15:56:52',NULL);
CREATE TABLE IF NOT EXISTS `sys_dict_data` (
  `dict_code` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `dict_sort` INT(11),
  `dict_label` VARCHAR(100),
  `dict_value` VARCHAR(100),
  `dict_type` VARCHAR(100),
  `dict_mark` VARCHAR(100),
  `css_class` VARCHAR(100),
  `list_class` VARCHAR(100),
  `is_default` INT(1),
  `status` INT(1),
  `create_by` INT(20),
  `update_by` INT(20),
  `remark` VARCHAR(500),
  `created_at` DATETIME,
  `updated_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_dict_data VALUES(1,0,'男','1','sys_user_sex',NULL,'','',0,1,31,2,'备注信息','2022-04-18 16:46:22',NULL);
INSERT INTO sys_dict_data VALUES(2,0,'女','2','sys_user_sex',NULL,'','',0,1,31,31,'备注信息',NULL,NULL);
INSERT INTO sys_dict_data VALUES(3,0,'保密','0','sys_user_sex',NULL,'','',1,1,31,31,'备注信息',NULL,NULL);
INSERT INTO sys_dict_data VALUES(24,0,'频道页','1','cms_category_type',NULL,'','',0,1,31,31,'作为频道页，不可作为栏目发布文章，可添加下级分类',NULL,'2021-07-21 10:54:22');
INSERT INTO sys_dict_data VALUES(25,0,'发布栏目','2','cms_category_type',NULL,'','',0,1,31,31,'作为发布栏目，可添加文章',NULL,'2021-07-21 10:54:22');
INSERT INTO sys_dict_data VALUES(26,0,'跳转栏目','3','cms_category_type',NULL,'','',0,1,31,31,'不直接发布内容，用于跳转页面',NULL,'2021-07-21 10:54:22');
INSERT INTO sys_dict_data VALUES(27,0,'单页栏目','4','cms_category_type',NULL,'','',0,1,31,31,'单页面模式，分类直接显示为文章',NULL,'2021-07-21 10:54:22');
INSERT INTO sys_dict_data VALUES(28,0,'正常','0','sys_job_status',NULL,'','default',1,1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(29,0,'暂停','1','sys_job_status',NULL,'','default',0,1,31,31,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(30,0,'默认','DEFAULT','sys_job_group',NULL,'','default',1,1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(31,0,'系统','SYSTEM','sys_job_group',NULL,'','default',0,1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(32,0,'成功','1','admin_login_status',NULL,'','default',0,1,31,31,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(33,0,'失败','0','admin_login_status',NULL,'','default',0,1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(34,0,'成功','1','sys_oper_log_status',NULL,'','default',0,1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(35,0,'失败','0','sys_oper_log_status',NULL,'','default',0,1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(36,0,'重复执行','1','sys_job_policy',NULL,'','default',1,1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(37,0,'执行一次','2','sys_job_policy',NULL,'','default',1,1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(38,0,'显示','0','sys_show_hide',NULL,NULL,'default',1,1,31,0,NULL,NULL,NULL);
INSERT INTO sys_dict_data VALUES(39,0,'隐藏','1','sys_show_hide',NULL,NULL,'default',0,1,31,0,NULL,NULL,NULL);
INSERT INTO sys_dict_data VALUES(40,0,'正常','1','sys_normal_disable',NULL,'','default',1,1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(41,0,'停用','0','sys_normal_disable',NULL,'','default',0,1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(49,0,'是','1','sys_yes_no',NULL,'','',1,1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(50,0,'否','0','sys_yes_no',NULL,'','',0,1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(62,0,'系统后台','sys_admin','menu_module_type',NULL,'','',1,1,2,0,'',NULL,'2022-06-24 22:00:43');
INSERT INTO sys_dict_data VALUES(63,0,'政务工作','gov_work','menu_module_type',NULL,'','',0,1,2,0,'',NULL,'2022-06-24 22:00:43');
INSERT INTO sys_dict_data VALUES(70,2,'发布栏目','2','sys_blog_sign',NULL,'','',0,1,31,31,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(71,3,'跳转栏目','3','sys_blog_sign',NULL,'','',0,1,31,31,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(72,4,'单页栏目','4','sys_blog_sign',NULL,'','',0,1,31,31,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(77,1,'频道页','1','sys_blog_sign',NULL,'','',0,1,31,31,'',NULL,NULL);
INSERT INTO sys_dict_data VALUES(102,0,'位','0','data_type','位','','',0,1,31,NULL,'位 BIT，（1 位，开关量）','2022-06-24 22:07:02','2022-06-24 22:07:02');
INSERT INTO sys_dict_data VALUES(103,1,'字节','1','data_type','字节','','',0,1,31,NULL,'字节 Byte=8 位','2022-06-24 22:07:22','2022-06-24 22:07:22');
INSERT INTO sys_dict_data VALUES(104,2,'无符号短整型','2','data_type','无符号短整型','','',0,1,31,31,'字 WORD=两个字节（16 位，无符号）','2022-06-24 22:07:49','2022-06-24 22:08:25');
INSERT INTO sys_dict_data VALUES(105,3,'有符号短整型','3','data_type','有符号短整型','','',0,1,31,31,'字 WORD=两个字节（16 位，有符号）','2022-06-24 22:08:15','2022-06-24 22:08:29');
INSERT INTO sys_dict_data VALUES(106,4,'无符号长整型','4','data_type','无符号长整型','','',0,1,31,NULL,'双字 DWORD=四个字节（32 位，无符号）','2022-06-24 22:08:59','2022-06-24 22:08:59');
INSERT INTO sys_dict_data VALUES(107,5,'有符号长整型','5','data_type','有符号长整型','','',0,1,31,NULL,'双字 DWORD=四个字节（32 位，有符号）','2022-06-24 22:09:25','2022-06-24 22:09:25');
INSERT INTO sys_dict_data VALUES(108,6,'浮点型','6','data_type','浮点型','','',0,1,31,NULL,'浮点型双字 DWORD=四个字节（32 位，模拟量）','2022-06-24 22:09:50','2022-06-24 22:09:50');
INSERT INTO sys_dict_data VALUES(109,7,'显示类型为 BCD','7','data_type','显示类型为 BCD','','',0,1,31,NULL,'两个字节（16 位）','2022-06-24 22:10:23','2022-06-24 22:10:23');
INSERT INTO sys_dict_data VALUES(110,8,'显示类型为 BCDLong','8','data_type','显示类型为 BCDLong','','',0,1,31,NULL,'四个字节（32 位）','2022-06-24 22:11:03','2022-06-24 22:11:03');
INSERT INTO sys_dict_data VALUES(111,9,'十六进制','9','data_type','十六进制','','',0,1,31,NULL,'2 个字符为一个十六进制，可定义读写长度','2022-06-24 22:11:27','2022-06-24 22:11:27');
INSERT INTO sys_dict_data VALUES(112,10,'字符串类型','10','data_type','字符串类型','','',0,1,31,31,'原始字符，可定义读写长度','2022-06-24 22:11:46','2022-06-24 22:11:54');
INSERT INTO sys_dict_data VALUES(113,0,'布尔','0','data_logic_type',NULL,'','',0,1,31,31,'开关量，比如灯的开关等','2022-06-25 18:27:02','2022-06-25 18:27:43');
INSERT INTO sys_dict_data VALUES(114,1,'枚举','1','data_logic_type',NULL,'','',0,1,31,NULL,'比如水的状态有：0-液态，1-固态，2-气态','2022-06-25 18:28:50','2022-06-25 18:28:50');
INSERT INTO sys_dict_data VALUES(115,2,'实数','2','data_logic_type',NULL,'','',0,1,31,NULL,'实际的物理数据，比如温度值','2022-06-25 18:29:42','2022-06-25 18:29:42');
INSERT INTO sys_dict_data VALUES(116,3,'虚数','3','data_logic_type',NULL,'','',0,1,31,NULL,'','2022-06-25 18:30:09','2022-06-25 18:30:09');
INSERT INTO sys_dict_data VALUES(117,4,'向量','4','data_logic_type',NULL,'','',0,1,31,NULL,'','2022-06-25 18:30:31','2022-06-25 18:30:31');
INSERT INTO sys_dict_data VALUES(118,5,'实体数据-json','5','data_logic_type',NULL,'','',0,1,31,NULL,'','2022-06-25 18:31:30','2022-06-25 18:31:30');
INSERT INTO sys_dict_data VALUES(119,6,'实体数据-xml','6','data_logic_type',NULL,'','',0,1,31,NULL,'','2022-06-25 18:31:48','2022-06-25 18:31:48');
INSERT INTO sys_dict_data VALUES(120,7,'二进制','7','data_logic_type',NULL,'','',0,1,31,NULL,'','2022-06-25 18:32:44','2022-06-25 18:32:44');
CREATE TABLE IF NOT EXISTS `sys_dict_type` (
  `dict_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `dict_name` VARCHAR(100),
  `dict_type` VARCHAR(100),
  `status` INT(3),
  `create_by` INT(10),
  `update_by` INT(10),
  `remark` VARCHAR(500),
  `created_at` DATETIME,
  `updated_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_dict_type VALUES(1,'用户性别','sys_user_sex',1,31,1,'用于选择用户性别',NULL,NULL);
INSERT INTO sys_dict_type VALUES(2,'分类类型','cms_category_type',1,31,3,'文章分类类型',NULL,'2021-07-21 10:54:22');
INSERT INTO sys_dict_type VALUES(3,'任务状态','sys_job_status',1,31,31,'任务状态列表',NULL,NULL);
INSERT INTO sys_dict_type VALUES(13,'任务分组','sys_job_group',1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_type VALUES(14,'管理员登录状态','admin_login_status',1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_type VALUES(15,'操作日志状态','sys_oper_log_status',1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_type VALUES(16,'任务策略','sys_job_policy',1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_type VALUES(17,'菜单状态','sys_show_hide',1,31,0,'菜单状态',NULL,NULL);
INSERT INTO sys_dict_type VALUES(18,'系统开关','sys_normal_disable',1,31,31,'系统开关',NULL,NULL);
INSERT INTO sys_dict_type VALUES(19,'数据类型','data_type',1,31,NULL,'','2022-06-24 22:00:26','2022-06-24 22:00:26');
INSERT INTO sys_dict_type VALUES(24,'系统内置','sys_yes_no',1,31,0,'',NULL,NULL);
INSERT INTO sys_dict_type VALUES(30,'菜单模块类型','menu_module_type',1,2,31,'设备的数据类型',NULL,'2022-06-24 22:00:43');
INSERT INTO sys_dict_type VALUES(31,'数据逻辑类型','data_logic_type',1,31,NULL,'数据的逻辑类型，比如开关量，枚举，实数，虚数，向量，实体等。','2022-06-25 18:25:42','2022-06-25 18:25:42');
CREATE TABLE IF NOT EXISTS `sys_gen_table` (
  `table_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `table_name` VARCHAR(200),
  `table_comment` VARCHAR(500),
  `class_name` VARCHAR(100),
  `tpl_category` VARCHAR(200),
  `package_name` VARCHAR(100),
  `module_name` VARCHAR(30),
  `business_name` VARCHAR(30),
  `function_name` VARCHAR(50),
  `function_author` VARCHAR(50),
  `options` VARCHAR(1000),
  `create_time` TEXT,
  `update_time` TEXT,
  `remark` VARCHAR(500),
  `overwrite` INT(1) NOT NULL,
  `sort_column` VARCHAR(200),
  `sort_type` VARCHAR(4) NOT NULL,
  `show_detail` INT(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_gen_table VALUES(106,'mqtt_msg_record','MQTT的消息记录','MqttMsgRecord','crud','iotfast/internal/app','mqtt','mqtt_msg_record','MQTT的消息记录','dwx','','2022-06-27 23:24:18','2022-06-27 23:30:42','',0,'','',0);
INSERT INTO sys_gen_table VALUES(107,'mqtt_topic_record','MQTT需要进行记录的Topic','MqttTopicRecord','crud','iotfast/internal/app','mqtt','mqtt_topic_record','MQTT需要进行记录的Topic','dwx','','2022-06-27 23:24:19','2022-06-27 23:28:52','',0,'','',0);
INSERT INTO sys_gen_table VALUES(111,'mqtt_status','mqtt客户端连接状态','MqttStatus','crud','github.com/xiaodingding/iotfast/internal/app','mqtt','mqtt_status','客户端连接状态','dwx','','2022-07-15 22:11:03','2022-07-15 22:12:03','',0,'','',0);
INSERT INTO sys_gen_table VALUES(112,'mqtt_topic','订阅的主题信息','MqttTopic','crud','github.com/xiaodingding/iotfast/internal/app','mqtt','mqtt_topic','订阅的主题信息','dwx','','2022-07-15 22:11:03','2022-07-15 22:12:58','',0,'','',0);
INSERT INTO sys_gen_table VALUES(114,'link_info','连接信息管理','LinkInfo','crud','iotfast/internal/app','link','link_info','连接信息管理','dwx','','2022-07-16 15:38:13','2022-07-16 15:38:13','',0,'','',0);
INSERT INTO sys_gen_table VALUES(115,'link_net','网络连接信息管理','LinkNet','crud','iotfast/internal/app','link','link_net','网络连接信息管理','dwx','','2022-07-16 15:59:37','2022-07-16 15:59:37','',0,'','',0);
INSERT INTO sys_gen_table VALUES(116,'link_serial','串口连接信息管理','LinkSerial','crud','iotfast/internal/app','link','link_serial','串口连接信息管理','dwx','','2022-07-16 15:59:37','2022-07-16 15:59:37','',0,'','',0);
CREATE TABLE IF NOT EXISTS `sys_gen_table_column` (
  `column_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `table_id` INT(20),
  `column_name` VARCHAR(200),
  `column_comment` VARCHAR(500),
  `column_type` VARCHAR(100),
  `go_type` VARCHAR(500),
  `go_field` VARCHAR(200),
  `vue_type` VARCHAR(500),
  `html_field` VARCHAR(200),
  `is_pk` INT(1),
  `is_increment` INT(1),
  `is_required` INT(1),
  `is_insert` INT(1),
  `is_edit` INT(1),
  `is_list` INT(1),
  `is_detail` INT(1),
  `is_query` INT(1),
  `sort_order_edit` INT(11),
  `sort_order_list` INT(11),
  `sort_order_detail` INT(11),
  `sort_order_query` INT(11),
  `query_type` VARCHAR(200),
  `html_type` VARCHAR(200),
  `dict_type` VARCHAR(200),
  `link_table_name` VARCHAR(50),
  `link_table_class` VARCHAR(50),
  `link_table_module_name` VARCHAR(50),
  `link_table_business_name` VARCHAR(50),
  `link_table_package` VARCHAR(150),
  `link_label_id` VARCHAR(50),
  `link_label_name` VARCHAR(50),
  `col_span` INT(11),
  `row_span` INT(11),
  `is_row_start` INT(1),
  `min_width` INT(11),
  `is_fixed` INT(1),
  `is_overflow_tooltip` INT(1),
  `is_cascade` INT(1),
  `parent_column_name` VARCHAR(50),
  `cascade_column_name` VARCHAR(50)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_gen_table_column VALUES(746,73,'id','ID','int(11) unsigned','uint','Id',NULL,'id',1,1,0,0,0,1,1,0,1,1,1,1,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(747,73,'demo_name','姓名','varchar(20)','string','DemoName',NULL,'demoName',0,0,1,1,1,1,1,1,2,2,2,2,'LIKE','input','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(748,73,'demo_age','年龄','int(10) unsigned','uint','DemoAge',NULL,'demoAge',0,0,1,1,1,1,1,0,4,4,4,4,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(749,73,'classes','班级','varchar(30)','string','Classes',NULL,'classes',0,0,1,1,1,1,1,1,5,5,5,5,'EQ','select','','demo_gen_class','DemoGenClass','demo','demo_gen_class','gfast/app/demo','id','class_name',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(750,73,'demo_born','出生年月','datetime','Time','DemoBorn',NULL,'demoBorn',0,0,0,1,1,1,1,1,6,6,6,6,'BETWEEN','date','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(751,73,'demo_gender','性别','tinyint(3) unsigned','uint','DemoGender',NULL,'demoGender',0,0,1,1,1,1,1,0,7,7,7,7,'EQ','select','sys_user_sex','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(752,73,'created_at','创建日期','datetime','Time','CreatedAt',NULL,'createdAt',0,0,0,0,0,1,1,1,8,8,8,8,'BETWEEN','datetime','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(753,73,'updated_at','修改日期','datetime','Time','UpdatedAt',NULL,'updatedAt',0,0,0,0,0,0,0,0,8,8,8,8,'EQ','datetime','','','',NULL,NULL,'','','',12,1,0,100,NULL,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(754,73,'deleted_at','删除日期','datetime','Time','DeletedAt',NULL,'deletedAt',0,0,0,0,0,0,0,0,9,9,9,9,'EQ','datetime','','','',NULL,NULL,'','','',12,1,0,100,NULL,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(755,73,'created_by','创建人','bigint(20) unsigned','uint64','CreatedBy',NULL,'createdBy',0,0,0,0,0,1,1,0,9,9,9,9,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(756,73,'updated_by','修改人','bigint(20) unsigned','uint64','UpdatedBy',NULL,'updatedBy',0,0,0,0,0,0,1,0,10,10,10,10,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(757,73,'demo_status','状态','tinyint(4)','int','DemoStatus',NULL,'demoStatus',0,0,1,1,1,1,1,1,11,11,11,11,'EQ','radio','sys_normal_disable','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(758,73,'demo_cate','分类','varchar(30)','string','DemoCate',NULL,'demoCate',0,0,1,1,1,1,1,0,12,12,12,12,'EQ','checkbox','sys_oper_log_status','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(759,73,'demo_thumb','头像','TEXT','string','DemoThumb',NULL,'demoThumb',0,0,0,1,1,1,1,0,3,3,3,3,'EQ','imagefile','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(760,73,'demo_photo','相册','TEXT','string','DemoPhoto',NULL,'demoPhoto',0,0,0,1,1,0,1,0,13,13,13,13,'EQ','images','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(761,73,'demo_info','个人描述','TEXT','string','DemoInfo',NULL,'demoInfo',0,0,0,1,1,0,1,0,14,14,14,14,'EQ','richtext','','','','','','','','',24,1,1,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(762,73,'demo_file','相关附件','TEXT','string','DemoFile',NULL,'demoFile',0,0,0,1,1,0,1,0,15,15,15,15,'EQ','files','','','','','','','','',12,1,1,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(763,74,'id','分类id','int(10) unsigned','uint','Id',NULL,'id',1,1,0,0,0,1,0,0,1,1,1,1,'EQ','input','','','',NULL,NULL,'','','',12,1,0,100,NULL,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(764,74,'class_name','分类名','varchar(30)','string','ClassName',NULL,'className',0,0,1,1,1,1,0,1,2,2,2,2,'LIKE','input','','','',NULL,NULL,'','','',12,1,0,100,NULL,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(765,75,'id','','int(11) unsigned','uint','Id',NULL,'id',1,1,0,0,0,0,0,0,1,1,1,1,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(766,75,'parent_id','父级ID','int(10) unsigned','uint','ParentId',NULL,'parentId',0,0,1,1,1,0,0,0,2,2,2,2,'EQ','select','','','','','','','','',12,1,0,100,0,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(767,75,'demo_name','姓名','varchar(20)','string','DemoName',NULL,'demoName',0,0,1,1,1,1,0,1,3,3,3,3,'LIKE','input','','','','','','','','',12,1,0,100,0,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(768,75,'demo_age','年龄','int(10) unsigned','uint','DemoAge',NULL,'demoAge',0,0,1,1,1,1,0,1,4,4,4,4,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(769,75,'classes','班级','varchar(30)','string','Classes',NULL,'classes',0,0,1,1,1,1,0,1,5,5,5,5,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(770,75,'demo_born','出生年月','datetime','Time','DemoBorn',NULL,'demoBorn',0,0,0,1,1,1,0,1,6,6,6,6,'EQ','date','','','','','','','','',12,1,0,100,0,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(771,75,'demo_gender','性别','tinyint(3) unsigned','uint','DemoGender',NULL,'demoGender',0,0,1,1,1,1,0,1,7,7,7,7,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(772,75,'created_at','创建日期','datetime','Time','CreatedAt',NULL,'createdAt',0,0,0,0,0,0,0,0,8,8,8,8,'EQ','datetime','','','','','','','','',12,1,0,100,0,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(773,75,'updated_at','修改日期','datetime','Time','UpdatedAt',NULL,'updatedAt',0,0,0,0,0,0,0,0,9,9,9,9,'EQ','datetime','','','',NULL,NULL,'','','',12,1,0,100,NULL,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(774,75,'deleted_at','删除日期','datetime','Time','DeletedAt',NULL,'deletedAt',0,0,0,0,0,0,0,0,10,10,10,10,'EQ','datetime','','','',NULL,NULL,'','','',12,1,0,100,NULL,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(775,75,'created_by','创建人','bigint(20) unsigned','uint64','CreatedBy',NULL,'createdBy',0,0,0,0,0,0,0,0,11,11,11,11,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(776,75,'updated_by','修改人','bigint(20) unsigned','uint64','UpdatedBy',NULL,'updatedBy',0,0,0,0,0,0,0,0,12,12,12,12,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(777,75,'demo_status','状态','tinyint(4)','int','DemoStatus',NULL,'demoStatus',0,0,1,1,1,1,0,1,13,13,13,13,'EQ','radio','sys_job_status','','','','','','','',12,1,0,100,0,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(778,75,'demo_cate','分类','varchar(30)','string','DemoCate',NULL,'demoCate',0,0,1,1,1,1,0,1,14,14,14,14,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,NULL,NULL);
INSERT INTO sys_gen_table_column VALUES(785,78,'id','ID','int(11) unsigned','uint','Id',NULL,'id',1,1,1,0,0,1,1,1,1,1,1,1,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(786,78,'title','标题','varchar(255)','string','Title',NULL,'title',0,0,1,1,1,1,1,1,2,2,2,2,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(787,78,'created_by','创建人','int(10) unsigned','uint','CreatedBy',NULL,'createdBy',0,0,0,0,0,1,1,1,3,3,3,3,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(788,78,'updated_by','修改人','int(10) unsigned','uint','UpdatedBy',NULL,'updatedBy',0,0,0,0,0,1,1,1,4,4,4,4,'EQ','input','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(789,78,'created_at','创建时间','datetime','Time','CreatedAt',NULL,'createdAt',0,0,0,0,0,1,1,1,5,5,5,5,'EQ','datetime','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(790,78,'updated_at','修改时间','datetime','Time','UpdatedAt',NULL,'updatedAt',0,0,0,0,0,0,0,0,6,6,6,6,'EQ','datetime','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(791,78,'deleted_at','删除时间','datetime','Time','DeletedAt',NULL,'deletedAt',0,0,0,0,0,0,0,0,7,7,7,7,'EQ','datetime','','','','','','','','',12,1,0,100,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1077,106,'id','主键','int(11)','int','Id','','id',1,1,0,0,0,0,0,0,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1078,106,'device_sn','设备序列号','varchar(255)','string','DeviceSn','','deviceSn',0,0,0,1,1,1,0,1,0,0,0,0,'LIKE','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1079,106,'topic_id','Topic的主键','int(11)','int','TopicId','','topicId',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','mqtt_topic_record','MqttTopicRecord','','','iotfast/internal/app','id','id',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1080,106,'client_name','客户端名称','varchar(255)','string','ClientName','','clientName',0,0,1,1,1,1,0,1,0,0,0,0,'LIKE','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1081,106,'client_id','客户端ID','varchar(255)','string','ClientId','','clientId',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1082,106,'qos','Qos','tinyint(4)','int','Qos','','qos',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1083,106,'payload','传递的数据','mediumtext','string','Payload','','payload',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1084,106,'creat_time','创建时间','int(10) unsigned','uint','CreatTime','','creatTime',0,0,1,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1085,107,'id','主键','int(11)','int','Id','','id',1,1,0,0,0,0,0,0,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1086,107,'name','设备名称','varchar(255)','string','Name','','name',0,0,1,1,1,1,0,1,0,0,0,0,'LIKE','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1087,107,'topic','Topic','varchar(255)','string','Topic','','topic',0,0,0,1,1,1,0,1,0,0,0,0,'LIKE','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1088,107,'qos','Qos','tinyint(4)','int','Qos','','qos',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1089,107,'remark','备注','varchar(255)','string','Remark','','remark',0,0,0,1,1,1,0,0,0,0,0,0,'LIKE','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1090,107,'creat_time','创建时间','int(10) unsigned','uint','CreatTime','','creatTime',0,0,1,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1113,111,'id','主键','int(11)','int','Id','','id',1,1,0,0,0,0,0,0,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1114,111,'name','设备名称','varchar(255)','string','Name','','name',0,0,1,1,1,1,0,1,0,0,0,0,'LIKE','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1115,111,'clientId','MQTT连接的客户端Id','varchar(255)','string','ClientId','','clientId',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1116,111,'status','MQTT连接的状态','tinyint(4)','int','Status','','status',0,0,1,1,1,1,0,1,0,0,0,0,'EQ','radio','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1117,111,'userName','登录名','varchar(255)','string','UserName','','userName',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1118,111,'created_at','创建时间','datetime','Time','CreatedAt','','createdAt',0,0,0,0,0,0,0,0,0,0,0,0,'EQ','datetime','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1119,111,'updated_at','修改时间','datetime','Time','UpdatedAt','','updatedAt',0,0,0,0,0,0,0,0,0,0,0,0,'EQ','datetime','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1120,112,'id','主键','int(11)','int','Id','','id',1,1,0,0,0,0,0,0,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1121,112,'name','设备名称','varchar(255)','string','Name','','name',0,0,1,1,1,1,0,1,0,0,0,0,'LIKE','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1122,112,'clientId','客户端Id','varchar(255)','string','ClientId','','clientId',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1123,112,'topic','订阅的Topic信息','varchar(255)','string','Topic','','topic',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1124,112,'qos','等级','tinyint(4)','int','Qos','','qos',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1125,112,'retainAsPub','Retain As Published option','bit(1)','bool','RetainAsPub','','retainAsPub',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','radio','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1126,112,'retainHandle','Retain Handling option','varchar(1)','byte','RetainHandle','','retainHandle',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1127,112,'created_at','创建时间','datetime','Time','CreatedAt','','createdAt',0,0,0,0,0,0,0,0,0,0,0,0,'EQ','datetime','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1128,112,'updated_at','修改时间','datetime','Time','UpdatedAt','','updatedAt',0,0,0,0,0,0,0,0,0,0,0,0,'EQ','datetime','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1134,114,'id','主键','int(11)','int','Id','','id',1,1,0,0,0,0,0,0,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1135,114,'name','连接名称','varchar(255)','string','Name','','name',0,0,1,1,1,1,0,1,0,0,0,0,'LIKE','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1136,114,'mark','连接标记','varchar(255)','string','Mark','','mark',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1137,114,'created_at','创建时间','datetime','Time','CreatedAt','','createdAt',0,0,0,0,0,0,0,0,0,0,0,0,'EQ','datetime','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1138,114,'updated_at','修改时间','datetime','Time','UpdatedAt','','updatedAt',0,0,0,0,0,0,0,0,0,0,0,0,'EQ','datetime','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1139,115,'id','主键','int(11)','int','Id','','id',1,1,0,0,0,0,0,0,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1140,115,'name','连接名称','varchar(255)','string','Name','','name',0,0,1,1,1,1,0,1,0,0,0,0,'LIKE','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1141,115,'mark','串口标记','varchar(255)','string','Mark','','mark',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1142,115,'remote_type','远程类型','tinyint(4)','int','RemoteType','','remoteType',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','select','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1143,115,'remote_addr','远程地址','varchar(255)','string','RemoteAddr','','remoteAddr',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1144,115,'remote_port','远程端口号','varchar(255)','string','RemotePort','','remotePort',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1145,115,'timeout','超时时间','int(11)','int','Timeout','','timeout',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1146,115,'created_at','创建时间','datetime','Time','CreatedAt','','createdAt',0,0,0,0,0,0,0,0,0,0,0,0,'EQ','datetime','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1147,115,'updated_at','修改时间','datetime','Time','UpdatedAt','','updatedAt',0,0,0,0,0,0,0,0,0,0,0,0,'EQ','datetime','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1148,116,'id','主键','int(11)','int','Id','','id',1,1,0,0,0,0,0,0,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1149,116,'name','连接名称','varchar(255)','string','Name','','name',0,0,1,1,1,1,0,1,0,0,0,0,'LIKE','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1150,116,'mark','串口标记','varchar(255)','string','Mark','','mark',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1151,116,'serial_name','串口号','varchar(255)','string','SerialName','','serialName',0,0,1,1,1,1,0,1,0,0,0,0,'LIKE','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1152,116,'serial_baund','串口波特率','tinyint(4)','int','SerialBaund','','serialBaund',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1153,116,'serial_parity','串口校验位','tinyint(4)','int','SerialParity','','serialParity',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1154,116,'serial_data','串口数据位','tinyint(4)','int','SerialData','','serialData',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1155,116,'serial_stop','串口停止位','tinyint(4)','int','SerialStop','','serialStop',0,0,0,1,1,1,0,1,0,0,0,0,'EQ','input','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1156,116,'created_at','创建时间','datetime','Time','CreatedAt','','createdAt',0,0,0,0,0,0,0,0,0,0,0,0,'EQ','datetime','','','','','','','','',0,0,0,0,0,0,0,'','');
INSERT INTO sys_gen_table_column VALUES(1157,116,'updated_at','修改时间','datetime','Time','UpdatedAt','','updatedAt',0,0,0,0,0,0,0,0,0,0,0,0,'EQ','datetime','','','','','','','','',0,0,0,0,0,0,0,'','');
CREATE TABLE IF NOT EXISTS `sys_job` (
  `job_id` INT NOT NULL,
  `job_name` VARCHAR(64) NOT NULL,
  `job_params` VARCHAR(200),
  `job_group` VARCHAR(64) NOT NULL,
  `invoke_target` VARCHAR(500) NOT NULL,
  `cron_expression` VARCHAR(255),
  `misfire_policy` INT(4),
  `concurrent` INT(4),
  `status` INT(4),
  `create_by` INT(64),
  `update_by` INT(64),
  `remark` VARCHAR(500),
  `created_at` DATETIME,
  `updated_at` DATETIME,
  `deleted_at` DATETIME,
  PRIMARY KEY (`job_id`, `job_name`, `job_group`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_job VALUES(1,'测试任务1','','DEFAULT','test1','* * * * * ?',1,0,1,1,31,'',NULL,'2021-07-16 16:01:59',NULL);
INSERT INTO sys_job VALUES(2,'测试任务2','hdello|iotfast','DEFAULT','test2','* * * * * ?',1,0,1,1,31,'备注',NULL,'2022-06-19 18:16:22',NULL);
INSERT INTO sys_job VALUES(6,'测试任务3','hello||iotfast','DEFAULT','test2','* * * * * *',1,0,1,1,31,'备注',NULL,NULL,'2021-07-16 16:51:20');
INSERT INTO sys_job VALUES(8,'在线用户定时更新','','DEFAULT','checkUserOnline','5 */10 * * * ?',1,0,0,2,1,'',NULL,'2022-06-19 18:10:54',NULL);
INSERT INTO sys_job VALUES(9,'测试','arg1','DEFAULT','demo1',' */5 * * * * ? ',1,1,1,31,31,'','2021-07-15 15:00:15','2021-07-16 16:47:56','2021-07-16 16:48:00');
INSERT INTO sys_job VALUES(10,'测试','arg1','DEFAULT','demo1',' */5 * * * * ? ',2,1,1,31,31,'','2021-07-15 22:12:15','2021-07-16 16:47:52','2021-07-16 16:48:00');
INSERT INTO sys_job VALUES(11,'测试','arg1','DEFAULT','demo1',' */5 * * * * ? ',2,1,1,31,31,'','2021-07-16 08:49:43','2021-07-16 08:59:32','2021-07-16 16:46:51');
INSERT INTO sys_job VALUES(12,'测试366','arg1','DEFAULT','demo1',' */5 * * * * ? ',2,1,1,31,31,'','2021-07-16 08:50:10','2021-07-16 08:59:26','2021-07-16 16:46:51');
INSERT INTO sys_job VALUES(13,'','1','DEFAULT','1','1',1,1,0,0,0,'','2022-06-19 18:08:17','2022-06-19 18:08:17','2022-06-19 18:08:22');
CREATE TABLE IF NOT EXISTS `sys_login_log` (
  `info_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `login_name` VARCHAR(50),
  `ipaddr` VARCHAR(50),
  `login_location` VARCHAR(255),
  `browser` VARCHAR(50),
  `os` VARCHAR(50),
  `status` INT(4),
  `msg` VARCHAR(255),
  `login_time` TEXT,
  `module` VARCHAR(30)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_login_log VALUES(449,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 12:14:56','系统后台');
INSERT INTO sys_login_log VALUES(450,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 14:23:14','系统后台');
INSERT INTO sys_login_log VALUES(451,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 14:23:21','系统后台');
INSERT INTO sys_login_log VALUES(452,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 14:25:13','系统后台');
INSERT INTO sys_login_log VALUES(453,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:30:17','系统后台');
INSERT INTO sys_login_log VALUES(454,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:31:42','系统后台');
INSERT INTO sys_login_log VALUES(455,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:32:30','系统后台');
INSERT INTO sys_login_log VALUES(456,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:39:41','系统后台');
INSERT INTO sys_login_log VALUES(457,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:39:45','系统后台');
INSERT INTO sys_login_log VALUES(458,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:41:04','系统后台');
INSERT INTO sys_login_log VALUES(459,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:42:08','系统后台');
INSERT INTO sys_login_log VALUES(460,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:45:02','系统后台');
INSERT INTO sys_login_log VALUES(461,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:45:13','系统后台');
INSERT INTO sys_login_log VALUES(462,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:45:45','系统后台');
INSERT INTO sys_login_log VALUES(463,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:45:46','系统后台');
INSERT INTO sys_login_log VALUES(464,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:46:05','系统后台');
INSERT INTO sys_login_log VALUES(465,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:46:06','系统后台');
INSERT INTO sys_login_log VALUES(466,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:47:14','系统后台');
INSERT INTO sys_login_log VALUES(467,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:47:42','系统后台');
INSERT INTO sys_login_log VALUES(468,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 17:47:42','系统后台');
INSERT INTO sys_login_log VALUES(469,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 18:02:21','系统后台');
INSERT INTO sys_login_log VALUES(470,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 18:03:09','系统后台');
INSERT INTO sys_login_log VALUES(471,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 18:04:29','系统后台');
INSERT INTO sys_login_log VALUES(472,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 18:06:28','系统后台');
INSERT INTO sys_login_log VALUES(473,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 18:08:37','系统后台');
INSERT INTO sys_login_log VALUES(474,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 18:08:39','系统后台');
INSERT INTO sys_login_log VALUES(475,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 18:10:19','系统后台');
INSERT INTO sys_login_log VALUES(476,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 18:15:32','系统后台');
INSERT INTO sys_login_log VALUES(477,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 18:18:00','系统后台');
INSERT INTO sys_login_log VALUES(478,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 18:18:13','系统后台');
INSERT INTO sys_login_log VALUES(479,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-08 18:24:46','系统后台');
INSERT INTO sys_login_log VALUES(480,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-09 09:22:39','系统后台');
INSERT INTO sys_login_log VALUES(481,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-09 11:04:08','系统后台');
INSERT INTO sys_login_log VALUES(482,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-09 11:09:06','系统后台');
INSERT INTO sys_login_log VALUES(483,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-09 15:50:29','系统后台');
INSERT INTO sys_login_log VALUES(484,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-09 15:51:35','系统后台');
INSERT INTO sys_login_log VALUES(485,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-09 15:52:24','系统后台');
INSERT INTO sys_login_log VALUES(486,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-09 15:53:34','系统后台');
INSERT INTO sys_login_log VALUES(487,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-09 16:54:59','系统后台');
INSERT INTO sys_login_log VALUES(488,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-09 16:58:24','系统后台');
INSERT INTO sys_login_log VALUES(489,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-09 16:59:12','系统后台');
INSERT INTO sys_login_log VALUES(490,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-09 17:02:25','系统后台');
INSERT INTO sys_login_log VALUES(491,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-09 17:03:27','系统后台');
INSERT INTO sys_login_log VALUES(492,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-09 17:05:14','系统后台');
INSERT INTO sys_login_log VALUES(493,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 10:21:43','系统后台');
INSERT INTO sys_login_log VALUES(494,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 10:22:03','系统后台');
INSERT INTO sys_login_log VALUES(495,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 10:22:05','系统后台');
INSERT INTO sys_login_log VALUES(496,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 10:31:53','系统后台');
INSERT INTO sys_login_log VALUES(497,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 10:32:18','系统后台');
INSERT INTO sys_login_log VALUES(498,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 10:39:56','系统后台');
INSERT INTO sys_login_log VALUES(499,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 10:55:59','系统后台');
INSERT INTO sys_login_log VALUES(500,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 10:56:15','系统后台');
INSERT INTO sys_login_log VALUES(501,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 10:58:30','系统后台');
INSERT INTO sys_login_log VALUES(502,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 10:58:51','系统后台');
INSERT INTO sys_login_log VALUES(503,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 10:59:58','系统后台');
INSERT INTO sys_login_log VALUES(504,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 11:01:00','系统后台');
INSERT INTO sys_login_log VALUES(505,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 11:01:24','系统后台');
INSERT INTO sys_login_log VALUES(506,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 16:32:00','系统后台');
INSERT INTO sys_login_log VALUES(507,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 16:34:53','系统后台');
INSERT INTO sys_login_log VALUES(508,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 16:34:55','系统后台');
INSERT INTO sys_login_log VALUES(509,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 16:35:06','系统后台');
INSERT INTO sys_login_log VALUES(510,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 16:35:37','系统后台');
INSERT INTO sys_login_log VALUES(511,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 16:36:21','系统后台');
INSERT INTO sys_login_log VALUES(512,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 16:36:23','系统后台');
INSERT INTO sys_login_log VALUES(513,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-11 16:37:24','系统后台');
INSERT INTO sys_login_log VALUES(514,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 09:46:43','系统后台');
INSERT INTO sys_login_log VALUES(515,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 09:51:58','系统后台');
INSERT INTO sys_login_log VALUES(516,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 09:55:59','系统后台');
INSERT INTO sys_login_log VALUES(517,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 10:57:45','系统后台');
INSERT INTO sys_login_log VALUES(518,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 10:58:42','系统后台');
INSERT INTO sys_login_log VALUES(519,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 11:39:08','系统后台');
INSERT INTO sys_login_log VALUES(520,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 11:40:00','系统后台');
INSERT INTO sys_login_log VALUES(521,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 11:40:40','系统后台');
INSERT INTO sys_login_log VALUES(522,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:13:48','系统后台');
INSERT INTO sys_login_log VALUES(523,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:13:57','系统后台');
INSERT INTO sys_login_log VALUES(524,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:14:12','系统后台');
INSERT INTO sys_login_log VALUES(525,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:14:14','系统后台');
INSERT INTO sys_login_log VALUES(526,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:14:24','系统后台');
INSERT INTO sys_login_log VALUES(527,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:15:24','系统后台');
INSERT INTO sys_login_log VALUES(528,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:15:26','系统后台');
INSERT INTO sys_login_log VALUES(529,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:15:28','系统后台');
INSERT INTO sys_login_log VALUES(530,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:15:29','系统后台');
INSERT INTO sys_login_log VALUES(531,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:15:30','系统后台');
INSERT INTO sys_login_log VALUES(532,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:15:32','系统后台');
INSERT INTO sys_login_log VALUES(533,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:15:32','系统后台');
INSERT INTO sys_login_log VALUES(534,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:15:43','系统后台');
INSERT INTO sys_login_log VALUES(535,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:15:44','系统后台');
INSERT INTO sys_login_log VALUES(536,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:16:08','系统后台');
INSERT INTO sys_login_log VALUES(537,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:16:17','系统后台');
INSERT INTO sys_login_log VALUES(538,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:16:19','系统后台');
INSERT INTO sys_login_log VALUES(539,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:16:20','系统后台');
INSERT INTO sys_login_log VALUES(540,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-14 15:16:21','系统后台');
INSERT INTO sys_login_log VALUES(541,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-15 09:18:00','系统后台');
INSERT INTO sys_login_log VALUES(542,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-15 09:20:55','系统后台');
INSERT INTO sys_login_log VALUES(543,'asda','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:17:33','系统后台');
INSERT INTO sys_login_log VALUES(544,'asdasd','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:19:02','系统后台');
INSERT INTO sys_login_log VALUES(545,'sadasd','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:21:28','系统后台');
INSERT INTO sys_login_log VALUES(546,'sadasd','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:21:30','系统后台');
INSERT INTO sys_login_log VALUES(547,'asd','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:23:09','系统后台');
INSERT INTO sys_login_log VALUES(548,'asd','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:23:12','系统后台');
INSERT INTO sys_login_log VALUES(549,'asd','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:23:23','系统后台');
INSERT INTO sys_login_log VALUES(550,'asd','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:25:09','系统后台');
INSERT INTO sys_login_log VALUES(551,'asd','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:25:25','系统后台');
INSERT INTO sys_login_log VALUES(552,'sada','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:27:18','系统后台');
INSERT INTO sys_login_log VALUES(553,'asd','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:28:18','系统后台');
INSERT INTO sys_login_log VALUES(554,'sadas','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:41:06','系统后台');
INSERT INTO sys_login_log VALUES(555,'sadas','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:41:08','系统后台');
INSERT INTO sys_login_log VALUES(556,'asdasd','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:42:10','系统后台');
INSERT INTO sys_login_log VALUES(557,'asdasd','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:42:13','系统后台');
INSERT INTO sys_login_log VALUES(558,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:42:32','系统后台');
INSERT INTO sys_login_log VALUES(559,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:42:42','系统后台');
INSERT INTO sys_login_log VALUES(560,'sda','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:43:46','系统后台');
INSERT INTO sys_login_log VALUES(561,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:45:53','系统后台');
INSERT INTO sys_login_log VALUES(562,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:45:58','系统后台');
INSERT INTO sys_login_log VALUES(563,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:45:59','系统后台');
INSERT INTO sys_login_log VALUES(564,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:46:01','系统后台');
INSERT INTO sys_login_log VALUES(565,'demo','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:46:03','系统后台');
INSERT INTO sys_login_log VALUES(566,'demo','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:46:04','系统后台');
INSERT INTO sys_login_log VALUES(567,'dema','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-15 14:46:05','系统后台');
INSERT INTO sys_login_log VALUES(568,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:46:14','系统后台');
INSERT INTO sys_login_log VALUES(569,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:46:16','系统后台');
INSERT INTO sys_login_log VALUES(570,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:46:20','系统后台');
INSERT INTO sys_login_log VALUES(571,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:46:46','系统后台');
INSERT INTO sys_login_log VALUES(572,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:48:44','系统后台');
INSERT INTO sys_login_log VALUES(573,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:49:26','系统后台');
INSERT INTO sys_login_log VALUES(574,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:49:27','系统后台');
INSERT INTO sys_login_log VALUES(575,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:49:27','系统后台');
INSERT INTO sys_login_log VALUES(576,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:49:27','系统后台');
INSERT INTO sys_login_log VALUES(577,'admin','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:59:52','系统后台');
INSERT INTO sys_login_log VALUES(578,'admin','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 14:59:55','系统后台');
INSERT INTO sys_login_log VALUES(579,'admin','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:02:02','系统后台');
INSERT INTO sys_login_log VALUES(580,'admin','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:03:01','系统后台');
INSERT INTO sys_login_log VALUES(581,'admin','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:04:25','系统后台');
INSERT INTO sys_login_log VALUES(582,'admin','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:04:30','系统后台');
INSERT INTO sys_login_log VALUES(583,'admin','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:04:34','系统后台');
INSERT INTO sys_login_log VALUES(584,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:05:50','系统后台');
INSERT INTO sys_login_log VALUES(585,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:06:36','系统后台');
INSERT INTO sys_login_log VALUES(586,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:10:07','系统后台');
INSERT INTO sys_login_log VALUES(587,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:11:17','系统后台');
INSERT INTO sys_login_log VALUES(588,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:12:15','系统后台');
INSERT INTO sys_login_log VALUES(589,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:13:30','系统后台');
INSERT INTO sys_login_log VALUES(590,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:15:07','系统后台');
INSERT INTO sys_login_log VALUES(591,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:16:02','系统后台');
INSERT INTO sys_login_log VALUES(592,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:20:06','系统后台');
INSERT INTO sys_login_log VALUES(593,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:21:18','系统后台');
INSERT INTO sys_login_log VALUES(594,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:21:32','系统后台');
INSERT INTO sys_login_log VALUES(595,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:21:56','系统后台');
INSERT INTO sys_login_log VALUES(596,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:26:44','系统后台');
INSERT INTO sys_login_log VALUES(597,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:49:34','系统后台');
INSERT INTO sys_login_log VALUES(598,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:49:37','系统后台');
INSERT INTO sys_login_log VALUES(599,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:57:07','系统后台');
INSERT INTO sys_login_log VALUES(600,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 15:57:09','系统后台');
INSERT INTO sys_login_log VALUES(601,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 16:00:52','系统后台');
INSERT INTO sys_login_log VALUES(602,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 16:02:47','系统后台');
INSERT INTO sys_login_log VALUES(603,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 16:02:58','系统后台');
INSERT INTO sys_login_log VALUES(604,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-15 16:10:05','系统后台');
INSERT INTO sys_login_log VALUES(605,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-15 16:30:13','系统后台');
INSERT INTO sys_login_log VALUES(606,'admin','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-15 16:31:16','系统后台');
INSERT INTO sys_login_log VALUES(607,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-15 16:31:46','系统后台');
INSERT INTO sys_login_log VALUES(608,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-15 16:33:18','系统后台');
INSERT INTO sys_login_log VALUES(609,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-15 16:34:24','系统后台');
INSERT INTO sys_login_log VALUES(610,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-15 17:55:46','系统后台');
INSERT INTO sys_login_log VALUES(611,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-15 17:56:40','系统后台');
INSERT INTO sys_login_log VALUES(612,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-15 17:57:46','系统后台');
INSERT INTO sys_login_log VALUES(613,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-15 18:00:21','系统后台');
INSERT INTO sys_login_log VALUES(614,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-15 18:01:42','系统后台');
INSERT INTO sys_login_log VALUES(615,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 18:05:44','系统后台');
INSERT INTO sys_login_log VALUES(616,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 18:21:44','系统后台');
INSERT INTO sys_login_log VALUES(617,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 18:21:52','系统后台');
INSERT INTO sys_login_log VALUES(618,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 18:22:23','系统后台');
INSERT INTO sys_login_log VALUES(619,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-15 18:23:20','系统后台');
INSERT INTO sys_login_log VALUES(620,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 09:30:54','系统后台');
INSERT INTO sys_login_log VALUES(621,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 09:57:49','系统后台');
INSERT INTO sys_login_log VALUES(622,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 09:58:17','系统后台');
INSERT INTO sys_login_log VALUES(623,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 10:14:18','系统后台');
INSERT INTO sys_login_log VALUES(624,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 10:20:26','系统后台');
INSERT INTO sys_login_log VALUES(625,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 10:22:18','系统后台');
INSERT INTO sys_login_log VALUES(626,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 10:22:23','系统后台');
INSERT INTO sys_login_log VALUES(627,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 10:22:24','系统后台');
INSERT INTO sys_login_log VALUES(628,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 10:22:28','系统后台');
INSERT INTO sys_login_log VALUES(629,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 10:32:10','系统后台');
INSERT INTO sys_login_log VALUES(630,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 10:32:49','系统后台');
INSERT INTO sys_login_log VALUES(631,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 11:30:03','系统后台');
INSERT INTO sys_login_log VALUES(632,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 12:03:09','系统后台');
INSERT INTO sys_login_log VALUES(633,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 12:06:17','系统后台');
INSERT INTO sys_login_log VALUES(634,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 14:14:50','系统后台');
INSERT INTO sys_login_log VALUES(635,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 15:57:09','系统后台');
INSERT INTO sys_login_log VALUES(636,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 16:43:46','系统后台');
INSERT INTO sys_login_log VALUES(637,'demosada','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-16 17:17:12','系统后台');
INSERT INTO sys_login_log VALUES(638,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:17:30','系统后台');
INSERT INTO sys_login_log VALUES(639,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:17:43','系统后台');
INSERT INTO sys_login_log VALUES(640,'demoasdasd','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-16 17:17:53','系统后台');
INSERT INTO sys_login_log VALUES(641,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 17:18:23','系统后台');
INSERT INTO sys_login_log VALUES(642,'zsasda','127.0.0.1','内网IP','ApiPOST','',0,'账号密码错误','2022-03-16 17:18:26','系统后台');
INSERT INTO sys_login_log VALUES(643,'zsa','127.0.0.1','内网IP','ApiPOST','',0,'账号密码错误','2022-03-16 17:18:41','系统后台');
INSERT INTO sys_login_log VALUES(644,'zs','127.0.0.1','内网IP','ApiPOST','',0,'账号密码错误','2022-03-16 17:18:48','系统后台');
INSERT INTO sys_login_log VALUES(645,'zs','127.0.0.1','内网IP','ApiPOST','',0,'账号密码错误','2022-03-16 17:19:45','系统后台');
INSERT INTO sys_login_log VALUES(646,'demo55','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-16 17:21:06','系统后台');
INSERT INTO sys_login_log VALUES(647,'demo4564646','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-16 17:21:21','系统后台');
INSERT INTO sys_login_log VALUES(648,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:21:56','系统后台');
INSERT INTO sys_login_log VALUES(649,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:22:52','系统后台');
INSERT INTO sys_login_log VALUES(650,'demo2','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-16 17:24:11','系统后台');
INSERT INTO sys_login_log VALUES(651,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:24:37','系统后台');
INSERT INTO sys_login_log VALUES(652,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:25:12','系统后台');
INSERT INTO sys_login_log VALUES(653,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:25:22','系统后台');
INSERT INTO sys_login_log VALUES(654,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:25:27','系统后台');
INSERT INTO sys_login_log VALUES(655,'zs','127.0.0.1','内网IP','ApiPOST','',0,'账号密码错误','2022-03-16 17:25:56','系统后台');
INSERT INTO sys_login_log VALUES(656,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 17:26:03','系统后台');
INSERT INTO sys_login_log VALUES(657,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:26:08','系统后台');
INSERT INTO sys_login_log VALUES(658,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:27:17','系统后台');
INSERT INTO sys_login_log VALUES(659,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:27:52','系统后台');
INSERT INTO sys_login_log VALUES(660,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:28:07','系统后台');
INSERT INTO sys_login_log VALUES(661,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:28:10','系统后台');
INSERT INTO sys_login_log VALUES(662,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:28:31','系统后台');
INSERT INTO sys_login_log VALUES(663,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:29:00','系统后台');
INSERT INTO sys_login_log VALUES(664,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-16 17:30:28','系统后台');
INSERT INTO sys_login_log VALUES(665,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 17:30:46','系统后台');
INSERT INTO sys_login_log VALUES(666,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 17:31:12','系统后台');
INSERT INTO sys_login_log VALUES(667,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 17:31:13','系统后台');
INSERT INTO sys_login_log VALUES(668,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 17:32:00','系统后台');
INSERT INTO sys_login_log VALUES(669,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 17:37:39','系统后台');
INSERT INTO sys_login_log VALUES(670,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 17:42:16','系统后台');
INSERT INTO sys_login_log VALUES(671,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 17:44:00','系统后台');
INSERT INTO sys_login_log VALUES(672,'zsss','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-16 17:45:23','系统后台');
INSERT INTO sys_login_log VALUES(673,'zsss','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-16 17:45:29','系统后台');
INSERT INTO sys_login_log VALUES(674,'zsss','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-16 17:45:34','系统后台');
INSERT INTO sys_login_log VALUES(675,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 17:50:57','系统后台');
INSERT INTO sys_login_log VALUES(676,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 18:05:59','系统后台');
INSERT INTO sys_login_log VALUES(677,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 18:18:27','系统后台');
INSERT INTO sys_login_log VALUES(678,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 18:22:40','系统后台');
INSERT INTO sys_login_log VALUES(679,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 18:24:14','系统后台');
INSERT INTO sys_login_log VALUES(680,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 18:24:43','系统后台');
INSERT INTO sys_login_log VALUES(681,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-16 18:24:51','系统后台');
INSERT INTO sys_login_log VALUES(682,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-17 10:00:59','系统后台');
INSERT INTO sys_login_log VALUES(683,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-17 10:04:08','系统后台');
INSERT INTO sys_login_log VALUES(684,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-17 10:05:28','系统后台');
INSERT INTO sys_login_log VALUES(685,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 10:29:12','系统后台');
INSERT INTO sys_login_log VALUES(686,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 10:35:19','系统后台');
INSERT INTO sys_login_log VALUES(687,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 10:43:37','系统后台');
INSERT INTO sys_login_log VALUES(688,'zs','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-17 10:45:05','系统后台');
INSERT INTO sys_login_log VALUES(689,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 10:45:18','系统后台');
INSERT INTO sys_login_log VALUES(690,'zs','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-17 10:45:37','系统后台');
INSERT INTO sys_login_log VALUES(691,'zs','::1','云南省 曲靖市','Chrome','Windows 10',0,'账号密码错误','2022-03-17 10:46:50','系统后台');
INSERT INTO sys_login_log VALUES(692,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 10:47:21','系统后台');
INSERT INTO sys_login_log VALUES(693,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 10:48:23','系统后台');
INSERT INTO sys_login_log VALUES(694,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 10:51:19','系统后台');
INSERT INTO sys_login_log VALUES(695,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-17 10:52:20','系统后台');
INSERT INTO sys_login_log VALUES(696,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-17 10:55:42','系统后台');
INSERT INTO sys_login_log VALUES(697,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-17 10:55:43','系统后台');
INSERT INTO sys_login_log VALUES(698,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-17 10:55:44','系统后台');
INSERT INTO sys_login_log VALUES(699,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-17 10:55:45','系统后台');
INSERT INTO sys_login_log VALUES(700,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-17 10:57:36','系统后台');
INSERT INTO sys_login_log VALUES(701,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 11:06:06','系统后台');
INSERT INTO sys_login_log VALUES(702,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 11:09:07','系统后台');
INSERT INTO sys_login_log VALUES(703,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 11:11:10','系统后台');
INSERT INTO sys_login_log VALUES(704,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 11:26:31','系统后台');
INSERT INTO sys_login_log VALUES(705,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 11:30:27','系统后台');
INSERT INTO sys_login_log VALUES(706,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 11:36:21','系统后台');
INSERT INTO sys_login_log VALUES(707,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 11:42:24','系统后台');
INSERT INTO sys_login_log VALUES(708,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 11:45:25','系统后台');
INSERT INTO sys_login_log VALUES(709,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 11:54:51','系统后台');
INSERT INTO sys_login_log VALUES(710,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 14:41:42','系统后台');
INSERT INTO sys_login_log VALUES(711,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 14:45:39','系统后台');
INSERT INTO sys_login_log VALUES(712,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 14:55:57','系统后台');
INSERT INTO sys_login_log VALUES(713,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 15:15:12','系统后台');
INSERT INTO sys_login_log VALUES(714,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 15:20:43','系统后台');
INSERT INTO sys_login_log VALUES(715,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 15:21:49','系统后台');
INSERT INTO sys_login_log VALUES(716,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 15:24:28','系统后台');
INSERT INTO sys_login_log VALUES(717,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 15:46:38','系统后台');
INSERT INTO sys_login_log VALUES(718,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 15:48:02','系统后台');
INSERT INTO sys_login_log VALUES(719,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 15:49:52','系统后台');
INSERT INTO sys_login_log VALUES(720,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 15:50:36','系统后台');
INSERT INTO sys_login_log VALUES(721,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 15:51:48','系统后台');
INSERT INTO sys_login_log VALUES(722,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 15:54:50','系统后台');
INSERT INTO sys_login_log VALUES(723,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 15:56:04','系统后台');
INSERT INTO sys_login_log VALUES(724,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 15:57:18','系统后台');
INSERT INTO sys_login_log VALUES(725,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 15:58:24','系统后台');
INSERT INTO sys_login_log VALUES(726,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-17 16:04:05','系统后台');
INSERT INTO sys_login_log VALUES(727,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 16:04:39','系统后台');
INSERT INTO sys_login_log VALUES(728,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-17 16:10:20','系统后台');
INSERT INTO sys_login_log VALUES(729,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 16:13:49','系统后台');
INSERT INTO sys_login_log VALUES(730,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 16:16:06','系统后台');
INSERT INTO sys_login_log VALUES(731,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 16:32:57','系统后台');
INSERT INTO sys_login_log VALUES(732,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 16:39:26','系统后台');
INSERT INTO sys_login_log VALUES(733,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 16:42:27','系统后台');
INSERT INTO sys_login_log VALUES(734,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 16:44:38','系统后台');
INSERT INTO sys_login_log VALUES(735,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 16:46:11','系统后台');
INSERT INTO sys_login_log VALUES(736,'zs','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 16:48:00','系统后台');
INSERT INTO sys_login_log VALUES(737,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 16:54:33','系统后台');
INSERT INTO sys_login_log VALUES(738,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-17 17:06:44','系统后台');
INSERT INTO sys_login_log VALUES(739,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 17:55:46','系统后台');
INSERT INTO sys_login_log VALUES(740,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-17 18:07:51','系统后台');
INSERT INTO sys_login_log VALUES(741,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-18 09:44:38','系统后台');
INSERT INTO sys_login_log VALUES(742,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-18 14:29:28','系统后台');
INSERT INTO sys_login_log VALUES(743,'zs','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-18 15:22:13','系统后台');
INSERT INTO sys_login_log VALUES(744,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-18 15:22:29','系统后台');
INSERT INTO sys_login_log VALUES(745,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-21 09:21:30','系统后台');
INSERT INTO sys_login_log VALUES(746,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-21 14:14:54','系统后台');
INSERT INTO sys_login_log VALUES(747,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-21 14:14:59','系统后台');
INSERT INTO sys_login_log VALUES(748,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-21 14:15:44','系统后台');
INSERT INTO sys_login_log VALUES(749,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-21 14:16:28','系统后台');
INSERT INTO sys_login_log VALUES(750,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-21 14:38:30','系统后台');
INSERT INTO sys_login_log VALUES(751,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-21 15:17:20','系统后台');
INSERT INTO sys_login_log VALUES(752,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-21 15:29:55','系统后台');
INSERT INTO sys_login_log VALUES(753,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-21 15:58:22','系统后台');
INSERT INTO sys_login_log VALUES(754,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-21 18:06:31','系统后台');
INSERT INTO sys_login_log VALUES(755,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-22 09:01:15','系统后台');
INSERT INTO sys_login_log VALUES(756,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-22 09:11:55','系统后台');
INSERT INTO sys_login_log VALUES(757,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-24 09:00:52','系统后台');
INSERT INTO sys_login_log VALUES(758,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-24 09:59:09','系统后台');
INSERT INTO sys_login_log VALUES(759,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-24 14:45:09','系统后台');
INSERT INTO sys_login_log VALUES(760,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-24 14:47:54','系统后台');
INSERT INTO sys_login_log VALUES(761,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-24 14:48:20','系统后台');
INSERT INTO sys_login_log VALUES(762,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-24 14:52:37','系统后台');
INSERT INTO sys_login_log VALUES(763,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-24 15:02:19','系统后台');
INSERT INTO sys_login_log VALUES(764,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-24 15:02:36','系统后台');
INSERT INTO sys_login_log VALUES(765,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-24 15:05:42','系统后台');
INSERT INTO sys_login_log VALUES(766,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-24 17:06:28','系统后台');
INSERT INTO sys_login_log VALUES(767,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-24 17:09:39','系统后台');
INSERT INTO sys_login_log VALUES(768,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-25 15:08:31','系统后台');
INSERT INTO sys_login_log VALUES(769,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-25 15:11:56','系统后台');
INSERT INTO sys_login_log VALUES(770,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-25 15:12:13','系统后台');
INSERT INTO sys_login_log VALUES(771,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-25 16:06:30','系统后台');
INSERT INTO sys_login_log VALUES(772,'demo2','127.0.0.1','内网IP','ApiPOST','',0,'账号密码错误','2022-03-25 16:41:46','系统后台');
INSERT INTO sys_login_log VALUES(773,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-28 10:24:28','系统后台');
INSERT INTO sys_login_log VALUES(774,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-28 10:37:47','系统后台');
INSERT INTO sys_login_log VALUES(775,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-28 14:27:08','系统后台');
INSERT INTO sys_login_log VALUES(776,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-28 14:29:44','系统后台');
INSERT INTO sys_login_log VALUES(777,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-28 16:27:11','系统后台');
INSERT INTO sys_login_log VALUES(778,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-29 10:10:16','系统后台');
INSERT INTO sys_login_log VALUES(779,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-29 10:49:47','系统后台');
INSERT INTO sys_login_log VALUES(780,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-30 09:06:05','系统后台');
INSERT INTO sys_login_log VALUES(781,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-30 09:58:27','系统后台');
INSERT INTO sys_login_log VALUES(782,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-30 10:19:08','系统后台');
INSERT INTO sys_login_log VALUES(783,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-30 10:20:01','系统后台');
INSERT INTO sys_login_log VALUES(784,'test','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-30 10:50:40','系统后台');
INSERT INTO sys_login_log VALUES(785,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-30 10:51:30','系统后台');
INSERT INTO sys_login_log VALUES(786,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-30 11:08:00','系统后台');
INSERT INTO sys_login_log VALUES(787,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-30 11:09:44','系统后台');
INSERT INTO sys_login_log VALUES(788,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-30 11:09:49','系统后台');
INSERT INTO sys_login_log VALUES(789,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-30 11:23:08','系统后台');
INSERT INTO sys_login_log VALUES(790,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-30 11:41:01','系统后台');
INSERT INTO sys_login_log VALUES(791,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-03-30 11:44:36','系统后台');
INSERT INTO sys_login_log VALUES(792,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-03-31 09:34:07','系统后台');
INSERT INTO sys_login_log VALUES(793,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-01 10:09:45','系统后台');
INSERT INTO sys_login_log VALUES(794,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-01 10:13:39','系统后台');
INSERT INTO sys_login_log VALUES(795,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-01 10:16:04','系统后台');
INSERT INTO sys_login_log VALUES(796,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-01 15:02:11','系统后台');
INSERT INTO sys_login_log VALUES(797,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-02 09:15:20','系统后台');
INSERT INTO sys_login_log VALUES(798,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-02 09:15:34','系统后台');
INSERT INTO sys_login_log VALUES(799,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-02 09:59:08','系统后台');
INSERT INTO sys_login_log VALUES(800,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-02 11:04:12','系统后台');
INSERT INTO sys_login_log VALUES(801,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-06 09:51:48','系统后台');
INSERT INTO sys_login_log VALUES(802,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-06 16:21:37','系统后台');
INSERT INTO sys_login_log VALUES(803,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-06 17:40:57','系统后台');
INSERT INTO sys_login_log VALUES(804,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-07 09:34:50','系统后台');
INSERT INTO sys_login_log VALUES(805,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-07 15:17:03','系统后台');
INSERT INTO sys_login_log VALUES(806,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-07 15:58:53','系统后台');
INSERT INTO sys_login_log VALUES(807,'demo','::1','安徽省 合肥市','Chrome','Windows 10',1,'登录成功','2022-04-07 22:13:22','系统后台');
INSERT INTO sys_login_log VALUES(808,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-08 09:26:14','系统后台');
INSERT INTO sys_login_log VALUES(809,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-08 12:03:47','系统后台');
INSERT INTO sys_login_log VALUES(810,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-08 14:17:47','系统后台');
INSERT INTO sys_login_log VALUES(811,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-08 14:24:23','系统后台');
INSERT INTO sys_login_log VALUES(812,'demo','::1','安徽省 合肥市','Chrome','Windows 10',1,'登录成功','2022-04-09 12:58:53','系统后台');
INSERT INTO sys_login_log VALUES(813,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-11 09:01:47','系统后台');
INSERT INTO sys_login_log VALUES(814,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-11 09:13:10','系统后台');
INSERT INTO sys_login_log VALUES(815,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-11 09:36:58','系统后台');
INSERT INTO sys_login_log VALUES(816,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-11 16:42:45','系统后台');
INSERT INTO sys_login_log VALUES(817,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-12 08:59:10','系统后台');
INSERT INTO sys_login_log VALUES(818,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-12 09:11:59','系统后台');
INSERT INTO sys_login_log VALUES(819,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-12 14:20:39','系统后台');
INSERT INTO sys_login_log VALUES(820,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-12 16:13:56','系统后台');
INSERT INTO sys_login_log VALUES(821,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-13 09:30:32','系统后台');
INSERT INTO sys_login_log VALUES(822,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-13 11:51:43','系统后台');
INSERT INTO sys_login_log VALUES(823,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-13 15:00:37','系统后台');
INSERT INTO sys_login_log VALUES(824,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-13 15:07:04','系统后台');
INSERT INTO sys_login_log VALUES(825,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-14 11:38:33','系统后台');
INSERT INTO sys_login_log VALUES(826,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-14 15:08:12','系统后台');
INSERT INTO sys_login_log VALUES(827,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-14 15:09:03','系统后台');
INSERT INTO sys_login_log VALUES(828,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-14 15:11:46','系统后台');
INSERT INTO sys_login_log VALUES(829,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-14 15:40:42','系统后台');
INSERT INTO sys_login_log VALUES(830,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-14 15:41:48','系统后台');
INSERT INTO sys_login_log VALUES(831,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-14 15:46:52','系统后台');
INSERT INTO sys_login_log VALUES(832,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-14 15:48:41','系统后台');
INSERT INTO sys_login_log VALUES(833,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-14 17:50:00','系统后台');
INSERT INTO sys_login_log VALUES(834,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-14 18:08:01','系统后台');
INSERT INTO sys_login_log VALUES(835,'demo','::1','安徽省 合肥市','Chrome','Windows 10',1,'登录成功','2022-04-14 21:10:21','系统后台');
INSERT INTO sys_login_log VALUES(836,'demo','::1','安徽省 合肥市','Chrome','Windows 10',1,'登录成功','2022-04-16 10:07:14','系统后台');
INSERT INTO sys_login_log VALUES(837,'demo','::1','安徽省 合肥市','Chrome','Windows 10',1,'登录成功','2022-04-16 10:48:15','系统后台');
INSERT INTO sys_login_log VALUES(838,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-16 11:15:08','系统后台');
INSERT INTO sys_login_log VALUES(839,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-16 11:15:16','系统后台');
INSERT INTO sys_login_log VALUES(840,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-16 11:15:18','系统后台');
INSERT INTO sys_login_log VALUES(841,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-16 11:15:20','系统后台');
INSERT INTO sys_login_log VALUES(842,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-16 15:59:10','系统后台');
INSERT INTO sys_login_log VALUES(843,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-16 15:59:12','系统后台');
INSERT INTO sys_login_log VALUES(844,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-16 15:59:14','系统后台');
INSERT INTO sys_login_log VALUES(845,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-16 15:59:15','系统后台');
INSERT INTO sys_login_log VALUES(846,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-16 15:59:16','系统后台');
INSERT INTO sys_login_log VALUES(847,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-16 15:59:17','系统后台');
INSERT INTO sys_login_log VALUES(848,'demo','::1','安徽省 合肥市','Chrome','Windows 10',1,'登录成功','2022-04-16 16:11:58','系统后台');
INSERT INTO sys_login_log VALUES(849,'demo','::1','安徽省 合肥市','Chrome','Windows 10',1,'登录成功','2022-04-16 17:01:43','系统后台');
INSERT INTO sys_login_log VALUES(850,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-18 10:33:28','系统后台');
INSERT INTO sys_login_log VALUES(851,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-18 10:45:05','系统后台');
INSERT INTO sys_login_log VALUES(852,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-18 16:27:06','系统后台');
INSERT INTO sys_login_log VALUES(853,'demo','::1','安徽省 合肥市','Chrome','Windows 10',1,'登录成功','2022-04-18 20:59:19','系统后台');
INSERT INTO sys_login_log VALUES(854,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-18 22:18:35','系统后台');
INSERT INTO sys_login_log VALUES(855,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-19 08:49:39','系统后台');
INSERT INTO sys_login_log VALUES(856,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-19 08:55:49','系统后台');
INSERT INTO sys_login_log VALUES(857,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-19 08:57:07','系统后台');
INSERT INTO sys_login_log VALUES(858,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-19 09:50:28','系统后台');
INSERT INTO sys_login_log VALUES(859,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-19 09:51:06','系统后台');
INSERT INTO sys_login_log VALUES(860,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-19 09:51:07','系统后台');
INSERT INTO sys_login_log VALUES(861,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-19 09:51:29','系统后台');
INSERT INTO sys_login_log VALUES(862,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-19 09:51:30','系统后台');
INSERT INTO sys_login_log VALUES(863,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-19 09:51:30','系统后台');
INSERT INTO sys_login_log VALUES(864,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-19 09:51:31','系统后台');
INSERT INTO sys_login_log VALUES(865,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-19 09:51:32','系统后台');
INSERT INTO sys_login_log VALUES(866,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-19 09:51:32','系统后台');
INSERT INTO sys_login_log VALUES(867,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-19 11:08:39','系统后台');
INSERT INTO sys_login_log VALUES(868,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-19 11:50:30','系统后台');
INSERT INTO sys_login_log VALUES(869,'demo','127.0.0.1','内网IP','Firefox','Windows 10',1,'登录成功','2022-04-19 15:07:34','系统后台');
INSERT INTO sys_login_log VALUES(870,'admin','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-19 16:38:37','系统后台');
INSERT INTO sys_login_log VALUES(871,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-19 17:29:59','系统后台');
INSERT INTO sys_login_log VALUES(872,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-20 08:42:41','系统后台');
INSERT INTO sys_login_log VALUES(873,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-20 09:51:36','系统后台');
INSERT INTO sys_login_log VALUES(874,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-20 10:41:01','系统后台');
INSERT INTO sys_login_log VALUES(875,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-20 10:50:15','系统后台');
INSERT INTO sys_login_log VALUES(876,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-20 10:50:19','系统后台');
INSERT INTO sys_login_log VALUES(877,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-20 10:50:59','系统后台');
INSERT INTO sys_login_log VALUES(878,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-20 14:38:28','系统后台');
INSERT INTO sys_login_log VALUES(879,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-20 16:26:04','系统后台');
INSERT INTO sys_login_log VALUES(880,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-20 16:27:13','系统后台');
INSERT INTO sys_login_log VALUES(881,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-21 08:31:03','系统后台');
INSERT INTO sys_login_log VALUES(882,'demo','::1','云南省 曲靖市','Chrome','Windows 10',1,'登录成功','2022-04-21 09:22:27','系统后台');
INSERT INTO sys_login_log VALUES(883,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-21 17:17:35','系统后台');
INSERT INTO sys_login_log VALUES(884,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-21 17:27:48','系统后台');
INSERT INTO sys_login_log VALUES(885,'demo','127.0.0.1','内网IP','ApiPOST','',1,'登录成功','2022-04-21 17:28:09','系统后台');
INSERT INTO sys_login_log VALUES(886,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 10:30:13','系统后台');
INSERT INTO sys_login_log VALUES(887,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:05:39','系统后台');
INSERT INTO sys_login_log VALUES(888,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:05:45','系统后台');
INSERT INTO sys_login_log VALUES(889,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:06:21','系统后台');
INSERT INTO sys_login_log VALUES(890,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:06:22','系统后台');
INSERT INTO sys_login_log VALUES(891,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:06:23','系统后台');
INSERT INTO sys_login_log VALUES(892,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:06:23','系统后台');
INSERT INTO sys_login_log VALUES(893,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:07:44','系统后台');
INSERT INTO sys_login_log VALUES(894,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:07:46','系统后台');
INSERT INTO sys_login_log VALUES(895,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:07:46','系统后台');
INSERT INTO sys_login_log VALUES(896,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:07:47','系统后台');
INSERT INTO sys_login_log VALUES(897,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:07:48','系统后台');
INSERT INTO sys_login_log VALUES(898,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:07:48','系统后台');
INSERT INTO sys_login_log VALUES(899,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:07:52','系统后台');
INSERT INTO sys_login_log VALUES(900,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:07:54','系统后台');
INSERT INTO sys_login_log VALUES(901,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:07:58','系统后台');
INSERT INTO sys_login_log VALUES(902,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:08:15','系统后台');
INSERT INTO sys_login_log VALUES(903,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:08:30','系统后台');
INSERT INTO sys_login_log VALUES(904,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:08:31','系统后台');
INSERT INTO sys_login_log VALUES(905,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:08:31','系统后台');
INSERT INTO sys_login_log VALUES(906,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:08:32','系统后台');
INSERT INTO sys_login_log VALUES(907,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:08:33','系统后台');
INSERT INTO sys_login_log VALUES(908,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:08:33','系统后台');
INSERT INTO sys_login_log VALUES(909,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:08:34','系统后台');
INSERT INTO sys_login_log VALUES(910,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:08:34','系统后台');
INSERT INTO sys_login_log VALUES(911,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:10:44','系统后台');
INSERT INTO sys_login_log VALUES(912,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:11:45','系统后台');
INSERT INTO sys_login_log VALUES(913,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:11:49','系统后台');
INSERT INTO sys_login_log VALUES(914,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:11:51','系统后台');
INSERT INTO sys_login_log VALUES(915,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:12:38','系统后台');
INSERT INTO sys_login_log VALUES(916,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:15:41','系统后台');
INSERT INTO sys_login_log VALUES(917,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:15:42','系统后台');
INSERT INTO sys_login_log VALUES(918,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:15:43','系统后台');
INSERT INTO sys_login_log VALUES(919,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:15:44','系统后台');
INSERT INTO sys_login_log VALUES(920,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:15:45','系统后台');
INSERT INTO sys_login_log VALUES(921,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:18:08','系统后台');
INSERT INTO sys_login_log VALUES(922,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:20:00','系统后台');
INSERT INTO sys_login_log VALUES(923,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:20:02','系统后台');
INSERT INTO sys_login_log VALUES(924,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:20:28','系统后台');
INSERT INTO sys_login_log VALUES(925,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:20:28','系统后台');
INSERT INTO sys_login_log VALUES(926,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:20:29','系统后台');
INSERT INTO sys_login_log VALUES(927,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:20:29','系统后台');
INSERT INTO sys_login_log VALUES(928,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:20:29','系统后台');
INSERT INTO sys_login_log VALUES(929,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:20:29','系统后台');
INSERT INTO sys_login_log VALUES(930,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:20:30','系统后台');
INSERT INTO sys_login_log VALUES(931,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:20:30','系统后台');
INSERT INTO sys_login_log VALUES(932,'demo','::1','云南省 昆明市','Chrome','Windows 10',0,'账号密码错误','2022-05-29 15:21:07','系统后台');
INSERT INTO sys_login_log VALUES(933,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:21:19','系统后台');
INSERT INTO sys_login_log VALUES(934,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:21:22','系统后台');
INSERT INTO sys_login_log VALUES(935,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:21:23','系统后台');
INSERT INTO sys_login_log VALUES(936,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:21:24','系统后台');
INSERT INTO sys_login_log VALUES(937,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:21:24','系统后台');
INSERT INTO sys_login_log VALUES(938,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:21:42','系统后台');
INSERT INTO sys_login_log VALUES(939,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:23:36','系统后台');
INSERT INTO sys_login_log VALUES(940,'demo','::1','云南省 昆明市','Chrome','Windows 10',0,'账号密码错误','2022-05-29 15:25:10','系统后台');
INSERT INTO sys_login_log VALUES(941,'demo','::1','云南省 昆明市','Chrome','Windows 10',0,'账号密码错误','2022-05-29 15:25:13','系统后台');
INSERT INTO sys_login_log VALUES(942,'demo','::1','云南省 昆明市','Chrome','Windows 10',0,'账号密码错误','2022-05-29 15:25:14','系统后台');
INSERT INTO sys_login_log VALUES(943,'demo','::1','云南省 昆明市','Chrome','Windows 10',0,'账号密码错误','2022-05-29 15:25:14','系统后台');
INSERT INTO sys_login_log VALUES(944,'demo','::1','云南省 昆明市','Chrome','Windows 10',0,'账号密码错误','2022-05-29 15:25:15','系统后台');
INSERT INTO sys_login_log VALUES(945,'demo','::1','云南省 昆明市','Chrome','Windows 10',0,'账号密码错误','2022-05-29 15:25:17','系统后台');
INSERT INTO sys_login_log VALUES(946,'demo','::1','云南省 昆明市','Chrome','Windows 10',0,'账号密码错误','2022-05-29 15:25:22','系统后台');
INSERT INTO sys_login_log VALUES(947,'demo','::1','云南省 昆明市','Chrome','Windows 10',0,'账号密码错误','2022-05-29 15:44:28','系统后台');
INSERT INTO sys_login_log VALUES(948,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-05-29 15:44:40','系统后台');
INSERT INTO sys_login_log VALUES(949,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-07 21:28:49','系统后台');
INSERT INTO sys_login_log VALUES(950,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-07 22:15:59','系统后台');
INSERT INTO sys_login_log VALUES(951,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-07 22:59:52','系统后台');
INSERT INTO sys_login_log VALUES(952,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-08 09:01:56','系统后台');
INSERT INTO sys_login_log VALUES(953,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-08 09:03:38','系统后台');
INSERT INTO sys_login_log VALUES(954,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-08 13:21:54','系统后台');
INSERT INTO sys_login_log VALUES(955,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-08 13:32:58','系统后台');
INSERT INTO sys_login_log VALUES(956,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-08 13:33:09','系统后台');
INSERT INTO sys_login_log VALUES(957,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-08 13:46:39','系统后台');
INSERT INTO sys_login_log VALUES(958,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-08 13:52:44','系统后台');
INSERT INTO sys_login_log VALUES(959,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-08 13:56:42','系统后台');
INSERT INTO sys_login_log VALUES(960,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-08 13:57:27','系统后台');
INSERT INTO sys_login_log VALUES(961,'admin','::1','云南省 昆明市','Edge','Windows 10',0,'账号密码错误','2022-06-08 15:47:50','系统后台');
INSERT INTO sys_login_log VALUES(962,'admin','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-08 15:47:59','系统后台');
INSERT INTO sys_login_log VALUES(963,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-08 15:54:45','系统后台');
INSERT INTO sys_login_log VALUES(964,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-08 15:56:19','系统后台');
INSERT INTO sys_login_log VALUES(965,'admin','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-08 15:56:44','系统后台');
INSERT INTO sys_login_log VALUES(966,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-08 16:00:52','系统后台');
INSERT INTO sys_login_log VALUES(968,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-09 17:35:56','系统后台');
INSERT INTO sys_login_log VALUES(969,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-09 19:17:28','系统后台');
INSERT INTO sys_login_log VALUES(970,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-06-09 19:18:02','系统后台');
INSERT INTO sys_login_log VALUES(971,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-06-10 22:26:16','系统后台');
INSERT INTO sys_login_log VALUES(972,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-06-10 22:26:24','系统后台');
INSERT INTO sys_login_log VALUES(973,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-06-10 22:35:20','系统后台');
INSERT INTO sys_login_log VALUES(974,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-11 23:34:48','系统后台');
INSERT INTO sys_login_log VALUES(975,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-06-12 09:22:46','系统后台');
INSERT INTO sys_login_log VALUES(976,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-06-12 09:37:45','系统后台');
INSERT INTO sys_login_log VALUES(977,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-12 09:38:18','系统后台');
INSERT INTO sys_login_log VALUES(978,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-12 10:45:06','系统后台');
INSERT INTO sys_login_log VALUES(979,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-12 13:23:54','系统后台');
INSERT INTO sys_login_log VALUES(980,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-12 13:56:49','系统后台');
INSERT INTO sys_login_log VALUES(981,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-12 14:30:00','系统后台');
INSERT INTO sys_login_log VALUES(982,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-14 21:35:23','系统后台');
INSERT INTO sys_login_log VALUES(983,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-06-17 20:58:06','系统后台');
INSERT INTO sys_login_log VALUES(984,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-17 21:01:58','系统后台');
INSERT INTO sys_login_log VALUES(985,'demo','::1','','Edge','Windows 10',1,'登录成功','2022-06-18 11:10:26','系统后台');
INSERT INTO sys_login_log VALUES(986,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-18 11:48:47','系统后台');
INSERT INTO sys_login_log VALUES(987,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-19 09:30:53','系统后台');
INSERT INTO sys_login_log VALUES(988,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-19 10:32:52','系统后台');
INSERT INTO sys_login_log VALUES(989,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-19 14:55:48','系统后台');
INSERT INTO sys_login_log VALUES(990,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-19 14:57:51','系统后台');
INSERT INTO sys_login_log VALUES(991,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-19 15:43:04','系统后台');
INSERT INTO sys_login_log VALUES(992,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-19 17:26:12','系统后台');
INSERT INTO sys_login_log VALUES(993,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-19 18:08:08','系统后台');
INSERT INTO sys_login_log VALUES(994,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-19 18:14:41','系统后台');
INSERT INTO sys_login_log VALUES(995,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-19 18:22:54','系统后台');
INSERT INTO sys_login_log VALUES(996,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-06-21 21:53:00','系统后台');
INSERT INTO sys_login_log VALUES(997,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-21 21:54:03','系统后台');
INSERT INTO sys_login_log VALUES(998,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-22 00:24:01','系统后台');
INSERT INTO sys_login_log VALUES(999,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-22 08:06:26','系统后台');
INSERT INTO sys_login_log VALUES(1000,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-22 10:51:14','系统后台');
INSERT INTO sys_login_log VALUES(1001,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-22 11:00:33','系统后台');
INSERT INTO sys_login_log VALUES(1002,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-22 11:24:03','系统后台');
INSERT INTO sys_login_log VALUES(1003,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-22 11:52:18','系统后台');
INSERT INTO sys_login_log VALUES(1004,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-22 11:56:31','系统后台');
INSERT INTO sys_login_log VALUES(1005,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-22 20:59:21','系统后台');
INSERT INTO sys_login_log VALUES(1006,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-22 21:11:56','系统后台');
INSERT INTO sys_login_log VALUES(1007,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-22 21:14:59','系统后台');
INSERT INTO sys_login_log VALUES(1008,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-22 21:15:32','系统后台');
INSERT INTO sys_login_log VALUES(1009,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-22 21:24:03','系统后台');
INSERT INTO sys_login_log VALUES(1010,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-22 21:39:42','系统后台');
INSERT INTO sys_login_log VALUES(1011,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-06-23 07:45:01','系统后台');
INSERT INTO sys_login_log VALUES(1012,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-23 20:01:16','系统后台');
INSERT INTO sys_login_log VALUES(1013,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-23 23:54:08','系统后台');
INSERT INTO sys_login_log VALUES(1014,'demo','::1','','Edge','Windows 10',1,'登录成功','2022-06-24 00:03:21','系统后台');
INSERT INTO sys_login_log VALUES(1015,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-24 17:05:59','系统后台');
INSERT INTO sys_login_log VALUES(1016,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-24 17:24:17','系统后台');
INSERT INTO sys_login_log VALUES(1017,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-24 17:28:13','系统后台');
INSERT INTO sys_login_log VALUES(1018,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-24 21:58:37','系统后台');
INSERT INTO sys_login_log VALUES(1019,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-24 22:24:40','系统后台');
INSERT INTO sys_login_log VALUES(1020,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-24 22:37:12','系统后台');
INSERT INTO sys_login_log VALUES(1021,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-25 08:23:26','系统后台');
INSERT INTO sys_login_log VALUES(1022,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-25 18:12:36','系统后台');
INSERT INTO sys_login_log VALUES(1023,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-25 18:16:09','系统后台');
INSERT INTO sys_login_log VALUES(1024,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-25 21:19:09','系统后台');
INSERT INTO sys_login_log VALUES(1025,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-26 09:42:12','系统后台');
INSERT INTO sys_login_log VALUES(1026,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-27 22:42:40','系统后台');
INSERT INTO sys_login_log VALUES(1027,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-27 23:23:54','系统后台');
INSERT INTO sys_login_log VALUES(1028,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-27 23:27:37','系统后台');
INSERT INTO sys_login_log VALUES(1029,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-06-27 23:37:57','系统后台');
INSERT INTO sys_login_log VALUES(1030,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-07-02 23:08:27','系统后台');
INSERT INTO sys_login_log VALUES(1031,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-07-02 23:40:47','系统后台');
INSERT INTO sys_login_log VALUES(1032,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-07-02 23:41:10','系统后台');
INSERT INTO sys_login_log VALUES(1033,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-07-02 23:50:18','系统后台');
INSERT INTO sys_login_log VALUES(1034,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-07-11 23:35:54','系统后台');
INSERT INTO sys_login_log VALUES(1035,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-07-12 23:27:27','系统后台');
INSERT INTO sys_login_log VALUES(1036,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-07-14 21:49:31','系统后台');
INSERT INTO sys_login_log VALUES(1037,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-07-15 22:00:04','系统后台');
INSERT INTO sys_login_log VALUES(1038,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-07-16 15:25:24','系统后台');
INSERT INTO sys_login_log VALUES(1039,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-07-16 15:53:33','系统后台');
INSERT INTO sys_login_log VALUES(1040,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-07-16 16:03:44','系统后台');
INSERT INTO sys_login_log VALUES(1041,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-07-18 20:36:30','系统后台');
INSERT INTO sys_login_log VALUES(1042,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-07-22 10:13:11','系统后台');
INSERT INTO sys_login_log VALUES(1043,'demo','::1','福建省 福州市','Edge','Windows 10',1,'登录成功','2022-07-22 10:35:30','系统后台');
INSERT INTO sys_login_log VALUES(1044,'demo','::1','福建省 福州市','Edge','Windows 10',1,'登录成功','2022-07-22 10:36:04','系统后台');
INSERT INTO sys_login_log VALUES(1045,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-07-26 16:31:02','系统后台');
INSERT INTO sys_login_log VALUES(1046,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-07-26 16:33:05','系统后台');
INSERT INTO sys_login_log VALUES(1047,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-07-26 16:33:09','系统后台');
INSERT INTO sys_login_log VALUES(1048,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-07-26 16:33:17','系统后台');
INSERT INTO sys_login_log VALUES(1049,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-07-26 16:33:25','系统后台');
INSERT INTO sys_login_log VALUES(1050,'demo','::1','云南省 昆明市','Chrome','Windows 10',1,'登录成功','2022-07-26 16:33:44','系统后台');
INSERT INTO sys_login_log VALUES(1051,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-07-26 23:18:53','系统后台');
INSERT INTO sys_login_log VALUES(1052,'demo','::1','云南省 昆明市','Edge','Windows 10',1,'登录成功','2022-07-26 23:20:28','系统后台');
INSERT INTO sys_login_log VALUES(1053,'demo','::1','','Safari','Intel Mac OS X 10_15_7',1,'登录成功','2026-09-22 22:07:49','系统后台');
CREATE TABLE IF NOT EXISTS `sys_oper_log` (
  `oper_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(50),
  `business_type` INT(11),
  `method` VARCHAR(100),
  `request_method` VARCHAR(10),
  `operator_type` INT(11),
  `oper_name` VARCHAR(50),
  `dept_name` VARCHAR(50),
  `oper_url` VARCHAR(500),
  `oper_ip` VARCHAR(50),
  `oper_location` VARCHAR(255),
  `oper_param` TEXT,
  `json_result` TEXT,
  `status` INT(11),
  `error_msg` VARCHAR(2000),
  `oper_time` TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE IF NOT EXISTS `sys_post` (
  `post_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `post_code` VARCHAR(64) NOT NULL,
  `post_name` VARCHAR(50) NOT NULL,
  `post_sort` INT(11) NOT NULL,
  `status` INT(3) NOT NULL,
  `remark` VARCHAR(500),
  `created_by` INT(20) NOT NULL,
  `updated_by` INT(20) NOT NULL,
  `created_at` DATETIME,
  `updated_at` DATETIME,
  `deleted_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_post VALUES(1,'ceo','董事长',1,1,'',0,0,'2021-07-11 11:32:58',NULL,NULL);
INSERT INTO sys_post VALUES(2,'se','项目经理',2,1,'',0,0,'2021-07-12 11:01:26',NULL,NULL);
INSERT INTO sys_post VALUES(3,'hr','人力资源',3,1,'',0,0,'2021-07-12 11:01:30',NULL,NULL);
INSERT INTO sys_post VALUES(4,'user','普通员工',4,0,'普通员工',0,31,'2021-07-12 11:01:33','2022-04-08 15:32:23',NULL);
INSERT INTO sys_post VALUES(5,'it','IT部',5,1,'信息部',31,31,'2021-07-12 11:09:42','2022-04-09 12:59:12',NULL);
INSERT INTO sys_post VALUES(6,'1111','1111',0,1,'11111',31,0,'2022-04-08 15:32:44','2022-04-08 15:32:44','2022-04-08 15:51:24');
INSERT INTO sys_post VALUES(7,'222','2222',0,1,'22222',31,0,'2022-04-08 15:32:55','2022-04-08 15:32:55','2022-04-08 15:51:24');
INSERT INTO sys_post VALUES(8,'33333','3333',0,0,'33333',31,0,'2022-04-08 15:33:01','2022-04-08 15:33:01','2022-04-08 15:51:40');
INSERT INTO sys_post VALUES(9,'222','111',0,1,'2313213',31,0,'2022-04-08 15:52:53','2022-04-08 15:52:53','2022-04-08 15:52:56');
CREATE TABLE IF NOT EXISTS `sys_role` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `status` INT(3) NOT NULL,
  `list_order` INT(10) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  `remark` VARCHAR(255) NOT NULL,
  `data_scope` INT(3) NOT NULL,
  `created_at` DATETIME,
  `updated_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_role VALUES(1,1,0,'超级管理员','备注',3,'2022-04-01 11:38:39','2022-04-09 12:59:28');
INSERT INTO sys_role VALUES(2,1,0,'普通管理员','备注',3,'2022-04-01 11:38:39','2022-04-01 11:38:39');
INSERT INTO sys_role VALUES(3,1,0,'站点管理员','站点管理人员',3,'2022-04-01 11:38:39','2022-04-01 11:38:39');
INSERT INTO sys_role VALUES(4,1,0,'初级管理员','初级管理员',3,'2022-04-01 11:38:39','2022-04-01 11:38:39');
INSERT INTO sys_role VALUES(5,1,0,'高级管理员','高级管理员',2,'2022-04-01 11:38:39','2022-04-01 11:38:39');
INSERT INTO sys_role VALUES(8,1,0,'区级管理员','',2,'2022-04-01 11:38:39','2022-04-06 09:53:40');
CREATE TABLE IF NOT EXISTS `sys_role_dept` (
  `role_id` INT(20) NOT NULL,
  `dept_id` INT(20) NOT NULL,
  PRIMARY KEY (`role_id`, `dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_role_dept VALUES(5,103);
INSERT INTO sys_role_dept VALUES(5,104);
INSERT INTO sys_role_dept VALUES(5,105);
INSERT INTO sys_role_dept VALUES(8,105);
INSERT INTO sys_role_dept VALUES(8,106);
CREATE TABLE IF NOT EXISTS `sys_user` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_name` VARCHAR(60) NOT NULL,
  `mobile` VARCHAR(20) NOT NULL,
  `user_nickname` VARCHAR(50) NOT NULL,
  `birthday` INT(11) NOT NULL,
  `user_password` VARCHAR(255) NOT NULL,
  `user_salt` VARCHAR(10) NOT NULL,
  `user_status` INT(3) NOT NULL,
  `user_email` VARCHAR(100) NOT NULL,
  `sex` INT(4) NOT NULL,
  `avatar` VARCHAR(255) NOT NULL,
  `dept_id` INT(20) NOT NULL,
  `remark` VARCHAR(255) NOT NULL,
  `is_admin` INT(4) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `describe` VARCHAR(255) NOT NULL,
  `last_login_ip` VARCHAR(15) NOT NULL,
  `last_login_time` TEXT,
  `created_at` DATETIME,
  `updated_at` DATETIME,
  `deleted_at` DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_user VALUES(1,'admin','13578342363','超级管理员',0,'c567ae329f9929b518759d3bea13f492','f9aZTAa8yz',1,'yxh669@qq.com',1,'https://yxh-1301841944.cos.ap-chongqing.myqcloud.com/gfast/2021-07-19/ccwpeuqz1i2s769hua.jpeg',101,'',1,'asdasfdsaf大发放打发士大夫发按时','描述信息','::1','2022-06-08 15:56:44','2021-06-22 17:58:00','2022-06-08 15:56:44',NULL);
INSERT INTO sys_user VALUES(2,'yixiaohu','13699885599','奈斯',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'yxh@qq.com',1,'pub_upload/2020-11-02/c6sntzg7r96c7p9gqf.jpeg',102,'备注',1,'','','[::1]','2022-02-14 18:10:40','2021-06-22 17:58:00','2022-04-13 11:20:03',NULL);
INSERT INTO sys_user VALUES(3,'zs','16399669855','张三',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'zs@qq.com',0,'https://yxh-1301841944.cos.ap-chongqing.myqcloud.com/gfast/2021-08-02/cd8nif79egjg9kbkgk.jpeg',101,'',1,'','','127.0.0.1','2022-03-18 15:22:13','2021-06-22 17:58:00','2022-04-21 11:20:06',NULL);
INSERT INTO sys_user VALUES(4,'qlgl','13758596696','测试c',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'qlgl@qq.com',0,'',102,'',1,'','','127.0.0.1',NULL,'2021-06-22 17:58:00','2022-04-12 17:55:28',NULL);
INSERT INTO sys_user VALUES(5,'test','13845696696','测试2',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'123@qq.com',0,'',101,'',0,'','','::1','2022-03-30 10:50:39','2021-06-22 17:58:00','2022-04-12 17:55:31',NULL);
INSERT INTO sys_user VALUES(6,'18999998889','13755866654','刘大大',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'1223@qq.com',0,'',103,'',1,'','','[::1]','2022-02-25 14:29:22','2021-06-22 17:58:00','2022-04-14 21:11:06',NULL);
INSERT INTO sys_user VALUES(7,'zmm','13788566696','张明明',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'11123@qq.com',0,'',104,'',1,'','','127.0.0.1',NULL,'2021-06-22 17:58:00','2022-04-12 17:55:42',NULL);
INSERT INTO sys_user VALUES(8,'lxx','13756566696','李小小',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'123333@qq.com',0,'',101,'',1,'','','127.0.0.1',NULL,'2021-06-22 17:58:00','2022-04-12 17:55:45',NULL);
INSERT INTO sys_user VALUES(10,'xmm','13588999969','小秘密',0,'2de2a8df703bfc634cfda2cb2f6a59be','Frz7LJY7SE',1,'696@qq.com',0,'',101,'',1,'','','[::1]','2021-07-22 17:08:53','2021-06-22 17:58:00','2022-04-12 17:55:50',NULL);
INSERT INTO sys_user VALUES(14,'cd_19','13699888899','看金利科技',0,'1169d5fe4119fd4277a95f02d7036171','7paigEoedh',1,'',0,'',102,'',1,'','','',NULL,'2021-06-22 17:58:00','2022-04-12 18:13:22',NULL);
INSERT INTO sys_user VALUES(15,'lmm','13587754545','刘敏敏',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'a@coc.com',0,'',201,'',1,'','','127.0.0.1',NULL,'2021-06-22 17:58:00','2022-04-12 17:56:23',NULL);
INSERT INTO sys_user VALUES(16,'ldn','13899658874','李大牛',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'a@ll.con',0,'',102,'',1,'','','127.0.0.1',NULL,'2021-06-22 17:58:00','2022-04-12 17:56:27',NULL);
INSERT INTO sys_user VALUES(20,'dbc','13877555566','大百词',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'',0,'',0,'',1,'','','',NULL,'2021-06-22 17:58:00','2021-06-22 17:58:00',NULL);
INSERT INTO sys_user VALUES(22,'yxfmlbb','15969423326','大数据部门测试',0,'66f89b40ee4a10aabaf70c15756429ea','mvd2OtUe8f',1,'yxh6691@qq.com',0,'https://yxh-1301841944.cos.ap-chongqing.myqcloud.com/gfast/2021-09-29/cem20k3fdciosy7nwo.jpeg',200,'',1,'2222233','1222','[::1]','2021-10-28 11:36:07','2021-06-22 17:58:00','2021-06-22 17:58:00',NULL);
INSERT INTO sys_user VALUES(23,'wangming','13699888855','王明',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'',0,'',0,'',1,'','','',NULL,'2021-06-22 17:58:00','2021-06-22 17:58:00',NULL);
INSERT INTO sys_user VALUES(24,'zhk','13699885591','综合科',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'',0,'',0,'',1,'','','192.168.0.146',NULL,'2021-06-22 17:58:00','2021-06-22 17:58:00',NULL);
INSERT INTO sys_user VALUES(28,'demo3','18699888855','测试账号1',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'123132@qq.com',0,'',109,'',1,'','','192.168.0.229',NULL,'2021-06-22 17:58:00','2021-06-22 17:58:00',NULL);
INSERT INTO sys_user VALUES(31,'demo','15334455789','李四',0,'39978de67915a11e94bfe9c879b2d9a1','gqwLs4n95E',1,'223@qq.com',2,'https://yxh-1301841944.cos.ap-chongqing.myqcloud.com/gfast/2021-11-30/cg30rab8myj85vjzcf.jpeg',109,'',1,'云南省曲靖市22223','12345','::1','2026-09-22 22:07:49','2021-06-22 17:58:00','2026-09-22 22:07:49',NULL);
INSERT INTO sys_user VALUES(32,'demo100','18699888859','测试账号1',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'',0,'',0,'',1,'','','[::1]','2021-11-24 18:01:21','2021-06-22 17:58:00','2021-06-22 17:58:00',NULL);
INSERT INTO sys_user VALUES(33,'demo110','18699888853','测试账号1',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'',0,'',0,'',1,'','','',NULL,'2021-06-22 17:58:00','2021-06-22 17:58:00',NULL);
INSERT INTO sys_user VALUES(34,'yxfmlbb2','15969423327','研发部门测试',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'1111@qqq.com',1,'',103,'',0,'','','127.0.0.1',NULL,'2021-06-22 17:58:00','2021-06-22 17:58:00',NULL);
INSERT INTO sys_user VALUES(35,'wk666','18888888888','wk',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'396861557@qq.com',1,'',100,'',1,'','','[::1]','2021-12-09 14:52:37','2021-06-22 17:58:00','2021-06-22 17:58:00',NULL);
INSERT INTO sys_user VALUES(36,'zxd','13699885565','张晓东',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'zxk@qq.com',1,'',201,'666',1,'','','',NULL,'2021-06-22 17:58:00','2021-06-22 17:58:00',NULL);
INSERT INTO sys_user VALUES(37,'yxfmlbb3','13513513511','张三',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'111@qq.com',0,'',204,'',1,'','','[::1]','2021-07-26 14:49:25','2021-06-22 17:58:00','2021-07-26 14:49:18',NULL);
INSERT INTO sys_user VALUES(38,'test_user','18888888880','test',0,'542a6e44dbac171f260fc4a032cd5522','dlqVVBTADg',1,'11@qq.com',1,'',200,'111',0,'','','',NULL,'2021-06-22 17:58:00','2021-07-12 22:05:29',NULL);
INSERT INTO sys_user VALUES(39,'asan','18687460555','阿三',0,'2354837137115700e2adf870ac113dcf','drdDvbtYZW',1,'456654@qq.com',1,'',201,'666666',1,'','','',NULL,'2021-07-12 17:21:43','2021-07-12 21:13:31','2021-07-12 22:00:44');
CREATE TABLE IF NOT EXISTS `sys_user_online` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `uuid` VARCHAR(32) NOT NULL,
  `token` VARCHAR(255) NOT NULL,
  `create_time` TEXT,
  `user_name` VARCHAR(255) NOT NULL,
  `ip` VARCHAR(120) NOT NULL,
  `explorer` VARCHAR(30) NOT NULL,
  `os` VARCHAR(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_user_online VALUES(16837,'7792f0712f75d3b5358e66cdf03d503b','oqvgpXlo+yd79rXmKL2otwfhEkHseCvwM5m6FA4zk6QJqJq2IWi6ZsRlgU3j9+ZrXU5HcYR3La2Lg4N4u0+lv4RA4BbfUXXPGV7khtTik6TDHoUz1IMnVGWsYKHiCXvzxB7bY4XLJVuT1EthU087Ug==','2022-05-28 13:50:09','demo','[::1]','Chrome','Windows 10');
CREATE TABLE IF NOT EXISTS `sys_user_post` (
  `user_id` INT(20) NOT NULL,
  `post_id` INT(20) NOT NULL,
  PRIMARY KEY (`user_id`, `post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
INSERT INTO sys_user_post VALUES(1,2);
INSERT INTO sys_user_post VALUES(1,3);
INSERT INTO sys_user_post VALUES(2,1);
INSERT INTO sys_user_post VALUES(2,2);
INSERT INTO sys_user_post VALUES(3,2);
INSERT INTO sys_user_post VALUES(5,2);
INSERT INTO sys_user_post VALUES(14,1);
INSERT INTO sys_user_post VALUES(15,4);
INSERT INTO sys_user_post VALUES(16,2);
INSERT INTO sys_user_post VALUES(22,1);
INSERT INTO sys_user_post VALUES(22,2);
INSERT INTO sys_user_post VALUES(31,2);
INSERT INTO sys_user_post VALUES(34,1);
INSERT INTO sys_user_post VALUES(35,2);
INSERT INTO sys_user_post VALUES(35,3);
INSERT INTO sys_user_post VALUES(36,1);
INSERT INTO sys_user_post VALUES(37,3);
INSERT INTO sys_user_post VALUES(38,2);
INSERT INTO sys_user_post VALUES(38,3);
CREATE INDEX `topic_record_id`
ON `mqtt_msg_record` (
  `topic_id`
);
CREATE INDEX `name`
ON `sys_auth_rule` (
  `name`
);
CREATE INDEX `pid`
ON `sys_auth_rule` (
  `pid`
);
CREATE INDEX `weigh`
ON `sys_auth_rule` (
  `weigh`
);
CREATE INDEX `uni_config_key`
ON `sys_config` (
  `config_key`
);
CREATE INDEX `dict_type`
ON `sys_dict_type` (
  `dict_type`
);
CREATE INDEX `status`
ON `sys_role` (
  `status`
);
CREATE INDEX `user_login`
ON `sys_user` (
  `user_name`,
  `deleted_at`
);
CREATE INDEX `mobile`
ON `sys_user` (
  `mobile`,
  `deleted_at`
);
CREATE INDEX `user_nickname`
ON `sys_user` (
  `user_nickname`
);
CREATE INDEX `uni_token`
ON `sys_user_online` (
  `token`
);
COMMIT;
SET FOREIGN_KEY_CHECKS=1;
