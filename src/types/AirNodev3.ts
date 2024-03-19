


export type AirNodev3<
    T extends string,
    R extends [`${string}To`, string][],
    P extends Record<string, any> = Record<string, any>
> = {
    nodeType: T;
    nodeId: string;
    nodeRelations: R;
} & P



export const createGraph = <
    T extends AirNodev3<any, any>[]
>(
    nodes: 
) => {

}