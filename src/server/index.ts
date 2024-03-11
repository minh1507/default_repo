import Mono from './mono.server';

export default class Server {
  static boots = () => {
    const mono = new Mono();

    mono.run();
  };
}
