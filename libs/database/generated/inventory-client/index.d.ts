
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model StockItem
 * 
 */
export type StockItem = $Result.DefaultSelection<Prisma.$StockItemPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model PurchaseLine
 * 
 */
export type PurchaseLine = $Result.DefaultSelection<Prisma.$PurchaseLinePayload>
/**
 * Model WasteLog
 * 
 */
export type WasteLog = $Result.DefaultSelection<Prisma.$WasteLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Unit: {
  g: 'g',
  kg: 'kg',
  mg: 'mg',
  ml: 'ml',
  l: 'l',
  unit: 'unit'
};

export type Unit = (typeof Unit)[keyof typeof Unit]

}

export type Unit = $Enums.Unit

export const Unit: typeof $Enums.Unit

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more StockItems
 * const stockItems = await prisma.stockItem.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more StockItems
   * const stockItems = await prisma.stockItem.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.stockItem`: Exposes CRUD operations for the **StockItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockItems
    * const stockItems = await prisma.stockItem.findMany()
    * ```
    */
  get stockItem(): Prisma.StockItemDelegate<ExtArgs>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs>;

  /**
   * `prisma.purchaseLine`: Exposes CRUD operations for the **PurchaseLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseLines
    * const purchaseLines = await prisma.purchaseLine.findMany()
    * ```
    */
  get purchaseLine(): Prisma.PurchaseLineDelegate<ExtArgs>;

  /**
   * `prisma.wasteLog`: Exposes CRUD operations for the **WasteLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WasteLogs
    * const wasteLogs = await prisma.wasteLog.findMany()
    * ```
    */
  get wasteLog(): Prisma.WasteLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    StockItem: 'StockItem',
    Purchase: 'Purchase',
    PurchaseLine: 'PurchaseLine',
    WasteLog: 'WasteLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "stockItem" | "purchase" | "purchaseLine" | "wasteLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      StockItem: {
        payload: Prisma.$StockItemPayload<ExtArgs>
        fields: Prisma.StockItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>
          }
          findFirst: {
            args: Prisma.StockItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>
          }
          findMany: {
            args: Prisma.StockItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>[]
          }
          create: {
            args: Prisma.StockItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>
          }
          createMany: {
            args: Prisma.StockItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>[]
          }
          delete: {
            args: Prisma.StockItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>
          }
          update: {
            args: Prisma.StockItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>
          }
          deleteMany: {
            args: Prisma.StockItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>
          }
          aggregate: {
            args: Prisma.StockItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockItem>
          }
          groupBy: {
            args: Prisma.StockItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockItemCountArgs<ExtArgs>
            result: $Utils.Optional<StockItemCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      PurchaseLine: {
        payload: Prisma.$PurchaseLinePayload<ExtArgs>
        fields: Prisma.PurchaseLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseLinePayload>
          }
          findFirst: {
            args: Prisma.PurchaseLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseLinePayload>
          }
          findMany: {
            args: Prisma.PurchaseLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseLinePayload>[]
          }
          create: {
            args: Prisma.PurchaseLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseLinePayload>
          }
          createMany: {
            args: Prisma.PurchaseLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseLinePayload>[]
          }
          delete: {
            args: Prisma.PurchaseLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseLinePayload>
          }
          update: {
            args: Prisma.PurchaseLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseLinePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseLinePayload>
          }
          aggregate: {
            args: Prisma.PurchaseLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseLine>
          }
          groupBy: {
            args: Prisma.PurchaseLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseLineCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseLineCountAggregateOutputType> | number
          }
        }
      }
      WasteLog: {
        payload: Prisma.$WasteLogPayload<ExtArgs>
        fields: Prisma.WasteLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WasteLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WasteLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>
          }
          findFirst: {
            args: Prisma.WasteLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WasteLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>
          }
          findMany: {
            args: Prisma.WasteLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>[]
          }
          create: {
            args: Prisma.WasteLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>
          }
          createMany: {
            args: Prisma.WasteLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WasteLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>[]
          }
          delete: {
            args: Prisma.WasteLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>
          }
          update: {
            args: Prisma.WasteLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>
          }
          deleteMany: {
            args: Prisma.WasteLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WasteLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WasteLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>
          }
          aggregate: {
            args: Prisma.WasteLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWasteLog>
          }
          groupBy: {
            args: Prisma.WasteLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WasteLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WasteLogCountArgs<ExtArgs>
            result: $Utils.Optional<WasteLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StockItemCountOutputType
   */

  export type StockItemCountOutputType = {
    purchases: number
    waste: number
  }

  export type StockItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | StockItemCountOutputTypeCountPurchasesArgs
    waste?: boolean | StockItemCountOutputTypeCountWasteArgs
  }

  // Custom InputTypes
  /**
   * StockItemCountOutputType without action
   */
  export type StockItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItemCountOutputType
     */
    select?: StockItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StockItemCountOutputType without action
   */
  export type StockItemCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseLineWhereInput
  }

  /**
   * StockItemCountOutputType without action
   */
  export type StockItemCountOutputTypeCountWasteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WasteLogWhereInput
  }


  /**
   * Count Type PurchaseCountOutputType
   */

  export type PurchaseCountOutputType = {
    lines: number
  }

  export type PurchaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | PurchaseCountOutputTypeCountLinesArgs
  }

  // Custom InputTypes
  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCountOutputType
     */
    select?: PurchaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseLineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model StockItem
   */

  export type AggregateStockItem = {
    _count: StockItemCountAggregateOutputType | null
    _avg: StockItemAvgAggregateOutputType | null
    _sum: StockItemSumAggregateOutputType | null
    _min: StockItemMinAggregateOutputType | null
    _max: StockItemMaxAggregateOutputType | null
  }

  export type StockItemAvgAggregateOutputType = {
    reorderLevel: Decimal | null
    currentQuantity: Decimal | null
  }

  export type StockItemSumAggregateOutputType = {
    reorderLevel: Decimal | null
    currentQuantity: Decimal | null
  }

  export type StockItemMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    unit: $Enums.Unit | null
    reorderLevel: Decimal | null
    currentQuantity: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: boolean | null
    deletedAt: Date | null
    deletedById: string | null
  }

  export type StockItemMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    unit: $Enums.Unit | null
    reorderLevel: Decimal | null
    currentQuantity: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: boolean | null
    deletedAt: Date | null
    deletedById: string | null
  }

  export type StockItemCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    unit: number
    reorderLevel: number
    categories: number
    currentQuantity: number
    createdAt: number
    updatedAt: number
    deleted: number
    deletedAt: number
    deletedById: number
    _all: number
  }


  export type StockItemAvgAggregateInputType = {
    reorderLevel?: true
    currentQuantity?: true
  }

  export type StockItemSumAggregateInputType = {
    reorderLevel?: true
    currentQuantity?: true
  }

  export type StockItemMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    unit?: true
    reorderLevel?: true
    currentQuantity?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    deletedAt?: true
    deletedById?: true
  }

  export type StockItemMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    unit?: true
    reorderLevel?: true
    currentQuantity?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    deletedAt?: true
    deletedById?: true
  }

  export type StockItemCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    unit?: true
    reorderLevel?: true
    categories?: true
    currentQuantity?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    deletedAt?: true
    deletedById?: true
    _all?: true
  }

  export type StockItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockItem to aggregate.
     */
    where?: StockItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockItems to fetch.
     */
    orderBy?: StockItemOrderByWithRelationInput | StockItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockItems
    **/
    _count?: true | StockItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockItemMaxAggregateInputType
  }

  export type GetStockItemAggregateType<T extends StockItemAggregateArgs> = {
        [P in keyof T & keyof AggregateStockItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockItem[P]>
      : GetScalarType<T[P], AggregateStockItem[P]>
  }




  export type StockItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockItemWhereInput
    orderBy?: StockItemOrderByWithAggregationInput | StockItemOrderByWithAggregationInput[]
    by: StockItemScalarFieldEnum[] | StockItemScalarFieldEnum
    having?: StockItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockItemCountAggregateInputType | true
    _avg?: StockItemAvgAggregateInputType
    _sum?: StockItemSumAggregateInputType
    _min?: StockItemMinAggregateInputType
    _max?: StockItemMaxAggregateInputType
  }

  export type StockItemGroupByOutputType = {
    id: string
    tenantId: string
    name: string
    unit: $Enums.Unit
    reorderLevel: Decimal
    categories: string[]
    currentQuantity: Decimal
    createdAt: Date
    updatedAt: Date
    deleted: boolean
    deletedAt: Date | null
    deletedById: string | null
    _count: StockItemCountAggregateOutputType | null
    _avg: StockItemAvgAggregateOutputType | null
    _sum: StockItemSumAggregateOutputType | null
    _min: StockItemMinAggregateOutputType | null
    _max: StockItemMaxAggregateOutputType | null
  }

  type GetStockItemGroupByPayload<T extends StockItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockItemGroupByOutputType[P]>
            : GetScalarType<T[P], StockItemGroupByOutputType[P]>
        }
      >
    >


  export type StockItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    unit?: boolean
    reorderLevel?: boolean
    categories?: boolean
    currentQuantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    deletedAt?: boolean
    deletedById?: boolean
    purchases?: boolean | StockItem$purchasesArgs<ExtArgs>
    waste?: boolean | StockItem$wasteArgs<ExtArgs>
    _count?: boolean | StockItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockItem"]>

  export type StockItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    unit?: boolean
    reorderLevel?: boolean
    categories?: boolean
    currentQuantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    deletedAt?: boolean
    deletedById?: boolean
  }, ExtArgs["result"]["stockItem"]>

  export type StockItemSelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    unit?: boolean
    reorderLevel?: boolean
    categories?: boolean
    currentQuantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    deletedAt?: boolean
    deletedById?: boolean
  }

  export type StockItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | StockItem$purchasesArgs<ExtArgs>
    waste?: boolean | StockItem$wasteArgs<ExtArgs>
    _count?: boolean | StockItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StockItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StockItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockItem"
    objects: {
      purchases: Prisma.$PurchaseLinePayload<ExtArgs>[]
      waste: Prisma.$WasteLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      name: string
      unit: $Enums.Unit
      reorderLevel: Prisma.Decimal
      categories: string[]
      currentQuantity: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
      deleted: boolean
      deletedAt: Date | null
      deletedById: string | null
    }, ExtArgs["result"]["stockItem"]>
    composites: {}
  }

  type StockItemGetPayload<S extends boolean | null | undefined | StockItemDefaultArgs> = $Result.GetResult<Prisma.$StockItemPayload, S>

  type StockItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockItemCountAggregateInputType | true
    }

  export interface StockItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockItem'], meta: { name: 'StockItem' } }
    /**
     * Find zero or one StockItem that matches the filter.
     * @param {StockItemFindUniqueArgs} args - Arguments to find a StockItem
     * @example
     * // Get one StockItem
     * const stockItem = await prisma.stockItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockItemFindUniqueArgs>(args: SelectSubset<T, StockItemFindUniqueArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockItemFindUniqueOrThrowArgs} args - Arguments to find a StockItem
     * @example
     * // Get one StockItem
     * const stockItem = await prisma.stockItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockItemFindUniqueOrThrowArgs>(args: SelectSubset<T, StockItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemFindFirstArgs} args - Arguments to find a StockItem
     * @example
     * // Get one StockItem
     * const stockItem = await prisma.stockItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockItemFindFirstArgs>(args?: SelectSubset<T, StockItemFindFirstArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemFindFirstOrThrowArgs} args - Arguments to find a StockItem
     * @example
     * // Get one StockItem
     * const stockItem = await prisma.stockItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockItemFindFirstOrThrowArgs>(args?: SelectSubset<T, StockItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockItems
     * const stockItems = await prisma.stockItem.findMany()
     * 
     * // Get first 10 StockItems
     * const stockItems = await prisma.stockItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockItemWithIdOnly = await prisma.stockItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockItemFindManyArgs>(args?: SelectSubset<T, StockItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockItem.
     * @param {StockItemCreateArgs} args - Arguments to create a StockItem.
     * @example
     * // Create one StockItem
     * const StockItem = await prisma.stockItem.create({
     *   data: {
     *     // ... data to create a StockItem
     *   }
     * })
     * 
     */
    create<T extends StockItemCreateArgs>(args: SelectSubset<T, StockItemCreateArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockItems.
     * @param {StockItemCreateManyArgs} args - Arguments to create many StockItems.
     * @example
     * // Create many StockItems
     * const stockItem = await prisma.stockItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockItemCreateManyArgs>(args?: SelectSubset<T, StockItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockItems and returns the data saved in the database.
     * @param {StockItemCreateManyAndReturnArgs} args - Arguments to create many StockItems.
     * @example
     * // Create many StockItems
     * const stockItem = await prisma.stockItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockItems and only return the `id`
     * const stockItemWithIdOnly = await prisma.stockItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockItemCreateManyAndReturnArgs>(args?: SelectSubset<T, StockItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StockItem.
     * @param {StockItemDeleteArgs} args - Arguments to delete one StockItem.
     * @example
     * // Delete one StockItem
     * const StockItem = await prisma.stockItem.delete({
     *   where: {
     *     // ... filter to delete one StockItem
     *   }
     * })
     * 
     */
    delete<T extends StockItemDeleteArgs>(args: SelectSubset<T, StockItemDeleteArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockItem.
     * @param {StockItemUpdateArgs} args - Arguments to update one StockItem.
     * @example
     * // Update one StockItem
     * const stockItem = await prisma.stockItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockItemUpdateArgs>(args: SelectSubset<T, StockItemUpdateArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockItems.
     * @param {StockItemDeleteManyArgs} args - Arguments to filter StockItems to delete.
     * @example
     * // Delete a few StockItems
     * const { count } = await prisma.stockItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockItemDeleteManyArgs>(args?: SelectSubset<T, StockItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockItems
     * const stockItem = await prisma.stockItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockItemUpdateManyArgs>(args: SelectSubset<T, StockItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockItem.
     * @param {StockItemUpsertArgs} args - Arguments to update or create a StockItem.
     * @example
     * // Update or create a StockItem
     * const stockItem = await prisma.stockItem.upsert({
     *   create: {
     *     // ... data to create a StockItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockItem we want to update
     *   }
     * })
     */
    upsert<T extends StockItemUpsertArgs>(args: SelectSubset<T, StockItemUpsertArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemCountArgs} args - Arguments to filter StockItems to count.
     * @example
     * // Count the number of StockItems
     * const count = await prisma.stockItem.count({
     *   where: {
     *     // ... the filter for the StockItems we want to count
     *   }
     * })
    **/
    count<T extends StockItemCountArgs>(
      args?: Subset<T, StockItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockItemAggregateArgs>(args: Subset<T, StockItemAggregateArgs>): Prisma.PrismaPromise<GetStockItemAggregateType<T>>

    /**
     * Group by StockItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockItemGroupByArgs['orderBy'] }
        : { orderBy?: StockItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockItem model
   */
  readonly fields: StockItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchases<T extends StockItem$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, StockItem$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseLinePayload<ExtArgs>, T, "findMany"> | Null>
    waste<T extends StockItem$wasteArgs<ExtArgs> = {}>(args?: Subset<T, StockItem$wasteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockItem model
   */ 
  interface StockItemFieldRefs {
    readonly id: FieldRef<"StockItem", 'String'>
    readonly tenantId: FieldRef<"StockItem", 'String'>
    readonly name: FieldRef<"StockItem", 'String'>
    readonly unit: FieldRef<"StockItem", 'Unit'>
    readonly reorderLevel: FieldRef<"StockItem", 'Decimal'>
    readonly categories: FieldRef<"StockItem", 'String[]'>
    readonly currentQuantity: FieldRef<"StockItem", 'Decimal'>
    readonly createdAt: FieldRef<"StockItem", 'DateTime'>
    readonly updatedAt: FieldRef<"StockItem", 'DateTime'>
    readonly deleted: FieldRef<"StockItem", 'Boolean'>
    readonly deletedAt: FieldRef<"StockItem", 'DateTime'>
    readonly deletedById: FieldRef<"StockItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StockItem findUnique
   */
  export type StockItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * Filter, which StockItem to fetch.
     */
    where: StockItemWhereUniqueInput
  }

  /**
   * StockItem findUniqueOrThrow
   */
  export type StockItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * Filter, which StockItem to fetch.
     */
    where: StockItemWhereUniqueInput
  }

  /**
   * StockItem findFirst
   */
  export type StockItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * Filter, which StockItem to fetch.
     */
    where?: StockItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockItems to fetch.
     */
    orderBy?: StockItemOrderByWithRelationInput | StockItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockItems.
     */
    cursor?: StockItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockItems.
     */
    distinct?: StockItemScalarFieldEnum | StockItemScalarFieldEnum[]
  }

  /**
   * StockItem findFirstOrThrow
   */
  export type StockItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * Filter, which StockItem to fetch.
     */
    where?: StockItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockItems to fetch.
     */
    orderBy?: StockItemOrderByWithRelationInput | StockItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockItems.
     */
    cursor?: StockItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockItems.
     */
    distinct?: StockItemScalarFieldEnum | StockItemScalarFieldEnum[]
  }

  /**
   * StockItem findMany
   */
  export type StockItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * Filter, which StockItems to fetch.
     */
    where?: StockItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockItems to fetch.
     */
    orderBy?: StockItemOrderByWithRelationInput | StockItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockItems.
     */
    cursor?: StockItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockItems.
     */
    skip?: number
    distinct?: StockItemScalarFieldEnum | StockItemScalarFieldEnum[]
  }

  /**
   * StockItem create
   */
  export type StockItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * The data needed to create a StockItem.
     */
    data: XOR<StockItemCreateInput, StockItemUncheckedCreateInput>
  }

  /**
   * StockItem createMany
   */
  export type StockItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockItems.
     */
    data: StockItemCreateManyInput | StockItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockItem createManyAndReturn
   */
  export type StockItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StockItems.
     */
    data: StockItemCreateManyInput | StockItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockItem update
   */
  export type StockItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * The data needed to update a StockItem.
     */
    data: XOR<StockItemUpdateInput, StockItemUncheckedUpdateInput>
    /**
     * Choose, which StockItem to update.
     */
    where: StockItemWhereUniqueInput
  }

  /**
   * StockItem updateMany
   */
  export type StockItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockItems.
     */
    data: XOR<StockItemUpdateManyMutationInput, StockItemUncheckedUpdateManyInput>
    /**
     * Filter which StockItems to update
     */
    where?: StockItemWhereInput
  }

  /**
   * StockItem upsert
   */
  export type StockItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * The filter to search for the StockItem to update in case it exists.
     */
    where: StockItemWhereUniqueInput
    /**
     * In case the StockItem found by the `where` argument doesn't exist, create a new StockItem with this data.
     */
    create: XOR<StockItemCreateInput, StockItemUncheckedCreateInput>
    /**
     * In case the StockItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockItemUpdateInput, StockItemUncheckedUpdateInput>
  }

  /**
   * StockItem delete
   */
  export type StockItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * Filter which StockItem to delete.
     */
    where: StockItemWhereUniqueInput
  }

  /**
   * StockItem deleteMany
   */
  export type StockItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockItems to delete
     */
    where?: StockItemWhereInput
  }

  /**
   * StockItem.purchases
   */
  export type StockItem$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseLine
     */
    select?: PurchaseLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseLineInclude<ExtArgs> | null
    where?: PurchaseLineWhereInput
    orderBy?: PurchaseLineOrderByWithRelationInput | PurchaseLineOrderByWithRelationInput[]
    cursor?: PurchaseLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseLineScalarFieldEnum | PurchaseLineScalarFieldEnum[]
  }

  /**
   * StockItem.waste
   */
  export type StockItem$wasteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    where?: WasteLogWhereInput
    orderBy?: WasteLogOrderByWithRelationInput | WasteLogOrderByWithRelationInput[]
    cursor?: WasteLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WasteLogScalarFieldEnum | WasteLogScalarFieldEnum[]
  }

  /**
   * StockItem without action
   */
  export type StockItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    totalCost: Decimal | null
  }

  export type PurchaseSumAggregateOutputType = {
    totalCost: Decimal | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    supplierName: string | null
    reference: string | null
    occurredAt: Date | null
    totalCost: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    supplierName: string | null
    reference: string | null
    occurredAt: Date | null
    totalCost: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    tenantId: number
    supplierName: number
    reference: number
    occurredAt: number
    totalCost: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    totalCost?: true
  }

  export type PurchaseSumAggregateInputType = {
    totalCost?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    tenantId?: true
    supplierName?: true
    reference?: true
    occurredAt?: true
    totalCost?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    tenantId?: true
    supplierName?: true
    reference?: true
    occurredAt?: true
    totalCost?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    tenantId?: true
    supplierName?: true
    reference?: true
    occurredAt?: true
    totalCost?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: string
    tenantId: string
    supplierName: string | null
    reference: string | null
    occurredAt: Date
    totalCost: Decimal
    createdAt: Date
    updatedAt: Date
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    supplierName?: boolean
    reference?: boolean
    occurredAt?: boolean
    totalCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lines?: boolean | Purchase$linesArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    supplierName?: boolean
    reference?: boolean
    occurredAt?: boolean
    totalCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    tenantId?: boolean
    supplierName?: boolean
    reference?: boolean
    occurredAt?: boolean
    totalCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | Purchase$linesArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      lines: Prisma.$PurchaseLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      supplierName: string | null
      reference: string | null
      occurredAt: Date
      totalCost: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lines<T extends Purchase$linesArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseLinePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Purchase model
   */ 
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'String'>
    readonly tenantId: FieldRef<"Purchase", 'String'>
    readonly supplierName: FieldRef<"Purchase", 'String'>
    readonly reference: FieldRef<"Purchase", 'String'>
    readonly occurredAt: FieldRef<"Purchase", 'DateTime'>
    readonly totalCost: FieldRef<"Purchase", 'Decimal'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
    readonly updatedAt: FieldRef<"Purchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
  }

  /**
   * Purchase.lines
   */
  export type Purchase$linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseLine
     */
    select?: PurchaseLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseLineInclude<ExtArgs> | null
    where?: PurchaseLineWhereInput
    orderBy?: PurchaseLineOrderByWithRelationInput | PurchaseLineOrderByWithRelationInput[]
    cursor?: PurchaseLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseLineScalarFieldEnum | PurchaseLineScalarFieldEnum[]
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseLine
   */

  export type AggregatePurchaseLine = {
    _count: PurchaseLineCountAggregateOutputType | null
    _avg: PurchaseLineAvgAggregateOutputType | null
    _sum: PurchaseLineSumAggregateOutputType | null
    _min: PurchaseLineMinAggregateOutputType | null
    _max: PurchaseLineMaxAggregateOutputType | null
  }

  export type PurchaseLineAvgAggregateOutputType = {
    quantity: Decimal | null
    unitCost: Decimal | null
    totalCost: Decimal | null
  }

  export type PurchaseLineSumAggregateOutputType = {
    quantity: Decimal | null
    unitCost: Decimal | null
    totalCost: Decimal | null
  }

  export type PurchaseLineMinAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    stockItemId: string | null
    quantity: Decimal | null
    unit: $Enums.Unit | null
    unitCost: Decimal | null
    totalCost: Decimal | null
  }

  export type PurchaseLineMaxAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    stockItemId: string | null
    quantity: Decimal | null
    unit: $Enums.Unit | null
    unitCost: Decimal | null
    totalCost: Decimal | null
  }

  export type PurchaseLineCountAggregateOutputType = {
    id: number
    purchaseId: number
    stockItemId: number
    quantity: number
    unit: number
    unitCost: number
    totalCost: number
    _all: number
  }


  export type PurchaseLineAvgAggregateInputType = {
    quantity?: true
    unitCost?: true
    totalCost?: true
  }

  export type PurchaseLineSumAggregateInputType = {
    quantity?: true
    unitCost?: true
    totalCost?: true
  }

  export type PurchaseLineMinAggregateInputType = {
    id?: true
    purchaseId?: true
    stockItemId?: true
    quantity?: true
    unit?: true
    unitCost?: true
    totalCost?: true
  }

  export type PurchaseLineMaxAggregateInputType = {
    id?: true
    purchaseId?: true
    stockItemId?: true
    quantity?: true
    unit?: true
    unitCost?: true
    totalCost?: true
  }

  export type PurchaseLineCountAggregateInputType = {
    id?: true
    purchaseId?: true
    stockItemId?: true
    quantity?: true
    unit?: true
    unitCost?: true
    totalCost?: true
    _all?: true
  }

  export type PurchaseLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseLine to aggregate.
     */
    where?: PurchaseLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseLines to fetch.
     */
    orderBy?: PurchaseLineOrderByWithRelationInput | PurchaseLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseLines
    **/
    _count?: true | PurchaseLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseLineMaxAggregateInputType
  }

  export type GetPurchaseLineAggregateType<T extends PurchaseLineAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseLine[P]>
      : GetScalarType<T[P], AggregatePurchaseLine[P]>
  }




  export type PurchaseLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseLineWhereInput
    orderBy?: PurchaseLineOrderByWithAggregationInput | PurchaseLineOrderByWithAggregationInput[]
    by: PurchaseLineScalarFieldEnum[] | PurchaseLineScalarFieldEnum
    having?: PurchaseLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseLineCountAggregateInputType | true
    _avg?: PurchaseLineAvgAggregateInputType
    _sum?: PurchaseLineSumAggregateInputType
    _min?: PurchaseLineMinAggregateInputType
    _max?: PurchaseLineMaxAggregateInputType
  }

  export type PurchaseLineGroupByOutputType = {
    id: string
    purchaseId: string
    stockItemId: string
    quantity: Decimal
    unit: $Enums.Unit
    unitCost: Decimal
    totalCost: Decimal
    _count: PurchaseLineCountAggregateOutputType | null
    _avg: PurchaseLineAvgAggregateOutputType | null
    _sum: PurchaseLineSumAggregateOutputType | null
    _min: PurchaseLineMinAggregateOutputType | null
    _max: PurchaseLineMaxAggregateOutputType | null
  }

  type GetPurchaseLineGroupByPayload<T extends PurchaseLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseLineGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseLineGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    stockItemId?: boolean
    quantity?: boolean
    unit?: boolean
    unitCost?: boolean
    totalCost?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    stockItem?: boolean | StockItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseLine"]>

  export type PurchaseLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    stockItemId?: boolean
    quantity?: boolean
    unit?: boolean
    unitCost?: boolean
    totalCost?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    stockItem?: boolean | StockItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseLine"]>

  export type PurchaseLineSelectScalar = {
    id?: boolean
    purchaseId?: boolean
    stockItemId?: boolean
    quantity?: boolean
    unit?: boolean
    unitCost?: boolean
    totalCost?: boolean
  }

  export type PurchaseLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    stockItem?: boolean | StockItemDefaultArgs<ExtArgs>
  }
  export type PurchaseLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    stockItem?: boolean | StockItemDefaultArgs<ExtArgs>
  }

  export type $PurchaseLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseLine"
    objects: {
      purchase: Prisma.$PurchasePayload<ExtArgs>
      stockItem: Prisma.$StockItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchaseId: string
      stockItemId: string
      quantity: Prisma.Decimal
      unit: $Enums.Unit
      unitCost: Prisma.Decimal
      totalCost: Prisma.Decimal
    }, ExtArgs["result"]["purchaseLine"]>
    composites: {}
  }

  type PurchaseLineGetPayload<S extends boolean | null | undefined | PurchaseLineDefaultArgs> = $Result.GetResult<Prisma.$PurchaseLinePayload, S>

  type PurchaseLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchaseLineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchaseLineCountAggregateInputType | true
    }

  export interface PurchaseLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseLine'], meta: { name: 'PurchaseLine' } }
    /**
     * Find zero or one PurchaseLine that matches the filter.
     * @param {PurchaseLineFindUniqueArgs} args - Arguments to find a PurchaseLine
     * @example
     * // Get one PurchaseLine
     * const purchaseLine = await prisma.purchaseLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseLineFindUniqueArgs>(args: SelectSubset<T, PurchaseLineFindUniqueArgs<ExtArgs>>): Prisma__PurchaseLineClient<$Result.GetResult<Prisma.$PurchaseLinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PurchaseLine that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PurchaseLineFindUniqueOrThrowArgs} args - Arguments to find a PurchaseLine
     * @example
     * // Get one PurchaseLine
     * const purchaseLine = await prisma.purchaseLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseLineFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseLineClient<$Result.GetResult<Prisma.$PurchaseLinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PurchaseLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseLineFindFirstArgs} args - Arguments to find a PurchaseLine
     * @example
     * // Get one PurchaseLine
     * const purchaseLine = await prisma.purchaseLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseLineFindFirstArgs>(args?: SelectSubset<T, PurchaseLineFindFirstArgs<ExtArgs>>): Prisma__PurchaseLineClient<$Result.GetResult<Prisma.$PurchaseLinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PurchaseLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseLineFindFirstOrThrowArgs} args - Arguments to find a PurchaseLine
     * @example
     * // Get one PurchaseLine
     * const purchaseLine = await prisma.purchaseLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseLineFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseLineClient<$Result.GetResult<Prisma.$PurchaseLinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PurchaseLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseLines
     * const purchaseLines = await prisma.purchaseLine.findMany()
     * 
     * // Get first 10 PurchaseLines
     * const purchaseLines = await prisma.purchaseLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseLineWithIdOnly = await prisma.purchaseLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseLineFindManyArgs>(args?: SelectSubset<T, PurchaseLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseLinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PurchaseLine.
     * @param {PurchaseLineCreateArgs} args - Arguments to create a PurchaseLine.
     * @example
     * // Create one PurchaseLine
     * const PurchaseLine = await prisma.purchaseLine.create({
     *   data: {
     *     // ... data to create a PurchaseLine
     *   }
     * })
     * 
     */
    create<T extends PurchaseLineCreateArgs>(args: SelectSubset<T, PurchaseLineCreateArgs<ExtArgs>>): Prisma__PurchaseLineClient<$Result.GetResult<Prisma.$PurchaseLinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PurchaseLines.
     * @param {PurchaseLineCreateManyArgs} args - Arguments to create many PurchaseLines.
     * @example
     * // Create many PurchaseLines
     * const purchaseLine = await prisma.purchaseLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseLineCreateManyArgs>(args?: SelectSubset<T, PurchaseLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseLines and returns the data saved in the database.
     * @param {PurchaseLineCreateManyAndReturnArgs} args - Arguments to create many PurchaseLines.
     * @example
     * // Create many PurchaseLines
     * const purchaseLine = await prisma.purchaseLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseLines and only return the `id`
     * const purchaseLineWithIdOnly = await prisma.purchaseLine.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseLineCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseLinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PurchaseLine.
     * @param {PurchaseLineDeleteArgs} args - Arguments to delete one PurchaseLine.
     * @example
     * // Delete one PurchaseLine
     * const PurchaseLine = await prisma.purchaseLine.delete({
     *   where: {
     *     // ... filter to delete one PurchaseLine
     *   }
     * })
     * 
     */
    delete<T extends PurchaseLineDeleteArgs>(args: SelectSubset<T, PurchaseLineDeleteArgs<ExtArgs>>): Prisma__PurchaseLineClient<$Result.GetResult<Prisma.$PurchaseLinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PurchaseLine.
     * @param {PurchaseLineUpdateArgs} args - Arguments to update one PurchaseLine.
     * @example
     * // Update one PurchaseLine
     * const purchaseLine = await prisma.purchaseLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseLineUpdateArgs>(args: SelectSubset<T, PurchaseLineUpdateArgs<ExtArgs>>): Prisma__PurchaseLineClient<$Result.GetResult<Prisma.$PurchaseLinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PurchaseLines.
     * @param {PurchaseLineDeleteManyArgs} args - Arguments to filter PurchaseLines to delete.
     * @example
     * // Delete a few PurchaseLines
     * const { count } = await prisma.purchaseLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseLineDeleteManyArgs>(args?: SelectSubset<T, PurchaseLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseLines
     * const purchaseLine = await prisma.purchaseLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseLineUpdateManyArgs>(args: SelectSubset<T, PurchaseLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurchaseLine.
     * @param {PurchaseLineUpsertArgs} args - Arguments to update or create a PurchaseLine.
     * @example
     * // Update or create a PurchaseLine
     * const purchaseLine = await prisma.purchaseLine.upsert({
     *   create: {
     *     // ... data to create a PurchaseLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseLine we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseLineUpsertArgs>(args: SelectSubset<T, PurchaseLineUpsertArgs<ExtArgs>>): Prisma__PurchaseLineClient<$Result.GetResult<Prisma.$PurchaseLinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PurchaseLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseLineCountArgs} args - Arguments to filter PurchaseLines to count.
     * @example
     * // Count the number of PurchaseLines
     * const count = await prisma.purchaseLine.count({
     *   where: {
     *     // ... the filter for the PurchaseLines we want to count
     *   }
     * })
    **/
    count<T extends PurchaseLineCountArgs>(
      args?: Subset<T, PurchaseLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseLineAggregateArgs>(args: Subset<T, PurchaseLineAggregateArgs>): Prisma.PrismaPromise<GetPurchaseLineAggregateType<T>>

    /**
     * Group by PurchaseLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseLineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseLineGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseLineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseLine model
   */
  readonly fields: PurchaseLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    stockItem<T extends StockItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockItemDefaultArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseLine model
   */ 
  interface PurchaseLineFieldRefs {
    readonly id: FieldRef<"PurchaseLine", 'String'>
    readonly purchaseId: FieldRef<"PurchaseLine", 'String'>
    readonly stockItemId: FieldRef<"PurchaseLine", 'String'>
    readonly quantity: FieldRef<"PurchaseLine", 'Decimal'>
    readonly unit: FieldRef<"PurchaseLine", 'Unit'>
    readonly unitCost: FieldRef<"PurchaseLine", 'Decimal'>
    readonly totalCost: FieldRef<"PurchaseLine", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseLine findUnique
   */
  export type PurchaseLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseLine
     */
    select?: PurchaseLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseLineInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseLine to fetch.
     */
    where: PurchaseLineWhereUniqueInput
  }

  /**
   * PurchaseLine findUniqueOrThrow
   */
  export type PurchaseLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseLine
     */
    select?: PurchaseLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseLineInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseLine to fetch.
     */
    where: PurchaseLineWhereUniqueInput
  }

  /**
   * PurchaseLine findFirst
   */
  export type PurchaseLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseLine
     */
    select?: PurchaseLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseLineInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseLine to fetch.
     */
    where?: PurchaseLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseLines to fetch.
     */
    orderBy?: PurchaseLineOrderByWithRelationInput | PurchaseLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseLines.
     */
    cursor?: PurchaseLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseLines.
     */
    distinct?: PurchaseLineScalarFieldEnum | PurchaseLineScalarFieldEnum[]
  }

  /**
   * PurchaseLine findFirstOrThrow
   */
  export type PurchaseLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseLine
     */
    select?: PurchaseLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseLineInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseLine to fetch.
     */
    where?: PurchaseLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseLines to fetch.
     */
    orderBy?: PurchaseLineOrderByWithRelationInput | PurchaseLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseLines.
     */
    cursor?: PurchaseLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseLines.
     */
    distinct?: PurchaseLineScalarFieldEnum | PurchaseLineScalarFieldEnum[]
  }

  /**
   * PurchaseLine findMany
   */
  export type PurchaseLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseLine
     */
    select?: PurchaseLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseLineInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseLines to fetch.
     */
    where?: PurchaseLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseLines to fetch.
     */
    orderBy?: PurchaseLineOrderByWithRelationInput | PurchaseLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseLines.
     */
    cursor?: PurchaseLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseLines.
     */
    skip?: number
    distinct?: PurchaseLineScalarFieldEnum | PurchaseLineScalarFieldEnum[]
  }

  /**
   * PurchaseLine create
   */
  export type PurchaseLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseLine
     */
    select?: PurchaseLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseLineInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseLine.
     */
    data: XOR<PurchaseLineCreateInput, PurchaseLineUncheckedCreateInput>
  }

  /**
   * PurchaseLine createMany
   */
  export type PurchaseLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseLines.
     */
    data: PurchaseLineCreateManyInput | PurchaseLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseLine createManyAndReturn
   */
  export type PurchaseLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseLine
     */
    select?: PurchaseLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PurchaseLines.
     */
    data: PurchaseLineCreateManyInput | PurchaseLineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseLine update
   */
  export type PurchaseLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseLine
     */
    select?: PurchaseLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseLineInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseLine.
     */
    data: XOR<PurchaseLineUpdateInput, PurchaseLineUncheckedUpdateInput>
    /**
     * Choose, which PurchaseLine to update.
     */
    where: PurchaseLineWhereUniqueInput
  }

  /**
   * PurchaseLine updateMany
   */
  export type PurchaseLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseLines.
     */
    data: XOR<PurchaseLineUpdateManyMutationInput, PurchaseLineUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseLines to update
     */
    where?: PurchaseLineWhereInput
  }

  /**
   * PurchaseLine upsert
   */
  export type PurchaseLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseLine
     */
    select?: PurchaseLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseLineInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseLine to update in case it exists.
     */
    where: PurchaseLineWhereUniqueInput
    /**
     * In case the PurchaseLine found by the `where` argument doesn't exist, create a new PurchaseLine with this data.
     */
    create: XOR<PurchaseLineCreateInput, PurchaseLineUncheckedCreateInput>
    /**
     * In case the PurchaseLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseLineUpdateInput, PurchaseLineUncheckedUpdateInput>
  }

  /**
   * PurchaseLine delete
   */
  export type PurchaseLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseLine
     */
    select?: PurchaseLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseLineInclude<ExtArgs> | null
    /**
     * Filter which PurchaseLine to delete.
     */
    where: PurchaseLineWhereUniqueInput
  }

  /**
   * PurchaseLine deleteMany
   */
  export type PurchaseLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseLines to delete
     */
    where?: PurchaseLineWhereInput
  }

  /**
   * PurchaseLine without action
   */
  export type PurchaseLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseLine
     */
    select?: PurchaseLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseLineInclude<ExtArgs> | null
  }


  /**
   * Model WasteLog
   */

  export type AggregateWasteLog = {
    _count: WasteLogCountAggregateOutputType | null
    _avg: WasteLogAvgAggregateOutputType | null
    _sum: WasteLogSumAggregateOutputType | null
    _min: WasteLogMinAggregateOutputType | null
    _max: WasteLogMaxAggregateOutputType | null
  }

  export type WasteLogAvgAggregateOutputType = {
    quantity: Decimal | null
  }

  export type WasteLogSumAggregateOutputType = {
    quantity: Decimal | null
  }

  export type WasteLogMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    stockItemId: string | null
    quantity: Decimal | null
    unit: $Enums.Unit | null
    reason: string | null
    occurredAt: Date | null
  }

  export type WasteLogMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    stockItemId: string | null
    quantity: Decimal | null
    unit: $Enums.Unit | null
    reason: string | null
    occurredAt: Date | null
  }

  export type WasteLogCountAggregateOutputType = {
    id: number
    tenantId: number
    stockItemId: number
    quantity: number
    unit: number
    reason: number
    occurredAt: number
    _all: number
  }


  export type WasteLogAvgAggregateInputType = {
    quantity?: true
  }

  export type WasteLogSumAggregateInputType = {
    quantity?: true
  }

  export type WasteLogMinAggregateInputType = {
    id?: true
    tenantId?: true
    stockItemId?: true
    quantity?: true
    unit?: true
    reason?: true
    occurredAt?: true
  }

  export type WasteLogMaxAggregateInputType = {
    id?: true
    tenantId?: true
    stockItemId?: true
    quantity?: true
    unit?: true
    reason?: true
    occurredAt?: true
  }

  export type WasteLogCountAggregateInputType = {
    id?: true
    tenantId?: true
    stockItemId?: true
    quantity?: true
    unit?: true
    reason?: true
    occurredAt?: true
    _all?: true
  }

  export type WasteLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WasteLog to aggregate.
     */
    where?: WasteLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WasteLogs to fetch.
     */
    orderBy?: WasteLogOrderByWithRelationInput | WasteLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WasteLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WasteLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WasteLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WasteLogs
    **/
    _count?: true | WasteLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WasteLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WasteLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WasteLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WasteLogMaxAggregateInputType
  }

  export type GetWasteLogAggregateType<T extends WasteLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWasteLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWasteLog[P]>
      : GetScalarType<T[P], AggregateWasteLog[P]>
  }




  export type WasteLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WasteLogWhereInput
    orderBy?: WasteLogOrderByWithAggregationInput | WasteLogOrderByWithAggregationInput[]
    by: WasteLogScalarFieldEnum[] | WasteLogScalarFieldEnum
    having?: WasteLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WasteLogCountAggregateInputType | true
    _avg?: WasteLogAvgAggregateInputType
    _sum?: WasteLogSumAggregateInputType
    _min?: WasteLogMinAggregateInputType
    _max?: WasteLogMaxAggregateInputType
  }

  export type WasteLogGroupByOutputType = {
    id: string
    tenantId: string
    stockItemId: string
    quantity: Decimal
    unit: $Enums.Unit
    reason: string
    occurredAt: Date
    _count: WasteLogCountAggregateOutputType | null
    _avg: WasteLogAvgAggregateOutputType | null
    _sum: WasteLogSumAggregateOutputType | null
    _min: WasteLogMinAggregateOutputType | null
    _max: WasteLogMaxAggregateOutputType | null
  }

  type GetWasteLogGroupByPayload<T extends WasteLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WasteLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WasteLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WasteLogGroupByOutputType[P]>
            : GetScalarType<T[P], WasteLogGroupByOutputType[P]>
        }
      >
    >


  export type WasteLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    stockItemId?: boolean
    quantity?: boolean
    unit?: boolean
    reason?: boolean
    occurredAt?: boolean
    stockItem?: boolean | StockItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wasteLog"]>

  export type WasteLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    stockItemId?: boolean
    quantity?: boolean
    unit?: boolean
    reason?: boolean
    occurredAt?: boolean
    stockItem?: boolean | StockItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wasteLog"]>

  export type WasteLogSelectScalar = {
    id?: boolean
    tenantId?: boolean
    stockItemId?: boolean
    quantity?: boolean
    unit?: boolean
    reason?: boolean
    occurredAt?: boolean
  }

  export type WasteLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockItem?: boolean | StockItemDefaultArgs<ExtArgs>
  }
  export type WasteLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockItem?: boolean | StockItemDefaultArgs<ExtArgs>
  }

  export type $WasteLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WasteLog"
    objects: {
      stockItem: Prisma.$StockItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      stockItemId: string
      quantity: Prisma.Decimal
      unit: $Enums.Unit
      reason: string
      occurredAt: Date
    }, ExtArgs["result"]["wasteLog"]>
    composites: {}
  }

  type WasteLogGetPayload<S extends boolean | null | undefined | WasteLogDefaultArgs> = $Result.GetResult<Prisma.$WasteLogPayload, S>

  type WasteLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WasteLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WasteLogCountAggregateInputType | true
    }

  export interface WasteLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WasteLog'], meta: { name: 'WasteLog' } }
    /**
     * Find zero or one WasteLog that matches the filter.
     * @param {WasteLogFindUniqueArgs} args - Arguments to find a WasteLog
     * @example
     * // Get one WasteLog
     * const wasteLog = await prisma.wasteLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WasteLogFindUniqueArgs>(args: SelectSubset<T, WasteLogFindUniqueArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WasteLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WasteLogFindUniqueOrThrowArgs} args - Arguments to find a WasteLog
     * @example
     * // Get one WasteLog
     * const wasteLog = await prisma.wasteLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WasteLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WasteLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WasteLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteLogFindFirstArgs} args - Arguments to find a WasteLog
     * @example
     * // Get one WasteLog
     * const wasteLog = await prisma.wasteLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WasteLogFindFirstArgs>(args?: SelectSubset<T, WasteLogFindFirstArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WasteLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteLogFindFirstOrThrowArgs} args - Arguments to find a WasteLog
     * @example
     * // Get one WasteLog
     * const wasteLog = await prisma.wasteLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WasteLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WasteLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WasteLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WasteLogs
     * const wasteLogs = await prisma.wasteLog.findMany()
     * 
     * // Get first 10 WasteLogs
     * const wasteLogs = await prisma.wasteLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wasteLogWithIdOnly = await prisma.wasteLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WasteLogFindManyArgs>(args?: SelectSubset<T, WasteLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WasteLog.
     * @param {WasteLogCreateArgs} args - Arguments to create a WasteLog.
     * @example
     * // Create one WasteLog
     * const WasteLog = await prisma.wasteLog.create({
     *   data: {
     *     // ... data to create a WasteLog
     *   }
     * })
     * 
     */
    create<T extends WasteLogCreateArgs>(args: SelectSubset<T, WasteLogCreateArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WasteLogs.
     * @param {WasteLogCreateManyArgs} args - Arguments to create many WasteLogs.
     * @example
     * // Create many WasteLogs
     * const wasteLog = await prisma.wasteLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WasteLogCreateManyArgs>(args?: SelectSubset<T, WasteLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WasteLogs and returns the data saved in the database.
     * @param {WasteLogCreateManyAndReturnArgs} args - Arguments to create many WasteLogs.
     * @example
     * // Create many WasteLogs
     * const wasteLog = await prisma.wasteLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WasteLogs and only return the `id`
     * const wasteLogWithIdOnly = await prisma.wasteLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WasteLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WasteLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WasteLog.
     * @param {WasteLogDeleteArgs} args - Arguments to delete one WasteLog.
     * @example
     * // Delete one WasteLog
     * const WasteLog = await prisma.wasteLog.delete({
     *   where: {
     *     // ... filter to delete one WasteLog
     *   }
     * })
     * 
     */
    delete<T extends WasteLogDeleteArgs>(args: SelectSubset<T, WasteLogDeleteArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WasteLog.
     * @param {WasteLogUpdateArgs} args - Arguments to update one WasteLog.
     * @example
     * // Update one WasteLog
     * const wasteLog = await prisma.wasteLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WasteLogUpdateArgs>(args: SelectSubset<T, WasteLogUpdateArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WasteLogs.
     * @param {WasteLogDeleteManyArgs} args - Arguments to filter WasteLogs to delete.
     * @example
     * // Delete a few WasteLogs
     * const { count } = await prisma.wasteLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WasteLogDeleteManyArgs>(args?: SelectSubset<T, WasteLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WasteLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WasteLogs
     * const wasteLog = await prisma.wasteLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WasteLogUpdateManyArgs>(args: SelectSubset<T, WasteLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WasteLog.
     * @param {WasteLogUpsertArgs} args - Arguments to update or create a WasteLog.
     * @example
     * // Update or create a WasteLog
     * const wasteLog = await prisma.wasteLog.upsert({
     *   create: {
     *     // ... data to create a WasteLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WasteLog we want to update
     *   }
     * })
     */
    upsert<T extends WasteLogUpsertArgs>(args: SelectSubset<T, WasteLogUpsertArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WasteLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteLogCountArgs} args - Arguments to filter WasteLogs to count.
     * @example
     * // Count the number of WasteLogs
     * const count = await prisma.wasteLog.count({
     *   where: {
     *     // ... the filter for the WasteLogs we want to count
     *   }
     * })
    **/
    count<T extends WasteLogCountArgs>(
      args?: Subset<T, WasteLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WasteLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WasteLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WasteLogAggregateArgs>(args: Subset<T, WasteLogAggregateArgs>): Prisma.PrismaPromise<GetWasteLogAggregateType<T>>

    /**
     * Group by WasteLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WasteLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WasteLogGroupByArgs['orderBy'] }
        : { orderBy?: WasteLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WasteLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWasteLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WasteLog model
   */
  readonly fields: WasteLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WasteLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WasteLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stockItem<T extends StockItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockItemDefaultArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WasteLog model
   */ 
  interface WasteLogFieldRefs {
    readonly id: FieldRef<"WasteLog", 'String'>
    readonly tenantId: FieldRef<"WasteLog", 'String'>
    readonly stockItemId: FieldRef<"WasteLog", 'String'>
    readonly quantity: FieldRef<"WasteLog", 'Decimal'>
    readonly unit: FieldRef<"WasteLog", 'Unit'>
    readonly reason: FieldRef<"WasteLog", 'String'>
    readonly occurredAt: FieldRef<"WasteLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WasteLog findUnique
   */
  export type WasteLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * Filter, which WasteLog to fetch.
     */
    where: WasteLogWhereUniqueInput
  }

  /**
   * WasteLog findUniqueOrThrow
   */
  export type WasteLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * Filter, which WasteLog to fetch.
     */
    where: WasteLogWhereUniqueInput
  }

  /**
   * WasteLog findFirst
   */
  export type WasteLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * Filter, which WasteLog to fetch.
     */
    where?: WasteLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WasteLogs to fetch.
     */
    orderBy?: WasteLogOrderByWithRelationInput | WasteLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WasteLogs.
     */
    cursor?: WasteLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WasteLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WasteLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WasteLogs.
     */
    distinct?: WasteLogScalarFieldEnum | WasteLogScalarFieldEnum[]
  }

  /**
   * WasteLog findFirstOrThrow
   */
  export type WasteLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * Filter, which WasteLog to fetch.
     */
    where?: WasteLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WasteLogs to fetch.
     */
    orderBy?: WasteLogOrderByWithRelationInput | WasteLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WasteLogs.
     */
    cursor?: WasteLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WasteLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WasteLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WasteLogs.
     */
    distinct?: WasteLogScalarFieldEnum | WasteLogScalarFieldEnum[]
  }

  /**
   * WasteLog findMany
   */
  export type WasteLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * Filter, which WasteLogs to fetch.
     */
    where?: WasteLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WasteLogs to fetch.
     */
    orderBy?: WasteLogOrderByWithRelationInput | WasteLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WasteLogs.
     */
    cursor?: WasteLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WasteLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WasteLogs.
     */
    skip?: number
    distinct?: WasteLogScalarFieldEnum | WasteLogScalarFieldEnum[]
  }

  /**
   * WasteLog create
   */
  export type WasteLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WasteLog.
     */
    data: XOR<WasteLogCreateInput, WasteLogUncheckedCreateInput>
  }

  /**
   * WasteLog createMany
   */
  export type WasteLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WasteLogs.
     */
    data: WasteLogCreateManyInput | WasteLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WasteLog createManyAndReturn
   */
  export type WasteLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WasteLogs.
     */
    data: WasteLogCreateManyInput | WasteLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WasteLog update
   */
  export type WasteLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WasteLog.
     */
    data: XOR<WasteLogUpdateInput, WasteLogUncheckedUpdateInput>
    /**
     * Choose, which WasteLog to update.
     */
    where: WasteLogWhereUniqueInput
  }

  /**
   * WasteLog updateMany
   */
  export type WasteLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WasteLogs.
     */
    data: XOR<WasteLogUpdateManyMutationInput, WasteLogUncheckedUpdateManyInput>
    /**
     * Filter which WasteLogs to update
     */
    where?: WasteLogWhereInput
  }

  /**
   * WasteLog upsert
   */
  export type WasteLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WasteLog to update in case it exists.
     */
    where: WasteLogWhereUniqueInput
    /**
     * In case the WasteLog found by the `where` argument doesn't exist, create a new WasteLog with this data.
     */
    create: XOR<WasteLogCreateInput, WasteLogUncheckedCreateInput>
    /**
     * In case the WasteLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WasteLogUpdateInput, WasteLogUncheckedUpdateInput>
  }

  /**
   * WasteLog delete
   */
  export type WasteLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * Filter which WasteLog to delete.
     */
    where: WasteLogWhereUniqueInput
  }

  /**
   * WasteLog deleteMany
   */
  export type WasteLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WasteLogs to delete
     */
    where?: WasteLogWhereInput
  }

  /**
   * WasteLog without action
   */
  export type WasteLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StockItemScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    unit: 'unit',
    reorderLevel: 'reorderLevel',
    categories: 'categories',
    currentQuantity: 'currentQuantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted',
    deletedAt: 'deletedAt',
    deletedById: 'deletedById'
  };

  export type StockItemScalarFieldEnum = (typeof StockItemScalarFieldEnum)[keyof typeof StockItemScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    supplierName: 'supplierName',
    reference: 'reference',
    occurredAt: 'occurredAt',
    totalCost: 'totalCost',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const PurchaseLineScalarFieldEnum: {
    id: 'id',
    purchaseId: 'purchaseId',
    stockItemId: 'stockItemId',
    quantity: 'quantity',
    unit: 'unit',
    unitCost: 'unitCost',
    totalCost: 'totalCost'
  };

  export type PurchaseLineScalarFieldEnum = (typeof PurchaseLineScalarFieldEnum)[keyof typeof PurchaseLineScalarFieldEnum]


  export const WasteLogScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    stockItemId: 'stockItemId',
    quantity: 'quantity',
    unit: 'unit',
    reason: 'reason',
    occurredAt: 'occurredAt'
  };

  export type WasteLogScalarFieldEnum = (typeof WasteLogScalarFieldEnum)[keyof typeof WasteLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Unit'
   */
  export type EnumUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Unit'>
    


  /**
   * Reference to a field of type 'Unit[]'
   */
  export type ListEnumUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Unit[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type StockItemWhereInput = {
    AND?: StockItemWhereInput | StockItemWhereInput[]
    OR?: StockItemWhereInput[]
    NOT?: StockItemWhereInput | StockItemWhereInput[]
    id?: StringFilter<"StockItem"> | string
    tenantId?: StringFilter<"StockItem"> | string
    name?: StringFilter<"StockItem"> | string
    unit?: EnumUnitFilter<"StockItem"> | $Enums.Unit
    reorderLevel?: DecimalFilter<"StockItem"> | Decimal | DecimalJsLike | number | string
    categories?: StringNullableListFilter<"StockItem">
    currentQuantity?: DecimalFilter<"StockItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"StockItem"> | Date | string
    updatedAt?: DateTimeFilter<"StockItem"> | Date | string
    deleted?: BoolFilter<"StockItem"> | boolean
    deletedAt?: DateTimeNullableFilter<"StockItem"> | Date | string | null
    deletedById?: StringNullableFilter<"StockItem"> | string | null
    purchases?: PurchaseLineListRelationFilter
    waste?: WasteLogListRelationFilter
  }

  export type StockItemOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    reorderLevel?: SortOrder
    categories?: SortOrder
    currentQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedById?: SortOrderInput | SortOrder
    purchases?: PurchaseLineOrderByRelationAggregateInput
    waste?: WasteLogOrderByRelationAggregateInput
  }

  export type StockItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_name?: StockItemTenantIdNameCompoundUniqueInput
    AND?: StockItemWhereInput | StockItemWhereInput[]
    OR?: StockItemWhereInput[]
    NOT?: StockItemWhereInput | StockItemWhereInput[]
    tenantId?: StringFilter<"StockItem"> | string
    name?: StringFilter<"StockItem"> | string
    unit?: EnumUnitFilter<"StockItem"> | $Enums.Unit
    reorderLevel?: DecimalFilter<"StockItem"> | Decimal | DecimalJsLike | number | string
    categories?: StringNullableListFilter<"StockItem">
    currentQuantity?: DecimalFilter<"StockItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"StockItem"> | Date | string
    updatedAt?: DateTimeFilter<"StockItem"> | Date | string
    deleted?: BoolFilter<"StockItem"> | boolean
    deletedAt?: DateTimeNullableFilter<"StockItem"> | Date | string | null
    deletedById?: StringNullableFilter<"StockItem"> | string | null
    purchases?: PurchaseLineListRelationFilter
    waste?: WasteLogListRelationFilter
  }, "id" | "tenantId_name">

  export type StockItemOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    reorderLevel?: SortOrder
    categories?: SortOrder
    currentQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedById?: SortOrderInput | SortOrder
    _count?: StockItemCountOrderByAggregateInput
    _avg?: StockItemAvgOrderByAggregateInput
    _max?: StockItemMaxOrderByAggregateInput
    _min?: StockItemMinOrderByAggregateInput
    _sum?: StockItemSumOrderByAggregateInput
  }

  export type StockItemScalarWhereWithAggregatesInput = {
    AND?: StockItemScalarWhereWithAggregatesInput | StockItemScalarWhereWithAggregatesInput[]
    OR?: StockItemScalarWhereWithAggregatesInput[]
    NOT?: StockItemScalarWhereWithAggregatesInput | StockItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockItem"> | string
    tenantId?: StringWithAggregatesFilter<"StockItem"> | string
    name?: StringWithAggregatesFilter<"StockItem"> | string
    unit?: EnumUnitWithAggregatesFilter<"StockItem"> | $Enums.Unit
    reorderLevel?: DecimalWithAggregatesFilter<"StockItem"> | Decimal | DecimalJsLike | number | string
    categories?: StringNullableListFilter<"StockItem">
    currentQuantity?: DecimalWithAggregatesFilter<"StockItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"StockItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StockItem"> | Date | string
    deleted?: BoolWithAggregatesFilter<"StockItem"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"StockItem"> | Date | string | null
    deletedById?: StringNullableWithAggregatesFilter<"StockItem"> | string | null
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: StringFilter<"Purchase"> | string
    tenantId?: StringFilter<"Purchase"> | string
    supplierName?: StringNullableFilter<"Purchase"> | string | null
    reference?: StringNullableFilter<"Purchase"> | string | null
    occurredAt?: DateTimeFilter<"Purchase"> | Date | string
    totalCost?: DecimalFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    lines?: PurchaseLineListRelationFilter
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    supplierName?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    occurredAt?: SortOrder
    totalCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lines?: PurchaseLineOrderByRelationAggregateInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    tenantId?: StringFilter<"Purchase"> | string
    supplierName?: StringNullableFilter<"Purchase"> | string | null
    reference?: StringNullableFilter<"Purchase"> | string | null
    occurredAt?: DateTimeFilter<"Purchase"> | Date | string
    totalCost?: DecimalFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    lines?: PurchaseLineListRelationFilter
  }, "id">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    supplierName?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    occurredAt?: SortOrder
    totalCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Purchase"> | string
    tenantId?: StringWithAggregatesFilter<"Purchase"> | string
    supplierName?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    reference?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    occurredAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    totalCost?: DecimalWithAggregatesFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
  }

  export type PurchaseLineWhereInput = {
    AND?: PurchaseLineWhereInput | PurchaseLineWhereInput[]
    OR?: PurchaseLineWhereInput[]
    NOT?: PurchaseLineWhereInput | PurchaseLineWhereInput[]
    id?: StringFilter<"PurchaseLine"> | string
    purchaseId?: StringFilter<"PurchaseLine"> | string
    stockItemId?: StringFilter<"PurchaseLine"> | string
    quantity?: DecimalFilter<"PurchaseLine"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFilter<"PurchaseLine"> | $Enums.Unit
    unitCost?: DecimalFilter<"PurchaseLine"> | Decimal | DecimalJsLike | number | string
    totalCost?: DecimalFilter<"PurchaseLine"> | Decimal | DecimalJsLike | number | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
    stockItem?: XOR<StockItemRelationFilter, StockItemWhereInput>
  }

  export type PurchaseLineOrderByWithRelationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    stockItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    unitCost?: SortOrder
    totalCost?: SortOrder
    purchase?: PurchaseOrderByWithRelationInput
    stockItem?: StockItemOrderByWithRelationInput
  }

  export type PurchaseLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseLineWhereInput | PurchaseLineWhereInput[]
    OR?: PurchaseLineWhereInput[]
    NOT?: PurchaseLineWhereInput | PurchaseLineWhereInput[]
    purchaseId?: StringFilter<"PurchaseLine"> | string
    stockItemId?: StringFilter<"PurchaseLine"> | string
    quantity?: DecimalFilter<"PurchaseLine"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFilter<"PurchaseLine"> | $Enums.Unit
    unitCost?: DecimalFilter<"PurchaseLine"> | Decimal | DecimalJsLike | number | string
    totalCost?: DecimalFilter<"PurchaseLine"> | Decimal | DecimalJsLike | number | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
    stockItem?: XOR<StockItemRelationFilter, StockItemWhereInput>
  }, "id">

  export type PurchaseLineOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    stockItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    unitCost?: SortOrder
    totalCost?: SortOrder
    _count?: PurchaseLineCountOrderByAggregateInput
    _avg?: PurchaseLineAvgOrderByAggregateInput
    _max?: PurchaseLineMaxOrderByAggregateInput
    _min?: PurchaseLineMinOrderByAggregateInput
    _sum?: PurchaseLineSumOrderByAggregateInput
  }

  export type PurchaseLineScalarWhereWithAggregatesInput = {
    AND?: PurchaseLineScalarWhereWithAggregatesInput | PurchaseLineScalarWhereWithAggregatesInput[]
    OR?: PurchaseLineScalarWhereWithAggregatesInput[]
    NOT?: PurchaseLineScalarWhereWithAggregatesInput | PurchaseLineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseLine"> | string
    purchaseId?: StringWithAggregatesFilter<"PurchaseLine"> | string
    stockItemId?: StringWithAggregatesFilter<"PurchaseLine"> | string
    quantity?: DecimalWithAggregatesFilter<"PurchaseLine"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitWithAggregatesFilter<"PurchaseLine"> | $Enums.Unit
    unitCost?: DecimalWithAggregatesFilter<"PurchaseLine"> | Decimal | DecimalJsLike | number | string
    totalCost?: DecimalWithAggregatesFilter<"PurchaseLine"> | Decimal | DecimalJsLike | number | string
  }

  export type WasteLogWhereInput = {
    AND?: WasteLogWhereInput | WasteLogWhereInput[]
    OR?: WasteLogWhereInput[]
    NOT?: WasteLogWhereInput | WasteLogWhereInput[]
    id?: StringFilter<"WasteLog"> | string
    tenantId?: StringFilter<"WasteLog"> | string
    stockItemId?: StringFilter<"WasteLog"> | string
    quantity?: DecimalFilter<"WasteLog"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFilter<"WasteLog"> | $Enums.Unit
    reason?: StringFilter<"WasteLog"> | string
    occurredAt?: DateTimeFilter<"WasteLog"> | Date | string
    stockItem?: XOR<StockItemRelationFilter, StockItemWhereInput>
  }

  export type WasteLogOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    stockItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    reason?: SortOrder
    occurredAt?: SortOrder
    stockItem?: StockItemOrderByWithRelationInput
  }

  export type WasteLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WasteLogWhereInput | WasteLogWhereInput[]
    OR?: WasteLogWhereInput[]
    NOT?: WasteLogWhereInput | WasteLogWhereInput[]
    tenantId?: StringFilter<"WasteLog"> | string
    stockItemId?: StringFilter<"WasteLog"> | string
    quantity?: DecimalFilter<"WasteLog"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFilter<"WasteLog"> | $Enums.Unit
    reason?: StringFilter<"WasteLog"> | string
    occurredAt?: DateTimeFilter<"WasteLog"> | Date | string
    stockItem?: XOR<StockItemRelationFilter, StockItemWhereInput>
  }, "id">

  export type WasteLogOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    stockItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    reason?: SortOrder
    occurredAt?: SortOrder
    _count?: WasteLogCountOrderByAggregateInput
    _avg?: WasteLogAvgOrderByAggregateInput
    _max?: WasteLogMaxOrderByAggregateInput
    _min?: WasteLogMinOrderByAggregateInput
    _sum?: WasteLogSumOrderByAggregateInput
  }

  export type WasteLogScalarWhereWithAggregatesInput = {
    AND?: WasteLogScalarWhereWithAggregatesInput | WasteLogScalarWhereWithAggregatesInput[]
    OR?: WasteLogScalarWhereWithAggregatesInput[]
    NOT?: WasteLogScalarWhereWithAggregatesInput | WasteLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WasteLog"> | string
    tenantId?: StringWithAggregatesFilter<"WasteLog"> | string
    stockItemId?: StringWithAggregatesFilter<"WasteLog"> | string
    quantity?: DecimalWithAggregatesFilter<"WasteLog"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitWithAggregatesFilter<"WasteLog"> | $Enums.Unit
    reason?: StringWithAggregatesFilter<"WasteLog"> | string
    occurredAt?: DateTimeWithAggregatesFilter<"WasteLog"> | Date | string
  }

  export type StockItemCreateInput = {
    id?: string
    tenantId: string
    name: string
    unit: $Enums.Unit
    reorderLevel?: Decimal | DecimalJsLike | number | string
    categories?: StockItemCreatecategoriesInput | string[]
    currentQuantity?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: boolean
    deletedAt?: Date | string | null
    deletedById?: string | null
    purchases?: PurchaseLineCreateNestedManyWithoutStockItemInput
    waste?: WasteLogCreateNestedManyWithoutStockItemInput
  }

  export type StockItemUncheckedCreateInput = {
    id?: string
    tenantId: string
    name: string
    unit: $Enums.Unit
    reorderLevel?: Decimal | DecimalJsLike | number | string
    categories?: StockItemCreatecategoriesInput | string[]
    currentQuantity?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: boolean
    deletedAt?: Date | string | null
    deletedById?: string | null
    purchases?: PurchaseLineUncheckedCreateNestedManyWithoutStockItemInput
    waste?: WasteLogUncheckedCreateNestedManyWithoutStockItemInput
  }

  export type StockItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reorderLevel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categories?: StockItemUpdatecategoriesInput | string[]
    currentQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchases?: PurchaseLineUpdateManyWithoutStockItemNestedInput
    waste?: WasteLogUpdateManyWithoutStockItemNestedInput
  }

  export type StockItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reorderLevel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categories?: StockItemUpdatecategoriesInput | string[]
    currentQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchases?: PurchaseLineUncheckedUpdateManyWithoutStockItemNestedInput
    waste?: WasteLogUncheckedUpdateManyWithoutStockItemNestedInput
  }

  export type StockItemCreateManyInput = {
    id?: string
    tenantId: string
    name: string
    unit: $Enums.Unit
    reorderLevel?: Decimal | DecimalJsLike | number | string
    categories?: StockItemCreatecategoriesInput | string[]
    currentQuantity?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: boolean
    deletedAt?: Date | string | null
    deletedById?: string | null
  }

  export type StockItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reorderLevel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categories?: StockItemUpdatecategoriesInput | string[]
    currentQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reorderLevel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categories?: StockItemUpdatecategoriesInput | string[]
    currentQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseCreateInput = {
    id?: string
    tenantId: string
    supplierName?: string | null
    reference?: string | null
    occurredAt?: Date | string
    totalCost?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: PurchaseLineCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: string
    tenantId: string
    supplierName?: string | null
    reference?: string | null
    occurredAt?: Date | string
    totalCost?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: PurchaseLineUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: PurchaseLineUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: PurchaseLineUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseCreateManyInput = {
    id?: string
    tenantId: string
    supplierName?: string | null
    reference?: string | null
    occurredAt?: Date | string
    totalCost?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseLineCreateInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    unitCost: Decimal | DecimalJsLike | number | string
    totalCost: Decimal | DecimalJsLike | number | string
    purchase: PurchaseCreateNestedOneWithoutLinesInput
    stockItem: StockItemCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseLineUncheckedCreateInput = {
    id?: string
    purchaseId: string
    stockItemId: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    unitCost: Decimal | DecimalJsLike | number | string
    totalCost: Decimal | DecimalJsLike | number | string
  }

  export type PurchaseLineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    unitCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase?: PurchaseUpdateOneRequiredWithoutLinesNestedInput
    stockItem?: StockItemUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseLineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    stockItemId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    unitCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchaseLineCreateManyInput = {
    id?: string
    purchaseId: string
    stockItemId: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    unitCost: Decimal | DecimalJsLike | number | string
    totalCost: Decimal | DecimalJsLike | number | string
  }

  export type PurchaseLineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    unitCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchaseLineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    stockItemId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    unitCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type WasteLogCreateInput = {
    id?: string
    tenantId: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    reason: string
    occurredAt?: Date | string
    stockItem: StockItemCreateNestedOneWithoutWasteInput
  }

  export type WasteLogUncheckedCreateInput = {
    id?: string
    tenantId: string
    stockItemId: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    reason: string
    occurredAt?: Date | string
  }

  export type WasteLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reason?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockItem?: StockItemUpdateOneRequiredWithoutWasteNestedInput
  }

  export type WasteLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    stockItemId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reason?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WasteLogCreateManyInput = {
    id?: string
    tenantId: string
    stockItemId: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    reason: string
    occurredAt?: Date | string
  }

  export type WasteLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reason?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WasteLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    stockItemId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reason?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitFilter<$PrismaModel> | $Enums.Unit
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PurchaseLineListRelationFilter = {
    every?: PurchaseLineWhereInput
    some?: PurchaseLineWhereInput
    none?: PurchaseLineWhereInput
  }

  export type WasteLogListRelationFilter = {
    every?: WasteLogWhereInput
    some?: WasteLogWhereInput
    none?: WasteLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PurchaseLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WasteLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockItemTenantIdNameCompoundUniqueInput = {
    tenantId: string
    name: string
  }

  export type StockItemCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    reorderLevel?: SortOrder
    categories?: SortOrder
    currentQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    deletedAt?: SortOrder
    deletedById?: SortOrder
  }

  export type StockItemAvgOrderByAggregateInput = {
    reorderLevel?: SortOrder
    currentQuantity?: SortOrder
  }

  export type StockItemMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    reorderLevel?: SortOrder
    currentQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    deletedAt?: SortOrder
    deletedById?: SortOrder
  }

  export type StockItemMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    reorderLevel?: SortOrder
    currentQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    deletedAt?: SortOrder
    deletedById?: SortOrder
  }

  export type StockItemSumOrderByAggregateInput = {
    reorderLevel?: SortOrder
    currentQuantity?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitWithAggregatesFilter<$PrismaModel> | $Enums.Unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitFilter<$PrismaModel>
    _max?: NestedEnumUnitFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    supplierName?: SortOrder
    reference?: SortOrder
    occurredAt?: SortOrder
    totalCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    totalCost?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    supplierName?: SortOrder
    reference?: SortOrder
    occurredAt?: SortOrder
    totalCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    supplierName?: SortOrder
    reference?: SortOrder
    occurredAt?: SortOrder
    totalCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    totalCost?: SortOrder
  }

  export type PurchaseRelationFilter = {
    is?: PurchaseWhereInput
    isNot?: PurchaseWhereInput
  }

  export type StockItemRelationFilter = {
    is?: StockItemWhereInput
    isNot?: StockItemWhereInput
  }

  export type PurchaseLineCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    stockItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    unitCost?: SortOrder
    totalCost?: SortOrder
  }

  export type PurchaseLineAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitCost?: SortOrder
    totalCost?: SortOrder
  }

  export type PurchaseLineMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    stockItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    unitCost?: SortOrder
    totalCost?: SortOrder
  }

  export type PurchaseLineMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    stockItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    unitCost?: SortOrder
    totalCost?: SortOrder
  }

  export type PurchaseLineSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitCost?: SortOrder
    totalCost?: SortOrder
  }

  export type WasteLogCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    stockItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    reason?: SortOrder
    occurredAt?: SortOrder
  }

  export type WasteLogAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type WasteLogMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    stockItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    reason?: SortOrder
    occurredAt?: SortOrder
  }

  export type WasteLogMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    stockItemId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    reason?: SortOrder
    occurredAt?: SortOrder
  }

  export type WasteLogSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StockItemCreatecategoriesInput = {
    set: string[]
  }

  export type PurchaseLineCreateNestedManyWithoutStockItemInput = {
    create?: XOR<PurchaseLineCreateWithoutStockItemInput, PurchaseLineUncheckedCreateWithoutStockItemInput> | PurchaseLineCreateWithoutStockItemInput[] | PurchaseLineUncheckedCreateWithoutStockItemInput[]
    connectOrCreate?: PurchaseLineCreateOrConnectWithoutStockItemInput | PurchaseLineCreateOrConnectWithoutStockItemInput[]
    createMany?: PurchaseLineCreateManyStockItemInputEnvelope
    connect?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
  }

  export type WasteLogCreateNestedManyWithoutStockItemInput = {
    create?: XOR<WasteLogCreateWithoutStockItemInput, WasteLogUncheckedCreateWithoutStockItemInput> | WasteLogCreateWithoutStockItemInput[] | WasteLogUncheckedCreateWithoutStockItemInput[]
    connectOrCreate?: WasteLogCreateOrConnectWithoutStockItemInput | WasteLogCreateOrConnectWithoutStockItemInput[]
    createMany?: WasteLogCreateManyStockItemInputEnvelope
    connect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
  }

  export type PurchaseLineUncheckedCreateNestedManyWithoutStockItemInput = {
    create?: XOR<PurchaseLineCreateWithoutStockItemInput, PurchaseLineUncheckedCreateWithoutStockItemInput> | PurchaseLineCreateWithoutStockItemInput[] | PurchaseLineUncheckedCreateWithoutStockItemInput[]
    connectOrCreate?: PurchaseLineCreateOrConnectWithoutStockItemInput | PurchaseLineCreateOrConnectWithoutStockItemInput[]
    createMany?: PurchaseLineCreateManyStockItemInputEnvelope
    connect?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
  }

  export type WasteLogUncheckedCreateNestedManyWithoutStockItemInput = {
    create?: XOR<WasteLogCreateWithoutStockItemInput, WasteLogUncheckedCreateWithoutStockItemInput> | WasteLogCreateWithoutStockItemInput[] | WasteLogUncheckedCreateWithoutStockItemInput[]
    connectOrCreate?: WasteLogCreateOrConnectWithoutStockItemInput | WasteLogCreateOrConnectWithoutStockItemInput[]
    createMany?: WasteLogCreateManyStockItemInputEnvelope
    connect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUnitFieldUpdateOperationsInput = {
    set?: $Enums.Unit
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type StockItemUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PurchaseLineUpdateManyWithoutStockItemNestedInput = {
    create?: XOR<PurchaseLineCreateWithoutStockItemInput, PurchaseLineUncheckedCreateWithoutStockItemInput> | PurchaseLineCreateWithoutStockItemInput[] | PurchaseLineUncheckedCreateWithoutStockItemInput[]
    connectOrCreate?: PurchaseLineCreateOrConnectWithoutStockItemInput | PurchaseLineCreateOrConnectWithoutStockItemInput[]
    upsert?: PurchaseLineUpsertWithWhereUniqueWithoutStockItemInput | PurchaseLineUpsertWithWhereUniqueWithoutStockItemInput[]
    createMany?: PurchaseLineCreateManyStockItemInputEnvelope
    set?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    disconnect?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    delete?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    connect?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    update?: PurchaseLineUpdateWithWhereUniqueWithoutStockItemInput | PurchaseLineUpdateWithWhereUniqueWithoutStockItemInput[]
    updateMany?: PurchaseLineUpdateManyWithWhereWithoutStockItemInput | PurchaseLineUpdateManyWithWhereWithoutStockItemInput[]
    deleteMany?: PurchaseLineScalarWhereInput | PurchaseLineScalarWhereInput[]
  }

  export type WasteLogUpdateManyWithoutStockItemNestedInput = {
    create?: XOR<WasteLogCreateWithoutStockItemInput, WasteLogUncheckedCreateWithoutStockItemInput> | WasteLogCreateWithoutStockItemInput[] | WasteLogUncheckedCreateWithoutStockItemInput[]
    connectOrCreate?: WasteLogCreateOrConnectWithoutStockItemInput | WasteLogCreateOrConnectWithoutStockItemInput[]
    upsert?: WasteLogUpsertWithWhereUniqueWithoutStockItemInput | WasteLogUpsertWithWhereUniqueWithoutStockItemInput[]
    createMany?: WasteLogCreateManyStockItemInputEnvelope
    set?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    disconnect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    delete?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    connect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    update?: WasteLogUpdateWithWhereUniqueWithoutStockItemInput | WasteLogUpdateWithWhereUniqueWithoutStockItemInput[]
    updateMany?: WasteLogUpdateManyWithWhereWithoutStockItemInput | WasteLogUpdateManyWithWhereWithoutStockItemInput[]
    deleteMany?: WasteLogScalarWhereInput | WasteLogScalarWhereInput[]
  }

  export type PurchaseLineUncheckedUpdateManyWithoutStockItemNestedInput = {
    create?: XOR<PurchaseLineCreateWithoutStockItemInput, PurchaseLineUncheckedCreateWithoutStockItemInput> | PurchaseLineCreateWithoutStockItemInput[] | PurchaseLineUncheckedCreateWithoutStockItemInput[]
    connectOrCreate?: PurchaseLineCreateOrConnectWithoutStockItemInput | PurchaseLineCreateOrConnectWithoutStockItemInput[]
    upsert?: PurchaseLineUpsertWithWhereUniqueWithoutStockItemInput | PurchaseLineUpsertWithWhereUniqueWithoutStockItemInput[]
    createMany?: PurchaseLineCreateManyStockItemInputEnvelope
    set?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    disconnect?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    delete?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    connect?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    update?: PurchaseLineUpdateWithWhereUniqueWithoutStockItemInput | PurchaseLineUpdateWithWhereUniqueWithoutStockItemInput[]
    updateMany?: PurchaseLineUpdateManyWithWhereWithoutStockItemInput | PurchaseLineUpdateManyWithWhereWithoutStockItemInput[]
    deleteMany?: PurchaseLineScalarWhereInput | PurchaseLineScalarWhereInput[]
  }

  export type WasteLogUncheckedUpdateManyWithoutStockItemNestedInput = {
    create?: XOR<WasteLogCreateWithoutStockItemInput, WasteLogUncheckedCreateWithoutStockItemInput> | WasteLogCreateWithoutStockItemInput[] | WasteLogUncheckedCreateWithoutStockItemInput[]
    connectOrCreate?: WasteLogCreateOrConnectWithoutStockItemInput | WasteLogCreateOrConnectWithoutStockItemInput[]
    upsert?: WasteLogUpsertWithWhereUniqueWithoutStockItemInput | WasteLogUpsertWithWhereUniqueWithoutStockItemInput[]
    createMany?: WasteLogCreateManyStockItemInputEnvelope
    set?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    disconnect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    delete?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    connect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    update?: WasteLogUpdateWithWhereUniqueWithoutStockItemInput | WasteLogUpdateWithWhereUniqueWithoutStockItemInput[]
    updateMany?: WasteLogUpdateManyWithWhereWithoutStockItemInput | WasteLogUpdateManyWithWhereWithoutStockItemInput[]
    deleteMany?: WasteLogScalarWhereInput | WasteLogScalarWhereInput[]
  }

  export type PurchaseLineCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseLineCreateWithoutPurchaseInput, PurchaseLineUncheckedCreateWithoutPurchaseInput> | PurchaseLineCreateWithoutPurchaseInput[] | PurchaseLineUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseLineCreateOrConnectWithoutPurchaseInput | PurchaseLineCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseLineCreateManyPurchaseInputEnvelope
    connect?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
  }

  export type PurchaseLineUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseLineCreateWithoutPurchaseInput, PurchaseLineUncheckedCreateWithoutPurchaseInput> | PurchaseLineCreateWithoutPurchaseInput[] | PurchaseLineUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseLineCreateOrConnectWithoutPurchaseInput | PurchaseLineCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseLineCreateManyPurchaseInputEnvelope
    connect?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
  }

  export type PurchaseLineUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseLineCreateWithoutPurchaseInput, PurchaseLineUncheckedCreateWithoutPurchaseInput> | PurchaseLineCreateWithoutPurchaseInput[] | PurchaseLineUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseLineCreateOrConnectWithoutPurchaseInput | PurchaseLineCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseLineUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseLineUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseLineCreateManyPurchaseInputEnvelope
    set?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    disconnect?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    delete?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    connect?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    update?: PurchaseLineUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseLineUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseLineUpdateManyWithWhereWithoutPurchaseInput | PurchaseLineUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseLineScalarWhereInput | PurchaseLineScalarWhereInput[]
  }

  export type PurchaseLineUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseLineCreateWithoutPurchaseInput, PurchaseLineUncheckedCreateWithoutPurchaseInput> | PurchaseLineCreateWithoutPurchaseInput[] | PurchaseLineUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseLineCreateOrConnectWithoutPurchaseInput | PurchaseLineCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseLineUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseLineUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseLineCreateManyPurchaseInputEnvelope
    set?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    disconnect?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    delete?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    connect?: PurchaseLineWhereUniqueInput | PurchaseLineWhereUniqueInput[]
    update?: PurchaseLineUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseLineUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseLineUpdateManyWithWhereWithoutPurchaseInput | PurchaseLineUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseLineScalarWhereInput | PurchaseLineScalarWhereInput[]
  }

  export type PurchaseCreateNestedOneWithoutLinesInput = {
    create?: XOR<PurchaseCreateWithoutLinesInput, PurchaseUncheckedCreateWithoutLinesInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutLinesInput
    connect?: PurchaseWhereUniqueInput
  }

  export type StockItemCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<StockItemCreateWithoutPurchasesInput, StockItemUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: StockItemCreateOrConnectWithoutPurchasesInput
    connect?: StockItemWhereUniqueInput
  }

  export type PurchaseUpdateOneRequiredWithoutLinesNestedInput = {
    create?: XOR<PurchaseCreateWithoutLinesInput, PurchaseUncheckedCreateWithoutLinesInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutLinesInput
    upsert?: PurchaseUpsertWithoutLinesInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutLinesInput, PurchaseUpdateWithoutLinesInput>, PurchaseUncheckedUpdateWithoutLinesInput>
  }

  export type StockItemUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<StockItemCreateWithoutPurchasesInput, StockItemUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: StockItemCreateOrConnectWithoutPurchasesInput
    upsert?: StockItemUpsertWithoutPurchasesInput
    connect?: StockItemWhereUniqueInput
    update?: XOR<XOR<StockItemUpdateToOneWithWhereWithoutPurchasesInput, StockItemUpdateWithoutPurchasesInput>, StockItemUncheckedUpdateWithoutPurchasesInput>
  }

  export type StockItemCreateNestedOneWithoutWasteInput = {
    create?: XOR<StockItemCreateWithoutWasteInput, StockItemUncheckedCreateWithoutWasteInput>
    connectOrCreate?: StockItemCreateOrConnectWithoutWasteInput
    connect?: StockItemWhereUniqueInput
  }

  export type StockItemUpdateOneRequiredWithoutWasteNestedInput = {
    create?: XOR<StockItemCreateWithoutWasteInput, StockItemUncheckedCreateWithoutWasteInput>
    connectOrCreate?: StockItemCreateOrConnectWithoutWasteInput
    upsert?: StockItemUpsertWithoutWasteInput
    connect?: StockItemWhereUniqueInput
    update?: XOR<XOR<StockItemUpdateToOneWithWhereWithoutWasteInput, StockItemUpdateWithoutWasteInput>, StockItemUncheckedUpdateWithoutWasteInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitFilter<$PrismaModel> | $Enums.Unit
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitWithAggregatesFilter<$PrismaModel> | $Enums.Unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitFilter<$PrismaModel>
    _max?: NestedEnumUnitFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PurchaseLineCreateWithoutStockItemInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    unitCost: Decimal | DecimalJsLike | number | string
    totalCost: Decimal | DecimalJsLike | number | string
    purchase: PurchaseCreateNestedOneWithoutLinesInput
  }

  export type PurchaseLineUncheckedCreateWithoutStockItemInput = {
    id?: string
    purchaseId: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    unitCost: Decimal | DecimalJsLike | number | string
    totalCost: Decimal | DecimalJsLike | number | string
  }

  export type PurchaseLineCreateOrConnectWithoutStockItemInput = {
    where: PurchaseLineWhereUniqueInput
    create: XOR<PurchaseLineCreateWithoutStockItemInput, PurchaseLineUncheckedCreateWithoutStockItemInput>
  }

  export type PurchaseLineCreateManyStockItemInputEnvelope = {
    data: PurchaseLineCreateManyStockItemInput | PurchaseLineCreateManyStockItemInput[]
    skipDuplicates?: boolean
  }

  export type WasteLogCreateWithoutStockItemInput = {
    id?: string
    tenantId: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    reason: string
    occurredAt?: Date | string
  }

  export type WasteLogUncheckedCreateWithoutStockItemInput = {
    id?: string
    tenantId: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    reason: string
    occurredAt?: Date | string
  }

  export type WasteLogCreateOrConnectWithoutStockItemInput = {
    where: WasteLogWhereUniqueInput
    create: XOR<WasteLogCreateWithoutStockItemInput, WasteLogUncheckedCreateWithoutStockItemInput>
  }

  export type WasteLogCreateManyStockItemInputEnvelope = {
    data: WasteLogCreateManyStockItemInput | WasteLogCreateManyStockItemInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseLineUpsertWithWhereUniqueWithoutStockItemInput = {
    where: PurchaseLineWhereUniqueInput
    update: XOR<PurchaseLineUpdateWithoutStockItemInput, PurchaseLineUncheckedUpdateWithoutStockItemInput>
    create: XOR<PurchaseLineCreateWithoutStockItemInput, PurchaseLineUncheckedCreateWithoutStockItemInput>
  }

  export type PurchaseLineUpdateWithWhereUniqueWithoutStockItemInput = {
    where: PurchaseLineWhereUniqueInput
    data: XOR<PurchaseLineUpdateWithoutStockItemInput, PurchaseLineUncheckedUpdateWithoutStockItemInput>
  }

  export type PurchaseLineUpdateManyWithWhereWithoutStockItemInput = {
    where: PurchaseLineScalarWhereInput
    data: XOR<PurchaseLineUpdateManyMutationInput, PurchaseLineUncheckedUpdateManyWithoutStockItemInput>
  }

  export type PurchaseLineScalarWhereInput = {
    AND?: PurchaseLineScalarWhereInput | PurchaseLineScalarWhereInput[]
    OR?: PurchaseLineScalarWhereInput[]
    NOT?: PurchaseLineScalarWhereInput | PurchaseLineScalarWhereInput[]
    id?: StringFilter<"PurchaseLine"> | string
    purchaseId?: StringFilter<"PurchaseLine"> | string
    stockItemId?: StringFilter<"PurchaseLine"> | string
    quantity?: DecimalFilter<"PurchaseLine"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFilter<"PurchaseLine"> | $Enums.Unit
    unitCost?: DecimalFilter<"PurchaseLine"> | Decimal | DecimalJsLike | number | string
    totalCost?: DecimalFilter<"PurchaseLine"> | Decimal | DecimalJsLike | number | string
  }

  export type WasteLogUpsertWithWhereUniqueWithoutStockItemInput = {
    where: WasteLogWhereUniqueInput
    update: XOR<WasteLogUpdateWithoutStockItemInput, WasteLogUncheckedUpdateWithoutStockItemInput>
    create: XOR<WasteLogCreateWithoutStockItemInput, WasteLogUncheckedCreateWithoutStockItemInput>
  }

  export type WasteLogUpdateWithWhereUniqueWithoutStockItemInput = {
    where: WasteLogWhereUniqueInput
    data: XOR<WasteLogUpdateWithoutStockItemInput, WasteLogUncheckedUpdateWithoutStockItemInput>
  }

  export type WasteLogUpdateManyWithWhereWithoutStockItemInput = {
    where: WasteLogScalarWhereInput
    data: XOR<WasteLogUpdateManyMutationInput, WasteLogUncheckedUpdateManyWithoutStockItemInput>
  }

  export type WasteLogScalarWhereInput = {
    AND?: WasteLogScalarWhereInput | WasteLogScalarWhereInput[]
    OR?: WasteLogScalarWhereInput[]
    NOT?: WasteLogScalarWhereInput | WasteLogScalarWhereInput[]
    id?: StringFilter<"WasteLog"> | string
    tenantId?: StringFilter<"WasteLog"> | string
    stockItemId?: StringFilter<"WasteLog"> | string
    quantity?: DecimalFilter<"WasteLog"> | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFilter<"WasteLog"> | $Enums.Unit
    reason?: StringFilter<"WasteLog"> | string
    occurredAt?: DateTimeFilter<"WasteLog"> | Date | string
  }

  export type PurchaseLineCreateWithoutPurchaseInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    unitCost: Decimal | DecimalJsLike | number | string
    totalCost: Decimal | DecimalJsLike | number | string
    stockItem: StockItemCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseLineUncheckedCreateWithoutPurchaseInput = {
    id?: string
    stockItemId: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    unitCost: Decimal | DecimalJsLike | number | string
    totalCost: Decimal | DecimalJsLike | number | string
  }

  export type PurchaseLineCreateOrConnectWithoutPurchaseInput = {
    where: PurchaseLineWhereUniqueInput
    create: XOR<PurchaseLineCreateWithoutPurchaseInput, PurchaseLineUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseLineCreateManyPurchaseInputEnvelope = {
    data: PurchaseLineCreateManyPurchaseInput | PurchaseLineCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseLineUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseLineWhereUniqueInput
    update: XOR<PurchaseLineUpdateWithoutPurchaseInput, PurchaseLineUncheckedUpdateWithoutPurchaseInput>
    create: XOR<PurchaseLineCreateWithoutPurchaseInput, PurchaseLineUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseLineUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseLineWhereUniqueInput
    data: XOR<PurchaseLineUpdateWithoutPurchaseInput, PurchaseLineUncheckedUpdateWithoutPurchaseInput>
  }

  export type PurchaseLineUpdateManyWithWhereWithoutPurchaseInput = {
    where: PurchaseLineScalarWhereInput
    data: XOR<PurchaseLineUpdateManyMutationInput, PurchaseLineUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type PurchaseCreateWithoutLinesInput = {
    id?: string
    tenantId: string
    supplierName?: string | null
    reference?: string | null
    occurredAt?: Date | string
    totalCost?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseUncheckedCreateWithoutLinesInput = {
    id?: string
    tenantId: string
    supplierName?: string | null
    reference?: string | null
    occurredAt?: Date | string
    totalCost?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutLinesInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutLinesInput, PurchaseUncheckedCreateWithoutLinesInput>
  }

  export type StockItemCreateWithoutPurchasesInput = {
    id?: string
    tenantId: string
    name: string
    unit: $Enums.Unit
    reorderLevel?: Decimal | DecimalJsLike | number | string
    categories?: StockItemCreatecategoriesInput | string[]
    currentQuantity?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: boolean
    deletedAt?: Date | string | null
    deletedById?: string | null
    waste?: WasteLogCreateNestedManyWithoutStockItemInput
  }

  export type StockItemUncheckedCreateWithoutPurchasesInput = {
    id?: string
    tenantId: string
    name: string
    unit: $Enums.Unit
    reorderLevel?: Decimal | DecimalJsLike | number | string
    categories?: StockItemCreatecategoriesInput | string[]
    currentQuantity?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: boolean
    deletedAt?: Date | string | null
    deletedById?: string | null
    waste?: WasteLogUncheckedCreateNestedManyWithoutStockItemInput
  }

  export type StockItemCreateOrConnectWithoutPurchasesInput = {
    where: StockItemWhereUniqueInput
    create: XOR<StockItemCreateWithoutPurchasesInput, StockItemUncheckedCreateWithoutPurchasesInput>
  }

  export type PurchaseUpsertWithoutLinesInput = {
    update: XOR<PurchaseUpdateWithoutLinesInput, PurchaseUncheckedUpdateWithoutLinesInput>
    create: XOR<PurchaseCreateWithoutLinesInput, PurchaseUncheckedCreateWithoutLinesInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutLinesInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutLinesInput, PurchaseUncheckedUpdateWithoutLinesInput>
  }

  export type PurchaseUpdateWithoutLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateWithoutLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockItemUpsertWithoutPurchasesInput = {
    update: XOR<StockItemUpdateWithoutPurchasesInput, StockItemUncheckedUpdateWithoutPurchasesInput>
    create: XOR<StockItemCreateWithoutPurchasesInput, StockItemUncheckedCreateWithoutPurchasesInput>
    where?: StockItemWhereInput
  }

  export type StockItemUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: StockItemWhereInput
    data: XOR<StockItemUpdateWithoutPurchasesInput, StockItemUncheckedUpdateWithoutPurchasesInput>
  }

  export type StockItemUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reorderLevel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categories?: StockItemUpdatecategoriesInput | string[]
    currentQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    waste?: WasteLogUpdateManyWithoutStockItemNestedInput
  }

  export type StockItemUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reorderLevel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categories?: StockItemUpdatecategoriesInput | string[]
    currentQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    waste?: WasteLogUncheckedUpdateManyWithoutStockItemNestedInput
  }

  export type StockItemCreateWithoutWasteInput = {
    id?: string
    tenantId: string
    name: string
    unit: $Enums.Unit
    reorderLevel?: Decimal | DecimalJsLike | number | string
    categories?: StockItemCreatecategoriesInput | string[]
    currentQuantity?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: boolean
    deletedAt?: Date | string | null
    deletedById?: string | null
    purchases?: PurchaseLineCreateNestedManyWithoutStockItemInput
  }

  export type StockItemUncheckedCreateWithoutWasteInput = {
    id?: string
    tenantId: string
    name: string
    unit: $Enums.Unit
    reorderLevel?: Decimal | DecimalJsLike | number | string
    categories?: StockItemCreatecategoriesInput | string[]
    currentQuantity?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: boolean
    deletedAt?: Date | string | null
    deletedById?: string | null
    purchases?: PurchaseLineUncheckedCreateNestedManyWithoutStockItemInput
  }

  export type StockItemCreateOrConnectWithoutWasteInput = {
    where: StockItemWhereUniqueInput
    create: XOR<StockItemCreateWithoutWasteInput, StockItemUncheckedCreateWithoutWasteInput>
  }

  export type StockItemUpsertWithoutWasteInput = {
    update: XOR<StockItemUpdateWithoutWasteInput, StockItemUncheckedUpdateWithoutWasteInput>
    create: XOR<StockItemCreateWithoutWasteInput, StockItemUncheckedCreateWithoutWasteInput>
    where?: StockItemWhereInput
  }

  export type StockItemUpdateToOneWithWhereWithoutWasteInput = {
    where?: StockItemWhereInput
    data: XOR<StockItemUpdateWithoutWasteInput, StockItemUncheckedUpdateWithoutWasteInput>
  }

  export type StockItemUpdateWithoutWasteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reorderLevel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categories?: StockItemUpdatecategoriesInput | string[]
    currentQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchases?: PurchaseLineUpdateManyWithoutStockItemNestedInput
  }

  export type StockItemUncheckedUpdateWithoutWasteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reorderLevel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categories?: StockItemUpdatecategoriesInput | string[]
    currentQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchases?: PurchaseLineUncheckedUpdateManyWithoutStockItemNestedInput
  }

  export type PurchaseLineCreateManyStockItemInput = {
    id?: string
    purchaseId: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    unitCost: Decimal | DecimalJsLike | number | string
    totalCost: Decimal | DecimalJsLike | number | string
  }

  export type WasteLogCreateManyStockItemInput = {
    id?: string
    tenantId: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    reason: string
    occurredAt?: Date | string
  }

  export type PurchaseLineUpdateWithoutStockItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    unitCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase?: PurchaseUpdateOneRequiredWithoutLinesNestedInput
  }

  export type PurchaseLineUncheckedUpdateWithoutStockItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    unitCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchaseLineUncheckedUpdateManyWithoutStockItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    unitCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type WasteLogUpdateWithoutStockItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reason?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WasteLogUncheckedUpdateWithoutStockItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reason?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WasteLogUncheckedUpdateManyWithoutStockItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    reason?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseLineCreateManyPurchaseInput = {
    id?: string
    stockItemId: string
    quantity: Decimal | DecimalJsLike | number | string
    unit: $Enums.Unit
    unitCost: Decimal | DecimalJsLike | number | string
    totalCost: Decimal | DecimalJsLike | number | string
  }

  export type PurchaseLineUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    unitCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockItem?: StockItemUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseLineUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockItemId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    unitCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchaseLineUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockItemId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    unitCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StockItemCountOutputTypeDefaultArgs instead
     */
    export type StockItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseCountOutputTypeDefaultArgs instead
     */
    export type PurchaseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockItemDefaultArgs instead
     */
    export type StockItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseDefaultArgs instead
     */
    export type PurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseLineDefaultArgs instead
     */
    export type PurchaseLineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseLineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WasteLogDefaultArgs instead
     */
    export type WasteLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WasteLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}