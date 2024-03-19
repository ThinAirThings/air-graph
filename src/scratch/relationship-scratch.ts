import { AirNodev3 } from "../types/AirNodev3";

// Testing

export type UserNode = AirNodev3<'user', [], {
    name: string;
    age: number;
    email: string;
    phone: string;
    address: string;
}>;

export type AccessNode = AirNodev3<'permissions', [
    ['permissionTo', 'user'],
], {
    accessType: 'read' | 'write';
}>;

export type SearchNode = AirNodev3<'search', [
    ['permissionTo', 'access'],
], {
    searchName: string;
}>;

export type MessageNode = AirNodev3<'message', [
    ['childTo', 'search']
], {
    message: string;
}>;

export type ResultNode = AirNodev3<'result', [
    ['childTo', 'message']
], {
    resultId: string;
    result: string;
}>;