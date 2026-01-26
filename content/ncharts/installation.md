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

<FrameworkTabs>
<template #angular>

**1. Register the chart elements in your `main.ts`:**

```typescript
import { registerNchartsElements } from '@nstudio/ncharts/angular';
registerNchartsElements();
```

**2. Import the directives in your component:**

```typescript
import { Component } from '@angular/core';
import { LineChartDirective, BarChartDirective, PieChartDirective } from '@nstudio/ncharts/angular';
import type { LineChartData } from '@nstudio/ncharts';

@Component({
  selector: 'app-chart',
  template: `
    <LineChart
      [data]="chartData"
      [animation]="animation"
      class="h-80">
    </LineChart>
  `,
  imports: [LineChartDirective],
})
export class ChartComponent {
  chartData: LineChartData = { /* ... */ };
}
```

</template>
<template #react>

**1. Register elements in your app entry:**

```tsx
import { registerElement } from 'react-nativescript';
import { 
  LineChart, BarChart, PieChart, 
  ScatterChart, BubbleChart, RadarChart,
  CandleStickChart, CombinedChart, HorizontalBarChart 
} from '@nstudio/ncharts';

registerElement('lineChart', () => LineChart);
registerElement('barChart', () => BarChart);
registerElement('pieChart', () => PieChart);
registerElement('scatterChart', () => ScatterChart);
registerElement('bubbleChart', () => BubbleChart);
registerElement('radarChart', () => RadarChart);
registerElement('candleStickChart', () => CandleStickChart);
registerElement('combinedChart', () => CombinedChart);
registerElement('horizontalBarChart', () => HorizontalBarChart);
```

**2. Use in your component:**

```tsx
import * as React from "react";
import type { LineChartData } from "@nstudio/ncharts";

export const ChartDemo = () => {
  const chartData: LineChartData = { /* ... */ };

  return (
    <lineChart
      data={chartData}
      animation={{ durationX: 1200, durationY: 1200 }}
      className="h-80"
    />
  );
};
```

</template>
<template #vue>

**1. Register the chart elements in your app entry:**

```typescript
import { registerElement } from 'nativescript-vue';
import { 
  LineChart, BarChart, PieChart, 
  ScatterChart, BubbleChart, RadarChart,
  CandleStickChart, CombinedChart, HorizontalBarChart 
} from '@nstudio/ncharts';

registerElement('LineChart', () => LineChart);
registerElement('BarChart', () => BarChart);
registerElement('PieChart', () => PieChart);
registerElement('ScatterChart', () => ScatterChart);
registerElement('BubbleChart', () => BubbleChart);
registerElement('RadarChart', () => RadarChart);
registerElement('CandleStickChart', () => CandleStickChart);
registerElement('CombinedChart', () => CombinedChart);
registerElement('HorizontalBarChart', () => HorizontalBarChart);
```

**2. Use in your component:**

```vue
<script lang="ts" setup>
import { ref } from 'vue';
import type { LineChartData } from '@nstudio/ncharts';

const chartData = ref<LineChartData>({ /* ... */ });
</script>

<template>
  <LineChart
    :data="chartData"
    :animation="{ durationX: 1200, durationY: 1200 }"
    class="h-80"
  />
</template>
```

</template>
<template #svelte>

**1. Register the chart elements in your app:**

```typescript
import { registerNativeViewElement } from 'svelte-native/dom';
import { 
  LineChart, BarChart, PieChart, 
  ScatterChart, BubbleChart, RadarChart,
  CandleStickChart, CombinedChart, HorizontalBarChart 
} from '@nstudio/ncharts';

registerNativeViewElement('lineChart', () => LineChart);
registerNativeViewElement('barChart', () => BarChart);
registerNativeViewElement('pieChart', () => PieChart);
registerNativeViewElement('scatterChart', () => ScatterChart);
registerNativeViewElement('bubbleChart', () => BubbleChart);
registerNativeViewElement('radarChart', () => RadarChart);
registerNativeViewElement('candleStickChart', () => CandleStickChart);
registerNativeViewElement('combinedChart', () => CombinedChart);
registerNativeViewElement('horizontalBarChart', () => HorizontalBarChart);
```

**2. Use in your component:**

```svelte
<script lang="ts">
  import type { LineChartData } from '@nstudio/ncharts';

  let chartData: LineChartData = { /* ... */ };
</script>

<lineChart
  data={chartData}
  animation={{ durationX: 1200, durationY: 1200 }}
  class="h-80"
/>
```

</template>
<template #solid>

**1. Register elements in your app entry:**

```jsx
import { registerElement } from 'dominative';
import { 
  LineChart, BarChart, PieChart, 
  ScatterChart, BubbleChart, RadarChart,
  CandleStickChart, CombinedChart, HorizontalBarChart 
} from '@nstudio/ncharts';

registerElement('lineChart', LineChart);
registerElement('barChart', BarChart);
registerElement('pieChart', PieChart);
registerElement('scatterChart', ScatterChart);
registerElement('bubbleChart', BubbleChart);
registerElement('radarChart', RadarChart);
registerElement('candleStickChart', CandleStickChart);
registerElement('combinedChart', CombinedChart);
registerElement('horizontalBarChart', HorizontalBarChart);
```

**2. Use in your component:**

```jsx
import { createSignal } from 'solid-js';

export const ChartDemo = () => {
  const [chartData, setChartData] = createSignal({ /* ... */ });

  return (
    <lineChart
      data={chartData()}
      animation={{ durationX: 1200, durationY: 1200 }}
      class="h-80"
    />
  );
};
```

</template>
</FrameworkTabs>

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

