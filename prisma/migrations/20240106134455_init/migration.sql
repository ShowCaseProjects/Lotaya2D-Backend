-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "phone_number" VARCHAR(13) NOT NULL,
    "user_name" VARCHAR(30),
    "password" TEXT,
    "otp_code" VARCHAR(6),
    "role_id" INTEGER NOT NULL,
    "sms_send_time" TIMESTAMP(3),
    "is_verify" VARCHAR(1) NOT NULL,
    "account_status" VARCHAR(1) NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "roles" (
    "role_id" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "userwithdrawaccount" (
    "user_withdraw_account_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "account_type" TEXT NOT NULL,
    "account_name" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "userwithdrawaccount_pkey" PRIMARY KEY ("user_withdraw_account_id")
);

-- CreateTable
CREATE TABLE "userwithdrawaccounthistory" (
    "user_withdraw_account_history_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "account_type" TEXT NOT NULL,
    "account_name" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "userwithdrawaccounthistory_pkey" PRIMARY KEY ("user_withdraw_account_history_id")
);

-- CreateTable
CREATE TABLE "wallet" (
    "wallet_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "game_amount" DECIMAL(65,30),
    "main_amount" DECIMAL(65,30),
    "agent_id" INTEGER NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "wallet_pkey" PRIMARY KEY ("wallet_id")
);

-- CreateTable
CREATE TABLE "wallethistory" (
    "wallet_history_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "game_amount" DECIMAL(65,30),
    "main_amount" DECIMAL(65,30),
    "agent_id" INTEGER NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "wallethistory_pkey" PRIMARY KEY ("wallet_history_id")
);

-- CreateTable
CREATE TABLE "paymentmethod" (
    "payment_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "payment_type" TEXT NOT NULL,
    "receiver_account_name" TEXT NOT NULL,
    "receiver_account" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "payment_confirm_code" INTEGER NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "paymentmethod_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "withdrawmethod" (
    "withdraw_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "withdraw_type" TEXT NOT NULL,
    "receiver_account_name" TEXT NOT NULL,
    "receiver_account" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "withdraw_confirm_code" VARCHAR(6) NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "withdrawmethod_pkey" PRIMARY KEY ("withdraw_id")
);

-- CreateTable
CREATE TABLE "admin" (
    "admin_id" SERIAL NOT NULL,
    "phone_number" VARCHAR(13) NOT NULL,
    "admin_name" VARCHAR(30),
    "password" TEXT,
    "role_id" INTEGER NOT NULL,
    "account_status" VARCHAR(1) NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "admin_pkey" PRIMARY KEY ("admin_id")
);

-- CreateTable
CREATE TABLE "adminroles" (
    "role_id" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "adminroles_pkey" PRIMARY KEY ("role_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_number_key" ON "users"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "userwithdrawaccount_account_id_key" ON "userwithdrawaccount"("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "userwithdrawaccounthistory_account_id_key" ON "userwithdrawaccounthistory"("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "wallet_user_id_key" ON "wallet"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "wallethistory_user_id_key" ON "wallethistory"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "admin_phone_number_key" ON "admin"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "adminroles_name_key" ON "adminroles"("name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "adminroles"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;
