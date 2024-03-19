


export type AirNodev2<
    T extends string,
    P extends Record<string, any> = Record<string, any>
> = {
    nodeId: string;
    nodeType: T;
    createdAt: string;
} & P;