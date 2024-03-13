import RoleRoute from './role.route';
import { Express, Router } from 'express';
export default class Route {
  static boots = (app: Express, router: Router) => {
    const roleRoute = new RoleRoute();

    roleRoute.boots(app, router);
  };
}
