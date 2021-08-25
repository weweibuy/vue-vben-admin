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
              // onClick: handleDelete.bind(null, record),
            },
          ]"
                :dropDownActions="[
            {
              label: '启用',
              popConfirm: {
                title: '是否启用？',
                // confirm: handleOpen.bind(null, record),
              },
            },
          ]"
            />
        </template>
    </BasicTable>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {BasicTable, TableAction, useTable} from '/@/components/Table';
import { getBasicColumns, getFormConfig } from './tableData';
import { Alert } from 'ant-design-vue';

import { queryGatewayRouterListApi } from '/@/api/gateway/gateway';

export default defineComponent({
    components: { BasicTable,TableAction, AAlert: Alert },
    setup() {
        const [registerTable] = useTable({
            title: '路由列表',
            api: queryGatewayRouterListApi,
            columns: getBasicColumns(),
            useSearchForm: true,
            formConfig: getFormConfig(),
            showTableSetting: true,
            tableSetting: { fullScreen: true },
            showIndexColumn: false,
            rowKey: 'routerId',
            actionColumn: {
                width: 160,
                title: 'Action',
                dataIndex: 'action',
                slots: { customRender: 'action' },
            },
        });

        return {
            registerTable,
        };


    },
});
</script>
