import express from 'express';
import RoleController from '../module/role/role.controller';

export default class RoleRoute{
    static boots = () => {
        const app = express();
        const router = express.Router()

        router.get('/', RoleController.findAll);
        return app.use('/role', router);
    }
}