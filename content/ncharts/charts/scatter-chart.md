# Scatter Chart

Scatter charts are ideal for visualizing correlations between two variables, identifying patterns, and displaying distributions.

## Basic Usage

<FrameworkTabs>
<template #angular>

```html
<ScatterChart
  [data]="scatterData"
  [legend]="legendConfig"
  [xAxis]="xAxisConfig"
  [yAxis]="yAxisConfig"
  [animation]="animationConfig">
</ScatterChart>
```

</template>
<template #react>

```tsx
<scatterChart
  data={scatterData}
  legend={legendConfig}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  animation={animationConfig}
/>
```

</template>
<template #vue>

```vue
<ScatterChart
  :data="scatterData"
  :legend="legendConfig"
  :xAxis="xAxisConfig"
  :yAxis="yAxisConfig"
  :animation="animationConfig"
/>
```

</template>
<template #svelte>

```svelte
<scatterChart
  data={scatterData}
  legend={legendConfig}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  animation={animationConfig}
/>
```

</template>
<template #solid>

```jsx
<scatterChart
  data={scatterData()}
  legend={legendConfig}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  animation={animationConfig}
/>
```

</template>
</FrameworkTabs>

## Dark Background Text Visibility

```typescript
const scatterData: ScatterChartData = {
  dataSets: [
    {
      label: 'Group A',
      values: [{ x: 1, y: 12 }, { x: 2, y: 18 }],
      config: {
        drawValues: true,
        valueTextColor: '#FFFFFF',
      },
    },
  ],
};

const legend: LegendConfig = { textColor: '#F3F4F6' };
const xAxis: XAxisConfig = { textColor: '#D1D5DB' };
const yAxis: YAxisConfigDual = {
  left: { textColor: '#D1D5DB' },
  right: { textColor: '#D1D5DB' },
};
```

## Data Format

```typescript
import type { ScatterChartData, ScatterDataSet, ScatterDataEntry } from '@nstudio/ncharts';

const scatterData: ScatterChartData = {
  dataSets: [
    {
      label: 'Dataset A',
      values: [
        { x: 1, y: 10 },
        { x: 2, y: 15 },
        { x: 3, y: 8 },
        { x: 5, y: 20 },
        { x: 7, y: 12 },
      ],
      config: {
        color: '#3B82F6',
        scatterShape: 'CIRCLE',
        scatterShapeSize: 10,
      },
    },
  ],
};
```

### ScatterDataEntry

| Property | Type | Description |
|----------|------|-------------|
| `x` | `number` | X-axis value |
| `y` | `number` | Y-axis value |
| `marker` | `string` | Custom marker text |

## DataSet Configuration

### Shape Styling

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | `ChartColor` | - | Shape fill color |
| `scatterShape` | `ScatterShape` | `'CIRCLE'` | Shape type |
| `scatterShapeSize` | `number` | `10` | Shape size in dp |
| `scatterShapeHoleColor` | `ChartColor` | - | Hole color for hollow shapes |
| `scatterShapeHoleRadius` | `number` | - | Hole radius |

### Available Shapes

```typescript
type ScatterShape = 'SQUARE' | 'CIRCLE' | 'TRIANGLE' | 'CROSS' | 'X';
```

## Complete Example

```typescript
import type { ScatterChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual } from '@nstudio/ncharts';

const correlationData: ScatterChartData = {
  dataSets: [
    {
      label: 'Group A',
      values: [
        { x: 1, y: 12 }, { x: 2, y: 18 }, { x: 3, y: 15 },
        { x: 4, y: 22 }, { x: 5, y: 28 }, { x: 6, y: 25 },
      ],
      config: {
        color: '#3B82F6',
        scatterShape: 'CIRCLE',
        scatterShapeSize: 12,
        highlightEnabled: true,
        highlightColor: '#1D4ED8',
      },
    },
    {
      label: 'Group B',
      values: [
        { x: 1.5, y: 8 }, { x: 2.5, y: 14 }, { x: 3.5, y: 11 },
        { x: 4.5, y: 18 }, { x: 5.5, y: 22 }, { x: 6.5, y: 20 },
      ],
      config: {
        color: '#10B981',
        scatterShape: 'TRIANGLE',
        scatterShapeSize: 10,
      },
    },
  ],
};

const animation: ChartAnimation = {
  durationX: 1000,
  durationY: 1000,
  easingX: 'EaseOutQuad',
};

const legend: LegendConfig = {
  enabled: true,
  horizontalAlignment: 'CENTER',
  verticalAlignment: 'BOTTOM',
};

const xAxis: XAxisConfig = {
  enabled: true,
  position: 'BOTTOM',
  drawGridLines: true,
  gridColor: '#E5E7EB',
};

const yAxis: YAxisConfigDual = {
  left: {
    enabled: true,
    drawGridLines: true,
    gridColor: '#E5E7EB',
    axisMinimum: 0,
  },
  right: { enabled: false },
};
```

## Template

```html
<ScatterChart
  [data]="correlationData"
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
</ScatterChart>
```

## See Also

- [Bubble Chart](/ncharts/charts/bubble-chart) - Scatter with size dimension
- [Animation Configuration](/ncharts/config/animation)
