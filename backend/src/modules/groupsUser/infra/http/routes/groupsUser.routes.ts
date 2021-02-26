import { Router } from 'express';
import ensuredAuthenticate from '@modules/users/infra/http/middleware/ensureAuthencated';
import GroupUserController from '../controllers/groupUserController';

const groupsUserRouter = Router();
const groupUserController = new GroupUserController();

groupsUserRouter.use(ensuredAuthenticate);

groupsUserRouter.get('/:id', groupUserController.show);
groupsUserRouter.get('/', groupUserController.index);
groupsUserRouter.put('/:id', groupUserController.update);
groupsUserRouter.delete('/:id', groupUserController.delete);
groupsUserRouter.post('/', groupUserController.create);

export default groupsUserRouter;
