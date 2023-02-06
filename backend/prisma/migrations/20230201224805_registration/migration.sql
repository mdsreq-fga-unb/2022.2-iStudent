/*
  Warnings:

  - You are about to drop the column `teacherName` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `teacherTotalHours` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `teacherTotalStudents` on the `Course` table. All the data in the column will be lost.
  - Added the required column `totalHours` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalStudents` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Registered" AS ENUM ('MATRICULADO', 'NAO_MATRICULADO');

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "accepted" BOOLEAN;

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "teacherName",
DROP COLUMN "teacherTotalHours",
DROP COLUMN "teacherTotalStudents",
ADD COLUMN     "totalHours" INTEGER NOT NULL,
ADD COLUMN     "totalStudents" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Register" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "courseId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "Registered" NOT NULL,

    CONSTRAINT "Register_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
