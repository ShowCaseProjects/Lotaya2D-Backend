/*
  Warnings:

  - The primary key for the `paymentmethod` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `payment_id` on the `paymentmethod` table. All the data in the column will be lost.
  - Added the required column `payment_internal_id` to the `paymentmethod` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "paymentmethod" DROP CONSTRAINT "paymentmethod_pkey",
DROP COLUMN "payment_id",
ADD COLUMN     "payment_internal_id" VARCHAR(30) NOT NULL,
ADD CONSTRAINT "paymentmethod_pkey" PRIMARY KEY ("payment_internal_id");
