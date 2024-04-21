/*
  Warnings:

  - You are about to drop the column `userEmail` on the `income` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `income` DROP FOREIGN KEY `Income_userEmail_fkey`;

-- AlterTable
ALTER TABLE `income` DROP COLUMN `userEmail`;
