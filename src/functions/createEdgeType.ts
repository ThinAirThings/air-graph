import { AirEdge } from "../types/AirEdge"


export const createEdgeType = <
    T extends string, 
    P extends Record<string, any>=Record<string, any>
>(
    edgeType: T, 
    {
        createEdge,
        getEdge,
        updateEdge,
    }: {
        createEdge: (
            baseProps: AirEdge<any>, 
            extProps: P 
        ) => Promise<(
            fromNodeId: string,
            toNodeId: string
        ) => Promise<void>>,
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
        getEdge,
        updateEdge,
    }
}