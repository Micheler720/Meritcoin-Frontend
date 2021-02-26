import ICreateGroupUserDTO from '../dtos/ICreateGroupUserDTO';
import IFindAllGroupUserDTO from '../dtos/IFindAllGroupUserDTO';
import IFindByNameNotIdDTO from '../dtos/IFindByNameNotIdDTO';
import GroupUser from '../infra/typeorm/entities/GroupUser';

interface IGroupUserRepository {
  create(data: ICreateGroupUserDTO): Promise<GroupUser>;
  save(data: GroupUser): Promise<GroupUser>;
  delete(id: string): Promise<void>;
  findByAll(data: IFindAllGroupUserDTO): Promise<GroupUser[]>;
  findById(id: string): Promise<GroupUser | undefined>;
  findByName(name: string): Promise<GroupUser | undefined>;
  findByNameNotId(data: IFindByNameNotIdDTO): Promise<GroupUser | undefined>;
}

export default IGroupUserRepository;
