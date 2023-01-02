import { AccountStudentModel } from "../../domain/models/account"
import { addStudentAccountModel } from "../../domain/useCases/addStudentAccount"
import { AddStudentRepository } from "../repositories/student-repository"
import { CreateStudentUseCaseRepository } from "./create-student.use-case"

interface SutTypes {
    sut: CreateStudentUseCaseRepository
    addStudentAccountRepositoryStub: AddStudentRepository
}

const makeFakeAccount = (): AccountStudentModel => ({
    id: 'valid_id',
    name: 'valid_name',
    email: 'valid_email',
    password: 'valid_password',
    whatsapp: 'valid_whatsapp',
    biography: 'valid_biography'
})

const makeFakeAccountData = (): addStudentAccountModel => ({
    name: 'valid_name',
    email: 'valid_email',
    password: 'valid_password',
    whatsapp: 'valid_whatsapp',
    biography: 'valid_biography'
})

const makeAddStudentAccountRepository = (): AddStudentRepository => {
    class AddStudentAccountRepositoryStub implements AddStudentRepository {
        addStudent(account: addStudentAccountModel): Promise<AccountStudentModel> {
            return new Promise(resolve => resolve(makeFakeAccount()))
        }
    }
    return new AddStudentAccountRepositoryStub()
}

const makeSut = (): SutTypes => {
    const addStudentAccountRepositoryStub = makeAddStudentAccountRepository()
    const sut = new CreateStudentUseCaseRepository(addStudentAccountRepositoryStub)
    return {
        sut,
        addStudentAccountRepositoryStub
    }
}

describe('CreateStudentUseCaseRepository', () => {
    test('Should call AddStudentAccountRepository with correct values', async () => {
        const { sut, addStudentAccountRepositoryStub } = makeSut()
        const addSpy = jest.spyOn(addStudentAccountRepositoryStub, 'addStudent')
        await sut.addStudent(makeFakeAccountData())
        expect(addSpy).toHaveBeenCalledWith({
            name: 'valid_name',
            email: 'valid_email',
            password: 'valid_password',
            whatsapp: 'valid_whatsapp',
            biography: 'valid_biography'
        })
    })

    test('Should throw if AddStudentAccountRepository throws', async () => {
        const { sut, addStudentAccountRepositoryStub } = makeSut()
        jest.spyOn(addStudentAccountRepositoryStub, 'addStudent').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
        const promise = sut.addStudent(makeFakeAccount())
        expect(promise).rejects.toThrow()
    })

    test('Should return a student account on success', async () => {
        const { sut } = makeSut()
        const account = await sut.addStudent(makeFakeAccountData())
        expect(account).toEqual(makeFakeAccount())
    })
})