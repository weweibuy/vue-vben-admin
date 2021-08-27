import {FormProps, FormSchema} from '/@/components/Table';
import {BasicColumn} from '/@/components/Table/src/types/table';
import {DescItem} from '/@/components/Description/index';
import {GatewayFilter, GatewayPredicate} from "/@/api/gateway/model/gatewayRouterModel";
import {Ref} from "@vue/reactivity";


export function routerListBasicColumns(): BasicColumn[] {
    return [
        {
            title: '路由id',
            dataIndex: 'routerId',
            width: 150,
            fixed: 'left',
        },
        {
            title: '系统id',
            dataIndex: 'systemId',
            width: 150,
        },
        {
            title: '系统名称',
            dataIndex: 'systemName',
            width: 250,
        },
        {
            title: '路由地址',
            dataIndex: 'routerUri',
            width: 250,
        }
    ];
}

export function routerDetailDescriptionSchema(): DescItem[] {
    return [
        {
            label: '路由id',
            field: 'routerId',
            contentMinWidth: 300
        },
        {
            label: '系统id',
            field: 'systemId',
            contentMinWidth: 300

        }, {
            label: '路由名称',
            field: 'systemName',
            contentMinWidth: 300
        },
        {
            label: '路由地址',
            field: 'routerUri',
            contentMinWidth: 300
        },
    ]
}


export function getBasicShortColumns(): BasicColumn[] {
    return [
        {
            title: 'ID',
            width: 150,
            dataIndex: 'id',
            sorter: true,
            sortOrder: 'ascend',
        },
        {
            title: '姓名',
            dataIndex: 'name',
            width: 120,
        },
        {
            title: '地址',
            dataIndex: 'address',
        },
        {
            title: '编号',
            dataIndex: 'no',
            width: 80,
        },
    ];
}

export function getMultipleHeaderColumns(): BasicColumn[] {
    return [
        {
            title: 'ID',
            dataIndex: 'id',
            width: 200,
        },
        {
            title: '姓名',
            dataIndex: 'name',
            width: 120,
        },
        {
            title: '地址',
            dataIndex: 'address',
            sorter: true,
            children: [
                {
                    title: '编号',
                    dataIndex: 'no',
                    width: 120,
                    filters: [
                        {text: 'Male', value: 'male', children: []},
                        {text: 'Female', value: 'female', children: []},
                    ],
                },

                {
                    title: '开始时间',
                    dataIndex: 'beginTime',
                    width: 120,
                },
                {
                    title: '结束时间',
                    dataIndex: 'endTime',
                    width: 120,
                },
            ],
        },
    ];
}

export function getCustomHeaderColumns(): BasicColumn[] {
    return [
        {
            title: 'ID',
            dataIndex: 'id',
            width: 200,
        },
        {
            // title: '姓名',
            dataIndex: 'name',
            width: 120,
            slots: {title: 'customTitle'},
        },
        {
            // title: '地址',
            dataIndex: 'address',
            width: 120,
            slots: {title: 'customAddress'},
            sorter: true,
        },

        {
            title: '编号',
            dataIndex: 'no',
            width: 120,
            filters: [
                {text: 'Male', value: 'male', children: []},
                {text: 'Female', value: 'female', children: []},
            ],
        },
        {
            title: '开始时间',
            dataIndex: 'beginTime',
            width: 120,
        },
        {
            title: '结束时间',
            dataIndex: 'endTime',
            width: 120,
        },
    ];
}

const renderContent = ({text, index}: { text: any; index: number }) => {
    const obj: any = {
        children: text,
        attrs: {},
    };
    if (index === 9) {
        obj.attrs.colSpan = 0;
    }
    return obj;
};

export function getMergeHeaderColumns(): BasicColumn[] {
    return [
        {
            title: 'ID',
            dataIndex: 'id',
            width: 300,
            customRender: renderContent,
        },
        {
            title: '姓名',
            dataIndex: 'name',
            width: 300,
            customRender: renderContent,
        },
        {
            title: '地址',
            dataIndex: 'address',
            colSpan: 2,
            width: 120,
            sorter: true,
            customRender: ({text, index}: { text: any; index: number }) => {
                const obj: any = {
                    children: text,
                    attrs: {},
                };
                if (index === 2) {
                    obj.attrs.rowSpan = 2;
                }
                if (index === 3) {
                    obj.attrs.colSpan = 0;
                }
                return obj;
            },
        },
        {
            title: '编号',
            dataIndex: 'no',
            colSpan: 0,
            filters: [
                {text: 'Male', value: 'male', children: []},
                {text: 'Female', value: 'female', children: []},
            ],
            customRender: renderContent,
        },
        {
            title: '开始时间',
            dataIndex: 'beginTime',
            width: 200,
            customRender: renderContent,
        },
        {
            title: '结束时间',
            dataIndex: 'endTime',
            width: 200,
            customRender: renderContent,
        },
    ];
}

