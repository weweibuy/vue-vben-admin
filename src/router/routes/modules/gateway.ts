import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

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
  ],
};

export default gateway;
