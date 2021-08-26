import { defHttp } from '/@/utils/http/axios';
import {GatewayFilter, GatewayPredicate, GatewayRouter, GatewayRouterQueryParam} from './model/gatewayRouterModel';

enum Api {
    GATEWAY_ROUTER_LIST = '/gw/router/list',
    GATEWAY_ROUTER_PREDICATE_LIST = '/gw/predicate/list',
    GATEWAY_ROUTER_FILTER_LIST = '/gw/filter/list',
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

export const queryGatewayRouterDetailApi = (routerId: any) =>
    defHttp.get<GatewayRouter>({
        url: Api.GATEWAY_ROUTER_DETAIL + routerId,
    });

export const queryGatewayRouterPredicateApi = (routerId: any) =>
    defHttp.get<GatewayPredicate[]>({
        url: Api.GATEWAY_ROUTER_PREDICATE_LIST,
        params: {routerId: routerId}
    });

export const queryGatewayRouterFilterApi = (routerId: any) =>
    defHttp.get<GatewayFilter[]>({
        url: Api.GATEWAY_ROUTER_FILTER_LIST,
        params: {routerId: routerId}
    });

