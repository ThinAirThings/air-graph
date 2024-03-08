import { SearchNode } from "./testTypes/testTypes";
import { AirEdge } from "./types/AirEdge"
import { AirNode, InferProps, NodeTypes, NodeUnion } from "./types/AirNode"
import { v4 as uuidv4 } from "uuid";

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
        createNode: (baseProps: AirNode<any>, extProps: P ) => Promise<string>,
        getNode: (nodeId: string) => Promise<AirNode<T, P>>
        updateNode: (props: P) => Promise<void>
        deleteNode: (nodeId: string) => Promise<void>
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


// type NodeType<N extends ReturnType<typeof createNodeType>>

export const configureAirGraph = <
    NIdx extends {
        [T in string]: ReturnType<typeof createNodeType<any, any>>
    },
    // UE extends AirEdge<string>,
>(
    nodeTypes: NIdx

    // edgeFunctions

    
    // ReturnType<typeof createNodeType>[],
    // edgeFunctions: {
    //     createEdge: (edge: UE) => Promise<UE>
    //     updateEdge: (edge: UE) => Promise<UE>
    //     deleteEdge: (edgeId: string) => Promise<UE>
    // }[]
) => {
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
            return nodeId
        },
        getNode: async <T extends (keyof NIdx&string)>(
            nodeType: T,
            nodeId: string
        ) => {
            return (await nodeTypes[nodeType].getNode(nodeId)) as AirNode<T, Parameters<NIdx[T]['createNode']>[1]>
        },
    }
}


const thing = configureAirGraph({
    user: createNodeType('user', 
        {
            createNode: async (baseProps, extProps: {
                searchName: string
            }) => {
                return baseProps.nodeId
            },
            getNode: async (nodeId) => {
                return {
                    nodeId: '',
                    nodeType: 'user',
                    createdAt: new Date().toISOString(),
                    searchName: 'hello'
                }
            },
            updateNode: async (props) => {
                return
            },
            deleteNode: async (nodeId) => {
                return
            }
        }
    ),
    message: createNodeType('message', 
        {
            createNode: async (baseProps, extProps: {
                senderType: string
            }) => {
                return baseProps.nodeId
            },
            getNode: async (nodeId) => {
                return {
                    nodeId: '',
                    nodeType: 'message',
                    createdAt: new Date().toISOString(),
                    senderType: 'hfsda'
                }
            },
            updateNode: async (props) => {
                return
            },
            deleteNode: async (nodeId) => {
                return
            }
        }
    ),
})

// thing.createNode('test', {})
thing.createNode('message', {
    senderType: 'hello'
}).belongsTo('user')

// const val = thing.getNode('user', '123')
const otherVal = thing.getNode('message', 'fdsa')
