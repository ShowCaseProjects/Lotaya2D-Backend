
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
} = require('./runtime/library.js')


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


  const path = require('path')

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
  approve_reject: 'approve_reject',
  reason_for_reject: 'reason_for_reject',
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
  approve_reject: 'approve_reject',
  reason_for_reject: 'reason_for_reject',
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

exports.Prisma.ApproveRejectScalarFieldEnum = {
  approve_reject_type_id: 'approve_reject_type_id',
  type: 'type'
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
  TransactionType: 'TransactionType',
  ApproveReject: 'ApproveReject'
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
      "value": "/root/lotaya/Lotaya2D-Backend/prisma/lotaya_wallet",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-1.0.x",
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
        "fromEnvVar": "DB_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQ9Ii4vbG90YXlhX3dhbGxldCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREJfREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgVXNlcnN7CiAgdXNlcl9pZCAgICAgICAgSW50ICAgIEBpZCAgICAgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwaG9uZV9udW1iZXIgICBTdHJpbmcgQHVuaXF1ZSAgICAgQGRiLlZhckNoYXIoMTMpCiAgdXNlcl9uYW1lICAgICAgU3RyaW5nPyAgICAgICAgICAgIEBkYi5WYXJDaGFyKDMwKQogIHBhc3N3b3JkICAgICAgIFN0cmluZz8gICAgICAgICAgICAKICBvdHBfY29kZSAgICAgICBTdHJpbmc/ICAgICAgICAgICAgQGRiLlZhckNoYXIoNikgICAgICAgICAgICAgICAgCiAgcm9sZV9pZCAgICAgICAgSW50ICAgIAogIHNtc19zZW5kX3RpbWUgIERhdGVUaW1lPwogIHVzZXJfcm9sZSAgICAgIFJvbGVzICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOltyb2xlX2lkXSxyZWZlcmVuY2VzOltyb2xlX2lkXSkKICBpc192ZXJpZnkgICAgICBJbnQgPyAgICAgICAgICAgICAgIAogIGFjY291bnRfc3RhdHVzIEludCA/CiAgZGVsZXRlX3N0YXR1cyAgSW50ICAgICAgICAgICAgICAKICByZWdpc3Rlcl9kYXRlICBEYXRlVGltZSAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9kYXRlICAgRGF0ZVRpbWUgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGRlbGV0ZWRfZGF0ZSAgIERhdGVUaW1lPwoKICBAQG1hcCgidXNlcnMiKQp9Cgptb2RlbCBSb2xlc3sKICByb2xlX2lkICAgICAgIEludCAgICAgICAgIEBpZAogIG5hbWUgICAgICAgICAgU3RyaW5nICAgICAgQHVuaXF1ZSBAZGIuVmFyQ2hhcigxMDApCiAgdXNlcnMgICAgICAgICBVc2Vyc1tdCgogIEBAbWFwKCJyb2xlcyIpCn0KCm1vZGVsIFVzZXJXaXRoZHJhd0FjY291bnR7CiAgdXNlcl93aXRoZHJhd19hY2NvdW50X2lkICAgICAgSW50ICAgIEBpZCAgICAgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB1c2VyX2lkICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAKICBhY2NvdW50X3R5cGUgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAKICBhY2NvdW50X25hbWUgICAgICAgICAgICAgICAgICBTdHJpbmcgCiAgYWNjb3VudF9pZCAgICAgICAgICAgICAgICAgICAgSW50ICAgQHVuaXF1ZSAKICBkZWxldGVfc3RhdHVzICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgCiAgcmVnaXN0ZXJfZGF0ZSAgRGF0ZVRpbWUgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9kYXRlICAgRGF0ZVRpbWUgICAgICAgQGRlZmF1bHQobm93KCkpCiAgZGVsZXRlZF9kYXRlICAgRGF0ZVRpbWU/CgogIEBAbWFwKCJ1c2Vyd2l0aGRyYXdhY2NvdW50IikKfQoKbW9kZWwgV2FsbGV0ewogIHdhbGxldF9pZCAgICAgIEludCAgICBAaWQgICAgICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdXNlcl9pZCAgICAgICAgSW50IEB1bmlxdWUgICAgICAgIAogIGdhbWVfYW1vdW50ICAgIERlY2ltYWw/ICAgICAgICAgICAgCiAgbWFpbl9hbW91bnQgICAgRGVjaW1hbD8KICBhZ2VudF9pZCAgICAgICBJbnQgCiAgZGVsZXRlX3N0YXR1cyAgSW50ICAgICAgICAgICAgICAgCiAgcmVnaXN0ZXJfZGF0ZSAgRGF0ZVRpbWUgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfZGF0ZSAgIERhdGVUaW1lICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBkZWxldGVkX2RhdGUgICBEYXRlVGltZT8KCiAgQEBtYXAoIndhbGxldCIpCn0KCgptb2RlbCBQYXltZW50TWV0aG9kewogIHBheW1lbnRfaWQgICAgICAgICAgICBJbnQgICAgQGlkICAgICAgICAgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHVzZXJfaWQgICAgICAgICAgICAgICBJbnQgICAgICAgIAogIHBheW1lbnRfdHlwZSAgICAgICAgICBTdHJpbmcgCiAgcGF5bWVudF9hY2NvdW50X25hbWUgIFN0cmluZwogIHBheW1lbnRfYWNjb3VudCAgICAgICBTdHJpbmcKICByZWNpdmVyX2FjY291bnRfdHlwZSAgU3RyaW5nIAogIHJlY2VpdmVyX2FjY291bnRfbmFtZSBTdHJpbmcgICAgICAgICAgIAogIHJlY2VpdmVyX2FjY291bnQgICAgICBTdHJpbmcKICBhbW91bnQgICAgICAgICAgICAgICAgRGVjaW1hbCAKICBkYXRlICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUKICBhcHByb3ZlX3JlamVjdCAgICAgICAgSW50CiAgcmVhc29uX2Zvcl9yZWplY3QgICAgIFN0cmluZz8KICBwYXltZW50X2NvbmZpcm1fY29kZSAgSW50IAogIGRlbGV0ZV9zdGF0dXMgICAgICAgICBJbnQgICAgICAgICAgICAgIAogIHJlZ2lzdGVyX2RhdGUgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9kYXRlICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBkZWxldGVkX2RhdGUgICAgICAgICAgRGF0ZVRpbWU/CgogIEBAbWFwKCJwYXltZW50bWV0aG9kIikKfQoKbW9kZWwgV2l0aGRyYXdNZXRob2R7CiAgd2l0aGRyYXdfaWQgICAgICAgICAgICBJbnQgICAgQGlkICAgICAgICAgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHVzZXJfaWQgICAgICAgICAgICAgICAgSW50ICAgICAgICAKICB3aXRoZHJhd190eXBlICAgICAgICAgICBTdHJpbmcgCiAgcmVjZWl2ZXJfYWNjb3VudF9uYW1lICBTdHJpbmcgICAgICAgICAgICAKICByZWNlaXZlcl9hY2NvdW50ICAgICAgIFN0cmluZwogIGFtb3VudCAgICAgICAgICAgICAgICAgRGVjaW1hbCAKICBkYXRlICAgICAgICAgICAgICAgICAgIERhdGVUaW1lCiAgd2l0aGRyYXdfY29uZmlybV9jb2RlICBTdHJpbmc/ICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDYpCiAgaXNfdmVyaWZ5ICAgICAgICAgICAgICBJbnQgPyAgCiAgYXBwcm92ZV9yZWplY3QgICAgICAgICBJbnQKICByZWFzb25fZm9yX3JlamVjdCAgICAgIFN0cmluZz8KICBkZWxldGVfc3RhdHVzICAgICAgICAgIEludAogIHJlZ2lzdGVyX2RhdGUgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfZGF0ZSAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGRlbGV0ZWRfZGF0ZSAgICAgICAgICAgRGF0ZVRpbWU/CgogIEBAbWFwKCJ3aXRoZHJhd21ldGhvZCIpCn0KCm1vZGVsIEFkbWluewogIGFkbWluX2lkICAgICAgICAgSW50ICAgIEBpZCAgICAgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwaG9uZV9udW1iZXIgICAgIFN0cmluZyBAdW5pcXVlICAgICBAZGIuVmFyQ2hhcigxMykKICBhZG1pbl9uYW1lICAgICAgIFN0cmluZz8gICAgICAgICAgICBAZGIuVmFyQ2hhcigzMCkKICBwYXNzd29yZCAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAKICByb2xlX2lkICAgICAgICAgIEludCAgICAKICBhZG1pbl9yb2xlICAgICAgIEFkbWluUm9sZXMgICAgICAgICBAcmVsYXRpb24oZmllbGRzOltyb2xlX2lkXSxyZWZlcmVuY2VzOltyb2xlX2lkXSkgICAgICAgICAgICAgCiAgYWNjb3VudF9zdGF0dXMgICBTdHJpbmcgICAgICAgICAgICAgQGRiLlZhckNoYXIoMSkgICAKICBkZWxldGVfc3RhdHVzICAgIEludCAgICAgICAgICAgICAKICByZWdpc3Rlcl9kYXRlICAgIERhdGVUaW1lICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2RhdGUgICAgIERhdGVUaW1lICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBkZWxldGVkX2RhdGUgICAgIERhdGVUaW1lPwoKICBAQG1hcCgiYWRtaW4iKQp9Cgptb2RlbCBBZG1pblJvbGVzewogIHJvbGVfaWQgICAgICAgIEludCAgICAgICAgIEBpZAogIG5hbWUgICAgICAgICAgIFN0cmluZyAgICAgIEB1bmlxdWUgQGRiLlZhckNoYXIoMTAwKQogIGFkbWlucyAgICAgICAgIEFkbWluW10KCiAgQEBtYXAoImFkbWlucm9sZXMiKQp9Cgptb2RlbCAgVHJhbnNhY3Rpb257CiAgdHJhbnNhY3Rpb25faWQgICAgICAgICBJbnQgICAgQGlkICAgICAgICAgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHVzZXJfaWQgICAgICAgICAgICAgICAgSW50CiAgYW1vdW50ICAgICAgICAgICAgICAgICBEZWNpbWFsCiAgdHJhbnNhY3Rpb25fdHlwZV9pZCAgICBJbnQKICB0cmFuc2FjdGlvbl90eXBlICAgICAgIFRyYW5zYWN0aW9uVHlwZSAgIEByZWxhdGlvbihmaWVsZHM6W3RyYW5zYWN0aW9uX3R5cGVfaWRdLHJlZmVyZW5jZXM6W3RyYW5zYWN0aW9uX3R5cGVfaWRdKSAKICB0cmFuc2FjdGlvbl9kYXRlICAgICAgIERhdGVUaW1lICAKICBhZ2VudF9pZCAgICAgICAgICAgICAgIEludCAgCiAgZGVsZXRlX3N0YXR1cyAgICBJbnQgICAgICAgICAgICAgCiAgcmVnaXN0ZXJfZGF0ZSAgICBEYXRlVGltZSAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9kYXRlICAgICBEYXRlVGltZSAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgZGVsZXRlZF9kYXRlICAgICBEYXRlVGltZT8KCiAgQEBtYXAoInRyYW5zYXRpb24iKSAgCn0KCm1vZGVsICBUcmFuc2FjdGlvblR5cGUgewp0cmFuc2FjdGlvbl90eXBlX2lkICBJbnQgICAgICBAaWQKdHJhbnNhY3Rpb25fdHlwZSAgICAgU3RyaW5nICAgQHVuaXF1ZSBAZGIuVmFyQ2hhcigxMDApCnRyYW5zYXRpb24gICAgICAgICAgIFRyYW5zYWN0aW9uW10KCkBAbWFwKCJ0cmFuc2F0aW9udHlwZSIpCn0KCm1vZGVsICBBcHByb3ZlUmVqZWN0IHsKYXBwcm92ZV9yZWplY3RfdHlwZV9pZCAgSW50ICAgICAgQGlkCnR5cGUgICAgIFN0cmluZyAgIEB1bmlxdWUgQGRiLlZhckNoYXIoMTAwKQoKQEBtYXAoImFwcHJvdmVfcmVqZWN0IikKfQ==",
  "inlineSchemaHash": "05f7b2d318efe776450dd556ce86bc7da0bb8f6d7bd17d121a4fbc389b2427c1"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/lotaya_wallet",
    "lotaya_wallet",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Users\":{\"dbName\":\"users\",\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"otp_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sms_send_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Roles\",\"relationName\":\"RolesToUsers\",\"relationFromFields\":[\"role_id\"],\"relationToFields\":[\"role_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_verify\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"register_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Roles\":{\"dbName\":\"roles\",\"fields\":[{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"RolesToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserWithdrawAccount\":{\"dbName\":\"userwithdrawaccount\",\"fields\":[{\"name\":\"user_withdraw_account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"register_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Wallet\":{\"dbName\":\"wallet\",\"fields\":[{\"name\":\"wallet_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"game_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"main_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"register_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PaymentMethod\":{\"dbName\":\"paymentmethod\",\"fields\":[{\"name\":\"payment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_account_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reciver_account_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver_account_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"approve_reject\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason_for_reject\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_confirm_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"register_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WithdrawMethod\":{\"dbName\":\"withdrawmethod\",\"fields\":[{\"name\":\"withdraw_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"withdraw_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver_account_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"withdraw_confirm_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_verify\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"approve_reject\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason_for_reject\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"register_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Admin\":{\"dbName\":\"admin\",\"fields\":[{\"name\":\"admin_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdminRoles\",\"relationName\":\"AdminToAdminRoles\",\"relationFromFields\":[\"role_id\"],\"relationToFields\":[\"role_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"register_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AdminRoles\":{\"dbName\":\"adminroles\",\"fields\":[{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admins\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Admin\",\"relationName\":\"AdminToAdminRoles\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Transaction\":{\"dbName\":\"transation\",\"fields\":[{\"name\":\"transaction_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_type\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransactionType\",\"relationName\":\"TransactionToTransactionType\",\"relationFromFields\":[\"transaction_type_id\"],\"relationToFields\":[\"transaction_type_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"register_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TransactionType\":{\"dbName\":\"transationtype\",\"fields\":[{\"name\":\"transaction_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transaction\",\"relationName\":\"TransactionToTransactionType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ApproveReject\":{\"dbName\":\"approve_reject\",\"fields\":[{\"name\":\"approve_reject_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-rhel-openssl-1.0.x.so.node");
path.join(process.cwd(), "prisma/lotaya_wallet/libquery_engine-rhel-openssl-1.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/lotaya_wallet/schema.prisma")
