import { Router } from 'express';
import 'reflect-metadata';
import profilesUserRouter from '@modules/profilesUser/infra/http/routes/profilesUser.routes';
import userRouter from '@modules/users/infra/http/routes/users.routes';
import groupUser from '@modules/groupsUser/infra/http/routes/groupsUser.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import '@shared/container/index';

const routes = Router();

routes.use('/companies', profilesUserRouter);
routes.use('/users', userRouter);
routes.use('/groupUser', groupUser);
routes.use('/profile', profileRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);

export default routes;
