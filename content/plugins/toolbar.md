# Toolbar

iOS `UIToolbar` for NativeScript with first-class `UIBarButtonItem` and `UIToolbarAppearance` support.

The plugin supports:

- Native iOS `UIToolbar` rendering
- Descriptor-based toolbar items with tap callbacks
- Native item escape hatch (`UIBarButtonItem`)
- SF Symbols and image-based item icons
- iOS 13+ appearance customization (`UIToolbarAppearance`)
- iOS 14+ menu and primary action support on items
- Android no-op placeholder so apps can install cross-platform without runtime errors

<iframe style="width: 100%; min-height: 200px; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/iU2bGHrq2MQ" title="Native Toolbar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Installation

```bash
npm install @nstudio/nativescript-toolbar
```

## Usage

### NativeScript Core (programmatic)

```typescript
import { Color, EventData, Page } from '@nativescript/core';
import {
  NToolbar,
  ToolbarItem,
  ToolbarItemTapEventData,
} from '@nstudio/nativescript-toolbar';

export function navigatingTo(args: EventData) {
  const page = args.object as Page;

  const toolbar = new NToolbar();
  toolbar.height = 44;
  toolbar.barStyle = 'default';
  toolbar.translucent = true;
  toolbar.tintColor = new Color('#2563eb');

  const items: ToolbarItem[] = [
    { id: 'add', systemItem: 'add', onTap: () => console.log('Add') },
    { systemItem: 'flexibleSpace' },
    { id: 'edit', title: 'Edit', style: 'plain', onTap: () => console.log('Edit') },
    { systemItem: 'fixedSpace', width: 8 },
    { id: 'settings', systemImage: 'gearshape', onTap: () => console.log('Settings') },
  ];

  toolbar.setItems(items, true);

  toolbar.on(NToolbar.itemTapEvent, (event: ToolbarItemTapEventData) => {
    console.log('Tapped index:', event.data.index);
    console.log('Tapped id:', event.data.item?.id);
  });

  page.content = toolbar;
}
```

### Angular

```typescript
import { registerElement } from '@nativescript/angular';
import { NToolbar } from '@nstudio/nativescript-toolbar';

registerElement('NToolbar', () => NToolbar);
```

```html
<NToolbar
  #toolbar
  height="44"
  barStyle="default"
  translucent="true"
  tintColor="#2563eb"
  (loaded)="onToolbarLoaded($event)"
  (itemTap)="onToolbarTap($event)">
</NToolbar>
```

```typescript
import { Component } from '@angular/core';
import { EventData } from '@nativescript/core';
import {
  NToolbar,
  ToolbarItem,
  ToolbarItemTapEventData,
} from '@nstudio/nativescript-toolbar';

@Component({
  selector: 'demo-toolbar',
  templateUrl: './demo-toolbar.component.html',
})
export class DemoToolbarComponent {
  onToolbarLoaded(args: EventData) {
    const toolbar = args.object as NToolbar;
    const items: ToolbarItem[] = [
      { id: 'compose', systemItem: 'compose' },
      { systemItem: 'flexibleSpace' },
      { id: 'publish', title: 'Publish', style: 'done' },
      { systemItem: 'fixedSpace', width: 8 },
      { id: 'filters', systemImage: 'slider.horizontal.3' },
    ];
    toolbar.setItems(items, true);
  }

  onToolbarTap(args: ToolbarItemTapEventData) {
    console.log('Tapped:', args.data.item?.id ?? args.data.index);
  }
}
```

### Other Flavors

```typescript
import { NToolbar } from '@nstudio/nativescript-toolbar';

// Vue
registerElement('NToolbar', () => NToolbar);

// React
registerElement('nToolbar', () => NToolbar);

// Svelte
registerNativeViewElement('nToolbar', () => NToolbar);

// Solid
registerElement('nToolbar', NToolbar);
```

## API

### Class

- `NToolbar` extends NativeScript `View`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| `items` | `ToolbarItem[]` | Current toolbar item descriptors |
| `barStyle` | `'default' \| 'black' \| 'blackOpaque' \| 'blackTranslucent' \| number` | iOS bar style |
| `translucent` | `boolean` | Whether the toolbar is translucent |
| `barTintColor` | `string \| Color \| UIColor` | Toolbar background tint |
| `tintColor` | `string \| Color \| UIColor` | Default item tint |
| `position` | `'any' \| 'bottom' \| 'top' \| 'topAttached' \| number` | Background/shadow position metrics |
| `defaultMetrics` | `'default' \| 'compact' \| 'defaultPrompt' \| 'compactPrompt' \| 'landscapePhone' \| 'landscapePhonePrompt' \| number` | Background image metrics |
| `itemChangesAnimated` | `boolean` | Whether item changes animate by default |
| `standardAppearance` | `ToolbarAppearance` | iOS 13+ standard appearance |
| `compactAppearance` | `ToolbarAppearance` | iOS 13+ compact appearance |
| `scrollEdgeAppearance` | `ToolbarAppearance` | iOS 15+ scroll-edge appearance |
| `compactScrollEdgeAppearance` | `ToolbarAppearance` | iOS 15+ compact scroll-edge appearance |

