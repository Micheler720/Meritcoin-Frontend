import CreateGroupUserService from '@modules/groupsUser/services/CreateGroupUserService';
import DeleteGroupUserService from '@modules/groupsUser/services/DeleteGroupUserService';
import ShowAllGroupUserService from '@modules/groupsUser/services/ShowAllGroupUserService';
import ShowGroupUserService from '@modules/groupsUser/services/ShowGroupUserService';
import UpdateGroupUserService from '@modules/groupsUser/services/UpdateGroupUserService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

class GroupUserController {
  public async index(
    request: Request,
    response: Response,
    _: NextFunction,
  ): Promise<Response> {
    const showAllGroupsUser = container.resolve(ShowAllGroupUserService);
    const groupsUser = showAllGroupsUser.execute();
    return response.json(groupsUser).status(200);
  }

  public async show(
    request: Request,
    response: Response,
    _: NextFunction,
  ): Promise<Response> {
    const { id } = request.params;
    const showGroupUser = container.resolve(ShowGroupUserService);
    const groupUser = showGroupUser.execute({
      id,
    });
    return response.json(groupUser).status(200);
  }

  public async create(
    request: Request,
    response: Response,
    _: NextFunction,
  ): Promise<Response> {
    const { name, ativo } = request.body;
    const createGroupUser = container.resolve(CreateGroupUserService);
    const groupUser = createGroupUser.execute({
      name,
      ativo,
    });
    return response.json(groupUser).status(200);
  }

  public async update(
    request: Request,
    response: Response,
    _: NextFunction,
  ): Promise<Response> {
    const { name, ativo } = request.body;
    const { id } = request.params;
    const updateGroupUser = container.resolve(UpdateGroupUserService);
    const groupUser = updateGroupUser.execute({
      name,
      ativo,
      id,
    });
    return response.json(groupUser).status(200);
  }

  public async delete(
    request: Request,
    response: Response,
    _: NextFunction,
  ): Promise<Response> {
    const { id } = request.params;
    const deleteGroupUser = container.resolve(DeleteGroupUserService);
    deleteGroupUser.execute({
      id,
    });
    return response.send().status(200);
  }
}

export default GroupUserController;
