import backend from './backend';
import common from './common';
import engine from './engine';
import type { Config } from './types';

export default function (config: Config) {
  common(config);
  if (config.backend) backend(config);
  if (config.engine) engine(config);
}
