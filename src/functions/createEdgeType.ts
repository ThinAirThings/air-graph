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
        deleteEdge
    }: {
        createEdge: (baseProps: AirEdge<any>, extProps: P ) => Promise<string>,
        getEdge: ({
            fromNodeId,
            toNodeId
        }: {
            fromNodeId: string,
            toNodeId: string
        }) => Promise<AirEdge<T, P>>
        updateEdge?: (props: P) => Promise<void>
        deleteEdge?: (edgeId: string) => Promise<void>
    }
) => {
    return {
        edgeType,
        createEdge,
        getEdge,
        updateEdge,
        deleteEdge
    }
}