# Cloudinary

Native Cloudinary image delivery for NativeScript.

The plugin supports:

- A declarative `ImageCloudinary` component with an `options` property
- Native Cloudinary SDK URL generation on both platforms
- Top-level shorthand transformations, chained transformations, or raw transformation strings
- Programmatic URL generation via `generateUrl`
- Compatible with Angular, React, Solid, Svelte, and Vue

<iframe style="width: 100%; min-height: 200px; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/s8QY-f5i7tA" title="Cloudinary for NativeScript" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Installation

```bash
npm install @nstudio/nativescript-cloudinary
```

## Setup

Initialize Cloudinary once before using the component or calling `generateUrl`.

```typescript
import { init } from '@nstudio/nativescript-cloudinary';

init('your_cloud_name', 'your_api_key', 'your_api_secret');
```

`init` accepts an optional fourth `secure` argument which defaults to `true`.

> `init` requires your Cloudinary API secret. If your app should not embed signing credentials on-device, generate signed URLs on your server and pass the resulting URL into your app instead.

## Usage

### NativeScript Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:cl="@nstudio/nativescript-cloudinary"
      navigatingTo="navigatingTo">
  <GridLayout class="p-24">
    <cl:ImageCloudinary
      stretch="aspectFill"
      options="{{ heroImage }}"
    />
  </GridLayout>
</Page>
```

```typescript
import { EventData, Page } from '@nativescript/core';
import { ImageCloudinaryOptions } from '@nstudio/nativescript-cloudinary';

export function navigatingTo(args: EventData) {
  const page = args.object as Page;
  page.bindingContext = new DemoModel();
}

class DemoModel {
  heroImage: ImageCloudinaryOptions = {
    src: 'cld-sample',
    width: 900,
    height: 900,
    crop: 'fill',
    gravity: 'face',
    format: 'auto',
    quality: 'auto',
  };
}
```

### Transformation Modes

`ImageCloudinaryOptions` supports three transformation styles.

Top-level shorthand:

```typescript
const options: ImageCloudinaryOptions = {
  src: 'cld-sample',
  width: 900,
  height: 900,
  crop: 'fill',
  gravity: 'face',
};
```

Chained transformations:

```typescript
const options: ImageCloudinaryOptions = {
  src: 'cld-sample',
  transformations: [
    { width: 900, height: 900, crop: 'fill', gravity: 'auto' },
    { effect: 'sepia' },
    { radius: 'max' },
    { format: 'auto', quality: 'auto' },
  ],
};
```

Raw transformation string:

```typescript
const options: ImageCloudinaryOptions = {
  src: 'cld-sample',
  rawTransformation: 'c_thumb,g_face,h_300,w_300/r_max/f_auto/q_auto',
};
```

Priority order: `rawTransformation` > `transformations` > top-level shorthand properties.

## Framework Registration

### Angular

```typescript
import { registerElement } from '@nativescript/angular';
import { ImageCloudinary } from '@nstudio/nativescript-cloudinary';

registerElement('ImageCloudinary', () => ImageCloudinary);
```

### Other Flavors

```typescript
import { ImageCloudinary } from '@nstudio/nativescript-cloudinary';

// React
registerElement('imageCloudinary', () => ImageCloudinary);

// Solid
registerElement('imageCloudinary', ImageCloudinary);

// Svelte
registerNativeViewElement('imageCloudinary', () => ImageCloudinary);

// Vue
registerElement('ImageCloudinary', () => ImageCloudinary);
```

## Programmatic URL Generation

Generate a Cloudinary URL without rendering the component:

```typescript
import { generateUrl } from '@nstudio/nativescript-cloudinary';

const url = generateUrl({
  src: 'cld-sample',
  width: 600,
  crop: 'scale',
  format: 'auto',
  quality: 'auto',
});
```

## API Reference

### Functions

| Function | Signature | Description |
| --- | --- | --- |
| `init` | `(cloudName: string, apiKey: string, apiSecret: string, secure?: boolean) => void` | Initializes the native Cloudinary SDK. Call once before using the plugin. |
| `generateUrl` | `(options: ImageCloudinaryOptions) => string \| null` | Builds a Cloudinary delivery URL from the provided options. Returns `null` when input is missing or initialization has not happened yet. |

### Properties

| Property | Type | Description |
| --- | --- | --- |
| `options` | `ImageCloudinaryOptions` | Registered NativeScript property on `ImageCloudinary` that builds the Cloudinary URL and assigns it to the underlying `Image.src`. |

### Classes

| Class | Description |
| --- | --- |
| `ImageCloudinary` | A drop-in `Image` subclass that renders Cloudinary-hosted assets from `options`. |

`ImageCloudinary` also exposes a static `debug` flag:

```typescript
import { ImageCloudinary } from '@nstudio/nativescript-cloudinary';

