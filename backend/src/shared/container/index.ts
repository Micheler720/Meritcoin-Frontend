import { container } from 'tsyringe';

import './providers';

import IProfileUserRepository from '@modules/profilesUser/repositories/IProfileUserRepository';
import ProfileUserRepository from '@modules/profilesUser/infra/typeorm/repositories/ProfileUserRepository';

import IUserRepository from '@modules/users/repositories/IUsersRepository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IGroupUserRepository from '@modules/groupsUser/repositories/IGroupUserRepository';
import GroupUserRepository from '@modules/groupsUser/infra/typeorm/repositories/GroupUserRepository';

import '@modules/users/providers';

container.registerSingleton<IProfileUserRepository>(
  'ProfilesUserRepository',
  ProfileUserRepository,
);

container.registerSingleton<IGroupUserRepository>(
  'GroupUserRepository',
  GroupUserRepository,
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
