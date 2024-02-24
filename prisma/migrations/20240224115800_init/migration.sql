/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `users` table. All the data in the column will be lost.
  - Added the required column `user_internal_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "paymentmethod" DROP CONSTRAINT "paymentmethod_user_id_fkey";

-- DropForeignKey
ALTER TABLE "transation" DROP CONSTRAINT "transation_user_id_fkey";

-- DropForeignKey
ALTER TABLE "userwithdrawaccount" DROP CONSTRAINT "userwithdrawaccount_user_id_fkey";

-- DropForeignKey
ALTER TABLE "wallet" DROP CONSTRAINT "wallet_user_id_fkey";

-- DropForeignKey
ALTER TABLE "withdrawmethod" DROP CONSTRAINT "withdrawmethod_user_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "user_internal_id" VARCHAR(30) NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("user_internal_id");

-- AddForeignKey
ALTER TABLE "userwithdrawaccount" ADD CONSTRAINT "userwithdrawaccount_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet" ADD CONSTRAINT "wallet_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paymentmethod" ADD CONSTRAINT "paymentmethod_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdrawmethod" ADD CONSTRAINT "withdrawmethod_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transation" ADD CONSTRAINT "transation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;
