import { HttpRequest } from '../../protocols'
import { SignUpTeacherController } from './signup-teacher-controller'

const makeFakeRequest = (): HttpRequest => ({
    body: {
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password',
        photo_url: 'any_photo_url',
        whatsapp: 'any_whatsapp',
        biography: 'any_biography',
        materials: [
            {
                name: 'any_material_name',
            }
        ],
        costPerHour: 30,
        disponibility: "10/10/2020",
    }
})

describe('SignUpTeacher Controller', () => {
    test('should return 200', async () => {
        const sut = new SignUpTeacherController()
        const httpRequest = makeFakeRequest()
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(200)
    })
})