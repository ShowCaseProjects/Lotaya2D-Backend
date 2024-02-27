-- CreateTable
CREATE TABLE "users" (
    "user_internal_id" VARCHAR(26) NOT NULL,
    "phone_number" VARCHAR(13) NOT NULL,
    "user_name" VARCHAR(30),
    "password" TEXT,
    "otp_code" VARCHAR(6),
    "role_id" INTEGER NOT NULL,
    "sms_send_time" TIMESTAMP(3),
    "is_verify" INTEGER,
    "account_status" INTEGER,
    "delete_status" INTEGER NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_internal_id")
);

-- CreateTable
CREATE TABLE "roles" (
    "role_id" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "userwithdrawaccount" (
    "user_withdraw_account_id" VARCHAR(26) NOT NULL,
    "user_internal_id" TEXT NOT NULL,
    "account_type" TEXT NOT NULL,
    "account_name" TEXT NOT NULL,
    "account_id" INTEGER NOT NULL,
    "delete_status" INTEGER NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "userwithdrawaccount_pkey" PRIMARY KEY ("user_withdraw_account_id")
);

-- CreateTable
CREATE TABLE "adminreceiveraccount" (
    "admin_receiver_account_id" VARCHAR(26) NOT NULL,
    "admin_account_type" TEXT NOT NULL,
    "admin_account_name" TEXT NOT NULL,
    "admin_account_id" VARCHAR(13) NOT NULL,
    "delete_status" INTEGER NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "adminreceiveraccount_pkey" PRIMARY KEY ("admin_receiver_account_id")
);

-- CreateTable
CREATE TABLE "adminreceiveraccounthistory" (
    "admin_receiver_account_history_id" VARCHAR(26) NOT NULL,
    "admin_account_type_history" TEXT NOT NULL,
    "account_name_history" TEXT NOT NULL,
    "account_id_history" INTEGER NOT NULL,
    "status" TEXT,
    "delete_status" INTEGER NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "adminreceiveraccounthistory_pkey" PRIMARY KEY ("admin_receiver_account_history_id")
);

-- CreateTable
CREATE TABLE "wallet" (
    "wallet_id" VARCHAR(26) NOT NULL,
    "user_internal_id" TEXT NOT NULL,
    "game_amount" DECIMAL(65,30),
    "main_amount" DECIMAL(65,30),
    "delete_status" INTEGER NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "wallet_pkey" PRIMARY KEY ("wallet_id")
);

-- CreateTable
CREATE TABLE "paymentmethod" (
    "payment_internal_id" VARCHAR(26) NOT NULL,
    "user_internal_id" TEXT NOT NULL,
    "admin_internal_id" TEXT,
    "payment_type" TEXT NOT NULL,
    "payment_account_name" TEXT NOT NULL,
    "payment_account" TEXT NOT NULL,
    "reciver_account_type" TEXT NOT NULL,
    "receiver_account_name" TEXT NOT NULL,
    "receiver_account" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "approve_reject" INTEGER NOT NULL,
    "reason_for_reject" TEXT,
    "payment_confirm_code" INTEGER NOT NULL,
    "delete_status" INTEGER NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "paymentmethod_pkey" PRIMARY KEY ("payment_internal_id")
);

-- CreateTable
CREATE TABLE "withdrawmethod" (
    "withdraw_id" VARCHAR(26) NOT NULL,
    "user_internal_id" TEXT NOT NULL,
    "admin_internal_id" TEXT,
    "withdraw_type" TEXT NOT NULL,
    "receiver_account_name" TEXT NOT NULL,
    "receiver_account" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "withdraw_confirm_code" VARCHAR(6),
    "is_verify" INTEGER,
    "approve_reject" INTEGER NOT NULL,
    "reason_for_reject" TEXT,
    "delete_status" INTEGER NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "withdrawmethod_pkey" PRIMARY KEY ("withdraw_id")
);

-- CreateTable
CREATE TABLE "admin" (
    "admin_internal_id" VARCHAR(26) NOT NULL,
    "admin_id" VARCHAR(13) NOT NULL,
    "admin_name" VARCHAR(30),
    "password" TEXT,
    "role_id" INTEGER NOT NULL,
    "account_status" VARCHAR(1),
    "delete_status" INTEGER,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "admin_pkey" PRIMARY KEY ("admin_internal_id")
);

-- CreateTable
CREATE TABLE "adminroles" (
    "role_id" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "adminroles_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "transation" (
    "transaction_id" VARCHAR(26) NOT NULL,
    "user_internal_id" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "transaction_type_id" INTEGER NOT NULL,
    "transaction_date" TIMESTAMP(3) NOT NULL,
    "delete_status" INTEGER NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "transation_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "transationtype" (
    "transaction_type_id" INTEGER NOT NULL,
    "transaction_type" VARCHAR(100) NOT NULL,

    CONSTRAINT "transationtype_pkey" PRIMARY KEY ("transaction_type_id")
);

-- CreateTable
CREATE TABLE "approve_reject" (
    "approve_reject_type_id" INTEGER NOT NULL,
    "type" VARCHAR(100) NOT NULL,

    CONSTRAINT "approve_reject_pkey" PRIMARY KEY ("approve_reject_type_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_number_key" ON "users"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "userwithdrawaccount_account_id_key" ON "userwithdrawaccount"("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "adminreceiveraccount_admin_account_id_key" ON "adminreceiveraccount"("admin_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "adminreceiveraccounthistory_account_id_history_key" ON "adminreceiveraccounthistory"("account_id_history");

-- CreateIndex
CREATE UNIQUE INDEX "wallet_user_internal_id_key" ON "wallet"("user_internal_id");

-- CreateIndex
CREATE UNIQUE INDEX "admin_admin_id_key" ON "admin"("admin_id");

-- CreateIndex
CREATE UNIQUE INDEX "adminroles_name_key" ON "adminroles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "transationtype_transaction_type_key" ON "transationtype"("transaction_type");

-- CreateIndex
CREATE UNIQUE INDEX "approve_reject_type_key" ON "approve_reject"("type");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userwithdrawaccount" ADD CONSTRAINT "userwithdrawaccount_user_internal_id_fkey" FOREIGN KEY ("user_internal_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet" ADD CONSTRAINT "wallet_user_internal_id_fkey" FOREIGN KEY ("user_internal_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paymentmethod" ADD CONSTRAINT "paymentmethod_user_internal_id_fkey" FOREIGN KEY ("user_internal_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paymentmethod" ADD CONSTRAINT "paymentmethod_admin_internal_id_fkey" FOREIGN KEY ("admin_internal_id") REFERENCES "admin"("admin_internal_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdrawmethod" ADD CONSTRAINT "withdrawmethod_user_internal_id_fkey" FOREIGN KEY ("user_internal_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdrawmethod" ADD CONSTRAINT "withdrawmethod_admin_internal_id_fkey" FOREIGN KEY ("admin_internal_id") REFERENCES "admin"("admin_internal_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "adminroles"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transation" ADD CONSTRAINT "transation_user_internal_id_fkey" FOREIGN KEY ("user_internal_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transation" ADD CONSTRAINT "transation_transaction_type_id_fkey" FOREIGN KEY ("transaction_type_id") REFERENCES "transationtype"("transaction_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;
