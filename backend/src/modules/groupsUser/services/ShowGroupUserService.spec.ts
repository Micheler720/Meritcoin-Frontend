import AppError from '@shared/errors/AppError';
import { v4 as uuid } from 'uuid';
import FakeGroupUserRepository from '../repositories/fakes/FakeGroupUserRepository';
import ShowGroupUserService from './ShowGroupUserService';

let showGroupUserService: ShowGroupUserService;
let fakeGroupUserRepository: FakeGroupUserRepository;

describe('Show Group User', () => {
  beforeEach(() => {
    fakeGroupUserRepository = new FakeGroupUserRepository();
    showGroupUserService = new ShowGroupUserService(fakeGroupUserRepository);
  });
  it('should not be able show already group user', async () => {
    await expect(
      showGroupUserService.execute({
        id: 'no-existing-group-user',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('should be able show group user', async () => {
    const groupUser = await fakeGroupUserRepository.create({
      ativo: true,
      id: uuid(),
      name: 'groupUser',
    });
    expect(groupUser).toHaveProperty('created_at');
  });
});
