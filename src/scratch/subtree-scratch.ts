// import { DemoResultNode, MessageNode, SearchNode } from "@grantgraph/types";
import { AirGraph, LinearBidirectionalAirGraph } from "../types/AirGraph";
import { AirNodev2 } from "../types/AirNodev2";

type SearchStoreState = {
    searchId: string
    messageMap: Map<string, MessageNode>;
    resultMap: Map<string, Map<string, DemoResultNode>>;
}

const data = null as unknown as SearchStoreState;

[...data.messageMap].map(([key, value]) => {
    console.log(value);
    [...data.resultMap.get(key) ?? []]?.map(([key, value]) => {
        console.log(value);
    })
})



// const obj = null as unknown as AirTree<[SearchNode, MessageNode, DemoResultNode, SearchNode, MessageNode]>;


// // In JS Object == Node
// Object.entries(obj.children).map(([key, node]) => {
//     node.nodeType;
//     Object.entries(node.children).map(([key, node]) => {
//         node.nodeType

//         Object.entries(node.children).map(([key, node]) => {
//             node.nodeType
//             Object.entries(node.children).map(([key, node]) => {
//                 node.nodeType
//             })
//         })
//     })
// })

type UserNode = AirNodev2<'user', {
    name: string;
    age: number;
    email: string;
    phone: string;
    address: string;
}>;
type SearchNode = AirNodev2<'search', {
    searchId: string;
    searchQuery: string;
}>;
type MessageNode = AirNodev2<'message', {
    message: string;
    messageId: string;
}>;
type ResultNode = AirNodev2<'result', {
    resultId: string;
    result: string;
}>;
const lbdGraph = null as unknown as AirGraph<UserNode, [SearchNode, MessageNode, ResultNode]>;
Object.entries(lbdGraph.children).map(([key, node]) => {
    node.nodeType;
    node.parent

    Object.entries(node.children).map(([key, node]) => {
        node.nodeType
        Object.entries(node.children).map(([key, node]) => {
            node.nodeType
            node.parent.nodeType
            node.parent.parent.nodeType
            node.parent.parent.parent.nodeType
            Object.entries(node.children).map(([key, node]) => {
                node.nodeType
            })
        })
    })
})

