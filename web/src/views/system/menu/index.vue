<template>
  <div class="system-menu-container">
    <el-card shadow="hover">
      <div class="system-menu-search mb15">
        <el-form :inline="true" size="default" label-width="100px" >
          <el-form-item label="菜单名称">
            <el-input
              v-model="queryParams.title"
              placeholder="请输入菜单名称"
              clearable
            />
          </el-form-item>
          <el-form-item label="组件路径">
            <el-input
              v-model="queryParams.component"
              placeholder="请输入组件路径"
              clearable
            />
          </el-form-item>
          <el-form-item>
            <el-button  type="primary"  @click="handleQuery">
              <el-icon>
                <ele-Search />
              </el-icon>
              查询
            </el-button>
            </el-form-item>
            <el-form-item style="vertical-align: top;">
            <el-button type="success"  @click="onOpenAddMenu(null)" v-auth="'api/v1/system/menu/add'">
              <el-icon>
                <ele-FolderAdd />
              </el-icon>
              新增菜单
            </el-button>
          </el-form-item>
        </el-form>
      </div>
			<el-table :data="menuTableData" style="width: 100%" row-key="path" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
        <el-table-column label="菜单名称" show-overflow-tooltip>
          <template #default="scope">
						<SvgIcon :name="scope.row.icon" />
						<span class="ml10">{{ scope.row.title }}</span>
          </template>
        </el-table-column>
				<el-table-column prop="path" label="路由路径" show-overflow-tooltip></el-table-column>
        <el-table-column label="组件路径" show-overflow-tooltip>
          <template #default="scope">
            <span>{{ scope.row.component }}</span>
          </template>
        </el-table-column>
				<el-table-column label="api接口" show-overflow-tooltip>
          <template #default="scope">
						<span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="排序" show-overflow-tooltip width="80">
          <template #default="scope">
						{{ scope.row.weigh }}
          </template>
        </el-table-column>
        <el-table-column label="类型" show-overflow-tooltip width="80">
          <template #default="scope">
						<el-tag :type="scope.row.menuType===0?'danger':(scope.row.menuType===1?'success':'warning')"
                    size="small">{{scope.row.menuType===0?'目录':(scope.row.menuType===1?'菜单':'按钮') }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="isHide" label="显示状态" :formatter="formatIsHide" width="100"></el-table-column>
        <el-table-column label="操作" show-overflow-tooltip width="160">
          <template #default="scope">
						<el-button class="no_padding" v-if="scope.row.menuType!==2" size="small" type="text" @click="onOpenAddMenu(scope.row)" v-auth="'api/v1/system/menu/add'">新增</el-button>
						<el-button class="no_padding" size="small" type="text" @click="onOpenEditMenu(scope.row)" v-auth="'api/v1/system/menu/update'">修改</el-button>
						<el-button class="no_padding"  size="small" type="text" @click="onTabelRowDel(scope.row)" v-auth="'api/v1/system/menu/delete'">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <AddMenu ref="addMenuRef" />
    <EditMenu ref="editMenuRef"  @menuList="menuList" :visibleOptions="sys_show_hide" :acType="acType"/>
  </div>
</template>

<script lang="ts">
import { ElMessage, ElMessageBox } from "element-plus";
import { storeToRefs } from "pinia";
import {
defineComponent,
getCurrentInstance,
onBeforeMount,
reactive,
ref,
toRefs,
unref
} from "vue";
import { RouteRecordRaw } from "vue-router";
import { useDict } from "/@/api/system/dict/data";
import { delMenu, getMenuList } from "/@/api/system/menu";
import { useRoutesList } from "/@/stores/routesList";
import { handleTree, selectDictLabel } from "/@/utils/common";
import AddMenu from "/@/views/system/menu/component/addMenu.vue";
import EditMenu from "/@/views/system/menu/component/editMenu.vue";


export default defineComponent({
  name: "systemMenu",
  components: { AddMenu, EditMenu },
  setup() {
    const stores = useRoutesList();
    const { routesList } = storeToRefs(stores);
    const addMenuRef = ref();
    const editMenuRef = ref();
    const state = reactive({
      queryParams: {
        title: "",
        component: "",
      },
      menuTableData: [],
    });
    const { proxy } = getCurrentInstance() as any;
    const { sys_show_hide } = useDict("sys_show_hide");
    const acType = ref("add");

    // 打开新增菜单弹窗
    const onOpenAddMenu = (row: any) => {
      //addMenuRef.value.openDialog();
      acType.value = "add";
      editMenuRef.value.openDialog(row);
    };
    // 打开编辑菜单弹窗
    const onOpenEditMenu = (row: RouteRecordRaw) => {
      //editMenuRef.value.openDialog(row);
      acType.value = "edit";
      editMenuRef.value.openDialog(row);
    };
    // 删除当前行
    const onTabelRowDel = (row: any) => {
      ElMessageBox.confirm(`此操作将永久删除路由：${row.title}, 是否继续?`, "提示", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delMenu(row.id).then(() => {
            ElMessage.success("删除成功");
           // proxy.$refs["editMenuRef"].resetMenuSession();
            menuList();
          });
        })
        .catch(() => {});
    };
    const formatIsHide = (row: any) => {
      return selectDictLabel(unref(sys_show_hide), "" + row.isHide);
    };
    onBeforeMount(() => {
      menuList();
    });
    const handleQuery = () => {
      menuList();
    };
    const menuList = () => {
      getMenuList(state.queryParams).then(res=>{
        state.menuTableData = handleTree(res.data.rules ?? [], "id", "pid");
      });
    };
    return {
      addMenuRef,
      editMenuRef,
      onOpenAddMenu,
      onOpenEditMenu,
      onTabelRowDel,
      formatIsHide,
      menuList,
      handleQuery,
      ...toRefs(state),
      sys_show_hide,
      acType,
    };
  },
});
</script>
