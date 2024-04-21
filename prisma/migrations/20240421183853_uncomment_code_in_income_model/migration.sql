/*
  Warnings:

  - Added the required column `userEmail` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `income` ADD COLUMN `userEmail` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Income` ADD CONSTRAINT `Income_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `users`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
