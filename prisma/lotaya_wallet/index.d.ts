
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model UserWithdrawAccount
 * 
 */
export type UserWithdrawAccount = $Result.DefaultSelection<Prisma.$UserWithdrawAccountPayload>
/**
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>
/**
 * Model WithdrawMethod
 * 
 */
export type WithdrawMethod = $Result.DefaultSelection<Prisma.$WithdrawMethodPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model AdminRoles
 * 
 */
export type AdminRoles = $Result.DefaultSelection<Prisma.$AdminRolesPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model TransactionType
 * 
 */
export type TransactionType = $Result.DefaultSelection<Prisma.$TransactionTypePayload>
/**
 * Model ApproveReject
 * 
 */
export type ApproveReject = $Result.DefaultSelection<Prisma.$ApproveRejectPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs>;

  /**
   * `prisma.userWithdrawAccount`: Exposes CRUD operations for the **UserWithdrawAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserWithdrawAccounts
    * const userWithdrawAccounts = await prisma.userWithdrawAccount.findMany()
    * ```
    */
  get userWithdrawAccount(): Prisma.UserWithdrawAccountDelegate<ExtArgs>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs>;

  /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs>;

  /**
   * `prisma.withdrawMethod`: Exposes CRUD operations for the **WithdrawMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WithdrawMethods
    * const withdrawMethods = await prisma.withdrawMethod.findMany()
    * ```
    */
  get withdrawMethod(): Prisma.WithdrawMethodDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.adminRoles`: Exposes CRUD operations for the **AdminRoles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminRoles
    * const adminRoles = await prisma.adminRoles.findMany()
    * ```
    */
  get adminRoles(): Prisma.AdminRolesDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.transactionType`: Exposes CRUD operations for the **TransactionType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionTypes
    * const transactionTypes = await prisma.transactionType.findMany()
    * ```
    */
  get transactionType(): Prisma.TransactionTypeDelegate<ExtArgs>;

  /**
   * `prisma.approveReject`: Exposes CRUD operations for the **ApproveReject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApproveRejects
    * const approveRejects = await prisma.approveReject.findMany()
    * ```
    */
  get approveReject(): Prisma.ApproveRejectDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
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
    Users: 'Users',
    Roles: 'Roles',
    UserWithdrawAccount: 'UserWithdrawAccount',
    Wallet: 'Wallet',
    PaymentMethod: 'PaymentMethod',
    WithdrawMethod: 'WithdrawMethod',
    Admin: 'Admin',
    AdminRoles: 'AdminRoles',
    Transaction: 'Transaction',
    TransactionType: 'TransactionType',
    ApproveReject: 'ApproveReject'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'roles' | 'userWithdrawAccount' | 'wallet' | 'paymentMethod' | 'withdrawMethod' | 'admin' | 'adminRoles' | 'transaction' | 'transactionType' | 'approveReject'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>,
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      UserWithdrawAccount: {
        payload: Prisma.$UserWithdrawAccountPayload<ExtArgs>
        fields: Prisma.UserWithdrawAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserWithdrawAccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserWithdrawAccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload>
          }
          findFirst: {
            args: Prisma.UserWithdrawAccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserWithdrawAccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload>
          }
          findMany: {
            args: Prisma.UserWithdrawAccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload>[]
          }
          create: {
            args: Prisma.UserWithdrawAccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload>
          }
          createMany: {
            args: Prisma.UserWithdrawAccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserWithdrawAccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload>
          }
          update: {
            args: Prisma.UserWithdrawAccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload>
          }
          deleteMany: {
            args: Prisma.UserWithdrawAccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserWithdrawAccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserWithdrawAccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload>
          }
          aggregate: {
            args: Prisma.UserWithdrawAccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserWithdrawAccount>
          }
          groupBy: {
            args: Prisma.UserWithdrawAccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserWithdrawAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserWithdrawAccountCountArgs<ExtArgs>,
            result: $Utils.Optional<UserWithdrawAccountCountAggregateOutputType> | number
          }
        }
      }
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>,
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethod: {
        payload: Prisma.$PaymentMethodPayload<ExtArgs>
        fields: Prisma.PaymentMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
          }
        }
      }
      WithdrawMethod: {
        payload: Prisma.$WithdrawMethodPayload<ExtArgs>
        fields: Prisma.WithdrawMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WithdrawMethodFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WithdrawMethodFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawMethodPayload>
          }
          findFirst: {
            args: Prisma.WithdrawMethodFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WithdrawMethodFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawMethodPayload>
          }
          findMany: {
            args: Prisma.WithdrawMethodFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawMethodPayload>[]
          }
          create: {
            args: Prisma.WithdrawMethodCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawMethodPayload>
          }
          createMany: {
            args: Prisma.WithdrawMethodCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WithdrawMethodDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawMethodPayload>
          }
          update: {
            args: Prisma.WithdrawMethodUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawMethodPayload>
          }
          deleteMany: {
            args: Prisma.WithdrawMethodDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WithdrawMethodUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WithdrawMethodUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WithdrawMethodPayload>
          }
          aggregate: {
            args: Prisma.WithdrawMethodAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWithdrawMethod>
          }
          groupBy: {
            args: Prisma.WithdrawMethodGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WithdrawMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.WithdrawMethodCountArgs<ExtArgs>,
            result: $Utils.Optional<WithdrawMethodCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      AdminRoles: {
        payload: Prisma.$AdminRolesPayload<ExtArgs>
        fields: Prisma.AdminRolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminRolesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminRolesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload>
          }
          findFirst: {
            args: Prisma.AdminRolesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminRolesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload>
          }
          findMany: {
            args: Prisma.AdminRolesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload>[]
          }
          create: {
            args: Prisma.AdminRolesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload>
          }
          createMany: {
            args: Prisma.AdminRolesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdminRolesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload>
          }
          update: {
            args: Prisma.AdminRolesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload>
          }
          deleteMany: {
            args: Prisma.AdminRolesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminRolesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminRolesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload>
          }
          aggregate: {
            args: Prisma.AdminRolesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdminRoles>
          }
          groupBy: {
            args: Prisma.AdminRolesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminRolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminRolesCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminRolesCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      TransactionType: {
        payload: Prisma.$TransactionTypePayload<ExtArgs>
        fields: Prisma.TransactionTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          findFirst: {
            args: Prisma.TransactionTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          findMany: {
            args: Prisma.TransactionTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>[]
          }
          create: {
            args: Prisma.TransactionTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          createMany: {
            args: Prisma.TransactionTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TransactionTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          update: {
            args: Prisma.TransactionTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          deleteMany: {
            args: Prisma.TransactionTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransactionTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          aggregate: {
            args: Prisma.TransactionTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransactionType>
          }
          groupBy: {
            args: Prisma.TransactionTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransactionTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<TransactionTypeCountAggregateOutputType> | number
          }
        }
      }
      ApproveReject: {
        payload: Prisma.$ApproveRejectPayload<ExtArgs>
        fields: Prisma.ApproveRejectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApproveRejectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApproveRejectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload>
          }
          findFirst: {
            args: Prisma.ApproveRejectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApproveRejectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload>
          }
          findMany: {
            args: Prisma.ApproveRejectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload>[]
          }
          create: {
            args: Prisma.ApproveRejectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload>
          }
          createMany: {
            args: Prisma.ApproveRejectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ApproveRejectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload>
          }
          update: {
            args: Prisma.ApproveRejectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload>
          }
          deleteMany: {
            args: Prisma.ApproveRejectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApproveRejectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApproveRejectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload>
          }
          aggregate: {
            args: Prisma.ApproveRejectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApproveReject>
          }
          groupBy: {
            args: Prisma.ApproveRejectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApproveRejectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApproveRejectCountArgs<ExtArgs>,
            result: $Utils.Optional<ApproveRejectCountAggregateOutputType> | number
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
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }



  /**
   * Count Type TransactionTypeCountOutputType
   */

  export type TransactionTypeCountOutputType = {
    transation: number
  }

  export type TransactionTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transation?: boolean | TransactionTypeCountOutputTypeCountTransationArgs
  }

  // Custom InputTypes

  /**
   * TransactionTypeCountOutputType without action
   */
  export type TransactionTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTypeCountOutputType
     */
    select?: TransactionTypeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TransactionTypeCountOutputType without action
   */
  export type TransactionTypeCountOutputTypeCountTransationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
    role_id: number | null
    is_verify: number | null
    account_status: number | null
    delete_status: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
    role_id: number | null
    is_verify: number | null
    account_status: number | null
    delete_status: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    phone_number: string | null
    user_name: string | null
    password: string | null
    otp_code: string | null
    role_id: number | null
    sms_send_time: Date | null
    is_verify: number | null
    account_status: number | null
    delete_status: number | null
    register_date: Date | null
    updated_date: Date | null
    deleted_date: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    phone_number: string | null
    user_name: string | null
    password: string | null
    otp_code: string | null
    role_id: number | null
    sms_send_time: Date | null
    is_verify: number | null
    account_status: number | null
    delete_status: number | null
    register_date: Date | null
    updated_date: Date | null
    deleted_date: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    phone_number: number
    user_name: number
    password: number
    otp_code: number
    role_id: number
    sms_send_time: number
    is_verify: number
    account_status: number
    delete_status: number
    register_date: number
    updated_date: number
    deleted_date: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
    role_id?: true
    is_verify?: true
    account_status?: true
    delete_status?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
    role_id?: true
    is_verify?: true
    account_status?: true
    delete_status?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    phone_number?: true
    user_name?: true
    password?: true
    otp_code?: true
    role_id?: true
    sms_send_time?: true
    is_verify?: true
    account_status?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    phone_number?: true
    user_name?: true
    password?: true
    otp_code?: true
    role_id?: true
    sms_send_time?: true
    is_verify?: true
    account_status?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    phone_number?: true
    user_name?: true
    password?: true
    otp_code?: true
    role_id?: true
    sms_send_time?: true
    is_verify?: true
    account_status?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    phone_number: string
    user_name: string | null
    password: string | null
    otp_code: string | null
    role_id: number
    sms_send_time: Date | null
    is_verify: number | null
    account_status: number | null
    delete_status: number
    register_date: Date
    updated_date: Date
    deleted_date: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    phone_number?: boolean
    user_name?: boolean
    password?: boolean
    otp_code?: boolean
    role_id?: boolean
    sms_send_time?: boolean
    is_verify?: boolean
    account_status?: boolean
    delete_status?: boolean
    register_date?: boolean
    updated_date?: boolean
    deleted_date?: boolean
    user_role?: boolean | RolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    user_id?: boolean
    phone_number?: boolean
    user_name?: boolean
    password?: boolean
    otp_code?: boolean
    role_id?: boolean
    sms_send_time?: boolean
    is_verify?: boolean
    account_status?: boolean
    delete_status?: boolean
    register_date?: boolean
    updated_date?: boolean
    deleted_date?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_role?: boolean | RolesDefaultArgs<ExtArgs>
  }


  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      user_role: Prisma.$RolesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      phone_number: string
      user_name: string | null
      password: string | null
      otp_code: string | null
      role_id: number
      sms_send_time: Date | null
      is_verify: number | null
      account_status: number | null
      delete_status: number
      register_date: Date
      updated_date: Date
      deleted_date: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_role<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly user_id: FieldRef<"Users", 'Int'>
    readonly phone_number: FieldRef<"Users", 'String'>
    readonly user_name: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly otp_code: FieldRef<"Users", 'String'>
    readonly role_id: FieldRef<"Users", 'Int'>
    readonly sms_send_time: FieldRef<"Users", 'DateTime'>
    readonly is_verify: FieldRef<"Users", 'Int'>
    readonly account_status: FieldRef<"Users", 'Int'>
    readonly delete_status: FieldRef<"Users", 'Int'>
    readonly register_date: FieldRef<"Users", 'DateTime'>
    readonly updated_date: FieldRef<"Users", 'DateTime'>
    readonly deleted_date: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
  }



  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    role_id: number | null
  }

  export type RolesSumAggregateOutputType = {
    role_id: number | null
  }

  export type RolesMinAggregateOutputType = {
    role_id: number | null
    name: string | null
  }

  export type RolesMaxAggregateOutputType = {
    role_id: number | null
    name: string | null
  }

  export type RolesCountAggregateOutputType = {
    role_id: number
    name: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    role_id?: true
  }

  export type RolesSumAggregateInputType = {
    role_id?: true
  }

  export type RolesMinAggregateInputType = {
    role_id?: true
    name?: true
  }

  export type RolesMaxAggregateInputType = {
    role_id?: true
    name?: true
  }

  export type RolesCountAggregateInputType = {
    role_id?: true
    name?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    role_id: number
    name: string
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    name?: boolean
    users?: boolean | Roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectScalar = {
    role_id?: boolean
    name?: boolean
  }

  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      name: string
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }


  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Roles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const rolesWithRole_idOnly = await prisma.roles.findMany({ select: { role_id: true } })
     * 
    **/
    findMany<T extends RolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
    **/
    create<T extends RolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RolesCreateArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     *     @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const roles = await prisma.roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
    **/
    delete<T extends RolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
    **/
    upsert<T extends RolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
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
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends Roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, Roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Roles model
   */ 
  interface RolesFieldRefs {
    readonly role_id: FieldRef<"Roles", 'Int'>
    readonly name: FieldRef<"Roles", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }


  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
  }


  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }


  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
  }


  /**
   * Roles.users
   */
  export type Roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
  }



  /**
   * Model UserWithdrawAccount
   */

  export type AggregateUserWithdrawAccount = {
    _count: UserWithdrawAccountCountAggregateOutputType | null
    _avg: UserWithdrawAccountAvgAggregateOutputType | null
    _sum: UserWithdrawAccountSumAggregateOutputType | null
    _min: UserWithdrawAccountMinAggregateOutputType | null
    _max: UserWithdrawAccountMaxAggregateOutputType | null
  }

  export type UserWithdrawAccountAvgAggregateOutputType = {
    user_withdraw_account_id: number | null
    user_id: number | null
    account_id: number | null
    delete_status: number | null
  }

  export type UserWithdrawAccountSumAggregateOutputType = {
    user_withdraw_account_id: number | null
    user_id: number | null
    account_id: number | null
    delete_status: number | null
  }

  export type UserWithdrawAccountMinAggregateOutputType = {
    user_withdraw_account_id: number | null
    user_id: number | null
    account_type: string | null
    account_name: string | null
    account_id: number | null
    delete_status: number | null
    register_date: Date | null
    updated_date: Date | null
    deleted_date: Date | null
  }

  export type UserWithdrawAccountMaxAggregateOutputType = {
    user_withdraw_account_id: number | null
    user_id: number | null
    account_type: string | null
    account_name: string | null
    account_id: number | null
    delete_status: number | null
    register_date: Date | null
    updated_date: Date | null
    deleted_date: Date | null
  }

  export type UserWithdrawAccountCountAggregateOutputType = {
    user_withdraw_account_id: number
    user_id: number
    account_type: number
    account_name: number
    account_id: number
    delete_status: number
    register_date: number
    updated_date: number
    deleted_date: number
    _all: number
  }


  export type UserWithdrawAccountAvgAggregateInputType = {
    user_withdraw_account_id?: true
    user_id?: true
    account_id?: true
    delete_status?: true
  }

  export type UserWithdrawAccountSumAggregateInputType = {
    user_withdraw_account_id?: true
    user_id?: true
    account_id?: true
    delete_status?: true
  }

  export type UserWithdrawAccountMinAggregateInputType = {
    user_withdraw_account_id?: true
    user_id?: true
    account_type?: true
    account_name?: true
    account_id?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
  }

  export type UserWithdrawAccountMaxAggregateInputType = {
    user_withdraw_account_id?: true
    user_id?: true
    account_type?: true
    account_name?: true
    account_id?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
  }

  export type UserWithdrawAccountCountAggregateInputType = {
    user_withdraw_account_id?: true
    user_id?: true
    account_type?: true
    account_name?: true
    account_id?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
    _all?: true
  }

  export type UserWithdrawAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWithdrawAccount to aggregate.
     */
    where?: UserWithdrawAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWithdrawAccounts to fetch.
     */
    orderBy?: UserWithdrawAccountOrderByWithRelationInput | UserWithdrawAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWithdrawAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWithdrawAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWithdrawAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserWithdrawAccounts
    **/
    _count?: true | UserWithdrawAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserWithdrawAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserWithdrawAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserWithdrawAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserWithdrawAccountMaxAggregateInputType
  }

  export type GetUserWithdrawAccountAggregateType<T extends UserWithdrawAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateUserWithdrawAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWithdrawAccount[P]>
      : GetScalarType<T[P], AggregateUserWithdrawAccount[P]>
  }




  export type UserWithdrawAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWithdrawAccountWhereInput
    orderBy?: UserWithdrawAccountOrderByWithAggregationInput | UserWithdrawAccountOrderByWithAggregationInput[]
    by: UserWithdrawAccountScalarFieldEnum[] | UserWithdrawAccountScalarFieldEnum
    having?: UserWithdrawAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserWithdrawAccountCountAggregateInputType | true
    _avg?: UserWithdrawAccountAvgAggregateInputType
    _sum?: UserWithdrawAccountSumAggregateInputType
    _min?: UserWithdrawAccountMinAggregateInputType
    _max?: UserWithdrawAccountMaxAggregateInputType
  }

  export type UserWithdrawAccountGroupByOutputType = {
    user_withdraw_account_id: number
    user_id: number
    account_type: string
    account_name: string
    account_id: number
    delete_status: number
    register_date: Date
    updated_date: Date
    deleted_date: Date | null
    _count: UserWithdrawAccountCountAggregateOutputType | null
    _avg: UserWithdrawAccountAvgAggregateOutputType | null
    _sum: UserWithdrawAccountSumAggregateOutputType | null
    _min: UserWithdrawAccountMinAggregateOutputType | null
    _max: UserWithdrawAccountMaxAggregateOutputType | null
  }

  type GetUserWithdrawAccountGroupByPayload<T extends UserWithdrawAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWithdrawAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserWithdrawAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserWithdrawAccountGroupByOutputType[P]>
            : GetScalarType<T[P], UserWithdrawAccountGroupByOutputType[P]>
        }
      >
    >


  export type UserWithdrawAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_withdraw_account_id?: boolean
    user_id?: boolean
    account_type?: boolean
    account_name?: boolean
    account_id?: boolean
    delete_status?: boolean
    register_date?: boolean
    updated_date?: boolean
    deleted_date?: boolean
  }, ExtArgs["result"]["userWithdrawAccount"]>

  export type UserWithdrawAccountSelectScalar = {
    user_withdraw_account_id?: boolean
    user_id?: boolean
    account_type?: boolean
    account_name?: boolean
    account_id?: boolean
    delete_status?: boolean
    register_date?: boolean
    updated_date?: boolean
    deleted_date?: boolean
  }


  export type $UserWithdrawAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserWithdrawAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      user_withdraw_account_id: number
      user_id: number
      account_type: string
      account_name: string
      account_id: number
      delete_status: number
      register_date: Date
      updated_date: Date
      deleted_date: Date | null
    }, ExtArgs["result"]["userWithdrawAccount"]>
    composites: {}
  }


  type UserWithdrawAccountGetPayload<S extends boolean | null | undefined | UserWithdrawAccountDefaultArgs> = $Result.GetResult<Prisma.$UserWithdrawAccountPayload, S>

  type UserWithdrawAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserWithdrawAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserWithdrawAccountCountAggregateInputType | true
    }

  export interface UserWithdrawAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserWithdrawAccount'], meta: { name: 'UserWithdrawAccount' } }
    /**
     * Find zero or one UserWithdrawAccount that matches the filter.
     * @param {UserWithdrawAccountFindUniqueArgs} args - Arguments to find a UserWithdrawAccount
     * @example
     * // Get one UserWithdrawAccount
     * const userWithdrawAccount = await prisma.userWithdrawAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserWithdrawAccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserWithdrawAccountFindUniqueArgs<ExtArgs>>
    ): Prisma__UserWithdrawAccountClient<$Result.GetResult<Prisma.$UserWithdrawAccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserWithdrawAccount that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserWithdrawAccountFindUniqueOrThrowArgs} args - Arguments to find a UserWithdrawAccount
     * @example
     * // Get one UserWithdrawAccount
     * const userWithdrawAccount = await prisma.userWithdrawAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserWithdrawAccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserWithdrawAccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserWithdrawAccountClient<$Result.GetResult<Prisma.$UserWithdrawAccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserWithdrawAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWithdrawAccountFindFirstArgs} args - Arguments to find a UserWithdrawAccount
     * @example
     * // Get one UserWithdrawAccount
     * const userWithdrawAccount = await prisma.userWithdrawAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserWithdrawAccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserWithdrawAccountFindFirstArgs<ExtArgs>>
    ): Prisma__UserWithdrawAccountClient<$Result.GetResult<Prisma.$UserWithdrawAccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserWithdrawAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWithdrawAccountFindFirstOrThrowArgs} args - Arguments to find a UserWithdrawAccount
     * @example
     * // Get one UserWithdrawAccount
     * const userWithdrawAccount = await prisma.userWithdrawAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserWithdrawAccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserWithdrawAccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserWithdrawAccountClient<$Result.GetResult<Prisma.$UserWithdrawAccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserWithdrawAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWithdrawAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserWithdrawAccounts
     * const userWithdrawAccounts = await prisma.userWithdrawAccount.findMany()
     * 
     * // Get first 10 UserWithdrawAccounts
     * const userWithdrawAccounts = await prisma.userWithdrawAccount.findMany({ take: 10 })
     * 
     * // Only select the `user_withdraw_account_id`
     * const userWithdrawAccountWithUser_withdraw_account_idOnly = await prisma.userWithdrawAccount.findMany({ select: { user_withdraw_account_id: true } })
     * 
    **/
    findMany<T extends UserWithdrawAccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserWithdrawAccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWithdrawAccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserWithdrawAccount.
     * @param {UserWithdrawAccountCreateArgs} args - Arguments to create a UserWithdrawAccount.
     * @example
     * // Create one UserWithdrawAccount
     * const UserWithdrawAccount = await prisma.userWithdrawAccount.create({
     *   data: {
     *     // ... data to create a UserWithdrawAccount
     *   }
     * })
     * 
    **/
    create<T extends UserWithdrawAccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserWithdrawAccountCreateArgs<ExtArgs>>
    ): Prisma__UserWithdrawAccountClient<$Result.GetResult<Prisma.$UserWithdrawAccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserWithdrawAccounts.
     *     @param {UserWithdrawAccountCreateManyArgs} args - Arguments to create many UserWithdrawAccounts.
     *     @example
     *     // Create many UserWithdrawAccounts
     *     const userWithdrawAccount = await prisma.userWithdrawAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserWithdrawAccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserWithdrawAccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserWithdrawAccount.
     * @param {UserWithdrawAccountDeleteArgs} args - Arguments to delete one UserWithdrawAccount.
     * @example
     * // Delete one UserWithdrawAccount
     * const UserWithdrawAccount = await prisma.userWithdrawAccount.delete({
     *   where: {
     *     // ... filter to delete one UserWithdrawAccount
     *   }
     * })
     * 
    **/
    delete<T extends UserWithdrawAccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserWithdrawAccountDeleteArgs<ExtArgs>>
    ): Prisma__UserWithdrawAccountClient<$Result.GetResult<Prisma.$UserWithdrawAccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserWithdrawAccount.
     * @param {UserWithdrawAccountUpdateArgs} args - Arguments to update one UserWithdrawAccount.
     * @example
     * // Update one UserWithdrawAccount
     * const userWithdrawAccount = await prisma.userWithdrawAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserWithdrawAccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserWithdrawAccountUpdateArgs<ExtArgs>>
    ): Prisma__UserWithdrawAccountClient<$Result.GetResult<Prisma.$UserWithdrawAccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserWithdrawAccounts.
     * @param {UserWithdrawAccountDeleteManyArgs} args - Arguments to filter UserWithdrawAccounts to delete.
     * @example
     * // Delete a few UserWithdrawAccounts
     * const { count } = await prisma.userWithdrawAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserWithdrawAccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserWithdrawAccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWithdrawAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWithdrawAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserWithdrawAccounts
     * const userWithdrawAccount = await prisma.userWithdrawAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserWithdrawAccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserWithdrawAccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserWithdrawAccount.
     * @param {UserWithdrawAccountUpsertArgs} args - Arguments to update or create a UserWithdrawAccount.
     * @example
     * // Update or create a UserWithdrawAccount
     * const userWithdrawAccount = await prisma.userWithdrawAccount.upsert({
     *   create: {
     *     // ... data to create a UserWithdrawAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserWithdrawAccount we want to update
     *   }
     * })
    **/
    upsert<T extends UserWithdrawAccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserWithdrawAccountUpsertArgs<ExtArgs>>
    ): Prisma__UserWithdrawAccountClient<$Result.GetResult<Prisma.$UserWithdrawAccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserWithdrawAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWithdrawAccountCountArgs} args - Arguments to filter UserWithdrawAccounts to count.
     * @example
     * // Count the number of UserWithdrawAccounts
     * const count = await prisma.userWithdrawAccount.count({
     *   where: {
     *     // ... the filter for the UserWithdrawAccounts we want to count
     *   }
     * })
    **/
    count<T extends UserWithdrawAccountCountArgs>(
      args?: Subset<T, UserWithdrawAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserWithdrawAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserWithdrawAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWithdrawAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserWithdrawAccountAggregateArgs>(args: Subset<T, UserWithdrawAccountAggregateArgs>): Prisma.PrismaPromise<GetUserWithdrawAccountAggregateType<T>>

    /**
     * Group by UserWithdrawAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWithdrawAccountGroupByArgs} args - Group by arguments.
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
      T extends UserWithdrawAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserWithdrawAccountGroupByArgs['orderBy'] }
        : { orderBy?: UserWithdrawAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserWithdrawAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserWithdrawAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserWithdrawAccount model
   */
  readonly fields: UserWithdrawAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserWithdrawAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserWithdrawAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserWithdrawAccount model
   */ 
  interface UserWithdrawAccountFieldRefs {
    readonly user_withdraw_account_id: FieldRef<"UserWithdrawAccount", 'Int'>
    readonly user_id: FieldRef<"UserWithdrawAccount", 'Int'>
    readonly account_type: FieldRef<"UserWithdrawAccount", 'String'>
    readonly account_name: FieldRef<"UserWithdrawAccount", 'String'>
    readonly account_id: FieldRef<"UserWithdrawAccount", 'Int'>
    readonly delete_status: FieldRef<"UserWithdrawAccount", 'Int'>
    readonly register_date: FieldRef<"UserWithdrawAccount", 'DateTime'>
    readonly updated_date: FieldRef<"UserWithdrawAccount", 'DateTime'>
    readonly deleted_date: FieldRef<"UserWithdrawAccount", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserWithdrawAccount findUnique
   */
  export type UserWithdrawAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null
    /**
     * Filter, which UserWithdrawAccount to fetch.
     */
    where: UserWithdrawAccountWhereUniqueInput
  }


  /**
   * UserWithdrawAccount findUniqueOrThrow
   */
  export type UserWithdrawAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null
    /**
     * Filter, which UserWithdrawAccount to fetch.
     */
    where: UserWithdrawAccountWhereUniqueInput
  }


  /**
   * UserWithdrawAccount findFirst
   */
  export type UserWithdrawAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null
    /**
     * Filter, which UserWithdrawAccount to fetch.
     */
    where?: UserWithdrawAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWithdrawAccounts to fetch.
     */
    orderBy?: UserWithdrawAccountOrderByWithRelationInput | UserWithdrawAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWithdrawAccounts.
     */
    cursor?: UserWithdrawAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWithdrawAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWithdrawAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWithdrawAccounts.
     */
    distinct?: UserWithdrawAccountScalarFieldEnum | UserWithdrawAccountScalarFieldEnum[]
  }


  /**
   * UserWithdrawAccount findFirstOrThrow
   */
  export type UserWithdrawAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null
    /**
     * Filter, which UserWithdrawAccount to fetch.
     */
    where?: UserWithdrawAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWithdrawAccounts to fetch.
     */
    orderBy?: UserWithdrawAccountOrderByWithRelationInput | UserWithdrawAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWithdrawAccounts.
     */
    cursor?: UserWithdrawAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWithdrawAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWithdrawAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWithdrawAccounts.
     */
    distinct?: UserWithdrawAccountScalarFieldEnum | UserWithdrawAccountScalarFieldEnum[]
  }


  /**
   * UserWithdrawAccount findMany
   */
  export type UserWithdrawAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null
    /**
     * Filter, which UserWithdrawAccounts to fetch.
     */
    where?: UserWithdrawAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWithdrawAccounts to fetch.
     */
    orderBy?: UserWithdrawAccountOrderByWithRelationInput | UserWithdrawAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserWithdrawAccounts.
     */
    cursor?: UserWithdrawAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWithdrawAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWithdrawAccounts.
     */
    skip?: number
    distinct?: UserWithdrawAccountScalarFieldEnum | UserWithdrawAccountScalarFieldEnum[]
  }


  /**
   * UserWithdrawAccount create
   */
  export type UserWithdrawAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null
    /**
     * The data needed to create a UserWithdrawAccount.
     */
    data: XOR<UserWithdrawAccountCreateInput, UserWithdrawAccountUncheckedCreateInput>
  }


  /**
   * UserWithdrawAccount createMany
   */
  export type UserWithdrawAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserWithdrawAccounts.
     */
    data: UserWithdrawAccountCreateManyInput | UserWithdrawAccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserWithdrawAccount update
   */
  export type UserWithdrawAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null
    /**
     * The data needed to update a UserWithdrawAccount.
     */
    data: XOR<UserWithdrawAccountUpdateInput, UserWithdrawAccountUncheckedUpdateInput>
    /**
     * Choose, which UserWithdrawAccount to update.
     */
    where: UserWithdrawAccountWhereUniqueInput
  }


  /**
   * UserWithdrawAccount updateMany
   */
  export type UserWithdrawAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserWithdrawAccounts.
     */
    data: XOR<UserWithdrawAccountUpdateManyMutationInput, UserWithdrawAccountUncheckedUpdateManyInput>
    /**
     * Filter which UserWithdrawAccounts to update
     */
    where?: UserWithdrawAccountWhereInput
  }


  /**
   * UserWithdrawAccount upsert
   */
  export type UserWithdrawAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null
    /**
     * The filter to search for the UserWithdrawAccount to update in case it exists.
     */
    where: UserWithdrawAccountWhereUniqueInput
    /**
     * In case the UserWithdrawAccount found by the `where` argument doesn't exist, create a new UserWithdrawAccount with this data.
     */
    create: XOR<UserWithdrawAccountCreateInput, UserWithdrawAccountUncheckedCreateInput>
    /**
     * In case the UserWithdrawAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserWithdrawAccountUpdateInput, UserWithdrawAccountUncheckedUpdateInput>
  }


  /**
   * UserWithdrawAccount delete
   */
  export type UserWithdrawAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null
    /**
     * Filter which UserWithdrawAccount to delete.
     */
    where: UserWithdrawAccountWhereUniqueInput
  }


  /**
   * UserWithdrawAccount deleteMany
   */
  export type UserWithdrawAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWithdrawAccounts to delete
     */
    where?: UserWithdrawAccountWhereInput
  }


  /**
   * UserWithdrawAccount without action
   */
  export type UserWithdrawAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null
  }



  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    wallet_id: number | null
    user_id: number | null
    game_amount: Decimal | null
    main_amount: Decimal | null
    agent_id: number | null
    delete_status: number | null
  }

  export type WalletSumAggregateOutputType = {
    wallet_id: number | null
    user_id: number | null
    game_amount: Decimal | null
    main_amount: Decimal | null
    agent_id: number | null
    delete_status: number | null
  }

  export type WalletMinAggregateOutputType = {
    wallet_id: number | null
    user_id: number | null
    game_amount: Decimal | null
    main_amount: Decimal | null
    agent_id: number | null
    delete_status: number | null
    register_date: Date | null
    updated_date: Date | null
    deleted_date: Date | null
  }

  export type WalletMaxAggregateOutputType = {
    wallet_id: number | null
    user_id: number | null
    game_amount: Decimal | null
    main_amount: Decimal | null
    agent_id: number | null
    delete_status: number | null
    register_date: Date | null
    updated_date: Date | null
    deleted_date: Date | null
  }

  export type WalletCountAggregateOutputType = {
    wallet_id: number
    user_id: number
    game_amount: number
    main_amount: number
    agent_id: number
    delete_status: number
    register_date: number
    updated_date: number
    deleted_date: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    wallet_id?: true
    user_id?: true
    game_amount?: true
    main_amount?: true
    agent_id?: true
    delete_status?: true
  }

  export type WalletSumAggregateInputType = {
    wallet_id?: true
    user_id?: true
    game_amount?: true
    main_amount?: true
    agent_id?: true
    delete_status?: true
  }

  export type WalletMinAggregateInputType = {
    wallet_id?: true
    user_id?: true
    game_amount?: true
    main_amount?: true
    agent_id?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
  }

  export type WalletMaxAggregateInputType = {
    wallet_id?: true
    user_id?: true
    game_amount?: true
    main_amount?: true
    agent_id?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
  }

  export type WalletCountAggregateInputType = {
    wallet_id?: true
    user_id?: true
    game_amount?: true
    main_amount?: true
    agent_id?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    wallet_id: number
    user_id: number
    game_amount: Decimal | null
    main_amount: Decimal | null
    agent_id: number
    delete_status: number
    register_date: Date
    updated_date: Date
    deleted_date: Date | null
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wallet_id?: boolean
    user_id?: boolean
    game_amount?: boolean
    main_amount?: boolean
    agent_id?: boolean
    delete_status?: boolean
    register_date?: boolean
    updated_date?: boolean
    deleted_date?: boolean
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectScalar = {
    wallet_id?: boolean
    user_id?: boolean
    game_amount?: boolean
    main_amount?: boolean
    agent_id?: boolean
    delete_status?: boolean
    register_date?: boolean
    updated_date?: boolean
    deleted_date?: boolean
  }


  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      wallet_id: number
      user_id: number
      game_amount: Prisma.Decimal | null
      main_amount: Prisma.Decimal | null
      agent_id: number
      delete_status: number
      register_date: Date
      updated_date: Date
      deleted_date: Date | null
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }


  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WalletFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>
    ): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Wallet that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WalletFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>
    ): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `wallet_id`
     * const walletWithWallet_idOnly = await prisma.wallet.findMany({ select: { wallet_id: true } })
     * 
    **/
    findMany<T extends WalletFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
    **/
    create<T extends WalletCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WalletCreateArgs<ExtArgs>>
    ): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Wallets.
     *     @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     *     @example
     *     // Create many Wallets
     *     const wallet = await prisma.wallet.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WalletCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
    **/
    delete<T extends WalletDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>
    ): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WalletUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>
    ): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WalletDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WalletUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
    **/
    upsert<T extends WalletUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>
    ): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
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
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Wallet model
   */ 
  interface WalletFieldRefs {
    readonly wallet_id: FieldRef<"Wallet", 'Int'>
    readonly user_id: FieldRef<"Wallet", 'Int'>
    readonly game_amount: FieldRef<"Wallet", 'Decimal'>
    readonly main_amount: FieldRef<"Wallet", 'Decimal'>
    readonly agent_id: FieldRef<"Wallet", 'Int'>
    readonly delete_status: FieldRef<"Wallet", 'Int'>
    readonly register_date: FieldRef<"Wallet", 'DateTime'>
    readonly updated_date: FieldRef<"Wallet", 'DateTime'>
    readonly deleted_date: FieldRef<"Wallet", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }


  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }


  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }


  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }


  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }


  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }


  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }


  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
  }


  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }


  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }


  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
  }


  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
  }



  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodAvgAggregateOutputType = {
    payment_id: number | null
    user_id: number | null
    amount: Decimal | null
    approve_reject: number | null
    payment_confirm_code: number | null
    delete_status: number | null
  }

  export type PaymentMethodSumAggregateOutputType = {
    payment_id: number | null
    user_id: number | null
    amount: Decimal | null
    approve_reject: number | null
    payment_confirm_code: number | null
    delete_status: number | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    payment_id: number | null
    user_id: number | null
    payment_type: string | null
    payment_account_name: string | null
    payment_account: string | null
    reciver_account_type: string | null
    receiver_account_name: string | null
    receiver_account: string | null
    amount: Decimal | null
    date: Date | null
    approve_reject: number | null
    reason_for_reject: string | null
    payment_confirm_code: number | null
    delete_status: number | null
    register_date: Date | null
    updated_date: Date | null
    deleted_date: Date | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    payment_id: number | null
    user_id: number | null
    payment_type: string | null
    payment_account_name: string | null
    payment_account: string | null
    reciver_account_type: string | null
    receiver_account_name: string | null
    receiver_account: string | null
    amount: Decimal | null
    date: Date | null
    approve_reject: number | null
    reason_for_reject: string | null
    payment_confirm_code: number | null
    delete_status: number | null
    register_date: Date | null
    updated_date: Date | null
    deleted_date: Date | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    payment_id: number
    user_id: number
    payment_type: number
    payment_account_name: number
    payment_account: number
    reciver_account_type: number
    receiver_account_name: number
    receiver_account: number
    amount: number
    date: number
    approve_reject: number
    reason_for_reject: number
    payment_confirm_code: number
    delete_status: number
    register_date: number
    updated_date: number
    deleted_date: number
    _all: number
  }


  export type PaymentMethodAvgAggregateInputType = {
    payment_id?: true
    user_id?: true
    amount?: true
    approve_reject?: true
    payment_confirm_code?: true
    delete_status?: true
  }

  export type PaymentMethodSumAggregateInputType = {
    payment_id?: true
    user_id?: true
    amount?: true
    approve_reject?: true
    payment_confirm_code?: true
    delete_status?: true
  }

  export type PaymentMethodMinAggregateInputType = {
    payment_id?: true
    user_id?: true
    payment_type?: true
    payment_account_name?: true
    payment_account?: true
    reciver_account_type?: true
    receiver_account_name?: true
    receiver_account?: true
    amount?: true
    date?: true
    approve_reject?: true
    reason_for_reject?: true
    payment_confirm_code?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    payment_id?: true
    user_id?: true
    payment_type?: true
    payment_account_name?: true
    payment_account?: true
    reciver_account_type?: true
    receiver_account_name?: true
    receiver_account?: true
    amount?: true
    date?: true
    approve_reject?: true
    reason_for_reject?: true
    payment_confirm_code?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    payment_id?: true
    user_id?: true
    payment_type?: true
    payment_account_name?: true
    payment_account?: true
    reciver_account_type?: true
    receiver_account_name?: true
    receiver_account?: true
    amount?: true
    date?: true
    approve_reject?: true
    reason_for_reject?: true
    payment_confirm_code?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithAggregationInput | PaymentMethodOrderByWithAggregationInput[]
    by: PaymentMethodScalarFieldEnum[] | PaymentMethodScalarFieldEnum
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _avg?: PaymentMethodAvgAggregateInputType
    _sum?: PaymentMethodSumAggregateInputType
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    payment_id: number
    user_id: number
    payment_type: string
    payment_account_name: string
    payment_account: string
    reciver_account_type: string
    receiver_account_name: string
    receiver_account: string
    amount: Decimal
    date: Date
    approve_reject: number
    reason_for_reject: string | null
    payment_confirm_code: number
    delete_status: number
    register_date: Date
    updated_date: Date
    deleted_date: Date | null
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    user_id?: boolean
    payment_type?: boolean
    payment_account_name?: boolean
    payment_account?: boolean
    reciver_account_type?: boolean
    receiver_account_name?: boolean
    receiver_account?: boolean
    amount?: boolean
    date?: boolean
    approve_reject?: boolean
    reason_for_reject?: boolean
    payment_confirm_code?: boolean
    delete_status?: boolean
    register_date?: boolean
    updated_date?: boolean
    deleted_date?: boolean
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectScalar = {
    payment_id?: boolean
    user_id?: boolean
    payment_type?: boolean
    payment_account_name?: boolean
    payment_account?: boolean
    reciver_account_type?: boolean
    receiver_account_name?: boolean
    receiver_account?: boolean
    amount?: boolean
    date?: boolean
    approve_reject?: boolean
    reason_for_reject?: boolean
    payment_confirm_code?: boolean
    delete_status?: boolean
    register_date?: boolean
    updated_date?: boolean
    deleted_date?: boolean
  }


  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      payment_id: number
      user_id: number
      payment_type: string
      payment_account_name: string
      payment_account: string
      reciver_account_type: string
      receiver_account_name: string
      receiver_account: string
      amount: Prisma.Decimal
      date: Date
      approve_reject: number
      reason_for_reject: string | null
      payment_confirm_code: number
      delete_status: number
      register_date: Date
      updated_date: Date
      deleted_date: Date | null
    }, ExtArgs["result"]["paymentMethod"]>
    composites: {}
  }


  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentMethodFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PaymentMethod that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentMethodFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentMethodWithPayment_idOnly = await prisma.paymentMethod.findMany({ select: { payment_id: true } })
     * 
    **/
    findMany<T extends PaymentMethodFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
    **/
    create<T extends PaymentMethodCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>
    ): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PaymentMethods.
     *     @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     *     @example
     *     // Create many PaymentMethods
     *     const paymentMethod = await prisma.paymentMethod.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentMethodCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
    **/
    delete<T extends PaymentMethodDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>
    ): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentMethodUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>
    ): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentMethodDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentMethodUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentMethodUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>
    ): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
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
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethod model
   */
  readonly fields: PaymentMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PaymentMethod model
   */ 
  interface PaymentMethodFieldRefs {
    readonly payment_id: FieldRef<"PaymentMethod", 'Int'>
    readonly user_id: FieldRef<"PaymentMethod", 'Int'>
    readonly payment_type: FieldRef<"PaymentMethod", 'String'>
    readonly payment_account_name: FieldRef<"PaymentMethod", 'String'>
    readonly payment_account: FieldRef<"PaymentMethod", 'String'>
    readonly reciver_account_type: FieldRef<"PaymentMethod", 'String'>
    readonly receiver_account_name: FieldRef<"PaymentMethod", 'String'>
    readonly receiver_account: FieldRef<"PaymentMethod", 'String'>
    readonly amount: FieldRef<"PaymentMethod", 'Decimal'>
    readonly date: FieldRef<"PaymentMethod", 'DateTime'>
    readonly approve_reject: FieldRef<"PaymentMethod", 'Int'>
    readonly reason_for_reject: FieldRef<"PaymentMethod", 'String'>
    readonly payment_confirm_code: FieldRef<"PaymentMethod", 'Int'>
    readonly delete_status: FieldRef<"PaymentMethod", 'Int'>
    readonly register_date: FieldRef<"PaymentMethod", 'DateTime'>
    readonly updated_date: FieldRef<"PaymentMethod", 'DateTime'>
    readonly deleted_date: FieldRef<"PaymentMethod", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * PaymentMethod findUnique
   */
  export type PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }


  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }


  /**
   * PaymentMethod findFirst
   */
  export type PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }


  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }


  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }


  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }


  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }


  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
  }


  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }


  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }


  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput
  }


  /**
   * PaymentMethod without action
   */
  export type PaymentMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
  }



  /**
   * Model WithdrawMethod
   */

  export type AggregateWithdrawMethod = {
    _count: WithdrawMethodCountAggregateOutputType | null
    _avg: WithdrawMethodAvgAggregateOutputType | null
    _sum: WithdrawMethodSumAggregateOutputType | null
    _min: WithdrawMethodMinAggregateOutputType | null
    _max: WithdrawMethodMaxAggregateOutputType | null
  }

  export type WithdrawMethodAvgAggregateOutputType = {
    withdraw_id: number | null
    user_id: number | null
    amount: Decimal | null
    is_verify: number | null
    approve_reject: number | null
    delete_status: number | null
  }

  export type WithdrawMethodSumAggregateOutputType = {
    withdraw_id: number | null
    user_id: number | null
    amount: Decimal | null
    is_verify: number | null
    approve_reject: number | null
    delete_status: number | null
  }

  export type WithdrawMethodMinAggregateOutputType = {
    withdraw_id: number | null
    user_id: number | null
    withdraw_type: string | null
    receiver_account_name: string | null
    receiver_account: string | null
    amount: Decimal | null
    date: Date | null
    withdraw_confirm_code: string | null
    is_verify: number | null
    approve_reject: number | null
    reason_for_reject: string | null
    delete_status: number | null
    register_date: Date | null
    updated_date: Date | null
    deleted_date: Date | null
  }

  export type WithdrawMethodMaxAggregateOutputType = {
    withdraw_id: number | null
    user_id: number | null
    withdraw_type: string | null
    receiver_account_name: string | null
    receiver_account: string | null
    amount: Decimal | null
    date: Date | null
    withdraw_confirm_code: string | null
    is_verify: number | null
    approve_reject: number | null
    reason_for_reject: string | null
    delete_status: number | null
    register_date: Date | null
    updated_date: Date | null
    deleted_date: Date | null
  }

  export type WithdrawMethodCountAggregateOutputType = {
    withdraw_id: number
    user_id: number
    withdraw_type: number
    receiver_account_name: number
    receiver_account: number
    amount: number
    date: number
    withdraw_confirm_code: number
    is_verify: number
    approve_reject: number
    reason_for_reject: number
    delete_status: number
    register_date: number
    updated_date: number
    deleted_date: number
    _all: number
  }


  export type WithdrawMethodAvgAggregateInputType = {
    withdraw_id?: true
    user_id?: true
    amount?: true
    is_verify?: true
    approve_reject?: true
    delete_status?: true
  }

  export type WithdrawMethodSumAggregateInputType = {
    withdraw_id?: true
    user_id?: true
    amount?: true
    is_verify?: true
    approve_reject?: true
    delete_status?: true
  }

  export type WithdrawMethodMinAggregateInputType = {
    withdraw_id?: true
    user_id?: true
    withdraw_type?: true
    receiver_account_name?: true
    receiver_account?: true
    amount?: true
    date?: true
    withdraw_confirm_code?: true
    is_verify?: true
    approve_reject?: true
    reason_for_reject?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
  }

  export type WithdrawMethodMaxAggregateInputType = {
    withdraw_id?: true
    user_id?: true
    withdraw_type?: true
    receiver_account_name?: true
    receiver_account?: true
    amount?: true
    date?: true
    withdraw_confirm_code?: true
    is_verify?: true
    approve_reject?: true
    reason_for_reject?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
  }

  export type WithdrawMethodCountAggregateInputType = {
    withdraw_id?: true
    user_id?: true
    withdraw_type?: true
    receiver_account_name?: true
    receiver_account?: true
    amount?: true
    date?: true
    withdraw_confirm_code?: true
    is_verify?: true
    approve_reject?: true
    reason_for_reject?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
    _all?: true
  }

  export type WithdrawMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WithdrawMethod to aggregate.
     */
    where?: WithdrawMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawMethods to fetch.
     */
    orderBy?: WithdrawMethodOrderByWithRelationInput | WithdrawMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WithdrawMethods
    **/
    _count?: true | WithdrawMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawMethodMaxAggregateInputType
  }

  export type GetWithdrawMethodAggregateType<T extends WithdrawMethodAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawMethod[P]>
      : GetScalarType<T[P], AggregateWithdrawMethod[P]>
  }




  export type WithdrawMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawMethodWhereInput
    orderBy?: WithdrawMethodOrderByWithAggregationInput | WithdrawMethodOrderByWithAggregationInput[]
    by: WithdrawMethodScalarFieldEnum[] | WithdrawMethodScalarFieldEnum
    having?: WithdrawMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawMethodCountAggregateInputType | true
    _avg?: WithdrawMethodAvgAggregateInputType
    _sum?: WithdrawMethodSumAggregateInputType
    _min?: WithdrawMethodMinAggregateInputType
    _max?: WithdrawMethodMaxAggregateInputType
  }

  export type WithdrawMethodGroupByOutputType = {
    withdraw_id: number
    user_id: number
    withdraw_type: string
    receiver_account_name: string
    receiver_account: string
    amount: Decimal
    date: Date
    withdraw_confirm_code: string | null
    is_verify: number | null
    approve_reject: number
    reason_for_reject: string | null
    delete_status: number
    register_date: Date
    updated_date: Date
    deleted_date: Date | null
    _count: WithdrawMethodCountAggregateOutputType | null
    _avg: WithdrawMethodAvgAggregateOutputType | null
    _sum: WithdrawMethodSumAggregateOutputType | null
    _min: WithdrawMethodMinAggregateOutputType | null
    _max: WithdrawMethodMaxAggregateOutputType | null
  }

  type GetWithdrawMethodGroupByPayload<T extends WithdrawMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawMethodGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawMethodGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    withdraw_id?: boolean
    user_id?: boolean
    withdraw_type?: boolean
    receiver_account_name?: boolean
    receiver_account?: boolean
    amount?: boolean
    date?: boolean
    withdraw_confirm_code?: boolean
    is_verify?: boolean
    approve_reject?: boolean
    reason_for_reject?: boolean
    delete_status?: boolean
    register_date?: boolean
    updated_date?: boolean
    deleted_date?: boolean
  }, ExtArgs["result"]["withdrawMethod"]>

  export type WithdrawMethodSelectScalar = {
    withdraw_id?: boolean
    user_id?: boolean
    withdraw_type?: boolean
    receiver_account_name?: boolean
    receiver_account?: boolean
    amount?: boolean
    date?: boolean
    withdraw_confirm_code?: boolean
    is_verify?: boolean
    approve_reject?: boolean
    reason_for_reject?: boolean
    delete_status?: boolean
    register_date?: boolean
    updated_date?: boolean
    deleted_date?: boolean
  }


  export type $WithdrawMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WithdrawMethod"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      withdraw_id: number
      user_id: number
      withdraw_type: string
      receiver_account_name: string
      receiver_account: string
      amount: Prisma.Decimal
      date: Date
      withdraw_confirm_code: string | null
      is_verify: number | null
      approve_reject: number
      reason_for_reject: string | null
      delete_status: number
      register_date: Date
      updated_date: Date
      deleted_date: Date | null
    }, ExtArgs["result"]["withdrawMethod"]>
    composites: {}
  }


  type WithdrawMethodGetPayload<S extends boolean | null | undefined | WithdrawMethodDefaultArgs> = $Result.GetResult<Prisma.$WithdrawMethodPayload, S>

  type WithdrawMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WithdrawMethodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WithdrawMethodCountAggregateInputType | true
    }

  export interface WithdrawMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WithdrawMethod'], meta: { name: 'WithdrawMethod' } }
    /**
     * Find zero or one WithdrawMethod that matches the filter.
     * @param {WithdrawMethodFindUniqueArgs} args - Arguments to find a WithdrawMethod
     * @example
     * // Get one WithdrawMethod
     * const withdrawMethod = await prisma.withdrawMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WithdrawMethodFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawMethodFindUniqueArgs<ExtArgs>>
    ): Prisma__WithdrawMethodClient<$Result.GetResult<Prisma.$WithdrawMethodPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WithdrawMethod that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WithdrawMethodFindUniqueOrThrowArgs} args - Arguments to find a WithdrawMethod
     * @example
     * // Get one WithdrawMethod
     * const withdrawMethod = await prisma.withdrawMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WithdrawMethodFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawMethodFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WithdrawMethodClient<$Result.GetResult<Prisma.$WithdrawMethodPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WithdrawMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawMethodFindFirstArgs} args - Arguments to find a WithdrawMethod
     * @example
     * // Get one WithdrawMethod
     * const withdrawMethod = await prisma.withdrawMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WithdrawMethodFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawMethodFindFirstArgs<ExtArgs>>
    ): Prisma__WithdrawMethodClient<$Result.GetResult<Prisma.$WithdrawMethodPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WithdrawMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawMethodFindFirstOrThrowArgs} args - Arguments to find a WithdrawMethod
     * @example
     * // Get one WithdrawMethod
     * const withdrawMethod = await prisma.withdrawMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WithdrawMethodFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawMethodFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WithdrawMethodClient<$Result.GetResult<Prisma.$WithdrawMethodPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WithdrawMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawMethodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WithdrawMethods
     * const withdrawMethods = await prisma.withdrawMethod.findMany()
     * 
     * // Get first 10 WithdrawMethods
     * const withdrawMethods = await prisma.withdrawMethod.findMany({ take: 10 })
     * 
     * // Only select the `withdraw_id`
     * const withdrawMethodWithWithdraw_idOnly = await prisma.withdrawMethod.findMany({ select: { withdraw_id: true } })
     * 
    **/
    findMany<T extends WithdrawMethodFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawMethodFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawMethodPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WithdrawMethod.
     * @param {WithdrawMethodCreateArgs} args - Arguments to create a WithdrawMethod.
     * @example
     * // Create one WithdrawMethod
     * const WithdrawMethod = await prisma.withdrawMethod.create({
     *   data: {
     *     // ... data to create a WithdrawMethod
     *   }
     * })
     * 
    **/
    create<T extends WithdrawMethodCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawMethodCreateArgs<ExtArgs>>
    ): Prisma__WithdrawMethodClient<$Result.GetResult<Prisma.$WithdrawMethodPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WithdrawMethods.
     *     @param {WithdrawMethodCreateManyArgs} args - Arguments to create many WithdrawMethods.
     *     @example
     *     // Create many WithdrawMethods
     *     const withdrawMethod = await prisma.withdrawMethod.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WithdrawMethodCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawMethodCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WithdrawMethod.
     * @param {WithdrawMethodDeleteArgs} args - Arguments to delete one WithdrawMethod.
     * @example
     * // Delete one WithdrawMethod
     * const WithdrawMethod = await prisma.withdrawMethod.delete({
     *   where: {
     *     // ... filter to delete one WithdrawMethod
     *   }
     * })
     * 
    **/
    delete<T extends WithdrawMethodDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawMethodDeleteArgs<ExtArgs>>
    ): Prisma__WithdrawMethodClient<$Result.GetResult<Prisma.$WithdrawMethodPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WithdrawMethod.
     * @param {WithdrawMethodUpdateArgs} args - Arguments to update one WithdrawMethod.
     * @example
     * // Update one WithdrawMethod
     * const withdrawMethod = await prisma.withdrawMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WithdrawMethodUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawMethodUpdateArgs<ExtArgs>>
    ): Prisma__WithdrawMethodClient<$Result.GetResult<Prisma.$WithdrawMethodPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WithdrawMethods.
     * @param {WithdrawMethodDeleteManyArgs} args - Arguments to filter WithdrawMethods to delete.
     * @example
     * // Delete a few WithdrawMethods
     * const { count } = await prisma.withdrawMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WithdrawMethodDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawMethodDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WithdrawMethods
     * const withdrawMethod = await prisma.withdrawMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WithdrawMethodUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawMethodUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WithdrawMethod.
     * @param {WithdrawMethodUpsertArgs} args - Arguments to update or create a WithdrawMethod.
     * @example
     * // Update or create a WithdrawMethod
     * const withdrawMethod = await prisma.withdrawMethod.upsert({
     *   create: {
     *     // ... data to create a WithdrawMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WithdrawMethod we want to update
     *   }
     * })
    **/
    upsert<T extends WithdrawMethodUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawMethodUpsertArgs<ExtArgs>>
    ): Prisma__WithdrawMethodClient<$Result.GetResult<Prisma.$WithdrawMethodPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WithdrawMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawMethodCountArgs} args - Arguments to filter WithdrawMethods to count.
     * @example
     * // Count the number of WithdrawMethods
     * const count = await prisma.withdrawMethod.count({
     *   where: {
     *     // ... the filter for the WithdrawMethods we want to count
     *   }
     * })
    **/
    count<T extends WithdrawMethodCountArgs>(
      args?: Subset<T, WithdrawMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WithdrawMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WithdrawMethodAggregateArgs>(args: Subset<T, WithdrawMethodAggregateArgs>): Prisma.PrismaPromise<GetWithdrawMethodAggregateType<T>>

    /**
     * Group by WithdrawMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawMethodGroupByArgs} args - Group by arguments.
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
      T extends WithdrawMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawMethodGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawMethodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WithdrawMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WithdrawMethod model
   */
  readonly fields: WithdrawMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WithdrawMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WithdrawMethod model
   */ 
  interface WithdrawMethodFieldRefs {
    readonly withdraw_id: FieldRef<"WithdrawMethod", 'Int'>
    readonly user_id: FieldRef<"WithdrawMethod", 'Int'>
    readonly withdraw_type: FieldRef<"WithdrawMethod", 'String'>
    readonly receiver_account_name: FieldRef<"WithdrawMethod", 'String'>
    readonly receiver_account: FieldRef<"WithdrawMethod", 'String'>
    readonly amount: FieldRef<"WithdrawMethod", 'Decimal'>
    readonly date: FieldRef<"WithdrawMethod", 'DateTime'>
    readonly withdraw_confirm_code: FieldRef<"WithdrawMethod", 'String'>
    readonly is_verify: FieldRef<"WithdrawMethod", 'Int'>
    readonly approve_reject: FieldRef<"WithdrawMethod", 'Int'>
    readonly reason_for_reject: FieldRef<"WithdrawMethod", 'String'>
    readonly delete_status: FieldRef<"WithdrawMethod", 'Int'>
    readonly register_date: FieldRef<"WithdrawMethod", 'DateTime'>
    readonly updated_date: FieldRef<"WithdrawMethod", 'DateTime'>
    readonly deleted_date: FieldRef<"WithdrawMethod", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * WithdrawMethod findUnique
   */
  export type WithdrawMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawMethod
     */
    select?: WithdrawMethodSelect<ExtArgs> | null
    /**
     * Filter, which WithdrawMethod to fetch.
     */
    where: WithdrawMethodWhereUniqueInput
  }


  /**
   * WithdrawMethod findUniqueOrThrow
   */
  export type WithdrawMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawMethod
     */
    select?: WithdrawMethodSelect<ExtArgs> | null
    /**
     * Filter, which WithdrawMethod to fetch.
     */
    where: WithdrawMethodWhereUniqueInput
  }


  /**
   * WithdrawMethod findFirst
   */
  export type WithdrawMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawMethod
     */
    select?: WithdrawMethodSelect<ExtArgs> | null
    /**
     * Filter, which WithdrawMethod to fetch.
     */
    where?: WithdrawMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawMethods to fetch.
     */
    orderBy?: WithdrawMethodOrderByWithRelationInput | WithdrawMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawMethods.
     */
    cursor?: WithdrawMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawMethods.
     */
    distinct?: WithdrawMethodScalarFieldEnum | WithdrawMethodScalarFieldEnum[]
  }


  /**
   * WithdrawMethod findFirstOrThrow
   */
  export type WithdrawMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawMethod
     */
    select?: WithdrawMethodSelect<ExtArgs> | null
    /**
     * Filter, which WithdrawMethod to fetch.
     */
    where?: WithdrawMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawMethods to fetch.
     */
    orderBy?: WithdrawMethodOrderByWithRelationInput | WithdrawMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawMethods.
     */
    cursor?: WithdrawMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawMethods.
     */
    distinct?: WithdrawMethodScalarFieldEnum | WithdrawMethodScalarFieldEnum[]
  }


  /**
   * WithdrawMethod findMany
   */
  export type WithdrawMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawMethod
     */
    select?: WithdrawMethodSelect<ExtArgs> | null
    /**
     * Filter, which WithdrawMethods to fetch.
     */
    where?: WithdrawMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawMethods to fetch.
     */
    orderBy?: WithdrawMethodOrderByWithRelationInput | WithdrawMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WithdrawMethods.
     */
    cursor?: WithdrawMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawMethods.
     */
    skip?: number
    distinct?: WithdrawMethodScalarFieldEnum | WithdrawMethodScalarFieldEnum[]
  }


  /**
   * WithdrawMethod create
   */
  export type WithdrawMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawMethod
     */
    select?: WithdrawMethodSelect<ExtArgs> | null
    /**
     * The data needed to create a WithdrawMethod.
     */
    data: XOR<WithdrawMethodCreateInput, WithdrawMethodUncheckedCreateInput>
  }


  /**
   * WithdrawMethod createMany
   */
  export type WithdrawMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WithdrawMethods.
     */
    data: WithdrawMethodCreateManyInput | WithdrawMethodCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * WithdrawMethod update
   */
  export type WithdrawMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawMethod
     */
    select?: WithdrawMethodSelect<ExtArgs> | null
    /**
     * The data needed to update a WithdrawMethod.
     */
    data: XOR<WithdrawMethodUpdateInput, WithdrawMethodUncheckedUpdateInput>
    /**
     * Choose, which WithdrawMethod to update.
     */
    where: WithdrawMethodWhereUniqueInput
  }


  /**
   * WithdrawMethod updateMany
   */
  export type WithdrawMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WithdrawMethods.
     */
    data: XOR<WithdrawMethodUpdateManyMutationInput, WithdrawMethodUncheckedUpdateManyInput>
    /**
     * Filter which WithdrawMethods to update
     */
    where?: WithdrawMethodWhereInput
  }


  /**
   * WithdrawMethod upsert
   */
  export type WithdrawMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawMethod
     */
    select?: WithdrawMethodSelect<ExtArgs> | null
    /**
     * The filter to search for the WithdrawMethod to update in case it exists.
     */
    where: WithdrawMethodWhereUniqueInput
    /**
     * In case the WithdrawMethod found by the `where` argument doesn't exist, create a new WithdrawMethod with this data.
     */
    create: XOR<WithdrawMethodCreateInput, WithdrawMethodUncheckedCreateInput>
    /**
     * In case the WithdrawMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawMethodUpdateInput, WithdrawMethodUncheckedUpdateInput>
  }


  /**
   * WithdrawMethod delete
   */
  export type WithdrawMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawMethod
     */
    select?: WithdrawMethodSelect<ExtArgs> | null
    /**
     * Filter which WithdrawMethod to delete.
     */
    where: WithdrawMethodWhereUniqueInput
  }


  /**
   * WithdrawMethod deleteMany
   */
  export type WithdrawMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WithdrawMethods to delete
     */
    where?: WithdrawMethodWhereInput
  }


  /**
   * WithdrawMethod without action
   */
  export type WithdrawMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawMethod
     */
    select?: WithdrawMethodSelect<ExtArgs> | null
  }



  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    admin_internal_id: number | null
    delete_status: number | null
  }

  export type AdminSumAggregateOutputType = {
    admin_internal_id: number | null
    delete_status: number | null
  }

  export type AdminMinAggregateOutputType = {
    admin_internal_id: number | null
    admin_id: string | null
    admin_name: string | null
    password: string | null
    account_status: string | null
    delete_status: number | null
    register_date: Date | null
    updated_date: Date | null
    deleted_date: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    admin_internal_id: number | null
    admin_id: string | null
    admin_name: string | null
    password: string | null
    account_status: string | null
    delete_status: number | null
    register_date: Date | null
    updated_date: Date | null
    deleted_date: Date | null
  }

  export type AdminCountAggregateOutputType = {
    admin_internal_id: number
    admin_id: number
    admin_name: number
    password: number
    account_status: number
    delete_status: number
    register_date: number
    updated_date: number
    deleted_date: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    admin_internal_id?: true
    delete_status?: true
  }

  export type AdminSumAggregateInputType = {
    admin_internal_id?: true
    delete_status?: true
  }

  export type AdminMinAggregateInputType = {
    admin_internal_id?: true
    admin_id?: true
    admin_name?: true
    password?: true
    account_status?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
  }

  export type AdminMaxAggregateInputType = {
    admin_internal_id?: true
    admin_id?: true
    admin_name?: true
    password?: true
    account_status?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
  }

  export type AdminCountAggregateInputType = {
    admin_internal_id?: true
    admin_id?: true
    admin_name?: true
    password?: true
    account_status?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    admin_internal_id: number
    admin_id: string
    admin_name: string | null
    password: string | null
    account_status: string | null
    delete_status: number | null
    register_date: Date
    updated_date: Date
    deleted_date: Date | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_internal_id?: boolean
    admin_id?: boolean
    admin_name?: boolean
    password?: boolean
    account_status?: boolean
    delete_status?: boolean
    register_date?: boolean
    updated_date?: boolean
    deleted_date?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    admin_internal_id?: boolean
    admin_id?: boolean
    admin_name?: boolean
    password?: boolean
    account_status?: boolean
    delete_status?: boolean
    register_date?: boolean
    updated_date?: boolean
    deleted_date?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      admin_internal_id: number
      admin_id: string
      admin_name: string | null
      password: string | null
      account_status: string | null
      delete_status: number | null
      register_date: Date
      updated_date: Date
      deleted_date: Date | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }


  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `admin_internal_id`
     * const adminWithAdmin_internal_idOnly = await prisma.admin.findMany({ select: { admin_internal_id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminCreateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly admin_internal_id: FieldRef<"Admin", 'Int'>
    readonly admin_id: FieldRef<"Admin", 'String'>
    readonly admin_name: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly account_status: FieldRef<"Admin", 'String'>
    readonly delete_status: FieldRef<"Admin", 'Int'>
    readonly register_date: FieldRef<"Admin", 'DateTime'>
    readonly updated_date: FieldRef<"Admin", 'DateTime'>
    readonly deleted_date: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }


  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }



  /**
   * Model AdminRoles
   */

  export type AggregateAdminRoles = {
    _count: AdminRolesCountAggregateOutputType | null
    _avg: AdminRolesAvgAggregateOutputType | null
    _sum: AdminRolesSumAggregateOutputType | null
    _min: AdminRolesMinAggregateOutputType | null
    _max: AdminRolesMaxAggregateOutputType | null
  }

  export type AdminRolesAvgAggregateOutputType = {
    role_id: number | null
  }

  export type AdminRolesSumAggregateOutputType = {
    role_id: number | null
  }

  export type AdminRolesMinAggregateOutputType = {
    role_id: number | null
    name: string | null
  }

  export type AdminRolesMaxAggregateOutputType = {
    role_id: number | null
    name: string | null
  }

  export type AdminRolesCountAggregateOutputType = {
    role_id: number
    name: number
    _all: number
  }


  export type AdminRolesAvgAggregateInputType = {
    role_id?: true
  }

  export type AdminRolesSumAggregateInputType = {
    role_id?: true
  }

  export type AdminRolesMinAggregateInputType = {
    role_id?: true
    name?: true
  }

  export type AdminRolesMaxAggregateInputType = {
    role_id?: true
    name?: true
  }

  export type AdminRolesCountAggregateInputType = {
    role_id?: true
    name?: true
    _all?: true
  }

  export type AdminRolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminRoles to aggregate.
     */
    where?: AdminRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?: AdminRolesOrderByWithRelationInput | AdminRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminRoles
    **/
    _count?: true | AdminRolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminRolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminRolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminRolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminRolesMaxAggregateInputType
  }

  export type GetAdminRolesAggregateType<T extends AdminRolesAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminRoles[P]>
      : GetScalarType<T[P], AggregateAdminRoles[P]>
  }




  export type AdminRolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminRolesWhereInput
    orderBy?: AdminRolesOrderByWithAggregationInput | AdminRolesOrderByWithAggregationInput[]
    by: AdminRolesScalarFieldEnum[] | AdminRolesScalarFieldEnum
    having?: AdminRolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminRolesCountAggregateInputType | true
    _avg?: AdminRolesAvgAggregateInputType
    _sum?: AdminRolesSumAggregateInputType
    _min?: AdminRolesMinAggregateInputType
    _max?: AdminRolesMaxAggregateInputType
  }

  export type AdminRolesGroupByOutputType = {
    role_id: number
    name: string
    _count: AdminRolesCountAggregateOutputType | null
    _avg: AdminRolesAvgAggregateOutputType | null
    _sum: AdminRolesSumAggregateOutputType | null
    _min: AdminRolesMinAggregateOutputType | null
    _max: AdminRolesMaxAggregateOutputType | null
  }

  type GetAdminRolesGroupByPayload<T extends AdminRolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminRolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminRolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminRolesGroupByOutputType[P]>
            : GetScalarType<T[P], AdminRolesGroupByOutputType[P]>
        }
      >
    >


  export type AdminRolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    name?: boolean
  }, ExtArgs["result"]["adminRoles"]>

  export type AdminRolesSelectScalar = {
    role_id?: boolean
    name?: boolean
  }


  export type $AdminRolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminRoles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      name: string
    }, ExtArgs["result"]["adminRoles"]>
    composites: {}
  }


  type AdminRolesGetPayload<S extends boolean | null | undefined | AdminRolesDefaultArgs> = $Result.GetResult<Prisma.$AdminRolesPayload, S>

  type AdminRolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminRolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminRolesCountAggregateInputType | true
    }

  export interface AdminRolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminRoles'], meta: { name: 'AdminRoles' } }
    /**
     * Find zero or one AdminRoles that matches the filter.
     * @param {AdminRolesFindUniqueArgs} args - Arguments to find a AdminRoles
     * @example
     * // Get one AdminRoles
     * const adminRoles = await prisma.adminRoles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminRolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminRolesFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminRolesClient<$Result.GetResult<Prisma.$AdminRolesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AdminRoles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminRolesFindUniqueOrThrowArgs} args - Arguments to find a AdminRoles
     * @example
     * // Get one AdminRoles
     * const adminRoles = await prisma.adminRoles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminRolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminRolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminRolesClient<$Result.GetResult<Prisma.$AdminRolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AdminRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRolesFindFirstArgs} args - Arguments to find a AdminRoles
     * @example
     * // Get one AdminRoles
     * const adminRoles = await prisma.adminRoles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminRolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminRolesFindFirstArgs<ExtArgs>>
    ): Prisma__AdminRolesClient<$Result.GetResult<Prisma.$AdminRolesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AdminRoles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRolesFindFirstOrThrowArgs} args - Arguments to find a AdminRoles
     * @example
     * // Get one AdminRoles
     * const adminRoles = await prisma.adminRoles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminRolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminRolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminRolesClient<$Result.GetResult<Prisma.$AdminRolesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AdminRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminRoles
     * const adminRoles = await prisma.adminRoles.findMany()
     * 
     * // Get first 10 AdminRoles
     * const adminRoles = await prisma.adminRoles.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const adminRolesWithRole_idOnly = await prisma.adminRoles.findMany({ select: { role_id: true } })
     * 
    **/
    findMany<T extends AdminRolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminRolesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRolesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AdminRoles.
     * @param {AdminRolesCreateArgs} args - Arguments to create a AdminRoles.
     * @example
     * // Create one AdminRoles
     * const AdminRoles = await prisma.adminRoles.create({
     *   data: {
     *     // ... data to create a AdminRoles
     *   }
     * })
     * 
    **/
    create<T extends AdminRolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminRolesCreateArgs<ExtArgs>>
    ): Prisma__AdminRolesClient<$Result.GetResult<Prisma.$AdminRolesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AdminRoles.
     *     @param {AdminRolesCreateManyArgs} args - Arguments to create many AdminRoles.
     *     @example
     *     // Create many AdminRoles
     *     const adminRoles = await prisma.adminRoles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminRolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminRolesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminRoles.
     * @param {AdminRolesDeleteArgs} args - Arguments to delete one AdminRoles.
     * @example
     * // Delete one AdminRoles
     * const AdminRoles = await prisma.adminRoles.delete({
     *   where: {
     *     // ... filter to delete one AdminRoles
     *   }
     * })
     * 
    **/
    delete<T extends AdminRolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminRolesDeleteArgs<ExtArgs>>
    ): Prisma__AdminRolesClient<$Result.GetResult<Prisma.$AdminRolesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AdminRoles.
     * @param {AdminRolesUpdateArgs} args - Arguments to update one AdminRoles.
     * @example
     * // Update one AdminRoles
     * const adminRoles = await prisma.adminRoles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminRolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminRolesUpdateArgs<ExtArgs>>
    ): Prisma__AdminRolesClient<$Result.GetResult<Prisma.$AdminRolesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AdminRoles.
     * @param {AdminRolesDeleteManyArgs} args - Arguments to filter AdminRoles to delete.
     * @example
     * // Delete a few AdminRoles
     * const { count } = await prisma.adminRoles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminRolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminRolesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminRoles
     * const adminRoles = await prisma.adminRoles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminRolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminRolesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminRoles.
     * @param {AdminRolesUpsertArgs} args - Arguments to update or create a AdminRoles.
     * @example
     * // Update or create a AdminRoles
     * const adminRoles = await prisma.adminRoles.upsert({
     *   create: {
     *     // ... data to create a AdminRoles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminRoles we want to update
     *   }
     * })
    **/
    upsert<T extends AdminRolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminRolesUpsertArgs<ExtArgs>>
    ): Prisma__AdminRolesClient<$Result.GetResult<Prisma.$AdminRolesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AdminRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRolesCountArgs} args - Arguments to filter AdminRoles to count.
     * @example
     * // Count the number of AdminRoles
     * const count = await prisma.adminRoles.count({
     *   where: {
     *     // ... the filter for the AdminRoles we want to count
     *   }
     * })
    **/
    count<T extends AdminRolesCountArgs>(
      args?: Subset<T, AdminRolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminRolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminRolesAggregateArgs>(args: Subset<T, AdminRolesAggregateArgs>): Prisma.PrismaPromise<GetAdminRolesAggregateType<T>>

    /**
     * Group by AdminRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRolesGroupByArgs} args - Group by arguments.
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
      T extends AdminRolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminRolesGroupByArgs['orderBy'] }
        : { orderBy?: AdminRolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminRolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminRoles model
   */
  readonly fields: AdminRolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminRoles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminRolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AdminRoles model
   */ 
  interface AdminRolesFieldRefs {
    readonly role_id: FieldRef<"AdminRoles", 'Int'>
    readonly name: FieldRef<"AdminRoles", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AdminRoles findUnique
   */
  export type AdminRolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null
    /**
     * Filter, which AdminRoles to fetch.
     */
    where: AdminRolesWhereUniqueInput
  }


  /**
   * AdminRoles findUniqueOrThrow
   */
  export type AdminRolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null
    /**
     * Filter, which AdminRoles to fetch.
     */
    where: AdminRolesWhereUniqueInput
  }


  /**
   * AdminRoles findFirst
   */
  export type AdminRolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null
    /**
     * Filter, which AdminRoles to fetch.
     */
    where?: AdminRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?: AdminRolesOrderByWithRelationInput | AdminRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminRoles.
     */
    cursor?: AdminRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminRoles.
     */
    distinct?: AdminRolesScalarFieldEnum | AdminRolesScalarFieldEnum[]
  }


  /**
   * AdminRoles findFirstOrThrow
   */
  export type AdminRolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null
    /**
     * Filter, which AdminRoles to fetch.
     */
    where?: AdminRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?: AdminRolesOrderByWithRelationInput | AdminRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminRoles.
     */
    cursor?: AdminRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminRoles.
     */
    distinct?: AdminRolesScalarFieldEnum | AdminRolesScalarFieldEnum[]
  }


  /**
   * AdminRoles findMany
   */
  export type AdminRolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null
    /**
     * Filter, which AdminRoles to fetch.
     */
    where?: AdminRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?: AdminRolesOrderByWithRelationInput | AdminRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminRoles.
     */
    cursor?: AdminRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRoles.
     */
    skip?: number
    distinct?: AdminRolesScalarFieldEnum | AdminRolesScalarFieldEnum[]
  }


  /**
   * AdminRoles create
   */
  export type AdminRolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null
    /**
     * The data needed to create a AdminRoles.
     */
    data: XOR<AdminRolesCreateInput, AdminRolesUncheckedCreateInput>
  }


  /**
   * AdminRoles createMany
   */
  export type AdminRolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminRoles.
     */
    data: AdminRolesCreateManyInput | AdminRolesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AdminRoles update
   */
  export type AdminRolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null
    /**
     * The data needed to update a AdminRoles.
     */
    data: XOR<AdminRolesUpdateInput, AdminRolesUncheckedUpdateInput>
    /**
     * Choose, which AdminRoles to update.
     */
    where: AdminRolesWhereUniqueInput
  }


  /**
   * AdminRoles updateMany
   */
  export type AdminRolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminRoles.
     */
    data: XOR<AdminRolesUpdateManyMutationInput, AdminRolesUncheckedUpdateManyInput>
    /**
     * Filter which AdminRoles to update
     */
    where?: AdminRolesWhereInput
  }


  /**
   * AdminRoles upsert
   */
  export type AdminRolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null
    /**
     * The filter to search for the AdminRoles to update in case it exists.
     */
    where: AdminRolesWhereUniqueInput
    /**
     * In case the AdminRoles found by the `where` argument doesn't exist, create a new AdminRoles with this data.
     */
    create: XOR<AdminRolesCreateInput, AdminRolesUncheckedCreateInput>
    /**
     * In case the AdminRoles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminRolesUpdateInput, AdminRolesUncheckedUpdateInput>
  }


  /**
   * AdminRoles delete
   */
  export type AdminRolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null
    /**
     * Filter which AdminRoles to delete.
     */
    where: AdminRolesWhereUniqueInput
  }


  /**
   * AdminRoles deleteMany
   */
  export type AdminRolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminRoles to delete
     */
    where?: AdminRolesWhereInput
  }


  /**
   * AdminRoles without action
   */
  export type AdminRolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null
  }



  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    transaction_id: number | null
    user_id: number | null
    amount: Decimal | null
    transaction_type_id: number | null
    agent_id: number | null
    delete_status: number | null
  }

  export type TransactionSumAggregateOutputType = {
    transaction_id: number | null
    user_id: number | null
    amount: Decimal | null
    transaction_type_id: number | null
    agent_id: number | null
    delete_status: number | null
  }

  export type TransactionMinAggregateOutputType = {
    transaction_id: number | null
    user_id: number | null
    amount: Decimal | null
    transaction_type_id: number | null
    transaction_date: Date | null
    agent_id: number | null
    delete_status: number | null
    register_date: Date | null
    updated_date: Date | null
    deleted_date: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    transaction_id: number | null
    user_id: number | null
    amount: Decimal | null
    transaction_type_id: number | null
    transaction_date: Date | null
    agent_id: number | null
    delete_status: number | null
    register_date: Date | null
    updated_date: Date | null
    deleted_date: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    transaction_id: number
    user_id: number
    amount: number
    transaction_type_id: number
    transaction_date: number
    agent_id: number
    delete_status: number
    register_date: number
    updated_date: number
    deleted_date: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    transaction_id?: true
    user_id?: true
    amount?: true
    transaction_type_id?: true
    agent_id?: true
    delete_status?: true
  }

  export type TransactionSumAggregateInputType = {
    transaction_id?: true
    user_id?: true
    amount?: true
    transaction_type_id?: true
    agent_id?: true
    delete_status?: true
  }

  export type TransactionMinAggregateInputType = {
    transaction_id?: true
    user_id?: true
    amount?: true
    transaction_type_id?: true
    transaction_date?: true
    agent_id?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
  }

  export type TransactionMaxAggregateInputType = {
    transaction_id?: true
    user_id?: true
    amount?: true
    transaction_type_id?: true
    transaction_date?: true
    agent_id?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
  }

  export type TransactionCountAggregateInputType = {
    transaction_id?: true
    user_id?: true
    amount?: true
    transaction_type_id?: true
    transaction_date?: true
    agent_id?: true
    delete_status?: true
    register_date?: true
    updated_date?: true
    deleted_date?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    transaction_id: number
    user_id: number
    amount: Decimal
    transaction_type_id: number
    transaction_date: Date
    agent_id: number
    delete_status: number
    register_date: Date
    updated_date: Date
    deleted_date: Date | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    user_id?: boolean
    amount?: boolean
    transaction_type_id?: boolean
    transaction_date?: boolean
    agent_id?: boolean
    delete_status?: boolean
    register_date?: boolean
    updated_date?: boolean
    deleted_date?: boolean
    transaction_type?: boolean | TransactionTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    transaction_id?: boolean
    user_id?: boolean
    amount?: boolean
    transaction_type_id?: boolean
    transaction_date?: boolean
    agent_id?: boolean
    delete_status?: boolean
    register_date?: boolean
    updated_date?: boolean
    deleted_date?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_type?: boolean | TransactionTypeDefaultArgs<ExtArgs>
  }


  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      transaction_type: Prisma.$TransactionTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      transaction_id: number
      user_id: number
      amount: Prisma.Decimal
      transaction_type_id: number
      transaction_date: Date
      agent_id: number
      delete_status: number
      register_date: Date
      updated_date: Date
      deleted_date: Date | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }


  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `transaction_id`
     * const transactionWithTransaction_idOnly = await prisma.transaction.findMany({ select: { transaction_id: true } })
     * 
    **/
    findMany<T extends TransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
    **/
    create<T extends TransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transactions.
     *     @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     *     @example
     *     // Create many Transactions
     *     const transaction = await prisma.transaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
    **/
    delete<T extends TransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
    **/
    upsert<T extends TransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    transaction_type<T extends TransactionTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionTypeDefaultArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly transaction_id: FieldRef<"Transaction", 'Int'>
    readonly user_id: FieldRef<"Transaction", 'Int'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly transaction_type_id: FieldRef<"Transaction", 'Int'>
    readonly transaction_date: FieldRef<"Transaction", 'DateTime'>
    readonly agent_id: FieldRef<"Transaction", 'Int'>
    readonly delete_status: FieldRef<"Transaction", 'Int'>
    readonly register_date: FieldRef<"Transaction", 'DateTime'>
    readonly updated_date: FieldRef<"Transaction", 'DateTime'>
    readonly deleted_date: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }


  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }


  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }


  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }


  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
  }



  /**
   * Model TransactionType
   */

  export type AggregateTransactionType = {
    _count: TransactionTypeCountAggregateOutputType | null
    _avg: TransactionTypeAvgAggregateOutputType | null
    _sum: TransactionTypeSumAggregateOutputType | null
    _min: TransactionTypeMinAggregateOutputType | null
    _max: TransactionTypeMaxAggregateOutputType | null
  }

  export type TransactionTypeAvgAggregateOutputType = {
    transaction_type_id: number | null
  }

  export type TransactionTypeSumAggregateOutputType = {
    transaction_type_id: number | null
  }

  export type TransactionTypeMinAggregateOutputType = {
    transaction_type_id: number | null
    transaction_type: string | null
  }

  export type TransactionTypeMaxAggregateOutputType = {
    transaction_type_id: number | null
    transaction_type: string | null
  }

  export type TransactionTypeCountAggregateOutputType = {
    transaction_type_id: number
    transaction_type: number
    _all: number
  }


  export type TransactionTypeAvgAggregateInputType = {
    transaction_type_id?: true
  }

  export type TransactionTypeSumAggregateInputType = {
    transaction_type_id?: true
  }

  export type TransactionTypeMinAggregateInputType = {
    transaction_type_id?: true
    transaction_type?: true
  }

  export type TransactionTypeMaxAggregateInputType = {
    transaction_type_id?: true
    transaction_type?: true
  }

  export type TransactionTypeCountAggregateInputType = {
    transaction_type_id?: true
    transaction_type?: true
    _all?: true
  }

  export type TransactionTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionType to aggregate.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionTypes
    **/
    _count?: true | TransactionTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionTypeMaxAggregateInputType
  }

  export type GetTransactionTypeAggregateType<T extends TransactionTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionType[P]>
      : GetScalarType<T[P], AggregateTransactionType[P]>
  }




  export type TransactionTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionTypeWhereInput
    orderBy?: TransactionTypeOrderByWithAggregationInput | TransactionTypeOrderByWithAggregationInput[]
    by: TransactionTypeScalarFieldEnum[] | TransactionTypeScalarFieldEnum
    having?: TransactionTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionTypeCountAggregateInputType | true
    _avg?: TransactionTypeAvgAggregateInputType
    _sum?: TransactionTypeSumAggregateInputType
    _min?: TransactionTypeMinAggregateInputType
    _max?: TransactionTypeMaxAggregateInputType
  }

  export type TransactionTypeGroupByOutputType = {
    transaction_type_id: number
    transaction_type: string
    _count: TransactionTypeCountAggregateOutputType | null
    _avg: TransactionTypeAvgAggregateOutputType | null
    _sum: TransactionTypeSumAggregateOutputType | null
    _min: TransactionTypeMinAggregateOutputType | null
    _max: TransactionTypeMaxAggregateOutputType | null
  }

  type GetTransactionTypeGroupByPayload<T extends TransactionTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionTypeGroupByOutputType[P]>
        }
      >
    >


  export type TransactionTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_type_id?: boolean
    transaction_type?: boolean
    transation?: boolean | TransactionType$transationArgs<ExtArgs>
    _count?: boolean | TransactionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionType"]>

  export type TransactionTypeSelectScalar = {
    transaction_type_id?: boolean
    transaction_type?: boolean
  }

  export type TransactionTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transation?: boolean | TransactionType$transationArgs<ExtArgs>
    _count?: boolean | TransactionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TransactionTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionType"
    objects: {
      transation: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      transaction_type_id: number
      transaction_type: string
    }, ExtArgs["result"]["transactionType"]>
    composites: {}
  }


  type TransactionTypeGetPayload<S extends boolean | null | undefined | TransactionTypeDefaultArgs> = $Result.GetResult<Prisma.$TransactionTypePayload, S>

  type TransactionTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionTypeCountAggregateInputType | true
    }

  export interface TransactionTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionType'], meta: { name: 'TransactionType' } }
    /**
     * Find zero or one TransactionType that matches the filter.
     * @param {TransactionTypeFindUniqueArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransactionTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TransactionType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TransactionTypeFindUniqueOrThrowArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransactionTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TransactionType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeFindFirstArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransactionTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionTypeFindFirstArgs<ExtArgs>>
    ): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TransactionType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeFindFirstOrThrowArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransactionTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TransactionTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionTypes
     * const transactionTypes = await prisma.transactionType.findMany()
     * 
     * // Get first 10 TransactionTypes
     * const transactionTypes = await prisma.transactionType.findMany({ take: 10 })
     * 
     * // Only select the `transaction_type_id`
     * const transactionTypeWithTransaction_type_idOnly = await prisma.transactionType.findMany({ select: { transaction_type_id: true } })
     * 
    **/
    findMany<T extends TransactionTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TransactionType.
     * @param {TransactionTypeCreateArgs} args - Arguments to create a TransactionType.
     * @example
     * // Create one TransactionType
     * const TransactionType = await prisma.transactionType.create({
     *   data: {
     *     // ... data to create a TransactionType
     *   }
     * })
     * 
    **/
    create<T extends TransactionTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionTypeCreateArgs<ExtArgs>>
    ): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TransactionTypes.
     *     @param {TransactionTypeCreateManyArgs} args - Arguments to create many TransactionTypes.
     *     @example
     *     // Create many TransactionTypes
     *     const transactionType = await prisma.transactionType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransactionTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TransactionType.
     * @param {TransactionTypeDeleteArgs} args - Arguments to delete one TransactionType.
     * @example
     * // Delete one TransactionType
     * const TransactionType = await prisma.transactionType.delete({
     *   where: {
     *     // ... filter to delete one TransactionType
     *   }
     * })
     * 
    **/
    delete<T extends TransactionTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionTypeDeleteArgs<ExtArgs>>
    ): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TransactionType.
     * @param {TransactionTypeUpdateArgs} args - Arguments to update one TransactionType.
     * @example
     * // Update one TransactionType
     * const transactionType = await prisma.transactionType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransactionTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionTypeUpdateArgs<ExtArgs>>
    ): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TransactionTypes.
     * @param {TransactionTypeDeleteManyArgs} args - Arguments to filter TransactionTypes to delete.
     * @example
     * // Delete a few TransactionTypes
     * const { count } = await prisma.transactionType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransactionTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionTypes
     * const transactionType = await prisma.transactionType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransactionTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TransactionType.
     * @param {TransactionTypeUpsertArgs} args - Arguments to update or create a TransactionType.
     * @example
     * // Update or create a TransactionType
     * const transactionType = await prisma.transactionType.upsert({
     *   create: {
     *     // ... data to create a TransactionType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionType we want to update
     *   }
     * })
    **/
    upsert<T extends TransactionTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionTypeUpsertArgs<ExtArgs>>
    ): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TransactionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeCountArgs} args - Arguments to filter TransactionTypes to count.
     * @example
     * // Count the number of TransactionTypes
     * const count = await prisma.transactionType.count({
     *   where: {
     *     // ... the filter for the TransactionTypes we want to count
     *   }
     * })
    **/
    count<T extends TransactionTypeCountArgs>(
      args?: Subset<T, TransactionTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionTypeAggregateArgs>(args: Subset<T, TransactionTypeAggregateArgs>): Prisma.PrismaPromise<GetTransactionTypeAggregateType<T>>

    /**
     * Group by TransactionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeGroupByArgs} args - Group by arguments.
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
      T extends TransactionTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionTypeGroupByArgs['orderBy'] }
        : { orderBy?: TransactionTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionType model
   */
  readonly fields: TransactionTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    transation<T extends TransactionType$transationArgs<ExtArgs> = {}>(args?: Subset<T, TransactionType$transationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TransactionType model
   */ 
  interface TransactionTypeFieldRefs {
    readonly transaction_type_id: FieldRef<"TransactionType", 'Int'>
    readonly transaction_type: FieldRef<"TransactionType", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TransactionType findUnique
   */
  export type TransactionTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where: TransactionTypeWhereUniqueInput
  }


  /**
   * TransactionType findUniqueOrThrow
   */
  export type TransactionTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where: TransactionTypeWhereUniqueInput
  }


  /**
   * TransactionType findFirst
   */
  export type TransactionTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionTypes.
     */
    distinct?: TransactionTypeScalarFieldEnum | TransactionTypeScalarFieldEnum[]
  }


  /**
   * TransactionType findFirstOrThrow
   */
  export type TransactionTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionTypes.
     */
    distinct?: TransactionTypeScalarFieldEnum | TransactionTypeScalarFieldEnum[]
  }


  /**
   * TransactionType findMany
   */
  export type TransactionTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTypes to fetch.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    distinct?: TransactionTypeScalarFieldEnum | TransactionTypeScalarFieldEnum[]
  }


  /**
   * TransactionType create
   */
  export type TransactionTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionType.
     */
    data: XOR<TransactionTypeCreateInput, TransactionTypeUncheckedCreateInput>
  }


  /**
   * TransactionType createMany
   */
  export type TransactionTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionTypes.
     */
    data: TransactionTypeCreateManyInput | TransactionTypeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TransactionType update
   */
  export type TransactionTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionType.
     */
    data: XOR<TransactionTypeUpdateInput, TransactionTypeUncheckedUpdateInput>
    /**
     * Choose, which TransactionType to update.
     */
    where: TransactionTypeWhereUniqueInput
  }


  /**
   * TransactionType updateMany
   */
  export type TransactionTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionTypes.
     */
    data: XOR<TransactionTypeUpdateManyMutationInput, TransactionTypeUncheckedUpdateManyInput>
    /**
     * Filter which TransactionTypes to update
     */
    where?: TransactionTypeWhereInput
  }


  /**
   * TransactionType upsert
   */
  export type TransactionTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionType to update in case it exists.
     */
    where: TransactionTypeWhereUniqueInput
    /**
     * In case the TransactionType found by the `where` argument doesn't exist, create a new TransactionType with this data.
     */
    create: XOR<TransactionTypeCreateInput, TransactionTypeUncheckedCreateInput>
    /**
     * In case the TransactionType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionTypeUpdateInput, TransactionTypeUncheckedUpdateInput>
  }


  /**
   * TransactionType delete
   */
  export type TransactionTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter which TransactionType to delete.
     */
    where: TransactionTypeWhereUniqueInput
  }


  /**
   * TransactionType deleteMany
   */
  export type TransactionTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionTypes to delete
     */
    where?: TransactionTypeWhereInput
  }


  /**
   * TransactionType.transation
   */
  export type TransactionType$transationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * TransactionType without action
   */
  export type TransactionTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null
  }



  /**
   * Model ApproveReject
   */

  export type AggregateApproveReject = {
    _count: ApproveRejectCountAggregateOutputType | null
    _avg: ApproveRejectAvgAggregateOutputType | null
    _sum: ApproveRejectSumAggregateOutputType | null
    _min: ApproveRejectMinAggregateOutputType | null
    _max: ApproveRejectMaxAggregateOutputType | null
  }

  export type ApproveRejectAvgAggregateOutputType = {
    approve_reject_type_id: number | null
  }

  export type ApproveRejectSumAggregateOutputType = {
    approve_reject_type_id: number | null
  }

  export type ApproveRejectMinAggregateOutputType = {
    approve_reject_type_id: number | null
    type: string | null
  }

  export type ApproveRejectMaxAggregateOutputType = {
    approve_reject_type_id: number | null
    type: string | null
  }

  export type ApproveRejectCountAggregateOutputType = {
    approve_reject_type_id: number
    type: number
    _all: number
  }


  export type ApproveRejectAvgAggregateInputType = {
    approve_reject_type_id?: true
  }

  export type ApproveRejectSumAggregateInputType = {
    approve_reject_type_id?: true
  }

  export type ApproveRejectMinAggregateInputType = {
    approve_reject_type_id?: true
    type?: true
  }

  export type ApproveRejectMaxAggregateInputType = {
    approve_reject_type_id?: true
    type?: true
  }

  export type ApproveRejectCountAggregateInputType = {
    approve_reject_type_id?: true
    type?: true
    _all?: true
  }

  export type ApproveRejectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApproveReject to aggregate.
     */
    where?: ApproveRejectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApproveRejects to fetch.
     */
    orderBy?: ApproveRejectOrderByWithRelationInput | ApproveRejectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApproveRejectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApproveRejects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApproveRejects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApproveRejects
    **/
    _count?: true | ApproveRejectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApproveRejectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApproveRejectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApproveRejectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApproveRejectMaxAggregateInputType
  }

  export type GetApproveRejectAggregateType<T extends ApproveRejectAggregateArgs> = {
        [P in keyof T & keyof AggregateApproveReject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApproveReject[P]>
      : GetScalarType<T[P], AggregateApproveReject[P]>
  }




  export type ApproveRejectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApproveRejectWhereInput
    orderBy?: ApproveRejectOrderByWithAggregationInput | ApproveRejectOrderByWithAggregationInput[]
    by: ApproveRejectScalarFieldEnum[] | ApproveRejectScalarFieldEnum
    having?: ApproveRejectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApproveRejectCountAggregateInputType | true
    _avg?: ApproveRejectAvgAggregateInputType
    _sum?: ApproveRejectSumAggregateInputType
    _min?: ApproveRejectMinAggregateInputType
    _max?: ApproveRejectMaxAggregateInputType
  }

  export type ApproveRejectGroupByOutputType = {
    approve_reject_type_id: number
    type: string
    _count: ApproveRejectCountAggregateOutputType | null
    _avg: ApproveRejectAvgAggregateOutputType | null
    _sum: ApproveRejectSumAggregateOutputType | null
    _min: ApproveRejectMinAggregateOutputType | null
    _max: ApproveRejectMaxAggregateOutputType | null
  }

  type GetApproveRejectGroupByPayload<T extends ApproveRejectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApproveRejectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApproveRejectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApproveRejectGroupByOutputType[P]>
            : GetScalarType<T[P], ApproveRejectGroupByOutputType[P]>
        }
      >
    >


  export type ApproveRejectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    approve_reject_type_id?: boolean
    type?: boolean
  }, ExtArgs["result"]["approveReject"]>

  export type ApproveRejectSelectScalar = {
    approve_reject_type_id?: boolean
    type?: boolean
  }


  export type $ApproveRejectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApproveReject"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      approve_reject_type_id: number
      type: string
    }, ExtArgs["result"]["approveReject"]>
    composites: {}
  }


  type ApproveRejectGetPayload<S extends boolean | null | undefined | ApproveRejectDefaultArgs> = $Result.GetResult<Prisma.$ApproveRejectPayload, S>

  type ApproveRejectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApproveRejectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApproveRejectCountAggregateInputType | true
    }

  export interface ApproveRejectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApproveReject'], meta: { name: 'ApproveReject' } }
    /**
     * Find zero or one ApproveReject that matches the filter.
     * @param {ApproveRejectFindUniqueArgs} args - Arguments to find a ApproveReject
     * @example
     * // Get one ApproveReject
     * const approveReject = await prisma.approveReject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApproveRejectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ApproveRejectFindUniqueArgs<ExtArgs>>
    ): Prisma__ApproveRejectClient<$Result.GetResult<Prisma.$ApproveRejectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ApproveReject that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ApproveRejectFindUniqueOrThrowArgs} args - Arguments to find a ApproveReject
     * @example
     * // Get one ApproveReject
     * const approveReject = await prisma.approveReject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApproveRejectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApproveRejectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApproveRejectClient<$Result.GetResult<Prisma.$ApproveRejectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ApproveReject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveRejectFindFirstArgs} args - Arguments to find a ApproveReject
     * @example
     * // Get one ApproveReject
     * const approveReject = await prisma.approveReject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApproveRejectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ApproveRejectFindFirstArgs<ExtArgs>>
    ): Prisma__ApproveRejectClient<$Result.GetResult<Prisma.$ApproveRejectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ApproveReject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveRejectFindFirstOrThrowArgs} args - Arguments to find a ApproveReject
     * @example
     * // Get one ApproveReject
     * const approveReject = await prisma.approveReject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApproveRejectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApproveRejectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApproveRejectClient<$Result.GetResult<Prisma.$ApproveRejectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ApproveRejects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveRejectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApproveRejects
     * const approveRejects = await prisma.approveReject.findMany()
     * 
     * // Get first 10 ApproveRejects
     * const approveRejects = await prisma.approveReject.findMany({ take: 10 })
     * 
     * // Only select the `approve_reject_type_id`
     * const approveRejectWithApprove_reject_type_idOnly = await prisma.approveReject.findMany({ select: { approve_reject_type_id: true } })
     * 
    **/
    findMany<T extends ApproveRejectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApproveRejectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApproveRejectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ApproveReject.
     * @param {ApproveRejectCreateArgs} args - Arguments to create a ApproveReject.
     * @example
     * // Create one ApproveReject
     * const ApproveReject = await prisma.approveReject.create({
     *   data: {
     *     // ... data to create a ApproveReject
     *   }
     * })
     * 
    **/
    create<T extends ApproveRejectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApproveRejectCreateArgs<ExtArgs>>
    ): Prisma__ApproveRejectClient<$Result.GetResult<Prisma.$ApproveRejectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ApproveRejects.
     *     @param {ApproveRejectCreateManyArgs} args - Arguments to create many ApproveRejects.
     *     @example
     *     // Create many ApproveRejects
     *     const approveReject = await prisma.approveReject.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ApproveRejectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApproveRejectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApproveReject.
     * @param {ApproveRejectDeleteArgs} args - Arguments to delete one ApproveReject.
     * @example
     * // Delete one ApproveReject
     * const ApproveReject = await prisma.approveReject.delete({
     *   where: {
     *     // ... filter to delete one ApproveReject
     *   }
     * })
     * 
    **/
    delete<T extends ApproveRejectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApproveRejectDeleteArgs<ExtArgs>>
    ): Prisma__ApproveRejectClient<$Result.GetResult<Prisma.$ApproveRejectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ApproveReject.
     * @param {ApproveRejectUpdateArgs} args - Arguments to update one ApproveReject.
     * @example
     * // Update one ApproveReject
     * const approveReject = await prisma.approveReject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApproveRejectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApproveRejectUpdateArgs<ExtArgs>>
    ): Prisma__ApproveRejectClient<$Result.GetResult<Prisma.$ApproveRejectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ApproveRejects.
     * @param {ApproveRejectDeleteManyArgs} args - Arguments to filter ApproveRejects to delete.
     * @example
     * // Delete a few ApproveRejects
     * const { count } = await prisma.approveReject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApproveRejectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApproveRejectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApproveRejects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveRejectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApproveRejects
     * const approveReject = await prisma.approveReject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApproveRejectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApproveRejectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApproveReject.
     * @param {ApproveRejectUpsertArgs} args - Arguments to update or create a ApproveReject.
     * @example
     * // Update or create a ApproveReject
     * const approveReject = await prisma.approveReject.upsert({
     *   create: {
     *     // ... data to create a ApproveReject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApproveReject we want to update
     *   }
     * })
    **/
    upsert<T extends ApproveRejectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApproveRejectUpsertArgs<ExtArgs>>
    ): Prisma__ApproveRejectClient<$Result.GetResult<Prisma.$ApproveRejectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ApproveRejects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveRejectCountArgs} args - Arguments to filter ApproveRejects to count.
     * @example
     * // Count the number of ApproveRejects
     * const count = await prisma.approveReject.count({
     *   where: {
     *     // ... the filter for the ApproveRejects we want to count
     *   }
     * })
    **/
    count<T extends ApproveRejectCountArgs>(
      args?: Subset<T, ApproveRejectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApproveRejectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApproveReject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveRejectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApproveRejectAggregateArgs>(args: Subset<T, ApproveRejectAggregateArgs>): Prisma.PrismaPromise<GetApproveRejectAggregateType<T>>

    /**
     * Group by ApproveReject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveRejectGroupByArgs} args - Group by arguments.
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
      T extends ApproveRejectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApproveRejectGroupByArgs['orderBy'] }
        : { orderBy?: ApproveRejectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApproveRejectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApproveRejectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApproveReject model
   */
  readonly fields: ApproveRejectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApproveReject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApproveRejectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ApproveReject model
   */ 
  interface ApproveRejectFieldRefs {
    readonly approve_reject_type_id: FieldRef<"ApproveReject", 'Int'>
    readonly type: FieldRef<"ApproveReject", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ApproveReject findUnique
   */
  export type ApproveRejectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null
    /**
     * Filter, which ApproveReject to fetch.
     */
    where: ApproveRejectWhereUniqueInput
  }


  /**
   * ApproveReject findUniqueOrThrow
   */
  export type ApproveRejectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null
    /**
     * Filter, which ApproveReject to fetch.
     */
    where: ApproveRejectWhereUniqueInput
  }


  /**
   * ApproveReject findFirst
   */
  export type ApproveRejectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null
    /**
     * Filter, which ApproveReject to fetch.
     */
    where?: ApproveRejectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApproveRejects to fetch.
     */
    orderBy?: ApproveRejectOrderByWithRelationInput | ApproveRejectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApproveRejects.
     */
    cursor?: ApproveRejectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApproveRejects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApproveRejects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApproveRejects.
     */
    distinct?: ApproveRejectScalarFieldEnum | ApproveRejectScalarFieldEnum[]
  }


  /**
   * ApproveReject findFirstOrThrow
   */
  export type ApproveRejectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null
    /**
     * Filter, which ApproveReject to fetch.
     */
    where?: ApproveRejectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApproveRejects to fetch.
     */
    orderBy?: ApproveRejectOrderByWithRelationInput | ApproveRejectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApproveRejects.
     */
    cursor?: ApproveRejectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApproveRejects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApproveRejects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApproveRejects.
     */
    distinct?: ApproveRejectScalarFieldEnum | ApproveRejectScalarFieldEnum[]
  }


  /**
   * ApproveReject findMany
   */
  export type ApproveRejectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null
    /**
     * Filter, which ApproveRejects to fetch.
     */
    where?: ApproveRejectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApproveRejects to fetch.
     */
    orderBy?: ApproveRejectOrderByWithRelationInput | ApproveRejectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApproveRejects.
     */
    cursor?: ApproveRejectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApproveRejects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApproveRejects.
     */
    skip?: number
    distinct?: ApproveRejectScalarFieldEnum | ApproveRejectScalarFieldEnum[]
  }


  /**
   * ApproveReject create
   */
  export type ApproveRejectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null
    /**
     * The data needed to create a ApproveReject.
     */
    data: XOR<ApproveRejectCreateInput, ApproveRejectUncheckedCreateInput>
  }


  /**
   * ApproveReject createMany
   */
  export type ApproveRejectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApproveRejects.
     */
    data: ApproveRejectCreateManyInput | ApproveRejectCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ApproveReject update
   */
  export type ApproveRejectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null
    /**
     * The data needed to update a ApproveReject.
     */
    data: XOR<ApproveRejectUpdateInput, ApproveRejectUncheckedUpdateInput>
    /**
     * Choose, which ApproveReject to update.
     */
    where: ApproveRejectWhereUniqueInput
  }


  /**
   * ApproveReject updateMany
   */
  export type ApproveRejectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApproveRejects.
     */
    data: XOR<ApproveRejectUpdateManyMutationInput, ApproveRejectUncheckedUpdateManyInput>
    /**
     * Filter which ApproveRejects to update
     */
    where?: ApproveRejectWhereInput
  }


  /**
   * ApproveReject upsert
   */
  export type ApproveRejectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null
    /**
     * The filter to search for the ApproveReject to update in case it exists.
     */
    where: ApproveRejectWhereUniqueInput
    /**
     * In case the ApproveReject found by the `where` argument doesn't exist, create a new ApproveReject with this data.
     */
    create: XOR<ApproveRejectCreateInput, ApproveRejectUncheckedCreateInput>
    /**
     * In case the ApproveReject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApproveRejectUpdateInput, ApproveRejectUncheckedUpdateInput>
  }


  /**
   * ApproveReject delete
   */
  export type ApproveRejectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null
    /**
     * Filter which ApproveReject to delete.
     */
    where: ApproveRejectWhereUniqueInput
  }


  /**
   * ApproveReject deleteMany
   */
  export type ApproveRejectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApproveRejects to delete
     */
    where?: ApproveRejectWhereInput
  }


  /**
   * ApproveReject without action
   */
  export type ApproveRejectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    phone_number: 'phone_number',
    user_name: 'user_name',
    password: 'password',
    otp_code: 'otp_code',
    role_id: 'role_id',
    sms_send_time: 'sms_send_time',
    is_verify: 'is_verify',
    account_status: 'account_status',
    delete_status: 'delete_status',
    register_date: 'register_date',
    updated_date: 'updated_date',
    deleted_date: 'deleted_date'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    role_id: 'role_id',
    name: 'name'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const UserWithdrawAccountScalarFieldEnum: {
    user_withdraw_account_id: 'user_withdraw_account_id',
    user_id: 'user_id',
    account_type: 'account_type',
    account_name: 'account_name',
    account_id: 'account_id',
    delete_status: 'delete_status',
    register_date: 'register_date',
    updated_date: 'updated_date',
    deleted_date: 'deleted_date'
  };

  export type UserWithdrawAccountScalarFieldEnum = (typeof UserWithdrawAccountScalarFieldEnum)[keyof typeof UserWithdrawAccountScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    wallet_id: 'wallet_id',
    user_id: 'user_id',
    game_amount: 'game_amount',
    main_amount: 'main_amount',
    agent_id: 'agent_id',
    delete_status: 'delete_status',
    register_date: 'register_date',
    updated_date: 'updated_date',
    deleted_date: 'deleted_date'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
    payment_id: 'payment_id',
    user_id: 'user_id',
    payment_type: 'payment_type',
    payment_account_name: 'payment_account_name',
    payment_account: 'payment_account',
    reciver_account_type: 'reciver_account_type',
    receiver_account_name: 'receiver_account_name',
    receiver_account: 'receiver_account',
    amount: 'amount',
    date: 'date',
    approve_reject: 'approve_reject',
    reason_for_reject: 'reason_for_reject',
    payment_confirm_code: 'payment_confirm_code',
    delete_status: 'delete_status',
    register_date: 'register_date',
    updated_date: 'updated_date',
    deleted_date: 'deleted_date'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const WithdrawMethodScalarFieldEnum: {
    withdraw_id: 'withdraw_id',
    user_id: 'user_id',
    withdraw_type: 'withdraw_type',
    receiver_account_name: 'receiver_account_name',
    receiver_account: 'receiver_account',
    amount: 'amount',
    date: 'date',
    withdraw_confirm_code: 'withdraw_confirm_code',
    is_verify: 'is_verify',
    approve_reject: 'approve_reject',
    reason_for_reject: 'reason_for_reject',
    delete_status: 'delete_status',
    register_date: 'register_date',
    updated_date: 'updated_date',
    deleted_date: 'deleted_date'
  };

  export type WithdrawMethodScalarFieldEnum = (typeof WithdrawMethodScalarFieldEnum)[keyof typeof WithdrawMethodScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    admin_internal_id: 'admin_internal_id',
    admin_id: 'admin_id',
    admin_name: 'admin_name',
    password: 'password',
    account_status: 'account_status',
    delete_status: 'delete_status',
    register_date: 'register_date',
    updated_date: 'updated_date',
    deleted_date: 'deleted_date'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const AdminRolesScalarFieldEnum: {
    role_id: 'role_id',
    name: 'name'
  };

  export type AdminRolesScalarFieldEnum = (typeof AdminRolesScalarFieldEnum)[keyof typeof AdminRolesScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    transaction_id: 'transaction_id',
    user_id: 'user_id',
    amount: 'amount',
    transaction_type_id: 'transaction_type_id',
    transaction_date: 'transaction_date',
    agent_id: 'agent_id',
    delete_status: 'delete_status',
    register_date: 'register_date',
    updated_date: 'updated_date',
    deleted_date: 'deleted_date'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const TransactionTypeScalarFieldEnum: {
    transaction_type_id: 'transaction_type_id',
    transaction_type: 'transaction_type'
  };

  export type TransactionTypeScalarFieldEnum = (typeof TransactionTypeScalarFieldEnum)[keyof typeof TransactionTypeScalarFieldEnum]


  export const ApproveRejectScalarFieldEnum: {
    approve_reject_type_id: 'approve_reject_type_id',
    type: 'type'
  };

  export type ApproveRejectScalarFieldEnum = (typeof ApproveRejectScalarFieldEnum)[keyof typeof ApproveRejectScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_id?: IntFilter<"Users"> | number
    phone_number?: StringFilter<"Users"> | string
    user_name?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    otp_code?: StringNullableFilter<"Users"> | string | null
    role_id?: IntFilter<"Users"> | number
    sms_send_time?: DateTimeNullableFilter<"Users"> | Date | string | null
    is_verify?: IntNullableFilter<"Users"> | number | null
    account_status?: IntNullableFilter<"Users"> | number | null
    delete_status?: IntFilter<"Users"> | number
    register_date?: DateTimeFilter<"Users"> | Date | string
    updated_date?: DateTimeFilter<"Users"> | Date | string
    deleted_date?: DateTimeNullableFilter<"Users"> | Date | string | null
    user_role?: XOR<RolesRelationFilter, RolesWhereInput>
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    phone_number?: SortOrder
    user_name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    otp_code?: SortOrderInput | SortOrder
    role_id?: SortOrder
    sms_send_time?: SortOrderInput | SortOrder
    is_verify?: SortOrderInput | SortOrder
    account_status?: SortOrderInput | SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrderInput | SortOrder
    user_role?: RolesOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    phone_number?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_name?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    otp_code?: StringNullableFilter<"Users"> | string | null
    role_id?: IntFilter<"Users"> | number
    sms_send_time?: DateTimeNullableFilter<"Users"> | Date | string | null
    is_verify?: IntNullableFilter<"Users"> | number | null
    account_status?: IntNullableFilter<"Users"> | number | null
    delete_status?: IntFilter<"Users"> | number
    register_date?: DateTimeFilter<"Users"> | Date | string
    updated_date?: DateTimeFilter<"Users"> | Date | string
    deleted_date?: DateTimeNullableFilter<"Users"> | Date | string | null
    user_role?: XOR<RolesRelationFilter, RolesWhereInput>
  }, "user_id" | "phone_number">

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    phone_number?: SortOrder
    user_name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    otp_code?: SortOrderInput | SortOrder
    role_id?: SortOrder
    sms_send_time?: SortOrderInput | SortOrder
    is_verify?: SortOrderInput | SortOrder
    account_status?: SortOrderInput | SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"Users"> | number
    phone_number?: StringWithAggregatesFilter<"Users"> | string
    user_name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    otp_code?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role_id?: IntWithAggregatesFilter<"Users"> | number
    sms_send_time?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    is_verify?: IntNullableWithAggregatesFilter<"Users"> | number | null
    account_status?: IntNullableWithAggregatesFilter<"Users"> | number | null
    delete_status?: IntWithAggregatesFilter<"Users"> | number
    register_date?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_date?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    deleted_date?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
  }

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    role_id?: IntFilter<"Roles"> | number
    name?: StringFilter<"Roles"> | string
    users?: UsersListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    role_id?: SortOrder
    name?: SortOrder
    users?: UsersOrderByRelationAggregateInput
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    role_id?: number
    name?: string
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    users?: UsersListRelationFilter
  }, "role_id" | "name">

  export type RolesOrderByWithAggregationInput = {
    role_id?: SortOrder
    name?: SortOrder
    _count?: RolesCountOrderByAggregateInput
    _avg?: RolesAvgOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
    _sum?: RolesSumOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"Roles"> | number
    name?: StringWithAggregatesFilter<"Roles"> | string
  }

  export type UserWithdrawAccountWhereInput = {
    AND?: UserWithdrawAccountWhereInput | UserWithdrawAccountWhereInput[]
    OR?: UserWithdrawAccountWhereInput[]
    NOT?: UserWithdrawAccountWhereInput | UserWithdrawAccountWhereInput[]
    user_withdraw_account_id?: IntFilter<"UserWithdrawAccount"> | number
    user_id?: IntFilter<"UserWithdrawAccount"> | number
    account_type?: StringFilter<"UserWithdrawAccount"> | string
    account_name?: StringFilter<"UserWithdrawAccount"> | string
    account_id?: IntFilter<"UserWithdrawAccount"> | number
    delete_status?: IntFilter<"UserWithdrawAccount"> | number
    register_date?: DateTimeFilter<"UserWithdrawAccount"> | Date | string
    updated_date?: DateTimeFilter<"UserWithdrawAccount"> | Date | string
    deleted_date?: DateTimeNullableFilter<"UserWithdrawAccount"> | Date | string | null
  }

  export type UserWithdrawAccountOrderByWithRelationInput = {
    user_withdraw_account_id?: SortOrder
    user_id?: SortOrder
    account_type?: SortOrder
    account_name?: SortOrder
    account_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrderInput | SortOrder
  }

  export type UserWithdrawAccountWhereUniqueInput = Prisma.AtLeast<{
    user_withdraw_account_id?: number
    account_id?: number
    AND?: UserWithdrawAccountWhereInput | UserWithdrawAccountWhereInput[]
    OR?: UserWithdrawAccountWhereInput[]
    NOT?: UserWithdrawAccountWhereInput | UserWithdrawAccountWhereInput[]
    user_id?: IntFilter<"UserWithdrawAccount"> | number
    account_type?: StringFilter<"UserWithdrawAccount"> | string
    account_name?: StringFilter<"UserWithdrawAccount"> | string
    delete_status?: IntFilter<"UserWithdrawAccount"> | number
    register_date?: DateTimeFilter<"UserWithdrawAccount"> | Date | string
    updated_date?: DateTimeFilter<"UserWithdrawAccount"> | Date | string
    deleted_date?: DateTimeNullableFilter<"UserWithdrawAccount"> | Date | string | null
  }, "user_withdraw_account_id" | "account_id">

  export type UserWithdrawAccountOrderByWithAggregationInput = {
    user_withdraw_account_id?: SortOrder
    user_id?: SortOrder
    account_type?: SortOrder
    account_name?: SortOrder
    account_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrderInput | SortOrder
    _count?: UserWithdrawAccountCountOrderByAggregateInput
    _avg?: UserWithdrawAccountAvgOrderByAggregateInput
    _max?: UserWithdrawAccountMaxOrderByAggregateInput
    _min?: UserWithdrawAccountMinOrderByAggregateInput
    _sum?: UserWithdrawAccountSumOrderByAggregateInput
  }

  export type UserWithdrawAccountScalarWhereWithAggregatesInput = {
    AND?: UserWithdrawAccountScalarWhereWithAggregatesInput | UserWithdrawAccountScalarWhereWithAggregatesInput[]
    OR?: UserWithdrawAccountScalarWhereWithAggregatesInput[]
    NOT?: UserWithdrawAccountScalarWhereWithAggregatesInput | UserWithdrawAccountScalarWhereWithAggregatesInput[]
    user_withdraw_account_id?: IntWithAggregatesFilter<"UserWithdrawAccount"> | number
    user_id?: IntWithAggregatesFilter<"UserWithdrawAccount"> | number
    account_type?: StringWithAggregatesFilter<"UserWithdrawAccount"> | string
    account_name?: StringWithAggregatesFilter<"UserWithdrawAccount"> | string
    account_id?: IntWithAggregatesFilter<"UserWithdrawAccount"> | number
    delete_status?: IntWithAggregatesFilter<"UserWithdrawAccount"> | number
    register_date?: DateTimeWithAggregatesFilter<"UserWithdrawAccount"> | Date | string
    updated_date?: DateTimeWithAggregatesFilter<"UserWithdrawAccount"> | Date | string
    deleted_date?: DateTimeNullableWithAggregatesFilter<"UserWithdrawAccount"> | Date | string | null
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    wallet_id?: IntFilter<"Wallet"> | number
    user_id?: IntFilter<"Wallet"> | number
    game_amount?: DecimalNullableFilter<"Wallet"> | Decimal | DecimalJsLike | number | string | null
    main_amount?: DecimalNullableFilter<"Wallet"> | Decimal | DecimalJsLike | number | string | null
    agent_id?: IntFilter<"Wallet"> | number
    delete_status?: IntFilter<"Wallet"> | number
    register_date?: DateTimeFilter<"Wallet"> | Date | string
    updated_date?: DateTimeFilter<"Wallet"> | Date | string
    deleted_date?: DateTimeNullableFilter<"Wallet"> | Date | string | null
  }

  export type WalletOrderByWithRelationInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    game_amount?: SortOrderInput | SortOrder
    main_amount?: SortOrderInput | SortOrder
    agent_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrderInput | SortOrder
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    wallet_id?: number
    user_id?: number
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    game_amount?: DecimalNullableFilter<"Wallet"> | Decimal | DecimalJsLike | number | string | null
    main_amount?: DecimalNullableFilter<"Wallet"> | Decimal | DecimalJsLike | number | string | null
    agent_id?: IntFilter<"Wallet"> | number
    delete_status?: IntFilter<"Wallet"> | number
    register_date?: DateTimeFilter<"Wallet"> | Date | string
    updated_date?: DateTimeFilter<"Wallet"> | Date | string
    deleted_date?: DateTimeNullableFilter<"Wallet"> | Date | string | null
  }, "wallet_id" | "user_id">

  export type WalletOrderByWithAggregationInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    game_amount?: SortOrderInput | SortOrder
    main_amount?: SortOrderInput | SortOrder
    agent_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrderInput | SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    wallet_id?: IntWithAggregatesFilter<"Wallet"> | number
    user_id?: IntWithAggregatesFilter<"Wallet"> | number
    game_amount?: DecimalNullableWithAggregatesFilter<"Wallet"> | Decimal | DecimalJsLike | number | string | null
    main_amount?: DecimalNullableWithAggregatesFilter<"Wallet"> | Decimal | DecimalJsLike | number | string | null
    agent_id?: IntWithAggregatesFilter<"Wallet"> | number
    delete_status?: IntWithAggregatesFilter<"Wallet"> | number
    register_date?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
    updated_date?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
    deleted_date?: DateTimeNullableWithAggregatesFilter<"Wallet"> | Date | string | null
  }

  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    payment_id?: IntFilter<"PaymentMethod"> | number
    user_id?: IntFilter<"PaymentMethod"> | number
    payment_type?: StringFilter<"PaymentMethod"> | string
    payment_account_name?: StringFilter<"PaymentMethod"> | string
    payment_account?: StringFilter<"PaymentMethod"> | string
    reciver_account_type?: StringFilter<"PaymentMethod"> | string
    receiver_account_name?: StringFilter<"PaymentMethod"> | string
    receiver_account?: StringFilter<"PaymentMethod"> | string
    amount?: DecimalFilter<"PaymentMethod"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"PaymentMethod"> | Date | string
    approve_reject?: IntFilter<"PaymentMethod"> | number
    reason_for_reject?: StringNullableFilter<"PaymentMethod"> | string | null
    payment_confirm_code?: IntFilter<"PaymentMethod"> | number
    delete_status?: IntFilter<"PaymentMethod"> | number
    register_date?: DateTimeFilter<"PaymentMethod"> | Date | string
    updated_date?: DateTimeFilter<"PaymentMethod"> | Date | string
    deleted_date?: DateTimeNullableFilter<"PaymentMethod"> | Date | string | null
  }

  export type PaymentMethodOrderByWithRelationInput = {
    payment_id?: SortOrder
    user_id?: SortOrder
    payment_type?: SortOrder
    payment_account_name?: SortOrder
    payment_account?: SortOrder
    reciver_account_type?: SortOrder
    receiver_account_name?: SortOrder
    receiver_account?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    approve_reject?: SortOrder
    reason_for_reject?: SortOrderInput | SortOrder
    payment_confirm_code?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrderInput | SortOrder
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    user_id?: IntFilter<"PaymentMethod"> | number
    payment_type?: StringFilter<"PaymentMethod"> | string
    payment_account_name?: StringFilter<"PaymentMethod"> | string
    payment_account?: StringFilter<"PaymentMethod"> | string
    reciver_account_type?: StringFilter<"PaymentMethod"> | string
    receiver_account_name?: StringFilter<"PaymentMethod"> | string
    receiver_account?: StringFilter<"PaymentMethod"> | string
    amount?: DecimalFilter<"PaymentMethod"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"PaymentMethod"> | Date | string
    approve_reject?: IntFilter<"PaymentMethod"> | number
    reason_for_reject?: StringNullableFilter<"PaymentMethod"> | string | null
    payment_confirm_code?: IntFilter<"PaymentMethod"> | number
    delete_status?: IntFilter<"PaymentMethod"> | number
    register_date?: DateTimeFilter<"PaymentMethod"> | Date | string
    updated_date?: DateTimeFilter<"PaymentMethod"> | Date | string
    deleted_date?: DateTimeNullableFilter<"PaymentMethod"> | Date | string | null
  }, "payment_id">

  export type PaymentMethodOrderByWithAggregationInput = {
    payment_id?: SortOrder
    user_id?: SortOrder
    payment_type?: SortOrder
    payment_account_name?: SortOrder
    payment_account?: SortOrder
    reciver_account_type?: SortOrder
    receiver_account_name?: SortOrder
    receiver_account?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    approve_reject?: SortOrder
    reason_for_reject?: SortOrderInput | SortOrder
    payment_confirm_code?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrderInput | SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _avg?: PaymentMethodAvgOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
    _sum?: PaymentMethodSumOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    payment_id?: IntWithAggregatesFilter<"PaymentMethod"> | number
    user_id?: IntWithAggregatesFilter<"PaymentMethod"> | number
    payment_type?: StringWithAggregatesFilter<"PaymentMethod"> | string
    payment_account_name?: StringWithAggregatesFilter<"PaymentMethod"> | string
    payment_account?: StringWithAggregatesFilter<"PaymentMethod"> | string
    reciver_account_type?: StringWithAggregatesFilter<"PaymentMethod"> | string
    receiver_account_name?: StringWithAggregatesFilter<"PaymentMethod"> | string
    receiver_account?: StringWithAggregatesFilter<"PaymentMethod"> | string
    amount?: DecimalWithAggregatesFilter<"PaymentMethod"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
    approve_reject?: IntWithAggregatesFilter<"PaymentMethod"> | number
    reason_for_reject?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    payment_confirm_code?: IntWithAggregatesFilter<"PaymentMethod"> | number
    delete_status?: IntWithAggregatesFilter<"PaymentMethod"> | number
    register_date?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
    updated_date?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
    deleted_date?: DateTimeNullableWithAggregatesFilter<"PaymentMethod"> | Date | string | null
  }

  export type WithdrawMethodWhereInput = {
    AND?: WithdrawMethodWhereInput | WithdrawMethodWhereInput[]
    OR?: WithdrawMethodWhereInput[]
    NOT?: WithdrawMethodWhereInput | WithdrawMethodWhereInput[]
    withdraw_id?: IntFilter<"WithdrawMethod"> | number
    user_id?: IntFilter<"WithdrawMethod"> | number
    withdraw_type?: StringFilter<"WithdrawMethod"> | string
    receiver_account_name?: StringFilter<"WithdrawMethod"> | string
    receiver_account?: StringFilter<"WithdrawMethod"> | string
    amount?: DecimalFilter<"WithdrawMethod"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"WithdrawMethod"> | Date | string
    withdraw_confirm_code?: StringNullableFilter<"WithdrawMethod"> | string | null
    is_verify?: IntNullableFilter<"WithdrawMethod"> | number | null
    approve_reject?: IntFilter<"WithdrawMethod"> | number
    reason_for_reject?: StringNullableFilter<"WithdrawMethod"> | string | null
    delete_status?: IntFilter<"WithdrawMethod"> | number
    register_date?: DateTimeFilter<"WithdrawMethod"> | Date | string
    updated_date?: DateTimeFilter<"WithdrawMethod"> | Date | string
    deleted_date?: DateTimeNullableFilter<"WithdrawMethod"> | Date | string | null
  }

  export type WithdrawMethodOrderByWithRelationInput = {
    withdraw_id?: SortOrder
    user_id?: SortOrder
    withdraw_type?: SortOrder
    receiver_account_name?: SortOrder
    receiver_account?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    withdraw_confirm_code?: SortOrderInput | SortOrder
    is_verify?: SortOrderInput | SortOrder
    approve_reject?: SortOrder
    reason_for_reject?: SortOrderInput | SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrderInput | SortOrder
  }

  export type WithdrawMethodWhereUniqueInput = Prisma.AtLeast<{
    withdraw_id?: number
    AND?: WithdrawMethodWhereInput | WithdrawMethodWhereInput[]
    OR?: WithdrawMethodWhereInput[]
    NOT?: WithdrawMethodWhereInput | WithdrawMethodWhereInput[]
    user_id?: IntFilter<"WithdrawMethod"> | number
    withdraw_type?: StringFilter<"WithdrawMethod"> | string
    receiver_account_name?: StringFilter<"WithdrawMethod"> | string
    receiver_account?: StringFilter<"WithdrawMethod"> | string
    amount?: DecimalFilter<"WithdrawMethod"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"WithdrawMethod"> | Date | string
    withdraw_confirm_code?: StringNullableFilter<"WithdrawMethod"> | string | null
    is_verify?: IntNullableFilter<"WithdrawMethod"> | number | null
    approve_reject?: IntFilter<"WithdrawMethod"> | number
    reason_for_reject?: StringNullableFilter<"WithdrawMethod"> | string | null
    delete_status?: IntFilter<"WithdrawMethod"> | number
    register_date?: DateTimeFilter<"WithdrawMethod"> | Date | string
    updated_date?: DateTimeFilter<"WithdrawMethod"> | Date | string
    deleted_date?: DateTimeNullableFilter<"WithdrawMethod"> | Date | string | null
  }, "withdraw_id">

  export type WithdrawMethodOrderByWithAggregationInput = {
    withdraw_id?: SortOrder
    user_id?: SortOrder
    withdraw_type?: SortOrder
    receiver_account_name?: SortOrder
    receiver_account?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    withdraw_confirm_code?: SortOrderInput | SortOrder
    is_verify?: SortOrderInput | SortOrder
    approve_reject?: SortOrder
    reason_for_reject?: SortOrderInput | SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrderInput | SortOrder
    _count?: WithdrawMethodCountOrderByAggregateInput
    _avg?: WithdrawMethodAvgOrderByAggregateInput
    _max?: WithdrawMethodMaxOrderByAggregateInput
    _min?: WithdrawMethodMinOrderByAggregateInput
    _sum?: WithdrawMethodSumOrderByAggregateInput
  }

  export type WithdrawMethodScalarWhereWithAggregatesInput = {
    AND?: WithdrawMethodScalarWhereWithAggregatesInput | WithdrawMethodScalarWhereWithAggregatesInput[]
    OR?: WithdrawMethodScalarWhereWithAggregatesInput[]
    NOT?: WithdrawMethodScalarWhereWithAggregatesInput | WithdrawMethodScalarWhereWithAggregatesInput[]
    withdraw_id?: IntWithAggregatesFilter<"WithdrawMethod"> | number
    user_id?: IntWithAggregatesFilter<"WithdrawMethod"> | number
    withdraw_type?: StringWithAggregatesFilter<"WithdrawMethod"> | string
    receiver_account_name?: StringWithAggregatesFilter<"WithdrawMethod"> | string
    receiver_account?: StringWithAggregatesFilter<"WithdrawMethod"> | string
    amount?: DecimalWithAggregatesFilter<"WithdrawMethod"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"WithdrawMethod"> | Date | string
    withdraw_confirm_code?: StringNullableWithAggregatesFilter<"WithdrawMethod"> | string | null
    is_verify?: IntNullableWithAggregatesFilter<"WithdrawMethod"> | number | null
    approve_reject?: IntWithAggregatesFilter<"WithdrawMethod"> | number
    reason_for_reject?: StringNullableWithAggregatesFilter<"WithdrawMethod"> | string | null
    delete_status?: IntWithAggregatesFilter<"WithdrawMethod"> | number
    register_date?: DateTimeWithAggregatesFilter<"WithdrawMethod"> | Date | string
    updated_date?: DateTimeWithAggregatesFilter<"WithdrawMethod"> | Date | string
    deleted_date?: DateTimeNullableWithAggregatesFilter<"WithdrawMethod"> | Date | string | null
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    admin_internal_id?: IntFilter<"Admin"> | number
    admin_id?: StringFilter<"Admin"> | string
    admin_name?: StringNullableFilter<"Admin"> | string | null
    password?: StringNullableFilter<"Admin"> | string | null
    account_status?: StringNullableFilter<"Admin"> | string | null
    delete_status?: IntNullableFilter<"Admin"> | number | null
    register_date?: DateTimeFilter<"Admin"> | Date | string
    updated_date?: DateTimeFilter<"Admin"> | Date | string
    deleted_date?: DateTimeNullableFilter<"Admin"> | Date | string | null
  }

  export type AdminOrderByWithRelationInput = {
    admin_internal_id?: SortOrder
    admin_id?: SortOrder
    admin_name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    account_status?: SortOrderInput | SortOrder
    delete_status?: SortOrderInput | SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrderInput | SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    admin_internal_id?: number
    admin_id?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    admin_name?: StringNullableFilter<"Admin"> | string | null
    password?: StringNullableFilter<"Admin"> | string | null
    account_status?: StringNullableFilter<"Admin"> | string | null
    delete_status?: IntNullableFilter<"Admin"> | number | null
    register_date?: DateTimeFilter<"Admin"> | Date | string
    updated_date?: DateTimeFilter<"Admin"> | Date | string
    deleted_date?: DateTimeNullableFilter<"Admin"> | Date | string | null
  }, "admin_internal_id" | "admin_id">

  export type AdminOrderByWithAggregationInput = {
    admin_internal_id?: SortOrder
    admin_id?: SortOrder
    admin_name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    account_status?: SortOrderInput | SortOrder
    delete_status?: SortOrderInput | SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    admin_internal_id?: IntWithAggregatesFilter<"Admin"> | number
    admin_id?: StringWithAggregatesFilter<"Admin"> | string
    admin_name?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    password?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    account_status?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    delete_status?: IntNullableWithAggregatesFilter<"Admin"> | number | null
    register_date?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updated_date?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    deleted_date?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
  }

  export type AdminRolesWhereInput = {
    AND?: AdminRolesWhereInput | AdminRolesWhereInput[]
    OR?: AdminRolesWhereInput[]
    NOT?: AdminRolesWhereInput | AdminRolesWhereInput[]
    role_id?: IntFilter<"AdminRoles"> | number
    name?: StringFilter<"AdminRoles"> | string
  }

  export type AdminRolesOrderByWithRelationInput = {
    role_id?: SortOrder
    name?: SortOrder
  }

  export type AdminRolesWhereUniqueInput = Prisma.AtLeast<{
    role_id?: number
    name?: string
    AND?: AdminRolesWhereInput | AdminRolesWhereInput[]
    OR?: AdminRolesWhereInput[]
    NOT?: AdminRolesWhereInput | AdminRolesWhereInput[]
  }, "role_id" | "name">

  export type AdminRolesOrderByWithAggregationInput = {
    role_id?: SortOrder
    name?: SortOrder
    _count?: AdminRolesCountOrderByAggregateInput
    _avg?: AdminRolesAvgOrderByAggregateInput
    _max?: AdminRolesMaxOrderByAggregateInput
    _min?: AdminRolesMinOrderByAggregateInput
    _sum?: AdminRolesSumOrderByAggregateInput
  }

  export type AdminRolesScalarWhereWithAggregatesInput = {
    AND?: AdminRolesScalarWhereWithAggregatesInput | AdminRolesScalarWhereWithAggregatesInput[]
    OR?: AdminRolesScalarWhereWithAggregatesInput[]
    NOT?: AdminRolesScalarWhereWithAggregatesInput | AdminRolesScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"AdminRoles"> | number
    name?: StringWithAggregatesFilter<"AdminRoles"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    transaction_id?: IntFilter<"Transaction"> | number
    user_id?: IntFilter<"Transaction"> | number
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    transaction_type_id?: IntFilter<"Transaction"> | number
    transaction_date?: DateTimeFilter<"Transaction"> | Date | string
    agent_id?: IntFilter<"Transaction"> | number
    delete_status?: IntFilter<"Transaction"> | number
    register_date?: DateTimeFilter<"Transaction"> | Date | string
    updated_date?: DateTimeFilter<"Transaction"> | Date | string
    deleted_date?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    transaction_type?: XOR<TransactionTypeRelationFilter, TransactionTypeWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    transaction_type_id?: SortOrder
    transaction_date?: SortOrder
    agent_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrderInput | SortOrder
    transaction_type?: TransactionTypeOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    transaction_id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    user_id?: IntFilter<"Transaction"> | number
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    transaction_type_id?: IntFilter<"Transaction"> | number
    transaction_date?: DateTimeFilter<"Transaction"> | Date | string
    agent_id?: IntFilter<"Transaction"> | number
    delete_status?: IntFilter<"Transaction"> | number
    register_date?: DateTimeFilter<"Transaction"> | Date | string
    updated_date?: DateTimeFilter<"Transaction"> | Date | string
    deleted_date?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    transaction_type?: XOR<TransactionTypeRelationFilter, TransactionTypeWhereInput>
  }, "transaction_id">

  export type TransactionOrderByWithAggregationInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    transaction_type_id?: SortOrder
    transaction_date?: SortOrder
    agent_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrderInput | SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    transaction_id?: IntWithAggregatesFilter<"Transaction"> | number
    user_id?: IntWithAggregatesFilter<"Transaction"> | number
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    transaction_type_id?: IntWithAggregatesFilter<"Transaction"> | number
    transaction_date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    agent_id?: IntWithAggregatesFilter<"Transaction"> | number
    delete_status?: IntWithAggregatesFilter<"Transaction"> | number
    register_date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updated_date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    deleted_date?: DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null
  }

  export type TransactionTypeWhereInput = {
    AND?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    OR?: TransactionTypeWhereInput[]
    NOT?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    transaction_type_id?: IntFilter<"TransactionType"> | number
    transaction_type?: StringFilter<"TransactionType"> | string
    transation?: TransactionListRelationFilter
  }

  export type TransactionTypeOrderByWithRelationInput = {
    transaction_type_id?: SortOrder
    transaction_type?: SortOrder
    transation?: TransactionOrderByRelationAggregateInput
  }

  export type TransactionTypeWhereUniqueInput = Prisma.AtLeast<{
    transaction_type_id?: number
    transaction_type?: string
    AND?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    OR?: TransactionTypeWhereInput[]
    NOT?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    transation?: TransactionListRelationFilter
  }, "transaction_type_id" | "transaction_type">

  export type TransactionTypeOrderByWithAggregationInput = {
    transaction_type_id?: SortOrder
    transaction_type?: SortOrder
    _count?: TransactionTypeCountOrderByAggregateInput
    _avg?: TransactionTypeAvgOrderByAggregateInput
    _max?: TransactionTypeMaxOrderByAggregateInput
    _min?: TransactionTypeMinOrderByAggregateInput
    _sum?: TransactionTypeSumOrderByAggregateInput
  }

  export type TransactionTypeScalarWhereWithAggregatesInput = {
    AND?: TransactionTypeScalarWhereWithAggregatesInput | TransactionTypeScalarWhereWithAggregatesInput[]
    OR?: TransactionTypeScalarWhereWithAggregatesInput[]
    NOT?: TransactionTypeScalarWhereWithAggregatesInput | TransactionTypeScalarWhereWithAggregatesInput[]
    transaction_type_id?: IntWithAggregatesFilter<"TransactionType"> | number
    transaction_type?: StringWithAggregatesFilter<"TransactionType"> | string
  }

  export type ApproveRejectWhereInput = {
    AND?: ApproveRejectWhereInput | ApproveRejectWhereInput[]
    OR?: ApproveRejectWhereInput[]
    NOT?: ApproveRejectWhereInput | ApproveRejectWhereInput[]
    approve_reject_type_id?: IntFilter<"ApproveReject"> | number
    type?: StringFilter<"ApproveReject"> | string
  }

  export type ApproveRejectOrderByWithRelationInput = {
    approve_reject_type_id?: SortOrder
    type?: SortOrder
  }

  export type ApproveRejectWhereUniqueInput = Prisma.AtLeast<{
    approve_reject_type_id?: number
    type?: string
    AND?: ApproveRejectWhereInput | ApproveRejectWhereInput[]
    OR?: ApproveRejectWhereInput[]
    NOT?: ApproveRejectWhereInput | ApproveRejectWhereInput[]
  }, "approve_reject_type_id" | "type">

  export type ApproveRejectOrderByWithAggregationInput = {
    approve_reject_type_id?: SortOrder
    type?: SortOrder
    _count?: ApproveRejectCountOrderByAggregateInput
    _avg?: ApproveRejectAvgOrderByAggregateInput
    _max?: ApproveRejectMaxOrderByAggregateInput
    _min?: ApproveRejectMinOrderByAggregateInput
    _sum?: ApproveRejectSumOrderByAggregateInput
  }

  export type ApproveRejectScalarWhereWithAggregatesInput = {
    AND?: ApproveRejectScalarWhereWithAggregatesInput | ApproveRejectScalarWhereWithAggregatesInput[]
    OR?: ApproveRejectScalarWhereWithAggregatesInput[]
    NOT?: ApproveRejectScalarWhereWithAggregatesInput | ApproveRejectScalarWhereWithAggregatesInput[]
    approve_reject_type_id?: IntWithAggregatesFilter<"ApproveReject"> | number
    type?: StringWithAggregatesFilter<"ApproveReject"> | string
  }

  export type UsersCreateInput = {
    phone_number: string
    user_name?: string | null
    password?: string | null
    otp_code?: string | null
    sms_send_time?: Date | string | null
    is_verify?: number | null
    account_status?: number | null
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
    user_role: RolesCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    user_id?: number
    phone_number: string
    user_name?: string | null
    password?: string | null
    otp_code?: string | null
    role_id: number
    sms_send_time?: Date | string | null
    is_verify?: number | null
    account_status?: number | null
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type UsersUpdateInput = {
    phone_number?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null
    sms_send_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null
    account_status?: NullableIntFieldUpdateOperationsInput | number | null
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_role?: RolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    sms_send_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null
    account_status?: NullableIntFieldUpdateOperationsInput | number | null
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersCreateManyInput = {
    user_id?: number
    phone_number: string
    user_name?: string | null
    password?: string | null
    otp_code?: string | null
    role_id: number
    sms_send_time?: Date | string | null
    is_verify?: number | null
    account_status?: number | null
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type UsersUpdateManyMutationInput = {
    phone_number?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null
    sms_send_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null
    account_status?: NullableIntFieldUpdateOperationsInput | number | null
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    sms_send_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null
    account_status?: NullableIntFieldUpdateOperationsInput | number | null
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RolesCreateInput = {
    role_id: number
    name: string
    users?: UsersCreateNestedManyWithoutUser_roleInput
  }

  export type RolesUncheckedCreateInput = {
    role_id: number
    name: string
    users?: UsersUncheckedCreateNestedManyWithoutUser_roleInput
  }

  export type RolesUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UsersUpdateManyWithoutUser_roleNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UsersUncheckedUpdateManyWithoutUser_roleNestedInput
  }

  export type RolesCreateManyInput = {
    role_id: number
    name: string
  }

  export type RolesUpdateManyMutationInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RolesUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserWithdrawAccountCreateInput = {
    user_id: number
    account_type: string
    account_name: string
    account_id: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type UserWithdrawAccountUncheckedCreateInput = {
    user_withdraw_account_id?: number
    user_id: number
    account_type: string
    account_name: string
    account_id: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type UserWithdrawAccountUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    account_type?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWithdrawAccountUncheckedUpdateInput = {
    user_withdraw_account_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    account_type?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWithdrawAccountCreateManyInput = {
    user_withdraw_account_id?: number
    user_id: number
    account_type: string
    account_name: string
    account_id: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type UserWithdrawAccountUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    account_type?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWithdrawAccountUncheckedUpdateManyInput = {
    user_withdraw_account_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    account_type?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WalletCreateInput = {
    user_id: number
    game_amount?: Decimal | DecimalJsLike | number | string | null
    main_amount?: Decimal | DecimalJsLike | number | string | null
    agent_id: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type WalletUncheckedCreateInput = {
    wallet_id?: number
    user_id: number
    game_amount?: Decimal | DecimalJsLike | number | string | null
    main_amount?: Decimal | DecimalJsLike | number | string | null
    agent_id: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type WalletUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    game_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    main_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    agent_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WalletUncheckedUpdateInput = {
    wallet_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    game_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    main_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    agent_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WalletCreateManyInput = {
    wallet_id?: number
    user_id: number
    game_amount?: Decimal | DecimalJsLike | number | string | null
    main_amount?: Decimal | DecimalJsLike | number | string | null
    agent_id: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type WalletUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    game_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    main_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    agent_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WalletUncheckedUpdateManyInput = {
    wallet_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    game_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    main_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    agent_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentMethodCreateInput = {
    user_id: number
    payment_type: string
    payment_account_name: string
    payment_account: string
    reciver_account_type: string
    receiver_account_name: string
    receiver_account: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    approve_reject: number
    reason_for_reject?: string | null
    payment_confirm_code: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type PaymentMethodUncheckedCreateInput = {
    payment_id?: number
    user_id: number
    payment_type: string
    payment_account_name: string
    payment_account: string
    reciver_account_type: string
    receiver_account_name: string
    receiver_account: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    approve_reject: number
    reason_for_reject?: string | null
    payment_confirm_code: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type PaymentMethodUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    payment_type?: StringFieldUpdateOperationsInput | string
    payment_account_name?: StringFieldUpdateOperationsInput | string
    payment_account?: StringFieldUpdateOperationsInput | string
    reciver_account_type?: StringFieldUpdateOperationsInput | string
    receiver_account_name?: StringFieldUpdateOperationsInput | string
    receiver_account?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    approve_reject?: IntFieldUpdateOperationsInput | number
    reason_for_reject?: NullableStringFieldUpdateOperationsInput | string | null
    payment_confirm_code?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentMethodUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    payment_type?: StringFieldUpdateOperationsInput | string
    payment_account_name?: StringFieldUpdateOperationsInput | string
    payment_account?: StringFieldUpdateOperationsInput | string
    reciver_account_type?: StringFieldUpdateOperationsInput | string
    receiver_account_name?: StringFieldUpdateOperationsInput | string
    receiver_account?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    approve_reject?: IntFieldUpdateOperationsInput | number
    reason_for_reject?: NullableStringFieldUpdateOperationsInput | string | null
    payment_confirm_code?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentMethodCreateManyInput = {
    payment_id?: number
    user_id: number
    payment_type: string
    payment_account_name: string
    payment_account: string
    reciver_account_type: string
    receiver_account_name: string
    receiver_account: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    approve_reject: number
    reason_for_reject?: string | null
    payment_confirm_code: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type PaymentMethodUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    payment_type?: StringFieldUpdateOperationsInput | string
    payment_account_name?: StringFieldUpdateOperationsInput | string
    payment_account?: StringFieldUpdateOperationsInput | string
    reciver_account_type?: StringFieldUpdateOperationsInput | string
    receiver_account_name?: StringFieldUpdateOperationsInput | string
    receiver_account?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    approve_reject?: IntFieldUpdateOperationsInput | number
    reason_for_reject?: NullableStringFieldUpdateOperationsInput | string | null
    payment_confirm_code?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    payment_type?: StringFieldUpdateOperationsInput | string
    payment_account_name?: StringFieldUpdateOperationsInput | string
    payment_account?: StringFieldUpdateOperationsInput | string
    reciver_account_type?: StringFieldUpdateOperationsInput | string
    receiver_account_name?: StringFieldUpdateOperationsInput | string
    receiver_account?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    approve_reject?: IntFieldUpdateOperationsInput | number
    reason_for_reject?: NullableStringFieldUpdateOperationsInput | string | null
    payment_confirm_code?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawMethodCreateInput = {
    user_id: number
    withdraw_type: string
    receiver_account_name: string
    receiver_account: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    withdraw_confirm_code?: string | null
    is_verify?: number | null
    approve_reject: number
    reason_for_reject?: string | null
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type WithdrawMethodUncheckedCreateInput = {
    withdraw_id?: number
    user_id: number
    withdraw_type: string
    receiver_account_name: string
    receiver_account: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    withdraw_confirm_code?: string | null
    is_verify?: number | null
    approve_reject: number
    reason_for_reject?: string | null
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type WithdrawMethodUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    withdraw_type?: StringFieldUpdateOperationsInput | string
    receiver_account_name?: StringFieldUpdateOperationsInput | string
    receiver_account?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    withdraw_confirm_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null
    approve_reject?: IntFieldUpdateOperationsInput | number
    reason_for_reject?: NullableStringFieldUpdateOperationsInput | string | null
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawMethodUncheckedUpdateInput = {
    withdraw_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    withdraw_type?: StringFieldUpdateOperationsInput | string
    receiver_account_name?: StringFieldUpdateOperationsInput | string
    receiver_account?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    withdraw_confirm_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null
    approve_reject?: IntFieldUpdateOperationsInput | number
    reason_for_reject?: NullableStringFieldUpdateOperationsInput | string | null
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawMethodCreateManyInput = {
    withdraw_id?: number
    user_id: number
    withdraw_type: string
    receiver_account_name: string
    receiver_account: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    withdraw_confirm_code?: string | null
    is_verify?: number | null
    approve_reject: number
    reason_for_reject?: string | null
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type WithdrawMethodUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    withdraw_type?: StringFieldUpdateOperationsInput | string
    receiver_account_name?: StringFieldUpdateOperationsInput | string
    receiver_account?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    withdraw_confirm_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null
    approve_reject?: IntFieldUpdateOperationsInput | number
    reason_for_reject?: NullableStringFieldUpdateOperationsInput | string | null
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawMethodUncheckedUpdateManyInput = {
    withdraw_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    withdraw_type?: StringFieldUpdateOperationsInput | string
    receiver_account_name?: StringFieldUpdateOperationsInput | string
    receiver_account?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    withdraw_confirm_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null
    approve_reject?: IntFieldUpdateOperationsInput | number
    reason_for_reject?: NullableStringFieldUpdateOperationsInput | string | null
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminCreateInput = {
    admin_id: string
    admin_name?: string | null
    password?: string | null
    account_status?: string | null
    delete_status?: number | null
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type AdminUncheckedCreateInput = {
    admin_internal_id?: number
    admin_id: string
    admin_name?: string | null
    password?: string | null
    account_status?: string | null
    delete_status?: number | null
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type AdminUpdateInput = {
    admin_id?: StringFieldUpdateOperationsInput | string
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    account_status?: NullableStringFieldUpdateOperationsInput | string | null
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateInput = {
    admin_internal_id?: IntFieldUpdateOperationsInput | number
    admin_id?: StringFieldUpdateOperationsInput | string
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    account_status?: NullableStringFieldUpdateOperationsInput | string | null
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminCreateManyInput = {
    admin_internal_id?: number
    admin_id: string
    admin_name?: string | null
    password?: string | null
    account_status?: string | null
    delete_status?: number | null
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type AdminUpdateManyMutationInput = {
    admin_id?: StringFieldUpdateOperationsInput | string
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    account_status?: NullableStringFieldUpdateOperationsInput | string | null
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    admin_internal_id?: IntFieldUpdateOperationsInput | number
    admin_id?: StringFieldUpdateOperationsInput | string
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    account_status?: NullableStringFieldUpdateOperationsInput | string | null
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminRolesCreateInput = {
    role_id: number
    name: string
  }

  export type AdminRolesUncheckedCreateInput = {
    role_id: number
    name: string
  }

  export type AdminRolesUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminRolesUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminRolesCreateManyInput = {
    role_id: number
    name: string
  }

  export type AdminRolesUpdateManyMutationInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminRolesUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    user_id: number
    amount: Decimal | DecimalJsLike | number | string
    transaction_date: Date | string
    agent_id: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
    transaction_type: TransactionTypeCreateNestedOneWithoutTransationInput
  }

  export type TransactionUncheckedCreateInput = {
    transaction_id?: number
    user_id: number
    amount: Decimal | DecimalJsLike | number | string
    transaction_type_id: number
    transaction_date: Date | string
    agent_id: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type TransactionUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    agent_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction_type?: TransactionTypeUpdateOneRequiredWithoutTransationNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_type_id?: IntFieldUpdateOperationsInput | number
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    agent_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateManyInput = {
    transaction_id?: number
    user_id: number
    amount: Decimal | DecimalJsLike | number | string
    transaction_type_id: number
    transaction_date: Date | string
    agent_id: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type TransactionUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    agent_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUncheckedUpdateManyInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_type_id?: IntFieldUpdateOperationsInput | number
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    agent_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionTypeCreateInput = {
    transaction_type_id: number
    transaction_type: string
    transation?: TransactionCreateNestedManyWithoutTransaction_typeInput
  }

  export type TransactionTypeUncheckedCreateInput = {
    transaction_type_id: number
    transaction_type: string
    transation?: TransactionUncheckedCreateNestedManyWithoutTransaction_typeInput
  }

  export type TransactionTypeUpdateInput = {
    transaction_type_id?: IntFieldUpdateOperationsInput | number
    transaction_type?: StringFieldUpdateOperationsInput | string
    transation?: TransactionUpdateManyWithoutTransaction_typeNestedInput
  }

  export type TransactionTypeUncheckedUpdateInput = {
    transaction_type_id?: IntFieldUpdateOperationsInput | number
    transaction_type?: StringFieldUpdateOperationsInput | string
    transation?: TransactionUncheckedUpdateManyWithoutTransaction_typeNestedInput
  }

  export type TransactionTypeCreateManyInput = {
    transaction_type_id: number
    transaction_type: string
  }

  export type TransactionTypeUpdateManyMutationInput = {
    transaction_type_id?: IntFieldUpdateOperationsInput | number
    transaction_type?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTypeUncheckedUpdateManyInput = {
    transaction_type_id?: IntFieldUpdateOperationsInput | number
    transaction_type?: StringFieldUpdateOperationsInput | string
  }

  export type ApproveRejectCreateInput = {
    approve_reject_type_id: number
    type: string
  }

  export type ApproveRejectUncheckedCreateInput = {
    approve_reject_type_id: number
    type: string
  }

  export type ApproveRejectUpdateInput = {
    approve_reject_type_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ApproveRejectUncheckedUpdateInput = {
    approve_reject_type_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ApproveRejectCreateManyInput = {
    approve_reject_type_id: number
    type: string
  }

  export type ApproveRejectUpdateManyMutationInput = {
    approve_reject_type_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ApproveRejectUncheckedUpdateManyInput = {
    approve_reject_type_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
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

  export type RolesRelationFilter = {
    is?: RolesWhereInput
    isNot?: RolesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    phone_number?: SortOrder
    user_name?: SortOrder
    password?: SortOrder
    otp_code?: SortOrder
    role_id?: SortOrder
    sms_send_time?: SortOrder
    is_verify?: SortOrder
    account_status?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    is_verify?: SortOrder
    account_status?: SortOrder
    delete_status?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    phone_number?: SortOrder
    user_name?: SortOrder
    password?: SortOrder
    otp_code?: SortOrder
    role_id?: SortOrder
    sms_send_time?: SortOrder
    is_verify?: SortOrder
    account_status?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    phone_number?: SortOrder
    user_name?: SortOrder
    password?: SortOrder
    otp_code?: SortOrder
    role_id?: SortOrder
    sms_send_time?: SortOrder
    is_verify?: SortOrder
    account_status?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    is_verify?: SortOrder
    account_status?: SortOrder
    delete_status?: SortOrder
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

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolesCountOrderByAggregateInput = {
    role_id?: SortOrder
    name?: SortOrder
  }

  export type RolesAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    role_id?: SortOrder
    name?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    role_id?: SortOrder
    name?: SortOrder
  }

  export type RolesSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type UserWithdrawAccountCountOrderByAggregateInput = {
    user_withdraw_account_id?: SortOrder
    user_id?: SortOrder
    account_type?: SortOrder
    account_name?: SortOrder
    account_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type UserWithdrawAccountAvgOrderByAggregateInput = {
    user_withdraw_account_id?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
    delete_status?: SortOrder
  }

  export type UserWithdrawAccountMaxOrderByAggregateInput = {
    user_withdraw_account_id?: SortOrder
    user_id?: SortOrder
    account_type?: SortOrder
    account_name?: SortOrder
    account_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type UserWithdrawAccountMinOrderByAggregateInput = {
    user_withdraw_account_id?: SortOrder
    user_id?: SortOrder
    account_type?: SortOrder
    account_name?: SortOrder
    account_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type UserWithdrawAccountSumOrderByAggregateInput = {
    user_withdraw_account_id?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
    delete_status?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type WalletCountOrderByAggregateInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    game_amount?: SortOrder
    main_amount?: SortOrder
    agent_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    game_amount?: SortOrder
    main_amount?: SortOrder
    agent_id?: SortOrder
    delete_status?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    game_amount?: SortOrder
    main_amount?: SortOrder
    agent_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    game_amount?: SortOrder
    main_amount?: SortOrder
    agent_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    game_amount?: SortOrder
    main_amount?: SortOrder
    agent_id?: SortOrder
    delete_status?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type PaymentMethodCountOrderByAggregateInput = {
    payment_id?: SortOrder
    user_id?: SortOrder
    payment_type?: SortOrder
    payment_account_name?: SortOrder
    payment_account?: SortOrder
    reciver_account_type?: SortOrder
    receiver_account_name?: SortOrder
    receiver_account?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    approve_reject?: SortOrder
    reason_for_reject?: SortOrder
    payment_confirm_code?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type PaymentMethodAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    approve_reject?: SortOrder
    payment_confirm_code?: SortOrder
    delete_status?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    user_id?: SortOrder
    payment_type?: SortOrder
    payment_account_name?: SortOrder
    payment_account?: SortOrder
    reciver_account_type?: SortOrder
    receiver_account_name?: SortOrder
    receiver_account?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    approve_reject?: SortOrder
    reason_for_reject?: SortOrder
    payment_confirm_code?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    payment_id?: SortOrder
    user_id?: SortOrder
    payment_type?: SortOrder
    payment_account_name?: SortOrder
    payment_account?: SortOrder
    reciver_account_type?: SortOrder
    receiver_account_name?: SortOrder
    receiver_account?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    approve_reject?: SortOrder
    reason_for_reject?: SortOrder
    payment_confirm_code?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type PaymentMethodSumOrderByAggregateInput = {
    payment_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    approve_reject?: SortOrder
    payment_confirm_code?: SortOrder
    delete_status?: SortOrder
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

  export type WithdrawMethodCountOrderByAggregateInput = {
    withdraw_id?: SortOrder
    user_id?: SortOrder
    withdraw_type?: SortOrder
    receiver_account_name?: SortOrder
    receiver_account?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    withdraw_confirm_code?: SortOrder
    is_verify?: SortOrder
    approve_reject?: SortOrder
    reason_for_reject?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type WithdrawMethodAvgOrderByAggregateInput = {
    withdraw_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    is_verify?: SortOrder
    approve_reject?: SortOrder
    delete_status?: SortOrder
  }

  export type WithdrawMethodMaxOrderByAggregateInput = {
    withdraw_id?: SortOrder
    user_id?: SortOrder
    withdraw_type?: SortOrder
    receiver_account_name?: SortOrder
    receiver_account?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    withdraw_confirm_code?: SortOrder
    is_verify?: SortOrder
    approve_reject?: SortOrder
    reason_for_reject?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type WithdrawMethodMinOrderByAggregateInput = {
    withdraw_id?: SortOrder
    user_id?: SortOrder
    withdraw_type?: SortOrder
    receiver_account_name?: SortOrder
    receiver_account?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    withdraw_confirm_code?: SortOrder
    is_verify?: SortOrder
    approve_reject?: SortOrder
    reason_for_reject?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type WithdrawMethodSumOrderByAggregateInput = {
    withdraw_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    is_verify?: SortOrder
    approve_reject?: SortOrder
    delete_status?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    admin_internal_id?: SortOrder
    admin_id?: SortOrder
    admin_name?: SortOrder
    password?: SortOrder
    account_status?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    admin_internal_id?: SortOrder
    delete_status?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    admin_internal_id?: SortOrder
    admin_id?: SortOrder
    admin_name?: SortOrder
    password?: SortOrder
    account_status?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    admin_internal_id?: SortOrder
    admin_id?: SortOrder
    admin_name?: SortOrder
    password?: SortOrder
    account_status?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    admin_internal_id?: SortOrder
    delete_status?: SortOrder
  }

  export type AdminRolesCountOrderByAggregateInput = {
    role_id?: SortOrder
    name?: SortOrder
  }

  export type AdminRolesAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type AdminRolesMaxOrderByAggregateInput = {
    role_id?: SortOrder
    name?: SortOrder
  }

  export type AdminRolesMinOrderByAggregateInput = {
    role_id?: SortOrder
    name?: SortOrder
  }

  export type AdminRolesSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type TransactionTypeRelationFilter = {
    is?: TransactionTypeWhereInput
    isNot?: TransactionTypeWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    transaction_type_id?: SortOrder
    transaction_date?: SortOrder
    agent_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    transaction_type_id?: SortOrder
    agent_id?: SortOrder
    delete_status?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    transaction_type_id?: SortOrder
    transaction_date?: SortOrder
    agent_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    transaction_type_id?: SortOrder
    transaction_date?: SortOrder
    agent_id?: SortOrder
    delete_status?: SortOrder
    register_date?: SortOrder
    updated_date?: SortOrder
    deleted_date?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    transaction_type_id?: SortOrder
    agent_id?: SortOrder
    delete_status?: SortOrder
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionTypeCountOrderByAggregateInput = {
    transaction_type_id?: SortOrder
    transaction_type?: SortOrder
  }

  export type TransactionTypeAvgOrderByAggregateInput = {
    transaction_type_id?: SortOrder
  }

  export type TransactionTypeMaxOrderByAggregateInput = {
    transaction_type_id?: SortOrder
    transaction_type?: SortOrder
  }

  export type TransactionTypeMinOrderByAggregateInput = {
    transaction_type_id?: SortOrder
    transaction_type?: SortOrder
  }

  export type TransactionTypeSumOrderByAggregateInput = {
    transaction_type_id?: SortOrder
  }

  export type ApproveRejectCountOrderByAggregateInput = {
    approve_reject_type_id?: SortOrder
    type?: SortOrder
  }

  export type ApproveRejectAvgOrderByAggregateInput = {
    approve_reject_type_id?: SortOrder
  }

  export type ApproveRejectMaxOrderByAggregateInput = {
    approve_reject_type_id?: SortOrder
    type?: SortOrder
  }

  export type ApproveRejectMinOrderByAggregateInput = {
    approve_reject_type_id?: SortOrder
    type?: SortOrder
  }

  export type ApproveRejectSumOrderByAggregateInput = {
    approve_reject_type_id?: SortOrder
  }

  export type RolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    connect?: RolesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    upsert?: RolesUpsertWithoutUsersInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutUsersInput, RolesUpdateWithoutUsersInput>, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type UsersCreateNestedManyWithoutUser_roleInput = {
    create?: XOR<UsersCreateWithoutUser_roleInput, UsersUncheckedCreateWithoutUser_roleInput> | UsersCreateWithoutUser_roleInput[] | UsersUncheckedCreateWithoutUser_roleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutUser_roleInput | UsersCreateOrConnectWithoutUser_roleInput[]
    createMany?: UsersCreateManyUser_roleInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutUser_roleInput = {
    create?: XOR<UsersCreateWithoutUser_roleInput, UsersUncheckedCreateWithoutUser_roleInput> | UsersCreateWithoutUser_roleInput[] | UsersUncheckedCreateWithoutUser_roleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutUser_roleInput | UsersCreateOrConnectWithoutUser_roleInput[]
    createMany?: UsersCreateManyUser_roleInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutUser_roleNestedInput = {
    create?: XOR<UsersCreateWithoutUser_roleInput, UsersUncheckedCreateWithoutUser_roleInput> | UsersCreateWithoutUser_roleInput[] | UsersUncheckedCreateWithoutUser_roleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutUser_roleInput | UsersCreateOrConnectWithoutUser_roleInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutUser_roleInput | UsersUpsertWithWhereUniqueWithoutUser_roleInput[]
    createMany?: UsersCreateManyUser_roleInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutUser_roleInput | UsersUpdateWithWhereUniqueWithoutUser_roleInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutUser_roleInput | UsersUpdateManyWithWhereWithoutUser_roleInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutUser_roleNestedInput = {
    create?: XOR<UsersCreateWithoutUser_roleInput, UsersUncheckedCreateWithoutUser_roleInput> | UsersCreateWithoutUser_roleInput[] | UsersUncheckedCreateWithoutUser_roleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutUser_roleInput | UsersCreateOrConnectWithoutUser_roleInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutUser_roleInput | UsersUpsertWithWhereUniqueWithoutUser_roleInput[]
    createMany?: UsersCreateManyUser_roleInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutUser_roleInput | UsersUpdateWithWhereUniqueWithoutUser_roleInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutUser_roleInput | UsersUpdateManyWithWhereWithoutUser_roleInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type TransactionTypeCreateNestedOneWithoutTransationInput = {
    create?: XOR<TransactionTypeCreateWithoutTransationInput, TransactionTypeUncheckedCreateWithoutTransationInput>
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutTransationInput
    connect?: TransactionTypeWhereUniqueInput
  }

  export type TransactionTypeUpdateOneRequiredWithoutTransationNestedInput = {
    create?: XOR<TransactionTypeCreateWithoutTransationInput, TransactionTypeUncheckedCreateWithoutTransationInput>
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutTransationInput
    upsert?: TransactionTypeUpsertWithoutTransationInput
    connect?: TransactionTypeWhereUniqueInput
    update?: XOR<XOR<TransactionTypeUpdateToOneWithWhereWithoutTransationInput, TransactionTypeUpdateWithoutTransationInput>, TransactionTypeUncheckedUpdateWithoutTransationInput>
  }

  export type TransactionCreateNestedManyWithoutTransaction_typeInput = {
    create?: XOR<TransactionCreateWithoutTransaction_typeInput, TransactionUncheckedCreateWithoutTransaction_typeInput> | TransactionCreateWithoutTransaction_typeInput[] | TransactionUncheckedCreateWithoutTransaction_typeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTransaction_typeInput | TransactionCreateOrConnectWithoutTransaction_typeInput[]
    createMany?: TransactionCreateManyTransaction_typeInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutTransaction_typeInput = {
    create?: XOR<TransactionCreateWithoutTransaction_typeInput, TransactionUncheckedCreateWithoutTransaction_typeInput> | TransactionCreateWithoutTransaction_typeInput[] | TransactionUncheckedCreateWithoutTransaction_typeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTransaction_typeInput | TransactionCreateOrConnectWithoutTransaction_typeInput[]
    createMany?: TransactionCreateManyTransaction_typeInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutTransaction_typeNestedInput = {
    create?: XOR<TransactionCreateWithoutTransaction_typeInput, TransactionUncheckedCreateWithoutTransaction_typeInput> | TransactionCreateWithoutTransaction_typeInput[] | TransactionUncheckedCreateWithoutTransaction_typeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTransaction_typeInput | TransactionCreateOrConnectWithoutTransaction_typeInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTransaction_typeInput | TransactionUpsertWithWhereUniqueWithoutTransaction_typeInput[]
    createMany?: TransactionCreateManyTransaction_typeInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTransaction_typeInput | TransactionUpdateWithWhereUniqueWithoutTransaction_typeInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTransaction_typeInput | TransactionUpdateManyWithWhereWithoutTransaction_typeInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutTransaction_typeNestedInput = {
    create?: XOR<TransactionCreateWithoutTransaction_typeInput, TransactionUncheckedCreateWithoutTransaction_typeInput> | TransactionCreateWithoutTransaction_typeInput[] | TransactionUncheckedCreateWithoutTransaction_typeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTransaction_typeInput | TransactionCreateOrConnectWithoutTransaction_typeInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTransaction_typeInput | TransactionUpsertWithWhereUniqueWithoutTransaction_typeInput[]
    createMany?: TransactionCreateManyTransaction_typeInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTransaction_typeInput | TransactionUpdateWithWhereUniqueWithoutTransaction_typeInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTransaction_typeInput | TransactionUpdateManyWithWhereWithoutTransaction_typeInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type RolesCreateWithoutUsersInput = {
    role_id: number
    name: string
  }

  export type RolesUncheckedCreateWithoutUsersInput = {
    role_id: number
    name: string
  }

  export type RolesCreateOrConnectWithoutUsersInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
  }

  export type RolesUpsertWithoutUsersInput = {
    update: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type RolesUpdateWithoutUsersInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RolesUncheckedUpdateWithoutUsersInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateWithoutUser_roleInput = {
    phone_number: string
    user_name?: string | null
    password?: string | null
    otp_code?: string | null
    sms_send_time?: Date | string | null
    is_verify?: number | null
    account_status?: number | null
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type UsersUncheckedCreateWithoutUser_roleInput = {
    user_id?: number
    phone_number: string
    user_name?: string | null
    password?: string | null
    otp_code?: string | null
    sms_send_time?: Date | string | null
    is_verify?: number | null
    account_status?: number | null
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type UsersCreateOrConnectWithoutUser_roleInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUser_roleInput, UsersUncheckedCreateWithoutUser_roleInput>
  }

  export type UsersCreateManyUser_roleInputEnvelope = {
    data: UsersCreateManyUser_roleInput | UsersCreateManyUser_roleInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutUser_roleInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutUser_roleInput, UsersUncheckedUpdateWithoutUser_roleInput>
    create: XOR<UsersCreateWithoutUser_roleInput, UsersUncheckedCreateWithoutUser_roleInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutUser_roleInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutUser_roleInput, UsersUncheckedUpdateWithoutUser_roleInput>
  }

  export type UsersUpdateManyWithWhereWithoutUser_roleInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutUser_roleInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    user_id?: IntFilter<"Users"> | number
    phone_number?: StringFilter<"Users"> | string
    user_name?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    otp_code?: StringNullableFilter<"Users"> | string | null
    role_id?: IntFilter<"Users"> | number
    sms_send_time?: DateTimeNullableFilter<"Users"> | Date | string | null
    is_verify?: IntNullableFilter<"Users"> | number | null
    account_status?: IntNullableFilter<"Users"> | number | null
    delete_status?: IntFilter<"Users"> | number
    register_date?: DateTimeFilter<"Users"> | Date | string
    updated_date?: DateTimeFilter<"Users"> | Date | string
    deleted_date?: DateTimeNullableFilter<"Users"> | Date | string | null
  }

  export type TransactionTypeCreateWithoutTransationInput = {
    transaction_type_id: number
    transaction_type: string
  }

  export type TransactionTypeUncheckedCreateWithoutTransationInput = {
    transaction_type_id: number
    transaction_type: string
  }

  export type TransactionTypeCreateOrConnectWithoutTransationInput = {
    where: TransactionTypeWhereUniqueInput
    create: XOR<TransactionTypeCreateWithoutTransationInput, TransactionTypeUncheckedCreateWithoutTransationInput>
  }

  export type TransactionTypeUpsertWithoutTransationInput = {
    update: XOR<TransactionTypeUpdateWithoutTransationInput, TransactionTypeUncheckedUpdateWithoutTransationInput>
    create: XOR<TransactionTypeCreateWithoutTransationInput, TransactionTypeUncheckedCreateWithoutTransationInput>
    where?: TransactionTypeWhereInput
  }

  export type TransactionTypeUpdateToOneWithWhereWithoutTransationInput = {
    where?: TransactionTypeWhereInput
    data: XOR<TransactionTypeUpdateWithoutTransationInput, TransactionTypeUncheckedUpdateWithoutTransationInput>
  }

  export type TransactionTypeUpdateWithoutTransationInput = {
    transaction_type_id?: IntFieldUpdateOperationsInput | number
    transaction_type?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTypeUncheckedUpdateWithoutTransationInput = {
    transaction_type_id?: IntFieldUpdateOperationsInput | number
    transaction_type?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateWithoutTransaction_typeInput = {
    user_id: number
    amount: Decimal | DecimalJsLike | number | string
    transaction_date: Date | string
    agent_id: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type TransactionUncheckedCreateWithoutTransaction_typeInput = {
    transaction_id?: number
    user_id: number
    amount: Decimal | DecimalJsLike | number | string
    transaction_date: Date | string
    agent_id: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type TransactionCreateOrConnectWithoutTransaction_typeInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutTransaction_typeInput, TransactionUncheckedCreateWithoutTransaction_typeInput>
  }

  export type TransactionCreateManyTransaction_typeInputEnvelope = {
    data: TransactionCreateManyTransaction_typeInput | TransactionCreateManyTransaction_typeInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutTransaction_typeInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutTransaction_typeInput, TransactionUncheckedUpdateWithoutTransaction_typeInput>
    create: XOR<TransactionCreateWithoutTransaction_typeInput, TransactionUncheckedCreateWithoutTransaction_typeInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutTransaction_typeInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutTransaction_typeInput, TransactionUncheckedUpdateWithoutTransaction_typeInput>
  }

  export type TransactionUpdateManyWithWhereWithoutTransaction_typeInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTransaction_typeInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    transaction_id?: IntFilter<"Transaction"> | number
    user_id?: IntFilter<"Transaction"> | number
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    transaction_type_id?: IntFilter<"Transaction"> | number
    transaction_date?: DateTimeFilter<"Transaction"> | Date | string
    agent_id?: IntFilter<"Transaction"> | number
    delete_status?: IntFilter<"Transaction"> | number
    register_date?: DateTimeFilter<"Transaction"> | Date | string
    updated_date?: DateTimeFilter<"Transaction"> | Date | string
    deleted_date?: DateTimeNullableFilter<"Transaction"> | Date | string | null
  }

  export type UsersCreateManyUser_roleInput = {
    user_id?: number
    phone_number: string
    user_name?: string | null
    password?: string | null
    otp_code?: string | null
    sms_send_time?: Date | string | null
    is_verify?: number | null
    account_status?: number | null
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type UsersUpdateWithoutUser_roleInput = {
    phone_number?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null
    sms_send_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null
    account_status?: NullableIntFieldUpdateOperationsInput | number | null
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateWithoutUser_roleInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null
    sms_send_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null
    account_status?: NullableIntFieldUpdateOperationsInput | number | null
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateManyWithoutUser_roleInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null
    sms_send_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null
    account_status?: NullableIntFieldUpdateOperationsInput | number | null
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateManyTransaction_typeInput = {
    transaction_id?: number
    user_id: number
    amount: Decimal | DecimalJsLike | number | string
    transaction_date: Date | string
    agent_id: number
    delete_status: number
    register_date?: Date | string
    updated_date?: Date | string
    deleted_date?: Date | string | null
  }

  export type TransactionUpdateWithoutTransaction_typeInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    agent_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUncheckedUpdateWithoutTransaction_typeInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    agent_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutTransaction_typeInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    agent_id?: IntFieldUpdateOperationsInput | number
    delete_status?: IntFieldUpdateOperationsInput | number
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RolesCountOutputTypeDefaultArgs instead
     */
    export type RolesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionTypeCountOutputTypeDefaultArgs instead
     */
    export type TransactionTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolesDefaultArgs instead
     */
    export type RolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserWithdrawAccountDefaultArgs instead
     */
    export type UserWithdrawAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserWithdrawAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WalletDefaultArgs instead
     */
    export type WalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WalletDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentMethodDefaultArgs instead
     */
    export type PaymentMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentMethodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WithdrawMethodDefaultArgs instead
     */
    export type WithdrawMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WithdrawMethodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminRolesDefaultArgs instead
     */
    export type AdminRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminRolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionTypeDefaultArgs instead
     */
    export type TransactionTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApproveRejectDefaultArgs instead
     */
    export type ApproveRejectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApproveRejectDefaultArgs<ExtArgs>

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