ImageCloudinary.debug = true;
```

### Events

The plugin does not add custom events. Use the standard NativeScript `Image` events and lifecycle behavior when needed.

### Types

| Type | Description |
| --- | --- |
| `ImageCloudinaryOptions` | Top-level configuration for the component or `generateUrl`. |
| `CloudinaryTransformation` | A single transformation step in a chained transformation pipeline. |
| `CropMode` | Supported Cloudinary crop modes such as `fill`, `fit`, `scale`, and `thumb`. |
| `Gravity` | Supported gravity modes such as `auto`, `face`, `faces`, and positional values. |
| `ImageFormat` | Supported delivery formats such as `auto`, `jpg`, `png`, `webp`, and `avif`. |

## CloudinaryTransformation

Each `CloudinaryTransformation` entry supports the following fields:

| Property | Type | Description |
| --- | --- | --- |
| `width` | `number \| string` | Width |
| `height` | `number \| string` | Height |
| `crop` | `CropMode` | Crop mode such as `fill`, `fit`, `scale`, `thumb`, or `pad` |
| `gravity` | `Gravity` | Gravity such as `auto`, `face`, `faces`, or `center` |
| `aspectRatio` | `string \| number` | Aspect ratio |
| `x` | `number \| string` | Horizontal offset |
| `y` | `number \| string` | Vertical offset |
| `zoom` | `number \| string` | Zoom level |
| `format` | `ImageFormat` | Delivery format such as `auto`, `webp`, or `avif` |
| `fetchFormat` | `string` | Fetch format override |
| `quality` | `string \| number` | Delivery quality such as `auto` or `80` |
| `dpr` | `string \| number` | Device pixel ratio |
| `effect` | `string` | Effect such as `sepia`, `grayscale`, or `blur:800` |
| `radius` | `number \| string` | Corner radius, including `max` for circular crops |
| `border` | `string` | Border string such as `5px_solid_rgb:0066ff` |
| `background` | `string` | Background color or special values such as `auto:border` |
| `color` | `string` | Foreground color |
| `colorSpace` | `string` | Color space |
| `angle` | `number \| string` | Rotation angle or flip values |
| `flags` | `string \| string[]` | Cloudinary transformation flags |
| `overlay` | `string` | Overlay public ID or text spec |
| `underlay` | `string` | Underlay public ID |
| `opacity` | `number \| string` | Opacity from `0` to `100` |
| `page` | `number \| string` | Page or frame number |
| `density` | `number \| string` | DPI density |
| `defaultImage` | `string` | Fallback public ID |
| `named` | `string` | Named transformation |
| `variables` | `Record<string, string \| number>` | User-defined Cloudinary variables |
| `rawTransformation` | `string` | Raw transformation segment appended as-is |

## ImageCloudinaryOptions

`ImageCloudinaryOptions` adds delivery metadata on top of transformation settings:

| Property | Type | Description |
| --- | --- | --- |
| `src` | `string` | Required Cloudinary public ID |
| `resourceType` | `'image' \| 'video' \| 'raw' \| 'auto'` | Resource type, defaults to `image` |
| `type` | `'upload' \| 'fetch' \| 'private' \| 'authenticated'` | Delivery type, defaults to `upload` |
| `version` | `string` | Version string such as `v1685472103` |
| `extension` | `string` | File extension override |
| `transformations` | `CloudinaryTransformation[]` | Ordered chain of transformation components |
| `rawTransformation` | `string` | Full raw transformation string |

Top-level shorthand on `ImageCloudinaryOptions` also supports commonly used transformation fields such as `width`, `height`, `crop`, `gravity`, `effect`, `radius`, `format`, `quality`, `dpr`, `background`, `border`, `color`, `angle`, `opacity`, `overlay`, `underlay`, `flags`, `aspectRatio`, `defaultImage`, `fetchFormat`, `zoom`, `x`, `y`, `page`, `density`, and `named`.

For `colorSpace` or `variables`, use the `transformations` array.

## License

Apache License Version 2.0