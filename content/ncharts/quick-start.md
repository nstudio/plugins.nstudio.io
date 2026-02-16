# Quick Start

Build your first chart in minutes with @nstudio/ncharts.

## Your First Line Chart

Let's create a simple line chart showing monthly revenue data.

### 1. Import the Types

```typescript
import type { 
  LineChartData, 
  ChartAnimation, 
  LegendConfig, 
  XAxisConfig, 
  YAxisConfigDual 
} from '@nstudio/ncharts';
```

### 2. Define Your Data

```typescript
const lineData: LineChartData = {
  dataSets: [
    {
      label: 'Revenue 2024',
      values: [
        { x: 0, y: 45000 },
        { x: 1, y: 52000 },
        { x: 2, y: 48000 },
        { x: 3, y: 65000 },
        { x: 4, y: 78000 },
        { x: 5, y: 72000 },
        { x: 6, y: 85000 },
        { x: 7, y: 92000 },
        { x: 8, y: 88000 },
        { x: 9, y: 105000 },
        { x: 10, y: 118000 },
        { x: 11, y: 135000 },
      ],
      config: {
        color: '#3B82F6',
        lineWidth: 2.5,
        drawCircles: true,
        circleRadius: 4,
        circleColor: '#3B82F6',
        drawFilled: true,
        fillColor: '#3B82F6',
        fillAlpha: 50,
        mode: 'CUBIC_BEZIER',
        drawValues: false,
      },
    },
  ],
};
```

### 3. Configure the Chart

```typescript
// Animation settings
const animation: ChartAnimation = {
  durationX: 1200,
  durationY: 1200,
  easingX: 'EaseOutQuad',
};

// Legend configuration
const legend: LegendConfig = {
  enabled: true,
  horizontalAlignment: 'CENTER',
  verticalAlignment: 'BOTTOM',
  orientation: 'HORIZONTAL',
  form: 'CIRCLE',
  textSize: 11,
};

// X-axis configuration
const xAxis: XAxisConfig = {
  enabled: true,
  position: 'BOTTOM',
  drawGridLines: true,
  drawLabels: true,
  granularity: 1,
  textSize: 10,
  gridColor: '#E5E7EB',
  valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

// Y-axis configuration  
const yAxis: YAxisConfigDual = {
  left: {
    enabled: true,
    drawGridLines: true,
    gridColor: '#E5E7EB',
    textSize: 10,
    axisMinimum: 0,
    valueFormatter: 'largeValue', // Formats as 45K, 100K, etc.
  },
  right: {
    enabled: false,
  },
};
```

### 4. Use in Your Template

<FrameworkTabs>
<template #angular>

```html
<LineChart
  [data]="lineData"
  [animation]="animation"
  [legend]="legend"
  [xAxis]="xAxis"
  [yAxis]="yAxis"
  [touchEnabled]="true"
  [dragEnabled]="true"
  [scaleEnabled]="true"
  [pinchZoom]="true"
  [highlightPerTapEnabled]="true"
  (select)="onChartSelect($event)"
  (deselect)="onChartDeselect()"
  class="h-80">
</LineChart>
```

</template>
<template #react>

```tsx
<lineChart
  data={lineData}
  animation={animation}
  legend={legend}
  xAxis={xAxis}
  yAxis={yAxis}
  touchEnabled={true}
  dragEnabled={true}
  scaleEnabled={true}
  pinchZoom={true}
  highlightPerTapEnabled={true}
  onSelect={handleChartSelect}
  onDeselect={handleChartDeselect}
  className="h-80"
/>
```

</template>
<template #vue>

```vue
<LineChart
  :data="lineData"
  :animation="animation"
  :legend="legend"
  :xAxis="xAxis"
  :yAxis="yAxis"
  :touchEnabled="true"
  :dragEnabled="true"
  :scaleEnabled="true"
  :pinchZoom="true"
  :highlightPerTapEnabled="true"
  @select="onChartSelect"
  @deselect="onChartDeselect"
  class="h-80"
/>
```

</template>
<template #svelte>

```svelte
<lineChart
  data={lineData}
  animation={animation}
  legend={legend}
  xAxis={xAxis}
  yAxis={yAxis}
  touchEnabled={true}
  dragEnabled={true}
  scaleEnabled={true}
  pinchZoom={true}
  highlightPerTapEnabled={true}
  on:select={handleChartSelect}
  on:deselect={handleChartDeselect}
  class="h-80"
/>
```

</template>
<template #solid>

```jsx
<lineChart
  data={lineData()}
  animation={animation}
  legend={legend}
  xAxis={xAxis}
  yAxis={yAxis}
  touchEnabled={true}
  dragEnabled={true}
  scaleEnabled={true}
  pinchZoom={true}
  highlightPerTapEnabled={true}
  onSelect={handleChartSelect}
  onDeselect={handleChartDeselect}
  class="h-80"
/>
```

</template>
</FrameworkTabs>

### Optional: Dark Background Text Colors

When using dark chart backgrounds, set text colors explicitly so labels remain readable:

```typescript
lineData.dataSets[0].config = {
  ...lineData.dataSets[0].config,
  drawValues: true,
  valueTextColor: '#FFFFFF',
};

legend.textColor = '#F3F4F6';
xAxis.textColor = '#D1D5DB';
yAxis.left = { ...yAxis.left, textColor: '#D1D5DB' };

const chartDescription = { text: '', textColor: '#9CA3AF' };
const noDataTextColor = '#9CA3AF';
```

### 5. Handle Selection Events

<FrameworkTabs>
<template #angular>

