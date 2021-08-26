<template>
    <PageWrapper title="路由地址：234231029431" contentBackground>
        <template #extra>
            <a-button> 操作一</a-button>
            <a-button> 操作二</a-button>
            <a-button type="primary"> 主操作</a-button>
        </template>

        <!--        <template #footer>-->
        <!--            <a-tabs default-active-key="1">-->
        <!--                <a-tab-pane key="1" tab="详情"/>-->
        <!--                <a-tab-pane key="2" tab="规则"/>-->
        <!--            </a-tabs>-->
        <!--        </template>-->

        <div class="pt-4 m-4 desc-wrap">
            <Description @register="routerDetailRegister" class="enter-y"/>
        </div>

    </PageWrapper>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {BasicTable, useTable} from "/@/components/Table";
import {PageWrapper} from "/@/components/Page";
import {Card, Divider, Empty, Steps, Tabs} from "ant-design-vue";
import {refundTimeTableData, refundTimeTableSchema} from "/@/views/demo/page/desc/high/data";
import {queryGatewayRouterDetailApi} from '/@/api/gateway/gateway';
import {useDescription} from "/@/components/Description";
import {routerDetailDescriptionSchema} from './GateRouterData';
import {Description} from '/@/components/Description/index';


export default defineComponent({
    components: {
        BasicTable,
        PageWrapper,
        [Divider.name]: Divider,
        [Card.name]: Card,
        Empty,
        Description,
        [Steps.name]: Steps,
        [Steps.Step.name]: Steps.Step,
        [Tabs.name]: Tabs,
        [Tabs.TabPane.name]: Tabs.TabPane,
    },
    setup() {
        // const routerDetailData = ref({});
        // queryGatewayRouterDetailApi("").then((res: GatewayRouter) => {
        //     routerDetailData= res
        // })

        const [registerTimeTable] = useTable({
            title: '退货进度',
            columns: refundTimeTableSchema,
            pagination: false,
            dataSource: refundTimeTableData,
            showIndexColumn: false,
            scroll: {y: 300},
        });

        const [routerDetailRegister] = useDescription({
            title: '项目信息',
            data: queryGatewayRouterDetailApi,
            schema: routerDetailDescriptionSchema(),
            column: 2,
        });

        return {
            registerTimeTable,
            routerDetailRegister,
        };
    },
});
</script>

