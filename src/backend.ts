import type { Config, Location } from './types';

const ASSETS_URL = 'https://s3.amazonaws.com/static.screeps.com/';

const getCustomWall = (config: Config, location: Location) => {
  if (!config.decorate.config?.wall || Object.keys(config.decorate.config.wall).length === 0) return;

  const wallConfig = config.decorate.config.wall;
  const { foregroundUrl } = wallConfig;
  const wall = {
    active: {
      ...wallConfig,
      world: true,
      room: location.room,
      shard: location.shard,
    },
    decoration: {
      graphics: [],
      type: 'wallLandscape',
      name: 'Custom Wall',
      foregroundUrl: foregroundUrl ?? `${ASSETS_URL}season5/wall.png`,
    },
  };
  return wall;
};

const getCustomFloor = (config: Config, location: Location) => {
  if (!config.decorate.config?.floor || Object.keys(config.decorate.config.floor).length === 0) return;

  const floorConfig = config.decorate.config.floor;
  const { floorForegroundUrl } = floorConfig;
  const floor = {
    active: {
      ...floorConfig,
      world: true,
      room: location.room,
      shard: location.shard,
    },
    decoration: {
      graphics: [],
      type: 'floorLandscape',
      name: 'Custom Floor',
      floorForegroundUrl: floorForegroundUrl ?? `${ASSETS_URL}season5/floor.png`,
    },
  };
  return floor;
};

const getDecorations = (config: Config, location: Location) => {
  const decorations = [];
  if (!config.decorate.config) config.decorate.reloadConfig();

  const wall = getCustomWall(config, location);
  if (wall) decorations.push(wall);

  const floor = getCustomFloor(config, location);
  if (floor) decorations.push(floor);

  return decorations;
};

export default function (config: Config) {
  config.backend?.on('expressPostConfig', () => {
    config.backend?.router.get('/game/room-decorations', (request, response) => {
      const decorations = getDecorations(config, request.query);
      response.json({ ok: 1, decorations });
    });
  });
}
