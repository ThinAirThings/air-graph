

import { AirNodev2 } from "./AirNodev2"
import { HasTail, Head, Tail } from "./utlity"


type NodeDefinition = [AirNodev2<any>,
    [string, (AirNodev2<any> | AirNodev2<any>[])[]][]
]
// Design for multi relationship
export type AirGraphv2<
    T extends NodeDefinition[]
> = {
        // parentTo: { [K in Head<T>[0]['nodeType']]: Head<T>[0] }
        [NodeType in T[number][0]['nodeType']]: {
            [R in T[number][1][number][0]]: T[number][1][number][1][number]
        }
        // children: { [key: string]: AirTreev3<Root, T> }
    }

export type AirTreev3<
    PT extends AirNodev2<any, any>,
    T extends AirNodev2<any, any>[]
> = {
    parent: PT
} & (HasTail<T> extends true
    ? (Head<T> & {
        children: {
            [key: string]: AirTreev3<
                (Head<T> & { parent: PT }),
                Tail<T>
            >
        }
    })
    : (Head<T>)
    )


const rootNode = null as unknown as AirGraphv2<[
    [UserNode, [
        ['parentTo', [SearchNode]],
        ['ownerTo', [MessageNode]],
    ]],
    [SearchNode, [
        ['parentTo', [MessageNode[]]],
        ['accessibleTo', [UserNode[]]],
    ]],
    [MessageNode, [
        ['parentTo', [ResultNode[]]],
    ]],
]>

// rootNode.search.parentTo.

// Testing
type EmailNode = AirNodev2<'email', {
    email: string;
}>;
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

