-- CreateEnum
CREATE TYPE "ClassType" AS ENUM ('REMOTA', 'PRESENCIAL');

-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "ClassType" NOT NULL DEFAULT 'REMOTA',
    "days" TEXT[],
    "time" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);
