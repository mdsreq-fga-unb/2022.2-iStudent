/*
  Warnings:

  - You are about to drop the column `subjects` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[teacherId]` on the table `Subject` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "subjects";

-- CreateIndex
CREATE UNIQUE INDEX "Subject_teacherId_key" ON "Subject"("teacherId");
