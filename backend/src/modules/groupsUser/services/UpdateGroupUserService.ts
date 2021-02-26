import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import GroupUser from '../infra/typeorm/entities/GroupUser';
import IGroupUserRepository from '../repositories/IGroupUserRepository';

interface IRequest {
  id: string;
  ativo: boolean;
  name: string;
}

@injectable()
class UpdateGroupUserService {
  constructor(
    @inject('GroupUserRepository')
    private groupUserRepository: IGroupUserRepository,
  ) {}

  public async execute({ name, ativo, id }: IRequest): Promise<GroupUser> {
    const groupUser = await this.groupUserRepository.findById(id);

    if (!groupUser) {
      throw new AppError('User alread, not possible update.');
    }

    const verifyGroupExistGroupUser = await this.groupUserRepository.findByNameNotId(
      {
        name,
        id,
      },
    );

    if (verifyGroupExistGroupUser) {
      throw new AppError('Not register group user the already');
    }

    groupUser.name = name;
    groupUser.ativo = ativo;
    const groupUserUpdated = await this.groupUserRepository.save(groupUser);

    return groupUserUpdated;
  }
}

export default UpdateGroupUserService;
