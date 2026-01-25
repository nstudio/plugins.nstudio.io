# Fluid Segmented Bar

Fluid Segmented Bar to liven up any standard SegmentedBar control with smooth animations.

- **iOS**: Uses [SJFluidSegmentedControl](https://github.com/sasojadrovski/SJFluidSegmentedControl)
- **Android**: Uses standard SegmentedBar (Jetpack Compose support coming)

## Installation

```bash
npm install @nstudio/nativescript-fluid-segmented-bar
```

## Usage

### NativeScript Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:fsb="@nstudio/nativescript-fluid-segmented-bar">
  <StackLayout>
    <fsb:FluidSegmentedBar 
      items="{{items}}" 
      gradientColorSides="{{gradientColorSides}}" 
      selectedIndexChanged="{{selectedIndexChanged}}" 
      didScrollOffset="{{didScrollOffset}}"/>
  </StackLayout>
</Page>
```

```typescript
import { Color } from '@nativescript/core';
import { 
  FluidSegmentedBarItem, 
  FluidSegmentedBarGradientColorSides,
  FluidSegmentedBarIndexChangedEvent,
  FluidSegmentedBarDidScrollEvent 
} from '@nstudio/nativescript-fluid-segmented-bar';

const items: Array<FluidSegmentedBarItem> = [
  {
    title: 'Enjoy',
    colors: [new Color('#485ae6'), new Color('#87aeed')],
  },
  {
    title: 'Your',
    colors: [new Color('#87aeed'), new Color('#e53ca9')],
  },
  {
    title: 'Life',
    colors: [new Color('#c2c96a'), new Color('#678d50')],
  },
];

const gradientColorSides: FluidSegmentedBarGradientColorSides = {
  left: [new Color('#87aeed')],
  right: [new Color('#c2c96a')],
};

function selectedIndexChanged(args: FluidSegmentedBarIndexChangedEvent) {
  console.log('selectedIndexChanged:', args.newIndex);
}

function didScrollOffset(args: FluidSegmentedBarDidScrollEvent) {
  console.log('didScrollOffset:', args.offset);
}
```

### Framework Registration

```typescript
import { FluidSegmentedBar } from '@nstudio/nativescript-fluid-segmented-bar';

// Angular
import { registerElement } from '@nativescript/angular';
registerElement('FluidSegmentedBar', () => FluidSegmentedBar);

// Vue
Vue.registerElement('FluidSegmentedBar', () => FluidSegmentedBar);

// React
registerElement('fluidSegmentedBar', () => FluidSegmentedBar);

// Svelte
registerNativeViewElement('fluidSegmentedBar', () => FluidSegmentedBar);

// Solid
registerElement('fluidSegmentedBar', FluidSegmentedBar);
```

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `items` | `FluidSegmentedBarItem[]` | Collection of bar items with `title` and `colors` |
| `gradientColorSides` | `FluidSegmentedBarGradientColorSides` | The gradient colors for left and right sides |

## Events

| Event | Description |
| --- | --- |
| `selectedIndexChanged` | Fired when the selected index changes |
| `didScrollOffset` | Fired during animation with `offset` and `maxOffset` values |

## Types

```typescript
interface FluidSegmentedBarItem {
  title: string;
  colors: Color[];
}

interface FluidSegmentedBarGradientColorSides {
  left: Color[];
  right: Color[];
}
```

## License

Apache License Version 2.0
