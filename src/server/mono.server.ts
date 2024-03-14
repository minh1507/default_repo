import cors from 'cors';
import bodyParser from 'body-parser';
import { SysClass } from '../common/class/sys.class';
import Router from '../route';
import { consola } from 'consola';
import dataSource from '../common/config/typeorm.config';
import { SysUtil } from '../common/util/sys.util';
import { json } from 'express';
export default class Mono extends SysClass {
  private port: string = '';
  private domain: string = '';
  private flag: number = 0;

  constructor() {
    super();
    const env = SysUtil.env();

    // init variable
    this.port = env.MONO_PORT;
    this.domain = env.MONO_DOMAIN;
  }

  private route = async () => {
    try {
      Router.boots(this.app, this.router);
      consola.success(`Set up router success`);
    } catch (error) {
      this.flag++;
      consola.log(error);
      consola.fail(`Set up router failed`);
    }
  };

  private database = async () => {
    try {
      await dataSource.initialize();
      consola.success(`Set up database success`);
    } catch (error) {
      this.flag++;
      consola.log(error);
      consola.fail(`Set up database failed`);
    }
  };

  private middleware = async () => {
    try {
      this.app.use(bodyParser.json({ limit: '50mb' }));
      this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
      this.app.use(cors());
      this.app.use(json());
      consola.success(`Set up middleware success`);
    } catch (error) {
      this.flag++;
      consola.log(error);
      consola.fail(`Set up middleware failed`);
    }
  };

  private bootstrap = async () => {
    try {
      this.app.listen(this.port);
      consola.success('Booting success');
    } catch (error) {
      this.flag++;
      consola.log(error);
      consola.fail('Booting failed');
    }
  };

  run = async () => {
    console.clear();
    consola.info('Booting sofeware');
    consola.start('Start setting up');
    await this.middleware();
    await this.route();
    await this.database();
    await this.bootstrap();

    if (this.flag) {
      consola.error('Set up failed');
    } else {
      consola.box('Set up successfully');
      consola.silent(`Ready on: ${this.domain}:${this.port}`);
    }
  };
}