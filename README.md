# @admon-dev/screepsmod-decorate

### Screeps mod for custom room decorations

![](https://github.com/user-attachments/assets/a0e53ea7-50bb-4969-a46a-d857d67b1037)

## Installation

Use a screeps server launcher like [Screepers/screeps-launcher](https://github.com/screepers/screeps-launcher) or [Jomik/screeps-server](https://github.com/Jomik/screeps-server), add the mod **in quotes** to the `mods` section of your server config.yml:

```yml
mods:
- '@admon-dev/screepsmod-decorate'
```

Or manually install the package in your mods folder using `npm i @admon-dev/screepsmod-decorate`

## Config

Add the `decorateConfig` section to your server config.yml and change values as you wish.

Restart the server to apply changes to the decorations (hot reloading not implemented yet).

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
```