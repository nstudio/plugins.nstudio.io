# Font Icon

A simpler way to use font icons with NativeScript. Reference icons by class name instead of unicode values.

## Installation

```bash
npm install @nstudio/nativescript-fonticon
```

## The Problem

You can use icon fonts with NativeScript by combining a class with a unicode reference:

```css
.fa {
  font-family: FontAwesome;
}
```

```xml
<Label class="fa" text="\uf293"></Label>
```

This works but keeping up with unicodes is not fun.

## The Solution

With this plugin, reference icons by their class name instead:

```xml
<Label class="fa" text="{{'fa-bluetooth' | fonticon}}"></Label>
```

## Setup

### 1. Add Font Files

Place your font `.ttf` file in `app/fonts`:

```
app/fonts/fontawesome-webfont.ttf
```

### 2. Create CSS Class

In `app.css`:

```css
.fa {
  font-family: FontAwesome, fontawesome-webfont;
}
```

**Note**: Android uses the filename, iOS uses the font name. You can rename the file to match.

### 3. Add Icon CSS

Copy the icon CSS file to your app:

```
app/assets/font-awesome.css
```

## Usage

### Vanilla NativeScript

```typescript
import { Application } from '@nativescript/core';
import { FontIconFactory, fonticon } from '@nstudio/nativescript-fonticon';

// Optional: Enable debug logging
FontIconFactory.debug = true;

// Configure font icon CSS paths
FontIconFactory.paths = {
  'fa': 'font-awesome.css',
  'ion': 'ionicons.css'
};

// Load the CSS mappings
FontIconFactory.loadCss();

// Make fonticon available in views
Application.setResources({ fonticon });

Application.run({ moduleName: 'main-page' });
```

```xml
<Label class="fa" text="{{'fa-bluetooth' | fonticon}}"></Label>
```

### Angular

```typescript
import { FontIconModule, FontIconService } from '@nstudio/nativescript-fonticon/angular';

// Optional: Enable debug logging
FontIconService.debug = true;

@NgModule({
  imports: [
    NativeScriptModule,
    FontIconModule.forRoot({
      'fa': require('~/app/assets/css/fa-5.css'),
      'ion': require('~/app/assets/css/ionicons.css')
    })
  ]
})
export class AppModule {}
```

```html
<Label class="fa" [text]="'fa-bluetooth' | fonticon"></Label>
```

## API

### FontIconFactory (Vanilla)

| Property/Method | Description |
| --- | --- |
| `debug` | Enable console logging of CSS mappings |
| `paths` | Object mapping prefixes to CSS file paths |
| `loadCss()` | Load and parse the CSS files |

### FontIconModule (Angular)

| Method | Description |
| --- | --- |
| `forRoot(config)` | Configure with prefix-to-CSS mappings |

### FontIconService (Angular)

| Property | Description |
| --- | --- |
| `debug` | Enable console logging |

## Supported Icon Fonts

- FontAwesome
- Ionicons
- Material Icons
- Any custom icon font with CSS mappings

## License

Apache License Version 2.0
