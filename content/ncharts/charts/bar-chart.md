# Bar Chart

Bar charts are ideal for comparing discrete categories, showing rankings, and displaying distribution data.

## Basic Usage

<FrameworkTabs>
<template #angular>

```html
<!-- Vertical Bar Chart -->
<BarChart
  [data]="barData"
  [legend]="legendConfig"
  [xAxis]="xAxisConfig"
  [yAxis]="yAxisConfig"
  [animation]="animationConfig">
</BarChart>

<!-- Horizontal Bar Chart -->
<HorizontalBarChart
  [data]="barData"
  [legend]="legendConfig"
  [xAxis]="xAxisConfig"
  [yAxis]="yAxisConfig"
  [animation]="animationConfig">
</HorizontalBarChart>
```

</template>
<template #react>

```tsx
{/* Vertical Bar Chart */}
<barChart
  data={barData}
  legend={legendConfig}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  animation={animationConfig}
/>

{/* Horizontal Bar Chart */}
<horizontalBarChart
  data={barData}
  legend={legendConfig}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  animation={animationConfig}
/>
```

</template>
<template #vue>

```vue
<!-- Vertical Bar Chart -->
<BarChart
  :data="barData"
  :legend="legendConfig"
  :xAxis="xAxisConfig"
  :yAxis="yAxisConfig"
  :animation="animationConfig"
/>

<!-- Horizontal Bar Chart -->
<HorizontalBarChart
  :data="barData"
  :legend="legendConfig"
  :xAxis="xAxisConfig"
  :yAxis="yAxisConfig"
  :animation="animationConfig"
/>
```

</template>
<template #svelte>

```svelte
<!-- Vertical Bar Chart -->
<barChart
  data={barData}
  legend={legendConfig}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  animation={animationConfig}
/>

<!-- Horizontal Bar Chart -->
<horizontalBarChart
  data={barData}
  legend={legendConfig}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  animation={animationConfig}
/>
```

</template>
<template #solid>

```jsx
{/* Vertical Bar Chart */}
<barChart
  data={barData()}
  legend={legendConfig}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  animation={animationConfig}
/>

{/* Horizontal Bar Chart */}
<horizontalBarChart
  data={barData()}
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
import type { BarChartData, BarDataSet, BarDataEntry } from '@nstudio/ncharts';

const barData: BarChartData = {
  dataSets: [
    {
      label: 'Sales',
      values: [
        { x: 0, y: 250000 },
        { x: 1, y: 320000 },
        { x: 2, y: 280000 },
        { x: 3, y: 410000 },
      ],
      config: {
        colors: ['#10B981', '#14B8A6', '#06B6D4', '#3B82F6'],
        drawValues: true,
      },
    },
  ],
  config: {
    barWidth: 0.85,
  },
};
```

### BarDataEntry

| Property | Type | Description |
|----------|------|-------------|
| `x` | `number` | X-axis position (optional, defaults to index) |
| `y` | `number \| number[]` | Single value or array for stacked bars |
| `marker` | `string \| string[]` | Custom marker text(s) |

### Stacked Bars

For stacked bars, provide an array of values:

```typescript
values: [
  { x: 0, y: [100, 150, 80] },  // 3 stacked segments
  { x: 1, y: [120, 130, 90] },
  { x: 2, y: [90, 160, 100] },
]
```

## DataSet Configuration

### Bar Styling

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | `ChartColor` | - | Single color for all bars |
| `colors` | `ChartColor[]` | - | Different color per bar |
| `barShadowColor` | `ChartColor` | - | Shadow color behind bars |
| `highlightAlpha` | `number` | - | Highlight transparency (0-255) |
| `stackLabels` | `string[]` | - | Labels for stacked bar segments |

### Common Options

| Property | Type | Description |
|----------|------|-------------|
| `highlightEnabled` | `boolean` | Enable tap highlighting |
| `highlightColor` | `ChartColor` | Highlight color |
| `drawValues` | `boolean` | Show value labels |
| `valueTextSize` | `number` | Value label text size |
| `valueTextColor` | `ChartColor` | Value label color |
| `valueFormatter` | `string \| string[]` | Custom value formatting |
| `visible` | `boolean` | Toggle visibility |

## Chart Data Configuration

The `config` object on `BarChartData` controls chart-wide bar settings:

