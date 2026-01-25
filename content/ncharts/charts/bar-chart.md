# Bar Chart

Bar charts are ideal for comparing discrete categories, showing rankings, and displaying distribution data.

## Basic Usage

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

## Template (Angular)

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

## Horizontal Bar Chart

For horizontal orientation, use `HorizontalBarChart`:

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
