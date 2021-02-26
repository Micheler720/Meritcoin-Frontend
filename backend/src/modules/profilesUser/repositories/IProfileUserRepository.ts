import IProfileUserCreateDTO from '../dtos/IProfileUserCreateDTO';
import ProfileUser from '../infra/typeorm/entities/ProfileUser';

export default interface IProfileUserRepository {
  create(data: IProfileUserCreateDTO): Promise<ProfileUser>;
  findById(id: string): Promise<ProfileUser | undefined>;
  save(data: ProfileUser): Promise<ProfileUser>;
  findByName(name: string): Promise<ProfileUser | undefined>;
}
