import { AirNode } from "./AirNode"
import { HasTail, Head, Tail } from "./utlity"

export type AirTree<T extends AirNode<any, any>[]> = Head<T> & { 
    children: HasTail<T> extends true 
        ? Map<string, AirTree<Tail<T>>>
        : never
}