# Horizontal Bar Chart

Display data as horizontal bars, ideal for comparing categories or ranking data.

## Basic Usage

```typescript
import type { BarChartData } from '@nstudio/ncharts';

const chartData: BarChartData = {
  dataSets: [
    {
      label: 'Market Share',
      values: [
        { y: 42 },
        { y: 28 },
        { y: 18 },
        { y: 8 },
        { y: 4 },
      ],
      config: {
        colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
      },
    },
  ],
};
```

## Template

<FrameworkTabs>
<template #angular>

```html
<HorizontalBarChart
  [data]="chartData"
  [xAxis]="xAxisConfig"
  [yAxis]="yAxisConfig"
  [legend]="{ enabled: true }"
  [animation]="{ durationX: 1000, durationY: 1000, easingX: 'EaseOutQuad' }">
</HorizontalBarChart>
```

</template>
<template #react>

```tsx
<horizontalBarChart
  data={chartData}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  legend={{ enabled: true }}
  animation={{ durationX: 1000, durationY: 1000, easingX: 'EaseOutQuad' }}
/>
```

</template>
<template #vue>

```vue
<HorizontalBarChart
  :data="chartData"
  :xAxis="xAxisConfig"
  :yAxis="yAxisConfig"
  :legend="{ enabled: true }"
  :animation="{ durationX: 1000, durationY: 1000, easingX: 'EaseOutQuad' }"
/>
```

</template>
<template #svelte>

```svelte
<horizontalBarChart
  data={chartData}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  legend={{ enabled: true }}
  animation={{ durationX: 1000, durationY: 1000, easingX: 'EaseOutQuad' }}
/>
```

</template>
<template #solid>

```jsx
<horizontalBarChart
  data={chartData()}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  legend={{ enabled: true }}
  animation={{ durationX: 1000, durationY: 1000, easingX: 'EaseOutQuad' }}
/>
```

</template>
</FrameworkTabs>

## Framework Integration

<FrameworkTabs>
<template #angular>

```typescript
import { HorizontalBarChartDirective } from '@nstudio/ncharts/angular';

@Component({
  standalone: true,
  imports: [HorizontalBarChartDirective],
  template: `
    <HorizontalBarChart [data]="chartData" [animation]="animation" />
  `,
})
export class ChartComponent {}
```

</template>
<template #react>

```tsx
import { registerElement } from 'react-nativescript';
import { HorizontalBarChart } from '@nstudio/ncharts';

registerElement('horizontalBarChart', () => HorizontalBarChart);
```

</template>
<template #vue>

```typescript
import { registerElement } from 'nativescript-vue';
import { HorizontalBarChart } from '@nstudio/ncharts';

registerElement('HorizontalBarChart', () => HorizontalBarChart);
```

</template>
<template #svelte>

```typescript
import { registerNativeViewElement } from 'svelte-native/dom';
import { HorizontalBarChart } from '@nstudio/ncharts';

registerNativeViewElement('horizontalBarChart', () => HorizontalBarChart);
```

</template>
<template #solid>

```jsx
import { registerElement } from 'dominative';
import { HorizontalBarChart } from '@nstudio/ncharts';

registerElement('horizontalBarChart', HorizontalBarChart);
```

</template>
</FrameworkTabs>

## Axis Configuration

For horizontal bar charts, the axes are swapped:
- **Y-Axis**: Categories (left side)
- **X-Axis**: Values (bottom)

```typescript
import type { XAxisConfig, YAxisConfigDual } from '@nstudio/ncharts';

// X-axis shows values (at bottom)
const xAxis: XAxisConfig = {
  enabled: true,
  position: 'BOTTOM',
  drawGridLines: true,
  axisMinimum: 0,
  textColor: '#6B7280',
};

// Y-axis shows categories (on left)
const yAxis: YAxisConfigDual = {
  left: {
    enabled: true,
    drawGridLines: false,
    valueFormatter: ['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Others'],
  },
  right: {
    enabled: false,
  },
};
```

## Ranking Chart Example

Perfect for leaderboards and rankings:

```typescript
const leaderboardData: BarChartData = {
  dataSets: [
    {
      label: 'Points',
      values: [
        { y: 2847 },
        { y: 2156 },
        { y: 1893 },
        { y: 1654 },
        { y: 1432 },
      ],
      config: {
        colors: ['#FFD700', '#C0C0C0', '#CD7F32', '#6B7280', '#6B7280'],
        valueTextSize: 11,
        drawValues: true,
        valueTextColor: '#374151',
      },
    },
  ],
};

const yAxis: YAxisConfigDual = {
  left: {
    enabled: true,
    drawGridLines: false,
    drawAxisLine: false,
    valueFormatter: ['1st Place', '2nd Place', '3rd Place', '4th Place', '5th Place'],
    textSize: 12,
    textColor: '#374151',
  },
};
```

