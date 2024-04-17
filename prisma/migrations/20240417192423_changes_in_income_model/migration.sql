/*
  Warnings:

  - You are about to drop the column `Amount` on the `income` table. All the data in the column will be lost.
  - You are about to drop the column `Date` on the `income` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Income` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `income` DROP COLUMN `Amount`,
    DROP COLUMN `Date`,
    ADD COLUMN `amount` INTEGER NOT NULL,
    ADD COLUMN `date` DATETIME(3) NOT NULL;
