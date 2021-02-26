import AppError from '@shared/errors/AppError';
import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import IGroupUserRepository from '../repositories/IGroupUserRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteGroupUserService {
  constructor(
    @inject('GroupUserRepository')
    private groupUserRepository: IGroupUserRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const groupUser = await this.groupUserRepository.findById(id);

    if (!groupUser) {
      throw new AppError(
        'Group User not existing, verify for delete register.',
      );
    }

    await this.groupUserRepository.delete(id);
  }
}

export default DeleteGroupUserService;
