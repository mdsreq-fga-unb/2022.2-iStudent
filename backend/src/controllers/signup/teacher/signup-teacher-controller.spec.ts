import { MissingParamError } from '../../errors/missign-param-errors'
import { HttpRequest } from '../../protocols'
import { SignUpTeacherController } from './signup-teacher-controller'

interface SutTypes {
    sut: SignUpTeacherController
}

const makeFakeRequest = (): HttpRequest => ({
    body: {
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password',
        confirmationPassword: 'any_password',
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

const makeSut = (): SutTypes => {
    const sut = new SignUpTeacherController()
    return {
        sut
    }
}

describe('SignUpTeacher Controller', () => {
    test('should return 200', async () => {
        const { sut } = makeSut()
        const httpRequest = makeFakeRequest()
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(200)
    })

    test('should return 400 if no name is provided', async () => {
        const { sut } = makeSut()
        const httpRequest = ({
            body: {
                name: '',
                email: 'any_email@email.com',
                password: 'any_password',
                confirmationPassword: 'any_password',
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
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('name'))
    })
    
    test('should return 400 if no email is provided', async () => {
        const { sut } = makeSut()
        const httpRequest = ({
            body: {
                name: 'any_name',
                email: '',
                password: 'any_password',
                confirmationPassword: 'any_password',
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
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('email'))
    })

    test('should return 400 if no password is provided', async () => {
        const { sut } = makeSut()
        const httpRequest = ({
            body: {
                name: 'any_name',
                email: 'any_email@email.com',
                password: '',
                confirmationPassword: 'any_password',
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
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('password'))
    })
    
    test('should return 400 if no confirmation password is provided', async () => {
        const { sut } = makeSut()
        const httpRequest = ({
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
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('confirmationPassword'))
    })

    test('should return 400 if no photo url is provided', async () => {
        const { sut } = makeSut()
        const httpRequest = ({
            body: {
                name: 'any_name',
                email: 'any_email@email.com',
                password: 'any_password',
                confirmationPassword: 'any_password',
                photo_url: '',
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
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('photo_url'))
    })

    test('should return 400 if no biography is provided', async () => {
        const { sut } = makeSut()
        const httpRequest = ({
            body: {
                name: 'any_name',
                email: 'any_email@email.com',
                password: 'any_password',
                confirmationPassword: 'any_password',
                photo_url: 'any_photo_url',
                whatsapp: 'any_whatsapp',
                biography: '',
                materials: [
                    {
                        name: 'any_material_name',
                    }
                ],
                costPerHour: 30,
                disponibility: "10/10/2020",
            }
        })
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('biography'))
    })

    test('should return 400 if no cost per hour is provided', async () => {
        const { sut } = makeSut()
        const httpRequest = ({
            body: {
                name: 'any_name',
                email: 'any_email@email.com',
                password: 'any_password',
                confirmationPassword: 'any_password',
                photo_url: 'any_photo_url',
                whatsapp: 'any_whatsapp',
                biography: 'any_biography',
                materials: [
                    {
                    name: 'any_material_name',
                    }
                ],
                costPerHour: '',
                disponibility: "10/10/2020",
            }
        })
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('costPerHour'))
    })

    test('should return 400 if no disponibility is provided', async () => {
        const { sut } = makeSut()
        const httpRequest = ({
            body: {
                name: 'any_name',
                email: 'any_email@email.com',
                password: 'any_password',
                confirmationPassword: 'any_password',
                photo_url: 'any_photo_url',
                whatsapp: 'any_whatsapp',
                biography: 'any_biography',
                materials: [
                    {
                    name: 'any_material_name',
                    }
                ],
                costPerHour: 30,
                disponibility: "",
            }
        })
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('disponibility'))
    })
})