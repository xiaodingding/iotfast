/*
==========================================================================
物联网快速开发自动生成菜单SQL,只生成一次,按需修改.
生成日期：2022-06-21 22:06:16
生成路径: data/gen_sql/device/device_category_data_menu.sql
生成人：dwx
==========================================================================
*/
-- 当前日期
select @now := now();
-- 目录 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(0,'device/deviceCategoryData','设备类别数据管理','form','','设备类别数据管理',0,0,0,0,'/device/deviceCategoryData','','',0,'sys_admin',0,@now,@now,NULL );
-- 菜单父目录ID
SELECT @parentId := LAST_INSERT_ID();
-- 菜单 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'api/v1/device/deviceCategoryData/index','设备类别数据列表','list','','设备类别数据列表',1,0,0,0,'/device/deviceCategoryData/list','','device/deviceCategoryData/list',0,'sys_admin',0,@now,@now,NULL );
-- 按钮父目录ID
SELECT @parentId := LAST_INSERT_ID();
-- 按钮 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'device/deviceCategoryData/get','设备类别数据查询','','','设备类别数据查询',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'device/deviceCategoryData/add','设备类别数据添加','','','设备类别数据添加',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'device/deviceCategoryData/edit','设备类别数据修改','','','设备类别数据修改',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`is_hide`,`always_show`,`path`,`jump_path`,`component`,`is_iframe`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'device/deviceCategoryData/delete','设备类别数据删除','','','设备类别数据删除',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
