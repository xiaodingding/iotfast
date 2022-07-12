<template>
  <el-form ref="genInfoForm" :model="info" :rules="rules" label-width="150px">

        <el-form-item label="生成模板" prop="tplCategory">
          <el-select v-model="info.tplCategory">
            <el-option label="单表（增删改查）" value="crud" />
            <el-option label="树表（增删改查）" value="tree"/>
          </el-select>
        </el-form-item>
subTree
        <el-form-item label="生成包路径" prop="packageName">

            <el-tooltip content="生成在哪个包下，例如 iotfast/app/system" placement="top">
              <i class="el-icon-question"></i>
            </el-tooltip>
  
          <el-input v-model="info.packageName" />
        </el-form-item>

        <el-form-item label="生成模块名" prop="moduleName">

            <el-tooltip content="可理解为子系统名，例如 system" placement="top">
              <i class="el-icon-question"></i>
            </el-tooltip>
          <el-input v-model="info.moduleName" />
        </el-form-item>

        <el-form-item label="生成业务名" prop="businessName">
            <el-tooltip content="可理解为功能英文名，例如 user" placement="top">
              <i class="el-icon-question"></i>
            </el-tooltip>
          <el-input v-model="info.businessName" />
        </el-form-item>

        <el-form-item label="生成功能名" prop="functionName">
            <el-tooltip content="用作类描述，例如 用户" placement="top">
              <i class="el-icon-question"></i>
            </el-tooltip>
          <el-input v-model="info.functionName" />
        </el-form-item>

      <h4 class="form-header">其他信息</h4>
   
        <el-form-item label="树编码字段" v-show="info.tplCategory == 'tree'">

            <el-tooltip content="树显示的编码字段名， 如：dept_id" placement="top">
              <i class="el-icon-question"></i>
            </el-tooltip>

          <el-select v-model="info.treeCode" placeholder="请选择">
            <el-option
              v-for="column in info.columns"
              :key="column.htmlField"
              :label="column.columnName + '：' + column.columnComment"
              :value="column.htmlField"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="树父编码字段">
            <el-tooltip content="树显示的父编码字段名， 如：parent_Id" placement="top">
              <i class="el-icon-question"></i>
            </el-tooltip>
          <el-select v-model="info.treeParentCode" placeholder="请选择">
            <el-option
              v-for="column in info.columns"
              :key="column.htmlField"
              :label="column.columnName + '：' + column.columnComment"
              :value="column.htmlField"
            ></el-option>
          </el-select>
        </el-form-item>


        <el-form-item label ="树名称字段">

            <el-tooltip content="树节点的显示名称字段名， 如：dept_name" placement="top">
              <i class="el-icon-question"></i>
            </el-tooltip>

          <el-select v-model="info.treeName" placeholder="请选择">
            <el-option
              v-for="column in info.columns"
              :key="column.htmlField"
              :label="column.columnName + '：' + column.columnComment"
              :value="column.htmlField"
            ></el-option>
          </el-select>
        </el-form-item>

  </el-form>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted, defineComponent, ref } from 'vue';

interface BasicInfoState {
   // info:any;
    rules:any;
}

export default defineComponent({
	name: 'BasicInfoForm',
     props: {
        info: {
          type: Object,
          requried:true
        }
      },
	setup() {
      //  console.log("gen info form:",prop.info);
        const genInfoForm = ref();
        const state = reactive<BasicInfoState>({
     //   info:prop.info,
        rules: {
            tplCategory: [
            { required: true, message: "请选择生成模板", trigger: "blur" }
            ],
            packageName: [
            { required: true, message: "请输入生成包路径", trigger: "blur" }
            ],
            moduleName: [
            { required: true, message: "请输入生成模块名", trigger: "blur" }
            ],
            businessName: [
            { required: true, message: "请输入生成业务名", trigger: "blur" }
            ],
            functionName: [
            { required: true, message: "请输入生成功能名", trigger: "blur" }
            ]
        }
        });

	return {
            genInfoForm,
			...toRefs(state),
		};
	},
});
</script>
