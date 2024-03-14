import { AirNode } from "./AirNode"
import { HasTail, Head, Tail } from "./utlity"

// export type AirTree<T extends AirNode<any, any>[]> = HasTail<T> extends true 
//     ? (Head<T> & {
//         children: Map<string, AirTree<Tail<T>>>
//     })
//     : (Head<T>)


export type AirTree<T extends AirNode<any, any>[]> = HasTail<T> extends true 
    ? (Head<T> & {
        children: {[key:string]: AirTree<Tail<T>>}
    })
    : (Head<T>)


