# Pie Chart

Pie charts are perfect for showing proportions and part-to-whole relationships. Supports both pie and donut (ring) styles.

## Basic Usage

<FrameworkTabs>
<template #angular>

```html
<PieChart
  [data]="pieData"
  [legend]="legendConfig"
  [animation]="animationConfig"
  [drawHole]="true"
  [holeRadius]="45"
  [drawCenterText]="true"
  [centerText]="'Total'"
  [usePercentValues]="true">
</PieChart>
```

</template>
<template #react>

```tsx
<pieChart
  data={pieData}
  legend={legendConfig}
  animation={animationConfig}
  drawHole={true}
  holeRadius={45}
  drawCenterText={true}
  centerText="Total"
  usePercentValues={true}
/>
```

</template>
<template #vue>

```vue
<PieChart
  :data="pieData"
  :legend="legendConfig"
  :animation="animationConfig"
  :drawHole="true"
  :holeRadius="45"
  :drawCenterText="true"
  centerText="Total"
  :usePercentValues="true"
/>
```

</template>
<template #svelte>

```svelte
<pieChart
  data={pieData}
  legend={legendConfig}
  animation={animationConfig}
  drawHole={true}
  holeRadius={45}
  drawCenterText={true}
  centerText="Total"
  usePercentValues={true}
/>
```

</template>
<template #solid>

```jsx
<pieChart
  data={pieData()}
  legend={legendConfig}
  animation={animationConfig}
  drawHole={true}
  holeRadius={45}
  drawCenterText={true}
  centerText="Total"
  usePercentValues={true}
/>
```

</template>
</FrameworkTabs>

## Data Format

```typescript
import type { PieChartData, PieDataSet, PieDataEntry } from '@nstudio/ncharts';

const pieData: PieChartData = {
  dataSets: [
    {
      label: 'Market Share',
      values: [
        { value: 35, label: 'Product A' },
        { value: 25, label: 'Product B' },
        { value: 20, label: 'Product C' },
        { value: 12, label: 'Product D' },
        { value: 8, label: 'Others' },
      ],
      config: {
        colors: ['#F59E0B', '#EF4444', '#8B5CF6', '#3B82F6', '#6B7280'],
        sliceSpace: 3,
        selectionShift: 8,
      },
    },
  ],
};
```

### PieDataEntry

| Property | Type | Description |
|----------|------|-------------|
| `value` | `number` | Slice value (required) |
| `label` | `string` | Slice label text |

::: tip Simplified Values
You can also pass just numbers if you don't need labels:
```typescript
values: [35, 25, 20, 12, 8]
```
:::

## DataSet Configuration

### Slice Styling

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `colors` | `ChartColor[]` | - | Colors for each slice |
| `sliceSpace` | `number` | `0` | Space between slices in dp |
| `selectionShift` | `number` | `0` | How far slice moves out when selected |

### Value Positioning

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `xValuePosition` | `ValuePosition` | `'INSIDE_SLICE'` | Label position |
| `yValuePosition` | `ValuePosition` | `'INSIDE_SLICE'` | Value position |

```typescript
type ValuePosition = 'INSIDE_SLICE' | 'OUTSIDE_SLICE';
```

### Value Lines (for outside positioning)

| Property | Type | Description |
|----------|------|-------------|
| `valueLinePart1Length` | `number` | Length of line segment 1 |
| `valueLinePart2Length` | `number` | Length of line segment 2 |
| `valueLineColor` | `ChartColor` | Line color |
| `valueLineWidth` | `number` | Line width |
| `valueLinePart1OffsetPercentage` | `number` | Offset from center |
| `valueLineVariableLength` | `boolean` | Auto-adjust line length |

## Chart Properties

### Donut Configuration

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `drawHole` | `boolean` | `false` | Enable donut mode |
| `holeRadius` | `number` | `50` | Hole radius as % of chart |
| `holeColor` | `ChartColor` | - | Hole background color |
| `transparentCircleRadius` | `number` | - | Transparent circle around hole |
| `transparentCircleColor` | `ChartColor` | - | Transparent circle color |

### Center Text

