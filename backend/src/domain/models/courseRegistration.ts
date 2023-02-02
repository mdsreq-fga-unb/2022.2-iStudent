export type CourseRegistrationModel = {
    id: number;
    courseId: number;
    userId: number;
    status: "MATRICULADO" | "NAO_MATRICULADO"
}