```typescript
import type { ChartSelectEvent } from '@nstudio/ncharts';

onChartSelect(event: ChartSelectEvent): void {
  const { x, y, dataSetIndex, dataIndex } = event.data;
  console.log(`Selected: x=${x}, y=${y}, dataset=${dataSetIndex}`);
}

onChartDeselect(): void {
  console.log('Selection cleared');
}
```

</template>
<template #react>

```tsx
import type { ChartSelectEvent } from "@nstudio/ncharts";

const handleChartSelect = (event: ChartSelectEvent) => {
  const { x, y, dataSetIndex, dataIndex } = event.data;
  console.log(`Selected: x=${x}, y=${y}, dataset=${dataSetIndex}`);
};

const handleChartDeselect = () => {
  console.log('Selection cleared');
};
```

</template>
<template #vue>

```typescript
import type { ChartSelectEvent } from '@nstudio/ncharts';

function onChartSelect(event: ChartSelectEvent): void {
  const { x, y, dataSetIndex, dataIndex } = event.data;
  console.log(`Selected: x=${x}, y=${y}, dataset=${dataSetIndex}`);
}

function onChartDeselect(): void {
  console.log('Selection cleared');
}
```

</template>
<template #svelte>

```typescript
import type { ChartSelectEvent } from '@nstudio/ncharts';

function handleChartSelect(event: CustomEvent<ChartSelectEvent>) {
  const { x, y, dataSetIndex, dataIndex } = event.detail.data;
  console.log(`Selected: x=${x}, y=${y}, dataset=${dataSetIndex}`);
}

function handleChartDeselect() {
  console.log('Selection cleared');
}
```

</template>
<template #solid>

```jsx
const handleChartSelect = (event) => {
  const { x, y, dataSetIndex, dataIndex } = event.data;
  console.log(`Selected: x=${x}, y=${y}, dataset=${dataSetIndex}`);
};

const handleChartDeselect = () => {
  console.log('Selection cleared');
};
```

</template>
</FrameworkTabs>

## Adding Multiple Data Sets

Display comparison data with multiple lines:

```typescript
const comparisonData: LineChartData = {
  dataSets: [
    {
      label: 'Revenue 2024',
      values: [/* ... */],
      config: {
        color: '#3B82F6',
        lineWidth: 2.5,
        drawFilled: true,
        fillAlpha: 30,
      },
    },
    {
      label: 'Revenue 2023',
      values: [/* ... */],
      config: {
        color: '#10B981',
        lineWidth: 2,
        drawFilled: false,
        dashedLine: {
          lineLength: 10,
          spaceLength: 5,
        },
      },
    },
  ],
};
```

## Programmatic Control

<FrameworkTabs>
<template #angular>

Use ViewChild to access the chart instance:

```typescript
import { ViewChild, ElementRef } from '@angular/core';
import type { LineChart } from '@nstudio/ncharts';

@ViewChild('lineChart') chartRef!: ElementRef;

// Animate the chart
animateChart(): void {
  const chart = this.chartRef.nativeElement as LineChart;
  chart.animate({ 
    durationX: 1000, 
    durationY: 1000, 
    easingX: 'EaseOutBack' 
  });
}

// Highlight specific data points
highlightPoint(x: number): void {
  const chart = this.chartRef.nativeElement as LineChart;
  chart.highlightValues([{ x, dataSetIndex: 0 }]);
}

// Clear all highlights
clearHighlights(): void {
  const chart = this.chartRef.nativeElement as LineChart;
  chart.clearHighlights();
}
```

</template>
<template #react>

Use a ref to access the chart instance:

```tsx
import { useRef } from "react";
import type { LineChart } from "@nstudio/ncharts";

const lineChartRef = useRef<LineChart | null>(null);

// Animate the chart
const animateChart = () => {
  if (lineChartRef.current) {
    lineChartRef.current.animate({ 
      durationX: 1000, 
      durationY: 1000, 
      easingX: 'EaseOutBack' 
    });
  }
};

// In JSX:
<lineChart ref={lineChartRef} data={chartData} />
```

</template>
<template #vue>

Use template ref to access the chart:

```vue
<script setup lang="ts">
import { ref } from 'vue';
import type { LineChart } from '@nstudio/ncharts';

const chartRef = ref<LineChart | null>(null);

function animateChart() {
  chartRef.value?.animate({ 
    durationX: 1000, 
    durationY: 1000, 
    easingX: 'EaseOutBack' 
  });
}
</script>

<template>
  <LineChart ref="chartRef" :data="chartData" />
</template>
```

</template>
<template #svelte>

Bind to the chart element:

```svelte
<script lang="ts">
  import type { LineChart } from '@nstudio/ncharts';

  let chartRef: LineChart;

  function animateChart() {
    chartRef?.animate({ 
      durationX: 1000, 
      durationY: 1000, 
      easingX: 'EaseOutBack' 
    });
  }
</script>

<lineChart bind:this={chartRef} data={chartData} />
```

</template>
<template #solid>

Use a ref variable:

```jsx
import { createSignal } from 'solid-js';

let chartRef;

const animateChart = () => {
  chartRef?.animate({ 
    durationX: 1000, 
    durationY: 1000, 
    easingX: 'EaseOutBack' 
  });
};

// In JSX:
<lineChart ref={chartRef} data={chartData()} />
```

</template>
</FrameworkTabs>

## Next Steps

Now that you have a basic chart working, explore more:

- [Line Chart](/ncharts/charts/line-chart) - All line chart options
- [Bar Chart](/ncharts/charts/bar-chart) - Vertical and horizontal bars
- [Pie Chart](/ncharts/charts/pie-chart) - Pie and donut charts
- [Animation](/ncharts/config/animation) - Easing functions and durations
- [Styling](/ncharts/config/styling) - Colors, fonts, and themes
