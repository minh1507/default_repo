import { Express, Router } from 'express';
import RoleController from '../module/system/role/role.controller';

export default class RoleRoute {
  repository: RoleController;
  constructor() {
    this.repository = new RoleController();
  }
  boots = (app: Express, router: Router) => {
    router.post('/', this.repository.create);
    router.get('/', this.repository.findAll);
    router.get('/:id', this.repository.findOne);
    router.patch('/:id', this.repository.update);
    router.delete('/:id', this.repository.delete);
    return app.use('/role', router);
  };
}
