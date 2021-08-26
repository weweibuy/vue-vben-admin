import { defHttp } from '/@/utils/http/axios';
import { GatewayRouter, GatewayRouterQueryParam } from './model/gatewayRouterModel';

enum Api {
    GATEWAY_ROUTER_LIST = '/gw/router/list',
    GATEWAY_ROUTER_DETAIL = '/gw/router/',
}

/**
 * @description: Get sample list value
 */
export const queryGatewayRouterListApi = (params: GatewayRouterQueryParam) =>
    defHttp.get<GatewayRouter>({
        url: Api.GATEWAY_ROUTER_LIST,
        params,
    });

export const queryGatewayRouterDetailApi = (routerId: string) =>
    defHttp.get<GatewayRouter>({
        url: Api.GATEWAY_ROUTER_LIST + routerId,
    });
