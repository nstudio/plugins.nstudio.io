# Blur

Apply blur effects to any view for iOS and Android.

## Installation

```bash
npm install @nstudio/nativescript-blur
```

## Demo

| iOS | Android |
| --- | --- |
| ![iOS](https://github.com/davecoffin/nativescript-blur/blob/master/blur.gif?raw=true) | ![Android](https://github.com/davecoffin/nativescript-blur/blob/master/blurandroid.gif?raw=true) |

## Usage

```typescript
import { Blur } from '@nstudio/nativescript-blur';

// Pass true to enable limited Android support (dimmer effect)
const blur = new Blur(true);
```

### Apply Blur

```typescript
// Get a reference to the view you want to blur
const kittyView = page.getViewById('kitty');

// Apply blur with a unique key, theme, and optional duration
blur.on(kittyView, 'kitty', 'light').then(() => {
  console.log('Kitty has become blurry.');
}).catch(e => {
  console.dir(e);
});
```

### Remove Blur

```typescript
blur.off('kitty').then(() => {
  console.log('Kitty has cleared up.');
});
```

## API

### `on(view, keyTitle, theme?, duration?): Promise`

Applies blur effect to a view.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `view` | View | Yes | The NativeScript view to blur |
| `keyTitle` | string | Yes | Unique identifier for this blur effect |
| `theme` | string | No | 'light' or 'dark' (default: 'light') |
| `duration` | number | No | Animation duration in seconds (default: 0.3) |

### `off(keyTitle, duration?): Promise`

Removes blur effect from a view.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `keyTitle` | string | Yes | The key used when applying the blur |
| `duration` | number | No | Animation duration in seconds |

## Supported Views

The view needs to be a NativeScript view that has an `ios` property which supports `addSubview`. Examples:

- StackLayout
- GridLayout
- AbsoluteLayout
- DockLayout
- ScrollView
- Image
- Label

## Platform Notes

### iOS

Full blur support with light and dark themes.

### Android

When passing `true` to the constructor, Android will apply a semi-transparent background color (light or dark) instead of a true blur effect. This works well for "dimmer" effects for modals.

## License

Apache License Version 2.0
