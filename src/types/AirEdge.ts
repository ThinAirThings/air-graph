

export type AirEdge<T extends string, P extends Record<string, any>=Record<string, any>> = {
    edgeId: string;
    edgeType: T;
    fromNodeId: string;
    toNodeId: string;
} & P;