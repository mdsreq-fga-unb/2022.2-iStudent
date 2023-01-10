import { Subject } from '../../domain/useCases/Subject';

export interface SubjectRepository {
  addSubject(subject: Subject): Promise<void>;
}

export default {};
