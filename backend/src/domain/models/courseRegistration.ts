export type CourseRegistrationModel = {
    id: string;
    courseId: string;
    userId: string;
    status: "MATRICULADO" | "NAO_MATRICULADO"
}