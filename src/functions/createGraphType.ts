import { AirEdge } from "../types/AirEdge";
import { AirNode } from "../types/AirNode";
import { createEdgeType } from "./createEdgeType";
import { createNodeType } from "./createNodeType"
import { v4 as uuidv4 } from "uuid";


export const createGraphType = <
    NIdx extends {
        [T in string]: ReturnType<typeof createNodeType<any, any>>
    },
    EIdx extends {
        [T in string]: ReturnType<typeof createEdgeType<any, any>>
    },
>(
    nodeTypes: NIdx,
    edgeTypes: EIdx
) => {
    const edgeFunctions = {
        createEdge: async <T extends keyof EIdx>(
            edgeType: T,
            fromNodeId: string,
            toNodeId: string,
            props: Parameters<EIdx[T]['createEdge']>[1]
        ) => {
            await edgeTypes[edgeType].createEdge({
                edgeType,
                fromNodeId,
                toNodeId, 
                createdAt: new Date().toISOString()
            }, props)
            return {
                fromNodeId,
                toNodeId
            }
        },
        getEdge: async <T extends (keyof EIdx&string)>(
            edgeType: T,
            fromNodeId: string,
            toNodeId: string
        ) => {
            return (await edgeTypes[edgeType].getEdge({
                fromNodeId,
                toNodeId
            })) as AirEdge<T, Parameters<EIdx[T]['createEdge']>[1]>
        },
    }
    return {
        createNode: async <T extends keyof NIdx>(
            nodeType: T,
            props: Parameters<NIdx[T]['createNode']>[1]
        ) => {
            const nodeId = uuidv4()
            await nodeTypes[nodeType].createNode({
                nodeId,
                nodeType,
                createdAt: new Date().toISOString()
            }, props)
            return {
                nodeId,
                createEdge: async <T extends (keyof EIdx&string)>(
                    edgeType: T, 
                    toNode: string | Promise<{nodeId: string}>,
                    props: Parameters<EIdx[T]['createEdge']>[1]
                ) => {
                    if (typeof toNode === 'string') {
                        const toNodeId = toNode
                        return edgeFunctions.createEdge(edgeType, nodeId, toNodeId, props)
                    }
                    const toNodeId = (await toNode).nodeId
                    return edgeFunctions.createEdge(edgeType, nodeId, toNodeId, props)
                }
            }
        },
        getNode: async <T extends (keyof NIdx&string)>(
            nodeType: T,
            nodeId: string
        ) => {
            return (await nodeTypes[nodeType].getNode(nodeId)) as AirNode<T, Parameters<NIdx[T]['createNode']>[1]>
        },
    }
}