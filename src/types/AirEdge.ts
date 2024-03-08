

export type AirEdge<T extends string, P extends Record<string, any>=Record<string, any>> = {
    fromNodeId: string;
    toNodeId: string;
    edgeType: T;
} & P;