| Property | Type | Description |
|----------|------|-------------|
| `drawCenterText` | `boolean` | Show text in center |
| `centerText` | `string` | Center text content |
| `centerTextColor` | `ChartColor` | Text color |
| `centerTextSize` | `number` | Text size in dp |

### Slice Labels

| Property | Type | Description |
|----------|------|-------------|
| `drawSliceText` | `boolean` | Show labels on slices |
| `entryLabelColor` | `ChartColor` | Label text color |
| `entryLabelTextSize` | `number` | Label text size |
| `usePercentValues` | `boolean` | Show values as percentages |

### Interaction

| Property | Type | Description |
|----------|------|-------------|
| `rotationEnabled` | `boolean` | Allow rotation gesture |
| `rotationAngle` | `number` | Initial rotation angle |
| `maxAngle` | `number` | Max angle for display (default 360) |
| `highlightPerTapEnabled` | `boolean` | Enable tap selection |

## Complete Example

```typescript
import type { 
  PieChartData, 
  ChartAnimation, 
  LegendConfig 
} from '@nstudio/ncharts';

// Market share data
const marketData: PieChartData = {
  dataSets: [
    {
      label: 'Market Share',
      values: [
        { value: 35, label: 'iOS Apps' },
        { value: 28, label: 'Android Apps' },
        { value: 18, label: 'Web Apps' },
        { value: 12, label: 'Desktop' },
        { value: 7, label: 'Other' },
      ],
      config: {
        colors: ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#6B7280'],
        sliceSpace: 3,
        selectionShift: 10,
        drawValues: true,
        valueTextSize: 12,
        valueTextColor: '#FFFFFF',
        xValuePosition: 'INSIDE_SLICE',
        yValuePosition: 'INSIDE_SLICE',
      },
    },
  ],
};

// Animation
const animation: ChartAnimation = {
  durationX: 1400,
  durationY: 1400,
  easingX: 'EaseOutBounce',
};

// Legend
const legend: LegendConfig = {
  enabled: true,
  horizontalAlignment: 'CENTER',
  verticalAlignment: 'BOTTOM',
  orientation: 'HORIZONTAL',
  form: 'CIRCLE',
  textSize: 10,
};
```

## Template

<FrameworkTabs>
<template #angular>

### Standard Pie Chart

```html
<PieChart
  #pieChart
  [data]="marketData"
  [animation]="animation"
  [legend]="legend"
  [drawHole]="false"
  [drawSliceText]="true"
  [usePercentValues]="true"
  [rotationEnabled]="true"
  [rotationAngle]="0"
  [highlightPerTapEnabled]="true"
  (select)="onSelect($event)"
  (deselect)="onDeselect()"
  class="h-80 w-full">
</PieChart>
```

### Donut Chart

```html
<PieChart
  [data]="marketData"
  [animation]="animation"
  [legend]="legend"
  [drawHole]="true"
  [holeRadius]="50"
  [transparentCircleRadius]="55"
  [holeColor]="'#FFFFFF'"
  [drawCenterText]="true"
  [centerText]="'Revenue\n$2.4M'"
  [centerTextColor]="'#374151'"
  [centerTextSize]="16"
  [usePercentValues]="true"
  class="h-80 w-full">
</PieChart>
```

</template>
<template #react>

