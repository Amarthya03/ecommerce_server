/*
  Warnings:

  - Added the required column `discount` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "discount" INTEGER NOT NULL,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;
