// type SearchStoreState = {
//     searchId: string
//     messageMap: Map<string, MessageNode>;
//     resultMap: Map<string, Map<string, DemoResultNode>>;
// }

// const data = null as unknown as SearchStoreState;

// [...data.messageMap].map(([key, value]) => {
//     console.log(value);
//     [...data.resultMap.get(key)??[]]?.map(([key, value]) => {
//         console.log(value);
//     })
// })

// export type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;
// export type HasHead<T extends any[]> = T extends [] ? false : true;
// export type Tail<T extends any[]> = ((...t: T) => any) extends (h: any, ...r: infer R) => any ? R : never;
// export type HasTail<T extends any[]> = T extends ([] | [any]) ? false : true;

// type Subtree<T extends AirNode<any, any>[]> = Head<T> & { 
//     children: HasTail<T> extends true 
//         ? Map<string, Subtree<Tail<T>>> 
//         : never
// }

// type SearchTree = Subtree<[SearchNode, MessageNode, DemoResultNode]>

// const obj = null as unknown as SearchTree;

// [...obj.children].map(([key, node]) => {
//     node.nodeType;
//     [...node.children].map(([key, node]) => {
//         node.nodeType
//     })
// })