```typescript
const barData: BarChartData = {
  dataSets: [/* ... */],
  config: {
    barWidth: 0.85,           // Width of each bar (0-1)
    group: {                  // For grouped bar charts
      fromX: 0,
      groupSpace: 0.1,        // Space between groups
      barSpace: 0.05,         // Space between bars in group
    },
  },
};
```

## Grouped Bar Charts

Display multiple datasets side by side:

```typescript
const groupedData: BarChartData = {
  dataSets: [
    {
      label: 'Q1',
      values: [{ x: 0, y: 45 }, { x: 1, y: 52 }, { x: 2, y: 48 }],
      config: { color: '#3B82F6' },
    },
    {
      label: 'Q2',
      values: [{ x: 0, y: 55 }, { x: 1, y: 62 }, { x: 2, y: 58 }],
      config: { color: '#10B981' },
    },
    {
      label: 'Q3',
      values: [{ x: 0, y: 65 }, { x: 1, y: 72 }, { x: 2, y: 68 }],
      config: { color: '#F59E0B' },
    },
  ],
  config: {
    barWidth: 0.25,
    group: {
      fromX: 0,
      groupSpace: 0.1,
      barSpace: 0.02,
    },
  },
};
```

## Complete Example

```typescript
import type { 
  BarChartData, 
  ChartAnimation, 
  LegendConfig, 
  XAxisConfig, 
  YAxisConfigDual 
} from '@nstudio/ncharts';

// Quarterly revenue data
const revenueData: BarChartData = {
  dataSets: [
    {
      label: 'Revenue 2024',
      values: [
        { x: 0, y: 1250000 },
        { x: 1, y: 1580000 },
        { x: 2, y: 1420000 },
        { x: 3, y: 1890000 },
      ],
      config: {
        colors: ['#10B981', '#14B8A6', '#06B6D4', '#3B82F6'],
        drawValues: true,
        valueTextSize: 11,
        valueTextColor: '#374151',
        valueFormatter: 'largeValue',
        highlightEnabled: true,
        highlightColor: '#1D4ED8',
        highlightAlpha: 180,
      },
    },
  ],
  config: {
    barWidth: 0.7,
  },
};

// Animation
const animation: ChartAnimation = {
  durationX: 1000,
  durationY: 1000,
  easingX: 'EaseOutBack',
};

// Legend
const legend: LegendConfig = {
  enabled: true,
  horizontalAlignment: 'CENTER',
  verticalAlignment: 'BOTTOM',
  form: 'SQUARE',
  textSize: 11,
};

// X-Axis with quarter labels
const xAxis: XAxisConfig = {
  enabled: true,
  position: 'BOTTOM',
  drawGridLines: false,
  drawLabels: true,
  granularity: 1,
  textSize: 12,
  valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4'],
};

// Y-Axis
const yAxis: YAxisConfigDual = {
  left: {
    enabled: true,
    drawGridLines: true,
    gridColor: '#E5E7EB',
    textSize: 10,
    axisMinimum: 0,
    valueFormatter: 'largeValue',
  },
  right: {
    enabled: false,
  },
};
```

## Template

<FrameworkTabs>
<template #angular>

```html
<BarChart
  #barChart
  [data]="revenueData"
  [animation]="animation"
  [legend]="legend"
  [xAxis]="xAxis"
  [yAxis]="yAxis"
  [touchEnabled]="true"
  [dragEnabled]="true"
  [scaleEnabled]="true"
  [highlightPerTapEnabled]="true"
  (select)="onSelect($event)"
  (deselect)="onDeselect()"
  class="h-80 w-full">
</BarChart>
```

</template>
<template #react>

```tsx
import * as React from "react";
import { useState, useRef } from "react";
import type { BarChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, BarChart } from "@nstudio/ncharts";

export const BarChartDemo = () => {
  const barChartRef = useRef<BarChart | null>(null);
  const [selectedData, setSelectedData] = useState(null);

  const revenueData: BarChartData = {
    dataSets: [
      {
        label: 'Revenue (M)',
        values: [
          { x: 0, y: 2.4 },
          { x: 1, y: 3.2 },
          { x: 2, y: 2.8 },
          { x: 3, y: 4.1 },
        ],
        config: {
          colors: ['#10B981', '#34D399', '#6EE7B7', '#A7F3D0'],
          drawValues: true,
          valueTextSize: 12,
          valueTextColor: '#374151',
        },
      },
    ],
  };

  return (
    <barChart
      ref={barChartRef}
      data={revenueData}
      animation={{ durationX: 1000, durationY: 1000, easingX: 'EaseOutBack' }}
      legend={{ enabled: true, horizontalAlignment: 'CENTER', verticalAlignment: 'BOTTOM' }}
      xAxis={{ enabled: true, position: 'BOTTOM', valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4'] }}
      yAxis={{ left: { enabled: true, drawGridLines: true, axisMinimum: 0 }, right: { enabled: false } }}
      touchEnabled={true}
      highlightPerTapEnabled={true}
      onSelect={(event) => setSelectedData(event.data)}
      onDeselect={() => setSelectedData(null)}
      className="h-80 w-full"
    />
  );
};
```

