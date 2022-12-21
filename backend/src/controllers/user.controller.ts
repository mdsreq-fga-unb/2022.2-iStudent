import { Request, Response } from 'express';
import userRepository from '../database/repositories/users';

const userController = {
  getUser: async (req: Request, res: Response) => {
    const users = await userRepository.getAll();
    res.json({ users });
  },
};

export default userController;