```tsx
import * as React from "react";
import { useState, useRef } from "react";
import type { PieChartData, ChartAnimation, LegendConfig, PieChart } from "@nstudio/ncharts";

export const PieChartDemo = () => {
  const pieChartRef = useRef<PieChart | null>(null);
  const [isDonut, setIsDonut] = useState(true);
  const [selectedData, setSelectedData] = useState(null);

  const marketData: PieChartData = {
    dataSets: [
      {
        label: 'Market Share',
        values: [
          { value: 35, label: 'Product A' },
          { value: 25, label: 'Product B' },
          { value: 20, label: 'Product C' },
          { value: 12, label: 'Product D' },
          { value: 8, label: 'Others' },
        ],
        config: {
          colors: ['#F59E0B', '#EF4444', '#8B5CF6', '#3B82F6', '#6B7280'],
          sliceSpace: 3,
          selectionShift: 8,
          drawValues: true,
          valueTextSize: 12,
          valueTextColor: '#FFFFFF',
        },
      },
    ],
  };

  return (
    <pieChart
      ref={pieChartRef}
      data={marketData}
      animation={{ durationX: 1400, durationY: 1400, easingX: 'EaseOutBounce' }}
      legend={{ enabled: true, horizontalAlignment: 'CENTER', verticalAlignment: 'BOTTOM' }}
      drawHole={isDonut}
      holeRadius={45}
      drawCenterText={isDonut}
      centerText="Total"
      usePercentValues={true}
      rotationEnabled={true}
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
import type { PieChartData, ChartSelectEvent } from '@nstudio/ncharts';

const selectedValue = ref('');
const isDonut = ref(false);

const chartData: PieChartData = {
  dataSets: [
    {
      label: 'Sales by Product',
      values: [
        { value: 35, label: 'Product A' },
        { value: 25, label: 'Product B' },
        { value: 20, label: 'Product C' },
        { value: 12, label: 'Product D' },
        { value: 8, label: 'Other' },
      ],
      config: {
        colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
        sliceSpace: 2,
        selectionShift: 8,
        drawValues: true,
        valueTextSize: 12,
        valueTextColor: '#FFFFFF',
      },
    },
  ],
};

function handleValueSelected(event: ChartSelectEvent) {
  if (event.data) {
    selectedValue.value = `Value: ${event.data.y?.toFixed(0)}%`;
  }
}
</script>

<template>
  <PieChart
    :data="chartData"
    :animation="{ durationX: 1400, durationY: 1400, easingX: 'EaseOutBounce' }"
    :legend="{ enabled: true }"
    :drawHole="isDonut"
    :holeRadius="50"
    :drawCenterText="isDonut"
    centerText="Total"
    :usePercentValues="true"
    :rotationEnabled="true"
    :highlightPerTapEnabled="true"
    @select="handleValueSelected"
    class="h-80 w-full"
  />
</template>
```

</template>
<template #svelte>

```svelte
<script lang="ts">
  import type { PieChartData, ChartSelectData } from '@nstudio/ncharts';

  let selectedData: ChartSelectData | null = null;
  let isDonut = true;

  const marketData: PieChartData = {
    dataSets: [
      {
        label: 'Market Share',
        values: [
          { value: 35, label: 'Product A' },
          { value: 25, label: 'Product B' },
          { value: 20, label: 'Product C' },
          { value: 12, label: 'Product D' },
          { value: 8, label: 'Others' },
        ],
        config: {
          colors: ['#F59E0B', '#EF4444', '#8B5CF6', '#3B82F6', '#6B7280'],
          sliceSpace: 3,
          selectionShift: 8,
          drawValues: true,
          valueTextSize: 12,
          valueTextColor: '#FFFFFF',
        },
      },
    ],
  };

  const legendConfig = { enabled: true, horizontalAlignment: 'CENTER', verticalAlignment: 'BOTTOM' };
  const animationConfig = { durationX: 1400, durationY: 1400, easingX: 'EaseOutBounce' };

  function handleSelect(event: CustomEvent) {
    selectedData = event.detail.data;
  }
</script>

<pieChart
  data={marketData}
  animation={animationConfig}
  legend={legendConfig}
  drawHole={isDonut}
  holeRadius={45}
  drawCenterText={isDonut}
  centerText="Total"
  usePercentValues={true}
  rotationEnabled={true}
  highlightPerTapEnabled={true}
  on:select={handleSelect}
  on:deselect={() => selectedData = null}
  class="h-80 w-full"
/>
```

</template>
<template #solid>