</template>
<template #vue>

```vue
<script lang="ts" setup>
import { ref, computed } from 'vue';
import type { BarChartData, ChartSelectEvent } from '@nstudio/ncharts';

const selectedValue = ref('');
const isHorizontal = ref(false);

const chartData: BarChartData = {
  dataSets: [
    {
      label: 'Revenue (M)',
      values: [
        { x: 0, y: 2.4 },
        { x: 1, y: 3.2 },
        { x: 2, y: 2.8 },
        { x: 3, y: 4.1 },
      ],
      config: {
        colors: ['#10B981', '#34D399', '#6EE7B7', '#A7F3D0'],
        drawValues: true,
        valueTextSize: 12,
        valueTextColor: '#FFFFFF',
      },
    },
  ],
};

function handleValueSelected(event: ChartSelectEvent) {
  if (event.data) {
    selectedValue.value = `Index: ${event.data.x?.toFixed(0)}, Value: ${event.data.y?.toFixed(0)}`;
  }
}
</script>

<template>
  <BarChart
    v-if="!isHorizontal"
    :data="chartData"
    :animation="{ durationX: 1000, durationY: 1000, easingX: 'EaseOutBack' }"
    :legend="{ enabled: true }"
    :xAxis="{ enabled: true, valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4'] }"
    :yAxis="{ left: { enabled: true, axisMinimum: 0 }, right: { enabled: false } }"
    :highlightPerTapEnabled="true"
    @select="handleValueSelected"
    class="h-80 w-full"
  />
  <HorizontalBarChart
    v-else
    :data="chartData"
    :animation="{ durationX: 1000, durationY: 1000 }"
    class="h-80 w-full"
  />
</template>
```

</template>
<template #svelte>

```svelte
<script lang="ts">
  import type { BarChartData, ChartSelectData } from '@nstudio/ncharts';

  let selectedData: ChartSelectData | null = null;
  let isHorizontal = false;

  const revenueData: BarChartData = {
    dataSets: [
      {
        label: 'Revenue (M)',
        values: [
          { x: 0, y: 2.4 },
          { x: 1, y: 3.2 },
          { x: 2, y: 2.8 },
          { x: 3, y: 4.1 },
        ],
        config: {
          colors: ['#10B981', '#34D399', '#6EE7B7', '#A7F3D0'],
          drawValues: true,
          valueTextSize: 12,
          valueTextColor: '#374151',
        },
      },
    ],
  };

  const legendConfig = { enabled: true, horizontalAlignment: 'CENTER', verticalAlignment: 'BOTTOM' };
  const xAxisConfig = { enabled: true, position: 'BOTTOM', valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4'] };
  const yAxisConfig = { left: { enabled: true, drawGridLines: true, axisMinimum: 0 }, right: { enabled: false } };
  const animationConfig = { durationX: 1000, durationY: 1000, easingX: 'EaseOutBack' };

  function handleSelect(event: CustomEvent) {
    selectedData = event.detail.data;
  }
</script>

{#if !isHorizontal}
  <barChart
    data={revenueData}
    animation={animationConfig}
    legend={legendConfig}
    xAxis={xAxisConfig}
    yAxis={yAxisConfig}
    touchEnabled={true}
    highlightPerTapEnabled={true}
    on:select={handleSelect}
    on:deselect={() => selectedData = null}
    class="h-80 w-full"
  />
{:else}
  <horizontalBarChart
    data={revenueData}
    animation={animationConfig}
    class="h-80 w-full"
  />
{/if}
```

</template>
<template #solid>

