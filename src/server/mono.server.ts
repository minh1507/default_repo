import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import { SysClass } from '../common/class/sys.class';
import Router from '../route';

export default class Mono extends SysClass {
  private port: string = '';
  private domain: string = '';

  constructor() {
    super();
    const envPath = path.resolve(__dirname, '..', '..', 'env', '.env.mono');
    const env = dotenv.parse(fs.readFileSync(envPath));

    // init variable
    this.port = env.MONO_PORT;
    this.domain = env.MONO_DOMAIN;
  }

  private config = () => {
    Router.boots()
  }

  private middleware = () => {
    this.app.use(bodyParser.json({ limit: '5000mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '5000mb', extended: true }));
    this.app.use(cors());
  }

  private bootstrap = () => {
    this.app.listen(this.port, () => {
      console.log(`Domain: ${this.domain}:${this.port}`);
    });
  }

  run = () => {
    this.middleware();
    this.config();
    this.bootstrap();
  }
}
