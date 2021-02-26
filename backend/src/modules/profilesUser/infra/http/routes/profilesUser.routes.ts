import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ProfileUserController from '../controllers/ProfileUserController';

const profilesUserRouter = Router();
const profileUserController = new ProfileUserController();

profilesUserRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      ativo: Joi.boolean().required(),
    }),
  }),
  profileUserController.create,
);

profilesUserRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  profileUserController.show,
);

export default profilesUserRouter;
