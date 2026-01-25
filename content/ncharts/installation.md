# Installation

Get started with @nstudio/ncharts in your NativeScript project.

## Prerequisites

- NativeScript 9.0 or higher
- iOS 12.0+ / Android API 21+

## Install the Package

::: code-group

```bash [npm]
npm install @nstudio/ncharts
```

```bash [yarn]
yarn add @nstudio/ncharts
```

```bash [pnpm]
pnpm add @nstudio/ncharts
```

```bash [bun]
bun add @nstudio/ncharts
```

:::

## Platform Requirements

### iOS

The plugin uses **[DGCharts](https://github.com/ChartsOrg/Charts)** via Swift Package Manager. No additional setup is required - the dependency is automatically resolved during the build.

::: tip iOS Minimum Version
iOS 12.0 or higher is required.
:::

### Android

The plugin includes **[MPAndroidChart](https://github.com/PhilJay/MPAndroidChart)**. The Gradle dependency is automatically configured.

::: tip Android Minimum SDK
API level 21 (Android 5.0) or higher is required.
:::

## Framework Integration

### Angular

1. Register the chart elements in your `main.ts`:

```typescript
import { registerNchartsElements } from '@nstudio/ncharts/angular';
registerNchartsElements();
```

2. Import the module in your feature module or use standalone directives:

```typescript
// Option 1: Module import
import { NativeScriptNchartsModule } from '@nstudio/ncharts/angular';

@NgModule({
  imports: [NativeScriptNchartsModule],
})
export class YourModule {}

// Option 2: Standalone directive import
import { LineChartDirective } from '@nstudio/ncharts/angular';

@Component({
  imports: [LineChartDirective],
  // ...
})
export class YourComponent {}
```

### Core / Plain NativeScript

Import and use the chart classes directly:

```typescript
import { LineChart } from '@nstudio/ncharts';

const chart = new LineChart();
chart.data = lineChartData;
```

### Vue

Register the chart elements:

```typescript
import { registerElement } from 'nativescript-vue';
import { LineChart, BarChart, PieChart } from '@nstudio/ncharts';

registerElement('LineChart', () => LineChart);
registerElement('BarChart', () => BarChart);
registerElement('PieChart', () => PieChart);
// ... register other charts as needed
```

### React

Using `react-nativescript`:

```tsx
import { registerElement } from 'react-nativescript';
import { LineChart } from '@nstudio/ncharts';

registerElement('lineChart', () => LineChart);
```

### Svelte

Register the chart elements in your app:

```typescript
import { registerNativeViewElement } from 'svelte-native/dom';
import { LineChart } from '@nstudio/ncharts';

registerNativeViewElement('lineChart', () => LineChart);
```

## Verify Installation

Create a simple chart to verify everything is working:

```typescript
import type { LineChartData } from '@nstudio/ncharts';

const testData: LineChartData = {
  dataSets: [
    {
      label: 'Test Data',
      values: [
        { x: 0, y: 10 },
        { x: 1, y: 20 },
        { x: 2, y: 15 },
        { x: 3, y: 30 },
      ],
      config: {
        color: '#3B82F6',
        lineWidth: 2,
        drawCircles: true,
      },
    },
  ],
};
```

If the chart renders without errors, you're all set!

## Next Steps

- [Quick Start Guide](/ncharts/quick-start) - Build your first chart
- [Chart Types](/ncharts/charts/line-chart) - Explore available charts
- [Configuration](/ncharts/config/animation) - Customize your charts
