export type CourseRegistrationModel = {
    id: string;
    courseId: string;
    userId: string;
    isRegistered: "MATRICULADO" | "NÃO MATRICULADO"
}