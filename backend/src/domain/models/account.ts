export interface AccountStudentModel {
    id: string
    name: string
    email: string
    password: string
}

export interface AccountTeacherModel {
    id: string
    name: string
    email: string
    password: string
    photo_url: string
    whatsapp: string
    biography: string
    materials: [
        {
            name: string
        }
    ],
    costPerHour: number
    disponibility: string
}