```jsx
import { createSignal } from 'solid-js';

export const PieChartDemo = () => {
  let pieChartRef;
  const [isDonut, setIsDonut] = createSignal(true);
  const [selectedData, setSelectedData] = createSignal(null);

  const marketData = () => ({
    dataSets: [
      {
        label: 'Market Share',
        values: [
          { value: 35, label: 'Product A' },
          { value: 25, label: 'Product B' },
          { value: 20, label: 'Product C' },
          { value: 12, label: 'Product D' },
          { value: 8, label: 'Others' },
        ],
        config: {
          colors: ['#F59E0B', '#EF4444', '#8B5CF6', '#3B82F6', '#6B7280'],
          sliceSpace: 3,
          selectionShift: 8,
          drawValues: true,
          valueTextSize: 12,
          valueTextColor: '#FFFFFF',
        },
      },
    ],
  });

  const legendConfig = { enabled: true, horizontalAlignment: 'CENTER', verticalAlignment: 'BOTTOM' };
  const animationConfig = { durationX: 1400, durationY: 1400, easingX: 'EaseOutBounce' };

  return (
    <pieChart
      ref={pieChartRef}
      data={marketData()}
      animation={animationConfig}
      legend={legendConfig}
      drawHole={isDonut()}
      holeRadius={45}
      drawCenterText={isDonut()}
      centerText="Total"
      usePercentValues={true}
      rotationEnabled={true}
      highlightPerTapEnabled={true}
      onSelect={(event) => setSelectedData(event.data)}
      onDeselect={() => setSelectedData(null)}
      class="h-80 w-full"
    />
  );
};
```

</template>
</FrameworkTabs>

### Half Pie (Semi-circle)

<FrameworkTabs>
<template #angular>

```html
<PieChart
  [data]="marketData"
  [maxAngle]="180"
  [rotationAngle]="180"
  [drawHole]="true"
  [holeRadius]="40"
  class="h-48 w-full">
</PieChart>
```

</template>
<template #react>

```tsx
<pieChart
  data={marketData}
  maxAngle={180}
  rotationAngle={180}
  drawHole={true}
  holeRadius={40}
  className="h-48 w-full"
/>
```

</template>
<template #vue>

```vue
<PieChart
  :data="marketData"
  :maxAngle="180"
  :rotationAngle="180"
  :drawHole="true"
  :holeRadius="40"
  class="h-48 w-full"
/>
```

</template>
<template #svelte>

```svelte
<pieChart
  data={marketData}
  maxAngle={180}
  rotationAngle={180}
  drawHole={true}
  holeRadius={40}
  class="h-48 w-full"
/>
```

</template>
<template #solid>

```jsx
<pieChart
  data={marketData()}
  maxAngle={180}
  rotationAngle={180}
  drawHole={true}
  holeRadius={40}
  class="h-48 w-full"
/>
```

</template>
</FrameworkTabs>

## Outside Labels Example

For charts with many small slices, place labels outside:

```typescript
config: {
  colors: ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#6B7280'],
  sliceSpace: 2,
  xValuePosition: 'OUTSIDE_SLICE',
  yValuePosition: 'OUTSIDE_SLICE',
  valueLinePart1Length: 0.4,
  valueLinePart2Length: 0.5,
  valueLineColor: '#9CA3AF',
  valueLineWidth: 1,
  valueLineVariableLength: true,
  drawValues: true,
  valueTextSize: 10,
  valueTextColor: '#374151',
}
```

## Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `animate()` | `ChartAnimation` | Trigger chart animation |
| `highlightValues()` | `Highlight[]` | Programmatically highlight slices |
| `clearHighlights()` | - | Clear all highlights |
| `spin()` | `duration, degrees` | Spin the chart |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `select` | `ChartSelectEvent` | Fired when slice is tapped |
| `deselect` | - | Fired when selection is cleared |

## Programmatic Control

```typescript
@ViewChild('pieChart') chartRef!: ElementRef;

// Spin animation
spinChart(): void {
  const chart = this.chartRef.nativeElement;
  this.rotationAngle += 90;
}

// Animate in
animateChart(): void {
  const chart = this.chartRef.nativeElement;
  chart.animate({ 
    durationX: 1400, 
    durationY: 1400, 
    easingX: 'EaseInOutCubic' 
  });
}
```

## See Also

- [Animation Configuration](/ncharts/config/animation)
- [Legend Configuration](/ncharts/config/legend)
- [Styling Guide](/ncharts/config/styling)
