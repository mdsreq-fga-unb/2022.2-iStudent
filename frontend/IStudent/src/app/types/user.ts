import { Subject } from "./subject"

export type UserRole = 'STUDENT' | 'TEACHER' 

export interface Teacher {
    name: string
    biography: string
    role: 'TEACHER'
    subject: Subject
    email: string
    createdAt: string
}