# @admon-dev/screepsmod-decorate

### Screeps mod for custom room decorations.

This mod allows server admins to decorate room walls and floors. It is a great way to make your server unique or festive for special events.

![](https://github.com/user-attachments/assets/a0e53ea7-50bb-4969-a46a-d857d67b1037)

## Installation

For the best experience, use [screeps-launcher](https://github.com/screepers/screeps-launcher) or [Jomik/screeps-server](https://github.com/Jomik/screeps-server), add the mod **in quotes** to the `mods` section of the server config.yml:

```yml
mods:
- '@admon-dev/screepsmod-decorate'
```

Alternatively, install the package in the mods folder using `npm i @admon-dev/screepsmod-decorate`

## Config

Add the `decorateConfig` section to the server config.yml (at the top-level).

#### Example config

```yml
decorateConfig:
  wall:
    foregroundColor: '#612020'
    foregroundBrightness: 1
    foregroundAlpha: 0.3
    backgroundColor: '#111'
    backgroundBrightness: 1
    strokeColor: '#333'
    strokeBrightness: 1
    strokeLighting: 0
    strokeWidth: 20
    # foregroundUrl: ''
  floor:
    floorBackgroundColor: '#4b4a5e'
    floorBackgroundBrightness: 1
    floorForegroundColor: '#696e86'
    floorForegroundBrightness: 1
    floorForegroundAlpha: 0.2
    swampColor: '#ff0022'
    swampStrokeColor: '#c50e0e'
    swampStrokeWidth: 20
    roadsColor: '#7F8CC2'
    roadsBrightness: 1
    # floorForegroundUrl: ''
```

#### Apply changes

Restart the server to apply config changes (hot reloading not implemented yet).

#### Textures

In the example config, `foregroundUrl` and `floorForegroundUrl` are commented out. These two variables let you to change the wall and floor textures:

- By default (undefined), the S5 wall and floor textures are applied.
- Change the texture by providing a URL to a room decoration PNG image.
- Remove the texture by setting the variable to an empty string.
