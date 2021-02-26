import IProfileUserCreateDTO from '@modules/profilesUser/dtos/IProfileUserCreateDTO';
import IProfileUserRepository from '@modules/profilesUser/repositories/IProfileUserRepository';
import { getRepository, Repository } from 'typeorm';
import ProfileUser from '../entities/ProfileUser';

class ProfileUserRepository implements IProfileUserRepository {
  private ormRepository: Repository<ProfileUser>;

  constructor() {
    this.ormRepository = getRepository(ProfileUser);
  }

  async create(data: IProfileUserCreateDTO): Promise<ProfileUser> {
    const profileUser = this.ormRepository.create({
      name: data.name,
      ativo: data.ativo,
    });
    await this.ormRepository.save(profileUser);
    return profileUser;
  }

  async findById(id: string): Promise<ProfileUser | undefined> {
    const profileUser = await this.ormRepository.findOne(id);
    return profileUser;
  }

  async findByName(name: string): Promise<ProfileUser | undefined> {
    const profileUser = await this.ormRepository.findOne({ where: { name } });
    return profileUser;
  }

  async save(data: ProfileUser): Promise<ProfileUser> {
    const profileUser = await this.ormRepository.save(data);
    return profileUser;
  }
}

export default ProfileUserRepository;
