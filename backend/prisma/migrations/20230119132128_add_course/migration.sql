-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "contents" TEXT[],
    "courseRating" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "teacherName" TEXT NOT NULL,
    "teacherTotalStudents" INTEGER NOT NULL,
    "teacherTotalHours" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);
