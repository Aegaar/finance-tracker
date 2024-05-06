/*
  Warnings:

  - The values [other] on the enum `Income_source` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `income` MODIFY `source` ENUM('SALARY', 'FREELANCING', 'INVESTMENTS', 'STOCKS', 'BANK_TRANSFERS', 'OTHER') NOT NULL DEFAULT 'SALARY';