```jsx
import { createSignal } from 'solid-js';

export const BarChartDemo = () => {
  let barChartRef;
  const [isHorizontal, setIsHorizontal] = createSignal(false);
  const [selectedData, setSelectedData] = createSignal(null);

  const revenueData = () => ({
    dataSets: [
      {
        label: 'Revenue (M)',
        values: [
          { x: 0, y: 2.4 },
          { x: 1, y: 3.2 },
          { x: 2, y: 2.8 },
          { x: 3, y: 4.1 },
        ],
        config: {
          colors: ['#10B981', '#34D399', '#6EE7B7', '#A7F3D0'],
          drawValues: true,
          valueTextSize: 12,
          valueTextColor: '#374151',
        },
      },
    ],
  });

  const legendConfig = { enabled: true, horizontalAlignment: 'CENTER', verticalAlignment: 'BOTTOM' };
  const xAxisConfig = { enabled: true, position: 'BOTTOM', valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4'] };
  const yAxisConfig = { left: { enabled: true, drawGridLines: true, axisMinimum: 0 }, right: { enabled: false } };
  const animationConfig = { durationX: 1000, durationY: 1000, easingX: 'EaseOutBack' };

  return (
    <>
      {!isHorizontal() ? (
        <barChart
          ref={barChartRef}
          data={revenueData()}
          animation={animationConfig}
          legend={legendConfig}
          xAxis={xAxisConfig}
          yAxis={yAxisConfig}
          touchEnabled={true}
          highlightPerTapEnabled={true}
          onSelect={(event) => setSelectedData(event.data)}
          onDeselect={() => setSelectedData(null)}
          class="h-80 w-full"
        />
      ) : (
        <horizontalBarChart
          data={revenueData()}
          animation={animationConfig}
          class="h-80 w-full"
        />
      )}
    </>
  );
};
```

</template>
</FrameworkTabs>

## Horizontal Bar Chart

For horizontal orientation, use `HorizontalBarChart`:

<FrameworkTabs>
<template #angular>

```html
<HorizontalBarChart
  [data]="barData"
  [legend]="legend"
  [xAxis]="xAxis"
  [yAxis]="yAxis"
  [animation]="animation"
  class="h-80 w-full">
</HorizontalBarChart>
```

</template>
<template #react>

```tsx
<horizontalBarChart
  data={barData}
  legend={legend}
  xAxis={xAxis}
  yAxis={yAxis}
  animation={animation}
  className="h-80 w-full"
/>
```

</template>
<template #vue>

```vue
<HorizontalBarChart
  :data="barData"
  :legend="legend"
  :xAxis="xAxis"
  :yAxis="yAxis"
  :animation="animation"
  class="h-80 w-full"
/>
```

</template>
<template #svelte>

```svelte
<horizontalBarChart
  data={barData}
  legend={legend}
  xAxis={xAxis}
  yAxis={yAxis}
  animation={animation}
  class="h-80 w-full"
/>
```

</template>
<template #solid>

```jsx
<horizontalBarChart
  data={barData()}
  legend={legend}
  xAxis={xAxis}
  yAxis={yAxis}
  animation={animation}
  class="h-80 w-full"
/>
```

</template>
</FrameworkTabs>

::: tip Axis Swap
In horizontal bar charts, the X-axis shows values and Y-axis shows categories. Configure accordingly.
:::

## Stacked Bar Example

```typescript
const stackedData: BarChartData = {
  dataSets: [
    {
      label: 'Revenue Breakdown',
      values: [
        { x: 0, y: [300000, 250000, 200000] },
        { x: 1, y: [350000, 280000, 220000] },
        { x: 2, y: [320000, 260000, 240000] },
        { x: 3, y: [400000, 300000, 280000] },
      ],
      config: {
        colors: ['#10B981', '#3B82F6', '#F59E0B'],
        stackLabels: ['Product A', 'Product B', 'Product C'],
        drawValues: false,
      },
    },
  ],
};
```

## Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `animate()` | `ChartAnimation` | Trigger chart animation |
| `highlightValues()` | `Highlight[]` | Programmatically highlight values |
| `clearHighlights()` | - | Clear all highlights |
| `fitScreen()` | - | Reset zoom/pan to fit all data |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `select` | `ChartSelectEvent` | Fired when bar is tapped |
| `deselect` | - | Fired when selection is cleared |

## See Also

- [Animation Configuration](/ncharts/config/animation)
- [Axes Configuration](/ncharts/config/axes)
- [Legend Configuration](/ncharts/config/legend)
