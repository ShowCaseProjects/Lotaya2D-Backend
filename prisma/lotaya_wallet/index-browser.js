
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
  user_internal_id: 'user_internal_id',
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
  user_internal_id: 'user_internal_id',
  account_type: 'account_type',
  account_name: 'account_name',
  account_id: 'account_id',
  delete_status: 'delete_status',
  register_date: 'register_date',
  updated_date: 'updated_date',
  deleted_date: 'deleted_date'
};

exports.Prisma.AdminReceiverAccountScalarFieldEnum = {
  admin_receiver_account_id: 'admin_receiver_account_id',
  admin_account_type: 'admin_account_type',
  admin_account_name: 'admin_account_name',
  admin_account_id: 'admin_account_id',
  status: 'status',
  delete_status: 'delete_status',
  register_date: 'register_date',
  updated_date: 'updated_date',
  deleted_date: 'deleted_date'
};

exports.Prisma.WalletScalarFieldEnum = {
  wallet_id: 'wallet_id',
  user_internal_id: 'user_internal_id',
  game_amount: 'game_amount',
  main_amount: 'main_amount',
  delete_status: 'delete_status',
  register_date: 'register_date',
  updated_date: 'updated_date',
  deleted_date: 'deleted_date'
};

exports.Prisma.PaymentScalarFieldEnum = {
  payment_internal_id: 'payment_internal_id',
  user_internal_id: 'user_internal_id',
  admin_internal_id: 'admin_internal_id',
  payment_type: 'payment_type',
  payment_account_name: 'payment_account_name',
  payment_account: 'payment_account',
  admin_receiver_account_id: 'admin_receiver_account_id',
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

exports.Prisma.WithdrawScalarFieldEnum = {
  withdraw_id: 'withdraw_id',
  user_internal_id: 'user_internal_id',
  admin_internal_id: 'admin_internal_id',
  user_withdraw_account_id: 'user_withdraw_account_id',
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
  admin_internal_id: 'admin_internal_id',
  admin_id: 'admin_id',
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
  user_internal_id: 'user_internal_id',
  amount: 'amount',
  transaction_type_id: 'transaction_type_id',
  transaction_date: 'transaction_date',
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
  AdminReceiverAccount: 'AdminReceiverAccount',
  Wallet: 'Wallet',
  Payment: 'Payment',
  Withdraw: 'Withdraw',
  Admin: 'Admin',
  AdminRoles: 'AdminRoles',
  Transaction: 'Transaction',
  TransactionType: 'TransactionType',
  ApproveReject: 'ApproveReject'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
