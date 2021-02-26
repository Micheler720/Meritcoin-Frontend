import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import GroupUser from '../infra/typeorm/entities/GroupUser';
import IGroupUserRepository from '../repositories/IGroupUserRepository';

interface IRequest {
  id: string;
}

@injectable()
class ShowGroupUserService {
  constructor(
    @inject('GroupUsersRepository')
    private groupUserRepository: IGroupUserRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<GroupUser> {
    const groupUser = await this.groupUserRepository.findById(id);
    if (!groupUser) {
      throw new AppError('Group user not exist.');
    }
    return groupUser;
  }
}

export default ShowGroupUserService;
