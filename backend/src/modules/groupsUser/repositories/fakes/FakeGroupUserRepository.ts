import ICreateGroupUserDTO from '@modules/groupsUser/dtos/ICreateGroupUserDTO';
import IFindAllGroupUserDTO from '@modules/groupsUser/dtos/IFindAllGroupUserDTO';
import IFindByNameNotIdDTO from '@modules/groupsUser/dtos/IFindByNameNotIdDTO';
import GroupUser from '@modules/groupsUser/infra/typeorm/entities/GroupUser';
import IGroupUserRepository from '../IGroupUserRepository';

class FakeGroupUserRepository implements IGroupUserRepository {
  private groupsUsers: GroupUser[] = [];

  async create(data: ICreateGroupUserDTO): Promise<GroupUser> {
    const groupUser = Object.assign(data, {
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.groupsUsers.push(groupUser);
    return groupUser;
  }

  async save(groupUser: GroupUser): Promise<GroupUser> {
    const indexGroupUser = this.groupsUsers.findIndex(
      findGroupUser => findGroupUser.id === groupUser.id,
    );
    this.groupsUsers[indexGroupUser] = groupUser;

    return groupUser;
  }

  async delete(id: string): Promise<void> {
    const groupUserIndex = this.groupsUsers.findIndex(
      findGroupUser => findGroupUser.id === id,
    );
    this.groupsUsers = this.groupsUsers.splice(groupUserIndex, 1);
  }

  async findByAll({ ativo }: IFindAllGroupUserDTO): Promise<GroupUser[]> {
    const groupUser = this.groupsUsers.filter(
      findGroupUser => findGroupUser.ativo === ativo,
    );

    return groupUser;
  }

  async findById(id: string): Promise<GroupUser | undefined> {
    const groupUser = this.groupsUsers.find(
      findGroupUser => findGroupUser.id === id,
    );

    return groupUser;
  }

  async findByName(name: string): Promise<GroupUser | undefined> {
    const groupUser = this.groupsUsers.find(
      findGroupUser => findGroupUser.name === name,
    );
    return groupUser;
  }

  async findByNameNotId({
    name,
    id,
  }: IFindByNameNotIdDTO): Promise<GroupUser | undefined> {
    const groupUser = this.groupsUsers.find(
      findGroupUser => findGroupUser.name === name && findGroupUser.id !== id,
    );
    return groupUser;
  }
}

export default FakeGroupUserRepository;
