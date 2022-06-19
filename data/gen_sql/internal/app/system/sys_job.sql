/*
==========================================================================
物联网快速开发自动生成菜单SQL,只生成一次,按需修改.
生成日期：2022-06-18 13:58:41
生成路径: data/gen_sql/system/job_menu.sql
生成人：dwx
==========================================================================
*/
-- 当前日期
select @now := now();
-- 目录 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`status`,`always_show`,`path`,`jump_path`,`component`,`is_frame`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(0,'system/job','定时任务调度管理','form','','定时任务调度管理',0,0,1,1,'job','','',0,'sys_admin',0,@now,@now,NULL );
-- 菜单父目录ID
SELECT @parentId := LAST_INSERT_ID();
-- 菜单 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`status`,`always_show`,`path`,`jump_path`,`component`,`is_frame`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'system/job/list','定时任务调度列表','list','','定时任务调度列表',1,0,1,1,'jobList','','system/job/list',0,'sys_admin',0,@now,@now,NULL );
-- 按钮父目录ID
SELECT @parentId := LAST_INSERT_ID();
-- 按钮 SQL
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`status`,`always_show`,`path`,`jump_path`,`component`,`is_frame`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'system/job/get','定时任务调度查询','','','定时任务调度查询',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`status`,`always_show`,`path`,`jump_path`,`component`,`is_frame`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'system/job/add','定时任务调度添加','','','定时任务调度添加',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`status`,`always_show`,`path`,`jump_path`,`component`,`is_frame`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'system/job/edit','定时任务调度修改','','','定时任务调度修改',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`status`,`always_show`,`path`,`jump_path`,`component`,`is_frame`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'system/job/delete','定时任务调度删除','','','定时任务调度删除',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
INSERT INTO `sys_auth_rule` (`pid`,`name`,`title`,`icon`,`condition`,`remark`,`menu_type`,`weigh`,`status`,`always_show`,`path`,`jump_path`,`component`,`is_frame`,`module_type`,`model_id`,`created_at`,`updated_at`,`deleted_at` )
VALUES(@parentId,'system/job/changeStatus','定时任务调度状态（0正常 1暂停）修改','','','定时任务调度状态（0正常 1暂停）修改',2,0,1,1,'','','',0,'sys_admin',0,@now,@now,NULL );
