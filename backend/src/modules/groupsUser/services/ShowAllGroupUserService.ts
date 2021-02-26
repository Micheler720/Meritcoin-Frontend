import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import GroupUser from '../infra/typeorm/entities/GroupUser';
import IGroupUserRepository from '../repositories/IGroupUserRepository';

@injectable()
class ShowAllGroupUserService {
  constructor(
    @inject('GroupUsersRepository')
    private groupUserRepository: IGroupUserRepository,
  ) {}

  public async execute(): Promise<GroupUser[]> {
    const groupUser = await this.groupUserRepository.findByAll({ ativo: true });
    return groupUser;
  }
}

export default ShowAllGroupUserService;
