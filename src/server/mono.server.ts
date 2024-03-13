import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import { SysClass } from '../common/class/sys.class';
import Router from '../route';
import Table from 'cli-table3';
import { consola } from 'consola';
export default class Mono extends SysClass {
  private port: string = '';
  private domain: string = '';
  private flag: number = 0;

  constructor() {
    super();
    const envPath = path.resolve(__dirname, '..', '..', 'env', '.env.mono');
    const env = dotenv.parse(fs.readFileSync(envPath));

    // init variable
    this.port = env.MONO_PORT;
    this.domain = env.MONO_DOMAIN;
  }

  private config = () => {
    try {
      Router.boots(this.app, this.router);
      consola.success(`Set up configuration success`);
    } catch (error) {
      this.flag++;
      consola.fail(`Set up configuration failed`);
    }
  };

  private middleware = () => {
    try {
      this.app.use(bodyParser.json({ limit: '50mb' }));
      this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
      this.app.use(cors());
      consola.success(`Set up middleware success`);
    } catch (error) {
      this.flag++;
      consola.fail(`Set up middleware failed`);
    }
  };

  private bootstrap = () => {
    try {
      this.app.listen(this.port);
      consola.success('Booting success');
    } catch (error) {
      this.flag++;
      consola.fail('Booting failed');
    }
  };

  run = () => {
    console.clear();
    consola.info('Booting sofeware');
    consola.start('Start setting up');
    this.middleware();
    this.config();
    this.bootstrap();

    if (this.flag) {
      consola.error('Set up failed');
    } else {
      consola.box('Set up successfully');
      consola.silent(`Ready on: ${this.domain}:${this.port}`);
      const table = new Table({
        chars: {
          top: '═',
          'top-mid': '╤',
          'top-left': '╔',
          'top-right': '╗',
          bottom: '═',
          'bottom-mid': '╧',
          'bottom-left': '╚',
          'bottom-right': '╝',
          left: '║',
          'left-mid': '╟',
          mid: '─',
          'mid-mid': '┼',
          right: '║',
          'right-mid': '╢',
          middle: '│',
        },
      });
      table.push(
        ['sql', 'nosql', 'tech', 'lib'],
        ['mysql', 'mongodb', 'nodejs', 'typeorm'],
        ['postgreql', null, 'aws', 'aws-sdk'],
      );
      console.log(table.toString());
    }
  };
}
