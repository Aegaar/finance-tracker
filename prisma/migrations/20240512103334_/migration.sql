/*
  Warnings:

  - You are about to alter the column `amount` on the `Income` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2);
