
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
 * Model organization
 * 
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model district
 * 
 */
export type district = $Result.DefaultSelection<Prisma.$districtPayload>
/**
 * Model province
 * 
 */
export type province = $Result.DefaultSelection<Prisma.$provincePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
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
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
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
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs>;

  /**
   * `prisma.district`: Exposes CRUD operations for the **district** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Districts
    * const districts = await prisma.district.findMany()
    * ```
    */
  get district(): Prisma.districtDelegate<ExtArgs>;

  /**
   * `prisma.province`: Exposes CRUD operations for the **province** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.province.findMany()
    * ```
    */
  get province(): Prisma.provinceDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    organization: 'organization',
    category: 'category',
    district: 'district',
    province: 'province'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    org_db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "organization" | "category" | "district" | "province"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>
        fields: Prisma.organizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[]
          }
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.organizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[]
          }
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      district: {
        payload: Prisma.$districtPayload<ExtArgs>
        fields: Prisma.districtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.districtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.districtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>
          }
          findFirst: {
            args: Prisma.districtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.districtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>
          }
          findMany: {
            args: Prisma.districtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>[]
          }
          create: {
            args: Prisma.districtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>
          }
          createMany: {
            args: Prisma.districtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.districtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>[]
          }
          delete: {
            args: Prisma.districtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>
          }
          update: {
            args: Prisma.districtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>
          }
          deleteMany: {
            args: Prisma.districtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.districtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.districtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>
          }
          aggregate: {
            args: Prisma.DistrictAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistrict>
          }
          groupBy: {
            args: Prisma.districtGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistrictGroupByOutputType>[]
          }
          count: {
            args: Prisma.districtCountArgs<ExtArgs>
            result: $Utils.Optional<DistrictCountAggregateOutputType> | number
          }
        }
      }
      province: {
        payload: Prisma.$provincePayload<ExtArgs>
        fields: Prisma.provinceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.provinceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.provinceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          findFirst: {
            args: Prisma.provinceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.provinceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          findMany: {
            args: Prisma.provinceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>[]
          }
          create: {
            args: Prisma.provinceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          createMany: {
            args: Prisma.provinceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.provinceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>[]
          }
          delete: {
            args: Prisma.provinceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          update: {
            args: Prisma.provinceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          deleteMany: {
            args: Prisma.provinceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.provinceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.provinceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          aggregate: {
            args: Prisma.ProvinceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvince>
          }
          groupBy: {
            args: Prisma.provinceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvinceGroupByOutputType>[]
          }
          count: {
            args: Prisma.provinceCountArgs<ExtArgs>
            result: $Utils.Optional<ProvinceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    organizations: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizations?: boolean | CategoryCountOutputTypeCountOrganizationsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput
  }


  /**
   * Count Type DistrictCountOutputType
   */

  export type DistrictCountOutputType = {
    organizations: number
  }

  export type DistrictCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizations?: boolean | DistrictCountOutputTypeCountOrganizationsArgs
  }

  // Custom InputTypes
  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictCountOutputType
     */
    select?: DistrictCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeCountOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput
  }


  /**
   * Count Type ProvinceCountOutputType
   */

  export type ProvinceCountOutputType = {
    districts: number
  }

  export type ProvinceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    districts?: boolean | ProvinceCountOutputTypeCountDistrictsArgs
  }

  // Custom InputTypes
  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvinceCountOutputType
     */
    select?: ProvinceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountDistrictsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: districtWhereInput
  }


  /**
   * Models
   */

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    district_id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    district_id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    short_code: string | null
    name_en: string | null
    name_sin: string | null
    name_tm: string | null
    address: string | null
    email: string | null
    contact: string | null
    category_id: number | null
    district_id: number | null
    description: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    short_code: string | null
    name_en: string | null
    name_sin: string | null
    name_tm: string | null
    address: string | null
    email: string | null
    contact: string | null
    category_id: number | null
    district_id: number | null
    description: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    short_code: number
    name_en: number
    name_sin: number
    name_tm: number
    address: number
    email: number
    contact: number
    category_id: number
    district_id: number
    description: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
    category_id?: true
    district_id?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
    category_id?: true
    district_id?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    short_code?: true
    name_en?: true
    name_sin?: true
    name_tm?: true
    address?: true
    email?: true
    contact?: true
    category_id?: true
    district_id?: true
    description?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    short_code?: true
    name_en?: true
    name_sin?: true
    name_tm?: true
    address?: true
    email?: true
    contact?: true
    category_id?: true
    district_id?: true
    description?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    short_code?: true
    name_en?: true
    name_sin?: true
    name_tm?: true
    address?: true
    email?: true
    contact?: true
    category_id?: true
    district_id?: true
    description?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: organizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    short_code: string | null
    name_en: string
    name_sin: string | null
    name_tm: string | null
    address: string | null
    email: string | null
    contact: string | null
    category_id: number | null
    district_id: number | null
    description: string | null
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    short_code?: boolean
    name_en?: boolean
    name_sin?: boolean
    name_tm?: boolean
    address?: boolean
    email?: boolean
    contact?: boolean
    category_id?: boolean
    district_id?: boolean
    description?: boolean
    category?: boolean | organization$categoryArgs<ExtArgs>
    district?: boolean | organization$districtArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type organizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    short_code?: boolean
    name_en?: boolean
    name_sin?: boolean
    name_tm?: boolean
    address?: boolean
    email?: boolean
    contact?: boolean
    category_id?: boolean
    district_id?: boolean
    description?: boolean
    category?: boolean | organization$categoryArgs<ExtArgs>
    district?: boolean | organization$districtArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type organizationSelectScalar = {
    id?: boolean
    short_code?: boolean
    name_en?: boolean
    name_sin?: boolean
    name_tm?: boolean
    address?: boolean
    email?: boolean
    contact?: boolean
    category_id?: boolean
    district_id?: boolean
    description?: boolean
  }

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | organization$categoryArgs<ExtArgs>
    district?: boolean | organization$districtArgs<ExtArgs>
  }
  export type organizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | organization$categoryArgs<ExtArgs>
    district?: boolean | organization$districtArgs<ExtArgs>
  }

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organization"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs> | null
      district: Prisma.$districtPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      short_code: string | null
      name_en: string
      name_sin: string | null
      name_tm: string | null
      address: string | null
      email: string | null
      contact: string | null
      category_id: number | null
      district_id: number | null
      description: string | null
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<Prisma.$organizationPayload, S>

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<organizationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization'], meta: { name: 'organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organizationFindUniqueArgs>(args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs>(args: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organizationFindFirstArgs>(args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs>(args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends organizationFindManyArgs>(args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends organizationCreateArgs>(args: SelectSubset<T, organizationCreateArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organizations.
     * @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organizationCreateManyArgs>(args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {organizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends organizationCreateManyAndReturnArgs>(args?: SelectSubset<T, organizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends organizationDeleteArgs>(args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organizationUpdateArgs>(args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organizationDeleteManyArgs>(args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organizationUpdateManyArgs>(args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends organizationUpsertArgs>(args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
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
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organization model
   */
  readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends organization$categoryArgs<ExtArgs> = {}>(args?: Subset<T, organization$categoryArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    district<T extends organization$districtArgs<ExtArgs> = {}>(args?: Subset<T, organization$districtArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the organization model
   */ 
  interface organizationFieldRefs {
    readonly id: FieldRef<"organization", 'Int'>
    readonly short_code: FieldRef<"organization", 'String'>
    readonly name_en: FieldRef<"organization", 'String'>
    readonly name_sin: FieldRef<"organization", 'String'>
    readonly name_tm: FieldRef<"organization", 'String'>
    readonly address: FieldRef<"organization", 'String'>
    readonly email: FieldRef<"organization", 'String'>
    readonly contact: FieldRef<"organization", 'String'>
    readonly category_id: FieldRef<"organization", 'Int'>
    readonly district_id: FieldRef<"organization", 'Int'>
    readonly description: FieldRef<"organization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>
  }

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organization createManyAndReturn
   */
  export type organizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput
  }

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>
  }

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput
  }

  /**
   * organization.category
   */
  export type organization$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
  }

  /**
   * organization.district
   */
  export type organization$districtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    where?: districtWhereInput
  }

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    short_code: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    short_code: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    short_code: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    short_code?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    short_code?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    short_code?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    short_code: string | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    short_code?: boolean
    organizations?: boolean | category$organizationsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    short_code?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    short_code?: boolean
  }

  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizations?: boolean | category$organizationsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      organizations: Prisma.$organizationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      short_code: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
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
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizations<T extends category$organizationsArgs<ExtArgs> = {}>(args?: Subset<T, category$organizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the category model
   */ 
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
    readonly description: FieldRef<"category", 'String'>
    readonly short_code: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
  }

  /**
   * category.organizations
   */
  export type category$organizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    where?: organizationWhereInput
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    cursor?: organizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model district
   */

  export type AggregateDistrict = {
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  export type DistrictAvgAggregateOutputType = {
    id: number | null
    province_id: number | null
  }

  export type DistrictSumAggregateOutputType = {
    id: number | null
    province_id: number | null
  }

  export type DistrictMinAggregateOutputType = {
    id: number | null
    name: string | null
    province_id: number | null
  }

  export type DistrictMaxAggregateOutputType = {
    id: number | null
    name: string | null
    province_id: number | null
  }

  export type DistrictCountAggregateOutputType = {
    id: number
    name: number
    province_id: number
    _all: number
  }


  export type DistrictAvgAggregateInputType = {
    id?: true
    province_id?: true
  }

  export type DistrictSumAggregateInputType = {
    id?: true
    province_id?: true
  }

  export type DistrictMinAggregateInputType = {
    id?: true
    name?: true
    province_id?: true
  }

  export type DistrictMaxAggregateInputType = {
    id?: true
    name?: true
    province_id?: true
  }

  export type DistrictCountAggregateInputType = {
    id?: true
    name?: true
    province_id?: true
    _all?: true
  }

  export type DistrictAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which district to aggregate.
     */
    where?: districtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of districts to fetch.
     */
    orderBy?: districtOrderByWithRelationInput | districtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: districtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned districts
    **/
    _count?: true | DistrictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistrictAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistrictSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistrictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistrictMaxAggregateInputType
  }

  export type GetDistrictAggregateType<T extends DistrictAggregateArgs> = {
        [P in keyof T & keyof AggregateDistrict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistrict[P]>
      : GetScalarType<T[P], AggregateDistrict[P]>
  }




  export type districtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: districtWhereInput
    orderBy?: districtOrderByWithAggregationInput | districtOrderByWithAggregationInput[]
    by: DistrictScalarFieldEnum[] | DistrictScalarFieldEnum
    having?: districtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistrictCountAggregateInputType | true
    _avg?: DistrictAvgAggregateInputType
    _sum?: DistrictSumAggregateInputType
    _min?: DistrictMinAggregateInputType
    _max?: DistrictMaxAggregateInputType
  }

  export type DistrictGroupByOutputType = {
    id: number
    name: string
    province_id: number
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  type GetDistrictGroupByPayload<T extends districtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistrictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistrictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistrictGroupByOutputType[P]>
            : GetScalarType<T[P], DistrictGroupByOutputType[P]>
        }
      >
    >


  export type districtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    province_id?: boolean
    province?: boolean | provinceDefaultArgs<ExtArgs>
    organizations?: boolean | district$organizationsArgs<ExtArgs>
    _count?: boolean | DistrictCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["district"]>

  export type districtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    province_id?: boolean
    province?: boolean | provinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["district"]>

  export type districtSelectScalar = {
    id?: boolean
    name?: boolean
    province_id?: boolean
  }

  export type districtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | provinceDefaultArgs<ExtArgs>
    organizations?: boolean | district$organizationsArgs<ExtArgs>
    _count?: boolean | DistrictCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type districtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | provinceDefaultArgs<ExtArgs>
  }

  export type $districtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "district"
    objects: {
      province: Prisma.$provincePayload<ExtArgs>
      organizations: Prisma.$organizationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      province_id: number
    }, ExtArgs["result"]["district"]>
    composites: {}
  }

  type districtGetPayload<S extends boolean | null | undefined | districtDefaultArgs> = $Result.GetResult<Prisma.$districtPayload, S>

  type districtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<districtFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DistrictCountAggregateInputType | true
    }

  export interface districtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['district'], meta: { name: 'district' } }
    /**
     * Find zero or one District that matches the filter.
     * @param {districtFindUniqueArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends districtFindUniqueArgs>(args: SelectSubset<T, districtFindUniqueArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one District that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {districtFindUniqueOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends districtFindUniqueOrThrowArgs>(args: SelectSubset<T, districtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first District that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {districtFindFirstArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends districtFindFirstArgs>(args?: SelectSubset<T, districtFindFirstArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first District that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {districtFindFirstOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends districtFindFirstOrThrowArgs>(args?: SelectSubset<T, districtFindFirstOrThrowArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Districts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {districtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Districts
     * const districts = await prisma.district.findMany()
     * 
     * // Get first 10 Districts
     * const districts = await prisma.district.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const districtWithIdOnly = await prisma.district.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends districtFindManyArgs>(args?: SelectSubset<T, districtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a District.
     * @param {districtCreateArgs} args - Arguments to create a District.
     * @example
     * // Create one District
     * const District = await prisma.district.create({
     *   data: {
     *     // ... data to create a District
     *   }
     * })
     * 
     */
    create<T extends districtCreateArgs>(args: SelectSubset<T, districtCreateArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Districts.
     * @param {districtCreateManyArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends districtCreateManyArgs>(args?: SelectSubset<T, districtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Districts and returns the data saved in the database.
     * @param {districtCreateManyAndReturnArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Districts and only return the `id`
     * const districtWithIdOnly = await prisma.district.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends districtCreateManyAndReturnArgs>(args?: SelectSubset<T, districtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a District.
     * @param {districtDeleteArgs} args - Arguments to delete one District.
     * @example
     * // Delete one District
     * const District = await prisma.district.delete({
     *   where: {
     *     // ... filter to delete one District
     *   }
     * })
     * 
     */
    delete<T extends districtDeleteArgs>(args: SelectSubset<T, districtDeleteArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one District.
     * @param {districtUpdateArgs} args - Arguments to update one District.
     * @example
     * // Update one District
     * const district = await prisma.district.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends districtUpdateArgs>(args: SelectSubset<T, districtUpdateArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Districts.
     * @param {districtDeleteManyArgs} args - Arguments to filter Districts to delete.
     * @example
     * // Delete a few Districts
     * const { count } = await prisma.district.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends districtDeleteManyArgs>(args?: SelectSubset<T, districtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {districtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends districtUpdateManyArgs>(args: SelectSubset<T, districtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one District.
     * @param {districtUpsertArgs} args - Arguments to update or create a District.
     * @example
     * // Update or create a District
     * const district = await prisma.district.upsert({
     *   create: {
     *     // ... data to create a District
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the District we want to update
     *   }
     * })
     */
    upsert<T extends districtUpsertArgs>(args: SelectSubset<T, districtUpsertArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {districtCountArgs} args - Arguments to filter Districts to count.
     * @example
     * // Count the number of Districts
     * const count = await prisma.district.count({
     *   where: {
     *     // ... the filter for the Districts we want to count
     *   }
     * })
    **/
    count<T extends districtCountArgs>(
      args?: Subset<T, districtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistrictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistrictAggregateArgs>(args: Subset<T, DistrictAggregateArgs>): Prisma.PrismaPromise<GetDistrictAggregateType<T>>

    /**
     * Group by District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {districtGroupByArgs} args - Group by arguments.
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
      T extends districtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: districtGroupByArgs['orderBy'] }
        : { orderBy?: districtGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, districtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistrictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the district model
   */
  readonly fields: districtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for district.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__districtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    province<T extends provinceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, provinceDefaultArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    organizations<T extends district$organizationsArgs<ExtArgs> = {}>(args?: Subset<T, district$organizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the district model
   */ 
  interface districtFieldRefs {
    readonly id: FieldRef<"district", 'Int'>
    readonly name: FieldRef<"district", 'String'>
    readonly province_id: FieldRef<"district", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * district findUnique
   */
  export type districtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * Filter, which district to fetch.
     */
    where: districtWhereUniqueInput
  }

  /**
   * district findUniqueOrThrow
   */
  export type districtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * Filter, which district to fetch.
     */
    where: districtWhereUniqueInput
  }

  /**
   * district findFirst
   */
  export type districtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * Filter, which district to fetch.
     */
    where?: districtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of districts to fetch.
     */
    orderBy?: districtOrderByWithRelationInput | districtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for districts.
     */
    cursor?: districtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * district findFirstOrThrow
   */
  export type districtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * Filter, which district to fetch.
     */
    where?: districtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of districts to fetch.
     */
    orderBy?: districtOrderByWithRelationInput | districtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for districts.
     */
    cursor?: districtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * district findMany
   */
  export type districtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * Filter, which districts to fetch.
     */
    where?: districtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of districts to fetch.
     */
    orderBy?: districtOrderByWithRelationInput | districtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing districts.
     */
    cursor?: districtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` districts.
     */
    skip?: number
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * district create
   */
  export type districtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * The data needed to create a district.
     */
    data: XOR<districtCreateInput, districtUncheckedCreateInput>
  }

  /**
   * district createMany
   */
  export type districtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many districts.
     */
    data: districtCreateManyInput | districtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * district createManyAndReturn
   */
  export type districtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many districts.
     */
    data: districtCreateManyInput | districtCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * district update
   */
  export type districtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * The data needed to update a district.
     */
    data: XOR<districtUpdateInput, districtUncheckedUpdateInput>
    /**
     * Choose, which district to update.
     */
    where: districtWhereUniqueInput
  }

  /**
   * district updateMany
   */
  export type districtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update districts.
     */
    data: XOR<districtUpdateManyMutationInput, districtUncheckedUpdateManyInput>
    /**
     * Filter which districts to update
     */
    where?: districtWhereInput
  }

  /**
   * district upsert
   */
  export type districtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * The filter to search for the district to update in case it exists.
     */
    where: districtWhereUniqueInput
    /**
     * In case the district found by the `where` argument doesn't exist, create a new district with this data.
     */
    create: XOR<districtCreateInput, districtUncheckedCreateInput>
    /**
     * In case the district was found with the provided `where` argument, update it with this data.
     */
    update: XOR<districtUpdateInput, districtUncheckedUpdateInput>
  }

  /**
   * district delete
   */
  export type districtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * Filter which district to delete.
     */
    where: districtWhereUniqueInput
  }

  /**
   * district deleteMany
   */
  export type districtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which districts to delete
     */
    where?: districtWhereInput
  }

  /**
   * district.organizations
   */
  export type district$organizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    where?: organizationWhereInput
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    cursor?: organizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * district without action
   */
  export type districtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
  }


  /**
   * Model province
   */

  export type AggregateProvince = {
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  export type ProvinceAvgAggregateOutputType = {
    id: number | null
  }

  export type ProvinceSumAggregateOutputType = {
    id: number | null
  }

  export type ProvinceMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ProvinceMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ProvinceCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProvinceAvgAggregateInputType = {
    id?: true
  }

  export type ProvinceSumAggregateInputType = {
    id?: true
  }

  export type ProvinceMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProvinceMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProvinceCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProvinceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which province to aggregate.
     */
    where?: provinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provinceOrderByWithRelationInput | provinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: provinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned provinces
    **/
    _count?: true | ProvinceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvinceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvinceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinceMaxAggregateInputType
  }

  export type GetProvinceAggregateType<T extends ProvinceAggregateArgs> = {
        [P in keyof T & keyof AggregateProvince]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvince[P]>
      : GetScalarType<T[P], AggregateProvince[P]>
  }




  export type provinceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: provinceWhereInput
    orderBy?: provinceOrderByWithAggregationInput | provinceOrderByWithAggregationInput[]
    by: ProvinceScalarFieldEnum[] | ProvinceScalarFieldEnum
    having?: provinceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinceCountAggregateInputType | true
    _avg?: ProvinceAvgAggregateInputType
    _sum?: ProvinceSumAggregateInputType
    _min?: ProvinceMinAggregateInputType
    _max?: ProvinceMaxAggregateInputType
  }

  export type ProvinceGroupByOutputType = {
    id: number
    name: string
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  type GetProvinceGroupByPayload<T extends provinceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvinceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
        }
      >
    >


  export type provinceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    districts?: boolean | province$districtsArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["province"]>

  export type provinceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["province"]>

  export type provinceSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type provinceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    districts?: boolean | province$districtsArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type provinceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $provincePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "province"
    objects: {
      districts: Prisma.$districtPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["province"]>
    composites: {}
  }

  type provinceGetPayload<S extends boolean | null | undefined | provinceDefaultArgs> = $Result.GetResult<Prisma.$provincePayload, S>

  type provinceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<provinceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProvinceCountAggregateInputType | true
    }

  export interface provinceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['province'], meta: { name: 'province' } }
    /**
     * Find zero or one Province that matches the filter.
     * @param {provinceFindUniqueArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends provinceFindUniqueArgs>(args: SelectSubset<T, provinceFindUniqueArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Province that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {provinceFindUniqueOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends provinceFindUniqueOrThrowArgs>(args: SelectSubset<T, provinceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Province that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceFindFirstArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends provinceFindFirstArgs>(args?: SelectSubset<T, provinceFindFirstArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Province that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceFindFirstOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends provinceFindFirstOrThrowArgs>(args?: SelectSubset<T, provinceFindFirstOrThrowArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.province.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.province.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinceWithIdOnly = await prisma.province.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends provinceFindManyArgs>(args?: SelectSubset<T, provinceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Province.
     * @param {provinceCreateArgs} args - Arguments to create a Province.
     * @example
     * // Create one Province
     * const Province = await prisma.province.create({
     *   data: {
     *     // ... data to create a Province
     *   }
     * })
     * 
     */
    create<T extends provinceCreateArgs>(args: SelectSubset<T, provinceCreateArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Provinces.
     * @param {provinceCreateManyArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends provinceCreateManyArgs>(args?: SelectSubset<T, provinceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Provinces and returns the data saved in the database.
     * @param {provinceCreateManyAndReturnArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Provinces and only return the `id`
     * const provinceWithIdOnly = await prisma.province.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends provinceCreateManyAndReturnArgs>(args?: SelectSubset<T, provinceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Province.
     * @param {provinceDeleteArgs} args - Arguments to delete one Province.
     * @example
     * // Delete one Province
     * const Province = await prisma.province.delete({
     *   where: {
     *     // ... filter to delete one Province
     *   }
     * })
     * 
     */
    delete<T extends provinceDeleteArgs>(args: SelectSubset<T, provinceDeleteArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Province.
     * @param {provinceUpdateArgs} args - Arguments to update one Province.
     * @example
     * // Update one Province
     * const province = await prisma.province.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends provinceUpdateArgs>(args: SelectSubset<T, provinceUpdateArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Provinces.
     * @param {provinceDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.province.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends provinceDeleteManyArgs>(args?: SelectSubset<T, provinceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends provinceUpdateManyArgs>(args: SelectSubset<T, provinceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Province.
     * @param {provinceUpsertArgs} args - Arguments to update or create a Province.
     * @example
     * // Update or create a Province
     * const province = await prisma.province.upsert({
     *   create: {
     *     // ... data to create a Province
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Province we want to update
     *   }
     * })
     */
    upsert<T extends provinceUpsertArgs>(args: SelectSubset<T, provinceUpsertArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.province.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends provinceCountArgs>(
      args?: Subset<T, provinceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProvinceAggregateArgs>(args: Subset<T, ProvinceAggregateArgs>): Prisma.PrismaPromise<GetProvinceAggregateType<T>>

    /**
     * Group by Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceGroupByArgs} args - Group by arguments.
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
      T extends provinceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: provinceGroupByArgs['orderBy'] }
        : { orderBy?: provinceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, provinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the province model
   */
  readonly fields: provinceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for province.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__provinceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    districts<T extends province$districtsArgs<ExtArgs> = {}>(args?: Subset<T, province$districtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the province model
   */ 
  interface provinceFieldRefs {
    readonly id: FieldRef<"province", 'Int'>
    readonly name: FieldRef<"province", 'String'>
  }
    

  // Custom InputTypes
  /**
   * province findUnique
   */
  export type provinceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which province to fetch.
     */
    where: provinceWhereUniqueInput
  }

  /**
   * province findUniqueOrThrow
   */
  export type provinceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which province to fetch.
     */
    where: provinceWhereUniqueInput
  }

  /**
   * province findFirst
   */
  export type provinceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which province to fetch.
     */
    where?: provinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provinceOrderByWithRelationInput | provinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for provinces.
     */
    cursor?: provinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * province findFirstOrThrow
   */
  export type provinceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which province to fetch.
     */
    where?: provinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provinceOrderByWithRelationInput | provinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for provinces.
     */
    cursor?: provinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * province findMany
   */
  export type provinceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which provinces to fetch.
     */
    where?: provinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provinceOrderByWithRelationInput | provinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing provinces.
     */
    cursor?: provinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * province create
   */
  export type provinceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * The data needed to create a province.
     */
    data: XOR<provinceCreateInput, provinceUncheckedCreateInput>
  }

  /**
   * province createMany
   */
  export type provinceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many provinces.
     */
    data: provinceCreateManyInput | provinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * province createManyAndReturn
   */
  export type provinceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many provinces.
     */
    data: provinceCreateManyInput | provinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * province update
   */
  export type provinceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * The data needed to update a province.
     */
    data: XOR<provinceUpdateInput, provinceUncheckedUpdateInput>
    /**
     * Choose, which province to update.
     */
    where: provinceWhereUniqueInput
  }

  /**
   * province updateMany
   */
  export type provinceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update provinces.
     */
    data: XOR<provinceUpdateManyMutationInput, provinceUncheckedUpdateManyInput>
    /**
     * Filter which provinces to update
     */
    where?: provinceWhereInput
  }

  /**
   * province upsert
   */
  export type provinceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * The filter to search for the province to update in case it exists.
     */
    where: provinceWhereUniqueInput
    /**
     * In case the province found by the `where` argument doesn't exist, create a new province with this data.
     */
    create: XOR<provinceCreateInput, provinceUncheckedCreateInput>
    /**
     * In case the province was found with the provided `where` argument, update it with this data.
     */
    update: XOR<provinceUpdateInput, provinceUncheckedUpdateInput>
  }

  /**
   * province delete
   */
  export type provinceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter which province to delete.
     */
    where: provinceWhereUniqueInput
  }

  /**
   * province deleteMany
   */
  export type provinceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which provinces to delete
     */
    where?: provinceWhereInput
  }

  /**
   * province.districts
   */
  export type province$districtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    where?: districtWhereInput
    orderBy?: districtOrderByWithRelationInput | districtOrderByWithRelationInput[]
    cursor?: districtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * province without action
   */
  export type provinceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
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


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    short_code: 'short_code',
    name_en: 'name_en',
    name_sin: 'name_sin',
    name_tm: 'name_tm',
    address: 'address',
    email: 'email',
    contact: 'contact',
    category_id: 'category_id',
    district_id: 'district_id',
    description: 'description'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    short_code: 'short_code'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const DistrictScalarFieldEnum: {
    id: 'id',
    name: 'name',
    province_id: 'province_id'
  };

  export type DistrictScalarFieldEnum = (typeof DistrictScalarFieldEnum)[keyof typeof DistrictScalarFieldEnum]


  export const ProvinceScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProvinceScalarFieldEnum = (typeof ProvinceScalarFieldEnum)[keyof typeof ProvinceScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[]
    OR?: organizationWhereInput[]
    NOT?: organizationWhereInput | organizationWhereInput[]
    id?: IntFilter<"organization"> | number
    short_code?: StringNullableFilter<"organization"> | string | null
    name_en?: StringFilter<"organization"> | string
    name_sin?: StringNullableFilter<"organization"> | string | null
    name_tm?: StringNullableFilter<"organization"> | string | null
    address?: StringNullableFilter<"organization"> | string | null
    email?: StringNullableFilter<"organization"> | string | null
    contact?: StringNullableFilter<"organization"> | string | null
    category_id?: IntNullableFilter<"organization"> | number | null
    district_id?: IntNullableFilter<"organization"> | number | null
    description?: StringNullableFilter<"organization"> | string | null
    category?: XOR<CategoryNullableRelationFilter, categoryWhereInput> | null
    district?: XOR<DistrictNullableRelationFilter, districtWhereInput> | null
  }

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder
    short_code?: SortOrderInput | SortOrder
    name_en?: SortOrder
    name_sin?: SortOrderInput | SortOrder
    name_tm?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    district_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    category?: categoryOrderByWithRelationInput
    district?: districtOrderByWithRelationInput
  }

  export type organizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: organizationWhereInput | organizationWhereInput[]
    OR?: organizationWhereInput[]
    NOT?: organizationWhereInput | organizationWhereInput[]
    short_code?: StringNullableFilter<"organization"> | string | null
    name_en?: StringFilter<"organization"> | string
    name_sin?: StringNullableFilter<"organization"> | string | null
    name_tm?: StringNullableFilter<"organization"> | string | null
    address?: StringNullableFilter<"organization"> | string | null
    email?: StringNullableFilter<"organization"> | string | null
    contact?: StringNullableFilter<"organization"> | string | null
    category_id?: IntNullableFilter<"organization"> | number | null
    district_id?: IntNullableFilter<"organization"> | number | null
    description?: StringNullableFilter<"organization"> | string | null
    category?: XOR<CategoryNullableRelationFilter, categoryWhereInput> | null
    district?: XOR<DistrictNullableRelationFilter, districtWhereInput> | null
  }, "id">

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder
    short_code?: SortOrderInput | SortOrder
    name_en?: SortOrder
    name_sin?: SortOrderInput | SortOrder
    name_tm?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    district_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: organizationCountOrderByAggregateInput
    _avg?: organizationAvgOrderByAggregateInput
    _max?: organizationMaxOrderByAggregateInput
    _min?: organizationMinOrderByAggregateInput
    _sum?: organizationSumOrderByAggregateInput
  }

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[]
    OR?: organizationScalarWhereWithAggregatesInput[]
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"organization"> | number
    short_code?: StringNullableWithAggregatesFilter<"organization"> | string | null
    name_en?: StringWithAggregatesFilter<"organization"> | string
    name_sin?: StringNullableWithAggregatesFilter<"organization"> | string | null
    name_tm?: StringNullableWithAggregatesFilter<"organization"> | string | null
    address?: StringNullableWithAggregatesFilter<"organization"> | string | null
    email?: StringNullableWithAggregatesFilter<"organization"> | string | null
    contact?: StringNullableWithAggregatesFilter<"organization"> | string | null
    category_id?: IntNullableWithAggregatesFilter<"organization"> | number | null
    district_id?: IntNullableWithAggregatesFilter<"organization"> | number | null
    description?: StringNullableWithAggregatesFilter<"organization"> | string | null
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    description?: StringNullableFilter<"category"> | string | null
    short_code?: StringNullableFilter<"category"> | string | null
    organizations?: OrganizationListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    short_code?: SortOrderInput | SortOrder
    organizations?: organizationOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    short_code?: string
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    description?: StringNullableFilter<"category"> | string | null
    organizations?: OrganizationListRelationFilter
  }, "id" | "short_code">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    short_code?: SortOrderInput | SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
    description?: StringNullableWithAggregatesFilter<"category"> | string | null
    short_code?: StringNullableWithAggregatesFilter<"category"> | string | null
  }

  export type districtWhereInput = {
    AND?: districtWhereInput | districtWhereInput[]
    OR?: districtWhereInput[]
    NOT?: districtWhereInput | districtWhereInput[]
    id?: IntFilter<"district"> | number
    name?: StringFilter<"district"> | string
    province_id?: IntFilter<"district"> | number
    province?: XOR<ProvinceRelationFilter, provinceWhereInput>
    organizations?: OrganizationListRelationFilter
  }

  export type districtOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    province_id?: SortOrder
    province?: provinceOrderByWithRelationInput
    organizations?: organizationOrderByRelationAggregateInput
  }

  export type districtWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: districtWhereInput | districtWhereInput[]
    OR?: districtWhereInput[]
    NOT?: districtWhereInput | districtWhereInput[]
    name?: StringFilter<"district"> | string
    province_id?: IntFilter<"district"> | number
    province?: XOR<ProvinceRelationFilter, provinceWhereInput>
    organizations?: OrganizationListRelationFilter
  }, "id">

  export type districtOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    province_id?: SortOrder
    _count?: districtCountOrderByAggregateInput
    _avg?: districtAvgOrderByAggregateInput
    _max?: districtMaxOrderByAggregateInput
    _min?: districtMinOrderByAggregateInput
    _sum?: districtSumOrderByAggregateInput
  }

  export type districtScalarWhereWithAggregatesInput = {
    AND?: districtScalarWhereWithAggregatesInput | districtScalarWhereWithAggregatesInput[]
    OR?: districtScalarWhereWithAggregatesInput[]
    NOT?: districtScalarWhereWithAggregatesInput | districtScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"district"> | number
    name?: StringWithAggregatesFilter<"district"> | string
    province_id?: IntWithAggregatesFilter<"district"> | number
  }

  export type provinceWhereInput = {
    AND?: provinceWhereInput | provinceWhereInput[]
    OR?: provinceWhereInput[]
    NOT?: provinceWhereInput | provinceWhereInput[]
    id?: IntFilter<"province"> | number
    name?: StringFilter<"province"> | string
    districts?: DistrictListRelationFilter
  }

  export type provinceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    districts?: districtOrderByRelationAggregateInput
  }

  export type provinceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: provinceWhereInput | provinceWhereInput[]
    OR?: provinceWhereInput[]
    NOT?: provinceWhereInput | provinceWhereInput[]
    name?: StringFilter<"province"> | string
    districts?: DistrictListRelationFilter
  }, "id">

  export type provinceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: provinceCountOrderByAggregateInput
    _avg?: provinceAvgOrderByAggregateInput
    _max?: provinceMaxOrderByAggregateInput
    _min?: provinceMinOrderByAggregateInput
    _sum?: provinceSumOrderByAggregateInput
  }

  export type provinceScalarWhereWithAggregatesInput = {
    AND?: provinceScalarWhereWithAggregatesInput | provinceScalarWhereWithAggregatesInput[]
    OR?: provinceScalarWhereWithAggregatesInput[]
    NOT?: provinceScalarWhereWithAggregatesInput | provinceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"province"> | number
    name?: StringWithAggregatesFilter<"province"> | string
  }

  export type organizationCreateInput = {
    short_code?: string | null
    name_en: string
    name_sin?: string | null
    name_tm?: string | null
    address?: string | null
    email?: string | null
    contact?: string | null
    description?: string | null
    category?: categoryCreateNestedOneWithoutOrganizationsInput
    district?: districtCreateNestedOneWithoutOrganizationsInput
  }

  export type organizationUncheckedCreateInput = {
    id?: number
    short_code?: string | null
    name_en: string
    name_sin?: string | null
    name_tm?: string | null
    address?: string | null
    email?: string | null
    contact?: string | null
    category_id?: number | null
    district_id?: number | null
    description?: string | null
  }

  export type organizationUpdateInput = {
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: StringFieldUpdateOperationsInput | string
    name_sin?: NullableStringFieldUpdateOperationsInput | string | null
    name_tm?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoryUpdateOneWithoutOrganizationsNestedInput
    district?: districtUpdateOneWithoutOrganizationsNestedInput
  }

  export type organizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: StringFieldUpdateOperationsInput | string
    name_sin?: NullableStringFieldUpdateOperationsInput | string | null
    name_tm?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    district_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type organizationCreateManyInput = {
    id?: number
    short_code?: string | null
    name_en: string
    name_sin?: string | null
    name_tm?: string | null
    address?: string | null
    email?: string | null
    contact?: string | null
    category_id?: number | null
    district_id?: number | null
    description?: string | null
  }

  export type organizationUpdateManyMutationInput = {
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: StringFieldUpdateOperationsInput | string
    name_sin?: NullableStringFieldUpdateOperationsInput | string | null
    name_tm?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type organizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: StringFieldUpdateOperationsInput | string
    name_sin?: NullableStringFieldUpdateOperationsInput | string | null
    name_tm?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    district_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryCreateInput = {
    name: string
    description?: string | null
    short_code?: string | null
    organizations?: organizationCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    short_code?: string | null
    organizations?: organizationUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    organizations?: organizationUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    organizations?: organizationUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    short_code?: string | null
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type districtCreateInput = {
    name: string
    province: provinceCreateNestedOneWithoutDistrictsInput
    organizations?: organizationCreateNestedManyWithoutDistrictInput
  }

  export type districtUncheckedCreateInput = {
    id?: number
    name: string
    province_id: number
    organizations?: organizationUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type districtUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    province?: provinceUpdateOneRequiredWithoutDistrictsNestedInput
    organizations?: organizationUpdateManyWithoutDistrictNestedInput
  }

  export type districtUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    province_id?: IntFieldUpdateOperationsInput | number
    organizations?: organizationUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type districtCreateManyInput = {
    id?: number
    name: string
    province_id: number
  }

  export type districtUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type districtUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    province_id?: IntFieldUpdateOperationsInput | number
  }

  export type provinceCreateInput = {
    name: string
    districts?: districtCreateNestedManyWithoutProvinceInput
  }

  export type provinceUncheckedCreateInput = {
    id?: number
    name: string
    districts?: districtUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type provinceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    districts?: districtUpdateManyWithoutProvinceNestedInput
  }

  export type provinceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    districts?: districtUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type provinceCreateManyInput = {
    id?: number
    name: string
  }

  export type provinceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type provinceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryNullableRelationFilter = {
    is?: categoryWhereInput | null
    isNot?: categoryWhereInput | null
  }

  export type DistrictNullableRelationFilter = {
    is?: districtWhereInput | null
    isNot?: districtWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder
    short_code?: SortOrder
    name_en?: SortOrder
    name_sin?: SortOrder
    name_tm?: SortOrder
    address?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    category_id?: SortOrder
    district_id?: SortOrder
    description?: SortOrder
  }

  export type organizationAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    district_id?: SortOrder
  }

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder
    short_code?: SortOrder
    name_en?: SortOrder
    name_sin?: SortOrder
    name_tm?: SortOrder
    address?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    category_id?: SortOrder
    district_id?: SortOrder
    description?: SortOrder
  }

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder
    short_code?: SortOrder
    name_en?: SortOrder
    name_sin?: SortOrder
    name_tm?: SortOrder
    address?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    category_id?: SortOrder
    district_id?: SortOrder
    description?: SortOrder
  }

  export type organizationSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    district_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OrganizationListRelationFilter = {
    every?: organizationWhereInput
    some?: organizationWhereInput
    none?: organizationWhereInput
  }

  export type organizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    short_code?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    short_code?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    short_code?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProvinceRelationFilter = {
    is?: provinceWhereInput
    isNot?: provinceWhereInput
  }

  export type districtCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    province_id?: SortOrder
  }

  export type districtAvgOrderByAggregateInput = {
    id?: SortOrder
    province_id?: SortOrder
  }

  export type districtMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    province_id?: SortOrder
  }

  export type districtMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    province_id?: SortOrder
  }

  export type districtSumOrderByAggregateInput = {
    id?: SortOrder
    province_id?: SortOrder
  }

  export type DistrictListRelationFilter = {
    every?: districtWhereInput
    some?: districtWhereInput
    none?: districtWhereInput
  }

  export type districtOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type provinceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type provinceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type provinceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type provinceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type provinceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryCreateNestedOneWithoutOrganizationsInput = {
    create?: XOR<categoryCreateWithoutOrganizationsInput, categoryUncheckedCreateWithoutOrganizationsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutOrganizationsInput
    connect?: categoryWhereUniqueInput
  }

  export type districtCreateNestedOneWithoutOrganizationsInput = {
    create?: XOR<districtCreateWithoutOrganizationsInput, districtUncheckedCreateWithoutOrganizationsInput>
    connectOrCreate?: districtCreateOrConnectWithoutOrganizationsInput
    connect?: districtWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type categoryUpdateOneWithoutOrganizationsNestedInput = {
    create?: XOR<categoryCreateWithoutOrganizationsInput, categoryUncheckedCreateWithoutOrganizationsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutOrganizationsInput
    upsert?: categoryUpsertWithoutOrganizationsInput
    disconnect?: categoryWhereInput | boolean
    delete?: categoryWhereInput | boolean
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutOrganizationsInput, categoryUpdateWithoutOrganizationsInput>, categoryUncheckedUpdateWithoutOrganizationsInput>
  }

  export type districtUpdateOneWithoutOrganizationsNestedInput = {
    create?: XOR<districtCreateWithoutOrganizationsInput, districtUncheckedCreateWithoutOrganizationsInput>
    connectOrCreate?: districtCreateOrConnectWithoutOrganizationsInput
    upsert?: districtUpsertWithoutOrganizationsInput
    disconnect?: districtWhereInput | boolean
    delete?: districtWhereInput | boolean
    connect?: districtWhereUniqueInput
    update?: XOR<XOR<districtUpdateToOneWithWhereWithoutOrganizationsInput, districtUpdateWithoutOrganizationsInput>, districtUncheckedUpdateWithoutOrganizationsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type organizationCreateNestedManyWithoutCategoryInput = {
    create?: XOR<organizationCreateWithoutCategoryInput, organizationUncheckedCreateWithoutCategoryInput> | organizationCreateWithoutCategoryInput[] | organizationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: organizationCreateOrConnectWithoutCategoryInput | organizationCreateOrConnectWithoutCategoryInput[]
    createMany?: organizationCreateManyCategoryInputEnvelope
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
  }

  export type organizationUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<organizationCreateWithoutCategoryInput, organizationUncheckedCreateWithoutCategoryInput> | organizationCreateWithoutCategoryInput[] | organizationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: organizationCreateOrConnectWithoutCategoryInput | organizationCreateOrConnectWithoutCategoryInput[]
    createMany?: organizationCreateManyCategoryInputEnvelope
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
  }

  export type organizationUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<organizationCreateWithoutCategoryInput, organizationUncheckedCreateWithoutCategoryInput> | organizationCreateWithoutCategoryInput[] | organizationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: organizationCreateOrConnectWithoutCategoryInput | organizationCreateOrConnectWithoutCategoryInput[]
    upsert?: organizationUpsertWithWhereUniqueWithoutCategoryInput | organizationUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: organizationCreateManyCategoryInputEnvelope
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    update?: organizationUpdateWithWhereUniqueWithoutCategoryInput | organizationUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: organizationUpdateManyWithWhereWithoutCategoryInput | organizationUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[]
  }

  export type organizationUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<organizationCreateWithoutCategoryInput, organizationUncheckedCreateWithoutCategoryInput> | organizationCreateWithoutCategoryInput[] | organizationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: organizationCreateOrConnectWithoutCategoryInput | organizationCreateOrConnectWithoutCategoryInput[]
    upsert?: organizationUpsertWithWhereUniqueWithoutCategoryInput | organizationUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: organizationCreateManyCategoryInputEnvelope
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    update?: organizationUpdateWithWhereUniqueWithoutCategoryInput | organizationUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: organizationUpdateManyWithWhereWithoutCategoryInput | organizationUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[]
  }

  export type provinceCreateNestedOneWithoutDistrictsInput = {
    create?: XOR<provinceCreateWithoutDistrictsInput, provinceUncheckedCreateWithoutDistrictsInput>
    connectOrCreate?: provinceCreateOrConnectWithoutDistrictsInput
    connect?: provinceWhereUniqueInput
  }

  export type organizationCreateNestedManyWithoutDistrictInput = {
    create?: XOR<organizationCreateWithoutDistrictInput, organizationUncheckedCreateWithoutDistrictInput> | organizationCreateWithoutDistrictInput[] | organizationUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: organizationCreateOrConnectWithoutDistrictInput | organizationCreateOrConnectWithoutDistrictInput[]
    createMany?: organizationCreateManyDistrictInputEnvelope
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
  }

  export type organizationUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: XOR<organizationCreateWithoutDistrictInput, organizationUncheckedCreateWithoutDistrictInput> | organizationCreateWithoutDistrictInput[] | organizationUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: organizationCreateOrConnectWithoutDistrictInput | organizationCreateOrConnectWithoutDistrictInput[]
    createMany?: organizationCreateManyDistrictInputEnvelope
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
  }

  export type provinceUpdateOneRequiredWithoutDistrictsNestedInput = {
    create?: XOR<provinceCreateWithoutDistrictsInput, provinceUncheckedCreateWithoutDistrictsInput>
    connectOrCreate?: provinceCreateOrConnectWithoutDistrictsInput
    upsert?: provinceUpsertWithoutDistrictsInput
    connect?: provinceWhereUniqueInput
    update?: XOR<XOR<provinceUpdateToOneWithWhereWithoutDistrictsInput, provinceUpdateWithoutDistrictsInput>, provinceUncheckedUpdateWithoutDistrictsInput>
  }

  export type organizationUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<organizationCreateWithoutDistrictInput, organizationUncheckedCreateWithoutDistrictInput> | organizationCreateWithoutDistrictInput[] | organizationUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: organizationCreateOrConnectWithoutDistrictInput | organizationCreateOrConnectWithoutDistrictInput[]
    upsert?: organizationUpsertWithWhereUniqueWithoutDistrictInput | organizationUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: organizationCreateManyDistrictInputEnvelope
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    update?: organizationUpdateWithWhereUniqueWithoutDistrictInput | organizationUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: organizationUpdateManyWithWhereWithoutDistrictInput | organizationUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[]
  }

  export type organizationUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<organizationCreateWithoutDistrictInput, organizationUncheckedCreateWithoutDistrictInput> | organizationCreateWithoutDistrictInput[] | organizationUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: organizationCreateOrConnectWithoutDistrictInput | organizationCreateOrConnectWithoutDistrictInput[]
    upsert?: organizationUpsertWithWhereUniqueWithoutDistrictInput | organizationUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: organizationCreateManyDistrictInputEnvelope
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    update?: organizationUpdateWithWhereUniqueWithoutDistrictInput | organizationUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: organizationUpdateManyWithWhereWithoutDistrictInput | organizationUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[]
  }

  export type districtCreateNestedManyWithoutProvinceInput = {
    create?: XOR<districtCreateWithoutProvinceInput, districtUncheckedCreateWithoutProvinceInput> | districtCreateWithoutProvinceInput[] | districtUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: districtCreateOrConnectWithoutProvinceInput | districtCreateOrConnectWithoutProvinceInput[]
    createMany?: districtCreateManyProvinceInputEnvelope
    connect?: districtWhereUniqueInput | districtWhereUniqueInput[]
  }

  export type districtUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<districtCreateWithoutProvinceInput, districtUncheckedCreateWithoutProvinceInput> | districtCreateWithoutProvinceInput[] | districtUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: districtCreateOrConnectWithoutProvinceInput | districtCreateOrConnectWithoutProvinceInput[]
    createMany?: districtCreateManyProvinceInputEnvelope
    connect?: districtWhereUniqueInput | districtWhereUniqueInput[]
  }

  export type districtUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<districtCreateWithoutProvinceInput, districtUncheckedCreateWithoutProvinceInput> | districtCreateWithoutProvinceInput[] | districtUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: districtCreateOrConnectWithoutProvinceInput | districtCreateOrConnectWithoutProvinceInput[]
    upsert?: districtUpsertWithWhereUniqueWithoutProvinceInput | districtUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: districtCreateManyProvinceInputEnvelope
    set?: districtWhereUniqueInput | districtWhereUniqueInput[]
    disconnect?: districtWhereUniqueInput | districtWhereUniqueInput[]
    delete?: districtWhereUniqueInput | districtWhereUniqueInput[]
    connect?: districtWhereUniqueInput | districtWhereUniqueInput[]
    update?: districtUpdateWithWhereUniqueWithoutProvinceInput | districtUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: districtUpdateManyWithWhereWithoutProvinceInput | districtUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: districtScalarWhereInput | districtScalarWhereInput[]
  }

  export type districtUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<districtCreateWithoutProvinceInput, districtUncheckedCreateWithoutProvinceInput> | districtCreateWithoutProvinceInput[] | districtUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: districtCreateOrConnectWithoutProvinceInput | districtCreateOrConnectWithoutProvinceInput[]
    upsert?: districtUpsertWithWhereUniqueWithoutProvinceInput | districtUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: districtCreateManyProvinceInputEnvelope
    set?: districtWhereUniqueInput | districtWhereUniqueInput[]
    disconnect?: districtWhereUniqueInput | districtWhereUniqueInput[]
    delete?: districtWhereUniqueInput | districtWhereUniqueInput[]
    connect?: districtWhereUniqueInput | districtWhereUniqueInput[]
    update?: districtUpdateWithWhereUniqueWithoutProvinceInput | districtUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: districtUpdateManyWithWhereWithoutProvinceInput | districtUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: districtScalarWhereInput | districtScalarWhereInput[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type categoryCreateWithoutOrganizationsInput = {
    name: string
    description?: string | null
    short_code?: string | null
  }

  export type categoryUncheckedCreateWithoutOrganizationsInput = {
    id?: number
    name: string
    description?: string | null
    short_code?: string | null
  }

  export type categoryCreateOrConnectWithoutOrganizationsInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutOrganizationsInput, categoryUncheckedCreateWithoutOrganizationsInput>
  }

  export type districtCreateWithoutOrganizationsInput = {
    name: string
    province: provinceCreateNestedOneWithoutDistrictsInput
  }

  export type districtUncheckedCreateWithoutOrganizationsInput = {
    id?: number
    name: string
    province_id: number
  }

  export type districtCreateOrConnectWithoutOrganizationsInput = {
    where: districtWhereUniqueInput
    create: XOR<districtCreateWithoutOrganizationsInput, districtUncheckedCreateWithoutOrganizationsInput>
  }

  export type categoryUpsertWithoutOrganizationsInput = {
    update: XOR<categoryUpdateWithoutOrganizationsInput, categoryUncheckedUpdateWithoutOrganizationsInput>
    create: XOR<categoryCreateWithoutOrganizationsInput, categoryUncheckedCreateWithoutOrganizationsInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutOrganizationsInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutOrganizationsInput, categoryUncheckedUpdateWithoutOrganizationsInput>
  }

  export type categoryUpdateWithoutOrganizationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryUncheckedUpdateWithoutOrganizationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type districtUpsertWithoutOrganizationsInput = {
    update: XOR<districtUpdateWithoutOrganizationsInput, districtUncheckedUpdateWithoutOrganizationsInput>
    create: XOR<districtCreateWithoutOrganizationsInput, districtUncheckedCreateWithoutOrganizationsInput>
    where?: districtWhereInput
  }

  export type districtUpdateToOneWithWhereWithoutOrganizationsInput = {
    where?: districtWhereInput
    data: XOR<districtUpdateWithoutOrganizationsInput, districtUncheckedUpdateWithoutOrganizationsInput>
  }

  export type districtUpdateWithoutOrganizationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    province?: provinceUpdateOneRequiredWithoutDistrictsNestedInput
  }

  export type districtUncheckedUpdateWithoutOrganizationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    province_id?: IntFieldUpdateOperationsInput | number
  }

  export type organizationCreateWithoutCategoryInput = {
    short_code?: string | null
    name_en: string
    name_sin?: string | null
    name_tm?: string | null
    address?: string | null
    email?: string | null
    contact?: string | null
    description?: string | null
    district?: districtCreateNestedOneWithoutOrganizationsInput
  }

  export type organizationUncheckedCreateWithoutCategoryInput = {
    id?: number
    short_code?: string | null
    name_en: string
    name_sin?: string | null
    name_tm?: string | null
    address?: string | null
    email?: string | null
    contact?: string | null
    district_id?: number | null
    description?: string | null
  }

  export type organizationCreateOrConnectWithoutCategoryInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutCategoryInput, organizationUncheckedCreateWithoutCategoryInput>
  }

  export type organizationCreateManyCategoryInputEnvelope = {
    data: organizationCreateManyCategoryInput | organizationCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type organizationUpsertWithWhereUniqueWithoutCategoryInput = {
    where: organizationWhereUniqueInput
    update: XOR<organizationUpdateWithoutCategoryInput, organizationUncheckedUpdateWithoutCategoryInput>
    create: XOR<organizationCreateWithoutCategoryInput, organizationUncheckedCreateWithoutCategoryInput>
  }

  export type organizationUpdateWithWhereUniqueWithoutCategoryInput = {
    where: organizationWhereUniqueInput
    data: XOR<organizationUpdateWithoutCategoryInput, organizationUncheckedUpdateWithoutCategoryInput>
  }

  export type organizationUpdateManyWithWhereWithoutCategoryInput = {
    where: organizationScalarWhereInput
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutCategoryInput>
  }

  export type organizationScalarWhereInput = {
    AND?: organizationScalarWhereInput | organizationScalarWhereInput[]
    OR?: organizationScalarWhereInput[]
    NOT?: organizationScalarWhereInput | organizationScalarWhereInput[]
    id?: IntFilter<"organization"> | number
    short_code?: StringNullableFilter<"organization"> | string | null
    name_en?: StringFilter<"organization"> | string
    name_sin?: StringNullableFilter<"organization"> | string | null
    name_tm?: StringNullableFilter<"organization"> | string | null
    address?: StringNullableFilter<"organization"> | string | null
    email?: StringNullableFilter<"organization"> | string | null
    contact?: StringNullableFilter<"organization"> | string | null
    category_id?: IntNullableFilter<"organization"> | number | null
    district_id?: IntNullableFilter<"organization"> | number | null
    description?: StringNullableFilter<"organization"> | string | null
  }

  export type provinceCreateWithoutDistrictsInput = {
    name: string
  }

  export type provinceUncheckedCreateWithoutDistrictsInput = {
    id?: number
    name: string
  }

  export type provinceCreateOrConnectWithoutDistrictsInput = {
    where: provinceWhereUniqueInput
    create: XOR<provinceCreateWithoutDistrictsInput, provinceUncheckedCreateWithoutDistrictsInput>
  }

  export type organizationCreateWithoutDistrictInput = {
    short_code?: string | null
    name_en: string
    name_sin?: string | null
    name_tm?: string | null
    address?: string | null
    email?: string | null
    contact?: string | null
    description?: string | null
    category?: categoryCreateNestedOneWithoutOrganizationsInput
  }

  export type organizationUncheckedCreateWithoutDistrictInput = {
    id?: number
    short_code?: string | null
    name_en: string
    name_sin?: string | null
    name_tm?: string | null
    address?: string | null
    email?: string | null
    contact?: string | null
    category_id?: number | null
    description?: string | null
  }

  export type organizationCreateOrConnectWithoutDistrictInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutDistrictInput, organizationUncheckedCreateWithoutDistrictInput>
  }

  export type organizationCreateManyDistrictInputEnvelope = {
    data: organizationCreateManyDistrictInput | organizationCreateManyDistrictInput[]
    skipDuplicates?: boolean
  }

  export type provinceUpsertWithoutDistrictsInput = {
    update: XOR<provinceUpdateWithoutDistrictsInput, provinceUncheckedUpdateWithoutDistrictsInput>
    create: XOR<provinceCreateWithoutDistrictsInput, provinceUncheckedCreateWithoutDistrictsInput>
    where?: provinceWhereInput
  }

  export type provinceUpdateToOneWithWhereWithoutDistrictsInput = {
    where?: provinceWhereInput
    data: XOR<provinceUpdateWithoutDistrictsInput, provinceUncheckedUpdateWithoutDistrictsInput>
  }

  export type provinceUpdateWithoutDistrictsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type provinceUncheckedUpdateWithoutDistrictsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type organizationUpsertWithWhereUniqueWithoutDistrictInput = {
    where: organizationWhereUniqueInput
    update: XOR<organizationUpdateWithoutDistrictInput, organizationUncheckedUpdateWithoutDistrictInput>
    create: XOR<organizationCreateWithoutDistrictInput, organizationUncheckedCreateWithoutDistrictInput>
  }

  export type organizationUpdateWithWhereUniqueWithoutDistrictInput = {
    where: organizationWhereUniqueInput
    data: XOR<organizationUpdateWithoutDistrictInput, organizationUncheckedUpdateWithoutDistrictInput>
  }

  export type organizationUpdateManyWithWhereWithoutDistrictInput = {
    where: organizationScalarWhereInput
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutDistrictInput>
  }

  export type districtCreateWithoutProvinceInput = {
    name: string
    organizations?: organizationCreateNestedManyWithoutDistrictInput
  }

  export type districtUncheckedCreateWithoutProvinceInput = {
    id?: number
    name: string
    organizations?: organizationUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type districtCreateOrConnectWithoutProvinceInput = {
    where: districtWhereUniqueInput
    create: XOR<districtCreateWithoutProvinceInput, districtUncheckedCreateWithoutProvinceInput>
  }

  export type districtCreateManyProvinceInputEnvelope = {
    data: districtCreateManyProvinceInput | districtCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type districtUpsertWithWhereUniqueWithoutProvinceInput = {
    where: districtWhereUniqueInput
    update: XOR<districtUpdateWithoutProvinceInput, districtUncheckedUpdateWithoutProvinceInput>
    create: XOR<districtCreateWithoutProvinceInput, districtUncheckedCreateWithoutProvinceInput>
  }

  export type districtUpdateWithWhereUniqueWithoutProvinceInput = {
    where: districtWhereUniqueInput
    data: XOR<districtUpdateWithoutProvinceInput, districtUncheckedUpdateWithoutProvinceInput>
  }

  export type districtUpdateManyWithWhereWithoutProvinceInput = {
    where: districtScalarWhereInput
    data: XOR<districtUpdateManyMutationInput, districtUncheckedUpdateManyWithoutProvinceInput>
  }

  export type districtScalarWhereInput = {
    AND?: districtScalarWhereInput | districtScalarWhereInput[]
    OR?: districtScalarWhereInput[]
    NOT?: districtScalarWhereInput | districtScalarWhereInput[]
    id?: IntFilter<"district"> | number
    name?: StringFilter<"district"> | string
    province_id?: IntFilter<"district"> | number
  }

  export type organizationCreateManyCategoryInput = {
    id?: number
    short_code?: string | null
    name_en: string
    name_sin?: string | null
    name_tm?: string | null
    address?: string | null
    email?: string | null
    contact?: string | null
    district_id?: number | null
    description?: string | null
  }

  export type organizationUpdateWithoutCategoryInput = {
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: StringFieldUpdateOperationsInput | string
    name_sin?: NullableStringFieldUpdateOperationsInput | string | null
    name_tm?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    district?: districtUpdateOneWithoutOrganizationsNestedInput
  }

  export type organizationUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: StringFieldUpdateOperationsInput | string
    name_sin?: NullableStringFieldUpdateOperationsInput | string | null
    name_tm?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    district_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type organizationUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: StringFieldUpdateOperationsInput | string
    name_sin?: NullableStringFieldUpdateOperationsInput | string | null
    name_tm?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    district_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type organizationCreateManyDistrictInput = {
    id?: number
    short_code?: string | null
    name_en: string
    name_sin?: string | null
    name_tm?: string | null
    address?: string | null
    email?: string | null
    contact?: string | null
    category_id?: number | null
    description?: string | null
  }

  export type organizationUpdateWithoutDistrictInput = {
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: StringFieldUpdateOperationsInput | string
    name_sin?: NullableStringFieldUpdateOperationsInput | string | null
    name_tm?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoryUpdateOneWithoutOrganizationsNestedInput
  }

  export type organizationUncheckedUpdateWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: StringFieldUpdateOperationsInput | string
    name_sin?: NullableStringFieldUpdateOperationsInput | string | null
    name_tm?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type organizationUncheckedUpdateManyWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    short_code?: NullableStringFieldUpdateOperationsInput | string | null
    name_en?: StringFieldUpdateOperationsInput | string
    name_sin?: NullableStringFieldUpdateOperationsInput | string | null
    name_tm?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type districtCreateManyProvinceInput = {
    id?: number
    name: string
  }

  export type districtUpdateWithoutProvinceInput = {
    name?: StringFieldUpdateOperationsInput | string
    organizations?: organizationUpdateManyWithoutDistrictNestedInput
  }

  export type districtUncheckedUpdateWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    organizations?: organizationUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type districtUncheckedUpdateManyWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DistrictCountOutputTypeDefaultArgs instead
     */
    export type DistrictCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DistrictCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProvinceCountOutputTypeDefaultArgs instead
     */
    export type ProvinceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProvinceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use organizationDefaultArgs instead
     */
    export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = organizationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoryDefaultArgs instead
     */
    export type categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use districtDefaultArgs instead
     */
    export type districtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = districtDefaultArgs<ExtArgs>
    /**
     * @deprecated Use provinceDefaultArgs instead
     */
    export type provinceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = provinceDefaultArgs<ExtArgs>

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