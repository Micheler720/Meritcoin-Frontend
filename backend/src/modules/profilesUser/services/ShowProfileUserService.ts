import ProfileUser from '@modules/profilesUser/infra/typeorm/entities/ProfileUser';
import IProfileUserRepository from '@modules/profilesUser/repositories/IProfileUserRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  profileUserId: string;
}

@injectable()
class ShowProfileUserService {
  constructor(
    @inject('ProfilesUserRepository')
    private profileUserRepository: IProfileUserRepository,
  ) {}

  public async execute({ profileUserId }: IRequest): Promise<ProfileUser> {
    const profileUser = await this.profileUserRepository.findById(
      profileUserId,
    );
    if (!profileUser) {
      throw new AppError('Not already profile user, verify.');
    }
    return profileUser;
  }
}

export default ShowProfileUserService;
