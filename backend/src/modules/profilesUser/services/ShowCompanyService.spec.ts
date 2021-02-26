import FakeProfileUserRepository from '@modules/profilesUser/repositories/fakes/FakeProfileUserRepository';
import AppError from '@shared/errors/AppError';
import { v4 as uuid } from 'uuid';
import ShowProfileUserService from './ShowProfileUserService';

let fakeProfileUserRepository: FakeProfileUserRepository;
let showProfileUser: ShowProfileUserService;

describe('ShowProfileUserService', () => {
  beforeEach(() => {
    fakeProfileUserRepository = new FakeProfileUserRepository();
    showProfileUser = new ShowProfileUserService(fakeProfileUserRepository);
  });

  it('should not be able company not existing.', async () => {
    await expect(
      showProfileUser.execute({
        profileUserId: 'not-existing-company',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able show company.', async () => {
    const profileUser = await fakeProfileUserRepository.create({
      id: uuid(),
      ativo: true,
      name: 'Cantina tia Eliana',
    });
    const findProfileUser = await showProfileUser.execute({
      profileUserId: profileUser.id,
    });

    expect(findProfileUser.id).toBe(profileUser.id);
  });
});
