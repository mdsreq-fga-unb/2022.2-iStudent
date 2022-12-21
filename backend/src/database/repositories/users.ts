import prisma from '..';

const userRepository = {
  getAll: () => {
    return prisma.user.findMany();
  },
};
export default userRepository;
