import { AirNodev2 } from "./AirNodev2"
import { HasTail, Head, Tail } from "./utlity"


export type AirGraph<Root extends AirNodev2<any>, T extends AirNodev2<any, any>[]> = Root & {
    children: { [key: string]: AirTreev2<Root, T> }
}

export type AirTreev2<
    PT extends AirNodev2<any, any>,
    T extends AirNodev2<any, any>[]
> = {
    parent: PT
} & (HasTail<T> extends true
    ? (Head<T> & {
        children: {
            [key: string]: AirTreev2<
                (Head<T> & { parent: PT }),
                Tail<T>
            >
        }
    })
    : (Head<T>)
    )