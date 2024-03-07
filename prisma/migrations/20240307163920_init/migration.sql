/*
  Warnings:

  - You are about to drop the `adminreceiveraccounthistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `paymentmethod` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `withdrawmethod` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "paymentmethod" DROP CONSTRAINT "paymentmethod_admin_internal_id_fkey";

-- DropForeignKey
ALTER TABLE "paymentmethod" DROP CONSTRAINT "paymentmethod_admin_receiver_account_id_fkey";

-- DropForeignKey
ALTER TABLE "paymentmethod" DROP CONSTRAINT "paymentmethod_user_internal_id_fkey";

-- DropForeignKey
ALTER TABLE "withdrawmethod" DROP CONSTRAINT "withdrawmethod_admin_internal_id_fkey";

-- DropForeignKey
ALTER TABLE "withdrawmethod" DROP CONSTRAINT "withdrawmethod_user_internal_id_fkey";

-- DropForeignKey
ALTER TABLE "withdrawmethod" DROP CONSTRAINT "withdrawmethod_user_withdraw_account_id_fkey";

-- AlterTable
ALTER TABLE "adminreceiveraccount" ADD COLUMN     "ststus" INTEGER;

-- DropTable
DROP TABLE "adminreceiveraccounthistory";

-- DropTable
DROP TABLE "paymentmethod";

-- DropTable
DROP TABLE "withdrawmethod";

-- CreateTable
CREATE TABLE "payment" (
    "payment_internal_id" VARCHAR(26) NOT NULL,
    "user_internal_id" TEXT NOT NULL,
    "admin_internal_id" TEXT,
    "payment_type" TEXT NOT NULL,
    "payment_account_name" TEXT NOT NULL,
    "payment_account" TEXT NOT NULL,
    "admin_receiver_account_id" TEXT,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "approve_reject" INTEGER NOT NULL,
    "reason_for_reject" TEXT,
    "payment_confirm_code" INTEGER NOT NULL,
    "delete_status" INTEGER NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "payment_pkey" PRIMARY KEY ("payment_internal_id")
);

-- CreateTable
CREATE TABLE "withdraw" (
    "withdraw_id" VARCHAR(26) NOT NULL,
    "user_internal_id" TEXT NOT NULL,
    "admin_internal_id" TEXT,
    "user_withdraw_account_id" TEXT NOT NULL,
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

    CONSTRAINT "withdraw_pkey" PRIMARY KEY ("withdraw_id")
);

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_user_internal_id_fkey" FOREIGN KEY ("user_internal_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_admin_internal_id_fkey" FOREIGN KEY ("admin_internal_id") REFERENCES "admin"("admin_internal_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_admin_receiver_account_id_fkey" FOREIGN KEY ("admin_receiver_account_id") REFERENCES "adminreceiveraccount"("admin_receiver_account_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdraw" ADD CONSTRAINT "withdraw_user_internal_id_fkey" FOREIGN KEY ("user_internal_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdraw" ADD CONSTRAINT "withdraw_admin_internal_id_fkey" FOREIGN KEY ("admin_internal_id") REFERENCES "admin"("admin_internal_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdraw" ADD CONSTRAINT "withdraw_user_withdraw_account_id_fkey" FOREIGN KEY ("user_withdraw_account_id") REFERENCES "userwithdrawaccount"("user_withdraw_account_id") ON DELETE RESTRICT ON UPDATE CASCADE;
