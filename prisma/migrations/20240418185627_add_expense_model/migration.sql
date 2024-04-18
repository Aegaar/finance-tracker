/*
  Warnings:

  - The values [INVESTIMENTS] on the enum `Income_source` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `income` MODIFY `source` ENUM('SALARY', 'FREELANCING', 'INVESTMENTS', 'STOCKS', 'BANK_TRANSFERS', 'OTHER') NOT NULL DEFAULT 'SALARY';

-- CreateTable
CREATE TABLE `Expense` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `amount` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `source` ENUM('EDUCATION', 'GROCERIES', 'HEALTH', 'SUBSCRIPTIONS', 'CLOTHING', 'TRAVELING', 'OTHER') NOT NULL DEFAULT 'GROCERIES',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
