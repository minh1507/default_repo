import { Response, Request } from 'express';
import RoleService from './role.service';

export default class RoleController {
  roleService: RoleService;

  constructor() {
    this.roleService = new RoleService();
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.roleService.create({
      id: 1,
      code: 'string',
      name: 'string',
    });
    return res.status(201).json(result);
  };

  findAll = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.roleService.findAll({
      id: 1,
      code: 'string',
      name: 'string',
    });
    return res.status(200).json(result);
  };

  findOne = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.roleService.findOne({
      id: 1,
      code: 'string',
      name: 'string',
    });
    return res.status(201).json(result);
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.roleService.update({
      id: 1,
      code: 'string',
      name: 'string',
    });
    return res.status(201).json(result);
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.roleService.delete({
      id: 1,
      code: 'string',
      name: 'string',
    });
    return res.status(201).json(result);
  };
}
