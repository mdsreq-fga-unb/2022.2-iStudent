import { AccountStudentModel } from '../../domain/models/account';
import { addStudentAccountModel } from '../../domain/useCases/addStudentAccount';

export interface AddStudentRepository {
  addStudent(account: addStudentAccountModel): Promise<AccountStudentModel>;
}
