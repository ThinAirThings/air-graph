import { createEdgeType } from "./functions/createEdgeType";
import { createGraphType } from "./functions/createGraphType";
import { createNodeType } from "./functions/createNodeType";
import { SearchNode } from "./testTypes/testTypes";
import { AirEdge } from "./types/AirEdge"
import { AirNode } from "./types/AirNode"
import { v4 as uuidv4 } from "uuid";



const {
    createNode
} = createGraphType({
    search: createNodeType('search', 
        {
            createNode: async (baseProps, extProps: {
                searchName: string
            }) => {
                return baseProps.nodeId
            },
            getNode: async (nodeId) => {
                return {
                    nodeId: '',
                    nodeType: 'search',
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
}, {
    belongsTo: createEdgeType('belongsTo', {
        createEdge: async (baseProps, extProps: {}) => {
            return baseProps.edgeId
        },
        getEdge: async ({fromNodeId, toNodeId}) => {
            return {
                edgeId: '',
                edgeType: 'belongsTo',
                fromNodeId,
                toNodeId,
                createdAt: new Date().toISOString()
            }
        },
        updateEdge: async (props) => {
            return
        },
        deleteEdge: async (edgeId) => {
            return
        }
    })
})




const edge = await createNode('message', {
    senderType: 'hello'
}).then(node => node.createEdge('belongsTo', createNode('search', {
    searchName: 'New Search'
}), {}))

edge.toNodeId
// // const val = thing.getNode('user', '123')
// const otherVal = graph.getNode('message', 'fdsa')