### Events

| Event | Payload | Description |
| --- | --- | --- |
| `itemTap` | `ToolbarItemTapEventData` | Fired when a descriptor-backed tappable item is pressed |

### Methods

| Method | Description |
| --- | --- |
| `setItems(items: ToolbarItem[], animated?: boolean): void` | Sets toolbar items |
| `getNativeItems(): UIBarButtonItem[]` | Returns native toolbar items |
| `getNativeItem(indexOrId: number \| string): UIBarButtonItem \| null` | Finds a native item by index or descriptor id |
| `setAppearance(slot, appearance): void` | Sets `standard`, `compact`, `scrollEdge`, or `compactScrollEdge` appearance |
| `setBackgroundImage(image, position?, metrics?): void` | Sets a background image |
| `getBackgroundImage(position?, metrics?): UIImage \| null` | Gets a background image |
| `clearBackgroundImage(position?, metrics?): void` | Clears a background image |
| `setShadowImage(image, position?): void` | Sets a shadow image |
| `getShadowImage(position?): UIImage \| null` | Gets a shadow image |
| `clearShadowImage(position?): void` | Clears a shadow image |

## ToolbarItem

`ToolbarItem` supports native and high-level item creation.

```typescript
type ToolbarItem = {
  id?: number | string;
  nativeItem?: UIBarButtonItem;

  systemItem?: ToolbarSystemItem;
  title?: string;
  style?: 'plain' | 'bordered' | 'done' | 'prominent' | number;
  image?: string | ImageSource | UIImage;
  systemImage?: string;
  landscapeImagePhone?: string | ImageSource | UIImage;
  customView?: View | UIView | (() => View | UIView);

  width?: number;
  enabled?: boolean;
  tintColor?: string | Color | UIColor;
  tag?: number;
  accessibilityIdentifier?: string;

  menu?: UIMenu;
  primaryAction?: UIAction;

  changesSelectionAsPrimaryAction?: boolean;
  selected?: boolean;
  hidden?: boolean;
  springLoaded?: boolean;
  symbolAnimationEnabled?: boolean;

  onTap?: (args: ToolbarItemTapEventData) => void;
};
```

`ToolbarSystemItem` supports:

- `done`, `cancel`, `edit`, `save`, `add`
- `flexibleSpace`, `fixedSpace`
- `compose`, `reply`, `action`, `organize`, `bookmarks`
- `search`, `refresh`, `stop`, `camera`, `trash`
- `play`, `pause`, `rewind`, `fastForward`
- `undo`, `redo`, `pageCurl`, `close`, `writingTools`

`image` supports system symbol aliases in string form: `sys://`, `sf://`, and `symbol://`.

## Appearance API (`UIToolbarAppearance`, iOS 13+)

```typescript
toolbar.standardAppearance = {
  preset: 'opaque',
  backgroundColor: '#ffffff',
  shadowColor: '#e5e7eb',
  buttonAppearance: {
    normal: {
      titleTextAttributes: {
        foregroundColor: '#111827',
      },
    },
    highlighted: {
      titleTextAttributes: {
        foregroundColor: '#2563eb',
      },
    },
  },
};

toolbar.scrollEdgeAppearance = {
  preset: 'transparent',
  backgroundEffectStyle: 'systemThinMaterial',
};
```

`ToolbarAppearance` options include:

- `preset`: `'default' | 'opaque' | 'transparent'`
- `backgroundColor`
- `backgroundEffectStyle` (name or numeric `UIBlurEffectStyle`)
- `backgroundImage`
- `backgroundImageContentMode`
- `shadowColor`
- `shadowImage`
- `buttonAppearance`
- `doneButtonAppearance`
- `prominentButtonAppearance` (when available on current OS/runtime)

## Native Escape Hatch

For unsupported edge cases, create a native `UIBarButtonItem` and pass it through `ToolbarItem.nativeItem`.

## Platform Notes

### iOS

- Fully implemented with native `UIToolbar`
- Supports native items, descriptor mapping, appearance slots, and item events

### Android

- No-op placeholder implementation
- Allows cross-platform installation and shared code without Android crashes

## License

Apache License Version 2.0