import type { Config } from './types';

export default function (config: Config) {
  config.engine?.on('init', () => {
    config.decorate.reloadConfig();
  });
}
