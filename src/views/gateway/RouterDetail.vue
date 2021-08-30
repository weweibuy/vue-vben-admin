<template>
    <PageWrapper title="路由地址：" contentBackground>
        <template #extra>
            <a-button> 操作一</a-button>
            <a-button> 操作二</a-button>
            <a-button type="primary"> 主操作</a-button>
        </template>

        <Description @register="routerDetailRegister" class="enter-y"/>

        <PageWrapper contentBackground>
            <template #footer>
                <a-tabs default-active-key="1" tabPosition="left" size="large">
                    <a-tab-pane key="1" tab="断言">
                        <BasicTable @register="registerRouterPredicateTable">
                            <template   #action="{ record }">
                                <TableAction
                                    stopButtonPropagation
                                    :actions="predicateTableAction(record) "/>
                            </template>
                        </BasicTable>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="过滤器">
                        <BasicTable @register="registerRouterFilterTable">
                            <template #action="{ record }">
                                <TableAction
                                    stopButtonPropagation
                                    :actions="filterTableAction(record) "/>
                            </template>
                        </BasicTable>
                    </a-tab-pane>
                </a-tabs>
            </template>
        </PageWrapper>

    </PageWrapper>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {ActionItem, BasicTable, TableAction, EditRecordRow, useTable} from "/@/components/Table";
import {PageWrapper} from "/@/components/Page";
import {Tabs} from "ant-design-vue";
import {
    queryGatewayRouterDetailApi,
    queryGatewayRouterPredicateApi,
    queryGatewayRouterFilterApi
} from '/@/api/gateway/gateway';
import {useDescription} from "/@/components/Description";
import {routerDetailDescriptionSchema, routerPredicateColumns, routerFilterColumns, mergeRow} from './GateRouterData';
import {Description} from '/@/components/Description/index';
import {useRoute} from "vue-router";
import {GatewayFilter, GatewayPredicate} from "/@/api/gateway/model/gatewayRouterModel";


export default defineComponent({
    components: {
        BasicTable,
        TableAction,
        PageWrapper,
        Description,
        [Tabs.name]: Tabs,
        [Tabs.TabPane.name]: Tabs.TabPane,
    },
    setup() {
        const routerDetailData = ref({});
        const route = useRoute();
        const routerId = ref(route.params?.id);
        const predicateData = ref<GatewayPredicate[]>([]);
        const filterData = ref<GatewayFilter[]>([]);

        queryGatewayRouterDetailApi(routerId.value).then((res) => {
            routerDetailData.value = res
        })
        queryGatewayRouterPredicateApi(routerId.value).then((res) => {
            predicateData.value = [];
            if (res.length > 0) {
                for (let i = 0; i < res.length; i++) {
                    if (res[i].argList.length > 0) {
                        for (let j = 0; j < res[i].argList.length; j++) {
                            let temObject = {};
                            let assign = Object.assign(temObject, res[i].argList[j]);
                            let assign2 = Object.assign(assign, res[i]);
                            predicateData.value.push(assign2)
                        }
                    } else {
                        predicateData.value.push(res[i])
                    }
                }
            }
        })

        queryGatewayRouterFilterApi(routerId.value).then((res) => {
            filterData.value = [];
            if (res.length > 0) {
                for (let i = 0; i < res.length; i++) {
                    if (res[i].argList.length > 0) {
                        for (let j = 0; j < res[i].argList.length; j++) {
                            let temObject = {};
                            let assign = Object.assign(temObject, res[i].argList[j]);
                            let assign2 = Object.assign(assign, res[i]);
                            filterData.value.push(assign2)
                        }
                    } else {
                        filterData.value.push(res[i])
                    }
                }
            }
        })

        function predicateTableAction(record: EditRecordRow): ActionItem[] {
            return [
                {
                    label: '删除',
                    icon: 'ic:outline-delete-outline',
                    color: 'error',
                    popConfirm: {
                        title: '是否确认删除',
                        confirm: handlePredicateDelete.bind(null, record),
                    },
                },
                {
                    label: '编辑',
                    icon: 'clarity:note-edit-line',
                    onClick: handlePredicateEdit.bind(null, record),
                },
            ];
        }

        function handlePredicateDelete(record: EditRecordRow) {

        }

        function handlePredicateEdit(record: EditRecordRow) {

        }

        function filterTableAction(record: EditRecordRow): ActionItem[] {
            return [
                {
                    label: '删除',
                    icon: 'ic:outline-delete-outline',
                    color: 'error',
                    popConfirm: {
                        title: '是否确认删除',
                        confirm: handleFilterDelete.bind(null, record),
                    },
                },
                {
                    label: '编辑',
                    icon: 'clarity:note-edit-line',
                    onClick: handleFilterEdit.bind(null, record),
                },
            ];
        }

        function handleFilterDelete(record: EditRecordRow) {

        }

        function handleFilterEdit(record: EditRecordRow) {

        }

        const [registerRouterPredicateTable] = useTable({
            columns: routerPredicateColumns(predicateData),
            pagination: false,
            dataSource: predicateData,
            showIndexColumn: false,
            canResize: false,
            actionColumn: {
                width: 160,
                title: '操作',
                dataIndex: 'action',
                customRender: ({text, index}: { text: any; index: number }) => {
                    return mergeRow(index, text, predicateData, 1);
                },
                slots: {
                    customRender: 'action'
                },
            },
            // scroll: {y: 1000},
        });

        const [registerRouterFilterTable] = useTable({
            columns: routerFilterColumns(filterData),
            pagination: false,
            dataSource: filterData,
            showIndexColumn: false,
            canResize: false,
            actionColumn: {
                width: 160,
                title: '操作',
                dataIndex: 'action',
                slots: {customRender: 'action'},
            },
            // scroll: {y: 1000},
        });

        const [routerDetailRegister] = useDescription({
            title: '路由信息',
            data: routerDetailData,
            schema: routerDetailDescriptionSchema(),
            column: 2,
        });


        return {
            registerRouterPredicateTable,
            registerRouterFilterTable,
            routerDetailRegister,
            routerDetailData,
            predicateTableAction,
            filterTableAction
        };
    },
});
</script>

