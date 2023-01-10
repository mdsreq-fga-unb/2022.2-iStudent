import prisma from '../../../../database';
import { SubjectRepository } from '../../../../database/repositories/subjects';
import { Subject } from '../../../../domain/useCases/Subject';

export class PrismaSubjectRepository implements SubjectRepository {
  async addSubject(subject: Subject) {
    await prisma.subject.upsert({
      where: {
        teacherId: subject.teacherId,
      },
      update: {
        name: subject.name,
      },
      create: {
        name: subject.name,
        teacherId: subject.teacherId,
      },
    });
    return;
  }
}
