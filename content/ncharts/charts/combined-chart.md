# Combined Chart

Combined charts allow you to overlay multiple chart types in a single view, perfect for showing related data with different scales or types.

## Basic Usage

<FrameworkTabs>
<template #angular>

```html
<CombinedChart
  [data]="combinedData"
  [legend]="legendConfig"
  [xAxis]="xAxisConfig"
  [yAxis]="yAxisConfig"
  [animation]="animationConfig">
</CombinedChart>
```

</template>
<template #react>

```tsx
<combinedChart
  data={combinedData}
  legend={legendConfig}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  animation={animationConfig}
/>
```

</template>
<template #vue>

```vue
<CombinedChart
  :data="combinedData"
  :legend="legendConfig"
  :xAxis="xAxisConfig"
  :yAxis="yAxisConfig"
  :animation="animationConfig"
/>
```

</template>
<template #svelte>

```svelte
<combinedChart
  data={combinedData}
  legend={legendConfig}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  animation={animationConfig}
/>
```

</template>
<template #solid>

```jsx
<combinedChart
  data={combinedData()}
  legend={legendConfig}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  animation={animationConfig}
/>
```

</template>
</FrameworkTabs>

## Data Format

```typescript
import type { CombinedChartData, LineChartData, BarChartData } from '@nstudio/ncharts';

const combinedData: CombinedChartData = {
  lineData: {
    dataSets: [/* Line data sets */],
  },
  barData: {
    dataSets: [/* Bar data sets */],
  },
  scatterData: {
    dataSets: [/* Scatter data sets */],
  },
  candleData: {
    dataSets: [/* Candle data sets */],
  },
  bubbleData: {
    dataSets: [/* Bubble data sets */],
  },
};
```

### CombinedChartData

| Property | Type | Description |
|----------|------|-------------|
| `lineData` | `LineChartData` | Line chart datasets |
| `barData` | `BarChartData` | Bar chart datasets |
| `scatterData` | `ScatterChartData` | Scatter plot datasets |
| `candleData` | `CandleChartData` | Candlestick datasets |
| `bubbleData` | `BubbleChartData` | Bubble chart datasets |

All properties are optional - include only the chart types you need.

## Complete Example: Bar + Line

A common pattern showing revenue (bars) with trend line overlay:

```typescript
import type { 
  CombinedChartData, 
  ChartAnimation, 
  LegendConfig, 
  XAxisConfig, 
  YAxisConfigDual 
} from '@nstudio/ncharts';

const salesWithTrend: CombinedChartData = {
  barData: {
    dataSets: [
      {
        label: 'Monthly Revenue',
        values: [
          { x: 0, y: 45000 },
          { x: 1, y: 52000 },
          { x: 2, y: 48000 },
          { x: 3, y: 65000 },
          { x: 4, y: 78000 },
          { x: 5, y: 72000 },
        ],
        config: {
          colors: ['#10B981', '#14B8A6', '#06B6D4', '#0EA5E9', '#3B82F6', '#6366F1'],
          highlightEnabled: true,
          axisDependency: 'LEFT',
        },
      },
    ],
    config: {
      barWidth: 0.6,
    },
  },
  lineData: {
    dataSets: [
      {
        label: 'Trend',
        values: [
          { x: 0, y: 47000 },
          { x: 1, y: 52000 },
          { x: 2, y: 54000 },
          { x: 3, y: 60000 },
          { x: 4, y: 68000 },
          { x: 5, y: 72000 },
        ],
        config: {
          color: '#EF4444',
          lineWidth: 3,
          mode: 'CUBIC_BEZIER',
          drawCircles: true,
          circleRadius: 4,
          circleColor: '#EF4444',
          drawFilled: false,
          axisDependency: 'LEFT',
        },
      },
    ],
  },
};

const animation: ChartAnimation = {
  durationX: 1200,
  durationY: 1200,
  easingX: 'EaseOutQuad',
};

const legend: LegendConfig = {
  enabled: true,
  horizontalAlignment: 'CENTER',
  verticalAlignment: 'BOTTOM',
  orientation: 'HORIZONTAL',
};

const xAxis: XAxisConfig = {
  enabled: true,
  position: 'BOTTOM',
  drawGridLines: false,
  granularity: 1,
  valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};

const yAxis: YAxisConfigDual = {
  left: {
    enabled: true,
    drawGridLines: true,
    gridColor: '#E5E7EB',
    axisMinimum: 0,
    valueFormatter: 'largeValue',
  },
  right: {
    enabled: false,
  },
};
```

## Dual Axis Example

Show different scales for different data types:

```typescript
const dualAxisData: CombinedChartData = {
  barData: {
    dataSets: [
      {
        label: 'Revenue ($K)',
        values: [/* ... */],
        config: {
          color: '#3B82F6',
          axisDependency: 'LEFT',  // Left Y-axis
        },
      },
    ],
  },
  lineData: {
    dataSets: [
      {
        label: 'Conversion Rate (%)',
        values: [/* ... */],
        config: {
          color: '#10B981',
          axisDependency: 'RIGHT',  // Right Y-axis
        },
      },
    ],
  },
};

const yAxis: YAxisConfigDual = {
  left: {
    enabled: true,
    axisMinimum: 0,
    axisMaximum: 100000,
    valueFormatter: 'largeValue',
    textColor: '#3B82F6',
  },
  right: {
    enabled: true,
    axisMinimum: 0,
    axisMaximum: 100,
    valueFormatter: 'percent',
    textColor: '#10B981',
  },
};
```

## Template

```html
<CombinedChart
  #combinedChart
  [data]="salesWithTrend"
  [animation]="animation"
  [legend]="legend"
  [xAxis]="xAxis"
  [yAxis]="yAxis"
  [touchEnabled]="true"
  [dragEnabled]="true"
  [scaleEnabled]="true"
  [pinchZoom]="true"
  [highlightPerTapEnabled]="true"
  (select)="onSelect($event)"
  class="h-80 w-full">
</CombinedChart>
```

## Stock Chart Example: Candlestick + Volume

```typescript
const stockChartData: CombinedChartData = {
  candleData: {
    dataSets: [
      {
        label: 'AAPL',
        values: [/* OHLC data */],
        config: {
          increasingColor: '#10B981',
          decreasingColor: '#EF4444',
          axisDependency: 'LEFT',
        },
      },
    ],
  },
  barData: {
    dataSets: [
      {
        label: 'Volume',
        values: [/* Volume data */],
        config: {
          color: '#6B7280',
          axisDependency: 'RIGHT',
        },
      },
    ],
  },
};
```

## Draw Order

Charts are rendered in this order (back to front):
1. Bar
2. Bubble
3. Scatter
4. Candle
5. Line

This ensures lines appear on top of bars, etc.

## See Also

- [Line Chart](/ncharts/charts/line-chart)
- [Bar Chart](/ncharts/charts/bar-chart)
- [Candlestick Chart](/ncharts/charts/candlestick-chart)
