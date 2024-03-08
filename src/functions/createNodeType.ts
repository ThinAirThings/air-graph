import { AirNode } from "../types/AirNode"



export const createNodeType = <
    T extends string, 
    P extends Record<string, any>=Record<string, any>
>(
    nodeType: T, 
    {
        createNode,
        getNode,
        updateNode,
        deleteNode
    }: {
        createNode: (baseProps: AirNode<any>, extProps: P ) => Promise<void>,
        getNode: (nodeId: string) => Promise<AirNode<T, P>>
        updateNode?: (nodeId: string, props: P) => Promise<void>
        deleteNode?: (nodeId: string) => Promise<void>
    }
) => {
    return {
        nodeType,
        createNode,
        getNode,
        updateNode,
        deleteNode
    }
}