## Comparison Chart

Compare two metrics side by side:

```typescript
const comparisonData: BarChartData = {
  dataSets: [
    {
      label: '2023',
      values: [
        { y: 45000 },
        { y: 38000 },
        { y: 52000 },
        { y: 31000 },
      ],
      config: {
        colors: ['#3B82F6'],
      },
    },
    {
      label: '2024',
      values: [
        { y: 52000 },
        { y: 41000 },
        { y: 58000 },
        { y: 39000 },
      ],
      config: {
        colors: ['#10B981'],
      },
    },
  ],
};
```

## Stacked Horizontal Bars

```typescript
const stackedData: BarChartData = {
  dataSets: [
    {
      label: 'Revenue Breakdown',
      values: [
        { y: [45, 30, 25] },  // Product A: 45, Product B: 30, Product C: 25
        { y: [52, 28, 20] },
        { y: [38, 35, 27] },
        { y: [61, 22, 17] },
      ],
      config: {
        colors: ['#3B82F6', '#10B981', '#F59E0B'],
        stackLabels: ['Product A', 'Product B', 'Product C'],
      },
    },
  ],
};
```

## DataSet Configuration

```typescript
interface BarChartDataSetConfig {
  // Colors (one per bar or cycling)
  colors?: ChartColor[];
  
  // Bar styling
  barBorderWidth?: number;
  barBorderColor?: ChartColor;
  barShadowColor?: ChartColor;
  
  // Value labels
  drawValues?: boolean;
  valueTextSize?: number;
  valueTextColor?: ChartColor;
  valueFormatter?: ValueFormatter;
  
  // Highlighting
  highlightEnabled?: boolean;
  highlightAlpha?: number;  // 0-255
  
  // Stacked bars
  stackLabels?: string[];
}
```

## Complete Example

```typescript
import { Component } from '@angular/core';
import { HorizontalBarChartDirective } from '@nstudio/ncharts/angular';
import type { 
  BarChartData, 
  XAxisConfig, 
  YAxisConfigDual, 
  LegendConfig,
  ChartAnimation 
} from '@nstudio/ncharts';

@Component({
  selector: 'app-market-share-chart',
  standalone: true,
  imports: [HorizontalBarChartDirective],
  template: `
    <HorizontalBarChart
      height="400"
      [data]="chartData"
      [xAxis]="xAxis"
      [yAxis]="yAxis"
      [legend]="legend"
      [animation]="animation"
      [highlightPerTapEnabled]="true"
      (select)="onSelect($event)">
    </HorizontalBarChart>
  `,
})
export class MarketShareChartComponent {
  chartData: BarChartData = {
    dataSets: [
      {
        label: 'Market Share %',
        values: [
          { y: 42, marker: 'Apple: 42%' },
          { y: 28, marker: 'Samsung: 28%' },
          { y: 18, marker: 'Xiaomi: 18%' },
          { y: 8, marker: 'OPPO: 8%' },
          { y: 4, marker: 'Others: 4%' },
        ],
        config: {
          colors: ['#000000', '#1428A0', '#FF6900', '#2E7D32', '#6B7280'],
          drawValues: true,
          valueTextSize: 12,
          valueTextColor: '#FFFFFF',
          highlightAlpha: 200,
        },
      },
    ],
  };

  xAxis: XAxisConfig = {
    enabled: true,
    position: 'BOTTOM',
    drawGridLines: true,
    gridColor: '#E5E7EB',
    axisMinimum: 0,
    axisMaximum: 50,
    textColor: '#6B7280',
    textSize: 10,
    valueFormatter: 'percent',
  };

  yAxis: YAxisConfigDual = {
    left: {
      enabled: true,
      drawGridLines: false,
      drawAxisLine: false,
      valueFormatter: ['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Others'],
      textColor: '#374151',
      textSize: 12,
    },
    right: {
      enabled: false,
    },
  };

  legend: LegendConfig = {
    enabled: false,
  };

  animation: ChartAnimation = {
    durationX: 1200,
    durationY: 0,
    easingX: 'EaseOutBack',
  };

  onSelect(event: any) {
    if (event.entry) {
      console.log('Selected:', event.entry.marker);
    }
  }
}
```

## When to Use

| Use Horizontal Bars | Use Vertical Bars |
|---------------------|-------------------|
| Long category labels | Short labels |
| Rankings/leaderboards | Time series |
| Comparisons by category | Trend visualization |
| Survey results | Distribution data |
| Top N lists | Part-to-whole |

## See Also

- [Bar Chart](/ncharts/charts/bar-chart) - Vertical bars
- [Axes Configuration](/ncharts/config/axes)
- [Animation](/ncharts/config/animation)
