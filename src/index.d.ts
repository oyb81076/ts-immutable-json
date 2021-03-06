import { List, Map, OrderedMap, OrderedSet, Seq } from "immutable";
declare type Basic<T> = T extends (string | number | boolean | Date | null | undefined | Iterable<[any, any]>) ? T : IRecord<T>;
declare type Value<T> = T extends any[] ? List<Basic<T[number]>> : Basic<T>;
export interface IMapRecord<T> {
  clear(): this;
  delete<K extends keyof T>(key: K): this;
  get<K extends keyof T>(key: K, notSetValue?: T[K]): T[K];
  has<K extends keyof T>(key: K): boolean;
  isEmpty(): boolean;
  keys(): IterableIterator<keyof T>;
  merge(...iterables: Array<Partial<T>>): this;
  merge<K extends keyof T>(...iterables: Array<IMapRecord<T>>): this;
  readonly size: number;
  remove<K extends keyof T>(key: K): this;
  set<K extends keyof T>(key: K, value: T[K]): this;
  toJS(): any;
  toObject(): T;
  update(updater: (value: this) => this): this;
  update<K extends keyof T>(key: K, notSetValue: T[K], updater: (value: T[K]) => T[K]): this;
  update<K extends keyof T>(key: K, updater: (value: T[K]) => T[K]): this;
  withMutations(mutator: (mutable: this) => any): this;
}
export interface IRecord<T> {
  asImmutable(): this;
  asMutable(): this;
  clear(): this;
  contains(value: Value<T[keyof T]>): boolean;
  count(): number;
  delete<K extends keyof T>(key: K): this;
  deleteIn(keyPath: any[] | Iterable<any>): this;
  entries<K extends keyof T>(): IterableIterator<[K, Value<T[K]>]>;
  equals(t: any): boolean;
  filter(predicate: <K extends keyof T>(value: T[K], key: K, iter: this) => any, context?: any): this;
  first(): Value<T[keyof T]>;
  get<K extends keyof T>(key: K, notSetValue?: Value<T[K]>): Value<T[K]>;
  getIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5], K7 extends keyof T[K1][K2][K3][K4][K5][K6], K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7], V = Value<T[K1][K2][K3][K4][K5][K6][K7][K8]>>(searchKeyPath: [K1, K2, K3, K4, K5, K6, K7, K8], notSetValue?: V): V;
  getIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5], K7 extends keyof T[K1][K2][K3][K4][K5][K6], V = Value<T[K1][K2][K3][K4][K5][K6][K7]>>(searchKeyPath: [K1, K2, K3, K4, K5, K6, K7], notSetValue?: V): V;
  getIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5], V = Value<T[K1][K2][K3][K4][K5][K6]>>(searchKeyPath: [K1, K2, K3, K4, K5, K6], notSetValue?: V): V;
  getIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], V = Value<T[K1][K2][K3][K4][K5]>>(searchKeyPath: [K1, K2, K3, K4, K5], notSetValue?: V): V;
  getIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], V = Value<T[K1][K2][K3][K4]>>(searchKeyPath: [K1, K2, K3, K4], notSetValue?: V): V;
  getIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], V = Value<T[K1][K2][K3]>>(searchKeyPath: [K1, K2, K3], notSetValue?: V): V;
  getIn<K1 extends keyof T, K2 extends keyof T[K1], V = Value<T[K1][K2]>>(searchKeyPath: [K1, K2], notSetValue?: V): V;
  getIn<K1 extends keyof T, V = Value<T[K1]>>(searchKeyPath: [K1], notSetValue?: V): V;
  getIn<V>(searchKeyPath: Iterable<any>, notSetValue?: V): V;
  has<K extends keyof T>(key: K): boolean;
  hasIn(searchKeyPath: any[] | Iterable<any>): boolean;
  includes(value: Value<T[keyof T]>): boolean;
  isEmpty(): boolean;
  keys(): IterableIterator<keyof T>;
  last(): Value<T[keyof T]>;
  map<M, K extends keyof T>(mapper: (value?: Value<T[K]>, key?: K, iter?: this) => M, context?: any): this;
  merge(...iterables: Array<Partial<T>>): this;
  merge<K extends keyof T, V = Value<T[K]>>(...iterables: Array<Iterable<[K, V]>>): this;
  mergeDeep(...iterables: T[]): this;
  mergeDeep<K extends keyof T, V = Value<T[K]>>(...iterables: Array<Iterable<[K, V]>>): this;
  mergeDeepIn(keyPath: any[] | Iterable<[any, any]>, ...iterables: Array<Iterable<[any, any]> | any>): this;
  mergeDeepWith<K extends keyof T, V = Value<T[K]>>(merger: (previous?: V, next?: T[K], key?: K) => V, ...iterables: T[]): this;
  mergeDeepWith<K extends keyof T, V = Value<T[K]>>(merger: (previous?: V, next?: V, key?: K) => V, ...iterables: Array<Iterable<[K, V]>>): this;
  mergeIn(keyPath: any[] | Iterable<[any, any]>, ...iterables: Array<Iterable<[any, any]> | any>): this;
  mergeWith<K extends keyof T, V = Value<T[K]>>(merger: (previous?: V, next?: T[K], key?: K) => V, ...iterables: T[]): this;
  mergeWith<K extends keyof T, V = Value<T[K]>>(merger: (previous?: V, next?: V, key?: K) => V, ...iterables: Array<Iterable<[K, V]>>): this;
  readonly size: number;
  removeIn(keyPath: any[] | Iterable<any>): this;
  set<K extends keyof T>(key: K, value: Value<T[K]>): this;
  setIn(keyPath: any[] | Iterable<any>, value: any): this;
  toArray(): Array<Value<T[keyof T]>>;
  toJS(): T;
  toList(): List<Value<T[keyof T]>>;
  toMap<K extends keyof T, V = Value<T[K]>>(): Map<K, V>;
  toObject(): { [K in keyof T]: Value<T[K]> };
  toOrderedMap<K extends keyof T, V = Value<T[K]>>(): OrderedMap<K, V>;
  toOrderedSet(): OrderedSet<Value<T[keyof T]>>;
  toSeq<K extends keyof T, V = Value<T[K]>>(): Seq<K, V>;
  toSet(): Set<Value<T[keyof T]>>;
  update(updater: (value: this) => this): this;
  update<K extends keyof T>(key: K, notSetValue: Value<T[K]>, updater: (value: Value<T[K]>) => Value<T[K]>): this;
  update<K extends keyof T>(key: K, updater: (value: Value<T[K]>) => Value<T[K]>): this;
  updateIn(keyPath: Iterable<any>, notSetValue: any, updater: (value?: any) => any): this;
  updateIn(keyPath: Iterable<any>, updater: (value?: any) => any): this;
  updateIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4]>(keyPath: [K1, K2, K3, K4, K5], notSetValue: Value<T[K1][K2][K3][K4][K5]>, updater: (value?: Value<T[K1][K2][K3][K4][K5]>) => Value<T[K1][K2][K3][K4][K5]>): this;
  updateIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4]>(keyPath: [K1, K2, K3, K4, K5], updater: (value?: Value<T[K1][K2][K3][K4][K5]>) => Value<T[K1][K2][K3][K4][K5]>): this;
  updateIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3]>(keyPath: [K1, K2, K3, K4], notSetValue: Value<T[K1][K2][K3][K4]>, updater: (value?: Value<T[K1][K2][K3][K4]>) => Value<T[K1][K2][K3][K4]>): this;
  updateIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3]>(keyPath: [K1, K2, K3, K4], updater: (value?: Value<T[K1][K2][K3][K4]>) => Value<T[K1][K2][K3][K4]>): this;
  updateIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(keyPath: [K1, K2, K3], notSetValue: Value<T[K1][K2][K3]>, updater: (value?: Value<T[K1][K2][K3]>) => Value<T[K1][K2][K3]>): this;
  updateIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(keyPath: [K1, K2, K3], updater: (value?: Value<T[K1][K2][K3]>) => Value<T[K1][K2][K3]>): this;
  updateIn<K1 extends keyof T, K2 extends keyof T[K1]>(keyPath: [K1, K2], notSetValue: Value<T[K1][K2]>, updater: (value?: Value<T[K1][K2]>) => Value<T[K1][K2]>): this;
  updateIn<K1 extends keyof T, K2 extends keyof T[K1]>(keyPath: [K1, K2], updater: (value?: Value<T[K1][K2]>) => Value<T[K1][K2]>): this;
  updateIn<K1 extends keyof T>(keyPath: [K1], notSetValue: Value<T[K1]>, updater: (value: Value<T[K1]>) => Value<T[K1]>): this;
  updateIn<K1 extends keyof T>(keyPath: [K1], updater: (value?: Value<T[K1]>) => Value<T[K1]>): this;
  values(): IterableIterator<Value<T[keyof T]>>;
  withMutations(mutator: (mutable: this) => any): this;
}
interface IFromJS {
  <T extends object>(obj: T): IRecord<T>;
  <T extends object>(array: T[]): List<IRecord<T>>;
}
interface IFromMap {
  <T extends object>(obj: T): IMapRecord<T>;
}
export declare const fromJS: IFromJS;
export declare const fromMap: IFromMap;
export { };
