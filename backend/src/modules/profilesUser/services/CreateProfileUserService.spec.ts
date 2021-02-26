import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import FakeProfileUserRepository from '../repositories/fakes/FakeProfileUserRepository';
import CreateProfileUserService from './CreateProfileUserService';

describe('CreateCompany', () => {
  it('should be able to create a new profile user', async () => {
    const fakeProfileUserRepository = new FakeProfileUserRepository();
    const createCompany = new CreateProfileUserService(
      fakeProfileUserRepository,
    );
    const profileUser = await createCompany.execute({
      ativo: true,
      name: 'Testes Unitários',
    });
    expect(profileUser).toHaveProperty('id');
  });
  it('should not be able to create a new profile user if exists', async () => {
    const fakeProfileUserRepository = new FakeProfileUserRepository();
    const createProfileUser = new CreateProfileUserService(
      fakeProfileUserRepository,
    );
    await createProfileUser.execute({
      ativo: true,
      name: 'Testes Unitários',
    });

    expect(
      createProfileUser.execute({
        name: 'Testes Unitários',
        ativo: true,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
