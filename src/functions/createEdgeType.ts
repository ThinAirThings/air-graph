import { AirEdge } from "../types/AirEdge"


export const createEdgeType = <
    T extends string, 
    P extends Record<string, any>=Record<string, any>
>(
    edgeType: T, 
    {
        createEdge,
        deleteEdge,
        getEdge,
        updateEdge,
    }: {
        createEdge: (
            baseProps: AirEdge<any>, 
            extProps: P 
        ) => Promise<void>,
        deleteEdge: (adjacentNodeId: string) => Promise<void>,
        getEdge: ({
            fromNodeId,
            toNodeId
        }: {
            fromNodeId: string,
            toNodeId: string
        }) => Promise<AirEdge<T, P>>
        updateEdge?: (props: P) => Promise<void>
    }
) => {
    return {
        edgeType,
        createEdge,
        deleteEdge,
        getEdge,
        updateEdge,
    }
}