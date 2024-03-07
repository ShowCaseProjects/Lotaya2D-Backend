/*
  Warnings:

  - You are about to drop the column `ststus` on the `adminreceiveraccount` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "adminreceiveraccount" DROP COLUMN "ststus",
ADD COLUMN     "status" INTEGER;
