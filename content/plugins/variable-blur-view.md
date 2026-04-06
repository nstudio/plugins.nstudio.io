# Variable Blur View

Variable Blur View for NativeScript. Creates a stunning gradient blur effect.

Inspired by [@jtrivedi](https://github.com/jtrivedi), [@aheze](https://github.com/aheze/VariableBlurView), and [@candlefinance](https://github.com/candlefinance/blur-view).

## Installation

```bash
npm install @nstudio/nativescript-variable-blur-view
```

**Note**: iOS only at the moment.

## Preview

The variable blur creates a gradient blur effect that transitions from clear to blurred, perfect for navigation bars, toolbars, and overlays.

## Usage

### Register the Element

<FrameworkTabs>
<template #angular>

```typescript
import { registerElement } from '@nativescript/angular';
import { VariableBlurView } from '@nstudio/nativescript-variable-blur-view';

registerElement('VariableBlurView', () => VariableBlurView);
```

</template>
<template #react>

```typescript
import { registerElement } from 'react-nativescript';
import { VariableBlurView } from '@nstudio/nativescript-variable-blur-view';

registerElement('variableBlurView', () => VariableBlurView);
```

</template>
<template #vue>

```typescript
import { registerElement } from 'nativescript-vue';
import { VariableBlurView } from '@nstudio/nativescript-variable-blur-view';

registerElement('VariableBlurView', () => VariableBlurView);
```

</template>
<template #svelte>

```typescript
import { registerNativeViewElement } from '@nativescript-community/svelte-native/dom';
import { VariableBlurView } from '@nstudio/nativescript-variable-blur-view';

registerNativeViewElement('variableBlurView', () => VariableBlurView);
```

</template>
<template #solid>

```typescript
import { registerElement } from 'dominative';
import { VariableBlurView } from '@nstudio/nativescript-variable-blur-view';

registerElement('variableBlurView', VariableBlurView);
```

</template>
</FrameworkTabs>

### Basic Usage

Place on top of any UI you want blurred:

```xml
<GridLayout>
  <!-- Your content here -->
  <Image src="~/background.jpg" stretch="aspectFill" />
  
  <!-- Blur overlay at top -->
  <VariableBlurView width="100%" height="200" verticalAlignment="top"/>
</GridLayout>
```

### Flip Vertically

To blur from bottom-to-top instead of top-to-bottom:

```xml
<VariableBlurView width="100%" height="200" scaleY="-1"/>
```

## Use Cases

- **Navigation bars**: Blur content behind a transparent nav bar
- **Bottom sheets**: Create depth with a blurred overlay
- **Image overlays**: Add text readability over images
- **Toolbars**: Modern iOS-style blurred toolbars

## Example: Bottom Blur

```xml
<GridLayout>
  <ScrollView>
    <!-- Scrollable content -->
  </ScrollView>
  
  <!-- Bottom blur overlay -->
  <VariableBlurView 
    width="100%" 
    height="150" 
    verticalAlignment="bottom"
    scaleY="-1"/>
</GridLayout>
```

## License

Apache License Version 2.0
