import { v4 as uuid } from 'uuid';
import FakeGroupUserRepository from '../repositories/fakes/FakeGroupUserRepository';
import ShowAllGroupUserService from './ShowAllGroupUserService';

let showAllGroupUser: ShowAllGroupUserService;
let groupUserRepository: FakeGroupUserRepository;

describe('Show all group user Service', () => {
  beforeEach(() => {
    groupUserRepository = new FakeGroupUserRepository();
    showAllGroupUser = new ShowAllGroupUserService(groupUserRepository);
  });

  it('should be able show all group user.', async () => {
    const groupUser = await groupUserRepository.create({
      ativo: true,
      id: uuid(),
      name: 'Group-User',
    });
    const groupsUser = await showAllGroupUser.execute();

    expect(groupsUser).toContainEqual({
      ativo: true,
      id: groupUser.id,
      name: 'Group-User',
      created_at: groupUser.created_at,
      updated_at: groupUser.updated_at,
    });
  });
});
