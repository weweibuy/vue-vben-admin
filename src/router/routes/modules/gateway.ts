import type {AppRouteModule} from '/@/router/types';

import {LAYOUT} from '/@/router/constant';
import {t} from '/@/hooks/web/useI18n';

const gateway: AppRouteModule = {
    path: '/gateway',
    name: 'Gateway',
    component: LAYOUT,
    redirect: '/gateway/routerList',
    meta: {
        orderNo: 10,
        icon: 'ion:grid-outline',
        title: t('routes.gateway.gateway'),
    },
    children: [
        {
            path: 'routerList',
            name: 'RouterList',
            component: () => import('/@/views/gateway/RouterList.vue'),
            meta: {
                // affix: true,
                title: t('routes.gateway.routerList'),
            },
        },
        {
            path: 'routerDetail',
            name: 'RouterDetail',
            meta: {
                hideMenu: true,
                title: t('routes.gateway.routerDetail'),
                ignoreKeepAlive: true,
                showMenu: false,
                currentActiveMenu: '/gateway/routerList',
            },
            component: () => import('/@/views/gateway/RouterDetail.vue'),
        },
    ],
};

export default gateway;
