import { AccountTeacherModel } from "../models/account"

export interface addTeacherAccountModel {
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

export interface AddTeacherAccount {
    addTeacher (account: addTeacherAccountModel): Promise<AccountTeacherModel>
}