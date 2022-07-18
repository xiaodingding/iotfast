/*
==========================================================================
物联网快速开发自动生成菜单SQL,只生成一次,按需修改.
生成日期：2022-07-16 15:59:37
生成路径: data/gen_sql/link/link_serial_menu.sql
生成人：dwx
==========================================================================
*/
-- 当前日期
select @now := now();
-- 目录 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(0,'link/linkSerial','串口连接信息管理管理','form','','串口连接信息管理管理',0,0,0,0,'/link/linkSerial','','',0,'sys_admin',0,@now,@now,NULL );
-- 菜单父目录ID
SELECT @parentId := LAST_INSERT_ID();
-- 菜单 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/link/linkSerial/index','串口连接信息管理列表','list','','串口连接信息管理列表',1,0,0,0,'/link/linkSerial/list','','link/linkSerial/index',0,'sys_admin',0,@now,@now,NULL );
-- 按钮父目录ID
SELECT @parentId := LAST_INSERT_ID();
-- 按钮 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/link/linkSerial/get','串口连接信息管理查询','','','串口连接信息管理查询',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/link/linkSerial/add','串口连接信息管理添加','','','串口连接信息管理添加',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/link/linkSerial/edit','串口连接信息管理修改','','','串口连接信息管理修改',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/link/linkSerial/delete','串口连接信息管理删除','','','串口连接信息管理删除',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
