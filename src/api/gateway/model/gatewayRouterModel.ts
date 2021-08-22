export interface GatewayRouter {
    routerId: string;
    systemId: string;
    systemName: string;
    routerUri: string;
    routerPriority: number;
}


export interface GatewayRouterQueryParam {
    routerId: string;
    systemId: string;
    systemName: string;
    routerUri: string;
    routerPriority: number;
    page: number,
    size: number,
}