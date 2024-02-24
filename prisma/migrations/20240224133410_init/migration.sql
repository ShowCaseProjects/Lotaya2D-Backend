/*
  Warnings:

  - You are about to drop the column `user_id` on the `paymentmethod` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `transation` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `wallet` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `withdrawmethod` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_internal_id]` on the table `wallet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_internal_id` to the `paymentmethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_internal_id` to the `transation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_internal_id` to the `wallet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_internal_id` to the `withdrawmethod` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "wallet_user_id_key";

-- AlterTable
ALTER TABLE "paymentmethod" DROP COLUMN "user_id",
ADD COLUMN     "user_internal_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "transation" DROP COLUMN "user_id",
ADD COLUMN     "user_internal_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "wallet" DROP COLUMN "user_id",
ADD COLUMN     "user_internal_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "withdrawmethod" DROP COLUMN "user_id",
ADD COLUMN     "user_internal_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "wallet_user_internal_id_key" ON "wallet"("user_internal_id");

-- AddForeignKey
ALTER TABLE "userwithdrawaccount" ADD CONSTRAINT "userwithdrawaccount_user_internal_id_fkey" FOREIGN KEY ("user_internal_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet" ADD CONSTRAINT "wallet_user_internal_id_fkey" FOREIGN KEY ("user_internal_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paymentmethod" ADD CONSTRAINT "paymentmethod_user_internal_id_fkey" FOREIGN KEY ("user_internal_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdrawmethod" ADD CONSTRAINT "withdrawmethod_user_internal_id_fkey" FOREIGN KEY ("user_internal_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transation" ADD CONSTRAINT "transation_user_internal_id_fkey" FOREIGN KEY ("user_internal_id") REFERENCES "users"("user_internal_id") ON DELETE RESTRICT ON UPDATE CASCADE;
