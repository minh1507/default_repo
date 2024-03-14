import { DataSource } from 'typeorm';
import { SysUtil } from '../util/sys.util';
import { MYSQL } from '../const/database.const';

const env = SysUtil.env();

const entitiesPath = SysUtil.pathConfig('module');
const dataSource = new DataSource({
  type: MYSQL,
  host: env.MONO_DB_SQL_HOST,
  port: Number(env.PORT),
  username: env.MONO_DB_SQL_USERNAME,
  password: env.MONO_DB_SQL_PASSWORD,
  database: env.MONO_DB_SQL_NAME,
  entities: [entitiesPath],
  synchronize: true,
  logging: ['error', 'warn'],
});

export default dataSource;
