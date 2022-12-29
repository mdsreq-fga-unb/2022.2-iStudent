export interface AccountStudentModel {
    id: string
    name: string
    email: string
    password: string
}

export interface AccountTeacherModel {
    id: number
    name: string
    email: string
    password: string
    subjects: string[]
    biography: string
}