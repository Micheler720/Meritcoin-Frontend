import { inject, injectable } from 'tsyringe';
import { v4 as uuid } from 'uuid';
import AppError from '@shared/errors/AppError';
import IProfileUserCreateDTO from '../dtos/IProfileUserCreateDTO';
import IProfileUserRepository from '../repositories/IProfileUserRepository';
import ProfileUser from '../infra/typeorm/entities/ProfileUser';

@injectable()
class CreateProfileUserService {
  constructor(
    @inject('ProfilesUserRepository')
    private profileUserRepository: IProfileUserRepository,
  ) {}

  public async execute({
    ativo,
    name,
  }: Omit<IProfileUserCreateDTO, 'id'>): Promise<ProfileUser> {
    const checkProfileCompanyExist = await this.profileUserRepository.findByName(
      name,
    );

    if (checkProfileCompanyExist) {
      throw new AppError(
        'Profile user already exists, it will not be possible to register.',
        401,
      );
    }
    const profileUser = await this.profileUserRepository.create({
      id: uuid(),
      ativo,
      name,
    });
    return profileUser;
  }
}

export default CreateProfileUserService;
