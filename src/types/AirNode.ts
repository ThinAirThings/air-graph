


export type AirNode<
    PT extends string | null,
    T extends string,
    P extends Record<string, any>=Record<string, any>
> = {
    parentNodeId: string | null;
    parentNodeType: PT
    nodeId: string;
    nodeType: T;
    createdAt: string;
} & P;

