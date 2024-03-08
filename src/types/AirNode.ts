import { createNodeType } from "../airgraph.config";



export type AirNode<T extends string, P extends Record<string, any>=Record<string, any>> = {
    nodeId: string;
    nodeType: T;
    createdAt: string;
} & P;


export type InferProps<T> = T extends AirNode<any, infer P> ? P : never;


export type NodeUnion<NIdx extends {
    [T in string]: ReturnType<typeof createNodeType<T>>
}> = NIdx[keyof NIdx]

export type NodeTypes<NIdx extends {
    [T in string]: ReturnType<typeof createNodeType<T>>
}> = NodeUnion<NIdx>['nodeType']