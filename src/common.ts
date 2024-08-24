import { statSync, readFileSync } from 'fs';
import YAML from 'yamljs';
import type { Config } from './types';

export const MOD_NAME = '[screepsmod-decorate]';

export default function (config: Config) {
  config.decorate = {
    reloadConfig: async () => {
      let filename;
      const configFiles = ['config.yml', 'config.yaml'];
      for (const file of configFiles) {
        try {
          statSync(file);
          filename = file;
        } catch (_) {}
      }
      if (!filename) return;
      try {
        const data = readFileSync(filename, 'utf8');
        const { decorateConfig = {} } = YAML.parse(data);
        console.log(`${MOD_NAME} Applying config:`, decorateConfig);
        config.decorate.config = decorateConfig;
      } catch (err) {
        console.error(`${MOD_NAME} Error loading config:`, err);
      }
    },
  };
}
