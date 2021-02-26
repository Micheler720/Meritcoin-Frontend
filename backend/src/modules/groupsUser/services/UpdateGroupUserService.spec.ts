import AppError from '@shared/errors/AppError';
import FakeGroupUserRepository from '../repositories/fakes/FakeGroupUserRepository';
import UpdateGroupUserService from './UpdateGroupUserService';

let updateGroupUser: UpdateGroupUserService;
let fakeGroupUserRepository: FakeGroupUserRepository;

describe('Update Group User ', () => {
  beforeEach(() => {
    fakeGroupUserRepository = new FakeGroupUserRepository();
    updateGroupUser = new UpdateGroupUserService(fakeGroupUserRepository);
  });

  it('shoul not be able updated group user not existing.', async () => {
    await expect(
      updateGroupUser.execute({
        ativo: false,
        id: 'not-existing-id',
        name: 'Not existing group',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('shoul not be able updated name group user if existing.', async () => {
    await fakeGroupUserRepository.create({
      ativo: true,
      id: 'id1',
      name: 'groupUser-one',
    });
    await fakeGroupUserRepository.create({
      ativo: true,
      id: 'id2',
      name: 'groupUser-two',
    });
    await expect(
      updateGroupUser.execute({
        ativo: false,
        id: 'id2',
        name: 'groupUser-one',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('shoul be able updated name group user.', async () => {
    await fakeGroupUserRepository.create({
      ativo: true,
      id: 'id2',
      name: 'groupUser-two',
    });
    await expect(
      updateGroupUser.execute({
        ativo: false,
        id: 'id2',
        name: 'groupUser-one',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
