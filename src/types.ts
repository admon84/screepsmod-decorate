interface WallDecoration {
  foregroundColor: string;
  foregroundBrightness: number;
  foregroundAlpha: number;
  backgroundColor: string;
  backgroundBrightness: number;
  strokeColor: string;
  strokeBrightness: number;
  strokeLighting: number;
  strokeWidth: number;
  tileScale?: number;
  foregroundUrl?: string;
}

interface FloorDecoration {
  floorBackgroundColor: string;
  floorBackgroundBrightness: number;
  floorForegroundColor: string;
  floorForegroundBrightness: number;
  floorForegroundAlpha: number;
  swampColor: string;
  swampStrokeColor: string;
  swampStrokeWidth: number;
  roadsColor: string;
  roadsBrightness: number;
  tileScale?: number;
  floorForegroundUrl?: string;
}

export type ConfigState = {
  wall?: WallDecoration;
  floor?: FloorDecoration;
};

export interface Decorate {
  reloadConfig: () => Promise<void>;
  config?: ConfigState;
}

export interface Config {
  backend?: {
    features?: Array<{ name: string; version: number }>;
    on: (event: string, callback: (app: any) => void) => void;
    router: {
      get: (path: string, handler: (request: any, response: any) => void) => void;
    };
  };
  common?: {
    constants: Record<string, number>;
    storage: {
      db: any;
      env: {
        keys: Record<string, string>;
      };
      pubsub: any;
    };
  };
  engine?: {
    on: (event: string, callback: () => void) => void;
  };
  decorate: Decorate;
}

export interface Location {
  room: string;
  shard?: string;
}
