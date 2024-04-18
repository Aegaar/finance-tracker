/*
  Warnings:

  - You are about to drop the column `date` on the `income` table. All the data in the column will be lost.
  - Added the required column `incomeDate` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `income` DROP COLUMN `date`,
    ADD COLUMN `incomeDate` DATETIME(3) NOT NULL;