export const getAdvanceSchema = (itemNumber = 6): FormSchema[] => {
    const arr: any = [];
    for (let index = 0; index < itemNumber; index++) {
        arr.push({
            field: `field${index}`,
            label: `字段${index}`,
            component: 'Input',
            colProps: {
                xl: 12,
                xxl: 8,
            },
        });
    }
    return arr;
};

export function routerListFormConfig(): Partial<FormProps> {
    return {
        labelWidth: 100,
        schemas: [
            {
                field: `routerId`,
                label: `路由id`,
                component: 'Input',
                colProps: {
                    xl: 12,
                    xxl: 8,
                },
            },
            {
                field: `systemId`,
                label: `系统id`,
                component: 'Input',
                colProps: {
                    xl: 12,
                    xxl: 8,
                },
            },
            {
                field: `systemName`,
                label: `系统名称`,
                component: 'Input',
                colProps: {
                    xl: 12,
                    xxl: 8,
                },
            },
            {
                field: `routerUri`,
                label: `路由地址`,
                component: 'Input',
                colProps: {
                    xl: 12,
                    xxl: 8,
                },
            },
        ],
    };
}

export function getBasicData() {
    const data: any = (() => {
        const arr: any = [];
        for (let index = 0; index < 40; index++) {
            arr.push({
                id: `${index}`,
                name: 'John Brown',
                age: `1${index}`,
                no: `${index + 10}`,
                address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
                beginTime: new Date().toLocaleString(),
                endTime: new Date().toLocaleString(),
            });
        }
        return arr;
    })();
    return data;
}

export function getTreeTableData() {
    const data: any = (() => {
        const arr: any = [];
        for (let index = 0; index < 40; index++) {
            arr.push({
                id: `${index}`,
                name: 'John Brown',
                age: `1${index}`,
                no: `${index + 10}`,
                address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
                beginTime: new Date().toLocaleString(),
                endTime: new Date().toLocaleString(),
                children: [
                    {
                        id: `l2-${index}`,
                        name: 'John Brown',
                        age: `1${index}`,
                        no: `${index + 10}`,
                        address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
                        beginTime: new Date().toLocaleString(),
                        endTime: new Date().toLocaleString(),
                    },
                ],
            });
        }
        return arr;
    })();

    return data;
}

export function routerPredicateColumns(predicateData: Ref<GatewayPredicate[]>): BasicColumn[] {
    return [
        {
            title: '断言名称',
            dataIndex: 'predicateName',
            colSpan: 1,
            width: 120,
            customRender: ({text, index}: { text: any; index: number }) => {
                return mergeRow(index, text, predicateData, 1);
            },
        },
        {
            title: '优先级',
            dataIndex: 'predicatePriority',
            colSpan: 1,
            width: 120,
            customRender: ({text, index}: { text: any; index: number }) => {
                return mergeRow(index, text, predicateData, 1);
            },
        },
        {
            title: '参数名称',
            dataIndex: 'argsName',
            width: 250,
        },
        {
            title: '参数值',
            dataIndex: 'argsValue',
            width: 250,
        }
    ];
}


export function routerFilterColumns(filterData: Ref<GatewayFilter[]>): BasicColumn[] {
    return [
        {
            title: '过滤器名称',
            dataIndex: 'filterName',
            colSpan: 1,
            width: 120,
            customRender: ({text, index}: { text: any; index: number }) => {
                return mergeRow(index, text, filterData, 2);
            },
        },
        {
            title: '优先级',
            dataIndex: 'filterPriority',
            colSpan: 1,
            width: 120,
            customRender: ({text, index}: { text: any; index: number }) => {
                return mergeRow(index, text, filterData, 2);
            },
        },
        {
            title: '参数名称',
            dataIndex: 'argsName',
            width: 250,
        },
        {
            title: '参数值',
            dataIndex: 'argsValue',
            width: 250,
        }
    ];
}

export function mergeRow(index: number, text: any, refData: Ref<GatewayPredicate[]> | Ref<GatewayFilter[]>, type: number) {
    const obj: any = {
        children: text,
        attrs: {},
    };
    let data = refData.value;
    if (!data || !data[index] || !data[index].argList) {
        return obj;
    }
    let length = data[index].argList.length;
    if (index == 0) {
        obj.attrs.rowSpan = length === 0 ? 1 : length;
        obj.attrs.colSpan = 1;
        return obj;
    }
    if (type === 1) {
        let data1 = data as GatewayPredicate[];
        if (data1[index].predicateId ===
            data1[index - 1].predicateId) {
            obj.attrs.rowSpan = 0;
            obj.attrs.colSpan = 0;
            return obj;
        }
        obj.attrs.rowSpan = length === 0 ? 1 : length;
        obj.attrs.colSpan = 1
        return obj;
    } else {
        let data2 = data as GatewayFilter[];
        if (data2[index].filterId === data2[index - 1].filterId) {
            obj.attrs.rowSpan = 0;
            obj.attrs.colSpan = 0;
            return obj;
        }
        obj.attrs.rowSpan = length === 0 ? 1 : length;
        obj.attrs.colSpan = 1
        return obj;
    }

}

