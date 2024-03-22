import { ZodLiteral, ZodNull, ZodObject, ZodType, ZodUnion, z } from "zod";


export type AirNode<
    PT extends string | null,
    T extends string,
    P extends Record<string, any> = Record<string, any>
> = {
    parentNodeId: string;
    parentNodeType: PT
    nodeId: string;
    nodeType: T;
    createdAt: string;
} & P;


export const createZodNode = <
    PT extends ZodLiteral<any> | ZodNull,
    T extends ZodLiteral<any>,
    P extends ZodObject<any>
>({
    parentNodeType,
    nodeType,
    properties,
}: {
    parentNodeType: PT,
    nodeType: T,
    properties: P
}) => z.object({
    parentNodeType,
    parentNodeId: z.string(),
    nodeType,
    nodeId: z.string(),
    createdAt: z.string(),
}).merge(properties)




