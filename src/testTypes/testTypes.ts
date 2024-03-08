import { AirNode } from "../types/AirNode";

export type SearchNode = AirNode<
    "search",
    {
        searchName: string;
    }
>

export type MessageNode = AirNode<
    "message",
    {
        senderType: "user" | "bot";
        text: string;
    }
>;