import AppError from '@shared/errors/AppError';
import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { v4 as uuid } from 'uuid';
import ICreateGroupUserDTO from '../dtos/ICreateGroupUserDTO';
import GroupUser from '../infra/typeorm/entities/GroupUser';
import IGroupUserRepository from '../repositories/IGroupUserRepository';

@injectable()
class CreateGroupUserService {
  constructor(
    @inject('GroupUsersRepository')
    private groupUserRepository: IGroupUserRepository,
  ) {}

  public async execute({
    name,
    ativo,
  }: Omit<ICreateGroupUserDTO, 'id'>): Promise<GroupUser> {
    const verifyExistisName = await this.groupUserRepository.findByName(name);

    if (verifyExistisName) {
      throw new AppError('Already Group user');
    }

    const groupUser = await this.groupUserRepository.create({
      id: uuid(),
      name,
      ativo,
    });

    return groupUser;
  }
}

export default CreateGroupUserService;
