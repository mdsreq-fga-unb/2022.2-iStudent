-- AlterTable
ALTER TABLE "User" ADD COLUMN     "subjects" TEXT[] DEFAULT ARRAY[]::TEXT[];
