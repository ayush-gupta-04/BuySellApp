/*
  Warnings:

  - Added the required column `contact` to the `Buy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Buy" ADD COLUMN     "contact" TEXT NOT NULL;
