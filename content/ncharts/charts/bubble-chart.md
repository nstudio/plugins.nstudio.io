# Bubble Chart

Bubble charts extend scatter plots by adding a third dimension (size), perfect for visualizing three variables simultaneously.

## Basic Usage

```html
<BubbleChart
  [data]="bubbleData"
  [legend]="legendConfig"
  [xAxis]="xAxisConfig"
  [yAxis]="yAxisConfig"
  [animation]="animationConfig">
</BubbleChart>
```

## Data Format

```typescript
import type { BubbleChartData, BubbleDataSet, BubbleDataEntry } from '@nstudio/ncharts';

const bubbleData: BubbleChartData = {
  dataSets: [
    {
      label: 'Companies',
      values: [
        { x: 10, y: 25, size: 15 },
        { x: 20, y: 35, size: 25 },
        { x: 30, y: 15, size: 10 },
        { x: 40, y: 45, size: 30 },
      ],
      config: {
        color: '#3B82F6',
        highlightEnabled: true,
      },
    },
  ],
};
```

### BubbleDataEntry

| Property | Type | Description |
|----------|------|-------------|
| `x` | `number` | X-axis position |
| `y` | `number` | Y-axis position |
| `size` | `number` | Bubble size (required) |
| `marker` | `string` | Custom marker text |

## Complete Example

```typescript
import type { BubbleChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual } from '@nstudio/ncharts';

const companyData: BubbleChartData = {
  dataSets: [
    {
      label: 'Tech Companies',
      values: [
        { x: 5, y: 80, size: 30, marker: 'Apple' },
        { x: 15, y: 70, size: 25, marker: 'Google' },
        { x: 25, y: 60, size: 20, marker: 'Microsoft' },
        { x: 35, y: 50, size: 15, marker: 'Amazon' },
      ],
      config: {
        colors: ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'],
        highlightEnabled: true,
        highlightColor: '#1D4ED8',
        drawValues: true,
        valueTextSize: 9,
      },
    },
  ],
};

const animation: ChartAnimation = {
  durationX: 1200,
  durationY: 1200,
  easingX: 'EaseOutBack',
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
};

const yAxis: YAxisConfigDual = {
  left: { enabled: true, drawGridLines: true },
  right: { enabled: false },
};
```

## Template

```html
<BubbleChart
  [data]="companyData"
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
</BubbleChart>
```

## Use Cases

- **Market Analysis**: Plot companies by revenue (x), profit margin (y), and market cap (size)
- **Product Comparison**: Price vs. quality with sales volume as size
- **Geographic Data**: Latitude/longitude with population as size

## See Also

- [Scatter Chart](/ncharts/charts/scatter-chart)
- [Animation Configuration](/ncharts/config/animation)
