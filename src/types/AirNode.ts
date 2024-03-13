


export type AirNode<
    PT extends string,
    T extends string,
    P extends Record<string, any>=Record<string, any>
> = {
    parentNodeId: string;
    parentNodeType: PT
    nodeId: string;
    nodeType: T;
    createdAt: string;
} & P;

