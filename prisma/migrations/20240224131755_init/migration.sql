/*
  Warnings:

  - You are about to drop the column `user_id` on the `userwithdrawaccount` table. All the data in the column will be lost.
  - Added the required column `user_internal_id` to the `userwithdrawaccount` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transation" DROP CONSTRAINT "transation_user_id_fkey";

-- DropForeignKey
ALTER TABLE "userwithdrawaccount" DROP CONSTRAINT "userwithdrawaccount_user_id_fkey";

-- DropForeignKey
ALTER TABLE "wallet" DROP CONSTRAINT "wallet_user_id_fkey";

-- DropForeignKey
ALTER TABLE "withdrawmethod" DROP CONSTRAINT "withdrawmethod_user_id_fkey";

-- AlterTable
ALTER TABLE "userwithdrawaccount" DROP COLUMN "user_id",
ADD COLUMN     "user_internal_id" TEXT NOT NULL;
