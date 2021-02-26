import { container } from 'tsyringe';

import IUserTokenRepository from '@modules/users/repositories/IUsersTokenRepository';
import UserTokenRepository from '@modules/users/infra/typeorm/repositories/UserTokenRepository';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/models/IMailProvider';
import MailTrapProvider from './MailProvider/implementations/MailTrapProvider';

import IMailTemplateProvider from './MailTemplateProvider/models/IMailTemplateProvider';
import HandlebarsMailTemplateProvider from './MailTemplateProvider/Implementations/HandleBarsMailTemplateProvider';

import ICacheProvider from './CacheProvider/models/ICacheProvider';
import CacheProvider from './CacheProvider/implementations/RedisCacheProvider';

container.registerSingleton<IStorageProvider>(
  'DiskStorage',
  DiskStorageProvider,
);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandlebarsMailTemplateProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(MailTrapProvider),
);

container.registerSingleton<IUserTokenRepository>(
  'UsersToken',
  UserTokenRepository,
);

container.registerSingleton<ICacheProvider>('CacheProvider', CacheProvider);
