/*
  Warnings:

  - You are about to drop the column `status` on the `Register` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Register" DROP COLUMN "status";

-- DropEnum
DROP TYPE "Registered";

-- AddForeignKey
ALTER TABLE "Register" ADD CONSTRAINT "Register_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Register" ADD CONSTRAINT "Register_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
