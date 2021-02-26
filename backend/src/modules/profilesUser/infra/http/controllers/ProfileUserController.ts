import CreateProfileUserService from '@modules/profilesUser/services/CreateProfileUserService';
import ShowProfileUserService from '@modules/profilesUser/services/ShowProfileUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ProfilesUserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createProfileUser = container.resolve(CreateProfileUserService);
    const { name, ativo } = request.body;
    const company = await createProfileUser.execute({
      name,
      ativo,
    });

    return response.json(company);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.query;
    const showProfileUser = container.resolve(ShowProfileUserService);
    const profileUser = await showProfileUser.execute({
      profileUserId: id as string,
    });
    return response.json(profileUser).status(200);
  }
}

export default ProfilesUserController;
