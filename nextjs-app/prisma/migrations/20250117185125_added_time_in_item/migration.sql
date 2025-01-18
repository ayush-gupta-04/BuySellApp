/*
  Warnings:

  - Added the required column `created` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "created" TIMESTAMP(3) NOT NULL;
