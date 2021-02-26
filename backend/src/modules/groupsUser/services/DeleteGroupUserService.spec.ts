import AppError from '@shared/errors/AppError';
import FakeGroupUserRepository from '../repositories/fakes/FakeGroupUserRepository';
import DeleteGroupUserService from './DeleteGroupUserService';

let fakeGroupUserRepository: FakeGroupUserRepository;
let deleteGroupUser: DeleteGroupUserService;

describe('Delete group user Service', () => {
  beforeEach(() => {
    fakeGroupUserRepository = new FakeGroupUserRepository();
    deleteGroupUser = new DeleteGroupUserService(fakeGroupUserRepository);
  });
  it('should not be able delete group user not existing.', async () => {
    await expect(
      deleteGroupUser.execute({
        id: 'not-existing-group-user',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('should be able  delete group user.', async () => {
    const deletUserGroup = jest.spyOn(fakeGroupUserRepository, 'delete');
    await fakeGroupUserRepository.create({
      id: 'existing-group-user',
      ativo: true,
      name: 'Group-user-name',
    });

    await deleteGroupUser.execute({
      id: 'existing-group-user',
    });
    expect(deletUserGroup).toHaveBeenCalledWith('existing-group-user');
  });
});
