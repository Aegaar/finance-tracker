/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Expense` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Income` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userEmail` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Income` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userEmail` to the `Income` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `expense` ADD COLUMN `slug` VARCHAR(191) NOT NULL,
    ADD COLUMN `userEmail` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `income` ADD COLUMN `slug` VARCHAR(191) NOT NULL,
    ADD COLUMN `userEmail` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Expense_slug_key` ON `Expense`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `Income_slug_key` ON `Income`(`slug`);

-- AddForeignKey
ALTER TABLE `Income` ADD CONSTRAINT `Income_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `users`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Expense` ADD CONSTRAINT `Expense_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `users`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
