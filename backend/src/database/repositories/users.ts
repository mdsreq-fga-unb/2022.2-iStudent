import { AccountTeacherModel } from '../../domain/models/account';
import { addTeacherAccountModel } from '../../domain/useCases/addTeacherAccount';
import { editStudentAccountModel } from '../../domain/useCases/editAccount/editStudentAccount';

export interface UserRepository {
  addTeacher(account: addTeacherAccountModel): Promise<AccountTeacherModel>;
  addStudent(account: addTeacherAccountModel): Promise<AccountTeacherModel>;
  findOne(email: string): Promise<AccountTeacherModel | null>;
  updateOne(id: number, account: editStudentAccountModel): Promise<void>;
  deleteOne(id: number): Promise<void>;
  AllTeachers(): Promise<AccountTeacherModel[]>;
}

export default {};
