# Menu

Native anchored menus for NativeScript with one shared TypeScript API across iOS and Android.

The plugin supports:

- Tap-to-open menus on any view
- Long-press context menus
- Nested submenus
- Single-selection (radio-style) groups
- Subtitles, disabled items, hidden items, and destructive actions
- Palette-style icon rows
- Selected event callbacks with the chosen option payload

## Installation

```bash
npm install @nstudio/nativescript-menu
```

## Usage

### NativeScript Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:nm="@nstudio/nativescript-menu"
  navigatingTo="navigatingTo">
  <GridLayout rows="*,auto,*" columns="*,auto,*" class="p-20">
    <nm:MenuImage
      row="1"
      col="1"
      src="{{imageIcon}}"
      options="{{addOptions}}"
      selected="{{selectOption}}"
    />
  </GridLayout>
</Page>
```

```typescript
import { EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptMenu } from '@demo/shared';

export function navigatingTo(args: EventData) {
  const page = args.object as Page;
  page.bindingContext = new DemoModel();
}

class DemoModel extends DemoSharedNativescriptMenu {}
```

### Angular

```typescript
import { registerElement } from '@nativescript/angular';
import { MenuButton, MenuImage } from '@nstudio/nativescript-menu';

registerElement('MenuButton', () => MenuButton);
registerElement('MenuImage', () => MenuImage);
```

```html
<MenuImage
  [src]="imageIcon"
  [options]="addOptions"
  (selected)="selectOption($event)"
  class="dark:bg-slate-800/60 bg-slate-200/70 rounded-full w-10 h-10"
  tintColor="#1e293b"
></MenuImage>
```

### Other Flavors

```typescript
import { MenuButton, MenuImage } from '@nstudio/nativescript-menu';

// Vue
Vue.registerElement('MenuButton', () => MenuButton);
Vue.registerElement('MenuImage', () => MenuImage);

// React
registerElement('menubutton', () => MenuButton);
registerElement('menuimage', () => MenuImage);

// Svelte
registerNativeViewElement('menubutton', () => MenuButton);
registerNativeViewElement('menuimage', () => MenuImage);

// Solid
registerElement('menubutton', MenuButton);
registerElement('menuimage', MenuImage);
```

## Menu Model

```typescript
import { MenuAction } from '@nstudio/nativescript-menu';

const addOptions: MenuAction[] = [
  {
    id: 1,
    name: 'New Chat',
    icon: 'square.and.pencil',
  },
  {
    id: 2,
    name: 'Import from Drive',
    subtitle: 'Login Required',
    icon: 'cloud',
  },
  {
    id: 3,
    name: 'Tiers',
    icon: 'circle.dotted',
    singleSelection: true,
    children: [
      { id: 31, name: 'Starter', subtitle: 'Lean quickstart' },
      { id: 32, name: 'Pro', subtitle: 'Growing businesses' },
      { id: 33, name: 'Enterprise', subtitle: 'Maximum throughput', state: 'on' },
    ],
  },
  {
    id: 4,
    name: 'Protocols',
    icon: 'square.2.layers.3d',
    children: [
      { id: 41, name: 'Add Protocol', icon: 'plus' },
    ],
  },
  {
    id: 5,
    name: '',
    childrenStyle: 'palette',
    children: [
      { id: 51, name: 'Camera', icon: 'camera' },
      { id: 52, name: 'Photos', icon: 'photo' },
      { id: 53, name: 'Files', icon: 'folder' },
    ],
  },
];
```

## Events

### selected

Emitted when a menu item is chosen.

```typescript
import { MenuSelectedEvent } from '@nstudio/nativescript-menu';

function selectOption(args: MenuSelectedEvent) {
  const option = args.data.option;
  console.log('Selected option:', option);
}
```

## Properties

Registered at the View level, so they can be used on MenuButton, MenuImage, or other supported views.

| Property | Type | Description |
| --- | --- | --- |
| options | Array&lt;MenuAction&gt; \| MenuAction | Alias setter that assigns menu |
| menu | Array&lt;MenuAction&gt; \| MenuAction | Tap-to-open menu configuration |
| contextMenu | Array&lt;MenuAction&gt; \| MenuAction | Long-press menu configuration |

## Classes

- MenuButton extends NativeScript Button
- MenuImage extends NativeScript Image

Both classes expose an options setter and emit selected events.

## Platform Notes

### iOS

- Uses UIMenu and UIAction for native platform behavior
- Supports inline, dropdown, and palette rendering
- Supports subtitles on iOS 15+
- Supports context menus through UIContextMenuInteraction

### Android

- Uses a native anchored glass popup controller
- Supports nested submenu choreography, spring-style open, and animated close
- Supports palette rows and single-selection state updates
- Supports icon metadata for symbol, src, and font icon rendering

## License

Apache License Version 2.0
