/*
  Warnings:

  - You are about to drop the column `update_at` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "update_at",
ADD COLUMN     "bio" TEXT;
