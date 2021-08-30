<template>
    <BasicTable
        @register="registerTable">
        <template #action="{ record }">
            <TableAction
                stopButtonPropagation
                :actions="[
            {
              label: '删除',
              icon: 'ic:outline-delete-outline',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
             {
              label: '编辑',
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
              },
               {
              label: '详情',
              icon: 'ic:search-outlined',
              onClick: handleDetailView.bind(null, record),
              }
          ]"
            />
        </template>
        <template #toolbar>
            <a-button type="primary" >新增路由</a-button>
        </template>
    </BasicTable>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import {BasicTable, TableAction, useTable} from '/@/components/Table';
import {routerListBasicColumns, routerListFormConfig} from './GateRouterData';
import {Alert} from 'ant-design-vue';
import { useGo } from '/@/hooks/web/usePage';

import {queryGatewayRouterListApi} from '/@/api/gateway/gateway';

export default defineComponent({
    components: {BasicTable, TableAction, AAlert: Alert},
    setup() {
        const go = useGo();
        const [registerTable, {reload}] = useTable({
            title: '路由列表',
            api: queryGatewayRouterListApi,
            columns: routerListBasicColumns(),
            useSearchForm: true,
            formConfig: routerListFormConfig(),
            showTableSetting: true,
            tableSetting: {fullScreen: true},
            showIndexColumn: false,
            rowKey: 'routerId',
            actionColumn: {
                width: 160,
                title: 'Action',
                dataIndex: 'action',
                slots: {customRender: 'action'},
            },
        });

        function handleDelete(record: Recordable) {
            console.log(record);
        }

        function handleEdit(record: Recordable) {
        }

        function handleDetailView(record: Recordable) {
            go('/gateway/routerDetail/' + record.id);
        }

        function handleEditSuccess({isUpdate, values}) {
            // TODO 调用接口
            reload();
        }

        return {
            registerTable,
            handleDelete,
            handleEdit,
            handleEditSuccess,
            handleDetailView
        };


    },
});
</script>
