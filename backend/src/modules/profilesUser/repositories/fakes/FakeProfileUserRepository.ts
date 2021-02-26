import IProfileUserCreateDTO from '@modules/profilesUser/dtos/IProfileUserCreateDTO';
import ProfileUser from '@modules/profilesUser/infra/typeorm/entities/ProfileUser';
import { v4 as uuid } from 'uuid';
import IProfileUserRepository from '../IProfileUserRepository';

class FakeProfileUserRepository implements IProfileUserRepository {
  private profilesUser: ProfileUser[] = [];

  async create(data: IProfileUserCreateDTO): Promise<ProfileUser> {
    const profileUser = new ProfileUser();
    Object.assign(
      profileUser,
      { id: uuid(), created_at: new Date(), updated_at: new Date() },
      data,
    );
    this.profilesUser.push(profileUser);
    return profileUser;
  }

  async findByName(name: string): Promise<ProfileUser | undefined> {
    const profileUser = this.profilesUser.find(item => item.name === name);
    return profileUser;
  }

  async findById(id: string): Promise<ProfileUser | undefined> {
    const profileUser = this.profilesUser.find(item => item.id === id);
    return profileUser;
  }

  async save(data: ProfileUser): Promise<ProfileUser> {
    const indexProfileUser = this.profilesUser.findIndex(
      item => item.id === data.id,
    );
    this.profilesUser[indexProfileUser] = data;
    return data;
  }
}

export default FakeProfileUserRepository;
