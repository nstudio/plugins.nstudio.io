# Shimmer

Shimmer loading effect for NativeScript apps.

## Installation

```bash
npm install @nstudio/nativescript-shimmer
```

## Usage

### NativeScript Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:ui="@nstudio/nativescript-shimmer">
  <StackLayout>
    <ui:Shimmer>
      <GridLayout>
        <ContentView height="20" width="65%" backgroundColor="#333"/>
      </GridLayout>
    </ui:Shimmer>
  </StackLayout>
</Page>
```

### Angular

```typescript
import { registerElement } from '@nativescript/angular';
import { Shimmer } from '@nstudio/nativescript-shimmer';

registerElement('Shimmer', () => Shimmer);
```

```html
<Shimmer>
  <GridLayout>
    <ContentView height="20" width="65%" backgroundColor="#333"></ContentView>
  </GridLayout>
</Shimmer>
```

### Other Flavors

```typescript
import { Shimmer } from '@nstudio/nativescript-shimmer';

// Vue
Vue.registerElement('Shimmer', () => Shimmer);

// React
registerElement('shimmer', () => Shimmer);

// Svelte
registerNativeViewElement('shimmer', () => Shimmer);

// Solid
registerElement('shimmer', Shimmer);
```

## Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `autoStart` | boolean | true | Whether to start shimmer automatically |

## Static Methods (iOS)

You can control shimmer on any view:

```typescript
import { Shimmer } from '@nstudio/nativescript-shimmer';

function loadedView(args) {
  const view = args.object;
  
  // Start shimmer
  Shimmer.start(view);
  
  // Stop shimmer
  Shimmer.stop(view);
}
```

## Default Settings

Configure defaults in your app bootstrap:

```typescript
import { Shimmer, ShimmerDirection } from '@nstudio/nativescript-shimmer';

Shimmer.defaults = {
  speed: 0.9,
  direction: ShimmerDirection.topToBottom,
  repeat: 4,
  lightColor: 'rgba(255,255,255,.8)',
  darkColor: 'rgba(0,0,0,.7)',
};

// Then bootstrap your app...
```

## License

Apache License Version 2.0
