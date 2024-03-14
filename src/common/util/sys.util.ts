import { join } from 'path';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

export class SysUtil {
  static pathConfig = (path: string): string => {
    return join(__dirname, '..', '..', path, '/**/*.entity{.ts,.js}');
  };

  static env = () => {
    const envPath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'env',
      '.env.mono',
    );
    const env = dotenv.parse(fs.readFileSync(envPath));
    return env;
  };
}
