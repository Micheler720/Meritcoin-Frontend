import AppError from '@shared/errors/AppError';
import FakeGroupUserRepository from '../repositories/fakes/FakeGroupUserRepository';
import CreateGroupUserService from './CreateGroupUserService';

let fakeGrouUserRepository: FakeGroupUserRepository;
let createGroupUser: CreateGroupUserService;

describe('CreateGroupUserService', () => {
  beforeEach(() => {
    fakeGrouUserRepository = new FakeGroupUserRepository();
    createGroupUser = new CreateGroupUserService(fakeGrouUserRepository);
  });

  it('shoul not be able create user group name already', async () => {
    await createGroupUser.execute({
      ativo: true,
      name: 'Group Teste',
    });

    await expect(
      createGroupUser.execute({
        ativo: true,
        name: 'Group Teste',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('shoul be able create user group.', async () => {
    const groupUser = await createGroupUser.execute({
      ativo: true,
      name: 'Group Teste',
    });
    expect(groupUser).toHaveProperty('id');
  });
});
