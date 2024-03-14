import { AirNode } from "./AirNode"
import { HasTail, Head, Tail } from "./utlity"

// export type AirTree<T extends AirNode<any, any>[]> = Head<T> & { 
//     children: HasTail<T> extends true 
//         ? Map<string, AirTree<Tail<T>>>
//         : Partial<never>
// }

const emptySymbol = Symbol('EmptyObject type')
type EmptyObject = {[emptySymbol]?: never}

// export type AirTree<T extends AirNode<any, any>[]> = Head<T> 
//     & (HasTail<T> extends true 
//         ?  { 
//             children: Map<string, AirTree<Tail<T>>>
//         }
//         : object
//     )

export type AirTree<T extends AirNode<any, any>[]> = HasTail<T> extends true 
    ? (Head<T> & {
        children: Map<string, AirTree<Tail<T>>>
    })
    : (Head<T>)



// type Thing = {
//     name: string
// }

// type Thing2 = Thing & EmptyObject

// const obj: Thing2 = {
//     name: "hello",
// }

