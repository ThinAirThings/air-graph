import { MessageNode, ResultNode, SearchNode } from "@grantgraph/types"
import { AirNode } from "./AirNode"
import { AirTree } from "./AirTree"
import { HasTail, Head, Tail } from "./utlity"


export type MappedAirTree<T extends AirNode<any, any>[]> = HasTail<T> extends true
    ? (Head<T> & {
        children: Map<string, MappedAirTree<Tail<T>>>
    })
    : (Head<T>)


type TestTree = AirTree<[SearchNode, MessageNode, ResultNode]>

const testTree = null as unknown as TestTree;

export const airTreeToMappedAirTree = <T extends AirNode<any, any>[]>(tree: AirTree<T>): MappedAirTree<T> => {
    if (Object.keys(tree.children).length === 0) {
        return tree as MappedAirTree<any>;
    }
    const mappedChildren = new Map<string, MappedAirTree<any>>();
    Object.entries(tree.children).map(([key, value]) => {
        mappedChildren.set(key, airTreeToMappedAirTree<any>(value));
    })
    return {
        ...tree,
        children: mappedChildren
    }
}

const mappedTree = airTreeToMappedAirTree<[SearchNode, MessageNode, ResultNode]>(testTree);


