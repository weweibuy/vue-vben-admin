<template>
    <BasicTable
        @register="registerTable">
        <template #form-custom> custom-slot </template>
        <template #toolbar>
            <a-button type="primary" @click="getFormValues">获取表单数据</a-button>
        </template>
    </BasicTable>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { BasicTable, useTable } from '/@/components/Table';
import { getBasicColumns, getFormConfig } from './tableData';
import { Alert } from 'ant-design-vue';

import { queryGatewayRouterListApi } from '/@/api/gateway/gateway';

export default defineComponent({
    components: { BasicTable, AAlert: Alert },
    setup() {
        const [registerTable, { getForm }] = useTable({
            title: '路由列表',
            api: queryGatewayRouterListApi,
            columns: getBasicColumns(),
            useSearchForm: true,
            formConfig: getFormConfig(),
            showTableSetting: true,
            tableSetting: { fullScreen: true },
            showIndexColumn: false,
            rowKey: 'id',
        });

        function getFormValues() {
            console.log(getForm().getFieldsValue());
        }

        return {
            registerTable,
            getFormValues,
        };


    },
});
</script>
