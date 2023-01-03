import { AccountTeacherModel } from '../../domain/models/account';
import { addTeacherAccountModel } from '../../domain/useCases/addTeacherAccount';

export interface UserRepository {
  addTeacher(account: addTeacherAccountModel): Promise<AccountTeacherModel>;
  addStudent(account: addTeacherAccountModel): Promise<AccountTeacherModel>;
  findOne(email: string): Promise<AccountTeacherModel | null>;
}

export default {};
