
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
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

exports.Prisma.RolesScalarFieldEnum = {
  role_id: 'role_id',
  name: 'name'
};

exports.Prisma.UserWithdrawAccountScalarFieldEnum = {
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

exports.Prisma.WalletScalarFieldEnum = {
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

exports.Prisma.PaymentMethodScalarFieldEnum = {
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
  payment_confirm_code: 'payment_confirm_code',
  delete_status: 'delete_status',
  register_date: 'register_date',
  updated_date: 'updated_date',
  deleted_date: 'deleted_date'
};

exports.Prisma.WithdrawMethodScalarFieldEnum = {
  withdraw_id: 'withdraw_id',
  user_id: 'user_id',
  withdraw_type: 'withdraw_type',
  receiver_account_name: 'receiver_account_name',
  receiver_account: 'receiver_account',
  amount: 'amount',
  date: 'date',
  withdraw_confirm_code: 'withdraw_confirm_code',
  is_verify: 'is_verify',
  delete_status: 'delete_status',
  register_date: 'register_date',
  updated_date: 'updated_date',
  deleted_date: 'deleted_date'
};

exports.Prisma.AdminScalarFieldEnum = {
  admin_id: 'admin_id',
  phone_number: 'phone_number',
  admin_name: 'admin_name',
  password: 'password',
  role_id: 'role_id',
  account_status: 'account_status',
  delete_status: 'delete_status',
  register_date: 'register_date',
  updated_date: 'updated_date',
  deleted_date: 'deleted_date'
};

exports.Prisma.AdminRolesScalarFieldEnum = {
  role_id: 'role_id',
  name: 'name'
};

exports.Prisma.TransactionScalarFieldEnum = {
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

exports.Prisma.TransactionTypeScalarFieldEnum = {
  transaction_type_id: 'transaction_type_id',
  transaction_type: 'transaction_type'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Users: 'Users',
  Roles: 'Roles',
  UserWithdrawAccount: 'UserWithdrawAccount',
  Wallet: 'Wallet',
  PaymentMethod: 'PaymentMethod',
  WithdrawMethod: 'WithdrawMethod',
  Admin: 'Admin',
  AdminRoles: 'AdminRoles',
  Transaction: 'Transaction',
  TransactionType: 'TransactionType'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\NestJS\\lotaya-backend\\prisma\\lotaya_wallet",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQ9Ii4vbG90YXlhX3dhbGxldCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgVXNlcnN7CiAgdXNlcl9pZCAgICAgICAgSW50ICAgIEBpZCAgICAgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwaG9uZV9udW1iZXIgICBTdHJpbmcgQHVuaXF1ZSAgICAgQGRiLlZhckNoYXIoMTMpCiAgdXNlcl9uYW1lICAgICAgU3RyaW5nPyAgICAgICAgICAgIEBkYi5WYXJDaGFyKDMwKQogIHBhc3N3b3JkICAgICAgIFN0cmluZz8gICAgICAgICAgICAKICBvdHBfY29kZSAgICAgICBTdHJpbmc/ICAgICAgICAgICAgQGRiLlZhckNoYXIoNikgICAgICAgICAgICAgICAgCiAgcm9sZV9pZCAgICAgICAgSW50ICAgIAogIHNtc19zZW5kX3RpbWUgIERhdGVUaW1lPwogIHVzZXJfcm9sZSAgICAgIFJvbGVzICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOltyb2xlX2lkXSxyZWZlcmVuY2VzOltyb2xlX2lkXSkKICBpc192ZXJpZnkgICAgICBJbnQgPyAgICAgICAgICAgICAgIAogIGFjY291bnRfc3RhdHVzIEludCA/CiAgZGVsZXRlX3N0YXR1cyAgSW50ICAgICAgICAgICAgICAKICByZWdpc3Rlcl9kYXRlICBEYXRlVGltZSAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9kYXRlICAgRGF0ZVRpbWUgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGRlbGV0ZWRfZGF0ZSAgIERhdGVUaW1lPwoKICBAQG1hcCgidXNlcnMiKQp9Cgptb2RlbCBSb2xlc3sKICByb2xlX2lkICAgICAgIEludCAgICAgICAgIEBpZAogIG5hbWUgICAgICAgICAgU3RyaW5nICAgICAgQHVuaXF1ZSBAZGIuVmFyQ2hhcigxMDApCiAgdXNlcnMgICAgICAgICBVc2Vyc1tdCgogIEBAbWFwKCJyb2xlcyIpCn0KCm1vZGVsIFVzZXJXaXRoZHJhd0FjY291bnR7CiAgdXNlcl93aXRoZHJhd19hY2NvdW50X2lkICAgICAgSW50ICAgIEBpZCAgICAgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB1c2VyX2lkICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAKICBhY2NvdW50X3R5cGUgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAKICBhY2NvdW50X25hbWUgICAgICAgICAgICAgICAgICBTdHJpbmcgCiAgYWNjb3VudF9pZCAgICAgICAgICAgICAgICAgICAgSW50ICAgQHVuaXF1ZSAKICBkZWxldGVfc3RhdHVzICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgCiAgcmVnaXN0ZXJfZGF0ZSAgRGF0ZVRpbWUgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9kYXRlICAgRGF0ZVRpbWUgICAgICAgQGRlZmF1bHQobm93KCkpCiAgZGVsZXRlZF9kYXRlICAgRGF0ZVRpbWU/CgogIEBAbWFwKCJ1c2Vyd2l0aGRyYXdhY2NvdW50IikKfQoKbW9kZWwgV2FsbGV0ewogIHdhbGxldF9pZCAgICAgIEludCAgICBAaWQgICAgICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdXNlcl9pZCAgICAgICAgSW50IEB1bmlxdWUgICAgICAgIAogIGdhbWVfYW1vdW50ICAgIERlY2ltYWw/ICAgICAgICAgICAgCiAgbWFpbl9hbW91bnQgICAgRGVjaW1hbD8KICBhZ2VudF9pZCAgICAgICBJbnQgCiAgZGVsZXRlX3N0YXR1cyAgSW50ICAgICAgICAgICAgICAgCiAgcmVnaXN0ZXJfZGF0ZSAgRGF0ZVRpbWUgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfZGF0ZSAgIERhdGVUaW1lICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBkZWxldGVkX2RhdGUgICBEYXRlVGltZT8KCiAgQEBtYXAoIndhbGxldCIpCn0KCgptb2RlbCBQYXltZW50TWV0aG9kewogIHBheW1lbnRfaWQgICAgICAgICAgICBJbnQgICAgQGlkICAgICAgICAgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHVzZXJfaWQgICAgICAgICAgICAgICBJbnQgICAgICAgIAogIHBheW1lbnRfdHlwZSAgICAgICAgICBTdHJpbmcgCiAgcGF5bWVudF9hY2NvdW50X25hbWUgIFN0cmluZwogIHBheW1lbnRfYWNjb3VudCAgICAgICBTdHJpbmcKICByZWNpdmVyX2FjY291bnRfdHlwZSAgU3RyaW5nIAogIHJlY2VpdmVyX2FjY291bnRfbmFtZSBTdHJpbmcgICAgICAgICAgIAogIHJlY2VpdmVyX2FjY291bnQgICAgICBTdHJpbmcKICBhbW91bnQgICAgICAgICAgICAgICAgRGVjaW1hbCAKICBkYXRlICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUKICBwYXltZW50X2NvbmZpcm1fY29kZSAgSW50IAogIGRlbGV0ZV9zdGF0dXMgICAgICAgICAgSW50ICAgICAgICAgICAgICAKICByZWdpc3Rlcl9kYXRlICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfZGF0ZSAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgZGVsZXRlZF9kYXRlICAgICAgICAgIERhdGVUaW1lPwoKICBAQG1hcCgicGF5bWVudG1ldGhvZCIpCn0KCm1vZGVsIFdpdGhkcmF3TWV0aG9kewogIHdpdGhkcmF3X2lkICAgICAgICAgICAgSW50ICAgIEBpZCAgICAgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB1c2VyX2lkICAgICAgICAgICAgICAgIEludCAgICAgICAgCiAgd2l0aGRyYXdfdHlwZSAgICAgICAgICAgU3RyaW5nIAogIHJlY2VpdmVyX2FjY291bnRfbmFtZSAgU3RyaW5nICAgICAgICAgICAgCiAgcmVjZWl2ZXJfYWNjb3VudCAgICAgICBTdHJpbmcKICBhbW91bnQgICAgICAgICAgICAgICAgIERlY2ltYWwgCiAgZGF0ZSAgICAgICAgICAgICAgICAgICBEYXRlVGltZQogIHdpdGhkcmF3X2NvbmZpcm1fY29kZSAgU3RyaW5nPyAgICAgICAgICAgICBAZGIuVmFyQ2hhcig2KQogIGlzX3ZlcmlmeSAgICAgICAgICAgICAgSW50ID8gIAogIGRlbGV0ZV9zdGF0dXMgICAgICAgICAgSW50CiAgcmVnaXN0ZXJfZGF0ZSAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9kYXRlICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgZGVsZXRlZF9kYXRlICAgICAgICAgICBEYXRlVGltZT8KCiAgQEBtYXAoIndpdGhkcmF3bWV0aG9kIikKfQoKbW9kZWwgQWRtaW57CiAgYWRtaW5faWQgICAgICAgICBJbnQgICAgQGlkICAgICAgICAgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHBob25lX251bWJlciAgICAgU3RyaW5nIEB1bmlxdWUgICAgIEBkYi5WYXJDaGFyKDEzKQogIGFkbWluX25hbWUgICAgICAgU3RyaW5nPyAgICAgICAgICAgIEBkYi5WYXJDaGFyKDMwKQogIHBhc3N3b3JkICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgIAogIHJvbGVfaWQgICAgICAgICAgSW50ICAgIAogIGFkbWluX3JvbGUgICAgICAgQWRtaW5Sb2xlcyAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6W3JvbGVfaWRdLHJlZmVyZW5jZXM6W3JvbGVfaWRdKSAgICAgICAgICAgICAKICBhY2NvdW50X3N0YXR1cyAgIFN0cmluZyAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxKSAgIAogIGRlbGV0ZV9zdGF0dXMgICAgSW50ICAgICAgICAgICAgIAogIHJlZ2lzdGVyX2RhdGUgICAgRGF0ZVRpbWUgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfZGF0ZSAgICAgRGF0ZVRpbWUgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGRlbGV0ZWRfZGF0ZSAgICAgRGF0ZVRpbWU/CgogIEBAbWFwKCJhZG1pbiIpCn0KCm1vZGVsIEFkbWluUm9sZXN7CiAgcm9sZV9pZCAgICAgICAgSW50ICAgICAgICAgQGlkCiAgbmFtZSAgICAgICAgICAgU3RyaW5nICAgICAgQHVuaXF1ZSBAZGIuVmFyQ2hhcigxMDApCiAgYWRtaW5zICAgICAgICAgQWRtaW5bXQoKICBAQG1hcCgiYWRtaW5yb2xlcyIpCn0KCm1vZGVsICBUcmFuc2FjdGlvbnsKICB0cmFuc2FjdGlvbl9pZCAgICAgICAgIEludCAgICBAaWQgICAgICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdXNlcl9pZCAgICAgICAgICAgICAgICBJbnQKICBhbW91bnQgICAgICAgICAgICAgICAgIERlY2ltYWwKICB0cmFuc2FjdGlvbl90eXBlX2lkICAgIEludAogIHRyYW5zYWN0aW9uX3R5cGUgICAgICAgVHJhbnNhY3Rpb25UeXBlICAgQHJlbGF0aW9uKGZpZWxkczpbdHJhbnNhY3Rpb25fdHlwZV9pZF0scmVmZXJlbmNlczpbdHJhbnNhY3Rpb25fdHlwZV9pZF0pIAogIHRyYW5zYWN0aW9uX2RhdGUgICAgICAgRGF0ZVRpbWUgIAogIGFnZW50X2lkICAgICAgICAgICAgICAgSW50ICAKICBkZWxldGVfc3RhdHVzICAgIEludCAgICAgICAgICAgICAKICByZWdpc3Rlcl9kYXRlICAgIERhdGVUaW1lICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2RhdGUgICAgIERhdGVUaW1lICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBkZWxldGVkX2RhdGUgICAgIERhdGVUaW1lPwoKICBAQG1hcCgidHJhbnNhdGlvbiIpICAKfQoKbW9kZWwgIFRyYW5zYWN0aW9uVHlwZSB7CnRyYW5zYWN0aW9uX3R5cGVfaWQgIEludCAgICAgIEBpZAp0cmFuc2FjdGlvbl90eXBlICAgICBTdHJpbmcgICBAdW5pcXVlIEBkYi5WYXJDaGFyKDEwMCkKdHJhbnNhdGlvbiAgICAgICAgICAgVHJhbnNhY3Rpb25bXQoKQEBtYXAoInRyYW5zYXRpb250eXBlIikKfQoKCgo=",
  "inlineSchemaHash": "9a22528ff37b19b8a7e13326c03c71c3b85dbfb5c04f95d4a1efca99f7463458"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Users\":{\"dbName\":\"users\",\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"otp_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sms_send_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Roles\",\"relationName\":\"RolesToUsers\",\"relationFromFields\":[\"role_id\"],\"relationToFields\":[\"role_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_verify\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"register_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Roles\":{\"dbName\":\"roles\",\"fields\":[{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"RolesToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserWithdrawAccount\":{\"dbName\":\"userwithdrawaccount\",\"fields\":[{\"name\":\"user_withdraw_account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"register_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Wallet\":{\"dbName\":\"wallet\",\"fields\":[{\"name\":\"wallet_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"game_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"main_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"register_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PaymentMethod\":{\"dbName\":\"paymentmethod\",\"fields\":[{\"name\":\"payment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_account_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reciver_account_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver_account_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_confirm_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"register_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WithdrawMethod\":{\"dbName\":\"withdrawmethod\",\"fields\":[{\"name\":\"withdraw_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"withdraw_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver_account_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"withdraw_confirm_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_verify\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"register_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Admin\":{\"dbName\":\"admin\",\"fields\":[{\"name\":\"admin_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdminRoles\",\"relationName\":\"AdminToAdminRoles\",\"relationFromFields\":[\"role_id\"],\"relationToFields\":[\"role_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"register_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AdminRoles\":{\"dbName\":\"adminroles\",\"fields\":[{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admins\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Admin\",\"relationName\":\"AdminToAdminRoles\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Transaction\":{\"dbName\":\"transation\",\"fields\":[{\"name\":\"transaction_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_type\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransactionType\",\"relationName\":\"TransactionToTransactionType\",\"relationFromFields\":[\"transaction_type_id\"],\"relationToFields\":[\"transaction_type_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"register_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TransactionType\":{\"dbName\":\"transationtype\",\"fields\":[{\"name\":\"transaction_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transaction\",\"relationName\":\"TransactionToTransactionType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

