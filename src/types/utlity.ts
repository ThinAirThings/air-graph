export type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;
export type HasHead<T extends any[]> = T extends [] ? false : true;
export type Tail<T extends any[]> = ((...t: T) => any) extends (h: any, ...r: infer R) => any ? R : never;
export type HasTail<T extends any[]> = T extends ([] | [any]) ? false : true;