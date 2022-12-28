import { AccountTeacherModel } from '../../domain/models/account';
import { addTeacherAccountModel } from '../../domain/useCases/addTeacherAccount';

export interface TeacherRepository {
  addTeacher(account: addTeacherAccountModel): Promise<AccountTeacherModel>;
}

export default {};
