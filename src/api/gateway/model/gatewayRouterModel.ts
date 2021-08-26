export interface GatewayRouter {
    routerId: string;
    systemId: string;
    systemName: string;
    routerUri: string;
    routerPriority: number;
}

export interface GatewayPredicate {
    id: number
    routerId: string;
    predicateId: string;
    predicateName: string;
    predicatePriority: number;
    argList: GatewayPredicateArg[];
}

export interface GatewayPredicateArg {
    id: number;
    predicateId: string;
    predicateArgId: string;
    argsName: string;
    argsValue: number;
}

export interface GatewayFilterArg {
    id: number;
    filterId: string;
    filterArgsId: string;
    argsName: string;
    argsValue: number;
}


export interface GatewayFilter {
    id: number;
    routerId: string;
    filterId: string;
    filterName: string;
    filterPriority: number;
    argList: GatewayFilterArg[];
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