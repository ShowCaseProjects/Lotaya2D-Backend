/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Users
 *
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>;
/**
 * Model Roles
 *
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>;
/**
 * Model UserWithdrawAccount
 *
 */
export type UserWithdrawAccount =
  $Result.DefaultSelection<Prisma.$UserWithdrawAccountPayload>;
/**
 * Model AdminReceiverAccount
 *
 */
export type AdminReceiverAccount =
  $Result.DefaultSelection<Prisma.$AdminReceiverAccountPayload>;
/**
 * Model Wallet
 *
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>;
/**
 * Model Payment
 *
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>;
/**
 * Model Withdraw
 *
 */
export type Withdraw = $Result.DefaultSelection<Prisma.$WithdrawPayload>;
/**
 * Model Admin
 *
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>;
/**
 * Model AdminRoles
 *
 */
export type AdminRoles = $Result.DefaultSelection<Prisma.$AdminRolesPayload>;
/**
 * Model Transaction
 *
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>;
/**
 * Model TransactionType
 *
 */
export type TransactionType =
  $Result.DefaultSelection<Prisma.$TransactionTypePayload>;
/**
 * Model ApproveReject
 *
 */
export type ApproveReject =
  $Result.DefaultSelection<Prisma.$ApproveRejectPayload>;

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
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

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

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

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
   * `prisma.adminReceiverAccount`: Exposes CRUD operations for the **AdminReceiverAccount** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AdminReceiverAccounts
   * const adminReceiverAccounts = await prisma.adminReceiverAccount.findMany()
   * ```
   */
  get adminReceiverAccount(): Prisma.AdminReceiverAccountDelegate<ExtArgs>;

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
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
   * ```
   */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.withdraw`: Exposes CRUD operations for the **Withdraw** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Withdraws
   * const withdraws = await prisma.withdraw.findMany()
   * ```
   */
  get withdraw(): Prisma.WithdrawDelegate<ExtArgs>;

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
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null;
  };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

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
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray
    | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Users: 'Users';
    Roles: 'Roles';
    UserWithdrawAccount: 'UserWithdrawAccount';
    AdminReceiverAccount: 'AdminReceiverAccount';
    Wallet: 'Wallet';
    Payment: 'Payment';
    Withdraw: 'Withdraw';
    Admin: 'Admin';
    AdminRoles: 'AdminRoles';
    Transaction: 'Transaction';
    TransactionType: 'TransactionType';
    ApproveReject: 'ApproveReject';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    meta: {
      modelProps:
        | 'users'
        | 'roles'
        | 'userWithdrawAccount'
        | 'adminReceiverAccount'
        | 'wallet'
        | 'payment'
        | 'withdraw'
        | 'admin'
        | 'adminRoles'
        | 'transaction'
        | 'transactionType'
        | 'approveReject';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>;
        fields: Prisma.UsersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[];
          };
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUsers>;
          };
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UsersGroupByOutputType>[];
          };
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>;
            result: $Utils.Optional<UsersCountAggregateOutputType> | number;
          };
        };
      };
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>;
        fields: Prisma.RolesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>;
          };
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>;
          };
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[];
          };
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>;
          };
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>;
          };
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>;
          };
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>;
          };
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRoles>;
          };
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RolesGroupByOutputType>[];
          };
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>;
            result: $Utils.Optional<RolesCountAggregateOutputType> | number;
          };
        };
      };
      UserWithdrawAccount: {
        payload: Prisma.$UserWithdrawAccountPayload<ExtArgs>;
        fields: Prisma.UserWithdrawAccountFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserWithdrawAccountFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserWithdrawAccountFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload>;
          };
          findFirst: {
            args: Prisma.UserWithdrawAccountFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserWithdrawAccountFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload>;
          };
          findMany: {
            args: Prisma.UserWithdrawAccountFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload>[];
          };
          create: {
            args: Prisma.UserWithdrawAccountCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload>;
          };
          createMany: {
            args: Prisma.UserWithdrawAccountCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.UserWithdrawAccountDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload>;
          };
          update: {
            args: Prisma.UserWithdrawAccountUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload>;
          };
          deleteMany: {
            args: Prisma.UserWithdrawAccountDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.UserWithdrawAccountUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.UserWithdrawAccountUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserWithdrawAccountPayload>;
          };
          aggregate: {
            args: Prisma.UserWithdrawAccountAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserWithdrawAccount>;
          };
          groupBy: {
            args: Prisma.UserWithdrawAccountGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserWithdrawAccountGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserWithdrawAccountCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<UserWithdrawAccountCountAggregateOutputType>
              | number;
          };
        };
      };
      AdminReceiverAccount: {
        payload: Prisma.$AdminReceiverAccountPayload<ExtArgs>;
        fields: Prisma.AdminReceiverAccountFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AdminReceiverAccountFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminReceiverAccountPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AdminReceiverAccountFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminReceiverAccountPayload>;
          };
          findFirst: {
            args: Prisma.AdminReceiverAccountFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminReceiverAccountPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AdminReceiverAccountFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminReceiverAccountPayload>;
          };
          findMany: {
            args: Prisma.AdminReceiverAccountFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminReceiverAccountPayload>[];
          };
          create: {
            args: Prisma.AdminReceiverAccountCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminReceiverAccountPayload>;
          };
          createMany: {
            args: Prisma.AdminReceiverAccountCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.AdminReceiverAccountDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminReceiverAccountPayload>;
          };
          update: {
            args: Prisma.AdminReceiverAccountUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminReceiverAccountPayload>;
          };
          deleteMany: {
            args: Prisma.AdminReceiverAccountDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.AdminReceiverAccountUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.AdminReceiverAccountUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminReceiverAccountPayload>;
          };
          aggregate: {
            args: Prisma.AdminReceiverAccountAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAdminReceiverAccount>;
          };
          groupBy: {
            args: Prisma.AdminReceiverAccountGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AdminReceiverAccountGroupByOutputType>[];
          };
          count: {
            args: Prisma.AdminReceiverAccountCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<AdminReceiverAccountCountAggregateOutputType>
              | number;
          };
        };
      };
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>;
        fields: Prisma.WalletFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[];
          };
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>;
          };
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateWallet>;
          };
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>;
            result: $Utils.Optional<WalletGroupByOutputType>[];
          };
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>;
            result: $Utils.Optional<WalletCountAggregateOutputType> | number;
          };
        };
      };
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>;
        fields: Prisma.PaymentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[];
          };
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePayment>;
          };
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PaymentGroupByOutputType>[];
          };
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>;
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number;
          };
        };
      };
      Withdraw: {
        payload: Prisma.$WithdrawPayload<ExtArgs>;
        fields: Prisma.WithdrawFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.WithdrawFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WithdrawPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.WithdrawFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WithdrawPayload>;
          };
          findFirst: {
            args: Prisma.WithdrawFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WithdrawPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.WithdrawFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WithdrawPayload>;
          };
          findMany: {
            args: Prisma.WithdrawFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WithdrawPayload>[];
          };
          create: {
            args: Prisma.WithdrawCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WithdrawPayload>;
          };
          createMany: {
            args: Prisma.WithdrawCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.WithdrawDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WithdrawPayload>;
          };
          update: {
            args: Prisma.WithdrawUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WithdrawPayload>;
          };
          deleteMany: {
            args: Prisma.WithdrawDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.WithdrawUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.WithdrawUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WithdrawPayload>;
          };
          aggregate: {
            args: Prisma.WithdrawAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateWithdraw>;
          };
          groupBy: {
            args: Prisma.WithdrawGroupByArgs<ExtArgs>;
            result: $Utils.Optional<WithdrawGroupByOutputType>[];
          };
          count: {
            args: Prisma.WithdrawCountArgs<ExtArgs>;
            result: $Utils.Optional<WithdrawCountAggregateOutputType> | number;
          };
        };
      };
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>;
        fields: Prisma.AdminFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[];
          };
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAdmin>;
          };
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AdminGroupByOutputType>[];
          };
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>;
            result: $Utils.Optional<AdminCountAggregateOutputType> | number;
          };
        };
      };
      AdminRoles: {
        payload: Prisma.$AdminRolesPayload<ExtArgs>;
        fields: Prisma.AdminRolesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AdminRolesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AdminRolesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload>;
          };
          findFirst: {
            args: Prisma.AdminRolesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AdminRolesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload>;
          };
          findMany: {
            args: Prisma.AdminRolesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload>[];
          };
          create: {
            args: Prisma.AdminRolesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload>;
          };
          createMany: {
            args: Prisma.AdminRolesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.AdminRolesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload>;
          };
          update: {
            args: Prisma.AdminRolesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload>;
          };
          deleteMany: {
            args: Prisma.AdminRolesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.AdminRolesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.AdminRolesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminRolesPayload>;
          };
          aggregate: {
            args: Prisma.AdminRolesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAdminRoles>;
          };
          groupBy: {
            args: Prisma.AdminRolesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AdminRolesGroupByOutputType>[];
          };
          count: {
            args: Prisma.AdminRolesCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<AdminRolesCountAggregateOutputType>
              | number;
          };
        };
      };
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>;
        fields: Prisma.TransactionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[];
          };
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTransaction>;
          };
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TransactionGroupByOutputType>[];
          };
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TransactionCountAggregateOutputType>
              | number;
          };
        };
      };
      TransactionType: {
        payload: Prisma.$TransactionTypePayload<ExtArgs>;
        fields: Prisma.TransactionTypeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TransactionTypeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TransactionTypeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>;
          };
          findFirst: {
            args: Prisma.TransactionTypeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TransactionTypeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>;
          };
          findMany: {
            args: Prisma.TransactionTypeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>[];
          };
          create: {
            args: Prisma.TransactionTypeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>;
          };
          createMany: {
            args: Prisma.TransactionTypeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.TransactionTypeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>;
          };
          update: {
            args: Prisma.TransactionTypeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>;
          };
          deleteMany: {
            args: Prisma.TransactionTypeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.TransactionTypeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.TransactionTypeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>;
          };
          aggregate: {
            args: Prisma.TransactionTypeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTransactionType>;
          };
          groupBy: {
            args: Prisma.TransactionTypeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TransactionTypeGroupByOutputType>[];
          };
          count: {
            args: Prisma.TransactionTypeCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TransactionTypeCountAggregateOutputType>
              | number;
          };
        };
      };
      ApproveReject: {
        payload: Prisma.$ApproveRejectPayload<ExtArgs>;
        fields: Prisma.ApproveRejectFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ApproveRejectFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ApproveRejectFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload>;
          };
          findFirst: {
            args: Prisma.ApproveRejectFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ApproveRejectFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload>;
          };
          findMany: {
            args: Prisma.ApproveRejectFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload>[];
          };
          create: {
            args: Prisma.ApproveRejectCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload>;
          };
          createMany: {
            args: Prisma.ApproveRejectCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.ApproveRejectDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload>;
          };
          update: {
            args: Prisma.ApproveRejectUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload>;
          };
          deleteMany: {
            args: Prisma.ApproveRejectDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.ApproveRejectUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.ApproveRejectUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApproveRejectPayload>;
          };
          aggregate: {
            args: Prisma.ApproveRejectAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApproveReject>;
          };
          groupBy: {
            args: Prisma.ApproveRejectGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ApproveRejectGroupByOutputType>[];
          };
          count: {
            args: Prisma.ApproveRejectCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ApproveRejectCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    withdrawaccount: number;
    wallet: number;
    payment: number;
    withdraw: number;
    transation: number;
  };

  export type UsersCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    withdrawaccount?: boolean | UsersCountOutputTypeCountWithdrawaccountArgs;
    wallet?: boolean | UsersCountOutputTypeCountWalletArgs;
    payment?: boolean | UsersCountOutputTypeCountPaymentArgs;
    withdraw?: boolean | UsersCountOutputTypeCountWithdrawArgs;
    transation?: boolean | UsersCountOutputTypeCountTransationArgs;
  };

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWithdrawaccountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWithdrawAccountWhereInput;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWalletArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: WalletWhereInput;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPaymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentWhereInput;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWithdrawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: WithdrawWhereInput;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionWhereInput;
  };

  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number;
  };

  export type RolesCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs;
  };

  // Custom InputTypes

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UsersWhereInput;
  };

  /**
   * Count Type UserWithdrawAccountCountOutputType
   */

  export type UserWithdrawAccountCountOutputType = {
    withdraw: number;
  };

  export type UserWithdrawAccountCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    withdraw?: boolean | UserWithdrawAccountCountOutputTypeCountWithdrawArgs;
  };

  // Custom InputTypes

  /**
   * UserWithdrawAccountCountOutputType without action
   */
  export type UserWithdrawAccountCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccountCountOutputType
     */
    select?: UserWithdrawAccountCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserWithdrawAccountCountOutputType without action
   */
  export type UserWithdrawAccountCountOutputTypeCountWithdrawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: WithdrawWhereInput;
  };

  /**
   * Count Type AdminReceiverAccountCountOutputType
   */

  export type AdminReceiverAccountCountOutputType = {
    payment: number;
  };

  export type AdminReceiverAccountCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    payment?: boolean | AdminReceiverAccountCountOutputTypeCountPaymentArgs;
  };

  // Custom InputTypes

  /**
   * AdminReceiverAccountCountOutputType without action
   */
  export type AdminReceiverAccountCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminReceiverAccountCountOutputType
     */
    select?: AdminReceiverAccountCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AdminReceiverAccountCountOutputType without action
   */
  export type AdminReceiverAccountCountOutputTypeCountPaymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentWhereInput;
  };

  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    payment: number;
    withdraw: number;
  };

  export type AdminCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    payment?: boolean | AdminCountOutputTypeCountPaymentArgs;
    withdraw?: boolean | AdminCountOutputTypeCountWithdrawArgs;
  };

  // Custom InputTypes

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountPaymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentWhereInput;
  };

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountWithdrawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: WithdrawWhereInput;
  };

  /**
   * Count Type AdminRolesCountOutputType
   */

  export type AdminRolesCountOutputType = {
    admins: number;
  };

  export type AdminRolesCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    admins?: boolean | AdminRolesCountOutputTypeCountAdminsArgs;
  };

  // Custom InputTypes

  /**
   * AdminRolesCountOutputType without action
   */
  export type AdminRolesCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminRolesCountOutputType
     */
    select?: AdminRolesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AdminRolesCountOutputType without action
   */
  export type AdminRolesCountOutputTypeCountAdminsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AdminWhereInput;
  };

  /**
   * Count Type TransactionTypeCountOutputType
   */

  export type TransactionTypeCountOutputType = {
    transation: number;
  };

  export type TransactionTypeCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transation?: boolean | TransactionTypeCountOutputTypeCountTransationArgs;
  };

  // Custom InputTypes

  /**
   * TransactionTypeCountOutputType without action
   */
  export type TransactionTypeCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionTypeCountOutputType
     */
    select?: TransactionTypeCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TransactionTypeCountOutputType without action
   */
  export type TransactionTypeCountOutputTypeCountTransationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
  };

  export type UsersAvgAggregateOutputType = {
    role_id: number | null;
    is_verify: number | null;
    account_status: number | null;
    delete_status: number | null;
  };

  export type UsersSumAggregateOutputType = {
    role_id: number | null;
    is_verify: number | null;
    account_status: number | null;
    delete_status: number | null;
  };

  export type UsersMinAggregateOutputType = {
    user_internal_id: string | null;
    phone_number: string | null;
    user_name: string | null;
    password: string | null;
    otp_code: string | null;
    role_id: number | null;
    sms_send_time: Date | null;
    is_verify: number | null;
    account_status: number | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type UsersMaxAggregateOutputType = {
    user_internal_id: string | null;
    phone_number: string | null;
    user_name: string | null;
    password: string | null;
    otp_code: string | null;
    role_id: number | null;
    sms_send_time: Date | null;
    is_verify: number | null;
    account_status: number | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type UsersCountAggregateOutputType = {
    user_internal_id: number;
    phone_number: number;
    user_name: number;
    password: number;
    otp_code: number;
    role_id: number;
    sms_send_time: number;
    is_verify: number;
    account_status: number;
    delete_status: number;
    register_date: number;
    updated_date: number;
    deleted_date: number;
    _all: number;
  };

  export type UsersAvgAggregateInputType = {
    role_id?: true;
    is_verify?: true;
    account_status?: true;
    delete_status?: true;
  };

  export type UsersSumAggregateInputType = {
    role_id?: true;
    is_verify?: true;
    account_status?: true;
    delete_status?: true;
  };

  export type UsersMinAggregateInputType = {
    user_internal_id?: true;
    phone_number?: true;
    user_name?: true;
    password?: true;
    otp_code?: true;
    role_id?: true;
    sms_send_time?: true;
    is_verify?: true;
    account_status?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type UsersMaxAggregateInputType = {
    user_internal_id?: true;
    phone_number?: true;
    user_name?: true;
    password?: true;
    otp_code?: true;
    role_id?: true;
    sms_send_time?: true;
    is_verify?: true;
    account_status?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type UsersCountAggregateInputType = {
    user_internal_id?: true;
    phone_number?: true;
    user_name?: true;
    password?: true;
    otp_code?: true;
    role_id?: true;
    sms_send_time?: true;
    is_verify?: true;
    account_status?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
    _all?: true;
  };

  export type UsersAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UsersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UsersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UsersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UsersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UsersMaxAggregateInputType;
  };

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>;
  };

  export type UsersGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UsersWhereInput;
    orderBy?:
      | UsersOrderByWithAggregationInput
      | UsersOrderByWithAggregationInput[];
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum;
    having?: UsersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
  };

  export type UsersGroupByOutputType = {
    user_internal_id: string;
    phone_number: string;
    user_name: string | null;
    password: string | null;
    otp_code: string | null;
    role_id: number;
    sms_send_time: Date | null;
    is_verify: number | null;
    account_status: number | null;
    delete_status: number;
    register_date: Date;
    updated_date: Date;
    deleted_date: Date | null;
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
  };

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UsersGroupByOutputType, T['by']> & {
          [P in keyof T & keyof UsersGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>;
        }
      >
    >;

  export type UsersSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_internal_id?: boolean;
      phone_number?: boolean;
      user_name?: boolean;
      password?: boolean;
      otp_code?: boolean;
      role_id?: boolean;
      sms_send_time?: boolean;
      is_verify?: boolean;
      account_status?: boolean;
      delete_status?: boolean;
      register_date?: boolean;
      updated_date?: boolean;
      deleted_date?: boolean;
      user_role?: boolean | RolesDefaultArgs<ExtArgs>;
      withdrawaccount?: boolean | Users$withdrawaccountArgs<ExtArgs>;
      wallet?: boolean | Users$walletArgs<ExtArgs>;
      payment?: boolean | Users$paymentArgs<ExtArgs>;
      withdraw?: boolean | Users$withdrawArgs<ExtArgs>;
      transation?: boolean | Users$transationArgs<ExtArgs>;
      _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['users']
  >;

  export type UsersSelectScalar = {
    user_internal_id?: boolean;
    phone_number?: boolean;
    user_name?: boolean;
    password?: boolean;
    otp_code?: boolean;
    role_id?: boolean;
    sms_send_time?: boolean;
    is_verify?: boolean;
    account_status?: boolean;
    delete_status?: boolean;
    register_date?: boolean;
    updated_date?: boolean;
    deleted_date?: boolean;
  };

  export type UsersInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user_role?: boolean | RolesDefaultArgs<ExtArgs>;
    withdrawaccount?: boolean | Users$withdrawaccountArgs<ExtArgs>;
    wallet?: boolean | Users$walletArgs<ExtArgs>;
    payment?: boolean | Users$paymentArgs<ExtArgs>;
    withdraw?: boolean | Users$withdrawArgs<ExtArgs>;
    transation?: boolean | Users$transationArgs<ExtArgs>;
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $UsersPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Users';
    objects: {
      user_role: Prisma.$RolesPayload<ExtArgs>;
      withdrawaccount: Prisma.$UserWithdrawAccountPayload<ExtArgs>[];
      wallet: Prisma.$WalletPayload<ExtArgs>[];
      payment: Prisma.$PaymentPayload<ExtArgs>[];
      withdraw: Prisma.$WithdrawPayload<ExtArgs>[];
      transation: Prisma.$TransactionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        user_internal_id: string;
        phone_number: string;
        user_name: string | null;
        password: string | null;
        otp_code: string | null;
        role_id: number;
        sms_send_time: Date | null;
        is_verify: number | null;
        account_status: number | null;
        delete_status: number;
        register_date: Date;
        updated_date: Date;
        deleted_date: Date | null;
      },
      ExtArgs['result']['users']
    >;
    composites: {};
  };

  type UsersGetPayload<
    S extends boolean | null | undefined | UsersDefaultArgs,
  > = $Result.GetResult<Prisma.$UsersPayload, S>;

  type UsersCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: UsersCountAggregateInputType | true;
  };

  export interface UsersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Users'];
      meta: { name: 'Users' };
    };
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
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

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
     * // Only select the `user_internal_id`
     * const usersWithUser_internal_idOnly = await prisma.users.findMany({ select: { user_internal_id: true } })
     *
     **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>
    >;

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
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

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
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

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
    >;

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
    aggregate<T extends UsersAggregateArgs>(
      args: Subset<T, UsersAggregateArgs>,
    ): Prisma.PrismaPromise<GetUsersAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUsersGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__UsersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_role<T extends RolesDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RolesDefaultArgs<ExtArgs>>,
    ): Prisma__RolesClient<
      | $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;

    withdrawaccount<T extends Users$withdrawaccountArgs<ExtArgs> = {}>(
      args?: Subset<T, Users$withdrawaccountArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserWithdrawAccountPayload<ExtArgs>,
          T,
          'findMany'
        >
      | Null
    >;

    wallet<T extends Users$walletArgs<ExtArgs> = {}>(
      args?: Subset<T, Users$walletArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    payment<T extends Users$paymentArgs<ExtArgs> = {}>(
      args?: Subset<T, Users$paymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    withdraw<T extends Users$withdrawArgs<ExtArgs> = {}>(
      args?: Subset<T, Users$withdrawArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$WithdrawPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    transation<T extends Users$transationArgs<ExtArgs> = {}>(
      args?: Subset<T, Users$transationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'>
      | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
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
    readonly user_internal_id: FieldRef<'Users', 'String'>;
    readonly phone_number: FieldRef<'Users', 'String'>;
    readonly user_name: FieldRef<'Users', 'String'>;
    readonly password: FieldRef<'Users', 'String'>;
    readonly otp_code: FieldRef<'Users', 'String'>;
    readonly role_id: FieldRef<'Users', 'Int'>;
    readonly sms_send_time: FieldRef<'Users', 'DateTime'>;
    readonly is_verify: FieldRef<'Users', 'Int'>;
    readonly account_status: FieldRef<'Users', 'Int'>;
    readonly delete_status: FieldRef<'Users', 'Int'>;
    readonly register_date: FieldRef<'Users', 'DateTime'>;
    readonly updated_date: FieldRef<'Users', 'DateTime'>;
    readonly deleted_date: FieldRef<'Users', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput;
  };

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput;
  };

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * Users create
   */
  export type UsersCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>;
  };

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Users update
   */
  export type UsersUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>;
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput;
  };

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput;
  };

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput;
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>;
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>;
  };

  /**
   * Users delete
   */
  export type UsersDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput;
  };

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput;
  };

  /**
   * Users.withdrawaccount
   */
  export type Users$withdrawaccountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserWithdrawAccountInclude<ExtArgs> | null;
    where?: UserWithdrawAccountWhereInput;
    orderBy?:
      | UserWithdrawAccountOrderByWithRelationInput
      | UserWithdrawAccountOrderByWithRelationInput[];
    cursor?: UserWithdrawAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | UserWithdrawAccountScalarFieldEnum
      | UserWithdrawAccountScalarFieldEnum[];
  };

  /**
   * Users.wallet
   */
  export type Users$walletArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalletInclude<ExtArgs> | null;
    where?: WalletWhereInput;
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[];
    cursor?: WalletWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[];
  };

  /**
   * Users.payment
   */
  export type Users$paymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null;
    where?: PaymentWhereInput;
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    cursor?: PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Users.withdraw
   */
  export type Users$withdrawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Withdraw
     */
    select?: WithdrawSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawInclude<ExtArgs> | null;
    where?: WithdrawWhereInput;
    orderBy?:
      | WithdrawOrderByWithRelationInput
      | WithdrawOrderByWithRelationInput[];
    cursor?: WithdrawWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: WithdrawScalarFieldEnum | WithdrawScalarFieldEnum[];
  };

  /**
   * Users.transation
   */
  export type Users$transationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null;
    where?: TransactionWhereInput;
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    cursor?: TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * Users without action
   */
  export type UsersDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
  };

  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null;
    _avg: RolesAvgAggregateOutputType | null;
    _sum: RolesSumAggregateOutputType | null;
    _min: RolesMinAggregateOutputType | null;
    _max: RolesMaxAggregateOutputType | null;
  };

  export type RolesAvgAggregateOutputType = {
    role_id: number | null;
  };

  export type RolesSumAggregateOutputType = {
    role_id: number | null;
  };

  export type RolesMinAggregateOutputType = {
    role_id: number | null;
    name: string | null;
  };

  export type RolesMaxAggregateOutputType = {
    role_id: number | null;
    name: string | null;
  };

  export type RolesCountAggregateOutputType = {
    role_id: number;
    name: number;
    _all: number;
  };

  export type RolesAvgAggregateInputType = {
    role_id?: true;
  };

  export type RolesSumAggregateInputType = {
    role_id?: true;
  };

  export type RolesMinAggregateInputType = {
    role_id?: true;
    name?: true;
  };

  export type RolesMaxAggregateInputType = {
    role_id?: true;
    name?: true;
  };

  export type RolesCountAggregateInputType = {
    role_id?: true;
    name?: true;
    _all?: true;
  };

  export type RolesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Roles
     **/
    _count?: true | RolesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RolesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RolesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RolesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RolesMaxAggregateInputType;
  };

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
    [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>;
  };

  export type RolesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RolesWhereInput;
    orderBy?:
      | RolesOrderByWithAggregationInput
      | RolesOrderByWithAggregationInput[];
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum;
    having?: RolesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RolesCountAggregateInputType | true;
    _avg?: RolesAvgAggregateInputType;
    _sum?: RolesSumAggregateInputType;
    _min?: RolesMinAggregateInputType;
    _max?: RolesMaxAggregateInputType;
  };

  export type RolesGroupByOutputType = {
    role_id: number;
    name: string;
    _count: RolesCountAggregateOutputType | null;
    _avg: RolesAvgAggregateOutputType | null;
    _sum: RolesSumAggregateOutputType | null;
    _min: RolesMinAggregateOutputType | null;
    _max: RolesMaxAggregateOutputType | null;
  };

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RolesGroupByOutputType, T['by']> & {
          [P in keyof T & keyof RolesGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>;
        }
      >
    >;

  export type RolesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      role_id?: boolean;
      name?: boolean;
      users?: boolean | Roles$usersArgs<ExtArgs>;
      _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['roles']
  >;

  export type RolesSelectScalar = {
    role_id?: boolean;
    name?: boolean;
  };

  export type RolesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | Roles$usersArgs<ExtArgs>;
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $RolesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Roles';
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        role_id: number;
        name: string;
      },
      ExtArgs['result']['roles']
    >;
    composites: {};
  };

  type RolesGetPayload<
    S extends boolean | null | undefined | RolesDefaultArgs,
  > = $Result.GetResult<Prisma.$RolesPayload, S>;

  type RolesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: RolesCountAggregateInputType | true;
  };

  export interface RolesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Roles'];
      meta: { name: 'Roles' };
    };
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
      args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>,
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>,
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findMany'>
    >;

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
      args: SelectSubset<T, RolesCreateArgs<ExtArgs>>,
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>,
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

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
      args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>,
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>,
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

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
    >;

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
    aggregate<T extends RolesAggregateArgs>(
      args: Subset<T, RolesAggregateArgs>,
    ): Prisma.PrismaPromise<GetRolesAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetRolesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__RolesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends Roles$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, Roles$usersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
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
    readonly role_id: FieldRef<'Roles', 'Int'>;
    readonly name: FieldRef<'Roles', 'String'>;
  }

  // Custom InputTypes

  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput;
  };

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput;
  };

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[];
  };

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[];
  };

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[];
  };

  /**
   * Roles create
   */
  export type RolesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>;
  };

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Roles update
   */
  export type RolesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>;
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput;
  };

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>;
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput;
  };

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput;
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>;
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>;
  };

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput;
  };

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput;
  };

  /**
   * Roles.users
   */
  export type Roles$usersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    where?: UsersWhereInput;
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[];
    cursor?: UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
  };

  /**
   * Model UserWithdrawAccount
   */

  export type AggregateUserWithdrawAccount = {
    _count: UserWithdrawAccountCountAggregateOutputType | null;
    _avg: UserWithdrawAccountAvgAggregateOutputType | null;
    _sum: UserWithdrawAccountSumAggregateOutputType | null;
    _min: UserWithdrawAccountMinAggregateOutputType | null;
    _max: UserWithdrawAccountMaxAggregateOutputType | null;
  };

  export type UserWithdrawAccountAvgAggregateOutputType = {
    account_id: number | null;
    delete_status: number | null;
  };

  export type UserWithdrawAccountSumAggregateOutputType = {
    account_id: number | null;
    delete_status: number | null;
  };

  export type UserWithdrawAccountMinAggregateOutputType = {
    user_withdraw_account_id: string | null;
    user_internal_id: string | null;
    account_type: string | null;
    account_name: string | null;
    account_id: number | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type UserWithdrawAccountMaxAggregateOutputType = {
    user_withdraw_account_id: string | null;
    user_internal_id: string | null;
    account_type: string | null;
    account_name: string | null;
    account_id: number | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type UserWithdrawAccountCountAggregateOutputType = {
    user_withdraw_account_id: number;
    user_internal_id: number;
    account_type: number;
    account_name: number;
    account_id: number;
    delete_status: number;
    register_date: number;
    updated_date: number;
    deleted_date: number;
    _all: number;
  };

  export type UserWithdrawAccountAvgAggregateInputType = {
    account_id?: true;
    delete_status?: true;
  };

  export type UserWithdrawAccountSumAggregateInputType = {
    account_id?: true;
    delete_status?: true;
  };

  export type UserWithdrawAccountMinAggregateInputType = {
    user_withdraw_account_id?: true;
    user_internal_id?: true;
    account_type?: true;
    account_name?: true;
    account_id?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type UserWithdrawAccountMaxAggregateInputType = {
    user_withdraw_account_id?: true;
    user_internal_id?: true;
    account_type?: true;
    account_name?: true;
    account_id?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type UserWithdrawAccountCountAggregateInputType = {
    user_withdraw_account_id?: true;
    user_internal_id?: true;
    account_type?: true;
    account_name?: true;
    account_id?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
    _all?: true;
  };

  export type UserWithdrawAccountAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserWithdrawAccount to aggregate.
     */
    where?: UserWithdrawAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserWithdrawAccounts to fetch.
     */
    orderBy?:
      | UserWithdrawAccountOrderByWithRelationInput
      | UserWithdrawAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWithdrawAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserWithdrawAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserWithdrawAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserWithdrawAccounts
     **/
    _count?: true | UserWithdrawAccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserWithdrawAccountAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserWithdrawAccountSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserWithdrawAccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserWithdrawAccountMaxAggregateInputType;
  };

  export type GetUserWithdrawAccountAggregateType<
    T extends UserWithdrawAccountAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateUserWithdrawAccount]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWithdrawAccount[P]>
      : GetScalarType<T[P], AggregateUserWithdrawAccount[P]>;
  };

  export type UserWithdrawAccountGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWithdrawAccountWhereInput;
    orderBy?:
      | UserWithdrawAccountOrderByWithAggregationInput
      | UserWithdrawAccountOrderByWithAggregationInput[];
    by:
      | UserWithdrawAccountScalarFieldEnum[]
      | UserWithdrawAccountScalarFieldEnum;
    having?: UserWithdrawAccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserWithdrawAccountCountAggregateInputType | true;
    _avg?: UserWithdrawAccountAvgAggregateInputType;
    _sum?: UserWithdrawAccountSumAggregateInputType;
    _min?: UserWithdrawAccountMinAggregateInputType;
    _max?: UserWithdrawAccountMaxAggregateInputType;
  };

  export type UserWithdrawAccountGroupByOutputType = {
    user_withdraw_account_id: string;
    user_internal_id: string;
    account_type: string;
    account_name: string;
    account_id: number;
    delete_status: number;
    register_date: Date;
    updated_date: Date;
    deleted_date: Date | null;
    _count: UserWithdrawAccountCountAggregateOutputType | null;
    _avg: UserWithdrawAccountAvgAggregateOutputType | null;
    _sum: UserWithdrawAccountSumAggregateOutputType | null;
    _min: UserWithdrawAccountMinAggregateOutputType | null;
    _max: UserWithdrawAccountMaxAggregateOutputType | null;
  };

  type GetUserWithdrawAccountGroupByPayload<
    T extends UserWithdrawAccountGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWithdrawAccountGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof UserWithdrawAccountGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserWithdrawAccountGroupByOutputType[P]>
          : GetScalarType<T[P], UserWithdrawAccountGroupByOutputType[P]>;
      }
    >
  >;

  export type UserWithdrawAccountSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_withdraw_account_id?: boolean;
      user_internal_id?: boolean;
      account_type?: boolean;
      account_name?: boolean;
      account_id?: boolean;
      delete_status?: boolean;
      register_date?: boolean;
      updated_date?: boolean;
      deleted_date?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
      withdraw?: boolean | UserWithdrawAccount$withdrawArgs<ExtArgs>;
      _count?: boolean | UserWithdrawAccountCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['userWithdrawAccount']
  >;

  export type UserWithdrawAccountSelectScalar = {
    user_withdraw_account_id?: boolean;
    user_internal_id?: boolean;
    account_type?: boolean;
    account_name?: boolean;
    account_id?: boolean;
    delete_status?: boolean;
    register_date?: boolean;
    updated_date?: boolean;
    deleted_date?: boolean;
  };

  export type UserWithdrawAccountInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
    withdraw?: boolean | UserWithdrawAccount$withdrawArgs<ExtArgs>;
    _count?: boolean | UserWithdrawAccountCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $UserWithdrawAccountPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'UserWithdrawAccount';
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>;
      withdraw: Prisma.$WithdrawPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        user_withdraw_account_id: string;
        user_internal_id: string;
        account_type: string;
        account_name: string;
        account_id: number;
        delete_status: number;
        register_date: Date;
        updated_date: Date;
        deleted_date: Date | null;
      },
      ExtArgs['result']['userWithdrawAccount']
    >;
    composites: {};
  };

  type UserWithdrawAccountGetPayload<
    S extends boolean | null | undefined | UserWithdrawAccountDefaultArgs,
  > = $Result.GetResult<Prisma.$UserWithdrawAccountPayload, S>;

  type UserWithdrawAccountCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    UserWithdrawAccountFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserWithdrawAccountCountAggregateInputType | true;
  };

  export interface UserWithdrawAccountDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['UserWithdrawAccount'];
      meta: { name: 'UserWithdrawAccount' };
    };
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
      args: SelectSubset<T, UserWithdrawAccountFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserWithdrawAccountClient<
      $Result.GetResult<
        Prisma.$UserWithdrawAccountPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

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
    findUniqueOrThrow<
      T extends UserWithdrawAccountFindUniqueOrThrowArgs<ExtArgs>,
    >(
      args?: SelectSubset<T, UserWithdrawAccountFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserWithdrawAccountClient<
      $Result.GetResult<
        Prisma.$UserWithdrawAccountPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, UserWithdrawAccountFindFirstArgs<ExtArgs>>,
    ): Prisma__UserWithdrawAccountClient<
      $Result.GetResult<
        Prisma.$UserWithdrawAccountPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

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
    findFirstOrThrow<
      T extends UserWithdrawAccountFindFirstOrThrowArgs<ExtArgs>,
    >(
      args?: SelectSubset<T, UserWithdrawAccountFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserWithdrawAccountClient<
      $Result.GetResult<
        Prisma.$UserWithdrawAccountPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, UserWithdrawAccountFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserWithdrawAccountPayload<ExtArgs>,
        T,
        'findMany'
      >
    >;

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
      args: SelectSubset<T, UserWithdrawAccountCreateArgs<ExtArgs>>,
    ): Prisma__UserWithdrawAccountClient<
      $Result.GetResult<
        Prisma.$UserWithdrawAccountPayload<ExtArgs>,
        T,
        'create'
      >,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, UserWithdrawAccountCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, UserWithdrawAccountDeleteArgs<ExtArgs>>,
    ): Prisma__UserWithdrawAccountClient<
      $Result.GetResult<
        Prisma.$UserWithdrawAccountPayload<ExtArgs>,
        T,
        'delete'
      >,
      never,
      ExtArgs
    >;

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
      args: SelectSubset<T, UserWithdrawAccountUpdateArgs<ExtArgs>>,
    ): Prisma__UserWithdrawAccountClient<
      $Result.GetResult<
        Prisma.$UserWithdrawAccountPayload<ExtArgs>,
        T,
        'update'
      >,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, UserWithdrawAccountDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, UserWithdrawAccountUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, UserWithdrawAccountUpsertArgs<ExtArgs>>,
    ): Prisma__UserWithdrawAccountClient<
      $Result.GetResult<
        Prisma.$UserWithdrawAccountPayload<ExtArgs>,
        T,
        'upsert'
      >,
      never,
      ExtArgs
    >;

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
          : GetScalarType<
              T['select'],
              UserWithdrawAccountCountAggregateOutputType
            >
        : number
    >;

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
    aggregate<T extends UserWithdrawAccountAggregateArgs>(
      args: Subset<T, UserWithdrawAccountAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserWithdrawAccountAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserWithdrawAccountGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUserWithdrawAccountGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__UserWithdrawAccountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsersDefaultArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      | $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;

    withdraw<T extends UserWithdrawAccount$withdrawArgs<ExtArgs> = {}>(
      args?: Subset<T, UserWithdrawAccount$withdrawArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$WithdrawPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
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
    readonly user_withdraw_account_id: FieldRef<
      'UserWithdrawAccount',
      'String'
    >;
    readonly user_internal_id: FieldRef<'UserWithdrawAccount', 'String'>;
    readonly account_type: FieldRef<'UserWithdrawAccount', 'String'>;
    readonly account_name: FieldRef<'UserWithdrawAccount', 'String'>;
    readonly account_id: FieldRef<'UserWithdrawAccount', 'Int'>;
    readonly delete_status: FieldRef<'UserWithdrawAccount', 'Int'>;
    readonly register_date: FieldRef<'UserWithdrawAccount', 'DateTime'>;
    readonly updated_date: FieldRef<'UserWithdrawAccount', 'DateTime'>;
    readonly deleted_date: FieldRef<'UserWithdrawAccount', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * UserWithdrawAccount findUnique
   */
  export type UserWithdrawAccountFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserWithdrawAccountInclude<ExtArgs> | null;
    /**
     * Filter, which UserWithdrawAccount to fetch.
     */
    where: UserWithdrawAccountWhereUniqueInput;
  };

  /**
   * UserWithdrawAccount findUniqueOrThrow
   */
  export type UserWithdrawAccountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserWithdrawAccountInclude<ExtArgs> | null;
    /**
     * Filter, which UserWithdrawAccount to fetch.
     */
    where: UserWithdrawAccountWhereUniqueInput;
  };

  /**
   * UserWithdrawAccount findFirst
   */
  export type UserWithdrawAccountFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserWithdrawAccountInclude<ExtArgs> | null;
    /**
     * Filter, which UserWithdrawAccount to fetch.
     */
    where?: UserWithdrawAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserWithdrawAccounts to fetch.
     */
    orderBy?:
      | UserWithdrawAccountOrderByWithRelationInput
      | UserWithdrawAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserWithdrawAccounts.
     */
    cursor?: UserWithdrawAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserWithdrawAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserWithdrawAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserWithdrawAccounts.
     */
    distinct?:
      | UserWithdrawAccountScalarFieldEnum
      | UserWithdrawAccountScalarFieldEnum[];
  };

  /**
   * UserWithdrawAccount findFirstOrThrow
   */
  export type UserWithdrawAccountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserWithdrawAccountInclude<ExtArgs> | null;
    /**
     * Filter, which UserWithdrawAccount to fetch.
     */
    where?: UserWithdrawAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserWithdrawAccounts to fetch.
     */
    orderBy?:
      | UserWithdrawAccountOrderByWithRelationInput
      | UserWithdrawAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserWithdrawAccounts.
     */
    cursor?: UserWithdrawAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserWithdrawAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserWithdrawAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserWithdrawAccounts.
     */
    distinct?:
      | UserWithdrawAccountScalarFieldEnum
      | UserWithdrawAccountScalarFieldEnum[];
  };

  /**
   * UserWithdrawAccount findMany
   */
  export type UserWithdrawAccountFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserWithdrawAccountInclude<ExtArgs> | null;
    /**
     * Filter, which UserWithdrawAccounts to fetch.
     */
    where?: UserWithdrawAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserWithdrawAccounts to fetch.
     */
    orderBy?:
      | UserWithdrawAccountOrderByWithRelationInput
      | UserWithdrawAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserWithdrawAccounts.
     */
    cursor?: UserWithdrawAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserWithdrawAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserWithdrawAccounts.
     */
    skip?: number;
    distinct?:
      | UserWithdrawAccountScalarFieldEnum
      | UserWithdrawAccountScalarFieldEnum[];
  };

  /**
   * UserWithdrawAccount create
   */
  export type UserWithdrawAccountCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserWithdrawAccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserWithdrawAccount.
     */
    data: XOR<
      UserWithdrawAccountCreateInput,
      UserWithdrawAccountUncheckedCreateInput
    >;
  };

  /**
   * UserWithdrawAccount createMany
   */
  export type UserWithdrawAccountCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserWithdrawAccounts.
     */
    data:
      | UserWithdrawAccountCreateManyInput
      | UserWithdrawAccountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserWithdrawAccount update
   */
  export type UserWithdrawAccountUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserWithdrawAccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserWithdrawAccount.
     */
    data: XOR<
      UserWithdrawAccountUpdateInput,
      UserWithdrawAccountUncheckedUpdateInput
    >;
    /**
     * Choose, which UserWithdrawAccount to update.
     */
    where: UserWithdrawAccountWhereUniqueInput;
  };

  /**
   * UserWithdrawAccount updateMany
   */
  export type UserWithdrawAccountUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserWithdrawAccounts.
     */
    data: XOR<
      UserWithdrawAccountUpdateManyMutationInput,
      UserWithdrawAccountUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserWithdrawAccounts to update
     */
    where?: UserWithdrawAccountWhereInput;
  };

  /**
   * UserWithdrawAccount upsert
   */
  export type UserWithdrawAccountUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserWithdrawAccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserWithdrawAccount to update in case it exists.
     */
    where: UserWithdrawAccountWhereUniqueInput;
    /**
     * In case the UserWithdrawAccount found by the `where` argument doesn't exist, create a new UserWithdrawAccount with this data.
     */
    create: XOR<
      UserWithdrawAccountCreateInput,
      UserWithdrawAccountUncheckedCreateInput
    >;
    /**
     * In case the UserWithdrawAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      UserWithdrawAccountUpdateInput,
      UserWithdrawAccountUncheckedUpdateInput
    >;
  };

  /**
   * UserWithdrawAccount delete
   */
  export type UserWithdrawAccountDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserWithdrawAccountInclude<ExtArgs> | null;
    /**
     * Filter which UserWithdrawAccount to delete.
     */
    where: UserWithdrawAccountWhereUniqueInput;
  };

  /**
   * UserWithdrawAccount deleteMany
   */
  export type UserWithdrawAccountDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserWithdrawAccounts to delete
     */
    where?: UserWithdrawAccountWhereInput;
  };

  /**
   * UserWithdrawAccount.withdraw
   */
  export type UserWithdrawAccount$withdrawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Withdraw
     */
    select?: WithdrawSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawInclude<ExtArgs> | null;
    where?: WithdrawWhereInput;
    orderBy?:
      | WithdrawOrderByWithRelationInput
      | WithdrawOrderByWithRelationInput[];
    cursor?: WithdrawWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: WithdrawScalarFieldEnum | WithdrawScalarFieldEnum[];
  };

  /**
   * UserWithdrawAccount without action
   */
  export type UserWithdrawAccountDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserWithdrawAccount
     */
    select?: UserWithdrawAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserWithdrawAccountInclude<ExtArgs> | null;
  };

  /**
   * Model AdminReceiverAccount
   */

  export type AggregateAdminReceiverAccount = {
    _count: AdminReceiverAccountCountAggregateOutputType | null;
    _avg: AdminReceiverAccountAvgAggregateOutputType | null;
    _sum: AdminReceiverAccountSumAggregateOutputType | null;
    _min: AdminReceiverAccountMinAggregateOutputType | null;
    _max: AdminReceiverAccountMaxAggregateOutputType | null;
  };

  export type AdminReceiverAccountAvgAggregateOutputType = {
    status: number | null;
    delete_status: number | null;
  };

  export type AdminReceiverAccountSumAggregateOutputType = {
    status: number | null;
    delete_status: number | null;
  };

  export type AdminReceiverAccountMinAggregateOutputType = {
    admin_receiver_account_id: string | null;
    admin_account_type: string | null;
    admin_account_name: string | null;
    admin_account_id: string | null;
    status: number | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type AdminReceiverAccountMaxAggregateOutputType = {
    admin_receiver_account_id: string | null;
    admin_account_type: string | null;
    admin_account_name: string | null;
    admin_account_id: string | null;
    status: number | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type AdminReceiverAccountCountAggregateOutputType = {
    admin_receiver_account_id: number;
    admin_account_type: number;
    admin_account_name: number;
    admin_account_id: number;
    status: number;
    delete_status: number;
    register_date: number;
    updated_date: number;
    deleted_date: number;
    _all: number;
  };

  export type AdminReceiverAccountAvgAggregateInputType = {
    status?: true;
    delete_status?: true;
  };

  export type AdminReceiverAccountSumAggregateInputType = {
    status?: true;
    delete_status?: true;
  };

  export type AdminReceiverAccountMinAggregateInputType = {
    admin_receiver_account_id?: true;
    admin_account_type?: true;
    admin_account_name?: true;
    admin_account_id?: true;
    status?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type AdminReceiverAccountMaxAggregateInputType = {
    admin_receiver_account_id?: true;
    admin_account_type?: true;
    admin_account_name?: true;
    admin_account_id?: true;
    status?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type AdminReceiverAccountCountAggregateInputType = {
    admin_receiver_account_id?: true;
    admin_account_type?: true;
    admin_account_name?: true;
    admin_account_id?: true;
    status?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
    _all?: true;
  };

  export type AdminReceiverAccountAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AdminReceiverAccount to aggregate.
     */
    where?: AdminReceiverAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminReceiverAccounts to fetch.
     */
    orderBy?:
      | AdminReceiverAccountOrderByWithRelationInput
      | AdminReceiverAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AdminReceiverAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminReceiverAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminReceiverAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AdminReceiverAccounts
     **/
    _count?: true | AdminReceiverAccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AdminReceiverAccountAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AdminReceiverAccountSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AdminReceiverAccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AdminReceiverAccountMaxAggregateInputType;
  };

  export type GetAdminReceiverAccountAggregateType<
    T extends AdminReceiverAccountAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateAdminReceiverAccount]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminReceiverAccount[P]>
      : GetScalarType<T[P], AggregateAdminReceiverAccount[P]>;
  };

  export type AdminReceiverAccountGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AdminReceiverAccountWhereInput;
    orderBy?:
      | AdminReceiverAccountOrderByWithAggregationInput
      | AdminReceiverAccountOrderByWithAggregationInput[];
    by:
      | AdminReceiverAccountScalarFieldEnum[]
      | AdminReceiverAccountScalarFieldEnum;
    having?: AdminReceiverAccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminReceiverAccountCountAggregateInputType | true;
    _avg?: AdminReceiverAccountAvgAggregateInputType;
    _sum?: AdminReceiverAccountSumAggregateInputType;
    _min?: AdminReceiverAccountMinAggregateInputType;
    _max?: AdminReceiverAccountMaxAggregateInputType;
  };

  export type AdminReceiverAccountGroupByOutputType = {
    admin_receiver_account_id: string;
    admin_account_type: string;
    admin_account_name: string;
    admin_account_id: string;
    status: number | null;
    delete_status: number;
    register_date: Date;
    updated_date: Date;
    deleted_date: Date | null;
    _count: AdminReceiverAccountCountAggregateOutputType | null;
    _avg: AdminReceiverAccountAvgAggregateOutputType | null;
    _sum: AdminReceiverAccountSumAggregateOutputType | null;
    _min: AdminReceiverAccountMinAggregateOutputType | null;
    _max: AdminReceiverAccountMaxAggregateOutputType | null;
  };

  type GetAdminReceiverAccountGroupByPayload<
    T extends AdminReceiverAccountGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminReceiverAccountGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof AdminReceiverAccountGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AdminReceiverAccountGroupByOutputType[P]>
          : GetScalarType<T[P], AdminReceiverAccountGroupByOutputType[P]>;
      }
    >
  >;

  export type AdminReceiverAccountSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      admin_receiver_account_id?: boolean;
      admin_account_type?: boolean;
      admin_account_name?: boolean;
      admin_account_id?: boolean;
      status?: boolean;
      delete_status?: boolean;
      register_date?: boolean;
      updated_date?: boolean;
      deleted_date?: boolean;
      payment?: boolean | AdminReceiverAccount$paymentArgs<ExtArgs>;
      _count?:
        | boolean
        | AdminReceiverAccountCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['adminReceiverAccount']
  >;

  export type AdminReceiverAccountSelectScalar = {
    admin_receiver_account_id?: boolean;
    admin_account_type?: boolean;
    admin_account_name?: boolean;
    admin_account_id?: boolean;
    status?: boolean;
    delete_status?: boolean;
    register_date?: boolean;
    updated_date?: boolean;
    deleted_date?: boolean;
  };

  export type AdminReceiverAccountInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    payment?: boolean | AdminReceiverAccount$paymentArgs<ExtArgs>;
    _count?: boolean | AdminReceiverAccountCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $AdminReceiverAccountPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'AdminReceiverAccount';
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        admin_receiver_account_id: string;
        admin_account_type: string;
        admin_account_name: string;
        admin_account_id: string;
        status: number | null;
        delete_status: number;
        register_date: Date;
        updated_date: Date;
        deleted_date: Date | null;
      },
      ExtArgs['result']['adminReceiverAccount']
    >;
    composites: {};
  };

  type AdminReceiverAccountGetPayload<
    S extends boolean | null | undefined | AdminReceiverAccountDefaultArgs,
  > = $Result.GetResult<Prisma.$AdminReceiverAccountPayload, S>;

  type AdminReceiverAccountCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    AdminReceiverAccountFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AdminReceiverAccountCountAggregateInputType | true;
  };

  export interface AdminReceiverAccountDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['AdminReceiverAccount'];
      meta: { name: 'AdminReceiverAccount' };
    };
    /**
     * Find zero or one AdminReceiverAccount that matches the filter.
     * @param {AdminReceiverAccountFindUniqueArgs} args - Arguments to find a AdminReceiverAccount
     * @example
     * // Get one AdminReceiverAccount
     * const adminReceiverAccount = await prisma.adminReceiverAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends AdminReceiverAccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminReceiverAccountFindUniqueArgs<ExtArgs>>,
    ): Prisma__AdminReceiverAccountClient<
      $Result.GetResult<
        Prisma.$AdminReceiverAccountPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one AdminReceiverAccount that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {AdminReceiverAccountFindUniqueOrThrowArgs} args - Arguments to find a AdminReceiverAccount
     * @example
     * // Get one AdminReceiverAccount
     * const adminReceiverAccount = await prisma.adminReceiverAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<
      T extends AdminReceiverAccountFindUniqueOrThrowArgs<ExtArgs>,
    >(
      args?: SelectSubset<
        T,
        AdminReceiverAccountFindUniqueOrThrowArgs<ExtArgs>
      >,
    ): Prisma__AdminReceiverAccountClient<
      $Result.GetResult<
        Prisma.$AdminReceiverAccountPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first AdminReceiverAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReceiverAccountFindFirstArgs} args - Arguments to find a AdminReceiverAccount
     * @example
     * // Get one AdminReceiverAccount
     * const adminReceiverAccount = await prisma.adminReceiverAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends AdminReceiverAccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminReceiverAccountFindFirstArgs<ExtArgs>>,
    ): Prisma__AdminReceiverAccountClient<
      $Result.GetResult<
        Prisma.$AdminReceiverAccountPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first AdminReceiverAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReceiverAccountFindFirstOrThrowArgs} args - Arguments to find a AdminReceiverAccount
     * @example
     * // Get one AdminReceiverAccount
     * const adminReceiverAccount = await prisma.adminReceiverAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<
      T extends AdminReceiverAccountFindFirstOrThrowArgs<ExtArgs>,
    >(
      args?: SelectSubset<T, AdminReceiverAccountFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AdminReceiverAccountClient<
      $Result.GetResult<
        Prisma.$AdminReceiverAccountPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more AdminReceiverAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReceiverAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminReceiverAccounts
     * const adminReceiverAccounts = await prisma.adminReceiverAccount.findMany()
     *
     * // Get first 10 AdminReceiverAccounts
     * const adminReceiverAccounts = await prisma.adminReceiverAccount.findMany({ take: 10 })
     *
     * // Only select the `admin_receiver_account_id`
     * const adminReceiverAccountWithAdmin_receiver_account_idOnly = await prisma.adminReceiverAccount.findMany({ select: { admin_receiver_account_id: true } })
     *
     **/
    findMany<T extends AdminReceiverAccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminReceiverAccountFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AdminReceiverAccountPayload<ExtArgs>,
        T,
        'findMany'
      >
    >;

    /**
     * Create a AdminReceiverAccount.
     * @param {AdminReceiverAccountCreateArgs} args - Arguments to create a AdminReceiverAccount.
     * @example
     * // Create one AdminReceiverAccount
     * const AdminReceiverAccount = await prisma.adminReceiverAccount.create({
     *   data: {
     *     // ... data to create a AdminReceiverAccount
     *   }
     * })
     *
     **/
    create<T extends AdminReceiverAccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminReceiverAccountCreateArgs<ExtArgs>>,
    ): Prisma__AdminReceiverAccountClient<
      $Result.GetResult<
        Prisma.$AdminReceiverAccountPayload<ExtArgs>,
        T,
        'create'
      >,
      never,
      ExtArgs
    >;

    /**
     * Create many AdminReceiverAccounts.
     *     @param {AdminReceiverAccountCreateManyArgs} args - Arguments to create many AdminReceiverAccounts.
     *     @example
     *     // Create many AdminReceiverAccounts
     *     const adminReceiverAccount = await prisma.adminReceiverAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends AdminReceiverAccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminReceiverAccountCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a AdminReceiverAccount.
     * @param {AdminReceiverAccountDeleteArgs} args - Arguments to delete one AdminReceiverAccount.
     * @example
     * // Delete one AdminReceiverAccount
     * const AdminReceiverAccount = await prisma.adminReceiverAccount.delete({
     *   where: {
     *     // ... filter to delete one AdminReceiverAccount
     *   }
     * })
     *
     **/
    delete<T extends AdminReceiverAccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminReceiverAccountDeleteArgs<ExtArgs>>,
    ): Prisma__AdminReceiverAccountClient<
      $Result.GetResult<
        Prisma.$AdminReceiverAccountPayload<ExtArgs>,
        T,
        'delete'
      >,
      never,
      ExtArgs
    >;

    /**
     * Update one AdminReceiverAccount.
     * @param {AdminReceiverAccountUpdateArgs} args - Arguments to update one AdminReceiverAccount.
     * @example
     * // Update one AdminReceiverAccount
     * const adminReceiverAccount = await prisma.adminReceiverAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends AdminReceiverAccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminReceiverAccountUpdateArgs<ExtArgs>>,
    ): Prisma__AdminReceiverAccountClient<
      $Result.GetResult<
        Prisma.$AdminReceiverAccountPayload<ExtArgs>,
        T,
        'update'
      >,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more AdminReceiverAccounts.
     * @param {AdminReceiverAccountDeleteManyArgs} args - Arguments to filter AdminReceiverAccounts to delete.
     * @example
     * // Delete a few AdminReceiverAccounts
     * const { count } = await prisma.adminReceiverAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends AdminReceiverAccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminReceiverAccountDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AdminReceiverAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReceiverAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminReceiverAccounts
     * const adminReceiverAccount = await prisma.adminReceiverAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends AdminReceiverAccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminReceiverAccountUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one AdminReceiverAccount.
     * @param {AdminReceiverAccountUpsertArgs} args - Arguments to update or create a AdminReceiverAccount.
     * @example
     * // Update or create a AdminReceiverAccount
     * const adminReceiverAccount = await prisma.adminReceiverAccount.upsert({
     *   create: {
     *     // ... data to create a AdminReceiverAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminReceiverAccount we want to update
     *   }
     * })
     **/
    upsert<T extends AdminReceiverAccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminReceiverAccountUpsertArgs<ExtArgs>>,
    ): Prisma__AdminReceiverAccountClient<
      $Result.GetResult<
        Prisma.$AdminReceiverAccountPayload<ExtArgs>,
        T,
        'upsert'
      >,
      never,
      ExtArgs
    >;

    /**
     * Count the number of AdminReceiverAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReceiverAccountCountArgs} args - Arguments to filter AdminReceiverAccounts to count.
     * @example
     * // Count the number of AdminReceiverAccounts
     * const count = await prisma.adminReceiverAccount.count({
     *   where: {
     *     // ... the filter for the AdminReceiverAccounts we want to count
     *   }
     * })
     **/
    count<T extends AdminReceiverAccountCountArgs>(
      args?: Subset<T, AdminReceiverAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              AdminReceiverAccountCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AdminReceiverAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReceiverAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminReceiverAccountAggregateArgs>(
      args: Subset<T, AdminReceiverAccountAggregateArgs>,
    ): Prisma.PrismaPromise<GetAdminReceiverAccountAggregateType<T>>;

    /**
     * Group by AdminReceiverAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReceiverAccountGroupByArgs} args - Group by arguments.
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
      T extends AdminReceiverAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminReceiverAccountGroupByArgs['orderBy'] }
        : { orderBy?: AdminReceiverAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AdminReceiverAccountGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAdminReceiverAccountGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AdminReceiverAccount model
     */
    readonly fields: AdminReceiverAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminReceiverAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminReceiverAccountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    payment<T extends AdminReceiverAccount$paymentArgs<ExtArgs> = {}>(
      args?: Subset<T, AdminReceiverAccount$paymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AdminReceiverAccount model
   */
  interface AdminReceiverAccountFieldRefs {
    readonly admin_receiver_account_id: FieldRef<
      'AdminReceiverAccount',
      'String'
    >;
    readonly admin_account_type: FieldRef<'AdminReceiverAccount', 'String'>;
    readonly admin_account_name: FieldRef<'AdminReceiverAccount', 'String'>;
    readonly admin_account_id: FieldRef<'AdminReceiverAccount', 'String'>;
    readonly status: FieldRef<'AdminReceiverAccount', 'Int'>;
    readonly delete_status: FieldRef<'AdminReceiverAccount', 'Int'>;
    readonly register_date: FieldRef<'AdminReceiverAccount', 'DateTime'>;
    readonly updated_date: FieldRef<'AdminReceiverAccount', 'DateTime'>;
    readonly deleted_date: FieldRef<'AdminReceiverAccount', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * AdminReceiverAccount findUnique
   */
  export type AdminReceiverAccountFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminReceiverAccount
     */
    select?: AdminReceiverAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminReceiverAccountInclude<ExtArgs> | null;
    /**
     * Filter, which AdminReceiverAccount to fetch.
     */
    where: AdminReceiverAccountWhereUniqueInput;
  };

  /**
   * AdminReceiverAccount findUniqueOrThrow
   */
  export type AdminReceiverAccountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminReceiverAccount
     */
    select?: AdminReceiverAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminReceiverAccountInclude<ExtArgs> | null;
    /**
     * Filter, which AdminReceiverAccount to fetch.
     */
    where: AdminReceiverAccountWhereUniqueInput;
  };

  /**
   * AdminReceiverAccount findFirst
   */
  export type AdminReceiverAccountFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminReceiverAccount
     */
    select?: AdminReceiverAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminReceiverAccountInclude<ExtArgs> | null;
    /**
     * Filter, which AdminReceiverAccount to fetch.
     */
    where?: AdminReceiverAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminReceiverAccounts to fetch.
     */
    orderBy?:
      | AdminReceiverAccountOrderByWithRelationInput
      | AdminReceiverAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdminReceiverAccounts.
     */
    cursor?: AdminReceiverAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminReceiverAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminReceiverAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdminReceiverAccounts.
     */
    distinct?:
      | AdminReceiverAccountScalarFieldEnum
      | AdminReceiverAccountScalarFieldEnum[];
  };

  /**
   * AdminReceiverAccount findFirstOrThrow
   */
  export type AdminReceiverAccountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminReceiverAccount
     */
    select?: AdminReceiverAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminReceiverAccountInclude<ExtArgs> | null;
    /**
     * Filter, which AdminReceiverAccount to fetch.
     */
    where?: AdminReceiverAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminReceiverAccounts to fetch.
     */
    orderBy?:
      | AdminReceiverAccountOrderByWithRelationInput
      | AdminReceiverAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdminReceiverAccounts.
     */
    cursor?: AdminReceiverAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminReceiverAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminReceiverAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdminReceiverAccounts.
     */
    distinct?:
      | AdminReceiverAccountScalarFieldEnum
      | AdminReceiverAccountScalarFieldEnum[];
  };

  /**
   * AdminReceiverAccount findMany
   */
  export type AdminReceiverAccountFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminReceiverAccount
     */
    select?: AdminReceiverAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminReceiverAccountInclude<ExtArgs> | null;
    /**
     * Filter, which AdminReceiverAccounts to fetch.
     */
    where?: AdminReceiverAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminReceiverAccounts to fetch.
     */
    orderBy?:
      | AdminReceiverAccountOrderByWithRelationInput
      | AdminReceiverAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AdminReceiverAccounts.
     */
    cursor?: AdminReceiverAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminReceiverAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminReceiverAccounts.
     */
    skip?: number;
    distinct?:
      | AdminReceiverAccountScalarFieldEnum
      | AdminReceiverAccountScalarFieldEnum[];
  };

  /**
   * AdminReceiverAccount create
   */
  export type AdminReceiverAccountCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminReceiverAccount
     */
    select?: AdminReceiverAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminReceiverAccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a AdminReceiverAccount.
     */
    data: XOR<
      AdminReceiverAccountCreateInput,
      AdminReceiverAccountUncheckedCreateInput
    >;
  };

  /**
   * AdminReceiverAccount createMany
   */
  export type AdminReceiverAccountCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AdminReceiverAccounts.
     */
    data:
      | AdminReceiverAccountCreateManyInput
      | AdminReceiverAccountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AdminReceiverAccount update
   */
  export type AdminReceiverAccountUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminReceiverAccount
     */
    select?: AdminReceiverAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminReceiverAccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a AdminReceiverAccount.
     */
    data: XOR<
      AdminReceiverAccountUpdateInput,
      AdminReceiverAccountUncheckedUpdateInput
    >;
    /**
     * Choose, which AdminReceiverAccount to update.
     */
    where: AdminReceiverAccountWhereUniqueInput;
  };

  /**
   * AdminReceiverAccount updateMany
   */
  export type AdminReceiverAccountUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AdminReceiverAccounts.
     */
    data: XOR<
      AdminReceiverAccountUpdateManyMutationInput,
      AdminReceiverAccountUncheckedUpdateManyInput
    >;
    /**
     * Filter which AdminReceiverAccounts to update
     */
    where?: AdminReceiverAccountWhereInput;
  };

  /**
   * AdminReceiverAccount upsert
   */
  export type AdminReceiverAccountUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminReceiverAccount
     */
    select?: AdminReceiverAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminReceiverAccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the AdminReceiverAccount to update in case it exists.
     */
    where: AdminReceiverAccountWhereUniqueInput;
    /**
     * In case the AdminReceiverAccount found by the `where` argument doesn't exist, create a new AdminReceiverAccount with this data.
     */
    create: XOR<
      AdminReceiverAccountCreateInput,
      AdminReceiverAccountUncheckedCreateInput
    >;
    /**
     * In case the AdminReceiverAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      AdminReceiverAccountUpdateInput,
      AdminReceiverAccountUncheckedUpdateInput
    >;
  };

  /**
   * AdminReceiverAccount delete
   */
  export type AdminReceiverAccountDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminReceiverAccount
     */
    select?: AdminReceiverAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminReceiverAccountInclude<ExtArgs> | null;
    /**
     * Filter which AdminReceiverAccount to delete.
     */
    where: AdminReceiverAccountWhereUniqueInput;
  };

  /**
   * AdminReceiverAccount deleteMany
   */
  export type AdminReceiverAccountDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AdminReceiverAccounts to delete
     */
    where?: AdminReceiverAccountWhereInput;
  };

  /**
   * AdminReceiverAccount.payment
   */
  export type AdminReceiverAccount$paymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null;
    where?: PaymentWhereInput;
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    cursor?: PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * AdminReceiverAccount without action
   */
  export type AdminReceiverAccountDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminReceiverAccount
     */
    select?: AdminReceiverAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminReceiverAccountInclude<ExtArgs> | null;
  };

  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null;
    _avg: WalletAvgAggregateOutputType | null;
    _sum: WalletSumAggregateOutputType | null;
    _min: WalletMinAggregateOutputType | null;
    _max: WalletMaxAggregateOutputType | null;
  };

  export type WalletAvgAggregateOutputType = {
    game_amount: Decimal | null;
    main_amount: Decimal | null;
    delete_status: number | null;
  };

  export type WalletSumAggregateOutputType = {
    game_amount: Decimal | null;
    main_amount: Decimal | null;
    delete_status: number | null;
  };

  export type WalletMinAggregateOutputType = {
    wallet_id: string | null;
    user_internal_id: string | null;
    game_amount: Decimal | null;
    main_amount: Decimal | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type WalletMaxAggregateOutputType = {
    wallet_id: string | null;
    user_internal_id: string | null;
    game_amount: Decimal | null;
    main_amount: Decimal | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type WalletCountAggregateOutputType = {
    wallet_id: number;
    user_internal_id: number;
    game_amount: number;
    main_amount: number;
    delete_status: number;
    register_date: number;
    updated_date: number;
    deleted_date: number;
    _all: number;
  };

  export type WalletAvgAggregateInputType = {
    game_amount?: true;
    main_amount?: true;
    delete_status?: true;
  };

  export type WalletSumAggregateInputType = {
    game_amount?: true;
    main_amount?: true;
    delete_status?: true;
  };

  export type WalletMinAggregateInputType = {
    wallet_id?: true;
    user_internal_id?: true;
    game_amount?: true;
    main_amount?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type WalletMaxAggregateInputType = {
    wallet_id?: true;
    user_internal_id?: true;
    game_amount?: true;
    main_amount?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type WalletCountAggregateInputType = {
    wallet_id?: true;
    user_internal_id?: true;
    game_amount?: true;
    main_amount?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
    _all?: true;
  };

  export type WalletAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Wallets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Wallets
     **/
    _count?: true | WalletCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: WalletAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: WalletSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: WalletMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: WalletMaxAggregateInputType;
  };

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
    [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>;
  };

  export type WalletGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: WalletWhereInput;
    orderBy?:
      | WalletOrderByWithAggregationInput
      | WalletOrderByWithAggregationInput[];
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum;
    having?: WalletScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WalletCountAggregateInputType | true;
    _avg?: WalletAvgAggregateInputType;
    _sum?: WalletSumAggregateInputType;
    _min?: WalletMinAggregateInputType;
    _max?: WalletMaxAggregateInputType;
  };

  export type WalletGroupByOutputType = {
    wallet_id: string;
    user_internal_id: string;
    game_amount: Decimal | null;
    main_amount: Decimal | null;
    delete_status: number;
    register_date: Date;
    updated_date: Date;
    deleted_date: Date | null;
    _count: WalletCountAggregateOutputType | null;
    _avg: WalletAvgAggregateOutputType | null;
    _sum: WalletSumAggregateOutputType | null;
    _min: WalletMinAggregateOutputType | null;
    _max: WalletMaxAggregateOutputType | null;
  };

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<WalletGroupByOutputType, T['by']> & {
          [P in keyof T & keyof WalletGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>;
        }
      >
    >;

  export type WalletSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      wallet_id?: boolean;
      user_internal_id?: boolean;
      game_amount?: boolean;
      main_amount?: boolean;
      delete_status?: boolean;
      register_date?: boolean;
      updated_date?: boolean;
      deleted_date?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['wallet']
  >;

  export type WalletSelectScalar = {
    wallet_id?: boolean;
    user_internal_id?: boolean;
    game_amount?: boolean;
    main_amount?: boolean;
    delete_status?: boolean;
    register_date?: boolean;
    updated_date?: boolean;
    deleted_date?: boolean;
  };

  export type WalletInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
  };

  export type $WalletPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Wallet';
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        wallet_id: string;
        user_internal_id: string;
        game_amount: Prisma.Decimal | null;
        main_amount: Prisma.Decimal | null;
        delete_status: number;
        register_date: Date;
        updated_date: Date;
        deleted_date: Date | null;
      },
      ExtArgs['result']['wallet']
    >;
    composites: {};
  };

  type WalletGetPayload<
    S extends boolean | null | undefined | WalletDefaultArgs,
  > = $Result.GetResult<Prisma.$WalletPayload, S>;

  type WalletCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: WalletCountAggregateInputType | true;
  };

  export interface WalletDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Wallet'];
      meta: { name: 'Wallet' };
    };
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
      args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'findMany'>
    >;

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
      args: SelectSubset<T, WalletCreateArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

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
      args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>,
    ): Prisma__WalletClient<
      $Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

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
    >;

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
    aggregate<T extends WalletAggregateArgs>(
      args: Subset<T, WalletAggregateArgs>,
    ): Prisma.PrismaPromise<GetWalletAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetWalletGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__WalletClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsersDefaultArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      | $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
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
    readonly wallet_id: FieldRef<'Wallet', 'String'>;
    readonly user_internal_id: FieldRef<'Wallet', 'String'>;
    readonly game_amount: FieldRef<'Wallet', 'Decimal'>;
    readonly main_amount: FieldRef<'Wallet', 'Decimal'>;
    readonly delete_status: FieldRef<'Wallet', 'Int'>;
    readonly register_date: FieldRef<'Wallet', 'DateTime'>;
    readonly updated_date: FieldRef<'Wallet', 'DateTime'>;
    readonly deleted_date: FieldRef<'Wallet', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput;
  };

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput;
  };

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Wallets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[];
  };

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Wallets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[];
  };

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Wallets.
     */
    skip?: number;
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[];
  };

  /**
   * Wallet create
   */
  export type WalletCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>;
  };

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>;
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput;
  };

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>;
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput;
  };

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput;
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>;
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>;
  };

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalletInclude<ExtArgs> | null;
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput;
  };

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput;
  };

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalletInclude<ExtArgs> | null;
  };

  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null;
    approve_reject: number | null;
    payment_confirm_code: number | null;
    delete_status: number | null;
  };

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null;
    approve_reject: number | null;
    payment_confirm_code: number | null;
    delete_status: number | null;
  };

  export type PaymentMinAggregateOutputType = {
    payment_internal_id: string | null;
    user_internal_id: string | null;
    admin_internal_id: string | null;
    payment_type: string | null;
    payment_account_name: string | null;
    payment_account: string | null;
    admin_receiver_account_id: string | null;
    amount: Decimal | null;
    date: Date | null;
    approve_reject: number | null;
    reason_for_reject: string | null;
    payment_confirm_code: number | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type PaymentMaxAggregateOutputType = {
    payment_internal_id: string | null;
    user_internal_id: string | null;
    admin_internal_id: string | null;
    payment_type: string | null;
    payment_account_name: string | null;
    payment_account: string | null;
    admin_receiver_account_id: string | null;
    amount: Decimal | null;
    date: Date | null;
    approve_reject: number | null;
    reason_for_reject: string | null;
    payment_confirm_code: number | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type PaymentCountAggregateOutputType = {
    payment_internal_id: number;
    user_internal_id: number;
    admin_internal_id: number;
    payment_type: number;
    payment_account_name: number;
    payment_account: number;
    admin_receiver_account_id: number;
    amount: number;
    date: number;
    approve_reject: number;
    reason_for_reject: number;
    payment_confirm_code: number;
    delete_status: number;
    register_date: number;
    updated_date: number;
    deleted_date: number;
    _all: number;
  };

  export type PaymentAvgAggregateInputType = {
    amount?: true;
    approve_reject?: true;
    payment_confirm_code?: true;
    delete_status?: true;
  };

  export type PaymentSumAggregateInputType = {
    amount?: true;
    approve_reject?: true;
    payment_confirm_code?: true;
    delete_status?: true;
  };

  export type PaymentMinAggregateInputType = {
    payment_internal_id?: true;
    user_internal_id?: true;
    admin_internal_id?: true;
    payment_type?: true;
    payment_account_name?: true;
    payment_account?: true;
    admin_receiver_account_id?: true;
    amount?: true;
    date?: true;
    approve_reject?: true;
    reason_for_reject?: true;
    payment_confirm_code?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type PaymentMaxAggregateInputType = {
    payment_internal_id?: true;
    user_internal_id?: true;
    admin_internal_id?: true;
    payment_type?: true;
    payment_account_name?: true;
    payment_account?: true;
    admin_receiver_account_id?: true;
    amount?: true;
    date?: true;
    approve_reject?: true;
    reason_for_reject?: true;
    payment_confirm_code?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type PaymentCountAggregateInputType = {
    payment_internal_id?: true;
    user_internal_id?: true;
    admin_internal_id?: true;
    payment_type?: true;
    payment_account_name?: true;
    payment_account?: true;
    admin_receiver_account_id?: true;
    amount?: true;
    date?: true;
    approve_reject?: true;
    reason_for_reject?: true;
    payment_confirm_code?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
    _all?: true;
  };

  export type PaymentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Payments
     **/
    _count?: true | PaymentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PaymentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PaymentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PaymentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PaymentMaxAggregateInputType;
  };

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>;
  };

  export type PaymentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentWhereInput;
    orderBy?:
      | PaymentOrderByWithAggregationInput
      | PaymentOrderByWithAggregationInput[];
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum;
    having?: PaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
  };

  export type PaymentGroupByOutputType = {
    payment_internal_id: string;
    user_internal_id: string;
    admin_internal_id: string | null;
    payment_type: string;
    payment_account_name: string;
    payment_account: string;
    admin_receiver_account_id: string | null;
    amount: Decimal;
    date: Date;
    approve_reject: number;
    reason_for_reject: string | null;
    payment_confirm_code: number;
    delete_status: number;
    register_date: Date;
    updated_date: Date;
    deleted_date: Date | null;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PaymentGroupByOutputType, T['by']> & {
          [P in keyof T & keyof PaymentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>;
        }
      >
    >;

  export type PaymentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      payment_internal_id?: boolean;
      user_internal_id?: boolean;
      admin_internal_id?: boolean;
      payment_type?: boolean;
      payment_account_name?: boolean;
      payment_account?: boolean;
      admin_receiver_account_id?: boolean;
      amount?: boolean;
      date?: boolean;
      approve_reject?: boolean;
      reason_for_reject?: boolean;
      payment_confirm_code?: boolean;
      delete_status?: boolean;
      register_date?: boolean;
      updated_date?: boolean;
      deleted_date?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
      admin?: boolean | Payment$adminArgs<ExtArgs>;
      admin_receiver_account?:
        | boolean
        | Payment$admin_receiver_accountArgs<ExtArgs>;
    },
    ExtArgs['result']['payment']
  >;

  export type PaymentSelectScalar = {
    payment_internal_id?: boolean;
    user_internal_id?: boolean;
    admin_internal_id?: boolean;
    payment_type?: boolean;
    payment_account_name?: boolean;
    payment_account?: boolean;
    admin_receiver_account_id?: boolean;
    amount?: boolean;
    date?: boolean;
    approve_reject?: boolean;
    reason_for_reject?: boolean;
    payment_confirm_code?: boolean;
    delete_status?: boolean;
    register_date?: boolean;
    updated_date?: boolean;
    deleted_date?: boolean;
  };

  export type PaymentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
    admin?: boolean | Payment$adminArgs<ExtArgs>;
    admin_receiver_account?:
      | boolean
      | Payment$admin_receiver_accountArgs<ExtArgs>;
  };

  export type $PaymentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Payment';
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>;
      admin: Prisma.$AdminPayload<ExtArgs> | null;
      admin_receiver_account: Prisma.$AdminReceiverAccountPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        payment_internal_id: string;
        user_internal_id: string;
        admin_internal_id: string | null;
        payment_type: string;
        payment_account_name: string;
        payment_account: string;
        admin_receiver_account_id: string | null;
        amount: Prisma.Decimal;
        date: Date;
        approve_reject: number;
        reason_for_reject: string | null;
        payment_confirm_code: number;
        delete_status: number;
        register_date: Date;
        updated_date: Date;
        deleted_date: Date | null;
      },
      ExtArgs['result']['payment']
    >;
    composites: {};
  };

  type PaymentGetPayload<
    S extends boolean | null | undefined | PaymentDefaultArgs,
  > = $Result.GetResult<Prisma.$PaymentPayload, S>;

  type PaymentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: PaymentCountAggregateInputType | true;
  };

  export interface PaymentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Payment'];
      meta: { name: 'Payment' };
    };
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends PaymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends PaymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     *
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     *
     * // Only select the `payment_internal_id`
     * const paymentWithPayment_internal_idOnly = await prisma.payment.findMany({ select: { payment_internal_id: true } })
     *
     **/
    findMany<T extends PaymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     *
     **/
    create<T extends PaymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Payments.
     *     @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends PaymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     *
     **/
    delete<T extends PaymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends PaymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends PaymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends PaymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     **/
    upsert<T extends PaymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
     **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(
      args: Subset<T, PaymentAggregateArgs>,
    ): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetPaymentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Payment model
     */
    readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsersDefaultArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      | $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;

    admin<T extends Payment$adminArgs<ExtArgs> = {}>(
      args?: Subset<T, Payment$adminArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<
        Prisma.$AdminPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;

    admin_receiver_account<
      T extends Payment$admin_receiver_accountArgs<ExtArgs> = {},
    >(
      args?: Subset<T, Payment$admin_receiver_accountArgs<ExtArgs>>,
    ): Prisma__AdminReceiverAccountClient<
      $Result.GetResult<
        Prisma.$AdminReceiverAccountPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly payment_internal_id: FieldRef<'Payment', 'String'>;
    readonly user_internal_id: FieldRef<'Payment', 'String'>;
    readonly admin_internal_id: FieldRef<'Payment', 'String'>;
    readonly payment_type: FieldRef<'Payment', 'String'>;
    readonly payment_account_name: FieldRef<'Payment', 'String'>;
    readonly payment_account: FieldRef<'Payment', 'String'>;
    readonly admin_receiver_account_id: FieldRef<'Payment', 'String'>;
    readonly amount: FieldRef<'Payment', 'Decimal'>;
    readonly date: FieldRef<'Payment', 'DateTime'>;
    readonly approve_reject: FieldRef<'Payment', 'Int'>;
    readonly reason_for_reject: FieldRef<'Payment', 'String'>;
    readonly payment_confirm_code: FieldRef<'Payment', 'Int'>;
    readonly delete_status: FieldRef<'Payment', 'Int'>;
    readonly register_date: FieldRef<'Payment', 'DateTime'>;
    readonly updated_date: FieldRef<'Payment', 'DateTime'>;
    readonly deleted_date: FieldRef<'Payment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment create
   */
  export type PaymentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>;
  };

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>;
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>;
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput;
  };

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput;
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>;
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>;
  };

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput;
  };

  /**
   * Payment.admin
   */
  export type Payment$adminArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null;
    where?: AdminWhereInput;
  };

  /**
   * Payment.admin_receiver_account
   */
  export type Payment$admin_receiver_accountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminReceiverAccount
     */
    select?: AdminReceiverAccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminReceiverAccountInclude<ExtArgs> | null;
    where?: AdminReceiverAccountWhereInput;
  };

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null;
  };

  /**
   * Model Withdraw
   */

  export type AggregateWithdraw = {
    _count: WithdrawCountAggregateOutputType | null;
    _avg: WithdrawAvgAggregateOutputType | null;
    _sum: WithdrawSumAggregateOutputType | null;
    _min: WithdrawMinAggregateOutputType | null;
    _max: WithdrawMaxAggregateOutputType | null;
  };

  export type WithdrawAvgAggregateOutputType = {
    amount: Decimal | null;
    is_verify: number | null;
    approve_reject: number | null;
    delete_status: number | null;
  };

  export type WithdrawSumAggregateOutputType = {
    amount: Decimal | null;
    is_verify: number | null;
    approve_reject: number | null;
    delete_status: number | null;
  };

  export type WithdrawMinAggregateOutputType = {
    withdraw_id: string | null;
    user_internal_id: string | null;
    admin_internal_id: string | null;
    user_withdraw_account_id: string | null;
    amount: Decimal | null;
    date: Date | null;
    withdraw_confirm_code: string | null;
    is_verify: number | null;
    approve_reject: number | null;
    reason_for_reject: string | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type WithdrawMaxAggregateOutputType = {
    withdraw_id: string | null;
    user_internal_id: string | null;
    admin_internal_id: string | null;
    user_withdraw_account_id: string | null;
    amount: Decimal | null;
    date: Date | null;
    withdraw_confirm_code: string | null;
    is_verify: number | null;
    approve_reject: number | null;
    reason_for_reject: string | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type WithdrawCountAggregateOutputType = {
    withdraw_id: number;
    user_internal_id: number;
    admin_internal_id: number;
    user_withdraw_account_id: number;
    amount: number;
    date: number;
    withdraw_confirm_code: number;
    is_verify: number;
    approve_reject: number;
    reason_for_reject: number;
    delete_status: number;
    register_date: number;
    updated_date: number;
    deleted_date: number;
    _all: number;
  };

  export type WithdrawAvgAggregateInputType = {
    amount?: true;
    is_verify?: true;
    approve_reject?: true;
    delete_status?: true;
  };

  export type WithdrawSumAggregateInputType = {
    amount?: true;
    is_verify?: true;
    approve_reject?: true;
    delete_status?: true;
  };

  export type WithdrawMinAggregateInputType = {
    withdraw_id?: true;
    user_internal_id?: true;
    admin_internal_id?: true;
    user_withdraw_account_id?: true;
    amount?: true;
    date?: true;
    withdraw_confirm_code?: true;
    is_verify?: true;
    approve_reject?: true;
    reason_for_reject?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type WithdrawMaxAggregateInputType = {
    withdraw_id?: true;
    user_internal_id?: true;
    admin_internal_id?: true;
    user_withdraw_account_id?: true;
    amount?: true;
    date?: true;
    withdraw_confirm_code?: true;
    is_verify?: true;
    approve_reject?: true;
    reason_for_reject?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type WithdrawCountAggregateInputType = {
    withdraw_id?: true;
    user_internal_id?: true;
    admin_internal_id?: true;
    user_withdraw_account_id?: true;
    amount?: true;
    date?: true;
    withdraw_confirm_code?: true;
    is_verify?: true;
    approve_reject?: true;
    reason_for_reject?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
    _all?: true;
  };

  export type WithdrawAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Withdraw to aggregate.
     */
    where?: WithdrawWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Withdraws to fetch.
     */
    orderBy?:
      | WithdrawOrderByWithRelationInput
      | WithdrawOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: WithdrawWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Withdraws from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Withdraws.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Withdraws
     **/
    _count?: true | WithdrawCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: WithdrawAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: WithdrawSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: WithdrawMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: WithdrawMaxAggregateInputType;
  };

  export type GetWithdrawAggregateType<T extends WithdrawAggregateArgs> = {
    [P in keyof T & keyof AggregateWithdraw]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdraw[P]>
      : GetScalarType<T[P], AggregateWithdraw[P]>;
  };

  export type WithdrawGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: WithdrawWhereInput;
    orderBy?:
      | WithdrawOrderByWithAggregationInput
      | WithdrawOrderByWithAggregationInput[];
    by: WithdrawScalarFieldEnum[] | WithdrawScalarFieldEnum;
    having?: WithdrawScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WithdrawCountAggregateInputType | true;
    _avg?: WithdrawAvgAggregateInputType;
    _sum?: WithdrawSumAggregateInputType;
    _min?: WithdrawMinAggregateInputType;
    _max?: WithdrawMaxAggregateInputType;
  };

  export type WithdrawGroupByOutputType = {
    withdraw_id: string;
    user_internal_id: string;
    admin_internal_id: string | null;
    user_withdraw_account_id: string;
    amount: Decimal;
    date: Date;
    withdraw_confirm_code: string | null;
    is_verify: number | null;
    approve_reject: number;
    reason_for_reject: string | null;
    delete_status: number;
    register_date: Date;
    updated_date: Date;
    deleted_date: Date | null;
    _count: WithdrawCountAggregateOutputType | null;
    _avg: WithdrawAvgAggregateOutputType | null;
    _sum: WithdrawSumAggregateOutputType | null;
    _min: WithdrawMinAggregateOutputType | null;
    _max: WithdrawMaxAggregateOutputType | null;
  };

  type GetWithdrawGroupByPayload<T extends WithdrawGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<WithdrawGroupByOutputType, T['by']> & {
          [P in keyof T & keyof WithdrawGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawGroupByOutputType[P]>;
        }
      >
    >;

  export type WithdrawSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      withdraw_id?: boolean;
      user_internal_id?: boolean;
      admin_internal_id?: boolean;
      user_withdraw_account_id?: boolean;
      amount?: boolean;
      date?: boolean;
      withdraw_confirm_code?: boolean;
      is_verify?: boolean;
      approve_reject?: boolean;
      reason_for_reject?: boolean;
      delete_status?: boolean;
      register_date?: boolean;
      updated_date?: boolean;
      deleted_date?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
      admin?: boolean | Withdraw$adminArgs<ExtArgs>;
      withdrawaccount?: boolean | UserWithdrawAccountDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['withdraw']
  >;

  export type WithdrawSelectScalar = {
    withdraw_id?: boolean;
    user_internal_id?: boolean;
    admin_internal_id?: boolean;
    user_withdraw_account_id?: boolean;
    amount?: boolean;
    date?: boolean;
    withdraw_confirm_code?: boolean;
    is_verify?: boolean;
    approve_reject?: boolean;
    reason_for_reject?: boolean;
    delete_status?: boolean;
    register_date?: boolean;
    updated_date?: boolean;
    deleted_date?: boolean;
  };

  export type WithdrawInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
    admin?: boolean | Withdraw$adminArgs<ExtArgs>;
    withdrawaccount?: boolean | UserWithdrawAccountDefaultArgs<ExtArgs>;
  };

  export type $WithdrawPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Withdraw';
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>;
      admin: Prisma.$AdminPayload<ExtArgs> | null;
      withdrawaccount: Prisma.$UserWithdrawAccountPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        withdraw_id: string;
        user_internal_id: string;
        admin_internal_id: string | null;
        user_withdraw_account_id: string;
        amount: Prisma.Decimal;
        date: Date;
        withdraw_confirm_code: string | null;
        is_verify: number | null;
        approve_reject: number;
        reason_for_reject: string | null;
        delete_status: number;
        register_date: Date;
        updated_date: Date;
        deleted_date: Date | null;
      },
      ExtArgs['result']['withdraw']
    >;
    composites: {};
  };

  type WithdrawGetPayload<
    S extends boolean | null | undefined | WithdrawDefaultArgs,
  > = $Result.GetResult<Prisma.$WithdrawPayload, S>;

  type WithdrawCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<WithdrawFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: WithdrawCountAggregateInputType | true;
  };

  export interface WithdrawDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Withdraw'];
      meta: { name: 'Withdraw' };
    };
    /**
     * Find zero or one Withdraw that matches the filter.
     * @param {WithdrawFindUniqueArgs} args - Arguments to find a Withdraw
     * @example
     * // Get one Withdraw
     * const withdraw = await prisma.withdraw.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends WithdrawFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawFindUniqueArgs<ExtArgs>>,
    ): Prisma__WithdrawClient<
      $Result.GetResult<
        Prisma.$WithdrawPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Withdraw that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {WithdrawFindUniqueOrThrowArgs} args - Arguments to find a Withdraw
     * @example
     * // Get one Withdraw
     * const withdraw = await prisma.withdraw.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends WithdrawFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__WithdrawClient<
      $Result.GetResult<
        Prisma.$WithdrawPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Withdraw that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawFindFirstArgs} args - Arguments to find a Withdraw
     * @example
     * // Get one Withdraw
     * const withdraw = await prisma.withdraw.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends WithdrawFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawFindFirstArgs<ExtArgs>>,
    ): Prisma__WithdrawClient<
      $Result.GetResult<
        Prisma.$WithdrawPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Withdraw that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawFindFirstOrThrowArgs} args - Arguments to find a Withdraw
     * @example
     * // Get one Withdraw
     * const withdraw = await prisma.withdraw.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends WithdrawFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__WithdrawClient<
      $Result.GetResult<
        Prisma.$WithdrawPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Withdraws that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Withdraws
     * const withdraws = await prisma.withdraw.findMany()
     *
     * // Get first 10 Withdraws
     * const withdraws = await prisma.withdraw.findMany({ take: 10 })
     *
     * // Only select the `withdraw_id`
     * const withdrawWithWithdraw_idOnly = await prisma.withdraw.findMany({ select: { withdraw_id: true } })
     *
     **/
    findMany<T extends WithdrawFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$WithdrawPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Withdraw.
     * @param {WithdrawCreateArgs} args - Arguments to create a Withdraw.
     * @example
     * // Create one Withdraw
     * const Withdraw = await prisma.withdraw.create({
     *   data: {
     *     // ... data to create a Withdraw
     *   }
     * })
     *
     **/
    create<T extends WithdrawCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawCreateArgs<ExtArgs>>,
    ): Prisma__WithdrawClient<
      $Result.GetResult<Prisma.$WithdrawPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Withdraws.
     *     @param {WithdrawCreateManyArgs} args - Arguments to create many Withdraws.
     *     @example
     *     // Create many Withdraws
     *     const withdraw = await prisma.withdraw.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends WithdrawCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Withdraw.
     * @param {WithdrawDeleteArgs} args - Arguments to delete one Withdraw.
     * @example
     * // Delete one Withdraw
     * const Withdraw = await prisma.withdraw.delete({
     *   where: {
     *     // ... filter to delete one Withdraw
     *   }
     * })
     *
     **/
    delete<T extends WithdrawDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawDeleteArgs<ExtArgs>>,
    ): Prisma__WithdrawClient<
      $Result.GetResult<Prisma.$WithdrawPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Withdraw.
     * @param {WithdrawUpdateArgs} args - Arguments to update one Withdraw.
     * @example
     * // Update one Withdraw
     * const withdraw = await prisma.withdraw.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends WithdrawUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawUpdateArgs<ExtArgs>>,
    ): Prisma__WithdrawClient<
      $Result.GetResult<Prisma.$WithdrawPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Withdraws.
     * @param {WithdrawDeleteManyArgs} args - Arguments to filter Withdraws to delete.
     * @example
     * // Delete a few Withdraws
     * const { count } = await prisma.withdraw.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends WithdrawDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WithdrawDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Withdraws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Withdraws
     * const withdraw = await prisma.withdraw.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends WithdrawUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Withdraw.
     * @param {WithdrawUpsertArgs} args - Arguments to update or create a Withdraw.
     * @example
     * // Update or create a Withdraw
     * const withdraw = await prisma.withdraw.upsert({
     *   create: {
     *     // ... data to create a Withdraw
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Withdraw we want to update
     *   }
     * })
     **/
    upsert<T extends WithdrawUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WithdrawUpsertArgs<ExtArgs>>,
    ): Prisma__WithdrawClient<
      $Result.GetResult<Prisma.$WithdrawPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Withdraws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawCountArgs} args - Arguments to filter Withdraws to count.
     * @example
     * // Count the number of Withdraws
     * const count = await prisma.withdraw.count({
     *   where: {
     *     // ... the filter for the Withdraws we want to count
     *   }
     * })
     **/
    count<T extends WithdrawCountArgs>(
      args?: Subset<T, WithdrawCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Withdraw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WithdrawAggregateArgs>(
      args: Subset<T, WithdrawAggregateArgs>,
    ): Prisma.PrismaPromise<GetWithdrawAggregateType<T>>;

    /**
     * Group by Withdraw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawGroupByArgs} args - Group by arguments.
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
      T extends WithdrawGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, WithdrawGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetWithdrawGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Withdraw model
     */
    readonly fields: WithdrawFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Withdraw.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsersDefaultArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      | $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;

    admin<T extends Withdraw$adminArgs<ExtArgs> = {}>(
      args?: Subset<T, Withdraw$adminArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<
        Prisma.$AdminPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;

    withdrawaccount<T extends UserWithdrawAccountDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserWithdrawAccountDefaultArgs<ExtArgs>>,
    ): Prisma__UserWithdrawAccountClient<
      | $Result.GetResult<
          Prisma.$UserWithdrawAccountPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Withdraw model
   */
  interface WithdrawFieldRefs {
    readonly withdraw_id: FieldRef<'Withdraw', 'String'>;
    readonly user_internal_id: FieldRef<'Withdraw', 'String'>;
    readonly admin_internal_id: FieldRef<'Withdraw', 'String'>;
    readonly user_withdraw_account_id: FieldRef<'Withdraw', 'String'>;
    readonly amount: FieldRef<'Withdraw', 'Decimal'>;
    readonly date: FieldRef<'Withdraw', 'DateTime'>;
    readonly withdraw_confirm_code: FieldRef<'Withdraw', 'String'>;
    readonly is_verify: FieldRef<'Withdraw', 'Int'>;
    readonly approve_reject: FieldRef<'Withdraw', 'Int'>;
    readonly reason_for_reject: FieldRef<'Withdraw', 'String'>;
    readonly delete_status: FieldRef<'Withdraw', 'Int'>;
    readonly register_date: FieldRef<'Withdraw', 'DateTime'>;
    readonly updated_date: FieldRef<'Withdraw', 'DateTime'>;
    readonly deleted_date: FieldRef<'Withdraw', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * Withdraw findUnique
   */
  export type WithdrawFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Withdraw
     */
    select?: WithdrawSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawInclude<ExtArgs> | null;
    /**
     * Filter, which Withdraw to fetch.
     */
    where: WithdrawWhereUniqueInput;
  };

  /**
   * Withdraw findUniqueOrThrow
   */
  export type WithdrawFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Withdraw
     */
    select?: WithdrawSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawInclude<ExtArgs> | null;
    /**
     * Filter, which Withdraw to fetch.
     */
    where: WithdrawWhereUniqueInput;
  };

  /**
   * Withdraw findFirst
   */
  export type WithdrawFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Withdraw
     */
    select?: WithdrawSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawInclude<ExtArgs> | null;
    /**
     * Filter, which Withdraw to fetch.
     */
    where?: WithdrawWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Withdraws to fetch.
     */
    orderBy?:
      | WithdrawOrderByWithRelationInput
      | WithdrawOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Withdraws.
     */
    cursor?: WithdrawWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Withdraws from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Withdraws.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Withdraws.
     */
    distinct?: WithdrawScalarFieldEnum | WithdrawScalarFieldEnum[];
  };

  /**
   * Withdraw findFirstOrThrow
   */
  export type WithdrawFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Withdraw
     */
    select?: WithdrawSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawInclude<ExtArgs> | null;
    /**
     * Filter, which Withdraw to fetch.
     */
    where?: WithdrawWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Withdraws to fetch.
     */
    orderBy?:
      | WithdrawOrderByWithRelationInput
      | WithdrawOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Withdraws.
     */
    cursor?: WithdrawWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Withdraws from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Withdraws.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Withdraws.
     */
    distinct?: WithdrawScalarFieldEnum | WithdrawScalarFieldEnum[];
  };

  /**
   * Withdraw findMany
   */
  export type WithdrawFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Withdraw
     */
    select?: WithdrawSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawInclude<ExtArgs> | null;
    /**
     * Filter, which Withdraws to fetch.
     */
    where?: WithdrawWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Withdraws to fetch.
     */
    orderBy?:
      | WithdrawOrderByWithRelationInput
      | WithdrawOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Withdraws.
     */
    cursor?: WithdrawWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Withdraws from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Withdraws.
     */
    skip?: number;
    distinct?: WithdrawScalarFieldEnum | WithdrawScalarFieldEnum[];
  };

  /**
   * Withdraw create
   */
  export type WithdrawCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Withdraw
     */
    select?: WithdrawSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawInclude<ExtArgs> | null;
    /**
     * The data needed to create a Withdraw.
     */
    data: XOR<WithdrawCreateInput, WithdrawUncheckedCreateInput>;
  };

  /**
   * Withdraw createMany
   */
  export type WithdrawCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Withdraws.
     */
    data: WithdrawCreateManyInput | WithdrawCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Withdraw update
   */
  export type WithdrawUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Withdraw
     */
    select?: WithdrawSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawInclude<ExtArgs> | null;
    /**
     * The data needed to update a Withdraw.
     */
    data: XOR<WithdrawUpdateInput, WithdrawUncheckedUpdateInput>;
    /**
     * Choose, which Withdraw to update.
     */
    where: WithdrawWhereUniqueInput;
  };

  /**
   * Withdraw updateMany
   */
  export type WithdrawUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Withdraws.
     */
    data: XOR<
      WithdrawUpdateManyMutationInput,
      WithdrawUncheckedUpdateManyInput
    >;
    /**
     * Filter which Withdraws to update
     */
    where?: WithdrawWhereInput;
  };

  /**
   * Withdraw upsert
   */
  export type WithdrawUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Withdraw
     */
    select?: WithdrawSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawInclude<ExtArgs> | null;
    /**
     * The filter to search for the Withdraw to update in case it exists.
     */
    where: WithdrawWhereUniqueInput;
    /**
     * In case the Withdraw found by the `where` argument doesn't exist, create a new Withdraw with this data.
     */
    create: XOR<WithdrawCreateInput, WithdrawUncheckedCreateInput>;
    /**
     * In case the Withdraw was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawUpdateInput, WithdrawUncheckedUpdateInput>;
  };

  /**
   * Withdraw delete
   */
  export type WithdrawDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Withdraw
     */
    select?: WithdrawSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawInclude<ExtArgs> | null;
    /**
     * Filter which Withdraw to delete.
     */
    where: WithdrawWhereUniqueInput;
  };

  /**
   * Withdraw deleteMany
   */
  export type WithdrawDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Withdraws to delete
     */
    where?: WithdrawWhereInput;
  };

  /**
   * Withdraw.admin
   */
  export type Withdraw$adminArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null;
    where?: AdminWhereInput;
  };

  /**
   * Withdraw without action
   */
  export type WithdrawDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Withdraw
     */
    select?: WithdrawSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawInclude<ExtArgs> | null;
  };

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null;
    _avg: AdminAvgAggregateOutputType | null;
    _sum: AdminSumAggregateOutputType | null;
    _min: AdminMinAggregateOutputType | null;
    _max: AdminMaxAggregateOutputType | null;
  };

  export type AdminAvgAggregateOutputType = {
    role_id: number | null;
    delete_status: number | null;
  };

  export type AdminSumAggregateOutputType = {
    role_id: number | null;
    delete_status: number | null;
  };

  export type AdminMinAggregateOutputType = {
    admin_internal_id: string | null;
    admin_id: string | null;
    admin_name: string | null;
    password: string | null;
    role_id: number | null;
    account_status: string | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type AdminMaxAggregateOutputType = {
    admin_internal_id: string | null;
    admin_id: string | null;
    admin_name: string | null;
    password: string | null;
    role_id: number | null;
    account_status: string | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type AdminCountAggregateOutputType = {
    admin_internal_id: number;
    admin_id: number;
    admin_name: number;
    password: number;
    role_id: number;
    account_status: number;
    delete_status: number;
    register_date: number;
    updated_date: number;
    deleted_date: number;
    _all: number;
  };

  export type AdminAvgAggregateInputType = {
    role_id?: true;
    delete_status?: true;
  };

  export type AdminSumAggregateInputType = {
    role_id?: true;
    delete_status?: true;
  };

  export type AdminMinAggregateInputType = {
    admin_internal_id?: true;
    admin_id?: true;
    admin_name?: true;
    password?: true;
    role_id?: true;
    account_status?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type AdminMaxAggregateInputType = {
    admin_internal_id?: true;
    admin_id?: true;
    admin_name?: true;
    password?: true;
    role_id?: true;
    account_status?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type AdminCountAggregateInputType = {
    admin_internal_id?: true;
    admin_id?: true;
    admin_name?: true;
    password?: true;
    role_id?: true;
    account_status?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
    _all?: true;
  };

  export type AdminAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Admins
     **/
    _count?: true | AdminCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AdminAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AdminSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AdminMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AdminMaxAggregateInputType;
  };

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
    [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>;
  };

  export type AdminGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AdminWhereInput;
    orderBy?:
      | AdminOrderByWithAggregationInput
      | AdminOrderByWithAggregationInput[];
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum;
    having?: AdminScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminCountAggregateInputType | true;
    _avg?: AdminAvgAggregateInputType;
    _sum?: AdminSumAggregateInputType;
    _min?: AdminMinAggregateInputType;
    _max?: AdminMaxAggregateInputType;
  };

  export type AdminGroupByOutputType = {
    admin_internal_id: string;
    admin_id: string;
    admin_name: string | null;
    password: string | null;
    role_id: number;
    account_status: string | null;
    delete_status: number | null;
    register_date: Date;
    updated_date: Date;
    deleted_date: Date | null;
    _count: AdminCountAggregateOutputType | null;
    _avg: AdminAvgAggregateOutputType | null;
    _sum: AdminSumAggregateOutputType | null;
    _min: AdminMinAggregateOutputType | null;
    _max: AdminMaxAggregateOutputType | null;
  };

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AdminGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AdminGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>;
        }
      >
    >;

  export type AdminSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      admin_internal_id?: boolean;
      admin_id?: boolean;
      admin_name?: boolean;
      password?: boolean;
      role_id?: boolean;
      account_status?: boolean;
      delete_status?: boolean;
      register_date?: boolean;
      updated_date?: boolean;
      deleted_date?: boolean;
      admin_role?: boolean | AdminRolesDefaultArgs<ExtArgs>;
      payment?: boolean | Admin$paymentArgs<ExtArgs>;
      withdraw?: boolean | Admin$withdrawArgs<ExtArgs>;
      _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['admin']
  >;

  export type AdminSelectScalar = {
    admin_internal_id?: boolean;
    admin_id?: boolean;
    admin_name?: boolean;
    password?: boolean;
    role_id?: boolean;
    account_status?: boolean;
    delete_status?: boolean;
    register_date?: boolean;
    updated_date?: boolean;
    deleted_date?: boolean;
  };

  export type AdminInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    admin_role?: boolean | AdminRolesDefaultArgs<ExtArgs>;
    payment?: boolean | Admin$paymentArgs<ExtArgs>;
    withdraw?: boolean | Admin$withdrawArgs<ExtArgs>;
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $AdminPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Admin';
    objects: {
      admin_role: Prisma.$AdminRolesPayload<ExtArgs>;
      payment: Prisma.$PaymentPayload<ExtArgs>[];
      withdraw: Prisma.$WithdrawPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        admin_internal_id: string;
        admin_id: string;
        admin_name: string | null;
        password: string | null;
        role_id: number;
        account_status: string | null;
        delete_status: number | null;
        register_date: Date;
        updated_date: Date;
        deleted_date: Date | null;
      },
      ExtArgs['result']['admin']
    >;
    composites: {};
  };

  type AdminGetPayload<
    S extends boolean | null | undefined | AdminDefaultArgs,
  > = $Result.GetResult<Prisma.$AdminPayload, S>;

  type AdminCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: AdminCountAggregateInputType | true;
  };

  export interface AdminDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Admin'];
      meta: { name: 'Admin' };
    };
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
      args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findMany'>
    >;

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
      args: SelectSubset<T, AdminCreateArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

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
      args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

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
    >;

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
    aggregate<T extends AdminAggregateArgs>(
      args: Subset<T, AdminAggregateArgs>,
    ): Prisma.PrismaPromise<GetAdminAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAdminGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__AdminClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    admin_role<T extends AdminRolesDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AdminRolesDefaultArgs<ExtArgs>>,
    ): Prisma__AdminRolesClient<
      | $Result.GetResult<
          Prisma.$AdminRolesPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;

    payment<T extends Admin$paymentArgs<ExtArgs> = {}>(
      args?: Subset<T, Admin$paymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    withdraw<T extends Admin$withdrawArgs<ExtArgs> = {}>(
      args?: Subset<T, Admin$withdrawArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$WithdrawPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
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
    readonly admin_internal_id: FieldRef<'Admin', 'String'>;
    readonly admin_id: FieldRef<'Admin', 'String'>;
    readonly admin_name: FieldRef<'Admin', 'String'>;
    readonly password: FieldRef<'Admin', 'String'>;
    readonly role_id: FieldRef<'Admin', 'Int'>;
    readonly account_status: FieldRef<'Admin', 'String'>;
    readonly delete_status: FieldRef<'Admin', 'Int'>;
    readonly register_date: FieldRef<'Admin', 'DateTime'>;
    readonly updated_date: FieldRef<'Admin', 'DateTime'>;
    readonly deleted_date: FieldRef<'Admin', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput;
  };

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput;
  };

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[];
  };

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[];
  };

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null;
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[];
  };

  /**
   * Admin create
   */
  export type AdminCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null;
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>;
  };

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Admin update
   */
  export type AdminUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null;
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>;
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput;
  };

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>;
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput;
  };

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null;
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput;
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>;
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>;
  };

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null;
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput;
  };

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput;
  };

  /**
   * Admin.payment
   */
  export type Admin$paymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null;
    where?: PaymentWhereInput;
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    cursor?: PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Admin.withdraw
   */
  export type Admin$withdrawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Withdraw
     */
    select?: WithdrawSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WithdrawInclude<ExtArgs> | null;
    where?: WithdrawWhereInput;
    orderBy?:
      | WithdrawOrderByWithRelationInput
      | WithdrawOrderByWithRelationInput[];
    cursor?: WithdrawWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: WithdrawScalarFieldEnum | WithdrawScalarFieldEnum[];
  };

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null;
  };

  /**
   * Model AdminRoles
   */

  export type AggregateAdminRoles = {
    _count: AdminRolesCountAggregateOutputType | null;
    _avg: AdminRolesAvgAggregateOutputType | null;
    _sum: AdminRolesSumAggregateOutputType | null;
    _min: AdminRolesMinAggregateOutputType | null;
    _max: AdminRolesMaxAggregateOutputType | null;
  };

  export type AdminRolesAvgAggregateOutputType = {
    role_id: number | null;
  };

  export type AdminRolesSumAggregateOutputType = {
    role_id: number | null;
  };

  export type AdminRolesMinAggregateOutputType = {
    role_id: number | null;
    name: string | null;
  };

  export type AdminRolesMaxAggregateOutputType = {
    role_id: number | null;
    name: string | null;
  };

  export type AdminRolesCountAggregateOutputType = {
    role_id: number;
    name: number;
    _all: number;
  };

  export type AdminRolesAvgAggregateInputType = {
    role_id?: true;
  };

  export type AdminRolesSumAggregateInputType = {
    role_id?: true;
  };

  export type AdminRolesMinAggregateInputType = {
    role_id?: true;
    name?: true;
  };

  export type AdminRolesMaxAggregateInputType = {
    role_id?: true;
    name?: true;
  };

  export type AdminRolesCountAggregateInputType = {
    role_id?: true;
    name?: true;
    _all?: true;
  };

  export type AdminRolesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AdminRoles to aggregate.
     */
    where?: AdminRolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?:
      | AdminRolesOrderByWithRelationInput
      | AdminRolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AdminRolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminRoles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AdminRoles
     **/
    _count?: true | AdminRolesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AdminRolesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AdminRolesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AdminRolesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AdminRolesMaxAggregateInputType;
  };

  export type GetAdminRolesAggregateType<T extends AdminRolesAggregateArgs> = {
    [P in keyof T & keyof AggregateAdminRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminRoles[P]>
      : GetScalarType<T[P], AggregateAdminRoles[P]>;
  };

  export type AdminRolesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AdminRolesWhereInput;
    orderBy?:
      | AdminRolesOrderByWithAggregationInput
      | AdminRolesOrderByWithAggregationInput[];
    by: AdminRolesScalarFieldEnum[] | AdminRolesScalarFieldEnum;
    having?: AdminRolesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminRolesCountAggregateInputType | true;
    _avg?: AdminRolesAvgAggregateInputType;
    _sum?: AdminRolesSumAggregateInputType;
    _min?: AdminRolesMinAggregateInputType;
    _max?: AdminRolesMaxAggregateInputType;
  };

  export type AdminRolesGroupByOutputType = {
    role_id: number;
    name: string;
    _count: AdminRolesCountAggregateOutputType | null;
    _avg: AdminRolesAvgAggregateOutputType | null;
    _sum: AdminRolesSumAggregateOutputType | null;
    _min: AdminRolesMinAggregateOutputType | null;
    _max: AdminRolesMaxAggregateOutputType | null;
  };

  type GetAdminRolesGroupByPayload<T extends AdminRolesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AdminRolesGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AdminRolesGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminRolesGroupByOutputType[P]>
            : GetScalarType<T[P], AdminRolesGroupByOutputType[P]>;
        }
      >
    >;

  export type AdminRolesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      role_id?: boolean;
      name?: boolean;
      admins?: boolean | AdminRoles$adminsArgs<ExtArgs>;
      _count?: boolean | AdminRolesCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['adminRoles']
  >;

  export type AdminRolesSelectScalar = {
    role_id?: boolean;
    name?: boolean;
  };

  export type AdminRolesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    admins?: boolean | AdminRoles$adminsArgs<ExtArgs>;
    _count?: boolean | AdminRolesCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $AdminRolesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'AdminRoles';
    objects: {
      admins: Prisma.$AdminPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        role_id: number;
        name: string;
      },
      ExtArgs['result']['adminRoles']
    >;
    composites: {};
  };

  type AdminRolesGetPayload<
    S extends boolean | null | undefined | AdminRolesDefaultArgs,
  > = $Result.GetResult<Prisma.$AdminRolesPayload, S>;

  type AdminRolesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AdminRolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: AdminRolesCountAggregateInputType | true;
  };

  export interface AdminRolesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['AdminRoles'];
      meta: { name: 'AdminRoles' };
    };
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
      args: SelectSubset<T, AdminRolesFindUniqueArgs<ExtArgs>>,
    ): Prisma__AdminRolesClient<
      $Result.GetResult<
        Prisma.$AdminRolesPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, AdminRolesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AdminRolesClient<
      $Result.GetResult<
        Prisma.$AdminRolesPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, AdminRolesFindFirstArgs<ExtArgs>>,
    ): Prisma__AdminRolesClient<
      $Result.GetResult<
        Prisma.$AdminRolesPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, AdminRolesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AdminRolesClient<
      $Result.GetResult<
        Prisma.$AdminRolesPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, AdminRolesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AdminRolesPayload<ExtArgs>, T, 'findMany'>
    >;

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
      args: SelectSubset<T, AdminRolesCreateArgs<ExtArgs>>,
    ): Prisma__AdminRolesClient<
      $Result.GetResult<Prisma.$AdminRolesPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, AdminRolesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, AdminRolesDeleteArgs<ExtArgs>>,
    ): Prisma__AdminRolesClient<
      $Result.GetResult<Prisma.$AdminRolesPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

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
      args: SelectSubset<T, AdminRolesUpdateArgs<ExtArgs>>,
    ): Prisma__AdminRolesClient<
      $Result.GetResult<Prisma.$AdminRolesPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, AdminRolesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, AdminRolesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, AdminRolesUpsertArgs<ExtArgs>>,
    ): Prisma__AdminRolesClient<
      $Result.GetResult<Prisma.$AdminRolesPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

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
    >;

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
    aggregate<T extends AdminRolesAggregateArgs>(
      args: Subset<T, AdminRolesAggregateArgs>,
    ): Prisma.PrismaPromise<GetAdminRolesAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AdminRolesGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAdminRolesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__AdminRolesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    admins<T extends AdminRoles$adminsArgs<ExtArgs> = {}>(
      args?: Subset<T, AdminRoles$adminsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
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
    readonly role_id: FieldRef<'AdminRoles', 'Int'>;
    readonly name: FieldRef<'AdminRoles', 'String'>;
  }

  // Custom InputTypes

  /**
   * AdminRoles findUnique
   */
  export type AdminRolesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminRolesInclude<ExtArgs> | null;
    /**
     * Filter, which AdminRoles to fetch.
     */
    where: AdminRolesWhereUniqueInput;
  };

  /**
   * AdminRoles findUniqueOrThrow
   */
  export type AdminRolesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminRolesInclude<ExtArgs> | null;
    /**
     * Filter, which AdminRoles to fetch.
     */
    where: AdminRolesWhereUniqueInput;
  };

  /**
   * AdminRoles findFirst
   */
  export type AdminRolesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminRolesInclude<ExtArgs> | null;
    /**
     * Filter, which AdminRoles to fetch.
     */
    where?: AdminRolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?:
      | AdminRolesOrderByWithRelationInput
      | AdminRolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdminRoles.
     */
    cursor?: AdminRolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminRoles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdminRoles.
     */
    distinct?: AdminRolesScalarFieldEnum | AdminRolesScalarFieldEnum[];
  };

  /**
   * AdminRoles findFirstOrThrow
   */
  export type AdminRolesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminRolesInclude<ExtArgs> | null;
    /**
     * Filter, which AdminRoles to fetch.
     */
    where?: AdminRolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?:
      | AdminRolesOrderByWithRelationInput
      | AdminRolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdminRoles.
     */
    cursor?: AdminRolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminRoles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdminRoles.
     */
    distinct?: AdminRolesScalarFieldEnum | AdminRolesScalarFieldEnum[];
  };

  /**
   * AdminRoles findMany
   */
  export type AdminRolesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminRolesInclude<ExtArgs> | null;
    /**
     * Filter, which AdminRoles to fetch.
     */
    where?: AdminRolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminRoles to fetch.
     */
    orderBy?:
      | AdminRolesOrderByWithRelationInput
      | AdminRolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AdminRoles.
     */
    cursor?: AdminRolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminRoles.
     */
    skip?: number;
    distinct?: AdminRolesScalarFieldEnum | AdminRolesScalarFieldEnum[];
  };

  /**
   * AdminRoles create
   */
  export type AdminRolesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminRolesInclude<ExtArgs> | null;
    /**
     * The data needed to create a AdminRoles.
     */
    data: XOR<AdminRolesCreateInput, AdminRolesUncheckedCreateInput>;
  };

  /**
   * AdminRoles createMany
   */
  export type AdminRolesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AdminRoles.
     */
    data: AdminRolesCreateManyInput | AdminRolesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AdminRoles update
   */
  export type AdminRolesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminRolesInclude<ExtArgs> | null;
    /**
     * The data needed to update a AdminRoles.
     */
    data: XOR<AdminRolesUpdateInput, AdminRolesUncheckedUpdateInput>;
    /**
     * Choose, which AdminRoles to update.
     */
    where: AdminRolesWhereUniqueInput;
  };

  /**
   * AdminRoles updateMany
   */
  export type AdminRolesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AdminRoles.
     */
    data: XOR<
      AdminRolesUpdateManyMutationInput,
      AdminRolesUncheckedUpdateManyInput
    >;
    /**
     * Filter which AdminRoles to update
     */
    where?: AdminRolesWhereInput;
  };

  /**
   * AdminRoles upsert
   */
  export type AdminRolesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminRolesInclude<ExtArgs> | null;
    /**
     * The filter to search for the AdminRoles to update in case it exists.
     */
    where: AdminRolesWhereUniqueInput;
    /**
     * In case the AdminRoles found by the `where` argument doesn't exist, create a new AdminRoles with this data.
     */
    create: XOR<AdminRolesCreateInput, AdminRolesUncheckedCreateInput>;
    /**
     * In case the AdminRoles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminRolesUpdateInput, AdminRolesUncheckedUpdateInput>;
  };

  /**
   * AdminRoles delete
   */
  export type AdminRolesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminRolesInclude<ExtArgs> | null;
    /**
     * Filter which AdminRoles to delete.
     */
    where: AdminRolesWhereUniqueInput;
  };

  /**
   * AdminRoles deleteMany
   */
  export type AdminRolesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AdminRoles to delete
     */
    where?: AdminRolesWhereInput;
  };

  /**
   * AdminRoles.admins
   */
  export type AdminRoles$adminsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null;
    where?: AdminWhereInput;
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[];
    cursor?: AdminWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[];
  };

  /**
   * AdminRoles without action
   */
  export type AdminRolesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdminRoles
     */
    select?: AdminRolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminRolesInclude<ExtArgs> | null;
  };

  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
  };

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null;
    transaction_type_id: number | null;
    delete_status: number | null;
  };

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null;
    transaction_type_id: number | null;
    delete_status: number | null;
  };

  export type TransactionMinAggregateOutputType = {
    transaction_id: string | null;
    user_internal_id: string | null;
    amount: Decimal | null;
    transaction_type_id: number | null;
    transaction_date: Date | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type TransactionMaxAggregateOutputType = {
    transaction_id: string | null;
    user_internal_id: string | null;
    amount: Decimal | null;
    transaction_type_id: number | null;
    transaction_date: Date | null;
    delete_status: number | null;
    register_date: Date | null;
    updated_date: Date | null;
    deleted_date: Date | null;
  };

  export type TransactionCountAggregateOutputType = {
    transaction_id: number;
    user_internal_id: number;
    amount: number;
    transaction_type_id: number;
    transaction_date: number;
    delete_status: number;
    register_date: number;
    updated_date: number;
    deleted_date: number;
    _all: number;
  };

  export type TransactionAvgAggregateInputType = {
    amount?: true;
    transaction_type_id?: true;
    delete_status?: true;
  };

  export type TransactionSumAggregateInputType = {
    amount?: true;
    transaction_type_id?: true;
    delete_status?: true;
  };

  export type TransactionMinAggregateInputType = {
    transaction_id?: true;
    user_internal_id?: true;
    amount?: true;
    transaction_type_id?: true;
    transaction_date?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type TransactionMaxAggregateInputType = {
    transaction_id?: true;
    user_internal_id?: true;
    amount?: true;
    transaction_type_id?: true;
    transaction_date?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
  };

  export type TransactionCountAggregateInputType = {
    transaction_id?: true;
    user_internal_id?: true;
    amount?: true;
    transaction_type_id?: true;
    transaction_date?: true;
    delete_status?: true;
    register_date?: true;
    updated_date?: true;
    deleted_date?: true;
    _all?: true;
  };

  export type TransactionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Transactions
     **/
    _count?: true | TransactionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TransactionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TransactionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TransactionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TransactionMaxAggregateInputType;
  };

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> =
    {
      [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateTransaction[P]>
        : GetScalarType<T[P], AggregateTransaction[P]>;
    };

  export type TransactionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionWhereInput;
    orderBy?:
      | TransactionOrderByWithAggregationInput
      | TransactionOrderByWithAggregationInput[];
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum;
    having?: TransactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionCountAggregateInputType | true;
    _avg?: TransactionAvgAggregateInputType;
    _sum?: TransactionSumAggregateInputType;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
  };

  export type TransactionGroupByOutputType = {
    transaction_id: string;
    user_internal_id: string;
    amount: Decimal;
    transaction_type_id: number;
    transaction_date: Date;
    delete_status: number;
    register_date: Date;
    updated_date: Date;
    deleted_date: Date | null;
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
  };

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TransactionGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof TransactionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>;
        }
      >
    >;

  export type TransactionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      transaction_id?: boolean;
      user_internal_id?: boolean;
      amount?: boolean;
      transaction_type_id?: boolean;
      transaction_date?: boolean;
      delete_status?: boolean;
      register_date?: boolean;
      updated_date?: boolean;
      deleted_date?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
      transaction_type?: boolean | TransactionTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transaction']
  >;

  export type TransactionSelectScalar = {
    transaction_id?: boolean;
    user_internal_id?: boolean;
    amount?: boolean;
    transaction_type_id?: boolean;
    transaction_date?: boolean;
    delete_status?: boolean;
    register_date?: boolean;
    updated_date?: boolean;
    deleted_date?: boolean;
  };

  export type TransactionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
    transaction_type?: boolean | TransactionTypeDefaultArgs<ExtArgs>;
  };

  export type $TransactionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Transaction';
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>;
      transaction_type: Prisma.$TransactionTypePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        transaction_id: string;
        user_internal_id: string;
        amount: Prisma.Decimal;
        transaction_type_id: number;
        transaction_date: Date;
        delete_status: number;
        register_date: Date;
        updated_date: Date;
        deleted_date: Date | null;
      },
      ExtArgs['result']['transaction']
    >;
    composites: {};
  };

  type TransactionGetPayload<
    S extends boolean | null | undefined | TransactionDefaultArgs,
  > = $Result.GetResult<Prisma.$TransactionPayload, S>;

  type TransactionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: TransactionCountAggregateInputType | true;
  };

  export interface TransactionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Transaction'];
      meta: { name: 'Transaction' };
    };
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
      args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'>
    >;

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
      args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

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
      args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>,
    ): Prisma__TransactionClient<
      $Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

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
    >;

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
    aggregate<T extends TransactionAggregateArgs>(
      args: Subset<T, TransactionAggregateArgs>,
    ): Prisma.PrismaPromise<GetTransactionAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetTransactionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__TransactionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsersDefaultArgs<ExtArgs>>,
    ): Prisma__UsersClient<
      | $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;

    transaction_type<T extends TransactionTypeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TransactionTypeDefaultArgs<ExtArgs>>,
    ): Prisma__TransactionTypeClient<
      | $Result.GetResult<
          Prisma.$TransactionTypePayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
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
    readonly transaction_id: FieldRef<'Transaction', 'String'>;
    readonly user_internal_id: FieldRef<'Transaction', 'String'>;
    readonly amount: FieldRef<'Transaction', 'Decimal'>;
    readonly transaction_type_id: FieldRef<'Transaction', 'Int'>;
    readonly transaction_date: FieldRef<'Transaction', 'DateTime'>;
    readonly delete_status: FieldRef<'Transaction', 'Int'>;
    readonly register_date: FieldRef<'Transaction', 'DateTime'>;
    readonly updated_date: FieldRef<'Transaction', 'DateTime'>;
    readonly deleted_date: FieldRef<'Transaction', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>;
  };

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>;
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<
      TransactionUpdateManyMutationInput,
      TransactionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput;
  };

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput;
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>;
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>;
  };

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput;
  };

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null;
  };

  /**
   * Model TransactionType
   */

  export type AggregateTransactionType = {
    _count: TransactionTypeCountAggregateOutputType | null;
    _avg: TransactionTypeAvgAggregateOutputType | null;
    _sum: TransactionTypeSumAggregateOutputType | null;
    _min: TransactionTypeMinAggregateOutputType | null;
    _max: TransactionTypeMaxAggregateOutputType | null;
  };

  export type TransactionTypeAvgAggregateOutputType = {
    transaction_type_id: number | null;
  };

  export type TransactionTypeSumAggregateOutputType = {
    transaction_type_id: number | null;
  };

  export type TransactionTypeMinAggregateOutputType = {
    transaction_type_id: number | null;
    transaction_type: string | null;
  };

  export type TransactionTypeMaxAggregateOutputType = {
    transaction_type_id: number | null;
    transaction_type: string | null;
  };

  export type TransactionTypeCountAggregateOutputType = {
    transaction_type_id: number;
    transaction_type: number;
    _all: number;
  };

  export type TransactionTypeAvgAggregateInputType = {
    transaction_type_id?: true;
  };

  export type TransactionTypeSumAggregateInputType = {
    transaction_type_id?: true;
  };

  export type TransactionTypeMinAggregateInputType = {
    transaction_type_id?: true;
    transaction_type?: true;
  };

  export type TransactionTypeMaxAggregateInputType = {
    transaction_type_id?: true;
    transaction_type?: true;
  };

  export type TransactionTypeCountAggregateInputType = {
    transaction_type_id?: true;
    transaction_type?: true;
    _all?: true;
  };

  export type TransactionTypeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TransactionType to aggregate.
     */
    where?: TransactionTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?:
      | TransactionTypeOrderByWithRelationInput
      | TransactionTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TransactionTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TransactionTypes
     **/
    _count?: true | TransactionTypeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TransactionTypeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TransactionTypeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TransactionTypeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TransactionTypeMaxAggregateInputType;
  };

  export type GetTransactionTypeAggregateType<
    T extends TransactionTypeAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateTransactionType]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionType[P]>
      : GetScalarType<T[P], AggregateTransactionType[P]>;
  };

  export type TransactionTypeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionTypeWhereInput;
    orderBy?:
      | TransactionTypeOrderByWithAggregationInput
      | TransactionTypeOrderByWithAggregationInput[];
    by: TransactionTypeScalarFieldEnum[] | TransactionTypeScalarFieldEnum;
    having?: TransactionTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionTypeCountAggregateInputType | true;
    _avg?: TransactionTypeAvgAggregateInputType;
    _sum?: TransactionTypeSumAggregateInputType;
    _min?: TransactionTypeMinAggregateInputType;
    _max?: TransactionTypeMaxAggregateInputType;
  };

  export type TransactionTypeGroupByOutputType = {
    transaction_type_id: number;
    transaction_type: string;
    _count: TransactionTypeCountAggregateOutputType | null;
    _avg: TransactionTypeAvgAggregateOutputType | null;
    _sum: TransactionTypeSumAggregateOutputType | null;
    _min: TransactionTypeMinAggregateOutputType | null;
    _max: TransactionTypeMaxAggregateOutputType | null;
  };

  type GetTransactionTypeGroupByPayload<T extends TransactionTypeGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TransactionTypeGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof TransactionTypeGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionTypeGroupByOutputType[P]>;
        }
      >
    >;

  export type TransactionTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      transaction_type_id?: boolean;
      transaction_type?: boolean;
      transation?: boolean | TransactionType$transationArgs<ExtArgs>;
      _count?: boolean | TransactionTypeCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transactionType']
  >;

  export type TransactionTypeSelectScalar = {
    transaction_type_id?: boolean;
    transaction_type?: boolean;
  };

  export type TransactionTypeInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transation?: boolean | TransactionType$transationArgs<ExtArgs>;
    _count?: boolean | TransactionTypeCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $TransactionTypePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'TransactionType';
    objects: {
      transation: Prisma.$TransactionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        transaction_type_id: number;
        transaction_type: string;
      },
      ExtArgs['result']['transactionType']
    >;
    composites: {};
  };

  type TransactionTypeGetPayload<
    S extends boolean | null | undefined | TransactionTypeDefaultArgs,
  > = $Result.GetResult<Prisma.$TransactionTypePayload, S>;

  type TransactionTypeCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TransactionTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: TransactionTypeCountAggregateInputType | true;
  };

  export interface TransactionTypeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['TransactionType'];
      meta: { name: 'TransactionType' };
    };
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
      args: SelectSubset<T, TransactionTypeFindUniqueArgs<ExtArgs>>,
    ): Prisma__TransactionTypeClient<
      $Result.GetResult<
        Prisma.$TransactionTypePayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, TransactionTypeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TransactionTypeClient<
      $Result.GetResult<
        Prisma.$TransactionTypePayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, TransactionTypeFindFirstArgs<ExtArgs>>,
    ): Prisma__TransactionTypeClient<
      $Result.GetResult<
        Prisma.$TransactionTypePayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, TransactionTypeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TransactionTypeClient<
      $Result.GetResult<
        Prisma.$TransactionTypePayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, TransactionTypeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'findMany'>
    >;

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
      args: SelectSubset<T, TransactionTypeCreateArgs<ExtArgs>>,
    ): Prisma__TransactionTypeClient<
      $Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, TransactionTypeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, TransactionTypeDeleteArgs<ExtArgs>>,
    ): Prisma__TransactionTypeClient<
      $Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

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
      args: SelectSubset<T, TransactionTypeUpdateArgs<ExtArgs>>,
    ): Prisma__TransactionTypeClient<
      $Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, TransactionTypeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, TransactionTypeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, TransactionTypeUpsertArgs<ExtArgs>>,
    ): Prisma__TransactionTypeClient<
      $Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

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
    >;

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
    aggregate<T extends TransactionTypeAggregateArgs>(
      args: Subset<T, TransactionTypeAggregateArgs>,
    ): Prisma.PrismaPromise<GetTransactionTypeAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TransactionTypeGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetTransactionTypeGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__TransactionTypeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    transation<T extends TransactionType$transationArgs<ExtArgs> = {}>(
      args?: Subset<T, TransactionType$transationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'>
      | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
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
    readonly transaction_type_id: FieldRef<'TransactionType', 'Int'>;
    readonly transaction_type: FieldRef<'TransactionType', 'String'>;
  }

  // Custom InputTypes

  /**
   * TransactionType findUnique
   */
  export type TransactionTypeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionType to fetch.
     */
    where: TransactionTypeWhereUniqueInput;
  };

  /**
   * TransactionType findUniqueOrThrow
   */
  export type TransactionTypeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionType to fetch.
     */
    where: TransactionTypeWhereUniqueInput;
  };

  /**
   * TransactionType findFirst
   */
  export type TransactionTypeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionType to fetch.
     */
    where?: TransactionTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?:
      | TransactionTypeOrderByWithRelationInput
      | TransactionTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TransactionTypes.
     */
    distinct?:
      | TransactionTypeScalarFieldEnum
      | TransactionTypeScalarFieldEnum[];
  };

  /**
   * TransactionType findFirstOrThrow
   */
  export type TransactionTypeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionType to fetch.
     */
    where?: TransactionTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?:
      | TransactionTypeOrderByWithRelationInput
      | TransactionTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TransactionTypes.
     */
    distinct?:
      | TransactionTypeScalarFieldEnum
      | TransactionTypeScalarFieldEnum[];
  };

  /**
   * TransactionType findMany
   */
  export type TransactionTypeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionTypes to fetch.
     */
    where?: TransactionTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?:
      | TransactionTypeOrderByWithRelationInput
      | TransactionTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionTypes.
     */
    skip?: number;
    distinct?:
      | TransactionTypeScalarFieldEnum
      | TransactionTypeScalarFieldEnum[];
  };

  /**
   * TransactionType create
   */
  export type TransactionTypeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null;
    /**
     * The data needed to create a TransactionType.
     */
    data: XOR<TransactionTypeCreateInput, TransactionTypeUncheckedCreateInput>;
  };

  /**
   * TransactionType createMany
   */
  export type TransactionTypeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TransactionTypes.
     */
    data: TransactionTypeCreateManyInput | TransactionTypeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TransactionType update
   */
  export type TransactionTypeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null;
    /**
     * The data needed to update a TransactionType.
     */
    data: XOR<TransactionTypeUpdateInput, TransactionTypeUncheckedUpdateInput>;
    /**
     * Choose, which TransactionType to update.
     */
    where: TransactionTypeWhereUniqueInput;
  };

  /**
   * TransactionType updateMany
   */
  export type TransactionTypeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TransactionTypes.
     */
    data: XOR<
      TransactionTypeUpdateManyMutationInput,
      TransactionTypeUncheckedUpdateManyInput
    >;
    /**
     * Filter which TransactionTypes to update
     */
    where?: TransactionTypeWhereInput;
  };

  /**
   * TransactionType upsert
   */
  export type TransactionTypeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null;
    /**
     * The filter to search for the TransactionType to update in case it exists.
     */
    where: TransactionTypeWhereUniqueInput;
    /**
     * In case the TransactionType found by the `where` argument doesn't exist, create a new TransactionType with this data.
     */
    create: XOR<
      TransactionTypeCreateInput,
      TransactionTypeUncheckedCreateInput
    >;
    /**
     * In case the TransactionType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      TransactionTypeUpdateInput,
      TransactionTypeUncheckedUpdateInput
    >;
  };

  /**
   * TransactionType delete
   */
  export type TransactionTypeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null;
    /**
     * Filter which TransactionType to delete.
     */
    where: TransactionTypeWhereUniqueInput;
  };

  /**
   * TransactionType deleteMany
   */
  export type TransactionTypeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TransactionTypes to delete
     */
    where?: TransactionTypeWhereInput;
  };

  /**
   * TransactionType.transation
   */
  export type TransactionType$transationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null;
    where?: TransactionWhereInput;
    orderBy?:
      | TransactionOrderByWithRelationInput
      | TransactionOrderByWithRelationInput[];
    cursor?: TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * TransactionType without action
   */
  export type TransactionTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionTypeInclude<ExtArgs> | null;
  };

  /**
   * Model ApproveReject
   */

  export type AggregateApproveReject = {
    _count: ApproveRejectCountAggregateOutputType | null;
    _avg: ApproveRejectAvgAggregateOutputType | null;
    _sum: ApproveRejectSumAggregateOutputType | null;
    _min: ApproveRejectMinAggregateOutputType | null;
    _max: ApproveRejectMaxAggregateOutputType | null;
  };

  export type ApproveRejectAvgAggregateOutputType = {
    approve_reject_type_id: number | null;
  };

  export type ApproveRejectSumAggregateOutputType = {
    approve_reject_type_id: number | null;
  };

  export type ApproveRejectMinAggregateOutputType = {
    approve_reject_type_id: number | null;
    type: string | null;
  };

  export type ApproveRejectMaxAggregateOutputType = {
    approve_reject_type_id: number | null;
    type: string | null;
  };

  export type ApproveRejectCountAggregateOutputType = {
    approve_reject_type_id: number;
    type: number;
    _all: number;
  };

  export type ApproveRejectAvgAggregateInputType = {
    approve_reject_type_id?: true;
  };

  export type ApproveRejectSumAggregateInputType = {
    approve_reject_type_id?: true;
  };

  export type ApproveRejectMinAggregateInputType = {
    approve_reject_type_id?: true;
    type?: true;
  };

  export type ApproveRejectMaxAggregateInputType = {
    approve_reject_type_id?: true;
    type?: true;
  };

  export type ApproveRejectCountAggregateInputType = {
    approve_reject_type_id?: true;
    type?: true;
    _all?: true;
  };

  export type ApproveRejectAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ApproveReject to aggregate.
     */
    where?: ApproveRejectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApproveRejects to fetch.
     */
    orderBy?:
      | ApproveRejectOrderByWithRelationInput
      | ApproveRejectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ApproveRejectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApproveRejects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApproveRejects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ApproveRejects
     **/
    _count?: true | ApproveRejectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ApproveRejectAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ApproveRejectSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ApproveRejectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ApproveRejectMaxAggregateInputType;
  };

  export type GetApproveRejectAggregateType<
    T extends ApproveRejectAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateApproveReject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApproveReject[P]>
      : GetScalarType<T[P], AggregateApproveReject[P]>;
  };

  export type ApproveRejectGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ApproveRejectWhereInput;
    orderBy?:
      | ApproveRejectOrderByWithAggregationInput
      | ApproveRejectOrderByWithAggregationInput[];
    by: ApproveRejectScalarFieldEnum[] | ApproveRejectScalarFieldEnum;
    having?: ApproveRejectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApproveRejectCountAggregateInputType | true;
    _avg?: ApproveRejectAvgAggregateInputType;
    _sum?: ApproveRejectSumAggregateInputType;
    _min?: ApproveRejectMinAggregateInputType;
    _max?: ApproveRejectMaxAggregateInputType;
  };

  export type ApproveRejectGroupByOutputType = {
    approve_reject_type_id: number;
    type: string;
    _count: ApproveRejectCountAggregateOutputType | null;
    _avg: ApproveRejectAvgAggregateOutputType | null;
    _sum: ApproveRejectSumAggregateOutputType | null;
    _min: ApproveRejectMinAggregateOutputType | null;
    _max: ApproveRejectMaxAggregateOutputType | null;
  };

  type GetApproveRejectGroupByPayload<T extends ApproveRejectGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ApproveRejectGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof ApproveRejectGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApproveRejectGroupByOutputType[P]>
            : GetScalarType<T[P], ApproveRejectGroupByOutputType[P]>;
        }
      >
    >;

  export type ApproveRejectSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      approve_reject_type_id?: boolean;
      type?: boolean;
    },
    ExtArgs['result']['approveReject']
  >;

  export type ApproveRejectSelectScalar = {
    approve_reject_type_id?: boolean;
    type?: boolean;
  };

  export type $ApproveRejectPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ApproveReject';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        approve_reject_type_id: number;
        type: string;
      },
      ExtArgs['result']['approveReject']
    >;
    composites: {};
  };

  type ApproveRejectGetPayload<
    S extends boolean | null | undefined | ApproveRejectDefaultArgs,
  > = $Result.GetResult<Prisma.$ApproveRejectPayload, S>;

  type ApproveRejectCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ApproveRejectFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ApproveRejectCountAggregateInputType | true;
  };

  export interface ApproveRejectDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ApproveReject'];
      meta: { name: 'ApproveReject' };
    };
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
      args: SelectSubset<T, ApproveRejectFindUniqueArgs<ExtArgs>>,
    ): Prisma__ApproveRejectClient<
      $Result.GetResult<
        Prisma.$ApproveRejectPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, ApproveRejectFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ApproveRejectClient<
      $Result.GetResult<
        Prisma.$ApproveRejectPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, ApproveRejectFindFirstArgs<ExtArgs>>,
    ): Prisma__ApproveRejectClient<
      $Result.GetResult<
        Prisma.$ApproveRejectPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

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
      args?: SelectSubset<T, ApproveRejectFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ApproveRejectClient<
      $Result.GetResult<
        Prisma.$ApproveRejectPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, ApproveRejectFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ApproveRejectPayload<ExtArgs>, T, 'findMany'>
    >;

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
      args: SelectSubset<T, ApproveRejectCreateArgs<ExtArgs>>,
    ): Prisma__ApproveRejectClient<
      $Result.GetResult<Prisma.$ApproveRejectPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, ApproveRejectCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, ApproveRejectDeleteArgs<ExtArgs>>,
    ): Prisma__ApproveRejectClient<
      $Result.GetResult<Prisma.$ApproveRejectPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

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
      args: SelectSubset<T, ApproveRejectUpdateArgs<ExtArgs>>,
    ): Prisma__ApproveRejectClient<
      $Result.GetResult<Prisma.$ApproveRejectPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

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
      args?: SelectSubset<T, ApproveRejectDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, ApproveRejectUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
      args: SelectSubset<T, ApproveRejectUpsertArgs<ExtArgs>>,
    ): Prisma__ApproveRejectClient<
      $Result.GetResult<Prisma.$ApproveRejectPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

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
    >;

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
    aggregate<T extends ApproveRejectAggregateArgs>(
      args: Subset<T, ApproveRejectAggregateArgs>,
    ): Prisma.PrismaPromise<GetApproveRejectAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ApproveRejectGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetApproveRejectGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__ApproveRejectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
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
    readonly approve_reject_type_id: FieldRef<'ApproveReject', 'Int'>;
    readonly type: FieldRef<'ApproveReject', 'String'>;
  }

  // Custom InputTypes

  /**
   * ApproveReject findUnique
   */
  export type ApproveRejectFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null;
    /**
     * Filter, which ApproveReject to fetch.
     */
    where: ApproveRejectWhereUniqueInput;
  };

  /**
   * ApproveReject findUniqueOrThrow
   */
  export type ApproveRejectFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null;
    /**
     * Filter, which ApproveReject to fetch.
     */
    where: ApproveRejectWhereUniqueInput;
  };

  /**
   * ApproveReject findFirst
   */
  export type ApproveRejectFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null;
    /**
     * Filter, which ApproveReject to fetch.
     */
    where?: ApproveRejectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApproveRejects to fetch.
     */
    orderBy?:
      | ApproveRejectOrderByWithRelationInput
      | ApproveRejectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ApproveRejects.
     */
    cursor?: ApproveRejectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApproveRejects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApproveRejects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApproveRejects.
     */
    distinct?: ApproveRejectScalarFieldEnum | ApproveRejectScalarFieldEnum[];
  };

  /**
   * ApproveReject findFirstOrThrow
   */
  export type ApproveRejectFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null;
    /**
     * Filter, which ApproveReject to fetch.
     */
    where?: ApproveRejectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApproveRejects to fetch.
     */
    orderBy?:
      | ApproveRejectOrderByWithRelationInput
      | ApproveRejectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ApproveRejects.
     */
    cursor?: ApproveRejectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApproveRejects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApproveRejects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApproveRejects.
     */
    distinct?: ApproveRejectScalarFieldEnum | ApproveRejectScalarFieldEnum[];
  };

  /**
   * ApproveReject findMany
   */
  export type ApproveRejectFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null;
    /**
     * Filter, which ApproveRejects to fetch.
     */
    where?: ApproveRejectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApproveRejects to fetch.
     */
    orderBy?:
      | ApproveRejectOrderByWithRelationInput
      | ApproveRejectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ApproveRejects.
     */
    cursor?: ApproveRejectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApproveRejects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApproveRejects.
     */
    skip?: number;
    distinct?: ApproveRejectScalarFieldEnum | ApproveRejectScalarFieldEnum[];
  };

  /**
   * ApproveReject create
   */
  export type ApproveRejectCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null;
    /**
     * The data needed to create a ApproveReject.
     */
    data: XOR<ApproveRejectCreateInput, ApproveRejectUncheckedCreateInput>;
  };

  /**
   * ApproveReject createMany
   */
  export type ApproveRejectCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ApproveRejects.
     */
    data: ApproveRejectCreateManyInput | ApproveRejectCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ApproveReject update
   */
  export type ApproveRejectUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null;
    /**
     * The data needed to update a ApproveReject.
     */
    data: XOR<ApproveRejectUpdateInput, ApproveRejectUncheckedUpdateInput>;
    /**
     * Choose, which ApproveReject to update.
     */
    where: ApproveRejectWhereUniqueInput;
  };

  /**
   * ApproveReject updateMany
   */
  export type ApproveRejectUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ApproveRejects.
     */
    data: XOR<
      ApproveRejectUpdateManyMutationInput,
      ApproveRejectUncheckedUpdateManyInput
    >;
    /**
     * Filter which ApproveRejects to update
     */
    where?: ApproveRejectWhereInput;
  };

  /**
   * ApproveReject upsert
   */
  export type ApproveRejectUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null;
    /**
     * The filter to search for the ApproveReject to update in case it exists.
     */
    where: ApproveRejectWhereUniqueInput;
    /**
     * In case the ApproveReject found by the `where` argument doesn't exist, create a new ApproveReject with this data.
     */
    create: XOR<ApproveRejectCreateInput, ApproveRejectUncheckedCreateInput>;
    /**
     * In case the ApproveReject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApproveRejectUpdateInput, ApproveRejectUncheckedUpdateInput>;
  };

  /**
   * ApproveReject delete
   */
  export type ApproveRejectDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null;
    /**
     * Filter which ApproveReject to delete.
     */
    where: ApproveRejectWhereUniqueInput;
  };

  /**
   * ApproveReject deleteMany
   */
  export type ApproveRejectDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ApproveRejects to delete
     */
    where?: ApproveRejectWhereInput;
  };

  /**
   * ApproveReject without action
   */
  export type ApproveRejectDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApproveReject
     */
    select?: ApproveRejectSelect<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UsersScalarFieldEnum: {
    user_internal_id: 'user_internal_id';
    phone_number: 'phone_number';
    user_name: 'user_name';
    password: 'password';
    otp_code: 'otp_code';
    role_id: 'role_id';
    sms_send_time: 'sms_send_time';
    is_verify: 'is_verify';
    account_status: 'account_status';
    delete_status: 'delete_status';
    register_date: 'register_date';
    updated_date: 'updated_date';
    deleted_date: 'deleted_date';
  };

  export type UsersScalarFieldEnum =
    (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];

  export const RolesScalarFieldEnum: {
    role_id: 'role_id';
    name: 'name';
  };

  export type RolesScalarFieldEnum =
    (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];

  export const UserWithdrawAccountScalarFieldEnum: {
    user_withdraw_account_id: 'user_withdraw_account_id';
    user_internal_id: 'user_internal_id';
    account_type: 'account_type';
    account_name: 'account_name';
    account_id: 'account_id';
    delete_status: 'delete_status';
    register_date: 'register_date';
    updated_date: 'updated_date';
    deleted_date: 'deleted_date';
  };

  export type UserWithdrawAccountScalarFieldEnum =
    (typeof UserWithdrawAccountScalarFieldEnum)[keyof typeof UserWithdrawAccountScalarFieldEnum];

  export const AdminReceiverAccountScalarFieldEnum: {
    admin_receiver_account_id: 'admin_receiver_account_id';
    admin_account_type: 'admin_account_type';
    admin_account_name: 'admin_account_name';
    admin_account_id: 'admin_account_id';
    status: 'status';
    delete_status: 'delete_status';
    register_date: 'register_date';
    updated_date: 'updated_date';
    deleted_date: 'deleted_date';
  };

  export type AdminReceiverAccountScalarFieldEnum =
    (typeof AdminReceiverAccountScalarFieldEnum)[keyof typeof AdminReceiverAccountScalarFieldEnum];

  export const WalletScalarFieldEnum: {
    wallet_id: 'wallet_id';
    user_internal_id: 'user_internal_id';
    game_amount: 'game_amount';
    main_amount: 'main_amount';
    delete_status: 'delete_status';
    register_date: 'register_date';
    updated_date: 'updated_date';
    deleted_date: 'deleted_date';
  };

  export type WalletScalarFieldEnum =
    (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum];

  export const PaymentScalarFieldEnum: {
    payment_internal_id: 'payment_internal_id';
    user_internal_id: 'user_internal_id';
    admin_internal_id: 'admin_internal_id';
    payment_type: 'payment_type';
    payment_account_name: 'payment_account_name';
    payment_account: 'payment_account';
    admin_receiver_account_id: 'admin_receiver_account_id';
    amount: 'amount';
    date: 'date';
    approve_reject: 'approve_reject';
    reason_for_reject: 'reason_for_reject';
    payment_confirm_code: 'payment_confirm_code';
    delete_status: 'delete_status';
    register_date: 'register_date';
    updated_date: 'updated_date';
    deleted_date: 'deleted_date';
  };

  export type PaymentScalarFieldEnum =
    (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];

  export const WithdrawScalarFieldEnum: {
    withdraw_id: 'withdraw_id';
    user_internal_id: 'user_internal_id';
    admin_internal_id: 'admin_internal_id';
    user_withdraw_account_id: 'user_withdraw_account_id';
    amount: 'amount';
    date: 'date';
    withdraw_confirm_code: 'withdraw_confirm_code';
    is_verify: 'is_verify';
    approve_reject: 'approve_reject';
    reason_for_reject: 'reason_for_reject';
    delete_status: 'delete_status';
    register_date: 'register_date';
    updated_date: 'updated_date';
    deleted_date: 'deleted_date';
  };

  export type WithdrawScalarFieldEnum =
    (typeof WithdrawScalarFieldEnum)[keyof typeof WithdrawScalarFieldEnum];

  export const AdminScalarFieldEnum: {
    admin_internal_id: 'admin_internal_id';
    admin_id: 'admin_id';
    admin_name: 'admin_name';
    password: 'password';
    role_id: 'role_id';
    account_status: 'account_status';
    delete_status: 'delete_status';
    register_date: 'register_date';
    updated_date: 'updated_date';
    deleted_date: 'deleted_date';
  };

  export type AdminScalarFieldEnum =
    (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];

  export const AdminRolesScalarFieldEnum: {
    role_id: 'role_id';
    name: 'name';
  };

  export type AdminRolesScalarFieldEnum =
    (typeof AdminRolesScalarFieldEnum)[keyof typeof AdminRolesScalarFieldEnum];

  export const TransactionScalarFieldEnum: {
    transaction_id: 'transaction_id';
    user_internal_id: 'user_internal_id';
    amount: 'amount';
    transaction_type_id: 'transaction_type_id';
    transaction_date: 'transaction_date';
    delete_status: 'delete_status';
    register_date: 'register_date';
    updated_date: 'updated_date';
    deleted_date: 'deleted_date';
  };

  export type TransactionScalarFieldEnum =
    (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];

  export const TransactionTypeScalarFieldEnum: {
    transaction_type_id: 'transaction_type_id';
    transaction_type: 'transaction_type';
  };

  export type TransactionTypeScalarFieldEnum =
    (typeof TransactionTypeScalarFieldEnum)[keyof typeof TransactionTypeScalarFieldEnum];

  export const ApproveRejectScalarFieldEnum: {
    approve_reject_type_id: 'approve_reject_type_id';
    type: 'type';
  };

  export type ApproveRejectScalarFieldEnum =
    (typeof ApproveRejectScalarFieldEnum)[keyof typeof ApproveRejectScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal'
  >;

  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[];
    OR?: UsersWhereInput[];
    NOT?: UsersWhereInput | UsersWhereInput[];
    user_internal_id?: StringFilter<'Users'> | string;
    phone_number?: StringFilter<'Users'> | string;
    user_name?: StringNullableFilter<'Users'> | string | null;
    password?: StringNullableFilter<'Users'> | string | null;
    otp_code?: StringNullableFilter<'Users'> | string | null;
    role_id?: IntFilter<'Users'> | number;
    sms_send_time?: DateTimeNullableFilter<'Users'> | Date | string | null;
    is_verify?: IntNullableFilter<'Users'> | number | null;
    account_status?: IntNullableFilter<'Users'> | number | null;
    delete_status?: IntFilter<'Users'> | number;
    register_date?: DateTimeFilter<'Users'> | Date | string;
    updated_date?: DateTimeFilter<'Users'> | Date | string;
    deleted_date?: DateTimeNullableFilter<'Users'> | Date | string | null;
    user_role?: XOR<RolesRelationFilter, RolesWhereInput>;
    withdrawaccount?: UserWithdrawAccountListRelationFilter;
    wallet?: WalletListRelationFilter;
    payment?: PaymentListRelationFilter;
    withdraw?: WithdrawListRelationFilter;
    transation?: TransactionListRelationFilter;
  };

  export type UsersOrderByWithRelationInput = {
    user_internal_id?: SortOrder;
    phone_number?: SortOrder;
    user_name?: SortOrderInput | SortOrder;
    password?: SortOrderInput | SortOrder;
    otp_code?: SortOrderInput | SortOrder;
    role_id?: SortOrder;
    sms_send_time?: SortOrderInput | SortOrder;
    is_verify?: SortOrderInput | SortOrder;
    account_status?: SortOrderInput | SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    user_role?: RolesOrderByWithRelationInput;
    withdrawaccount?: UserWithdrawAccountOrderByRelationAggregateInput;
    wallet?: WalletOrderByRelationAggregateInput;
    payment?: PaymentOrderByRelationAggregateInput;
    withdraw?: WithdrawOrderByRelationAggregateInput;
    transation?: TransactionOrderByRelationAggregateInput;
  };

  export type UsersWhereUniqueInput = Prisma.AtLeast<
    {
      user_internal_id?: string;
      phone_number?: string;
      AND?: UsersWhereInput | UsersWhereInput[];
      OR?: UsersWhereInput[];
      NOT?: UsersWhereInput | UsersWhereInput[];
      user_name?: StringNullableFilter<'Users'> | string | null;
      password?: StringNullableFilter<'Users'> | string | null;
      otp_code?: StringNullableFilter<'Users'> | string | null;
      role_id?: IntFilter<'Users'> | number;
      sms_send_time?: DateTimeNullableFilter<'Users'> | Date | string | null;
      is_verify?: IntNullableFilter<'Users'> | number | null;
      account_status?: IntNullableFilter<'Users'> | number | null;
      delete_status?: IntFilter<'Users'> | number;
      register_date?: DateTimeFilter<'Users'> | Date | string;
      updated_date?: DateTimeFilter<'Users'> | Date | string;
      deleted_date?: DateTimeNullableFilter<'Users'> | Date | string | null;
      user_role?: XOR<RolesRelationFilter, RolesWhereInput>;
      withdrawaccount?: UserWithdrawAccountListRelationFilter;
      wallet?: WalletListRelationFilter;
      payment?: PaymentListRelationFilter;
      withdraw?: WithdrawListRelationFilter;
      transation?: TransactionListRelationFilter;
    },
    'user_internal_id' | 'phone_number'
  >;

  export type UsersOrderByWithAggregationInput = {
    user_internal_id?: SortOrder;
    phone_number?: SortOrder;
    user_name?: SortOrderInput | SortOrder;
    password?: SortOrderInput | SortOrder;
    otp_code?: SortOrderInput | SortOrder;
    role_id?: SortOrder;
    sms_send_time?: SortOrderInput | SortOrder;
    is_verify?: SortOrderInput | SortOrder;
    account_status?: SortOrderInput | SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    _count?: UsersCountOrderByAggregateInput;
    _avg?: UsersAvgOrderByAggregateInput;
    _max?: UsersMaxOrderByAggregateInput;
    _min?: UsersMinOrderByAggregateInput;
    _sum?: UsersSumOrderByAggregateInput;
  };

  export type UsersScalarWhereWithAggregatesInput = {
    AND?:
      | UsersScalarWhereWithAggregatesInput
      | UsersScalarWhereWithAggregatesInput[];
    OR?: UsersScalarWhereWithAggregatesInput[];
    NOT?:
      | UsersScalarWhereWithAggregatesInput
      | UsersScalarWhereWithAggregatesInput[];
    user_internal_id?: StringWithAggregatesFilter<'Users'> | string;
    phone_number?: StringWithAggregatesFilter<'Users'> | string;
    user_name?: StringNullableWithAggregatesFilter<'Users'> | string | null;
    password?: StringNullableWithAggregatesFilter<'Users'> | string | null;
    otp_code?: StringNullableWithAggregatesFilter<'Users'> | string | null;
    role_id?: IntWithAggregatesFilter<'Users'> | number;
    sms_send_time?:
      | DateTimeNullableWithAggregatesFilter<'Users'>
      | Date
      | string
      | null;
    is_verify?: IntNullableWithAggregatesFilter<'Users'> | number | null;
    account_status?: IntNullableWithAggregatesFilter<'Users'> | number | null;
    delete_status?: IntWithAggregatesFilter<'Users'> | number;
    register_date?: DateTimeWithAggregatesFilter<'Users'> | Date | string;
    updated_date?: DateTimeWithAggregatesFilter<'Users'> | Date | string;
    deleted_date?:
      | DateTimeNullableWithAggregatesFilter<'Users'>
      | Date
      | string
      | null;
  };

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[];
    OR?: RolesWhereInput[];
    NOT?: RolesWhereInput | RolesWhereInput[];
    role_id?: IntFilter<'Roles'> | number;
    name?: StringFilter<'Roles'> | string;
    users?: UsersListRelationFilter;
  };

  export type RolesOrderByWithRelationInput = {
    role_id?: SortOrder;
    name?: SortOrder;
    users?: UsersOrderByRelationAggregateInput;
  };

  export type RolesWhereUniqueInput = Prisma.AtLeast<
    {
      role_id?: number;
      name?: string;
      AND?: RolesWhereInput | RolesWhereInput[];
      OR?: RolesWhereInput[];
      NOT?: RolesWhereInput | RolesWhereInput[];
      users?: UsersListRelationFilter;
    },
    'role_id' | 'name'
  >;

  export type RolesOrderByWithAggregationInput = {
    role_id?: SortOrder;
    name?: SortOrder;
    _count?: RolesCountOrderByAggregateInput;
    _avg?: RolesAvgOrderByAggregateInput;
    _max?: RolesMaxOrderByAggregateInput;
    _min?: RolesMinOrderByAggregateInput;
    _sum?: RolesSumOrderByAggregateInput;
  };

  export type RolesScalarWhereWithAggregatesInput = {
    AND?:
      | RolesScalarWhereWithAggregatesInput
      | RolesScalarWhereWithAggregatesInput[];
    OR?: RolesScalarWhereWithAggregatesInput[];
    NOT?:
      | RolesScalarWhereWithAggregatesInput
      | RolesScalarWhereWithAggregatesInput[];
    role_id?: IntWithAggregatesFilter<'Roles'> | number;
    name?: StringWithAggregatesFilter<'Roles'> | string;
  };

  export type UserWithdrawAccountWhereInput = {
    AND?: UserWithdrawAccountWhereInput | UserWithdrawAccountWhereInput[];
    OR?: UserWithdrawAccountWhereInput[];
    NOT?: UserWithdrawAccountWhereInput | UserWithdrawAccountWhereInput[];
    user_withdraw_account_id?: StringFilter<'UserWithdrawAccount'> | string;
    user_internal_id?: StringFilter<'UserWithdrawAccount'> | string;
    account_type?: StringFilter<'UserWithdrawAccount'> | string;
    account_name?: StringFilter<'UserWithdrawAccount'> | string;
    account_id?: IntFilter<'UserWithdrawAccount'> | number;
    delete_status?: IntFilter<'UserWithdrawAccount'> | number;
    register_date?: DateTimeFilter<'UserWithdrawAccount'> | Date | string;
    updated_date?: DateTimeFilter<'UserWithdrawAccount'> | Date | string;
    deleted_date?:
      | DateTimeNullableFilter<'UserWithdrawAccount'>
      | Date
      | string
      | null;
    user?: XOR<UsersRelationFilter, UsersWhereInput>;
    withdraw?: WithdrawListRelationFilter;
  };

  export type UserWithdrawAccountOrderByWithRelationInput = {
    user_withdraw_account_id?: SortOrder;
    user_internal_id?: SortOrder;
    account_type?: SortOrder;
    account_name?: SortOrder;
    account_id?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    user?: UsersOrderByWithRelationInput;
    withdraw?: WithdrawOrderByRelationAggregateInput;
  };

  export type UserWithdrawAccountWhereUniqueInput = Prisma.AtLeast<
    {
      user_withdraw_account_id?: string;
      account_id?: number;
      AND?: UserWithdrawAccountWhereInput | UserWithdrawAccountWhereInput[];
      OR?: UserWithdrawAccountWhereInput[];
      NOT?: UserWithdrawAccountWhereInput | UserWithdrawAccountWhereInput[];
      user_internal_id?: StringFilter<'UserWithdrawAccount'> | string;
      account_type?: StringFilter<'UserWithdrawAccount'> | string;
      account_name?: StringFilter<'UserWithdrawAccount'> | string;
      delete_status?: IntFilter<'UserWithdrawAccount'> | number;
      register_date?: DateTimeFilter<'UserWithdrawAccount'> | Date | string;
      updated_date?: DateTimeFilter<'UserWithdrawAccount'> | Date | string;
      deleted_date?:
        | DateTimeNullableFilter<'UserWithdrawAccount'>
        | Date
        | string
        | null;
      user?: XOR<UsersRelationFilter, UsersWhereInput>;
      withdraw?: WithdrawListRelationFilter;
    },
    'user_withdraw_account_id' | 'account_id'
  >;

  export type UserWithdrawAccountOrderByWithAggregationInput = {
    user_withdraw_account_id?: SortOrder;
    user_internal_id?: SortOrder;
    account_type?: SortOrder;
    account_name?: SortOrder;
    account_id?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    _count?: UserWithdrawAccountCountOrderByAggregateInput;
    _avg?: UserWithdrawAccountAvgOrderByAggregateInput;
    _max?: UserWithdrawAccountMaxOrderByAggregateInput;
    _min?: UserWithdrawAccountMinOrderByAggregateInput;
    _sum?: UserWithdrawAccountSumOrderByAggregateInput;
  };

  export type UserWithdrawAccountScalarWhereWithAggregatesInput = {
    AND?:
      | UserWithdrawAccountScalarWhereWithAggregatesInput
      | UserWithdrawAccountScalarWhereWithAggregatesInput[];
    OR?: UserWithdrawAccountScalarWhereWithAggregatesInput[];
    NOT?:
      | UserWithdrawAccountScalarWhereWithAggregatesInput
      | UserWithdrawAccountScalarWhereWithAggregatesInput[];
    user_withdraw_account_id?:
      | StringWithAggregatesFilter<'UserWithdrawAccount'>
      | string;
    user_internal_id?:
      | StringWithAggregatesFilter<'UserWithdrawAccount'>
      | string;
    account_type?: StringWithAggregatesFilter<'UserWithdrawAccount'> | string;
    account_name?: StringWithAggregatesFilter<'UserWithdrawAccount'> | string;
    account_id?: IntWithAggregatesFilter<'UserWithdrawAccount'> | number;
    delete_status?: IntWithAggregatesFilter<'UserWithdrawAccount'> | number;
    register_date?:
      | DateTimeWithAggregatesFilter<'UserWithdrawAccount'>
      | Date
      | string;
    updated_date?:
      | DateTimeWithAggregatesFilter<'UserWithdrawAccount'>
      | Date
      | string;
    deleted_date?:
      | DateTimeNullableWithAggregatesFilter<'UserWithdrawAccount'>
      | Date
      | string
      | null;
  };

  export type AdminReceiverAccountWhereInput = {
    AND?: AdminReceiverAccountWhereInput | AdminReceiverAccountWhereInput[];
    OR?: AdminReceiverAccountWhereInput[];
    NOT?: AdminReceiverAccountWhereInput | AdminReceiverAccountWhereInput[];
    admin_receiver_account_id?: StringFilter<'AdminReceiverAccount'> | string;
    admin_account_type?: StringFilter<'AdminReceiverAccount'> | string;
    admin_account_name?: StringFilter<'AdminReceiverAccount'> | string;
    admin_account_id?: StringFilter<'AdminReceiverAccount'> | string;
    status?: IntNullableFilter<'AdminReceiverAccount'> | number | null;
    delete_status?: IntFilter<'AdminReceiverAccount'> | number;
    register_date?: DateTimeFilter<'AdminReceiverAccount'> | Date | string;
    updated_date?: DateTimeFilter<'AdminReceiverAccount'> | Date | string;
    deleted_date?:
      | DateTimeNullableFilter<'AdminReceiverAccount'>
      | Date
      | string
      | null;
    payment?: PaymentListRelationFilter;
  };

  export type AdminReceiverAccountOrderByWithRelationInput = {
    admin_receiver_account_id?: SortOrder;
    admin_account_type?: SortOrder;
    admin_account_name?: SortOrder;
    admin_account_id?: SortOrder;
    status?: SortOrderInput | SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    payment?: PaymentOrderByRelationAggregateInput;
  };

  export type AdminReceiverAccountWhereUniqueInput = Prisma.AtLeast<
    {
      admin_receiver_account_id?: string;
      admin_account_id?: string;
      AND?: AdminReceiverAccountWhereInput | AdminReceiverAccountWhereInput[];
      OR?: AdminReceiverAccountWhereInput[];
      NOT?: AdminReceiverAccountWhereInput | AdminReceiverAccountWhereInput[];
      admin_account_type?: StringFilter<'AdminReceiverAccount'> | string;
      admin_account_name?: StringFilter<'AdminReceiverAccount'> | string;
      status?: IntNullableFilter<'AdminReceiverAccount'> | number | null;
      delete_status?: IntFilter<'AdminReceiverAccount'> | number;
      register_date?: DateTimeFilter<'AdminReceiverAccount'> | Date | string;
      updated_date?: DateTimeFilter<'AdminReceiverAccount'> | Date | string;
      deleted_date?:
        | DateTimeNullableFilter<'AdminReceiverAccount'>
        | Date
        | string
        | null;
      payment?: PaymentListRelationFilter;
    },
    'admin_receiver_account_id' | 'admin_account_id'
  >;

  export type AdminReceiverAccountOrderByWithAggregationInput = {
    admin_receiver_account_id?: SortOrder;
    admin_account_type?: SortOrder;
    admin_account_name?: SortOrder;
    admin_account_id?: SortOrder;
    status?: SortOrderInput | SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    _count?: AdminReceiverAccountCountOrderByAggregateInput;
    _avg?: AdminReceiverAccountAvgOrderByAggregateInput;
    _max?: AdminReceiverAccountMaxOrderByAggregateInput;
    _min?: AdminReceiverAccountMinOrderByAggregateInput;
    _sum?: AdminReceiverAccountSumOrderByAggregateInput;
  };

  export type AdminReceiverAccountScalarWhereWithAggregatesInput = {
    AND?:
      | AdminReceiverAccountScalarWhereWithAggregatesInput
      | AdminReceiverAccountScalarWhereWithAggregatesInput[];
    OR?: AdminReceiverAccountScalarWhereWithAggregatesInput[];
    NOT?:
      | AdminReceiverAccountScalarWhereWithAggregatesInput
      | AdminReceiverAccountScalarWhereWithAggregatesInput[];
    admin_receiver_account_id?:
      | StringWithAggregatesFilter<'AdminReceiverAccount'>
      | string;
    admin_account_type?:
      | StringWithAggregatesFilter<'AdminReceiverAccount'>
      | string;
    admin_account_name?:
      | StringWithAggregatesFilter<'AdminReceiverAccount'>
      | string;
    admin_account_id?:
      | StringWithAggregatesFilter<'AdminReceiverAccount'>
      | string;
    status?:
      | IntNullableWithAggregatesFilter<'AdminReceiverAccount'>
      | number
      | null;
    delete_status?: IntWithAggregatesFilter<'AdminReceiverAccount'> | number;
    register_date?:
      | DateTimeWithAggregatesFilter<'AdminReceiverAccount'>
      | Date
      | string;
    updated_date?:
      | DateTimeWithAggregatesFilter<'AdminReceiverAccount'>
      | Date
      | string;
    deleted_date?:
      | DateTimeNullableWithAggregatesFilter<'AdminReceiverAccount'>
      | Date
      | string
      | null;
  };

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[];
    OR?: WalletWhereInput[];
    NOT?: WalletWhereInput | WalletWhereInput[];
    wallet_id?: StringFilter<'Wallet'> | string;
    user_internal_id?: StringFilter<'Wallet'> | string;
    game_amount?:
      | DecimalNullableFilter<'Wallet'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    main_amount?:
      | DecimalNullableFilter<'Wallet'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    delete_status?: IntFilter<'Wallet'> | number;
    register_date?: DateTimeFilter<'Wallet'> | Date | string;
    updated_date?: DateTimeFilter<'Wallet'> | Date | string;
    deleted_date?: DateTimeNullableFilter<'Wallet'> | Date | string | null;
    user?: XOR<UsersRelationFilter, UsersWhereInput>;
  };

  export type WalletOrderByWithRelationInput = {
    wallet_id?: SortOrder;
    user_internal_id?: SortOrder;
    game_amount?: SortOrderInput | SortOrder;
    main_amount?: SortOrderInput | SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    user?: UsersOrderByWithRelationInput;
  };

  export type WalletWhereUniqueInput = Prisma.AtLeast<
    {
      wallet_id?: string;
      user_internal_id?: string;
      AND?: WalletWhereInput | WalletWhereInput[];
      OR?: WalletWhereInput[];
      NOT?: WalletWhereInput | WalletWhereInput[];
      game_amount?:
        | DecimalNullableFilter<'Wallet'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      main_amount?:
        | DecimalNullableFilter<'Wallet'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      delete_status?: IntFilter<'Wallet'> | number;
      register_date?: DateTimeFilter<'Wallet'> | Date | string;
      updated_date?: DateTimeFilter<'Wallet'> | Date | string;
      deleted_date?: DateTimeNullableFilter<'Wallet'> | Date | string | null;
      user?: XOR<UsersRelationFilter, UsersWhereInput>;
    },
    'wallet_id' | 'user_internal_id'
  >;

  export type WalletOrderByWithAggregationInput = {
    wallet_id?: SortOrder;
    user_internal_id?: SortOrder;
    game_amount?: SortOrderInput | SortOrder;
    main_amount?: SortOrderInput | SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    _count?: WalletCountOrderByAggregateInput;
    _avg?: WalletAvgOrderByAggregateInput;
    _max?: WalletMaxOrderByAggregateInput;
    _min?: WalletMinOrderByAggregateInput;
    _sum?: WalletSumOrderByAggregateInput;
  };

  export type WalletScalarWhereWithAggregatesInput = {
    AND?:
      | WalletScalarWhereWithAggregatesInput
      | WalletScalarWhereWithAggregatesInput[];
    OR?: WalletScalarWhereWithAggregatesInput[];
    NOT?:
      | WalletScalarWhereWithAggregatesInput
      | WalletScalarWhereWithAggregatesInput[];
    wallet_id?: StringWithAggregatesFilter<'Wallet'> | string;
    user_internal_id?: StringWithAggregatesFilter<'Wallet'> | string;
    game_amount?:
      | DecimalNullableWithAggregatesFilter<'Wallet'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    main_amount?:
      | DecimalNullableWithAggregatesFilter<'Wallet'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    delete_status?: IntWithAggregatesFilter<'Wallet'> | number;
    register_date?: DateTimeWithAggregatesFilter<'Wallet'> | Date | string;
    updated_date?: DateTimeWithAggregatesFilter<'Wallet'> | Date | string;
    deleted_date?:
      | DateTimeNullableWithAggregatesFilter<'Wallet'>
      | Date
      | string
      | null;
  };

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[];
    OR?: PaymentWhereInput[];
    NOT?: PaymentWhereInput | PaymentWhereInput[];
    payment_internal_id?: StringFilter<'Payment'> | string;
    user_internal_id?: StringFilter<'Payment'> | string;
    admin_internal_id?: StringNullableFilter<'Payment'> | string | null;
    payment_type?: StringFilter<'Payment'> | string;
    payment_account_name?: StringFilter<'Payment'> | string;
    payment_account?: StringFilter<'Payment'> | string;
    admin_receiver_account_id?: StringNullableFilter<'Payment'> | string | null;
    amount?:
      | DecimalFilter<'Payment'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFilter<'Payment'> | Date | string;
    approve_reject?: IntFilter<'Payment'> | number;
    reason_for_reject?: StringNullableFilter<'Payment'> | string | null;
    payment_confirm_code?: IntFilter<'Payment'> | number;
    delete_status?: IntFilter<'Payment'> | number;
    register_date?: DateTimeFilter<'Payment'> | Date | string;
    updated_date?: DateTimeFilter<'Payment'> | Date | string;
    deleted_date?: DateTimeNullableFilter<'Payment'> | Date | string | null;
    user?: XOR<UsersRelationFilter, UsersWhereInput>;
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null;
    admin_receiver_account?: XOR<
      AdminReceiverAccountNullableRelationFilter,
      AdminReceiverAccountWhereInput
    > | null;
  };

  export type PaymentOrderByWithRelationInput = {
    payment_internal_id?: SortOrder;
    user_internal_id?: SortOrder;
    admin_internal_id?: SortOrderInput | SortOrder;
    payment_type?: SortOrder;
    payment_account_name?: SortOrder;
    payment_account?: SortOrder;
    admin_receiver_account_id?: SortOrderInput | SortOrder;
    amount?: SortOrder;
    date?: SortOrder;
    approve_reject?: SortOrder;
    reason_for_reject?: SortOrderInput | SortOrder;
    payment_confirm_code?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    user?: UsersOrderByWithRelationInput;
    admin?: AdminOrderByWithRelationInput;
    admin_receiver_account?: AdminReceiverAccountOrderByWithRelationInput;
  };

  export type PaymentWhereUniqueInput = Prisma.AtLeast<
    {
      payment_internal_id?: string;
      AND?: PaymentWhereInput | PaymentWhereInput[];
      OR?: PaymentWhereInput[];
      NOT?: PaymentWhereInput | PaymentWhereInput[];
      user_internal_id?: StringFilter<'Payment'> | string;
      admin_internal_id?: StringNullableFilter<'Payment'> | string | null;
      payment_type?: StringFilter<'Payment'> | string;
      payment_account_name?: StringFilter<'Payment'> | string;
      payment_account?: StringFilter<'Payment'> | string;
      admin_receiver_account_id?:
        | StringNullableFilter<'Payment'>
        | string
        | null;
      amount?:
        | DecimalFilter<'Payment'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      date?: DateTimeFilter<'Payment'> | Date | string;
      approve_reject?: IntFilter<'Payment'> | number;
      reason_for_reject?: StringNullableFilter<'Payment'> | string | null;
      payment_confirm_code?: IntFilter<'Payment'> | number;
      delete_status?: IntFilter<'Payment'> | number;
      register_date?: DateTimeFilter<'Payment'> | Date | string;
      updated_date?: DateTimeFilter<'Payment'> | Date | string;
      deleted_date?: DateTimeNullableFilter<'Payment'> | Date | string | null;
      user?: XOR<UsersRelationFilter, UsersWhereInput>;
      admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null;
      admin_receiver_account?: XOR<
        AdminReceiverAccountNullableRelationFilter,
        AdminReceiverAccountWhereInput
      > | null;
    },
    'payment_internal_id'
  >;

  export type PaymentOrderByWithAggregationInput = {
    payment_internal_id?: SortOrder;
    user_internal_id?: SortOrder;
    admin_internal_id?: SortOrderInput | SortOrder;
    payment_type?: SortOrder;
    payment_account_name?: SortOrder;
    payment_account?: SortOrder;
    admin_receiver_account_id?: SortOrderInput | SortOrder;
    amount?: SortOrder;
    date?: SortOrder;
    approve_reject?: SortOrder;
    reason_for_reject?: SortOrderInput | SortOrder;
    payment_confirm_code?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    _count?: PaymentCountOrderByAggregateInput;
    _avg?: PaymentAvgOrderByAggregateInput;
    _max?: PaymentMaxOrderByAggregateInput;
    _min?: PaymentMinOrderByAggregateInput;
    _sum?: PaymentSumOrderByAggregateInput;
  };

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?:
      | PaymentScalarWhereWithAggregatesInput
      | PaymentScalarWhereWithAggregatesInput[];
    OR?: PaymentScalarWhereWithAggregatesInput[];
    NOT?:
      | PaymentScalarWhereWithAggregatesInput
      | PaymentScalarWhereWithAggregatesInput[];
    payment_internal_id?: StringWithAggregatesFilter<'Payment'> | string;
    user_internal_id?: StringWithAggregatesFilter<'Payment'> | string;
    admin_internal_id?:
      | StringNullableWithAggregatesFilter<'Payment'>
      | string
      | null;
    payment_type?: StringWithAggregatesFilter<'Payment'> | string;
    payment_account_name?: StringWithAggregatesFilter<'Payment'> | string;
    payment_account?: StringWithAggregatesFilter<'Payment'> | string;
    admin_receiver_account_id?:
      | StringNullableWithAggregatesFilter<'Payment'>
      | string
      | null;
    amount?:
      | DecimalWithAggregatesFilter<'Payment'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeWithAggregatesFilter<'Payment'> | Date | string;
    approve_reject?: IntWithAggregatesFilter<'Payment'> | number;
    reason_for_reject?:
      | StringNullableWithAggregatesFilter<'Payment'>
      | string
      | null;
    payment_confirm_code?: IntWithAggregatesFilter<'Payment'> | number;
    delete_status?: IntWithAggregatesFilter<'Payment'> | number;
    register_date?: DateTimeWithAggregatesFilter<'Payment'> | Date | string;
    updated_date?: DateTimeWithAggregatesFilter<'Payment'> | Date | string;
    deleted_date?:
      | DateTimeNullableWithAggregatesFilter<'Payment'>
      | Date
      | string
      | null;
  };

  export type WithdrawWhereInput = {
    AND?: WithdrawWhereInput | WithdrawWhereInput[];
    OR?: WithdrawWhereInput[];
    NOT?: WithdrawWhereInput | WithdrawWhereInput[];
    withdraw_id?: StringFilter<'Withdraw'> | string;
    user_internal_id?: StringFilter<'Withdraw'> | string;
    admin_internal_id?: StringNullableFilter<'Withdraw'> | string | null;
    user_withdraw_account_id?: StringFilter<'Withdraw'> | string;
    amount?:
      | DecimalFilter<'Withdraw'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFilter<'Withdraw'> | Date | string;
    withdraw_confirm_code?: StringNullableFilter<'Withdraw'> | string | null;
    is_verify?: IntNullableFilter<'Withdraw'> | number | null;
    approve_reject?: IntFilter<'Withdraw'> | number;
    reason_for_reject?: StringNullableFilter<'Withdraw'> | string | null;
    delete_status?: IntFilter<'Withdraw'> | number;
    register_date?: DateTimeFilter<'Withdraw'> | Date | string;
    updated_date?: DateTimeFilter<'Withdraw'> | Date | string;
    deleted_date?: DateTimeNullableFilter<'Withdraw'> | Date | string | null;
    user?: XOR<UsersRelationFilter, UsersWhereInput>;
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null;
    withdrawaccount?: XOR<
      UserWithdrawAccountRelationFilter,
      UserWithdrawAccountWhereInput
    >;
  };

  export type WithdrawOrderByWithRelationInput = {
    withdraw_id?: SortOrder;
    user_internal_id?: SortOrder;
    admin_internal_id?: SortOrderInput | SortOrder;
    user_withdraw_account_id?: SortOrder;
    amount?: SortOrder;
    date?: SortOrder;
    withdraw_confirm_code?: SortOrderInput | SortOrder;
    is_verify?: SortOrderInput | SortOrder;
    approve_reject?: SortOrder;
    reason_for_reject?: SortOrderInput | SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    user?: UsersOrderByWithRelationInput;
    admin?: AdminOrderByWithRelationInput;
    withdrawaccount?: UserWithdrawAccountOrderByWithRelationInput;
  };

  export type WithdrawWhereUniqueInput = Prisma.AtLeast<
    {
      withdraw_id?: string;
      AND?: WithdrawWhereInput | WithdrawWhereInput[];
      OR?: WithdrawWhereInput[];
      NOT?: WithdrawWhereInput | WithdrawWhereInput[];
      user_internal_id?: StringFilter<'Withdraw'> | string;
      admin_internal_id?: StringNullableFilter<'Withdraw'> | string | null;
      user_withdraw_account_id?: StringFilter<'Withdraw'> | string;
      amount?:
        | DecimalFilter<'Withdraw'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      date?: DateTimeFilter<'Withdraw'> | Date | string;
      withdraw_confirm_code?: StringNullableFilter<'Withdraw'> | string | null;
      is_verify?: IntNullableFilter<'Withdraw'> | number | null;
      approve_reject?: IntFilter<'Withdraw'> | number;
      reason_for_reject?: StringNullableFilter<'Withdraw'> | string | null;
      delete_status?: IntFilter<'Withdraw'> | number;
      register_date?: DateTimeFilter<'Withdraw'> | Date | string;
      updated_date?: DateTimeFilter<'Withdraw'> | Date | string;
      deleted_date?: DateTimeNullableFilter<'Withdraw'> | Date | string | null;
      user?: XOR<UsersRelationFilter, UsersWhereInput>;
      admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null;
      withdrawaccount?: XOR<
        UserWithdrawAccountRelationFilter,
        UserWithdrawAccountWhereInput
      >;
    },
    'withdraw_id'
  >;

  export type WithdrawOrderByWithAggregationInput = {
    withdraw_id?: SortOrder;
    user_internal_id?: SortOrder;
    admin_internal_id?: SortOrderInput | SortOrder;
    user_withdraw_account_id?: SortOrder;
    amount?: SortOrder;
    date?: SortOrder;
    withdraw_confirm_code?: SortOrderInput | SortOrder;
    is_verify?: SortOrderInput | SortOrder;
    approve_reject?: SortOrder;
    reason_for_reject?: SortOrderInput | SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    _count?: WithdrawCountOrderByAggregateInput;
    _avg?: WithdrawAvgOrderByAggregateInput;
    _max?: WithdrawMaxOrderByAggregateInput;
    _min?: WithdrawMinOrderByAggregateInput;
    _sum?: WithdrawSumOrderByAggregateInput;
  };

  export type WithdrawScalarWhereWithAggregatesInput = {
    AND?:
      | WithdrawScalarWhereWithAggregatesInput
      | WithdrawScalarWhereWithAggregatesInput[];
    OR?: WithdrawScalarWhereWithAggregatesInput[];
    NOT?:
      | WithdrawScalarWhereWithAggregatesInput
      | WithdrawScalarWhereWithAggregatesInput[];
    withdraw_id?: StringWithAggregatesFilter<'Withdraw'> | string;
    user_internal_id?: StringWithAggregatesFilter<'Withdraw'> | string;
    admin_internal_id?:
      | StringNullableWithAggregatesFilter<'Withdraw'>
      | string
      | null;
    user_withdraw_account_id?: StringWithAggregatesFilter<'Withdraw'> | string;
    amount?:
      | DecimalWithAggregatesFilter<'Withdraw'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeWithAggregatesFilter<'Withdraw'> | Date | string;
    withdraw_confirm_code?:
      | StringNullableWithAggregatesFilter<'Withdraw'>
      | string
      | null;
    is_verify?: IntNullableWithAggregatesFilter<'Withdraw'> | number | null;
    approve_reject?: IntWithAggregatesFilter<'Withdraw'> | number;
    reason_for_reject?:
      | StringNullableWithAggregatesFilter<'Withdraw'>
      | string
      | null;
    delete_status?: IntWithAggregatesFilter<'Withdraw'> | number;
    register_date?: DateTimeWithAggregatesFilter<'Withdraw'> | Date | string;
    updated_date?: DateTimeWithAggregatesFilter<'Withdraw'> | Date | string;
    deleted_date?:
      | DateTimeNullableWithAggregatesFilter<'Withdraw'>
      | Date
      | string
      | null;
  };

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[];
    OR?: AdminWhereInput[];
    NOT?: AdminWhereInput | AdminWhereInput[];
    admin_internal_id?: StringFilter<'Admin'> | string;
    admin_id?: StringFilter<'Admin'> | string;
    admin_name?: StringNullableFilter<'Admin'> | string | null;
    password?: StringNullableFilter<'Admin'> | string | null;
    role_id?: IntFilter<'Admin'> | number;
    account_status?: StringNullableFilter<'Admin'> | string | null;
    delete_status?: IntNullableFilter<'Admin'> | number | null;
    register_date?: DateTimeFilter<'Admin'> | Date | string;
    updated_date?: DateTimeFilter<'Admin'> | Date | string;
    deleted_date?: DateTimeNullableFilter<'Admin'> | Date | string | null;
    admin_role?: XOR<AdminRolesRelationFilter, AdminRolesWhereInput>;
    payment?: PaymentListRelationFilter;
    withdraw?: WithdrawListRelationFilter;
  };

  export type AdminOrderByWithRelationInput = {
    admin_internal_id?: SortOrder;
    admin_id?: SortOrder;
    admin_name?: SortOrderInput | SortOrder;
    password?: SortOrderInput | SortOrder;
    role_id?: SortOrder;
    account_status?: SortOrderInput | SortOrder;
    delete_status?: SortOrderInput | SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    admin_role?: AdminRolesOrderByWithRelationInput;
    payment?: PaymentOrderByRelationAggregateInput;
    withdraw?: WithdrawOrderByRelationAggregateInput;
  };

  export type AdminWhereUniqueInput = Prisma.AtLeast<
    {
      admin_internal_id?: string;
      admin_id?: string;
      AND?: AdminWhereInput | AdminWhereInput[];
      OR?: AdminWhereInput[];
      NOT?: AdminWhereInput | AdminWhereInput[];
      admin_name?: StringNullableFilter<'Admin'> | string | null;
      password?: StringNullableFilter<'Admin'> | string | null;
      role_id?: IntFilter<'Admin'> | number;
      account_status?: StringNullableFilter<'Admin'> | string | null;
      delete_status?: IntNullableFilter<'Admin'> | number | null;
      register_date?: DateTimeFilter<'Admin'> | Date | string;
      updated_date?: DateTimeFilter<'Admin'> | Date | string;
      deleted_date?: DateTimeNullableFilter<'Admin'> | Date | string | null;
      admin_role?: XOR<AdminRolesRelationFilter, AdminRolesWhereInput>;
      payment?: PaymentListRelationFilter;
      withdraw?: WithdrawListRelationFilter;
    },
    'admin_internal_id' | 'admin_id'
  >;

  export type AdminOrderByWithAggregationInput = {
    admin_internal_id?: SortOrder;
    admin_id?: SortOrder;
    admin_name?: SortOrderInput | SortOrder;
    password?: SortOrderInput | SortOrder;
    role_id?: SortOrder;
    account_status?: SortOrderInput | SortOrder;
    delete_status?: SortOrderInput | SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    _count?: AdminCountOrderByAggregateInput;
    _avg?: AdminAvgOrderByAggregateInput;
    _max?: AdminMaxOrderByAggregateInput;
    _min?: AdminMinOrderByAggregateInput;
    _sum?: AdminSumOrderByAggregateInput;
  };

  export type AdminScalarWhereWithAggregatesInput = {
    AND?:
      | AdminScalarWhereWithAggregatesInput
      | AdminScalarWhereWithAggregatesInput[];
    OR?: AdminScalarWhereWithAggregatesInput[];
    NOT?:
      | AdminScalarWhereWithAggregatesInput
      | AdminScalarWhereWithAggregatesInput[];
    admin_internal_id?: StringWithAggregatesFilter<'Admin'> | string;
    admin_id?: StringWithAggregatesFilter<'Admin'> | string;
    admin_name?: StringNullableWithAggregatesFilter<'Admin'> | string | null;
    password?: StringNullableWithAggregatesFilter<'Admin'> | string | null;
    role_id?: IntWithAggregatesFilter<'Admin'> | number;
    account_status?:
      | StringNullableWithAggregatesFilter<'Admin'>
      | string
      | null;
    delete_status?: IntNullableWithAggregatesFilter<'Admin'> | number | null;
    register_date?: DateTimeWithAggregatesFilter<'Admin'> | Date | string;
    updated_date?: DateTimeWithAggregatesFilter<'Admin'> | Date | string;
    deleted_date?:
      | DateTimeNullableWithAggregatesFilter<'Admin'>
      | Date
      | string
      | null;
  };

  export type AdminRolesWhereInput = {
    AND?: AdminRolesWhereInput | AdminRolesWhereInput[];
    OR?: AdminRolesWhereInput[];
    NOT?: AdminRolesWhereInput | AdminRolesWhereInput[];
    role_id?: IntFilter<'AdminRoles'> | number;
    name?: StringFilter<'AdminRoles'> | string;
    admins?: AdminListRelationFilter;
  };

  export type AdminRolesOrderByWithRelationInput = {
    role_id?: SortOrder;
    name?: SortOrder;
    admins?: AdminOrderByRelationAggregateInput;
  };

  export type AdminRolesWhereUniqueInput = Prisma.AtLeast<
    {
      role_id?: number;
      name?: string;
      AND?: AdminRolesWhereInput | AdminRolesWhereInput[];
      OR?: AdminRolesWhereInput[];
      NOT?: AdminRolesWhereInput | AdminRolesWhereInput[];
      admins?: AdminListRelationFilter;
    },
    'role_id' | 'name'
  >;

  export type AdminRolesOrderByWithAggregationInput = {
    role_id?: SortOrder;
    name?: SortOrder;
    _count?: AdminRolesCountOrderByAggregateInput;
    _avg?: AdminRolesAvgOrderByAggregateInput;
    _max?: AdminRolesMaxOrderByAggregateInput;
    _min?: AdminRolesMinOrderByAggregateInput;
    _sum?: AdminRolesSumOrderByAggregateInput;
  };

  export type AdminRolesScalarWhereWithAggregatesInput = {
    AND?:
      | AdminRolesScalarWhereWithAggregatesInput
      | AdminRolesScalarWhereWithAggregatesInput[];
    OR?: AdminRolesScalarWhereWithAggregatesInput[];
    NOT?:
      | AdminRolesScalarWhereWithAggregatesInput
      | AdminRolesScalarWhereWithAggregatesInput[];
    role_id?: IntWithAggregatesFilter<'AdminRoles'> | number;
    name?: StringWithAggregatesFilter<'AdminRoles'> | string;
  };

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[];
    OR?: TransactionWhereInput[];
    NOT?: TransactionWhereInput | TransactionWhereInput[];
    transaction_id?: StringFilter<'Transaction'> | string;
    user_internal_id?: StringFilter<'Transaction'> | string;
    amount?:
      | DecimalFilter<'Transaction'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    transaction_type_id?: IntFilter<'Transaction'> | number;
    transaction_date?: DateTimeFilter<'Transaction'> | Date | string;
    delete_status?: IntFilter<'Transaction'> | number;
    register_date?: DateTimeFilter<'Transaction'> | Date | string;
    updated_date?: DateTimeFilter<'Transaction'> | Date | string;
    deleted_date?: DateTimeNullableFilter<'Transaction'> | Date | string | null;
    user?: XOR<UsersRelationFilter, UsersWhereInput>;
    transaction_type?: XOR<
      TransactionTypeRelationFilter,
      TransactionTypeWhereInput
    >;
  };

  export type TransactionOrderByWithRelationInput = {
    transaction_id?: SortOrder;
    user_internal_id?: SortOrder;
    amount?: SortOrder;
    transaction_type_id?: SortOrder;
    transaction_date?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    user?: UsersOrderByWithRelationInput;
    transaction_type?: TransactionTypeOrderByWithRelationInput;
  };

  export type TransactionWhereUniqueInput = Prisma.AtLeast<
    {
      transaction_id?: string;
      AND?: TransactionWhereInput | TransactionWhereInput[];
      OR?: TransactionWhereInput[];
      NOT?: TransactionWhereInput | TransactionWhereInput[];
      user_internal_id?: StringFilter<'Transaction'> | string;
      amount?:
        | DecimalFilter<'Transaction'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      transaction_type_id?: IntFilter<'Transaction'> | number;
      transaction_date?: DateTimeFilter<'Transaction'> | Date | string;
      delete_status?: IntFilter<'Transaction'> | number;
      register_date?: DateTimeFilter<'Transaction'> | Date | string;
      updated_date?: DateTimeFilter<'Transaction'> | Date | string;
      deleted_date?:
        | DateTimeNullableFilter<'Transaction'>
        | Date
        | string
        | null;
      user?: XOR<UsersRelationFilter, UsersWhereInput>;
      transaction_type?: XOR<
        TransactionTypeRelationFilter,
        TransactionTypeWhereInput
      >;
    },
    'transaction_id'
  >;

  export type TransactionOrderByWithAggregationInput = {
    transaction_id?: SortOrder;
    user_internal_id?: SortOrder;
    amount?: SortOrder;
    transaction_type_id?: SortOrder;
    transaction_date?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrderInput | SortOrder;
    _count?: TransactionCountOrderByAggregateInput;
    _avg?: TransactionAvgOrderByAggregateInput;
    _max?: TransactionMaxOrderByAggregateInput;
    _min?: TransactionMinOrderByAggregateInput;
    _sum?: TransactionSumOrderByAggregateInput;
  };

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?:
      | TransactionScalarWhereWithAggregatesInput
      | TransactionScalarWhereWithAggregatesInput[];
    OR?: TransactionScalarWhereWithAggregatesInput[];
    NOT?:
      | TransactionScalarWhereWithAggregatesInput
      | TransactionScalarWhereWithAggregatesInput[];
    transaction_id?: StringWithAggregatesFilter<'Transaction'> | string;
    user_internal_id?: StringWithAggregatesFilter<'Transaction'> | string;
    amount?:
      | DecimalWithAggregatesFilter<'Transaction'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    transaction_type_id?: IntWithAggregatesFilter<'Transaction'> | number;
    transaction_date?:
      | DateTimeWithAggregatesFilter<'Transaction'>
      | Date
      | string;
    delete_status?: IntWithAggregatesFilter<'Transaction'> | number;
    register_date?: DateTimeWithAggregatesFilter<'Transaction'> | Date | string;
    updated_date?: DateTimeWithAggregatesFilter<'Transaction'> | Date | string;
    deleted_date?:
      | DateTimeNullableWithAggregatesFilter<'Transaction'>
      | Date
      | string
      | null;
  };

  export type TransactionTypeWhereInput = {
    AND?: TransactionTypeWhereInput | TransactionTypeWhereInput[];
    OR?: TransactionTypeWhereInput[];
    NOT?: TransactionTypeWhereInput | TransactionTypeWhereInput[];
    transaction_type_id?: IntFilter<'TransactionType'> | number;
    transaction_type?: StringFilter<'TransactionType'> | string;
    transation?: TransactionListRelationFilter;
  };

  export type TransactionTypeOrderByWithRelationInput = {
    transaction_type_id?: SortOrder;
    transaction_type?: SortOrder;
    transation?: TransactionOrderByRelationAggregateInput;
  };

  export type TransactionTypeWhereUniqueInput = Prisma.AtLeast<
    {
      transaction_type_id?: number;
      transaction_type?: string;
      AND?: TransactionTypeWhereInput | TransactionTypeWhereInput[];
      OR?: TransactionTypeWhereInput[];
      NOT?: TransactionTypeWhereInput | TransactionTypeWhereInput[];
      transation?: TransactionListRelationFilter;
    },
    'transaction_type_id' | 'transaction_type'
  >;

  export type TransactionTypeOrderByWithAggregationInput = {
    transaction_type_id?: SortOrder;
    transaction_type?: SortOrder;
    _count?: TransactionTypeCountOrderByAggregateInput;
    _avg?: TransactionTypeAvgOrderByAggregateInput;
    _max?: TransactionTypeMaxOrderByAggregateInput;
    _min?: TransactionTypeMinOrderByAggregateInput;
    _sum?: TransactionTypeSumOrderByAggregateInput;
  };

  export type TransactionTypeScalarWhereWithAggregatesInput = {
    AND?:
      | TransactionTypeScalarWhereWithAggregatesInput
      | TransactionTypeScalarWhereWithAggregatesInput[];
    OR?: TransactionTypeScalarWhereWithAggregatesInput[];
    NOT?:
      | TransactionTypeScalarWhereWithAggregatesInput
      | TransactionTypeScalarWhereWithAggregatesInput[];
    transaction_type_id?: IntWithAggregatesFilter<'TransactionType'> | number;
    transaction_type?: StringWithAggregatesFilter<'TransactionType'> | string;
  };

  export type ApproveRejectWhereInput = {
    AND?: ApproveRejectWhereInput | ApproveRejectWhereInput[];
    OR?: ApproveRejectWhereInput[];
    NOT?: ApproveRejectWhereInput | ApproveRejectWhereInput[];
    approve_reject_type_id?: IntFilter<'ApproveReject'> | number;
    type?: StringFilter<'ApproveReject'> | string;
  };

  export type ApproveRejectOrderByWithRelationInput = {
    approve_reject_type_id?: SortOrder;
    type?: SortOrder;
  };

  export type ApproveRejectWhereUniqueInput = Prisma.AtLeast<
    {
      approve_reject_type_id?: number;
      type?: string;
      AND?: ApproveRejectWhereInput | ApproveRejectWhereInput[];
      OR?: ApproveRejectWhereInput[];
      NOT?: ApproveRejectWhereInput | ApproveRejectWhereInput[];
    },
    'approve_reject_type_id' | 'type'
  >;

  export type ApproveRejectOrderByWithAggregationInput = {
    approve_reject_type_id?: SortOrder;
    type?: SortOrder;
    _count?: ApproveRejectCountOrderByAggregateInput;
    _avg?: ApproveRejectAvgOrderByAggregateInput;
    _max?: ApproveRejectMaxOrderByAggregateInput;
    _min?: ApproveRejectMinOrderByAggregateInput;
    _sum?: ApproveRejectSumOrderByAggregateInput;
  };

  export type ApproveRejectScalarWhereWithAggregatesInput = {
    AND?:
      | ApproveRejectScalarWhereWithAggregatesInput
      | ApproveRejectScalarWhereWithAggregatesInput[];
    OR?: ApproveRejectScalarWhereWithAggregatesInput[];
    NOT?:
      | ApproveRejectScalarWhereWithAggregatesInput
      | ApproveRejectScalarWhereWithAggregatesInput[];
    approve_reject_type_id?: IntWithAggregatesFilter<'ApproveReject'> | number;
    type?: StringWithAggregatesFilter<'ApproveReject'> | string;
  };

  export type UsersCreateInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user_role: RolesCreateNestedOneWithoutUsersInput;
    withdrawaccount?: UserWithdrawAccountCreateNestedManyWithoutUserInput;
    wallet?: WalletCreateNestedManyWithoutUserInput;
    payment?: PaymentCreateNestedManyWithoutUserInput;
    withdraw?: WithdrawCreateNestedManyWithoutUserInput;
    transation?: TransactionCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    role_id: number;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    withdrawaccount?: UserWithdrawAccountUncheckedCreateNestedManyWithoutUserInput;
    wallet?: WalletUncheckedCreateNestedManyWithoutUserInput;
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput;
    withdraw?: WithdrawUncheckedCreateNestedManyWithoutUserInput;
    transation?: TransactionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersUpdateInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user_role?: RolesUpdateOneRequiredWithoutUsersNestedInput;
    withdrawaccount?: UserWithdrawAccountUpdateManyWithoutUserNestedInput;
    wallet?: WalletUpdateManyWithoutUserNestedInput;
    payment?: PaymentUpdateManyWithoutUserNestedInput;
    withdraw?: WithdrawUpdateManyWithoutUserNestedInput;
    transation?: TransactionUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: IntFieldUpdateOperationsInput | number;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    withdrawaccount?: UserWithdrawAccountUncheckedUpdateManyWithoutUserNestedInput;
    wallet?: WalletUncheckedUpdateManyWithoutUserNestedInput;
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput;
    withdraw?: WithdrawUncheckedUpdateManyWithoutUserNestedInput;
    transation?: TransactionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UsersCreateManyInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    role_id: number;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type UsersUpdateManyMutationInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UsersUncheckedUpdateManyInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: IntFieldUpdateOperationsInput | number;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type RolesCreateInput = {
    role_id: number;
    name: string;
    users?: UsersCreateNestedManyWithoutUser_roleInput;
  };

  export type RolesUncheckedCreateInput = {
    role_id: number;
    name: string;
    users?: UsersUncheckedCreateNestedManyWithoutUser_roleInput;
  };

  export type RolesUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    users?: UsersUpdateManyWithoutUser_roleNestedInput;
  };

  export type RolesUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    users?: UsersUncheckedUpdateManyWithoutUser_roleNestedInput;
  };

  export type RolesCreateManyInput = {
    role_id: number;
    name: string;
  };

  export type RolesUpdateManyMutationInput = {
    role_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type RolesUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type UserWithdrawAccountCreateInput = {
    user_withdraw_account_id: string;
    account_type: string;
    account_name: string;
    account_id: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user: UsersCreateNestedOneWithoutWithdrawaccountInput;
    withdraw?: WithdrawCreateNestedManyWithoutWithdrawaccountInput;
  };

  export type UserWithdrawAccountUncheckedCreateInput = {
    user_withdraw_account_id: string;
    user_internal_id: string;
    account_type: string;
    account_name: string;
    account_id: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    withdraw?: WithdrawUncheckedCreateNestedManyWithoutWithdrawaccountInput;
  };

  export type UserWithdrawAccountUpdateInput = {
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    account_type?: StringFieldUpdateOperationsInput | string;
    account_name?: StringFieldUpdateOperationsInput | string;
    account_id?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UsersUpdateOneRequiredWithoutWithdrawaccountNestedInput;
    withdraw?: WithdrawUpdateManyWithoutWithdrawaccountNestedInput;
  };

  export type UserWithdrawAccountUncheckedUpdateInput = {
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    account_type?: StringFieldUpdateOperationsInput | string;
    account_name?: StringFieldUpdateOperationsInput | string;
    account_id?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    withdraw?: WithdrawUncheckedUpdateManyWithoutWithdrawaccountNestedInput;
  };

  export type UserWithdrawAccountCreateManyInput = {
    user_withdraw_account_id: string;
    user_internal_id: string;
    account_type: string;
    account_name: string;
    account_id: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type UserWithdrawAccountUpdateManyMutationInput = {
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    account_type?: StringFieldUpdateOperationsInput | string;
    account_name?: StringFieldUpdateOperationsInput | string;
    account_id?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UserWithdrawAccountUncheckedUpdateManyInput = {
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    account_type?: StringFieldUpdateOperationsInput | string;
    account_name?: StringFieldUpdateOperationsInput | string;
    account_id?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type AdminReceiverAccountCreateInput = {
    admin_receiver_account_id: string;
    admin_account_type: string;
    admin_account_name: string;
    admin_account_id: string;
    status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    payment?: PaymentCreateNestedManyWithoutAdmin_receiver_accountInput;
  };

  export type AdminReceiverAccountUncheckedCreateInput = {
    admin_receiver_account_id: string;
    admin_account_type: string;
    admin_account_name: string;
    admin_account_id: string;
    status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    payment?: PaymentUncheckedCreateNestedManyWithoutAdmin_receiver_accountInput;
  };

  export type AdminReceiverAccountUpdateInput = {
    admin_receiver_account_id?: StringFieldUpdateOperationsInput | string;
    admin_account_type?: StringFieldUpdateOperationsInput | string;
    admin_account_name?: StringFieldUpdateOperationsInput | string;
    admin_account_id?: StringFieldUpdateOperationsInput | string;
    status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    payment?: PaymentUpdateManyWithoutAdmin_receiver_accountNestedInput;
  };

  export type AdminReceiverAccountUncheckedUpdateInput = {
    admin_receiver_account_id?: StringFieldUpdateOperationsInput | string;
    admin_account_type?: StringFieldUpdateOperationsInput | string;
    admin_account_name?: StringFieldUpdateOperationsInput | string;
    admin_account_id?: StringFieldUpdateOperationsInput | string;
    status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    payment?: PaymentUncheckedUpdateManyWithoutAdmin_receiver_accountNestedInput;
  };

  export type AdminReceiverAccountCreateManyInput = {
    admin_receiver_account_id: string;
    admin_account_type: string;
    admin_account_name: string;
    admin_account_id: string;
    status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type AdminReceiverAccountUpdateManyMutationInput = {
    admin_receiver_account_id?: StringFieldUpdateOperationsInput | string;
    admin_account_type?: StringFieldUpdateOperationsInput | string;
    admin_account_name?: StringFieldUpdateOperationsInput | string;
    admin_account_id?: StringFieldUpdateOperationsInput | string;
    status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type AdminReceiverAccountUncheckedUpdateManyInput = {
    admin_receiver_account_id?: StringFieldUpdateOperationsInput | string;
    admin_account_type?: StringFieldUpdateOperationsInput | string;
    admin_account_name?: StringFieldUpdateOperationsInput | string;
    admin_account_id?: StringFieldUpdateOperationsInput | string;
    status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WalletCreateInput = {
    wallet_id: string;
    game_amount?: Decimal | DecimalJsLike | number | string | null;
    main_amount?: Decimal | DecimalJsLike | number | string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user: UsersCreateNestedOneWithoutWalletInput;
  };

  export type WalletUncheckedCreateInput = {
    wallet_id: string;
    user_internal_id: string;
    game_amount?: Decimal | DecimalJsLike | number | string | null;
    main_amount?: Decimal | DecimalJsLike | number | string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type WalletUpdateInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string;
    game_amount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    main_amount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UsersUpdateOneRequiredWithoutWalletNestedInput;
  };

  export type WalletUncheckedUpdateInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    game_amount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    main_amount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WalletCreateManyInput = {
    wallet_id: string;
    user_internal_id: string;
    game_amount?: Decimal | DecimalJsLike | number | string | null;
    main_amount?: Decimal | DecimalJsLike | number | string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type WalletUpdateManyMutationInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string;
    game_amount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    main_amount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WalletUncheckedUpdateManyInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    game_amount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    main_amount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type PaymentCreateInput = {
    payment_internal_id: string;
    payment_type: string;
    payment_account_name: string;
    payment_account: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    approve_reject: number;
    reason_for_reject?: string | null;
    payment_confirm_code: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user: UsersCreateNestedOneWithoutPaymentInput;
    admin?: AdminCreateNestedOneWithoutPaymentInput;
    admin_receiver_account?: AdminReceiverAccountCreateNestedOneWithoutPaymentInput;
  };

  export type PaymentUncheckedCreateInput = {
    payment_internal_id: string;
    user_internal_id: string;
    admin_internal_id?: string | null;
    payment_type: string;
    payment_account_name: string;
    payment_account: string;
    admin_receiver_account_id?: string | null;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    approve_reject: number;
    reason_for_reject?: string | null;
    payment_confirm_code: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type PaymentUpdateInput = {
    payment_internal_id?: StringFieldUpdateOperationsInput | string;
    payment_type?: StringFieldUpdateOperationsInput | string;
    payment_account_name?: StringFieldUpdateOperationsInput | string;
    payment_account?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_confirm_code?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UsersUpdateOneRequiredWithoutPaymentNestedInput;
    admin?: AdminUpdateOneWithoutPaymentNestedInput;
    admin_receiver_account?: AdminReceiverAccountUpdateOneWithoutPaymentNestedInput;
  };

  export type PaymentUncheckedUpdateInput = {
    payment_internal_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_internal_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_type?: StringFieldUpdateOperationsInput | string;
    payment_account_name?: StringFieldUpdateOperationsInput | string;
    payment_account?: StringFieldUpdateOperationsInput | string;
    admin_receiver_account_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_confirm_code?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type PaymentCreateManyInput = {
    payment_internal_id: string;
    user_internal_id: string;
    admin_internal_id?: string | null;
    payment_type: string;
    payment_account_name: string;
    payment_account: string;
    admin_receiver_account_id?: string | null;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    approve_reject: number;
    reason_for_reject?: string | null;
    payment_confirm_code: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type PaymentUpdateManyMutationInput = {
    payment_internal_id?: StringFieldUpdateOperationsInput | string;
    payment_type?: StringFieldUpdateOperationsInput | string;
    payment_account_name?: StringFieldUpdateOperationsInput | string;
    payment_account?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_confirm_code?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type PaymentUncheckedUpdateManyInput = {
    payment_internal_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_internal_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_type?: StringFieldUpdateOperationsInput | string;
    payment_account_name?: StringFieldUpdateOperationsInput | string;
    payment_account?: StringFieldUpdateOperationsInput | string;
    admin_receiver_account_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_confirm_code?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WithdrawCreateInput = {
    withdraw_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    withdraw_confirm_code?: string | null;
    is_verify?: number | null;
    approve_reject: number;
    reason_for_reject?: string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user: UsersCreateNestedOneWithoutWithdrawInput;
    admin?: AdminCreateNestedOneWithoutWithdrawInput;
    withdrawaccount: UserWithdrawAccountCreateNestedOneWithoutWithdrawInput;
  };

  export type WithdrawUncheckedCreateInput = {
    withdraw_id: string;
    user_internal_id: string;
    admin_internal_id?: string | null;
    user_withdraw_account_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    withdraw_confirm_code?: string | null;
    is_verify?: number | null;
    approve_reject: number;
    reason_for_reject?: string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type WithdrawUpdateInput = {
    withdraw_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    withdraw_confirm_code?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UsersUpdateOneRequiredWithoutWithdrawNestedInput;
    admin?: AdminUpdateOneWithoutWithdrawNestedInput;
    withdrawaccount?: UserWithdrawAccountUpdateOneRequiredWithoutWithdrawNestedInput;
  };

  export type WithdrawUncheckedUpdateInput = {
    withdraw_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_internal_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    withdraw_confirm_code?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WithdrawCreateManyInput = {
    withdraw_id: string;
    user_internal_id: string;
    admin_internal_id?: string | null;
    user_withdraw_account_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    withdraw_confirm_code?: string | null;
    is_verify?: number | null;
    approve_reject: number;
    reason_for_reject?: string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type WithdrawUpdateManyMutationInput = {
    withdraw_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    withdraw_confirm_code?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WithdrawUncheckedUpdateManyInput = {
    withdraw_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_internal_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    withdraw_confirm_code?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type AdminCreateInput = {
    admin_internal_id: string;
    admin_id: string;
    admin_name?: string | null;
    password?: string | null;
    account_status?: string | null;
    delete_status?: number | null;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    admin_role: AdminRolesCreateNestedOneWithoutAdminsInput;
    payment?: PaymentCreateNestedManyWithoutAdminInput;
    withdraw?: WithdrawCreateNestedManyWithoutAdminInput;
  };

  export type AdminUncheckedCreateInput = {
    admin_internal_id: string;
    admin_id: string;
    admin_name?: string | null;
    password?: string | null;
    role_id: number;
    account_status?: string | null;
    delete_status?: number | null;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    payment?: PaymentUncheckedCreateNestedManyWithoutAdminInput;
    withdraw?: WithdrawUncheckedCreateNestedManyWithoutAdminInput;
  };

  export type AdminUpdateInput = {
    admin_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_id?: StringFieldUpdateOperationsInput | string;
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    account_status?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    admin_role?: AdminRolesUpdateOneRequiredWithoutAdminsNestedInput;
    payment?: PaymentUpdateManyWithoutAdminNestedInput;
    withdraw?: WithdrawUpdateManyWithoutAdminNestedInput;
  };

  export type AdminUncheckedUpdateInput = {
    admin_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_id?: StringFieldUpdateOperationsInput | string;
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: IntFieldUpdateOperationsInput | number;
    account_status?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    payment?: PaymentUncheckedUpdateManyWithoutAdminNestedInput;
    withdraw?: WithdrawUncheckedUpdateManyWithoutAdminNestedInput;
  };

  export type AdminCreateManyInput = {
    admin_internal_id: string;
    admin_id: string;
    admin_name?: string | null;
    password?: string | null;
    role_id: number;
    account_status?: string | null;
    delete_status?: number | null;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type AdminUpdateManyMutationInput = {
    admin_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_id?: StringFieldUpdateOperationsInput | string;
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    account_status?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type AdminUncheckedUpdateManyInput = {
    admin_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_id?: StringFieldUpdateOperationsInput | string;
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: IntFieldUpdateOperationsInput | number;
    account_status?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type AdminRolesCreateInput = {
    role_id: number;
    name: string;
    admins?: AdminCreateNestedManyWithoutAdmin_roleInput;
  };

  export type AdminRolesUncheckedCreateInput = {
    role_id: number;
    name: string;
    admins?: AdminUncheckedCreateNestedManyWithoutAdmin_roleInput;
  };

  export type AdminRolesUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    admins?: AdminUpdateManyWithoutAdmin_roleNestedInput;
  };

  export type AdminRolesUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    admins?: AdminUncheckedUpdateManyWithoutAdmin_roleNestedInput;
  };

  export type AdminRolesCreateManyInput = {
    role_id: number;
    name: string;
  };

  export type AdminRolesUpdateManyMutationInput = {
    role_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type AdminRolesUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type TransactionCreateInput = {
    transaction_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    transaction_date: Date | string;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user: UsersCreateNestedOneWithoutTransationInput;
    transaction_type: TransactionTypeCreateNestedOneWithoutTransationInput;
  };

  export type TransactionUncheckedCreateInput = {
    transaction_id: string;
    user_internal_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    transaction_type_id: number;
    transaction_date: Date | string;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type TransactionUpdateInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UsersUpdateOneRequiredWithoutTransationNestedInput;
    transaction_type?: TransactionTypeUpdateOneRequiredWithoutTransationNestedInput;
  };

  export type TransactionUncheckedUpdateInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    transaction_type_id?: IntFieldUpdateOperationsInput | number;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type TransactionCreateManyInput = {
    transaction_id: string;
    user_internal_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    transaction_type_id: number;
    transaction_date: Date | string;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type TransactionUpdateManyMutationInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type TransactionUncheckedUpdateManyInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    transaction_type_id?: IntFieldUpdateOperationsInput | number;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type TransactionTypeCreateInput = {
    transaction_type_id: number;
    transaction_type: string;
    transation?: TransactionCreateNestedManyWithoutTransaction_typeInput;
  };

  export type TransactionTypeUncheckedCreateInput = {
    transaction_type_id: number;
    transaction_type: string;
    transation?: TransactionUncheckedCreateNestedManyWithoutTransaction_typeInput;
  };

  export type TransactionTypeUpdateInput = {
    transaction_type_id?: IntFieldUpdateOperationsInput | number;
    transaction_type?: StringFieldUpdateOperationsInput | string;
    transation?: TransactionUpdateManyWithoutTransaction_typeNestedInput;
  };

  export type TransactionTypeUncheckedUpdateInput = {
    transaction_type_id?: IntFieldUpdateOperationsInput | number;
    transaction_type?: StringFieldUpdateOperationsInput | string;
    transation?: TransactionUncheckedUpdateManyWithoutTransaction_typeNestedInput;
  };

  export type TransactionTypeCreateManyInput = {
    transaction_type_id: number;
    transaction_type: string;
  };

  export type TransactionTypeUpdateManyMutationInput = {
    transaction_type_id?: IntFieldUpdateOperationsInput | number;
    transaction_type?: StringFieldUpdateOperationsInput | string;
  };

  export type TransactionTypeUncheckedUpdateManyInput = {
    transaction_type_id?: IntFieldUpdateOperationsInput | number;
    transaction_type?: StringFieldUpdateOperationsInput | string;
  };

  export type ApproveRejectCreateInput = {
    approve_reject_type_id: number;
    type: string;
  };

  export type ApproveRejectUncheckedCreateInput = {
    approve_reject_type_id: number;
    type: string;
  };

  export type ApproveRejectUpdateInput = {
    approve_reject_type_id?: IntFieldUpdateOperationsInput | number;
    type?: StringFieldUpdateOperationsInput | string;
  };

  export type ApproveRejectUncheckedUpdateInput = {
    approve_reject_type_id?: IntFieldUpdateOperationsInput | number;
    type?: StringFieldUpdateOperationsInput | string;
  };

  export type ApproveRejectCreateManyInput = {
    approve_reject_type_id: number;
    type: string;
  };

  export type ApproveRejectUpdateManyMutationInput = {
    approve_reject_type_id?: IntFieldUpdateOperationsInput | number;
    type?: StringFieldUpdateOperationsInput | string;
  };

  export type ApproveRejectUncheckedUpdateManyInput = {
    approve_reject_type_id?: IntFieldUpdateOperationsInput | number;
    type?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type RolesRelationFilter = {
    is?: RolesWhereInput;
    isNot?: RolesWhereInput;
  };

  export type UserWithdrawAccountListRelationFilter = {
    every?: UserWithdrawAccountWhereInput;
    some?: UserWithdrawAccountWhereInput;
    none?: UserWithdrawAccountWhereInput;
  };

  export type WalletListRelationFilter = {
    every?: WalletWhereInput;
    some?: WalletWhereInput;
    none?: WalletWhereInput;
  };

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput;
    some?: PaymentWhereInput;
    none?: PaymentWhereInput;
  };

  export type WithdrawListRelationFilter = {
    every?: WithdrawWhereInput;
    some?: WithdrawWhereInput;
    none?: WithdrawWhereInput;
  };

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput;
    some?: TransactionWhereInput;
    none?: TransactionWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type UserWithdrawAccountOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type WalletOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type WithdrawOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UsersCountOrderByAggregateInput = {
    user_internal_id?: SortOrder;
    phone_number?: SortOrder;
    user_name?: SortOrder;
    password?: SortOrder;
    otp_code?: SortOrder;
    role_id?: SortOrder;
    sms_send_time?: SortOrder;
    is_verify?: SortOrder;
    account_status?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type UsersAvgOrderByAggregateInput = {
    role_id?: SortOrder;
    is_verify?: SortOrder;
    account_status?: SortOrder;
    delete_status?: SortOrder;
  };

  export type UsersMaxOrderByAggregateInput = {
    user_internal_id?: SortOrder;
    phone_number?: SortOrder;
    user_name?: SortOrder;
    password?: SortOrder;
    otp_code?: SortOrder;
    role_id?: SortOrder;
    sms_send_time?: SortOrder;
    is_verify?: SortOrder;
    account_status?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type UsersMinOrderByAggregateInput = {
    user_internal_id?: SortOrder;
    phone_number?: SortOrder;
    user_name?: SortOrder;
    password?: SortOrder;
    otp_code?: SortOrder;
    role_id?: SortOrder;
    sms_send_time?: SortOrder;
    is_verify?: SortOrder;
    account_status?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type UsersSumOrderByAggregateInput = {
    role_id?: SortOrder;
    is_verify?: SortOrder;
    account_status?: SortOrder;
    delete_status?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UsersListRelationFilter = {
    every?: UsersWhereInput;
    some?: UsersWhereInput;
    none?: UsersWhereInput;
  };

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RolesCountOrderByAggregateInput = {
    role_id?: SortOrder;
    name?: SortOrder;
  };

  export type RolesAvgOrderByAggregateInput = {
    role_id?: SortOrder;
  };

  export type RolesMaxOrderByAggregateInput = {
    role_id?: SortOrder;
    name?: SortOrder;
  };

  export type RolesMinOrderByAggregateInput = {
    role_id?: SortOrder;
    name?: SortOrder;
  };

  export type RolesSumOrderByAggregateInput = {
    role_id?: SortOrder;
  };

  export type UsersRelationFilter = {
    is?: UsersWhereInput;
    isNot?: UsersWhereInput;
  };

  export type UserWithdrawAccountCountOrderByAggregateInput = {
    user_withdraw_account_id?: SortOrder;
    user_internal_id?: SortOrder;
    account_type?: SortOrder;
    account_name?: SortOrder;
    account_id?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type UserWithdrawAccountAvgOrderByAggregateInput = {
    account_id?: SortOrder;
    delete_status?: SortOrder;
  };

  export type UserWithdrawAccountMaxOrderByAggregateInput = {
    user_withdraw_account_id?: SortOrder;
    user_internal_id?: SortOrder;
    account_type?: SortOrder;
    account_name?: SortOrder;
    account_id?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type UserWithdrawAccountMinOrderByAggregateInput = {
    user_withdraw_account_id?: SortOrder;
    user_internal_id?: SortOrder;
    account_type?: SortOrder;
    account_name?: SortOrder;
    account_id?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type UserWithdrawAccountSumOrderByAggregateInput = {
    account_id?: SortOrder;
    delete_status?: SortOrder;
  };

  export type AdminReceiverAccountCountOrderByAggregateInput = {
    admin_receiver_account_id?: SortOrder;
    admin_account_type?: SortOrder;
    admin_account_name?: SortOrder;
    admin_account_id?: SortOrder;
    status?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type AdminReceiverAccountAvgOrderByAggregateInput = {
    status?: SortOrder;
    delete_status?: SortOrder;
  };

  export type AdminReceiverAccountMaxOrderByAggregateInput = {
    admin_receiver_account_id?: SortOrder;
    admin_account_type?: SortOrder;
    admin_account_name?: SortOrder;
    admin_account_id?: SortOrder;
    status?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type AdminReceiverAccountMinOrderByAggregateInput = {
    admin_receiver_account_id?: SortOrder;
    admin_account_type?: SortOrder;
    admin_account_name?: SortOrder;
    admin_account_id?: SortOrder;
    status?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type AdminReceiverAccountSumOrderByAggregateInput = {
    status?: SortOrder;
    delete_status?: SortOrder;
  };

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
  };

  export type WalletCountOrderByAggregateInput = {
    wallet_id?: SortOrder;
    user_internal_id?: SortOrder;
    game_amount?: SortOrder;
    main_amount?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type WalletAvgOrderByAggregateInput = {
    game_amount?: SortOrder;
    main_amount?: SortOrder;
    delete_status?: SortOrder;
  };

  export type WalletMaxOrderByAggregateInput = {
    wallet_id?: SortOrder;
    user_internal_id?: SortOrder;
    game_amount?: SortOrder;
    main_amount?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type WalletMinOrderByAggregateInput = {
    wallet_id?: SortOrder;
    user_internal_id?: SortOrder;
    game_amount?: SortOrder;
    main_amount?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type WalletSumOrderByAggregateInput = {
    game_amount?: SortOrder;
    main_amount?: SortOrder;
    delete_status?: SortOrder;
  };

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: NestedDecimalNullableFilter<$PrismaModel>;
    _min?: NestedDecimalNullableFilter<$PrismaModel>;
    _max?: NestedDecimalNullableFilter<$PrismaModel>;
  };

  export type DecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type AdminNullableRelationFilter = {
    is?: AdminWhereInput | null;
    isNot?: AdminWhereInput | null;
  };

  export type AdminReceiverAccountNullableRelationFilter = {
    is?: AdminReceiverAccountWhereInput | null;
    isNot?: AdminReceiverAccountWhereInput | null;
  };

  export type PaymentCountOrderByAggregateInput = {
    payment_internal_id?: SortOrder;
    user_internal_id?: SortOrder;
    admin_internal_id?: SortOrder;
    payment_type?: SortOrder;
    payment_account_name?: SortOrder;
    payment_account?: SortOrder;
    admin_receiver_account_id?: SortOrder;
    amount?: SortOrder;
    date?: SortOrder;
    approve_reject?: SortOrder;
    reason_for_reject?: SortOrder;
    payment_confirm_code?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder;
    approve_reject?: SortOrder;
    payment_confirm_code?: SortOrder;
    delete_status?: SortOrder;
  };

  export type PaymentMaxOrderByAggregateInput = {
    payment_internal_id?: SortOrder;
    user_internal_id?: SortOrder;
    admin_internal_id?: SortOrder;
    payment_type?: SortOrder;
    payment_account_name?: SortOrder;
    payment_account?: SortOrder;
    admin_receiver_account_id?: SortOrder;
    amount?: SortOrder;
    date?: SortOrder;
    approve_reject?: SortOrder;
    reason_for_reject?: SortOrder;
    payment_confirm_code?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type PaymentMinOrderByAggregateInput = {
    payment_internal_id?: SortOrder;
    user_internal_id?: SortOrder;
    admin_internal_id?: SortOrder;
    payment_type?: SortOrder;
    payment_account_name?: SortOrder;
    payment_account?: SortOrder;
    admin_receiver_account_id?: SortOrder;
    amount?: SortOrder;
    date?: SortOrder;
    approve_reject?: SortOrder;
    reason_for_reject?: SortOrder;
    payment_confirm_code?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder;
    approve_reject?: SortOrder;
    payment_confirm_code?: SortOrder;
    delete_status?: SortOrder;
  };

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type UserWithdrawAccountRelationFilter = {
    is?: UserWithdrawAccountWhereInput;
    isNot?: UserWithdrawAccountWhereInput;
  };

  export type WithdrawCountOrderByAggregateInput = {
    withdraw_id?: SortOrder;
    user_internal_id?: SortOrder;
    admin_internal_id?: SortOrder;
    user_withdraw_account_id?: SortOrder;
    amount?: SortOrder;
    date?: SortOrder;
    withdraw_confirm_code?: SortOrder;
    is_verify?: SortOrder;
    approve_reject?: SortOrder;
    reason_for_reject?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type WithdrawAvgOrderByAggregateInput = {
    amount?: SortOrder;
    is_verify?: SortOrder;
    approve_reject?: SortOrder;
    delete_status?: SortOrder;
  };

  export type WithdrawMaxOrderByAggregateInput = {
    withdraw_id?: SortOrder;
    user_internal_id?: SortOrder;
    admin_internal_id?: SortOrder;
    user_withdraw_account_id?: SortOrder;
    amount?: SortOrder;
    date?: SortOrder;
    withdraw_confirm_code?: SortOrder;
    is_verify?: SortOrder;
    approve_reject?: SortOrder;
    reason_for_reject?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type WithdrawMinOrderByAggregateInput = {
    withdraw_id?: SortOrder;
    user_internal_id?: SortOrder;
    admin_internal_id?: SortOrder;
    user_withdraw_account_id?: SortOrder;
    amount?: SortOrder;
    date?: SortOrder;
    withdraw_confirm_code?: SortOrder;
    is_verify?: SortOrder;
    approve_reject?: SortOrder;
    reason_for_reject?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type WithdrawSumOrderByAggregateInput = {
    amount?: SortOrder;
    is_verify?: SortOrder;
    approve_reject?: SortOrder;
    delete_status?: SortOrder;
  };

  export type AdminRolesRelationFilter = {
    is?: AdminRolesWhereInput;
    isNot?: AdminRolesWhereInput;
  };

  export type AdminCountOrderByAggregateInput = {
    admin_internal_id?: SortOrder;
    admin_id?: SortOrder;
    admin_name?: SortOrder;
    password?: SortOrder;
    role_id?: SortOrder;
    account_status?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type AdminAvgOrderByAggregateInput = {
    role_id?: SortOrder;
    delete_status?: SortOrder;
  };

  export type AdminMaxOrderByAggregateInput = {
    admin_internal_id?: SortOrder;
    admin_id?: SortOrder;
    admin_name?: SortOrder;
    password?: SortOrder;
    role_id?: SortOrder;
    account_status?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type AdminMinOrderByAggregateInput = {
    admin_internal_id?: SortOrder;
    admin_id?: SortOrder;
    admin_name?: SortOrder;
    password?: SortOrder;
    role_id?: SortOrder;
    account_status?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type AdminSumOrderByAggregateInput = {
    role_id?: SortOrder;
    delete_status?: SortOrder;
  };

  export type AdminListRelationFilter = {
    every?: AdminWhereInput;
    some?: AdminWhereInput;
    none?: AdminWhereInput;
  };

  export type AdminOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AdminRolesCountOrderByAggregateInput = {
    role_id?: SortOrder;
    name?: SortOrder;
  };

  export type AdminRolesAvgOrderByAggregateInput = {
    role_id?: SortOrder;
  };

  export type AdminRolesMaxOrderByAggregateInput = {
    role_id?: SortOrder;
    name?: SortOrder;
  };

  export type AdminRolesMinOrderByAggregateInput = {
    role_id?: SortOrder;
    name?: SortOrder;
  };

  export type AdminRolesSumOrderByAggregateInput = {
    role_id?: SortOrder;
  };

  export type TransactionTypeRelationFilter = {
    is?: TransactionTypeWhereInput;
    isNot?: TransactionTypeWhereInput;
  };

  export type TransactionCountOrderByAggregateInput = {
    transaction_id?: SortOrder;
    user_internal_id?: SortOrder;
    amount?: SortOrder;
    transaction_type_id?: SortOrder;
    transaction_date?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder;
    transaction_type_id?: SortOrder;
    delete_status?: SortOrder;
  };

  export type TransactionMaxOrderByAggregateInput = {
    transaction_id?: SortOrder;
    user_internal_id?: SortOrder;
    amount?: SortOrder;
    transaction_type_id?: SortOrder;
    transaction_date?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type TransactionMinOrderByAggregateInput = {
    transaction_id?: SortOrder;
    user_internal_id?: SortOrder;
    amount?: SortOrder;
    transaction_type_id?: SortOrder;
    transaction_date?: SortOrder;
    delete_status?: SortOrder;
    register_date?: SortOrder;
    updated_date?: SortOrder;
    deleted_date?: SortOrder;
  };

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder;
    transaction_type_id?: SortOrder;
    delete_status?: SortOrder;
  };

  export type TransactionTypeCountOrderByAggregateInput = {
    transaction_type_id?: SortOrder;
    transaction_type?: SortOrder;
  };

  export type TransactionTypeAvgOrderByAggregateInput = {
    transaction_type_id?: SortOrder;
  };

  export type TransactionTypeMaxOrderByAggregateInput = {
    transaction_type_id?: SortOrder;
    transaction_type?: SortOrder;
  };

  export type TransactionTypeMinOrderByAggregateInput = {
    transaction_type_id?: SortOrder;
    transaction_type?: SortOrder;
  };

  export type TransactionTypeSumOrderByAggregateInput = {
    transaction_type_id?: SortOrder;
  };

  export type ApproveRejectCountOrderByAggregateInput = {
    approve_reject_type_id?: SortOrder;
    type?: SortOrder;
  };

  export type ApproveRejectAvgOrderByAggregateInput = {
    approve_reject_type_id?: SortOrder;
  };

  export type ApproveRejectMaxOrderByAggregateInput = {
    approve_reject_type_id?: SortOrder;
    type?: SortOrder;
  };

  export type ApproveRejectMinOrderByAggregateInput = {
    approve_reject_type_id?: SortOrder;
    type?: SortOrder;
  };

  export type ApproveRejectSumOrderByAggregateInput = {
    approve_reject_type_id?: SortOrder;
  };

  export type RolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      RolesCreateWithoutUsersInput,
      RolesUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput;
    connect?: RolesWhereUniqueInput;
  };

  export type UserWithdrawAccountCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserWithdrawAccountCreateWithoutUserInput,
          UserWithdrawAccountUncheckedCreateWithoutUserInput
        >
      | UserWithdrawAccountCreateWithoutUserInput[]
      | UserWithdrawAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserWithdrawAccountCreateOrConnectWithoutUserInput
      | UserWithdrawAccountCreateOrConnectWithoutUserInput[];
    createMany?: UserWithdrawAccountCreateManyUserInputEnvelope;
    connect?:
      | UserWithdrawAccountWhereUniqueInput
      | UserWithdrawAccountWhereUniqueInput[];
  };

  export type WalletCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
      | WalletCreateWithoutUserInput[]
      | WalletUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | WalletCreateOrConnectWithoutUserInput
      | WalletCreateOrConnectWithoutUserInput[];
    createMany?: WalletCreateManyUserInputEnvelope;
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[];
  };

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PaymentCreateWithoutUserInput,
          PaymentUncheckedCreateWithoutUserInput
        >
      | PaymentCreateWithoutUserInput[]
      | PaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutUserInput
      | PaymentCreateOrConnectWithoutUserInput[];
    createMany?: PaymentCreateManyUserInputEnvelope;
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
  };

  export type WithdrawCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          WithdrawCreateWithoutUserInput,
          WithdrawUncheckedCreateWithoutUserInput
        >
      | WithdrawCreateWithoutUserInput[]
      | WithdrawUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | WithdrawCreateOrConnectWithoutUserInput
      | WithdrawCreateOrConnectWithoutUserInput[];
    createMany?: WithdrawCreateManyUserInputEnvelope;
    connect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
  };

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          TransactionCreateWithoutUserInput,
          TransactionUncheckedCreateWithoutUserInput
        >
      | TransactionCreateWithoutUserInput[]
      | TransactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutUserInput
      | TransactionCreateOrConnectWithoutUserInput[];
    createMany?: TransactionCreateManyUserInputEnvelope;
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
  };

  export type UserWithdrawAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserWithdrawAccountCreateWithoutUserInput,
          UserWithdrawAccountUncheckedCreateWithoutUserInput
        >
      | UserWithdrawAccountCreateWithoutUserInput[]
      | UserWithdrawAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserWithdrawAccountCreateOrConnectWithoutUserInput
      | UserWithdrawAccountCreateOrConnectWithoutUserInput[];
    createMany?: UserWithdrawAccountCreateManyUserInputEnvelope;
    connect?:
      | UserWithdrawAccountWhereUniqueInput
      | UserWithdrawAccountWhereUniqueInput[];
  };

  export type WalletUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
      | WalletCreateWithoutUserInput[]
      | WalletUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | WalletCreateOrConnectWithoutUserInput
      | WalletCreateOrConnectWithoutUserInput[];
    createMany?: WalletCreateManyUserInputEnvelope;
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[];
  };

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PaymentCreateWithoutUserInput,
          PaymentUncheckedCreateWithoutUserInput
        >
      | PaymentCreateWithoutUserInput[]
      | PaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutUserInput
      | PaymentCreateOrConnectWithoutUserInput[];
    createMany?: PaymentCreateManyUserInputEnvelope;
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
  };

  export type WithdrawUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          WithdrawCreateWithoutUserInput,
          WithdrawUncheckedCreateWithoutUserInput
        >
      | WithdrawCreateWithoutUserInput[]
      | WithdrawUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | WithdrawCreateOrConnectWithoutUserInput
      | WithdrawCreateOrConnectWithoutUserInput[];
    createMany?: WithdrawCreateManyUserInputEnvelope;
    connect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
  };

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          TransactionCreateWithoutUserInput,
          TransactionUncheckedCreateWithoutUserInput
        >
      | TransactionCreateWithoutUserInput[]
      | TransactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutUserInput
      | TransactionCreateOrConnectWithoutUserInput[];
    createMany?: TransactionCreateManyUserInputEnvelope;
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type RolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<
      RolesCreateWithoutUsersInput,
      RolesUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput;
    upsert?: RolesUpsertWithoutUsersInput;
    connect?: RolesWhereUniqueInput;
    update?: XOR<
      XOR<
        RolesUpdateToOneWithWhereWithoutUsersInput,
        RolesUpdateWithoutUsersInput
      >,
      RolesUncheckedUpdateWithoutUsersInput
    >;
  };

  export type UserWithdrawAccountUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserWithdrawAccountCreateWithoutUserInput,
          UserWithdrawAccountUncheckedCreateWithoutUserInput
        >
      | UserWithdrawAccountCreateWithoutUserInput[]
      | UserWithdrawAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserWithdrawAccountCreateOrConnectWithoutUserInput
      | UserWithdrawAccountCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserWithdrawAccountUpsertWithWhereUniqueWithoutUserInput
      | UserWithdrawAccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserWithdrawAccountCreateManyUserInputEnvelope;
    set?:
      | UserWithdrawAccountWhereUniqueInput
      | UserWithdrawAccountWhereUniqueInput[];
    disconnect?:
      | UserWithdrawAccountWhereUniqueInput
      | UserWithdrawAccountWhereUniqueInput[];
    delete?:
      | UserWithdrawAccountWhereUniqueInput
      | UserWithdrawAccountWhereUniqueInput[];
    connect?:
      | UserWithdrawAccountWhereUniqueInput
      | UserWithdrawAccountWhereUniqueInput[];
    update?:
      | UserWithdrawAccountUpdateWithWhereUniqueWithoutUserInput
      | UserWithdrawAccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserWithdrawAccountUpdateManyWithWhereWithoutUserInput
      | UserWithdrawAccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | UserWithdrawAccountScalarWhereInput
      | UserWithdrawAccountScalarWhereInput[];
  };

  export type WalletUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
      | WalletCreateWithoutUserInput[]
      | WalletUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | WalletCreateOrConnectWithoutUserInput
      | WalletCreateOrConnectWithoutUserInput[];
    upsert?:
      | WalletUpsertWithWhereUniqueWithoutUserInput
      | WalletUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: WalletCreateManyUserInputEnvelope;
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[];
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[];
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[];
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[];
    update?:
      | WalletUpdateWithWhereUniqueWithoutUserInput
      | WalletUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | WalletUpdateManyWithWhereWithoutUserInput
      | WalletUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[];
  };

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutUserInput,
          PaymentUncheckedCreateWithoutUserInput
        >
      | PaymentCreateWithoutUserInput[]
      | PaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutUserInput
      | PaymentCreateOrConnectWithoutUserInput[];
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutUserInput
      | PaymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PaymentCreateManyUserInputEnvelope;
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    update?:
      | PaymentUpdateWithWhereUniqueWithoutUserInput
      | PaymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutUserInput
      | PaymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
  };

  export type WithdrawUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          WithdrawCreateWithoutUserInput,
          WithdrawUncheckedCreateWithoutUserInput
        >
      | WithdrawCreateWithoutUserInput[]
      | WithdrawUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | WithdrawCreateOrConnectWithoutUserInput
      | WithdrawCreateOrConnectWithoutUserInput[];
    upsert?:
      | WithdrawUpsertWithWhereUniqueWithoutUserInput
      | WithdrawUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: WithdrawCreateManyUserInputEnvelope;
    set?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    disconnect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    delete?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    connect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    update?:
      | WithdrawUpdateWithWhereUniqueWithoutUserInput
      | WithdrawUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | WithdrawUpdateManyWithWhereWithoutUserInput
      | WithdrawUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: WithdrawScalarWhereInput | WithdrawScalarWhereInput[];
  };

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          TransactionCreateWithoutUserInput,
          TransactionUncheckedCreateWithoutUserInput
        >
      | TransactionCreateWithoutUserInput[]
      | TransactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutUserInput
      | TransactionCreateOrConnectWithoutUserInput[];
    upsert?:
      | TransactionUpsertWithWhereUniqueWithoutUserInput
      | TransactionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: TransactionCreateManyUserInputEnvelope;
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    update?:
      | TransactionUpdateWithWhereUniqueWithoutUserInput
      | TransactionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | TransactionUpdateManyWithWhereWithoutUserInput
      | TransactionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
  };

  export type UserWithdrawAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserWithdrawAccountCreateWithoutUserInput,
          UserWithdrawAccountUncheckedCreateWithoutUserInput
        >
      | UserWithdrawAccountCreateWithoutUserInput[]
      | UserWithdrawAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserWithdrawAccountCreateOrConnectWithoutUserInput
      | UserWithdrawAccountCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserWithdrawAccountUpsertWithWhereUniqueWithoutUserInput
      | UserWithdrawAccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserWithdrawAccountCreateManyUserInputEnvelope;
    set?:
      | UserWithdrawAccountWhereUniqueInput
      | UserWithdrawAccountWhereUniqueInput[];
    disconnect?:
      | UserWithdrawAccountWhereUniqueInput
      | UserWithdrawAccountWhereUniqueInput[];
    delete?:
      | UserWithdrawAccountWhereUniqueInput
      | UserWithdrawAccountWhereUniqueInput[];
    connect?:
      | UserWithdrawAccountWhereUniqueInput
      | UserWithdrawAccountWhereUniqueInput[];
    update?:
      | UserWithdrawAccountUpdateWithWhereUniqueWithoutUserInput
      | UserWithdrawAccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserWithdrawAccountUpdateManyWithWhereWithoutUserInput
      | UserWithdrawAccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | UserWithdrawAccountScalarWhereInput
      | UserWithdrawAccountScalarWhereInput[];
  };

  export type WalletUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
      | WalletCreateWithoutUserInput[]
      | WalletUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | WalletCreateOrConnectWithoutUserInput
      | WalletCreateOrConnectWithoutUserInput[];
    upsert?:
      | WalletUpsertWithWhereUniqueWithoutUserInput
      | WalletUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: WalletCreateManyUserInputEnvelope;
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[];
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[];
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[];
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[];
    update?:
      | WalletUpdateWithWhereUniqueWithoutUserInput
      | WalletUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | WalletUpdateManyWithWhereWithoutUserInput
      | WalletUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[];
  };

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutUserInput,
          PaymentUncheckedCreateWithoutUserInput
        >
      | PaymentCreateWithoutUserInput[]
      | PaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutUserInput
      | PaymentCreateOrConnectWithoutUserInput[];
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutUserInput
      | PaymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PaymentCreateManyUserInputEnvelope;
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    update?:
      | PaymentUpdateWithWhereUniqueWithoutUserInput
      | PaymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutUserInput
      | PaymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
  };

  export type WithdrawUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          WithdrawCreateWithoutUserInput,
          WithdrawUncheckedCreateWithoutUserInput
        >
      | WithdrawCreateWithoutUserInput[]
      | WithdrawUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | WithdrawCreateOrConnectWithoutUserInput
      | WithdrawCreateOrConnectWithoutUserInput[];
    upsert?:
      | WithdrawUpsertWithWhereUniqueWithoutUserInput
      | WithdrawUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: WithdrawCreateManyUserInputEnvelope;
    set?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    disconnect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    delete?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    connect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    update?:
      | WithdrawUpdateWithWhereUniqueWithoutUserInput
      | WithdrawUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | WithdrawUpdateManyWithWhereWithoutUserInput
      | WithdrawUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: WithdrawScalarWhereInput | WithdrawScalarWhereInput[];
  };

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          TransactionCreateWithoutUserInput,
          TransactionUncheckedCreateWithoutUserInput
        >
      | TransactionCreateWithoutUserInput[]
      | TransactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutUserInput
      | TransactionCreateOrConnectWithoutUserInput[];
    upsert?:
      | TransactionUpsertWithWhereUniqueWithoutUserInput
      | TransactionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: TransactionCreateManyUserInputEnvelope;
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    update?:
      | TransactionUpdateWithWhereUniqueWithoutUserInput
      | TransactionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | TransactionUpdateManyWithWhereWithoutUserInput
      | TransactionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
  };

  export type UsersCreateNestedManyWithoutUser_roleInput = {
    create?:
      | XOR<
          UsersCreateWithoutUser_roleInput,
          UsersUncheckedCreateWithoutUser_roleInput
        >
      | UsersCreateWithoutUser_roleInput[]
      | UsersUncheckedCreateWithoutUser_roleInput[];
    connectOrCreate?:
      | UsersCreateOrConnectWithoutUser_roleInput
      | UsersCreateOrConnectWithoutUser_roleInput[];
    createMany?: UsersCreateManyUser_roleInputEnvelope;
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
  };

  export type UsersUncheckedCreateNestedManyWithoutUser_roleInput = {
    create?:
      | XOR<
          UsersCreateWithoutUser_roleInput,
          UsersUncheckedCreateWithoutUser_roleInput
        >
      | UsersCreateWithoutUser_roleInput[]
      | UsersUncheckedCreateWithoutUser_roleInput[];
    connectOrCreate?:
      | UsersCreateOrConnectWithoutUser_roleInput
      | UsersCreateOrConnectWithoutUser_roleInput[];
    createMany?: UsersCreateManyUser_roleInputEnvelope;
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
  };

  export type UsersUpdateManyWithoutUser_roleNestedInput = {
    create?:
      | XOR<
          UsersCreateWithoutUser_roleInput,
          UsersUncheckedCreateWithoutUser_roleInput
        >
      | UsersCreateWithoutUser_roleInput[]
      | UsersUncheckedCreateWithoutUser_roleInput[];
    connectOrCreate?:
      | UsersCreateOrConnectWithoutUser_roleInput
      | UsersCreateOrConnectWithoutUser_roleInput[];
    upsert?:
      | UsersUpsertWithWhereUniqueWithoutUser_roleInput
      | UsersUpsertWithWhereUniqueWithoutUser_roleInput[];
    createMany?: UsersCreateManyUser_roleInputEnvelope;
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    update?:
      | UsersUpdateWithWhereUniqueWithoutUser_roleInput
      | UsersUpdateWithWhereUniqueWithoutUser_roleInput[];
    updateMany?:
      | UsersUpdateManyWithWhereWithoutUser_roleInput
      | UsersUpdateManyWithWhereWithoutUser_roleInput[];
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[];
  };

  export type UsersUncheckedUpdateManyWithoutUser_roleNestedInput = {
    create?:
      | XOR<
          UsersCreateWithoutUser_roleInput,
          UsersUncheckedCreateWithoutUser_roleInput
        >
      | UsersCreateWithoutUser_roleInput[]
      | UsersUncheckedCreateWithoutUser_roleInput[];
    connectOrCreate?:
      | UsersCreateOrConnectWithoutUser_roleInput
      | UsersCreateOrConnectWithoutUser_roleInput[];
    upsert?:
      | UsersUpsertWithWhereUniqueWithoutUser_roleInput
      | UsersUpsertWithWhereUniqueWithoutUser_roleInput[];
    createMany?: UsersCreateManyUser_roleInputEnvelope;
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    update?:
      | UsersUpdateWithWhereUniqueWithoutUser_roleInput
      | UsersUpdateWithWhereUniqueWithoutUser_roleInput[];
    updateMany?:
      | UsersUpdateManyWithWhereWithoutUser_roleInput
      | UsersUpdateManyWithWhereWithoutUser_roleInput[];
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[];
  };

  export type UsersCreateNestedOneWithoutWithdrawaccountInput = {
    create?: XOR<
      UsersCreateWithoutWithdrawaccountInput,
      UsersUncheckedCreateWithoutWithdrawaccountInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutWithdrawaccountInput;
    connect?: UsersWhereUniqueInput;
  };

  export type WithdrawCreateNestedManyWithoutWithdrawaccountInput = {
    create?:
      | XOR<
          WithdrawCreateWithoutWithdrawaccountInput,
          WithdrawUncheckedCreateWithoutWithdrawaccountInput
        >
      | WithdrawCreateWithoutWithdrawaccountInput[]
      | WithdrawUncheckedCreateWithoutWithdrawaccountInput[];
    connectOrCreate?:
      | WithdrawCreateOrConnectWithoutWithdrawaccountInput
      | WithdrawCreateOrConnectWithoutWithdrawaccountInput[];
    createMany?: WithdrawCreateManyWithdrawaccountInputEnvelope;
    connect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
  };

  export type WithdrawUncheckedCreateNestedManyWithoutWithdrawaccountInput = {
    create?:
      | XOR<
          WithdrawCreateWithoutWithdrawaccountInput,
          WithdrawUncheckedCreateWithoutWithdrawaccountInput
        >
      | WithdrawCreateWithoutWithdrawaccountInput[]
      | WithdrawUncheckedCreateWithoutWithdrawaccountInput[];
    connectOrCreate?:
      | WithdrawCreateOrConnectWithoutWithdrawaccountInput
      | WithdrawCreateOrConnectWithoutWithdrawaccountInput[];
    createMany?: WithdrawCreateManyWithdrawaccountInputEnvelope;
    connect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
  };

  export type UsersUpdateOneRequiredWithoutWithdrawaccountNestedInput = {
    create?: XOR<
      UsersCreateWithoutWithdrawaccountInput,
      UsersUncheckedCreateWithoutWithdrawaccountInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutWithdrawaccountInput;
    upsert?: UsersUpsertWithoutWithdrawaccountInput;
    connect?: UsersWhereUniqueInput;
    update?: XOR<
      XOR<
        UsersUpdateToOneWithWhereWithoutWithdrawaccountInput,
        UsersUpdateWithoutWithdrawaccountInput
      >,
      UsersUncheckedUpdateWithoutWithdrawaccountInput
    >;
  };

  export type WithdrawUpdateManyWithoutWithdrawaccountNestedInput = {
    create?:
      | XOR<
          WithdrawCreateWithoutWithdrawaccountInput,
          WithdrawUncheckedCreateWithoutWithdrawaccountInput
        >
      | WithdrawCreateWithoutWithdrawaccountInput[]
      | WithdrawUncheckedCreateWithoutWithdrawaccountInput[];
    connectOrCreate?:
      | WithdrawCreateOrConnectWithoutWithdrawaccountInput
      | WithdrawCreateOrConnectWithoutWithdrawaccountInput[];
    upsert?:
      | WithdrawUpsertWithWhereUniqueWithoutWithdrawaccountInput
      | WithdrawUpsertWithWhereUniqueWithoutWithdrawaccountInput[];
    createMany?: WithdrawCreateManyWithdrawaccountInputEnvelope;
    set?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    disconnect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    delete?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    connect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    update?:
      | WithdrawUpdateWithWhereUniqueWithoutWithdrawaccountInput
      | WithdrawUpdateWithWhereUniqueWithoutWithdrawaccountInput[];
    updateMany?:
      | WithdrawUpdateManyWithWhereWithoutWithdrawaccountInput
      | WithdrawUpdateManyWithWhereWithoutWithdrawaccountInput[];
    deleteMany?: WithdrawScalarWhereInput | WithdrawScalarWhereInput[];
  };

  export type WithdrawUncheckedUpdateManyWithoutWithdrawaccountNestedInput = {
    create?:
      | XOR<
          WithdrawCreateWithoutWithdrawaccountInput,
          WithdrawUncheckedCreateWithoutWithdrawaccountInput
        >
      | WithdrawCreateWithoutWithdrawaccountInput[]
      | WithdrawUncheckedCreateWithoutWithdrawaccountInput[];
    connectOrCreate?:
      | WithdrawCreateOrConnectWithoutWithdrawaccountInput
      | WithdrawCreateOrConnectWithoutWithdrawaccountInput[];
    upsert?:
      | WithdrawUpsertWithWhereUniqueWithoutWithdrawaccountInput
      | WithdrawUpsertWithWhereUniqueWithoutWithdrawaccountInput[];
    createMany?: WithdrawCreateManyWithdrawaccountInputEnvelope;
    set?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    disconnect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    delete?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    connect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    update?:
      | WithdrawUpdateWithWhereUniqueWithoutWithdrawaccountInput
      | WithdrawUpdateWithWhereUniqueWithoutWithdrawaccountInput[];
    updateMany?:
      | WithdrawUpdateManyWithWhereWithoutWithdrawaccountInput
      | WithdrawUpdateManyWithWhereWithoutWithdrawaccountInput[];
    deleteMany?: WithdrawScalarWhereInput | WithdrawScalarWhereInput[];
  };

  export type PaymentCreateNestedManyWithoutAdmin_receiver_accountInput = {
    create?:
      | XOR<
          PaymentCreateWithoutAdmin_receiver_accountInput,
          PaymentUncheckedCreateWithoutAdmin_receiver_accountInput
        >
      | PaymentCreateWithoutAdmin_receiver_accountInput[]
      | PaymentUncheckedCreateWithoutAdmin_receiver_accountInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutAdmin_receiver_accountInput
      | PaymentCreateOrConnectWithoutAdmin_receiver_accountInput[];
    createMany?: PaymentCreateManyAdmin_receiver_accountInputEnvelope;
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
  };

  export type PaymentUncheckedCreateNestedManyWithoutAdmin_receiver_accountInput =
    {
      create?:
        | XOR<
            PaymentCreateWithoutAdmin_receiver_accountInput,
            PaymentUncheckedCreateWithoutAdmin_receiver_accountInput
          >
        | PaymentCreateWithoutAdmin_receiver_accountInput[]
        | PaymentUncheckedCreateWithoutAdmin_receiver_accountInput[];
      connectOrCreate?:
        | PaymentCreateOrConnectWithoutAdmin_receiver_accountInput
        | PaymentCreateOrConnectWithoutAdmin_receiver_accountInput[];
      createMany?: PaymentCreateManyAdmin_receiver_accountInputEnvelope;
      connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    };

  export type PaymentUpdateManyWithoutAdmin_receiver_accountNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutAdmin_receiver_accountInput,
          PaymentUncheckedCreateWithoutAdmin_receiver_accountInput
        >
      | PaymentCreateWithoutAdmin_receiver_accountInput[]
      | PaymentUncheckedCreateWithoutAdmin_receiver_accountInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutAdmin_receiver_accountInput
      | PaymentCreateOrConnectWithoutAdmin_receiver_accountInput[];
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutAdmin_receiver_accountInput
      | PaymentUpsertWithWhereUniqueWithoutAdmin_receiver_accountInput[];
    createMany?: PaymentCreateManyAdmin_receiver_accountInputEnvelope;
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    update?:
      | PaymentUpdateWithWhereUniqueWithoutAdmin_receiver_accountInput
      | PaymentUpdateWithWhereUniqueWithoutAdmin_receiver_accountInput[];
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutAdmin_receiver_accountInput
      | PaymentUpdateManyWithWhereWithoutAdmin_receiver_accountInput[];
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
  };

  export type PaymentUncheckedUpdateManyWithoutAdmin_receiver_accountNestedInput =
    {
      create?:
        | XOR<
            PaymentCreateWithoutAdmin_receiver_accountInput,
            PaymentUncheckedCreateWithoutAdmin_receiver_accountInput
          >
        | PaymentCreateWithoutAdmin_receiver_accountInput[]
        | PaymentUncheckedCreateWithoutAdmin_receiver_accountInput[];
      connectOrCreate?:
        | PaymentCreateOrConnectWithoutAdmin_receiver_accountInput
        | PaymentCreateOrConnectWithoutAdmin_receiver_accountInput[];
      upsert?:
        | PaymentUpsertWithWhereUniqueWithoutAdmin_receiver_accountInput
        | PaymentUpsertWithWhereUniqueWithoutAdmin_receiver_accountInput[];
      createMany?: PaymentCreateManyAdmin_receiver_accountInputEnvelope;
      set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
      disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
      delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
      connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
      update?:
        | PaymentUpdateWithWhereUniqueWithoutAdmin_receiver_accountInput
        | PaymentUpdateWithWhereUniqueWithoutAdmin_receiver_accountInput[];
      updateMany?:
        | PaymentUpdateManyWithWhereWithoutAdmin_receiver_accountInput
        | PaymentUpdateManyWithWhereWithoutAdmin_receiver_accountInput[];
      deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
    };

  export type UsersCreateNestedOneWithoutWalletInput = {
    create?: XOR<
      UsersCreateWithoutWalletInput,
      UsersUncheckedCreateWithoutWalletInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutWalletInput;
    connect?: UsersWhereUniqueInput;
  };

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type UsersUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<
      UsersCreateWithoutWalletInput,
      UsersUncheckedCreateWithoutWalletInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutWalletInput;
    upsert?: UsersUpsertWithoutWalletInput;
    connect?: UsersWhereUniqueInput;
    update?: XOR<
      XOR<
        UsersUpdateToOneWithWhereWithoutWalletInput,
        UsersUpdateWithoutWalletInput
      >,
      UsersUncheckedUpdateWithoutWalletInput
    >;
  };

  export type UsersCreateNestedOneWithoutPaymentInput = {
    create?: XOR<
      UsersCreateWithoutPaymentInput,
      UsersUncheckedCreateWithoutPaymentInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutPaymentInput;
    connect?: UsersWhereUniqueInput;
  };

  export type AdminCreateNestedOneWithoutPaymentInput = {
    create?: XOR<
      AdminCreateWithoutPaymentInput,
      AdminUncheckedCreateWithoutPaymentInput
    >;
    connectOrCreate?: AdminCreateOrConnectWithoutPaymentInput;
    connect?: AdminWhereUniqueInput;
  };

  export type AdminReceiverAccountCreateNestedOneWithoutPaymentInput = {
    create?: XOR<
      AdminReceiverAccountCreateWithoutPaymentInput,
      AdminReceiverAccountUncheckedCreateWithoutPaymentInput
    >;
    connectOrCreate?: AdminReceiverAccountCreateOrConnectWithoutPaymentInput;
    connect?: AdminReceiverAccountWhereUniqueInput;
  };

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type UsersUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<
      UsersCreateWithoutPaymentInput,
      UsersUncheckedCreateWithoutPaymentInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutPaymentInput;
    upsert?: UsersUpsertWithoutPaymentInput;
    connect?: UsersWhereUniqueInput;
    update?: XOR<
      XOR<
        UsersUpdateToOneWithWhereWithoutPaymentInput,
        UsersUpdateWithoutPaymentInput
      >,
      UsersUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type AdminUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<
      AdminCreateWithoutPaymentInput,
      AdminUncheckedCreateWithoutPaymentInput
    >;
    connectOrCreate?: AdminCreateOrConnectWithoutPaymentInput;
    upsert?: AdminUpsertWithoutPaymentInput;
    disconnect?: AdminWhereInput | boolean;
    delete?: AdminWhereInput | boolean;
    connect?: AdminWhereUniqueInput;
    update?: XOR<
      XOR<
        AdminUpdateToOneWithWhereWithoutPaymentInput,
        AdminUpdateWithoutPaymentInput
      >,
      AdminUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type AdminReceiverAccountUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<
      AdminReceiverAccountCreateWithoutPaymentInput,
      AdminReceiverAccountUncheckedCreateWithoutPaymentInput
    >;
    connectOrCreate?: AdminReceiverAccountCreateOrConnectWithoutPaymentInput;
    upsert?: AdminReceiverAccountUpsertWithoutPaymentInput;
    disconnect?: AdminReceiverAccountWhereInput | boolean;
    delete?: AdminReceiverAccountWhereInput | boolean;
    connect?: AdminReceiverAccountWhereUniqueInput;
    update?: XOR<
      XOR<
        AdminReceiverAccountUpdateToOneWithWhereWithoutPaymentInput,
        AdminReceiverAccountUpdateWithoutPaymentInput
      >,
      AdminReceiverAccountUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type UsersCreateNestedOneWithoutWithdrawInput = {
    create?: XOR<
      UsersCreateWithoutWithdrawInput,
      UsersUncheckedCreateWithoutWithdrawInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutWithdrawInput;
    connect?: UsersWhereUniqueInput;
  };

  export type AdminCreateNestedOneWithoutWithdrawInput = {
    create?: XOR<
      AdminCreateWithoutWithdrawInput,
      AdminUncheckedCreateWithoutWithdrawInput
    >;
    connectOrCreate?: AdminCreateOrConnectWithoutWithdrawInput;
    connect?: AdminWhereUniqueInput;
  };

  export type UserWithdrawAccountCreateNestedOneWithoutWithdrawInput = {
    create?: XOR<
      UserWithdrawAccountCreateWithoutWithdrawInput,
      UserWithdrawAccountUncheckedCreateWithoutWithdrawInput
    >;
    connectOrCreate?: UserWithdrawAccountCreateOrConnectWithoutWithdrawInput;
    connect?: UserWithdrawAccountWhereUniqueInput;
  };

  export type UsersUpdateOneRequiredWithoutWithdrawNestedInput = {
    create?: XOR<
      UsersCreateWithoutWithdrawInput,
      UsersUncheckedCreateWithoutWithdrawInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutWithdrawInput;
    upsert?: UsersUpsertWithoutWithdrawInput;
    connect?: UsersWhereUniqueInput;
    update?: XOR<
      XOR<
        UsersUpdateToOneWithWhereWithoutWithdrawInput,
        UsersUpdateWithoutWithdrawInput
      >,
      UsersUncheckedUpdateWithoutWithdrawInput
    >;
  };

  export type AdminUpdateOneWithoutWithdrawNestedInput = {
    create?: XOR<
      AdminCreateWithoutWithdrawInput,
      AdminUncheckedCreateWithoutWithdrawInput
    >;
    connectOrCreate?: AdminCreateOrConnectWithoutWithdrawInput;
    upsert?: AdminUpsertWithoutWithdrawInput;
    disconnect?: AdminWhereInput | boolean;
    delete?: AdminWhereInput | boolean;
    connect?: AdminWhereUniqueInput;
    update?: XOR<
      XOR<
        AdminUpdateToOneWithWhereWithoutWithdrawInput,
        AdminUpdateWithoutWithdrawInput
      >,
      AdminUncheckedUpdateWithoutWithdrawInput
    >;
  };

  export type UserWithdrawAccountUpdateOneRequiredWithoutWithdrawNestedInput = {
    create?: XOR<
      UserWithdrawAccountCreateWithoutWithdrawInput,
      UserWithdrawAccountUncheckedCreateWithoutWithdrawInput
    >;
    connectOrCreate?: UserWithdrawAccountCreateOrConnectWithoutWithdrawInput;
    upsert?: UserWithdrawAccountUpsertWithoutWithdrawInput;
    connect?: UserWithdrawAccountWhereUniqueInput;
    update?: XOR<
      XOR<
        UserWithdrawAccountUpdateToOneWithWhereWithoutWithdrawInput,
        UserWithdrawAccountUpdateWithoutWithdrawInput
      >,
      UserWithdrawAccountUncheckedUpdateWithoutWithdrawInput
    >;
  };

  export type AdminRolesCreateNestedOneWithoutAdminsInput = {
    create?: XOR<
      AdminRolesCreateWithoutAdminsInput,
      AdminRolesUncheckedCreateWithoutAdminsInput
    >;
    connectOrCreate?: AdminRolesCreateOrConnectWithoutAdminsInput;
    connect?: AdminRolesWhereUniqueInput;
  };

  export type PaymentCreateNestedManyWithoutAdminInput = {
    create?:
      | XOR<
          PaymentCreateWithoutAdminInput,
          PaymentUncheckedCreateWithoutAdminInput
        >
      | PaymentCreateWithoutAdminInput[]
      | PaymentUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutAdminInput
      | PaymentCreateOrConnectWithoutAdminInput[];
    createMany?: PaymentCreateManyAdminInputEnvelope;
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
  };

  export type WithdrawCreateNestedManyWithoutAdminInput = {
    create?:
      | XOR<
          WithdrawCreateWithoutAdminInput,
          WithdrawUncheckedCreateWithoutAdminInput
        >
      | WithdrawCreateWithoutAdminInput[]
      | WithdrawUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | WithdrawCreateOrConnectWithoutAdminInput
      | WithdrawCreateOrConnectWithoutAdminInput[];
    createMany?: WithdrawCreateManyAdminInputEnvelope;
    connect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
  };

  export type PaymentUncheckedCreateNestedManyWithoutAdminInput = {
    create?:
      | XOR<
          PaymentCreateWithoutAdminInput,
          PaymentUncheckedCreateWithoutAdminInput
        >
      | PaymentCreateWithoutAdminInput[]
      | PaymentUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutAdminInput
      | PaymentCreateOrConnectWithoutAdminInput[];
    createMany?: PaymentCreateManyAdminInputEnvelope;
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
  };

  export type WithdrawUncheckedCreateNestedManyWithoutAdminInput = {
    create?:
      | XOR<
          WithdrawCreateWithoutAdminInput,
          WithdrawUncheckedCreateWithoutAdminInput
        >
      | WithdrawCreateWithoutAdminInput[]
      | WithdrawUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | WithdrawCreateOrConnectWithoutAdminInput
      | WithdrawCreateOrConnectWithoutAdminInput[];
    createMany?: WithdrawCreateManyAdminInputEnvelope;
    connect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
  };

  export type AdminRolesUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<
      AdminRolesCreateWithoutAdminsInput,
      AdminRolesUncheckedCreateWithoutAdminsInput
    >;
    connectOrCreate?: AdminRolesCreateOrConnectWithoutAdminsInput;
    upsert?: AdminRolesUpsertWithoutAdminsInput;
    connect?: AdminRolesWhereUniqueInput;
    update?: XOR<
      XOR<
        AdminRolesUpdateToOneWithWhereWithoutAdminsInput,
        AdminRolesUpdateWithoutAdminsInput
      >,
      AdminRolesUncheckedUpdateWithoutAdminsInput
    >;
  };

  export type PaymentUpdateManyWithoutAdminNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutAdminInput,
          PaymentUncheckedCreateWithoutAdminInput
        >
      | PaymentCreateWithoutAdminInput[]
      | PaymentUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutAdminInput
      | PaymentCreateOrConnectWithoutAdminInput[];
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutAdminInput
      | PaymentUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: PaymentCreateManyAdminInputEnvelope;
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    update?:
      | PaymentUpdateWithWhereUniqueWithoutAdminInput
      | PaymentUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutAdminInput
      | PaymentUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
  };

  export type WithdrawUpdateManyWithoutAdminNestedInput = {
    create?:
      | XOR<
          WithdrawCreateWithoutAdminInput,
          WithdrawUncheckedCreateWithoutAdminInput
        >
      | WithdrawCreateWithoutAdminInput[]
      | WithdrawUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | WithdrawCreateOrConnectWithoutAdminInput
      | WithdrawCreateOrConnectWithoutAdminInput[];
    upsert?:
      | WithdrawUpsertWithWhereUniqueWithoutAdminInput
      | WithdrawUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: WithdrawCreateManyAdminInputEnvelope;
    set?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    disconnect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    delete?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    connect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    update?:
      | WithdrawUpdateWithWhereUniqueWithoutAdminInput
      | WithdrawUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?:
      | WithdrawUpdateManyWithWhereWithoutAdminInput
      | WithdrawUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: WithdrawScalarWhereInput | WithdrawScalarWhereInput[];
  };

  export type PaymentUncheckedUpdateManyWithoutAdminNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutAdminInput,
          PaymentUncheckedCreateWithoutAdminInput
        >
      | PaymentCreateWithoutAdminInput[]
      | PaymentUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutAdminInput
      | PaymentCreateOrConnectWithoutAdminInput[];
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutAdminInput
      | PaymentUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: PaymentCreateManyAdminInputEnvelope;
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    update?:
      | PaymentUpdateWithWhereUniqueWithoutAdminInput
      | PaymentUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutAdminInput
      | PaymentUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
  };

  export type WithdrawUncheckedUpdateManyWithoutAdminNestedInput = {
    create?:
      | XOR<
          WithdrawCreateWithoutAdminInput,
          WithdrawUncheckedCreateWithoutAdminInput
        >
      | WithdrawCreateWithoutAdminInput[]
      | WithdrawUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | WithdrawCreateOrConnectWithoutAdminInput
      | WithdrawCreateOrConnectWithoutAdminInput[];
    upsert?:
      | WithdrawUpsertWithWhereUniqueWithoutAdminInput
      | WithdrawUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: WithdrawCreateManyAdminInputEnvelope;
    set?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    disconnect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    delete?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    connect?: WithdrawWhereUniqueInput | WithdrawWhereUniqueInput[];
    update?:
      | WithdrawUpdateWithWhereUniqueWithoutAdminInput
      | WithdrawUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?:
      | WithdrawUpdateManyWithWhereWithoutAdminInput
      | WithdrawUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: WithdrawScalarWhereInput | WithdrawScalarWhereInput[];
  };

  export type AdminCreateNestedManyWithoutAdmin_roleInput = {
    create?:
      | XOR<
          AdminCreateWithoutAdmin_roleInput,
          AdminUncheckedCreateWithoutAdmin_roleInput
        >
      | AdminCreateWithoutAdmin_roleInput[]
      | AdminUncheckedCreateWithoutAdmin_roleInput[];
    connectOrCreate?:
      | AdminCreateOrConnectWithoutAdmin_roleInput
      | AdminCreateOrConnectWithoutAdmin_roleInput[];
    createMany?: AdminCreateManyAdmin_roleInputEnvelope;
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[];
  };

  export type AdminUncheckedCreateNestedManyWithoutAdmin_roleInput = {
    create?:
      | XOR<
          AdminCreateWithoutAdmin_roleInput,
          AdminUncheckedCreateWithoutAdmin_roleInput
        >
      | AdminCreateWithoutAdmin_roleInput[]
      | AdminUncheckedCreateWithoutAdmin_roleInput[];
    connectOrCreate?:
      | AdminCreateOrConnectWithoutAdmin_roleInput
      | AdminCreateOrConnectWithoutAdmin_roleInput[];
    createMany?: AdminCreateManyAdmin_roleInputEnvelope;
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[];
  };

  export type AdminUpdateManyWithoutAdmin_roleNestedInput = {
    create?:
      | XOR<
          AdminCreateWithoutAdmin_roleInput,
          AdminUncheckedCreateWithoutAdmin_roleInput
        >
      | AdminCreateWithoutAdmin_roleInput[]
      | AdminUncheckedCreateWithoutAdmin_roleInput[];
    connectOrCreate?:
      | AdminCreateOrConnectWithoutAdmin_roleInput
      | AdminCreateOrConnectWithoutAdmin_roleInput[];
    upsert?:
      | AdminUpsertWithWhereUniqueWithoutAdmin_roleInput
      | AdminUpsertWithWhereUniqueWithoutAdmin_roleInput[];
    createMany?: AdminCreateManyAdmin_roleInputEnvelope;
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[];
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[];
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[];
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[];
    update?:
      | AdminUpdateWithWhereUniqueWithoutAdmin_roleInput
      | AdminUpdateWithWhereUniqueWithoutAdmin_roleInput[];
    updateMany?:
      | AdminUpdateManyWithWhereWithoutAdmin_roleInput
      | AdminUpdateManyWithWhereWithoutAdmin_roleInput[];
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[];
  };

  export type AdminUncheckedUpdateManyWithoutAdmin_roleNestedInput = {
    create?:
      | XOR<
          AdminCreateWithoutAdmin_roleInput,
          AdminUncheckedCreateWithoutAdmin_roleInput
        >
      | AdminCreateWithoutAdmin_roleInput[]
      | AdminUncheckedCreateWithoutAdmin_roleInput[];
    connectOrCreate?:
      | AdminCreateOrConnectWithoutAdmin_roleInput
      | AdminCreateOrConnectWithoutAdmin_roleInput[];
    upsert?:
      | AdminUpsertWithWhereUniqueWithoutAdmin_roleInput
      | AdminUpsertWithWhereUniqueWithoutAdmin_roleInput[];
    createMany?: AdminCreateManyAdmin_roleInputEnvelope;
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[];
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[];
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[];
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[];
    update?:
      | AdminUpdateWithWhereUniqueWithoutAdmin_roleInput
      | AdminUpdateWithWhereUniqueWithoutAdmin_roleInput[];
    updateMany?:
      | AdminUpdateManyWithWhereWithoutAdmin_roleInput
      | AdminUpdateManyWithWhereWithoutAdmin_roleInput[];
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[];
  };

  export type UsersCreateNestedOneWithoutTransationInput = {
    create?: XOR<
      UsersCreateWithoutTransationInput,
      UsersUncheckedCreateWithoutTransationInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutTransationInput;
    connect?: UsersWhereUniqueInput;
  };

  export type TransactionTypeCreateNestedOneWithoutTransationInput = {
    create?: XOR<
      TransactionTypeCreateWithoutTransationInput,
      TransactionTypeUncheckedCreateWithoutTransationInput
    >;
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutTransationInput;
    connect?: TransactionTypeWhereUniqueInput;
  };

  export type UsersUpdateOneRequiredWithoutTransationNestedInput = {
    create?: XOR<
      UsersCreateWithoutTransationInput,
      UsersUncheckedCreateWithoutTransationInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutTransationInput;
    upsert?: UsersUpsertWithoutTransationInput;
    connect?: UsersWhereUniqueInput;
    update?: XOR<
      XOR<
        UsersUpdateToOneWithWhereWithoutTransationInput,
        UsersUpdateWithoutTransationInput
      >,
      UsersUncheckedUpdateWithoutTransationInput
    >;
  };

  export type TransactionTypeUpdateOneRequiredWithoutTransationNestedInput = {
    create?: XOR<
      TransactionTypeCreateWithoutTransationInput,
      TransactionTypeUncheckedCreateWithoutTransationInput
    >;
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutTransationInput;
    upsert?: TransactionTypeUpsertWithoutTransationInput;
    connect?: TransactionTypeWhereUniqueInput;
    update?: XOR<
      XOR<
        TransactionTypeUpdateToOneWithWhereWithoutTransationInput,
        TransactionTypeUpdateWithoutTransationInput
      >,
      TransactionTypeUncheckedUpdateWithoutTransationInput
    >;
  };

  export type TransactionCreateNestedManyWithoutTransaction_typeInput = {
    create?:
      | XOR<
          TransactionCreateWithoutTransaction_typeInput,
          TransactionUncheckedCreateWithoutTransaction_typeInput
        >
      | TransactionCreateWithoutTransaction_typeInput[]
      | TransactionUncheckedCreateWithoutTransaction_typeInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutTransaction_typeInput
      | TransactionCreateOrConnectWithoutTransaction_typeInput[];
    createMany?: TransactionCreateManyTransaction_typeInputEnvelope;
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
  };

  export type TransactionUncheckedCreateNestedManyWithoutTransaction_typeInput =
    {
      create?:
        | XOR<
            TransactionCreateWithoutTransaction_typeInput,
            TransactionUncheckedCreateWithoutTransaction_typeInput
          >
        | TransactionCreateWithoutTransaction_typeInput[]
        | TransactionUncheckedCreateWithoutTransaction_typeInput[];
      connectOrCreate?:
        | TransactionCreateOrConnectWithoutTransaction_typeInput
        | TransactionCreateOrConnectWithoutTransaction_typeInput[];
      createMany?: TransactionCreateManyTransaction_typeInputEnvelope;
      connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    };

  export type TransactionUpdateManyWithoutTransaction_typeNestedInput = {
    create?:
      | XOR<
          TransactionCreateWithoutTransaction_typeInput,
          TransactionUncheckedCreateWithoutTransaction_typeInput
        >
      | TransactionCreateWithoutTransaction_typeInput[]
      | TransactionUncheckedCreateWithoutTransaction_typeInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutTransaction_typeInput
      | TransactionCreateOrConnectWithoutTransaction_typeInput[];
    upsert?:
      | TransactionUpsertWithWhereUniqueWithoutTransaction_typeInput
      | TransactionUpsertWithWhereUniqueWithoutTransaction_typeInput[];
    createMany?: TransactionCreateManyTransaction_typeInputEnvelope;
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    update?:
      | TransactionUpdateWithWhereUniqueWithoutTransaction_typeInput
      | TransactionUpdateWithWhereUniqueWithoutTransaction_typeInput[];
    updateMany?:
      | TransactionUpdateManyWithWhereWithoutTransaction_typeInput
      | TransactionUpdateManyWithWhereWithoutTransaction_typeInput[];
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
  };

  export type TransactionUncheckedUpdateManyWithoutTransaction_typeNestedInput =
    {
      create?:
        | XOR<
            TransactionCreateWithoutTransaction_typeInput,
            TransactionUncheckedCreateWithoutTransaction_typeInput
          >
        | TransactionCreateWithoutTransaction_typeInput[]
        | TransactionUncheckedCreateWithoutTransaction_typeInput[];
      connectOrCreate?:
        | TransactionCreateOrConnectWithoutTransaction_typeInput
        | TransactionCreateOrConnectWithoutTransaction_typeInput[];
      upsert?:
        | TransactionUpsertWithWhereUniqueWithoutTransaction_typeInput
        | TransactionUpsertWithWhereUniqueWithoutTransaction_typeInput[];
      createMany?: TransactionCreateManyTransaction_typeInputEnvelope;
      set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
      disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
      delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
      connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
      update?:
        | TransactionUpdateWithWhereUniqueWithoutTransaction_typeInput
        | TransactionUpdateWithWhereUniqueWithoutTransaction_typeInput[];
      updateMany?:
        | TransactionUpdateManyWithWhereWithoutTransaction_typeInput
        | TransactionUpdateManyWithWhereWithoutTransaction_typeInput[];
      deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
    };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
  };

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
        | null;
      in?:
        | Decimal[]
        | DecimalJsLike[]
        | number[]
        | string[]
        | ListDecimalFieldRefInput<$PrismaModel>
        | null;
      notIn?:
        | Decimal[]
        | DecimalJsLike[]
        | number[]
        | string[]
        | ListDecimalFieldRefInput<$PrismaModel>
        | null;
      lt?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      lte?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      gt?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      gte?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      not?:
        | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _avg?: NestedDecimalNullableFilter<$PrismaModel>;
      _sum?: NestedDecimalNullableFilter<$PrismaModel>;
      _min?: NestedDecimalNullableFilter<$PrismaModel>;
      _max?: NestedDecimalNullableFilter<$PrismaModel>;
    };

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type RolesCreateWithoutUsersInput = {
    role_id: number;
    name: string;
  };

  export type RolesUncheckedCreateWithoutUsersInput = {
    role_id: number;
    name: string;
  };

  export type RolesCreateOrConnectWithoutUsersInput = {
    where: RolesWhereUniqueInput;
    create: XOR<
      RolesCreateWithoutUsersInput,
      RolesUncheckedCreateWithoutUsersInput
    >;
  };

  export type UserWithdrawAccountCreateWithoutUserInput = {
    user_withdraw_account_id: string;
    account_type: string;
    account_name: string;
    account_id: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    withdraw?: WithdrawCreateNestedManyWithoutWithdrawaccountInput;
  };

  export type UserWithdrawAccountUncheckedCreateWithoutUserInput = {
    user_withdraw_account_id: string;
    account_type: string;
    account_name: string;
    account_id: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    withdraw?: WithdrawUncheckedCreateNestedManyWithoutWithdrawaccountInput;
  };

  export type UserWithdrawAccountCreateOrConnectWithoutUserInput = {
    where: UserWithdrawAccountWhereUniqueInput;
    create: XOR<
      UserWithdrawAccountCreateWithoutUserInput,
      UserWithdrawAccountUncheckedCreateWithoutUserInput
    >;
  };

  export type UserWithdrawAccountCreateManyUserInputEnvelope = {
    data:
      | UserWithdrawAccountCreateManyUserInput
      | UserWithdrawAccountCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type WalletCreateWithoutUserInput = {
    wallet_id: string;
    game_amount?: Decimal | DecimalJsLike | number | string | null;
    main_amount?: Decimal | DecimalJsLike | number | string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type WalletUncheckedCreateWithoutUserInput = {
    wallet_id: string;
    game_amount?: Decimal | DecimalJsLike | number | string | null;
    main_amount?: Decimal | DecimalJsLike | number | string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput;
    create: XOR<
      WalletCreateWithoutUserInput,
      WalletUncheckedCreateWithoutUserInput
    >;
  };

  export type WalletCreateManyUserInputEnvelope = {
    data: WalletCreateManyUserInput | WalletCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PaymentCreateWithoutUserInput = {
    payment_internal_id: string;
    payment_type: string;
    payment_account_name: string;
    payment_account: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    approve_reject: number;
    reason_for_reject?: string | null;
    payment_confirm_code: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    admin?: AdminCreateNestedOneWithoutPaymentInput;
    admin_receiver_account?: AdminReceiverAccountCreateNestedOneWithoutPaymentInput;
  };

  export type PaymentUncheckedCreateWithoutUserInput = {
    payment_internal_id: string;
    admin_internal_id?: string | null;
    payment_type: string;
    payment_account_name: string;
    payment_account: string;
    admin_receiver_account_id?: string | null;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    approve_reject: number;
    reason_for_reject?: string | null;
    payment_confirm_code: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput;
    create: XOR<
      PaymentCreateWithoutUserInput,
      PaymentUncheckedCreateWithoutUserInput
    >;
  };

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type WithdrawCreateWithoutUserInput = {
    withdraw_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    withdraw_confirm_code?: string | null;
    is_verify?: number | null;
    approve_reject: number;
    reason_for_reject?: string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    admin?: AdminCreateNestedOneWithoutWithdrawInput;
    withdrawaccount: UserWithdrawAccountCreateNestedOneWithoutWithdrawInput;
  };

  export type WithdrawUncheckedCreateWithoutUserInput = {
    withdraw_id: string;
    admin_internal_id?: string | null;
    user_withdraw_account_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    withdraw_confirm_code?: string | null;
    is_verify?: number | null;
    approve_reject: number;
    reason_for_reject?: string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type WithdrawCreateOrConnectWithoutUserInput = {
    where: WithdrawWhereUniqueInput;
    create: XOR<
      WithdrawCreateWithoutUserInput,
      WithdrawUncheckedCreateWithoutUserInput
    >;
  };

  export type WithdrawCreateManyUserInputEnvelope = {
    data: WithdrawCreateManyUserInput | WithdrawCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type TransactionCreateWithoutUserInput = {
    transaction_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    transaction_date: Date | string;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    transaction_type: TransactionTypeCreateNestedOneWithoutTransationInput;
  };

  export type TransactionUncheckedCreateWithoutUserInput = {
    transaction_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    transaction_type_id: number;
    transaction_date: Date | string;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput;
    create: XOR<
      TransactionCreateWithoutUserInput,
      TransactionUncheckedCreateWithoutUserInput
    >;
  };

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type RolesUpsertWithoutUsersInput = {
    update: XOR<
      RolesUpdateWithoutUsersInput,
      RolesUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      RolesCreateWithoutUsersInput,
      RolesUncheckedCreateWithoutUsersInput
    >;
    where?: RolesWhereInput;
  };

  export type RolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: RolesWhereInput;
    data: XOR<
      RolesUpdateWithoutUsersInput,
      RolesUncheckedUpdateWithoutUsersInput
    >;
  };

  export type RolesUpdateWithoutUsersInput = {
    role_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type RolesUncheckedUpdateWithoutUsersInput = {
    role_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type UserWithdrawAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: UserWithdrawAccountWhereUniqueInput;
    update: XOR<
      UserWithdrawAccountUpdateWithoutUserInput,
      UserWithdrawAccountUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      UserWithdrawAccountCreateWithoutUserInput,
      UserWithdrawAccountUncheckedCreateWithoutUserInput
    >;
  };

  export type UserWithdrawAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: UserWithdrawAccountWhereUniqueInput;
    data: XOR<
      UserWithdrawAccountUpdateWithoutUserInput,
      UserWithdrawAccountUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserWithdrawAccountUpdateManyWithWhereWithoutUserInput = {
    where: UserWithdrawAccountScalarWhereInput;
    data: XOR<
      UserWithdrawAccountUpdateManyMutationInput,
      UserWithdrawAccountUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type UserWithdrawAccountScalarWhereInput = {
    AND?:
      | UserWithdrawAccountScalarWhereInput
      | UserWithdrawAccountScalarWhereInput[];
    OR?: UserWithdrawAccountScalarWhereInput[];
    NOT?:
      | UserWithdrawAccountScalarWhereInput
      | UserWithdrawAccountScalarWhereInput[];
    user_withdraw_account_id?: StringFilter<'UserWithdrawAccount'> | string;
    user_internal_id?: StringFilter<'UserWithdrawAccount'> | string;
    account_type?: StringFilter<'UserWithdrawAccount'> | string;
    account_name?: StringFilter<'UserWithdrawAccount'> | string;
    account_id?: IntFilter<'UserWithdrawAccount'> | number;
    delete_status?: IntFilter<'UserWithdrawAccount'> | number;
    register_date?: DateTimeFilter<'UserWithdrawAccount'> | Date | string;
    updated_date?: DateTimeFilter<'UserWithdrawAccount'> | Date | string;
    deleted_date?:
      | DateTimeNullableFilter<'UserWithdrawAccount'>
      | Date
      | string
      | null;
  };

  export type WalletUpsertWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput;
    update: XOR<
      WalletUpdateWithoutUserInput,
      WalletUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      WalletCreateWithoutUserInput,
      WalletUncheckedCreateWithoutUserInput
    >;
  };

  export type WalletUpdateWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput;
    data: XOR<
      WalletUpdateWithoutUserInput,
      WalletUncheckedUpdateWithoutUserInput
    >;
  };

  export type WalletUpdateManyWithWhereWithoutUserInput = {
    where: WalletScalarWhereInput;
    data: XOR<
      WalletUpdateManyMutationInput,
      WalletUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type WalletScalarWhereInput = {
    AND?: WalletScalarWhereInput | WalletScalarWhereInput[];
    OR?: WalletScalarWhereInput[];
    NOT?: WalletScalarWhereInput | WalletScalarWhereInput[];
    wallet_id?: StringFilter<'Wallet'> | string;
    user_internal_id?: StringFilter<'Wallet'> | string;
    game_amount?:
      | DecimalNullableFilter<'Wallet'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    main_amount?:
      | DecimalNullableFilter<'Wallet'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    delete_status?: IntFilter<'Wallet'> | number;
    register_date?: DateTimeFilter<'Wallet'> | Date | string;
    updated_date?: DateTimeFilter<'Wallet'> | Date | string;
    deleted_date?: DateTimeNullableFilter<'Wallet'> | Date | string | null;
  };

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput;
    update: XOR<
      PaymentUpdateWithoutUserInput,
      PaymentUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PaymentCreateWithoutUserInput,
      PaymentUncheckedCreateWithoutUserInput
    >;
  };

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput;
    data: XOR<
      PaymentUpdateWithoutUserInput,
      PaymentUncheckedUpdateWithoutUserInput
    >;
  };

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput;
    data: XOR<
      PaymentUpdateManyMutationInput,
      PaymentUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
    OR?: PaymentScalarWhereInput[];
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
    payment_internal_id?: StringFilter<'Payment'> | string;
    user_internal_id?: StringFilter<'Payment'> | string;
    admin_internal_id?: StringNullableFilter<'Payment'> | string | null;
    payment_type?: StringFilter<'Payment'> | string;
    payment_account_name?: StringFilter<'Payment'> | string;
    payment_account?: StringFilter<'Payment'> | string;
    admin_receiver_account_id?: StringNullableFilter<'Payment'> | string | null;
    amount?:
      | DecimalFilter<'Payment'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFilter<'Payment'> | Date | string;
    approve_reject?: IntFilter<'Payment'> | number;
    reason_for_reject?: StringNullableFilter<'Payment'> | string | null;
    payment_confirm_code?: IntFilter<'Payment'> | number;
    delete_status?: IntFilter<'Payment'> | number;
    register_date?: DateTimeFilter<'Payment'> | Date | string;
    updated_date?: DateTimeFilter<'Payment'> | Date | string;
    deleted_date?: DateTimeNullableFilter<'Payment'> | Date | string | null;
  };

  export type WithdrawUpsertWithWhereUniqueWithoutUserInput = {
    where: WithdrawWhereUniqueInput;
    update: XOR<
      WithdrawUpdateWithoutUserInput,
      WithdrawUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      WithdrawCreateWithoutUserInput,
      WithdrawUncheckedCreateWithoutUserInput
    >;
  };

  export type WithdrawUpdateWithWhereUniqueWithoutUserInput = {
    where: WithdrawWhereUniqueInput;
    data: XOR<
      WithdrawUpdateWithoutUserInput,
      WithdrawUncheckedUpdateWithoutUserInput
    >;
  };

  export type WithdrawUpdateManyWithWhereWithoutUserInput = {
    where: WithdrawScalarWhereInput;
    data: XOR<
      WithdrawUpdateManyMutationInput,
      WithdrawUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type WithdrawScalarWhereInput = {
    AND?: WithdrawScalarWhereInput | WithdrawScalarWhereInput[];
    OR?: WithdrawScalarWhereInput[];
    NOT?: WithdrawScalarWhereInput | WithdrawScalarWhereInput[];
    withdraw_id?: StringFilter<'Withdraw'> | string;
    user_internal_id?: StringFilter<'Withdraw'> | string;
    admin_internal_id?: StringNullableFilter<'Withdraw'> | string | null;
    user_withdraw_account_id?: StringFilter<'Withdraw'> | string;
    amount?:
      | DecimalFilter<'Withdraw'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFilter<'Withdraw'> | Date | string;
    withdraw_confirm_code?: StringNullableFilter<'Withdraw'> | string | null;
    is_verify?: IntNullableFilter<'Withdraw'> | number | null;
    approve_reject?: IntFilter<'Withdraw'> | number;
    reason_for_reject?: StringNullableFilter<'Withdraw'> | string | null;
    delete_status?: IntFilter<'Withdraw'> | number;
    register_date?: DateTimeFilter<'Withdraw'> | Date | string;
    updated_date?: DateTimeFilter<'Withdraw'> | Date | string;
    deleted_date?: DateTimeNullableFilter<'Withdraw'> | Date | string | null;
  };

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput;
    update: XOR<
      TransactionUpdateWithoutUserInput,
      TransactionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      TransactionCreateWithoutUserInput,
      TransactionUncheckedCreateWithoutUserInput
    >;
  };

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput;
    data: XOR<
      TransactionUpdateWithoutUserInput,
      TransactionUncheckedUpdateWithoutUserInput
    >;
  };

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput;
    data: XOR<
      TransactionUpdateManyMutationInput,
      TransactionUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
    OR?: TransactionScalarWhereInput[];
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
    transaction_id?: StringFilter<'Transaction'> | string;
    user_internal_id?: StringFilter<'Transaction'> | string;
    amount?:
      | DecimalFilter<'Transaction'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    transaction_type_id?: IntFilter<'Transaction'> | number;
    transaction_date?: DateTimeFilter<'Transaction'> | Date | string;
    delete_status?: IntFilter<'Transaction'> | number;
    register_date?: DateTimeFilter<'Transaction'> | Date | string;
    updated_date?: DateTimeFilter<'Transaction'> | Date | string;
    deleted_date?: DateTimeNullableFilter<'Transaction'> | Date | string | null;
  };

  export type UsersCreateWithoutUser_roleInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    withdrawaccount?: UserWithdrawAccountCreateNestedManyWithoutUserInput;
    wallet?: WalletCreateNestedManyWithoutUserInput;
    payment?: PaymentCreateNestedManyWithoutUserInput;
    withdraw?: WithdrawCreateNestedManyWithoutUserInput;
    transation?: TransactionCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateWithoutUser_roleInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    withdrawaccount?: UserWithdrawAccountUncheckedCreateNestedManyWithoutUserInput;
    wallet?: WalletUncheckedCreateNestedManyWithoutUserInput;
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput;
    withdraw?: WithdrawUncheckedCreateNestedManyWithoutUserInput;
    transation?: TransactionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersCreateOrConnectWithoutUser_roleInput = {
    where: UsersWhereUniqueInput;
    create: XOR<
      UsersCreateWithoutUser_roleInput,
      UsersUncheckedCreateWithoutUser_roleInput
    >;
  };

  export type UsersCreateManyUser_roleInputEnvelope = {
    data: UsersCreateManyUser_roleInput | UsersCreateManyUser_roleInput[];
    skipDuplicates?: boolean;
  };

  export type UsersUpsertWithWhereUniqueWithoutUser_roleInput = {
    where: UsersWhereUniqueInput;
    update: XOR<
      UsersUpdateWithoutUser_roleInput,
      UsersUncheckedUpdateWithoutUser_roleInput
    >;
    create: XOR<
      UsersCreateWithoutUser_roleInput,
      UsersUncheckedCreateWithoutUser_roleInput
    >;
  };

  export type UsersUpdateWithWhereUniqueWithoutUser_roleInput = {
    where: UsersWhereUniqueInput;
    data: XOR<
      UsersUpdateWithoutUser_roleInput,
      UsersUncheckedUpdateWithoutUser_roleInput
    >;
  };

  export type UsersUpdateManyWithWhereWithoutUser_roleInput = {
    where: UsersScalarWhereInput;
    data: XOR<
      UsersUpdateManyMutationInput,
      UsersUncheckedUpdateManyWithoutUser_roleInput
    >;
  };

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[];
    OR?: UsersScalarWhereInput[];
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[];
    user_internal_id?: StringFilter<'Users'> | string;
    phone_number?: StringFilter<'Users'> | string;
    user_name?: StringNullableFilter<'Users'> | string | null;
    password?: StringNullableFilter<'Users'> | string | null;
    otp_code?: StringNullableFilter<'Users'> | string | null;
    role_id?: IntFilter<'Users'> | number;
    sms_send_time?: DateTimeNullableFilter<'Users'> | Date | string | null;
    is_verify?: IntNullableFilter<'Users'> | number | null;
    account_status?: IntNullableFilter<'Users'> | number | null;
    delete_status?: IntFilter<'Users'> | number;
    register_date?: DateTimeFilter<'Users'> | Date | string;
    updated_date?: DateTimeFilter<'Users'> | Date | string;
    deleted_date?: DateTimeNullableFilter<'Users'> | Date | string | null;
  };

  export type UsersCreateWithoutWithdrawaccountInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user_role: RolesCreateNestedOneWithoutUsersInput;
    wallet?: WalletCreateNestedManyWithoutUserInput;
    payment?: PaymentCreateNestedManyWithoutUserInput;
    withdraw?: WithdrawCreateNestedManyWithoutUserInput;
    transation?: TransactionCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateWithoutWithdrawaccountInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    role_id: number;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    wallet?: WalletUncheckedCreateNestedManyWithoutUserInput;
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput;
    withdraw?: WithdrawUncheckedCreateNestedManyWithoutUserInput;
    transation?: TransactionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersCreateOrConnectWithoutWithdrawaccountInput = {
    where: UsersWhereUniqueInput;
    create: XOR<
      UsersCreateWithoutWithdrawaccountInput,
      UsersUncheckedCreateWithoutWithdrawaccountInput
    >;
  };

  export type WithdrawCreateWithoutWithdrawaccountInput = {
    withdraw_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    withdraw_confirm_code?: string | null;
    is_verify?: number | null;
    approve_reject: number;
    reason_for_reject?: string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user: UsersCreateNestedOneWithoutWithdrawInput;
    admin?: AdminCreateNestedOneWithoutWithdrawInput;
  };

  export type WithdrawUncheckedCreateWithoutWithdrawaccountInput = {
    withdraw_id: string;
    user_internal_id: string;
    admin_internal_id?: string | null;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    withdraw_confirm_code?: string | null;
    is_verify?: number | null;
    approve_reject: number;
    reason_for_reject?: string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type WithdrawCreateOrConnectWithoutWithdrawaccountInput = {
    where: WithdrawWhereUniqueInput;
    create: XOR<
      WithdrawCreateWithoutWithdrawaccountInput,
      WithdrawUncheckedCreateWithoutWithdrawaccountInput
    >;
  };

  export type WithdrawCreateManyWithdrawaccountInputEnvelope = {
    data:
      | WithdrawCreateManyWithdrawaccountInput
      | WithdrawCreateManyWithdrawaccountInput[];
    skipDuplicates?: boolean;
  };

  export type UsersUpsertWithoutWithdrawaccountInput = {
    update: XOR<
      UsersUpdateWithoutWithdrawaccountInput,
      UsersUncheckedUpdateWithoutWithdrawaccountInput
    >;
    create: XOR<
      UsersCreateWithoutWithdrawaccountInput,
      UsersUncheckedCreateWithoutWithdrawaccountInput
    >;
    where?: UsersWhereInput;
  };

  export type UsersUpdateToOneWithWhereWithoutWithdrawaccountInput = {
    where?: UsersWhereInput;
    data: XOR<
      UsersUpdateWithoutWithdrawaccountInput,
      UsersUncheckedUpdateWithoutWithdrawaccountInput
    >;
  };

  export type UsersUpdateWithoutWithdrawaccountInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user_role?: RolesUpdateOneRequiredWithoutUsersNestedInput;
    wallet?: WalletUpdateManyWithoutUserNestedInput;
    payment?: PaymentUpdateManyWithoutUserNestedInput;
    withdraw?: WithdrawUpdateManyWithoutUserNestedInput;
    transation?: TransactionUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateWithoutWithdrawaccountInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: IntFieldUpdateOperationsInput | number;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    wallet?: WalletUncheckedUpdateManyWithoutUserNestedInput;
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput;
    withdraw?: WithdrawUncheckedUpdateManyWithoutUserNestedInput;
    transation?: TransactionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type WithdrawUpsertWithWhereUniqueWithoutWithdrawaccountInput = {
    where: WithdrawWhereUniqueInput;
    update: XOR<
      WithdrawUpdateWithoutWithdrawaccountInput,
      WithdrawUncheckedUpdateWithoutWithdrawaccountInput
    >;
    create: XOR<
      WithdrawCreateWithoutWithdrawaccountInput,
      WithdrawUncheckedCreateWithoutWithdrawaccountInput
    >;
  };

  export type WithdrawUpdateWithWhereUniqueWithoutWithdrawaccountInput = {
    where: WithdrawWhereUniqueInput;
    data: XOR<
      WithdrawUpdateWithoutWithdrawaccountInput,
      WithdrawUncheckedUpdateWithoutWithdrawaccountInput
    >;
  };

  export type WithdrawUpdateManyWithWhereWithoutWithdrawaccountInput = {
    where: WithdrawScalarWhereInput;
    data: XOR<
      WithdrawUpdateManyMutationInput,
      WithdrawUncheckedUpdateManyWithoutWithdrawaccountInput
    >;
  };

  export type PaymentCreateWithoutAdmin_receiver_accountInput = {
    payment_internal_id: string;
    payment_type: string;
    payment_account_name: string;
    payment_account: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    approve_reject: number;
    reason_for_reject?: string | null;
    payment_confirm_code: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user: UsersCreateNestedOneWithoutPaymentInput;
    admin?: AdminCreateNestedOneWithoutPaymentInput;
  };

  export type PaymentUncheckedCreateWithoutAdmin_receiver_accountInput = {
    payment_internal_id: string;
    user_internal_id: string;
    admin_internal_id?: string | null;
    payment_type: string;
    payment_account_name: string;
    payment_account: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    approve_reject: number;
    reason_for_reject?: string | null;
    payment_confirm_code: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type PaymentCreateOrConnectWithoutAdmin_receiver_accountInput = {
    where: PaymentWhereUniqueInput;
    create: XOR<
      PaymentCreateWithoutAdmin_receiver_accountInput,
      PaymentUncheckedCreateWithoutAdmin_receiver_accountInput
    >;
  };

  export type PaymentCreateManyAdmin_receiver_accountInputEnvelope = {
    data:
      | PaymentCreateManyAdmin_receiver_accountInput
      | PaymentCreateManyAdmin_receiver_accountInput[];
    skipDuplicates?: boolean;
  };

  export type PaymentUpsertWithWhereUniqueWithoutAdmin_receiver_accountInput = {
    where: PaymentWhereUniqueInput;
    update: XOR<
      PaymentUpdateWithoutAdmin_receiver_accountInput,
      PaymentUncheckedUpdateWithoutAdmin_receiver_accountInput
    >;
    create: XOR<
      PaymentCreateWithoutAdmin_receiver_accountInput,
      PaymentUncheckedCreateWithoutAdmin_receiver_accountInput
    >;
  };

  export type PaymentUpdateWithWhereUniqueWithoutAdmin_receiver_accountInput = {
    where: PaymentWhereUniqueInput;
    data: XOR<
      PaymentUpdateWithoutAdmin_receiver_accountInput,
      PaymentUncheckedUpdateWithoutAdmin_receiver_accountInput
    >;
  };

  export type PaymentUpdateManyWithWhereWithoutAdmin_receiver_accountInput = {
    where: PaymentScalarWhereInput;
    data: XOR<
      PaymentUpdateManyMutationInput,
      PaymentUncheckedUpdateManyWithoutAdmin_receiver_accountInput
    >;
  };

  export type UsersCreateWithoutWalletInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user_role: RolesCreateNestedOneWithoutUsersInput;
    withdrawaccount?: UserWithdrawAccountCreateNestedManyWithoutUserInput;
    payment?: PaymentCreateNestedManyWithoutUserInput;
    withdraw?: WithdrawCreateNestedManyWithoutUserInput;
    transation?: TransactionCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateWithoutWalletInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    role_id: number;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    withdrawaccount?: UserWithdrawAccountUncheckedCreateNestedManyWithoutUserInput;
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput;
    withdraw?: WithdrawUncheckedCreateNestedManyWithoutUserInput;
    transation?: TransactionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersCreateOrConnectWithoutWalletInput = {
    where: UsersWhereUniqueInput;
    create: XOR<
      UsersCreateWithoutWalletInput,
      UsersUncheckedCreateWithoutWalletInput
    >;
  };

  export type UsersUpsertWithoutWalletInput = {
    update: XOR<
      UsersUpdateWithoutWalletInput,
      UsersUncheckedUpdateWithoutWalletInput
    >;
    create: XOR<
      UsersCreateWithoutWalletInput,
      UsersUncheckedCreateWithoutWalletInput
    >;
    where?: UsersWhereInput;
  };

  export type UsersUpdateToOneWithWhereWithoutWalletInput = {
    where?: UsersWhereInput;
    data: XOR<
      UsersUpdateWithoutWalletInput,
      UsersUncheckedUpdateWithoutWalletInput
    >;
  };

  export type UsersUpdateWithoutWalletInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user_role?: RolesUpdateOneRequiredWithoutUsersNestedInput;
    withdrawaccount?: UserWithdrawAccountUpdateManyWithoutUserNestedInput;
    payment?: PaymentUpdateManyWithoutUserNestedInput;
    withdraw?: WithdrawUpdateManyWithoutUserNestedInput;
    transation?: TransactionUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateWithoutWalletInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: IntFieldUpdateOperationsInput | number;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    withdrawaccount?: UserWithdrawAccountUncheckedUpdateManyWithoutUserNestedInput;
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput;
    withdraw?: WithdrawUncheckedUpdateManyWithoutUserNestedInput;
    transation?: TransactionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UsersCreateWithoutPaymentInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user_role: RolesCreateNestedOneWithoutUsersInput;
    withdrawaccount?: UserWithdrawAccountCreateNestedManyWithoutUserInput;
    wallet?: WalletCreateNestedManyWithoutUserInput;
    withdraw?: WithdrawCreateNestedManyWithoutUserInput;
    transation?: TransactionCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateWithoutPaymentInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    role_id: number;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    withdrawaccount?: UserWithdrawAccountUncheckedCreateNestedManyWithoutUserInput;
    wallet?: WalletUncheckedCreateNestedManyWithoutUserInput;
    withdraw?: WithdrawUncheckedCreateNestedManyWithoutUserInput;
    transation?: TransactionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersCreateOrConnectWithoutPaymentInput = {
    where: UsersWhereUniqueInput;
    create: XOR<
      UsersCreateWithoutPaymentInput,
      UsersUncheckedCreateWithoutPaymentInput
    >;
  };

  export type AdminCreateWithoutPaymentInput = {
    admin_internal_id: string;
    admin_id: string;
    admin_name?: string | null;
    password?: string | null;
    account_status?: string | null;
    delete_status?: number | null;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    admin_role: AdminRolesCreateNestedOneWithoutAdminsInput;
    withdraw?: WithdrawCreateNestedManyWithoutAdminInput;
  };

  export type AdminUncheckedCreateWithoutPaymentInput = {
    admin_internal_id: string;
    admin_id: string;
    admin_name?: string | null;
    password?: string | null;
    role_id: number;
    account_status?: string | null;
    delete_status?: number | null;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    withdraw?: WithdrawUncheckedCreateNestedManyWithoutAdminInput;
  };

  export type AdminCreateOrConnectWithoutPaymentInput = {
    where: AdminWhereUniqueInput;
    create: XOR<
      AdminCreateWithoutPaymentInput,
      AdminUncheckedCreateWithoutPaymentInput
    >;
  };

  export type AdminReceiverAccountCreateWithoutPaymentInput = {
    admin_receiver_account_id: string;
    admin_account_type: string;
    admin_account_name: string;
    admin_account_id: string;
    status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type AdminReceiverAccountUncheckedCreateWithoutPaymentInput = {
    admin_receiver_account_id: string;
    admin_account_type: string;
    admin_account_name: string;
    admin_account_id: string;
    status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type AdminReceiverAccountCreateOrConnectWithoutPaymentInput = {
    where: AdminReceiverAccountWhereUniqueInput;
    create: XOR<
      AdminReceiverAccountCreateWithoutPaymentInput,
      AdminReceiverAccountUncheckedCreateWithoutPaymentInput
    >;
  };

  export type UsersUpsertWithoutPaymentInput = {
    update: XOR<
      UsersUpdateWithoutPaymentInput,
      UsersUncheckedUpdateWithoutPaymentInput
    >;
    create: XOR<
      UsersCreateWithoutPaymentInput,
      UsersUncheckedCreateWithoutPaymentInput
    >;
    where?: UsersWhereInput;
  };

  export type UsersUpdateToOneWithWhereWithoutPaymentInput = {
    where?: UsersWhereInput;
    data: XOR<
      UsersUpdateWithoutPaymentInput,
      UsersUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type UsersUpdateWithoutPaymentInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user_role?: RolesUpdateOneRequiredWithoutUsersNestedInput;
    withdrawaccount?: UserWithdrawAccountUpdateManyWithoutUserNestedInput;
    wallet?: WalletUpdateManyWithoutUserNestedInput;
    withdraw?: WithdrawUpdateManyWithoutUserNestedInput;
    transation?: TransactionUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateWithoutPaymentInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: IntFieldUpdateOperationsInput | number;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    withdrawaccount?: UserWithdrawAccountUncheckedUpdateManyWithoutUserNestedInput;
    wallet?: WalletUncheckedUpdateManyWithoutUserNestedInput;
    withdraw?: WithdrawUncheckedUpdateManyWithoutUserNestedInput;
    transation?: TransactionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type AdminUpsertWithoutPaymentInput = {
    update: XOR<
      AdminUpdateWithoutPaymentInput,
      AdminUncheckedUpdateWithoutPaymentInput
    >;
    create: XOR<
      AdminCreateWithoutPaymentInput,
      AdminUncheckedCreateWithoutPaymentInput
    >;
    where?: AdminWhereInput;
  };

  export type AdminUpdateToOneWithWhereWithoutPaymentInput = {
    where?: AdminWhereInput;
    data: XOR<
      AdminUpdateWithoutPaymentInput,
      AdminUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type AdminUpdateWithoutPaymentInput = {
    admin_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_id?: StringFieldUpdateOperationsInput | string;
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    account_status?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    admin_role?: AdminRolesUpdateOneRequiredWithoutAdminsNestedInput;
    withdraw?: WithdrawUpdateManyWithoutAdminNestedInput;
  };

  export type AdminUncheckedUpdateWithoutPaymentInput = {
    admin_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_id?: StringFieldUpdateOperationsInput | string;
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: IntFieldUpdateOperationsInput | number;
    account_status?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    withdraw?: WithdrawUncheckedUpdateManyWithoutAdminNestedInput;
  };

  export type AdminReceiverAccountUpsertWithoutPaymentInput = {
    update: XOR<
      AdminReceiverAccountUpdateWithoutPaymentInput,
      AdminReceiverAccountUncheckedUpdateWithoutPaymentInput
    >;
    create: XOR<
      AdminReceiverAccountCreateWithoutPaymentInput,
      AdminReceiverAccountUncheckedCreateWithoutPaymentInput
    >;
    where?: AdminReceiverAccountWhereInput;
  };

  export type AdminReceiverAccountUpdateToOneWithWhereWithoutPaymentInput = {
    where?: AdminReceiverAccountWhereInput;
    data: XOR<
      AdminReceiverAccountUpdateWithoutPaymentInput,
      AdminReceiverAccountUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type AdminReceiverAccountUpdateWithoutPaymentInput = {
    admin_receiver_account_id?: StringFieldUpdateOperationsInput | string;
    admin_account_type?: StringFieldUpdateOperationsInput | string;
    admin_account_name?: StringFieldUpdateOperationsInput | string;
    admin_account_id?: StringFieldUpdateOperationsInput | string;
    status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type AdminReceiverAccountUncheckedUpdateWithoutPaymentInput = {
    admin_receiver_account_id?: StringFieldUpdateOperationsInput | string;
    admin_account_type?: StringFieldUpdateOperationsInput | string;
    admin_account_name?: StringFieldUpdateOperationsInput | string;
    admin_account_id?: StringFieldUpdateOperationsInput | string;
    status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UsersCreateWithoutWithdrawInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user_role: RolesCreateNestedOneWithoutUsersInput;
    withdrawaccount?: UserWithdrawAccountCreateNestedManyWithoutUserInput;
    wallet?: WalletCreateNestedManyWithoutUserInput;
    payment?: PaymentCreateNestedManyWithoutUserInput;
    transation?: TransactionCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateWithoutWithdrawInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    role_id: number;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    withdrawaccount?: UserWithdrawAccountUncheckedCreateNestedManyWithoutUserInput;
    wallet?: WalletUncheckedCreateNestedManyWithoutUserInput;
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput;
    transation?: TransactionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersCreateOrConnectWithoutWithdrawInput = {
    where: UsersWhereUniqueInput;
    create: XOR<
      UsersCreateWithoutWithdrawInput,
      UsersUncheckedCreateWithoutWithdrawInput
    >;
  };

  export type AdminCreateWithoutWithdrawInput = {
    admin_internal_id: string;
    admin_id: string;
    admin_name?: string | null;
    password?: string | null;
    account_status?: string | null;
    delete_status?: number | null;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    admin_role: AdminRolesCreateNestedOneWithoutAdminsInput;
    payment?: PaymentCreateNestedManyWithoutAdminInput;
  };

  export type AdminUncheckedCreateWithoutWithdrawInput = {
    admin_internal_id: string;
    admin_id: string;
    admin_name?: string | null;
    password?: string | null;
    role_id: number;
    account_status?: string | null;
    delete_status?: number | null;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    payment?: PaymentUncheckedCreateNestedManyWithoutAdminInput;
  };

  export type AdminCreateOrConnectWithoutWithdrawInput = {
    where: AdminWhereUniqueInput;
    create: XOR<
      AdminCreateWithoutWithdrawInput,
      AdminUncheckedCreateWithoutWithdrawInput
    >;
  };

  export type UserWithdrawAccountCreateWithoutWithdrawInput = {
    user_withdraw_account_id: string;
    account_type: string;
    account_name: string;
    account_id: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user: UsersCreateNestedOneWithoutWithdrawaccountInput;
  };

  export type UserWithdrawAccountUncheckedCreateWithoutWithdrawInput = {
    user_withdraw_account_id: string;
    user_internal_id: string;
    account_type: string;
    account_name: string;
    account_id: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type UserWithdrawAccountCreateOrConnectWithoutWithdrawInput = {
    where: UserWithdrawAccountWhereUniqueInput;
    create: XOR<
      UserWithdrawAccountCreateWithoutWithdrawInput,
      UserWithdrawAccountUncheckedCreateWithoutWithdrawInput
    >;
  };

  export type UsersUpsertWithoutWithdrawInput = {
    update: XOR<
      UsersUpdateWithoutWithdrawInput,
      UsersUncheckedUpdateWithoutWithdrawInput
    >;
    create: XOR<
      UsersCreateWithoutWithdrawInput,
      UsersUncheckedCreateWithoutWithdrawInput
    >;
    where?: UsersWhereInput;
  };

  export type UsersUpdateToOneWithWhereWithoutWithdrawInput = {
    where?: UsersWhereInput;
    data: XOR<
      UsersUpdateWithoutWithdrawInput,
      UsersUncheckedUpdateWithoutWithdrawInput
    >;
  };

  export type UsersUpdateWithoutWithdrawInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user_role?: RolesUpdateOneRequiredWithoutUsersNestedInput;
    withdrawaccount?: UserWithdrawAccountUpdateManyWithoutUserNestedInput;
    wallet?: WalletUpdateManyWithoutUserNestedInput;
    payment?: PaymentUpdateManyWithoutUserNestedInput;
    transation?: TransactionUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateWithoutWithdrawInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: IntFieldUpdateOperationsInput | number;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    withdrawaccount?: UserWithdrawAccountUncheckedUpdateManyWithoutUserNestedInput;
    wallet?: WalletUncheckedUpdateManyWithoutUserNestedInput;
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput;
    transation?: TransactionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type AdminUpsertWithoutWithdrawInput = {
    update: XOR<
      AdminUpdateWithoutWithdrawInput,
      AdminUncheckedUpdateWithoutWithdrawInput
    >;
    create: XOR<
      AdminCreateWithoutWithdrawInput,
      AdminUncheckedCreateWithoutWithdrawInput
    >;
    where?: AdminWhereInput;
  };

  export type AdminUpdateToOneWithWhereWithoutWithdrawInput = {
    where?: AdminWhereInput;
    data: XOR<
      AdminUpdateWithoutWithdrawInput,
      AdminUncheckedUpdateWithoutWithdrawInput
    >;
  };

  export type AdminUpdateWithoutWithdrawInput = {
    admin_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_id?: StringFieldUpdateOperationsInput | string;
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    account_status?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    admin_role?: AdminRolesUpdateOneRequiredWithoutAdminsNestedInput;
    payment?: PaymentUpdateManyWithoutAdminNestedInput;
  };

  export type AdminUncheckedUpdateWithoutWithdrawInput = {
    admin_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_id?: StringFieldUpdateOperationsInput | string;
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: IntFieldUpdateOperationsInput | number;
    account_status?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    payment?: PaymentUncheckedUpdateManyWithoutAdminNestedInput;
  };

  export type UserWithdrawAccountUpsertWithoutWithdrawInput = {
    update: XOR<
      UserWithdrawAccountUpdateWithoutWithdrawInput,
      UserWithdrawAccountUncheckedUpdateWithoutWithdrawInput
    >;
    create: XOR<
      UserWithdrawAccountCreateWithoutWithdrawInput,
      UserWithdrawAccountUncheckedCreateWithoutWithdrawInput
    >;
    where?: UserWithdrawAccountWhereInput;
  };

  export type UserWithdrawAccountUpdateToOneWithWhereWithoutWithdrawInput = {
    where?: UserWithdrawAccountWhereInput;
    data: XOR<
      UserWithdrawAccountUpdateWithoutWithdrawInput,
      UserWithdrawAccountUncheckedUpdateWithoutWithdrawInput
    >;
  };

  export type UserWithdrawAccountUpdateWithoutWithdrawInput = {
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    account_type?: StringFieldUpdateOperationsInput | string;
    account_name?: StringFieldUpdateOperationsInput | string;
    account_id?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UsersUpdateOneRequiredWithoutWithdrawaccountNestedInput;
  };

  export type UserWithdrawAccountUncheckedUpdateWithoutWithdrawInput = {
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    account_type?: StringFieldUpdateOperationsInput | string;
    account_name?: StringFieldUpdateOperationsInput | string;
    account_id?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type AdminRolesCreateWithoutAdminsInput = {
    role_id: number;
    name: string;
  };

  export type AdminRolesUncheckedCreateWithoutAdminsInput = {
    role_id: number;
    name: string;
  };

  export type AdminRolesCreateOrConnectWithoutAdminsInput = {
    where: AdminRolesWhereUniqueInput;
    create: XOR<
      AdminRolesCreateWithoutAdminsInput,
      AdminRolesUncheckedCreateWithoutAdminsInput
    >;
  };

  export type PaymentCreateWithoutAdminInput = {
    payment_internal_id: string;
    payment_type: string;
    payment_account_name: string;
    payment_account: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    approve_reject: number;
    reason_for_reject?: string | null;
    payment_confirm_code: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user: UsersCreateNestedOneWithoutPaymentInput;
    admin_receiver_account?: AdminReceiverAccountCreateNestedOneWithoutPaymentInput;
  };

  export type PaymentUncheckedCreateWithoutAdminInput = {
    payment_internal_id: string;
    user_internal_id: string;
    payment_type: string;
    payment_account_name: string;
    payment_account: string;
    admin_receiver_account_id?: string | null;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    approve_reject: number;
    reason_for_reject?: string | null;
    payment_confirm_code: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type PaymentCreateOrConnectWithoutAdminInput = {
    where: PaymentWhereUniqueInput;
    create: XOR<
      PaymentCreateWithoutAdminInput,
      PaymentUncheckedCreateWithoutAdminInput
    >;
  };

  export type PaymentCreateManyAdminInputEnvelope = {
    data: PaymentCreateManyAdminInput | PaymentCreateManyAdminInput[];
    skipDuplicates?: boolean;
  };

  export type WithdrawCreateWithoutAdminInput = {
    withdraw_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    withdraw_confirm_code?: string | null;
    is_verify?: number | null;
    approve_reject: number;
    reason_for_reject?: string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user: UsersCreateNestedOneWithoutWithdrawInput;
    withdrawaccount: UserWithdrawAccountCreateNestedOneWithoutWithdrawInput;
  };

  export type WithdrawUncheckedCreateWithoutAdminInput = {
    withdraw_id: string;
    user_internal_id: string;
    user_withdraw_account_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    withdraw_confirm_code?: string | null;
    is_verify?: number | null;
    approve_reject: number;
    reason_for_reject?: string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type WithdrawCreateOrConnectWithoutAdminInput = {
    where: WithdrawWhereUniqueInput;
    create: XOR<
      WithdrawCreateWithoutAdminInput,
      WithdrawUncheckedCreateWithoutAdminInput
    >;
  };

  export type WithdrawCreateManyAdminInputEnvelope = {
    data: WithdrawCreateManyAdminInput | WithdrawCreateManyAdminInput[];
    skipDuplicates?: boolean;
  };

  export type AdminRolesUpsertWithoutAdminsInput = {
    update: XOR<
      AdminRolesUpdateWithoutAdminsInput,
      AdminRolesUncheckedUpdateWithoutAdminsInput
    >;
    create: XOR<
      AdminRolesCreateWithoutAdminsInput,
      AdminRolesUncheckedCreateWithoutAdminsInput
    >;
    where?: AdminRolesWhereInput;
  };

  export type AdminRolesUpdateToOneWithWhereWithoutAdminsInput = {
    where?: AdminRolesWhereInput;
    data: XOR<
      AdminRolesUpdateWithoutAdminsInput,
      AdminRolesUncheckedUpdateWithoutAdminsInput
    >;
  };

  export type AdminRolesUpdateWithoutAdminsInput = {
    role_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type AdminRolesUncheckedUpdateWithoutAdminsInput = {
    role_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type PaymentUpsertWithWhereUniqueWithoutAdminInput = {
    where: PaymentWhereUniqueInput;
    update: XOR<
      PaymentUpdateWithoutAdminInput,
      PaymentUncheckedUpdateWithoutAdminInput
    >;
    create: XOR<
      PaymentCreateWithoutAdminInput,
      PaymentUncheckedCreateWithoutAdminInput
    >;
  };

  export type PaymentUpdateWithWhereUniqueWithoutAdminInput = {
    where: PaymentWhereUniqueInput;
    data: XOR<
      PaymentUpdateWithoutAdminInput,
      PaymentUncheckedUpdateWithoutAdminInput
    >;
  };

  export type PaymentUpdateManyWithWhereWithoutAdminInput = {
    where: PaymentScalarWhereInput;
    data: XOR<
      PaymentUpdateManyMutationInput,
      PaymentUncheckedUpdateManyWithoutAdminInput
    >;
  };

  export type WithdrawUpsertWithWhereUniqueWithoutAdminInput = {
    where: WithdrawWhereUniqueInput;
    update: XOR<
      WithdrawUpdateWithoutAdminInput,
      WithdrawUncheckedUpdateWithoutAdminInput
    >;
    create: XOR<
      WithdrawCreateWithoutAdminInput,
      WithdrawUncheckedCreateWithoutAdminInput
    >;
  };

  export type WithdrawUpdateWithWhereUniqueWithoutAdminInput = {
    where: WithdrawWhereUniqueInput;
    data: XOR<
      WithdrawUpdateWithoutAdminInput,
      WithdrawUncheckedUpdateWithoutAdminInput
    >;
  };

  export type WithdrawUpdateManyWithWhereWithoutAdminInput = {
    where: WithdrawScalarWhereInput;
    data: XOR<
      WithdrawUpdateManyMutationInput,
      WithdrawUncheckedUpdateManyWithoutAdminInput
    >;
  };

  export type AdminCreateWithoutAdmin_roleInput = {
    admin_internal_id: string;
    admin_id: string;
    admin_name?: string | null;
    password?: string | null;
    account_status?: string | null;
    delete_status?: number | null;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    payment?: PaymentCreateNestedManyWithoutAdminInput;
    withdraw?: WithdrawCreateNestedManyWithoutAdminInput;
  };

  export type AdminUncheckedCreateWithoutAdmin_roleInput = {
    admin_internal_id: string;
    admin_id: string;
    admin_name?: string | null;
    password?: string | null;
    account_status?: string | null;
    delete_status?: number | null;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    payment?: PaymentUncheckedCreateNestedManyWithoutAdminInput;
    withdraw?: WithdrawUncheckedCreateNestedManyWithoutAdminInput;
  };

  export type AdminCreateOrConnectWithoutAdmin_roleInput = {
    where: AdminWhereUniqueInput;
    create: XOR<
      AdminCreateWithoutAdmin_roleInput,
      AdminUncheckedCreateWithoutAdmin_roleInput
    >;
  };

  export type AdminCreateManyAdmin_roleInputEnvelope = {
    data: AdminCreateManyAdmin_roleInput | AdminCreateManyAdmin_roleInput[];
    skipDuplicates?: boolean;
  };

  export type AdminUpsertWithWhereUniqueWithoutAdmin_roleInput = {
    where: AdminWhereUniqueInput;
    update: XOR<
      AdminUpdateWithoutAdmin_roleInput,
      AdminUncheckedUpdateWithoutAdmin_roleInput
    >;
    create: XOR<
      AdminCreateWithoutAdmin_roleInput,
      AdminUncheckedCreateWithoutAdmin_roleInput
    >;
  };

  export type AdminUpdateWithWhereUniqueWithoutAdmin_roleInput = {
    where: AdminWhereUniqueInput;
    data: XOR<
      AdminUpdateWithoutAdmin_roleInput,
      AdminUncheckedUpdateWithoutAdmin_roleInput
    >;
  };

  export type AdminUpdateManyWithWhereWithoutAdmin_roleInput = {
    where: AdminScalarWhereInput;
    data: XOR<
      AdminUpdateManyMutationInput,
      AdminUncheckedUpdateManyWithoutAdmin_roleInput
    >;
  };

  export type AdminScalarWhereInput = {
    AND?: AdminScalarWhereInput | AdminScalarWhereInput[];
    OR?: AdminScalarWhereInput[];
    NOT?: AdminScalarWhereInput | AdminScalarWhereInput[];
    admin_internal_id?: StringFilter<'Admin'> | string;
    admin_id?: StringFilter<'Admin'> | string;
    admin_name?: StringNullableFilter<'Admin'> | string | null;
    password?: StringNullableFilter<'Admin'> | string | null;
    role_id?: IntFilter<'Admin'> | number;
    account_status?: StringNullableFilter<'Admin'> | string | null;
    delete_status?: IntNullableFilter<'Admin'> | number | null;
    register_date?: DateTimeFilter<'Admin'> | Date | string;
    updated_date?: DateTimeFilter<'Admin'> | Date | string;
    deleted_date?: DateTimeNullableFilter<'Admin'> | Date | string | null;
  };

  export type UsersCreateWithoutTransationInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user_role: RolesCreateNestedOneWithoutUsersInput;
    withdrawaccount?: UserWithdrawAccountCreateNestedManyWithoutUserInput;
    wallet?: WalletCreateNestedManyWithoutUserInput;
    payment?: PaymentCreateNestedManyWithoutUserInput;
    withdraw?: WithdrawCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateWithoutTransationInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    role_id: number;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    withdrawaccount?: UserWithdrawAccountUncheckedCreateNestedManyWithoutUserInput;
    wallet?: WalletUncheckedCreateNestedManyWithoutUserInput;
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput;
    withdraw?: WithdrawUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersCreateOrConnectWithoutTransationInput = {
    where: UsersWhereUniqueInput;
    create: XOR<
      UsersCreateWithoutTransationInput,
      UsersUncheckedCreateWithoutTransationInput
    >;
  };

  export type TransactionTypeCreateWithoutTransationInput = {
    transaction_type_id: number;
    transaction_type: string;
  };

  export type TransactionTypeUncheckedCreateWithoutTransationInput = {
    transaction_type_id: number;
    transaction_type: string;
  };

  export type TransactionTypeCreateOrConnectWithoutTransationInput = {
    where: TransactionTypeWhereUniqueInput;
    create: XOR<
      TransactionTypeCreateWithoutTransationInput,
      TransactionTypeUncheckedCreateWithoutTransationInput
    >;
  };

  export type UsersUpsertWithoutTransationInput = {
    update: XOR<
      UsersUpdateWithoutTransationInput,
      UsersUncheckedUpdateWithoutTransationInput
    >;
    create: XOR<
      UsersCreateWithoutTransationInput,
      UsersUncheckedCreateWithoutTransationInput
    >;
    where?: UsersWhereInput;
  };

  export type UsersUpdateToOneWithWhereWithoutTransationInput = {
    where?: UsersWhereInput;
    data: XOR<
      UsersUpdateWithoutTransationInput,
      UsersUncheckedUpdateWithoutTransationInput
    >;
  };

  export type UsersUpdateWithoutTransationInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user_role?: RolesUpdateOneRequiredWithoutUsersNestedInput;
    withdrawaccount?: UserWithdrawAccountUpdateManyWithoutUserNestedInput;
    wallet?: WalletUpdateManyWithoutUserNestedInput;
    payment?: PaymentUpdateManyWithoutUserNestedInput;
    withdraw?: WithdrawUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateWithoutTransationInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: IntFieldUpdateOperationsInput | number;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    withdrawaccount?: UserWithdrawAccountUncheckedUpdateManyWithoutUserNestedInput;
    wallet?: WalletUncheckedUpdateManyWithoutUserNestedInput;
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput;
    withdraw?: WithdrawUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type TransactionTypeUpsertWithoutTransationInput = {
    update: XOR<
      TransactionTypeUpdateWithoutTransationInput,
      TransactionTypeUncheckedUpdateWithoutTransationInput
    >;
    create: XOR<
      TransactionTypeCreateWithoutTransationInput,
      TransactionTypeUncheckedCreateWithoutTransationInput
    >;
    where?: TransactionTypeWhereInput;
  };

  export type TransactionTypeUpdateToOneWithWhereWithoutTransationInput = {
    where?: TransactionTypeWhereInput;
    data: XOR<
      TransactionTypeUpdateWithoutTransationInput,
      TransactionTypeUncheckedUpdateWithoutTransationInput
    >;
  };

  export type TransactionTypeUpdateWithoutTransationInput = {
    transaction_type_id?: IntFieldUpdateOperationsInput | number;
    transaction_type?: StringFieldUpdateOperationsInput | string;
  };

  export type TransactionTypeUncheckedUpdateWithoutTransationInput = {
    transaction_type_id?: IntFieldUpdateOperationsInput | number;
    transaction_type?: StringFieldUpdateOperationsInput | string;
  };

  export type TransactionCreateWithoutTransaction_typeInput = {
    transaction_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    transaction_date: Date | string;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
    user: UsersCreateNestedOneWithoutTransationInput;
  };

  export type TransactionUncheckedCreateWithoutTransaction_typeInput = {
    transaction_id: string;
    user_internal_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    transaction_date: Date | string;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type TransactionCreateOrConnectWithoutTransaction_typeInput = {
    where: TransactionWhereUniqueInput;
    create: XOR<
      TransactionCreateWithoutTransaction_typeInput,
      TransactionUncheckedCreateWithoutTransaction_typeInput
    >;
  };

  export type TransactionCreateManyTransaction_typeInputEnvelope = {
    data:
      | TransactionCreateManyTransaction_typeInput
      | TransactionCreateManyTransaction_typeInput[];
    skipDuplicates?: boolean;
  };

  export type TransactionUpsertWithWhereUniqueWithoutTransaction_typeInput = {
    where: TransactionWhereUniqueInput;
    update: XOR<
      TransactionUpdateWithoutTransaction_typeInput,
      TransactionUncheckedUpdateWithoutTransaction_typeInput
    >;
    create: XOR<
      TransactionCreateWithoutTransaction_typeInput,
      TransactionUncheckedCreateWithoutTransaction_typeInput
    >;
  };

  export type TransactionUpdateWithWhereUniqueWithoutTransaction_typeInput = {
    where: TransactionWhereUniqueInput;
    data: XOR<
      TransactionUpdateWithoutTransaction_typeInput,
      TransactionUncheckedUpdateWithoutTransaction_typeInput
    >;
  };

  export type TransactionUpdateManyWithWhereWithoutTransaction_typeInput = {
    where: TransactionScalarWhereInput;
    data: XOR<
      TransactionUpdateManyMutationInput,
      TransactionUncheckedUpdateManyWithoutTransaction_typeInput
    >;
  };

  export type UserWithdrawAccountCreateManyUserInput = {
    user_withdraw_account_id: string;
    account_type: string;
    account_name: string;
    account_id: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type WalletCreateManyUserInput = {
    wallet_id: string;
    game_amount?: Decimal | DecimalJsLike | number | string | null;
    main_amount?: Decimal | DecimalJsLike | number | string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type PaymentCreateManyUserInput = {
    payment_internal_id: string;
    admin_internal_id?: string | null;
    payment_type: string;
    payment_account_name: string;
    payment_account: string;
    admin_receiver_account_id?: string | null;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    approve_reject: number;
    reason_for_reject?: string | null;
    payment_confirm_code: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type WithdrawCreateManyUserInput = {
    withdraw_id: string;
    admin_internal_id?: string | null;
    user_withdraw_account_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    withdraw_confirm_code?: string | null;
    is_verify?: number | null;
    approve_reject: number;
    reason_for_reject?: string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type TransactionCreateManyUserInput = {
    transaction_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    transaction_type_id: number;
    transaction_date: Date | string;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type UserWithdrawAccountUpdateWithoutUserInput = {
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    account_type?: StringFieldUpdateOperationsInput | string;
    account_name?: StringFieldUpdateOperationsInput | string;
    account_id?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    withdraw?: WithdrawUpdateManyWithoutWithdrawaccountNestedInput;
  };

  export type UserWithdrawAccountUncheckedUpdateWithoutUserInput = {
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    account_type?: StringFieldUpdateOperationsInput | string;
    account_name?: StringFieldUpdateOperationsInput | string;
    account_id?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    withdraw?: WithdrawUncheckedUpdateManyWithoutWithdrawaccountNestedInput;
  };

  export type UserWithdrawAccountUncheckedUpdateManyWithoutUserInput = {
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    account_type?: StringFieldUpdateOperationsInput | string;
    account_name?: StringFieldUpdateOperationsInput | string;
    account_id?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WalletUpdateWithoutUserInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string;
    game_amount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    main_amount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WalletUncheckedUpdateWithoutUserInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string;
    game_amount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    main_amount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WalletUncheckedUpdateManyWithoutUserInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string;
    game_amount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    main_amount?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type PaymentUpdateWithoutUserInput = {
    payment_internal_id?: StringFieldUpdateOperationsInput | string;
    payment_type?: StringFieldUpdateOperationsInput | string;
    payment_account_name?: StringFieldUpdateOperationsInput | string;
    payment_account?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_confirm_code?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    admin?: AdminUpdateOneWithoutPaymentNestedInput;
    admin_receiver_account?: AdminReceiverAccountUpdateOneWithoutPaymentNestedInput;
  };

  export type PaymentUncheckedUpdateWithoutUserInput = {
    payment_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_internal_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_type?: StringFieldUpdateOperationsInput | string;
    payment_account_name?: StringFieldUpdateOperationsInput | string;
    payment_account?: StringFieldUpdateOperationsInput | string;
    admin_receiver_account_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_confirm_code?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    payment_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_internal_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_type?: StringFieldUpdateOperationsInput | string;
    payment_account_name?: StringFieldUpdateOperationsInput | string;
    payment_account?: StringFieldUpdateOperationsInput | string;
    admin_receiver_account_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_confirm_code?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WithdrawUpdateWithoutUserInput = {
    withdraw_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    withdraw_confirm_code?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    admin?: AdminUpdateOneWithoutWithdrawNestedInput;
    withdrawaccount?: UserWithdrawAccountUpdateOneRequiredWithoutWithdrawNestedInput;
  };

  export type WithdrawUncheckedUpdateWithoutUserInput = {
    withdraw_id?: StringFieldUpdateOperationsInput | string;
    admin_internal_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    withdraw_confirm_code?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WithdrawUncheckedUpdateManyWithoutUserInput = {
    withdraw_id?: StringFieldUpdateOperationsInput | string;
    admin_internal_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    withdraw_confirm_code?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type TransactionUpdateWithoutUserInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    transaction_type?: TransactionTypeUpdateOneRequiredWithoutTransationNestedInput;
  };

  export type TransactionUncheckedUpdateWithoutUserInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    transaction_type_id?: IntFieldUpdateOperationsInput | number;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    transaction_type_id?: IntFieldUpdateOperationsInput | number;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UsersCreateManyUser_roleInput = {
    user_internal_id: string;
    phone_number: string;
    user_name?: string | null;
    password?: string | null;
    otp_code?: string | null;
    sms_send_time?: Date | string | null;
    is_verify?: number | null;
    account_status?: number | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type UsersUpdateWithoutUser_roleInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    withdrawaccount?: UserWithdrawAccountUpdateManyWithoutUserNestedInput;
    wallet?: WalletUpdateManyWithoutUserNestedInput;
    payment?: PaymentUpdateManyWithoutUserNestedInput;
    withdraw?: WithdrawUpdateManyWithoutUserNestedInput;
    transation?: TransactionUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateWithoutUser_roleInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    withdrawaccount?: UserWithdrawAccountUncheckedUpdateManyWithoutUserNestedInput;
    wallet?: WalletUncheckedUpdateManyWithoutUserNestedInput;
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput;
    withdraw?: WithdrawUncheckedUpdateManyWithoutUserNestedInput;
    transation?: TransactionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateManyWithoutUser_roleInput = {
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    user_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null;
    sms_send_time?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    account_status?: NullableIntFieldUpdateOperationsInput | number | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WithdrawCreateManyWithdrawaccountInput = {
    withdraw_id: string;
    user_internal_id: string;
    admin_internal_id?: string | null;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    withdraw_confirm_code?: string | null;
    is_verify?: number | null;
    approve_reject: number;
    reason_for_reject?: string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type WithdrawUpdateWithoutWithdrawaccountInput = {
    withdraw_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    withdraw_confirm_code?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UsersUpdateOneRequiredWithoutWithdrawNestedInput;
    admin?: AdminUpdateOneWithoutWithdrawNestedInput;
  };

  export type WithdrawUncheckedUpdateWithoutWithdrawaccountInput = {
    withdraw_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_internal_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    withdraw_confirm_code?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WithdrawUncheckedUpdateManyWithoutWithdrawaccountInput = {
    withdraw_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_internal_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    withdraw_confirm_code?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type PaymentCreateManyAdmin_receiver_accountInput = {
    payment_internal_id: string;
    user_internal_id: string;
    admin_internal_id?: string | null;
    payment_type: string;
    payment_account_name: string;
    payment_account: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    approve_reject: number;
    reason_for_reject?: string | null;
    payment_confirm_code: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type PaymentUpdateWithoutAdmin_receiver_accountInput = {
    payment_internal_id?: StringFieldUpdateOperationsInput | string;
    payment_type?: StringFieldUpdateOperationsInput | string;
    payment_account_name?: StringFieldUpdateOperationsInput | string;
    payment_account?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_confirm_code?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UsersUpdateOneRequiredWithoutPaymentNestedInput;
    admin?: AdminUpdateOneWithoutPaymentNestedInput;
  };

  export type PaymentUncheckedUpdateWithoutAdmin_receiver_accountInput = {
    payment_internal_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_internal_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_type?: StringFieldUpdateOperationsInput | string;
    payment_account_name?: StringFieldUpdateOperationsInput | string;
    payment_account?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_confirm_code?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type PaymentUncheckedUpdateManyWithoutAdmin_receiver_accountInput = {
    payment_internal_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_internal_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_type?: StringFieldUpdateOperationsInput | string;
    payment_account_name?: StringFieldUpdateOperationsInput | string;
    payment_account?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_confirm_code?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type PaymentCreateManyAdminInput = {
    payment_internal_id: string;
    user_internal_id: string;
    payment_type: string;
    payment_account_name: string;
    payment_account: string;
    admin_receiver_account_id?: string | null;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    approve_reject: number;
    reason_for_reject?: string | null;
    payment_confirm_code: number;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type WithdrawCreateManyAdminInput = {
    withdraw_id: string;
    user_internal_id: string;
    user_withdraw_account_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    date: Date | string;
    withdraw_confirm_code?: string | null;
    is_verify?: number | null;
    approve_reject: number;
    reason_for_reject?: string | null;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type PaymentUpdateWithoutAdminInput = {
    payment_internal_id?: StringFieldUpdateOperationsInput | string;
    payment_type?: StringFieldUpdateOperationsInput | string;
    payment_account_name?: StringFieldUpdateOperationsInput | string;
    payment_account?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_confirm_code?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UsersUpdateOneRequiredWithoutPaymentNestedInput;
    admin_receiver_account?: AdminReceiverAccountUpdateOneWithoutPaymentNestedInput;
  };

  export type PaymentUncheckedUpdateWithoutAdminInput = {
    payment_internal_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    payment_type?: StringFieldUpdateOperationsInput | string;
    payment_account_name?: StringFieldUpdateOperationsInput | string;
    payment_account?: StringFieldUpdateOperationsInput | string;
    admin_receiver_account_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_confirm_code?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type PaymentUncheckedUpdateManyWithoutAdminInput = {
    payment_internal_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    payment_type?: StringFieldUpdateOperationsInput | string;
    payment_account_name?: StringFieldUpdateOperationsInput | string;
    payment_account?: StringFieldUpdateOperationsInput | string;
    admin_receiver_account_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    payment_confirm_code?: IntFieldUpdateOperationsInput | number;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WithdrawUpdateWithoutAdminInput = {
    withdraw_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    withdraw_confirm_code?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UsersUpdateOneRequiredWithoutWithdrawNestedInput;
    withdrawaccount?: UserWithdrawAccountUpdateOneRequiredWithoutWithdrawNestedInput;
  };

  export type WithdrawUncheckedUpdateWithoutAdminInput = {
    withdraw_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    withdraw_confirm_code?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type WithdrawUncheckedUpdateManyWithoutAdminInput = {
    withdraw_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    user_withdraw_account_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    withdraw_confirm_code?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    is_verify?: NullableIntFieldUpdateOperationsInput | number | null;
    approve_reject?: IntFieldUpdateOperationsInput | number;
    reason_for_reject?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type AdminCreateManyAdmin_roleInput = {
    admin_internal_id: string;
    admin_id: string;
    admin_name?: string | null;
    password?: string | null;
    account_status?: string | null;
    delete_status?: number | null;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type AdminUpdateWithoutAdmin_roleInput = {
    admin_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_id?: StringFieldUpdateOperationsInput | string;
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    account_status?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    payment?: PaymentUpdateManyWithoutAdminNestedInput;
    withdraw?: WithdrawUpdateManyWithoutAdminNestedInput;
  };

  export type AdminUncheckedUpdateWithoutAdmin_roleInput = {
    admin_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_id?: StringFieldUpdateOperationsInput | string;
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    account_status?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    payment?: PaymentUncheckedUpdateManyWithoutAdminNestedInput;
    withdraw?: WithdrawUncheckedUpdateManyWithoutAdminNestedInput;
  };

  export type AdminUncheckedUpdateManyWithoutAdmin_roleInput = {
    admin_internal_id?: StringFieldUpdateOperationsInput | string;
    admin_id?: StringFieldUpdateOperationsInput | string;
    admin_name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    account_status?: NullableStringFieldUpdateOperationsInput | string | null;
    delete_status?: NullableIntFieldUpdateOperationsInput | number | null;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type TransactionCreateManyTransaction_typeInput = {
    transaction_id: string;
    user_internal_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    transaction_date: Date | string;
    delete_status: number;
    register_date?: Date | string;
    updated_date?: Date | string;
    deleted_date?: Date | string | null;
  };

  export type TransactionUpdateWithoutTransaction_typeInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UsersUpdateOneRequiredWithoutTransationNestedInput;
  };

  export type TransactionUncheckedUpdateWithoutTransaction_typeInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type TransactionUncheckedUpdateManyWithoutTransaction_typeInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string;
    user_internal_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    delete_status?: IntFieldUpdateOperationsInput | number;
    register_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UsersCountOutputTypeDefaultArgs instead
   */
  export type UsersCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UsersCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use RolesCountOutputTypeDefaultArgs instead
   */
  export type RolesCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = RolesCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserWithdrawAccountCountOutputTypeDefaultArgs instead
   */
  export type UserWithdrawAccountCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserWithdrawAccountCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AdminReceiverAccountCountOutputTypeDefaultArgs instead
   */
  export type AdminReceiverAccountCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AdminReceiverAccountCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AdminCountOutputTypeDefaultArgs instead
   */
  export type AdminCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AdminCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AdminRolesCountOutputTypeDefaultArgs instead
   */
  export type AdminRolesCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AdminRolesCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TransactionTypeCountOutputTypeDefaultArgs instead
   */
  export type TransactionTypeCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = TransactionTypeCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UsersDefaultArgs instead
   */
  export type UsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UsersDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use RolesDefaultArgs instead
   */
  export type RolesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = RolesDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserWithdrawAccountDefaultArgs instead
   */
  export type UserWithdrawAccountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserWithdrawAccountDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AdminReceiverAccountDefaultArgs instead
   */
  export type AdminReceiverAccountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AdminReceiverAccountDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use WalletDefaultArgs instead
   */
  export type WalletArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = WalletDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use PaymentDefaultArgs instead
   */
  export type PaymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = PaymentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use WithdrawDefaultArgs instead
   */
  export type WithdrawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = WithdrawDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AdminDefaultArgs instead
   */
  export type AdminArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AdminDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AdminRolesDefaultArgs instead
   */
  export type AdminRolesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AdminRolesDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TransactionDefaultArgs instead
   */
  export type TransactionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = TransactionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TransactionTypeDefaultArgs instead
   */
  export type TransactionTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = TransactionTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ApproveRejectDefaultArgs instead
   */
  export type ApproveRejectArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ApproveRejectDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
