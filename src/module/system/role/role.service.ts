import { Role } from './role.entity';

export default class RoleService {
  private message: string[] = [];

  create = async (body: Role): Promise<Role> => {
    return new Promise((resolve, reject) => {
      try {
        resolve(body);
      } catch (error) {
        reject(error);
      }
    });
  };

  findAll = async (body: Role): Promise<Role> => {
    return new Promise((resolve, reject) => {
      try {
        resolve(body);
      } catch (error) {
        reject(error);
      }
    });
  };

  findOne = async (body: Role): Promise<Role> => {
    return new Promise((resolve, reject) => {
      try {
        resolve(body);
      } catch (error) {
        reject(error);
      }
    });
  };

  update = async (body: Role): Promise<Role> => {
    return new Promise((resolve, reject) => {
      try {
        resolve(body);
      } catch (error) {
        reject(error);
      }
    });
  };

  delete = async (body: Role): Promise<Role> => {
    return new Promise((resolve, reject) => {
      try {
        resolve(body);
      } catch (error) {
        reject(error);
      }
    });
  };
}
