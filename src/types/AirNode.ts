


export type AirNode<T extends string, P extends Record<string, any>=Record<string, any>> = {
    parentNodeId: string;
    parentNodeType: string
    nodeId: string;
    nodeType: T;
    createdAt: string;
} & P;

