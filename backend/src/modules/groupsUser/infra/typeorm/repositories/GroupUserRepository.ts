import ICreateGroupUserDTO from '@modules/groupsUser/dtos/ICreateGroupUserDTO';
import IFindAllGroupUserDTO from '@modules/groupsUser/dtos/IFindAllGroupUserDTO';
import IFindByNameNotIdDTO from '@modules/groupsUser/dtos/IFindByNameNotIdDTO';
import IGroupUserRepository from '@modules/groupsUser/repositories/IGroupUserRepository';
import { getRepository, Not, Repository } from 'typeorm';
import GroupUser from '../entities/GroupUser';

class GrouUserRepository implements IGroupUserRepository {
  private ormRepository: Repository<GroupUser>;

  constructor() {
    this.ormRepository = getRepository(GroupUser);
  }

  async create({ ativo, id, name }: ICreateGroupUserDTO): Promise<GroupUser> {
    const groupRepository = this.ormRepository.create({
      ativo,
      name,
      id,
    });
    await this.ormRepository.save(groupRepository);
    return groupRepository;
  }

  async save(groupUser: GroupUser): Promise<GroupUser> {
    await this.ormRepository.save(groupUser);
    return groupUser;
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  async findByAll({ ativo }: IFindAllGroupUserDTO): Promise<GroupUser[]> {
    const groupsUser = await this.ormRepository.find({ where: { ativo } });
    return groupsUser;
  }

  async findById(id: string): Promise<GroupUser | undefined> {
    const groupUser = await this.ormRepository.findOne(id);
    return groupUser;
  }

  async findByName(name: string): Promise<GroupUser | undefined> {
    const groupUser = await this.ormRepository.findOne({ where: { name } });
    return groupUser;
  }

  async findByNameNotId({
    name,
    id,
  }: IFindByNameNotIdDTO): Promise<GroupUser | undefined> {
    const groupUser = await this.ormRepository.findOne({
      where: [{ name }, { id: Not(id) }],
    });
    return groupUser;
  }
}

export default GrouUserRepository;
