# Radar Chart

Radar charts (also called spider or web charts) are excellent for comparing multiple variables across different items.

## Basic Usage

```html
<RadarChart
  [data]="radarData"
  [legend]="legendConfig"
  [xAxis]="xAxisConfig"
  [animation]="animationConfig"
  [drawWeb]="true"
  [webColor]="'#E5E7EB'">
</RadarChart>
```

## Data Format

```typescript
import type { RadarChartData, RadarDataSet, RadarDataEntry } from '@nstudio/ncharts';

const radarData: RadarChartData = {
  labels: ['Speed', 'Power', 'Defense', 'Magic', 'Health', 'Stamina'],
  dataSets: [
    {
      label: 'Character A',
      values: [
        { value: 85 },
        { value: 72 },
        { value: 90 },
        { value: 65 },
        { value: 78 },
        { value: 80 },
      ],
      config: {
        color: '#3B82F6',
        fillColor: '#3B82F6',
        fillAlpha: 80,
        drawFilled: true,
        lineWidth: 2,
      },
    },
  ],
};
```

### RadarDataEntry

| Property | Type | Description |
|----------|------|-------------|
| `value` | `number` | Value for this axis |

::: tip Simplified Values
You can pass just numbers:
```typescript
values: [85, 72, 90, 65, 78, 80]
```
:::

## DataSet Configuration

### Line & Fill

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | `ChartColor` | - | Line color |
| `lineWidth` | `number` | `1` | Line stroke width |
| `drawFilled` | `boolean` | `false` | Enable area fill |
| `fillColor` | `ChartColor` | - | Fill color |
| `fillAlpha` | `number` | `255` | Fill opacity (0-255) |
| `fillGradient` | `object` | - | Gradient fill |

## Chart Properties

### Web Configuration

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `drawWeb` | `boolean` | `true` | Draw web lines |
| `webLineWidth` | `number` | `1` | Outer web line width |
| `webLineWidthInner` | `number` | `1` | Inner web line width |
| `webColor` | `ChartColor` | - | Outer web color |
| `webColorInner` | `ChartColor` | - | Inner web color |
| `webAlpha` | `number` | `255` | Web opacity (0-255) |
| `skipWebLineCount` | `number` | `0` | Skip inner web lines |

### Y-Axis (Radial)

| Property | Type | Description |
|----------|------|-------------|
| `yAxis.axisMinimum` | `number` | Minimum value (center) |
| `yAxis.axisMaximum` | `number` | Maximum value (outer) |
| `yAxis.labelCount` | `number` | Number of value rings |

## Complete Example

```typescript
import type { RadarChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfig } from '@nstudio/ncharts';

const skillsData: RadarChartData = {
  labels: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js', 'CSS'],
  dataSets: [
    {
      label: 'Developer A',
      values: [
        { value: 90 },
        { value: 85 },
        { value: 80 },
        { value: 70 },
        { value: 75 },
        { value: 85 },
      ],
      config: {
        color: '#3B82F6',
        fillColor: '#3B82F6',
        fillAlpha: 100,
        drawFilled: true,
        lineWidth: 2,
        drawValues: true,
        valueTextSize: 9,
        valueTextColor: '#374151',
      },
    },
    {
      label: 'Developer B',
      values: [
        { value: 75 },
        { value: 90 },
        { value: 85 },
        { value: 85 },
        { value: 70 },
        { value: 75 },
      ],
      config: {
        color: '#10B981',
        fillColor: '#10B981',
        fillAlpha: 80,
        drawFilled: true,
        lineWidth: 2,
      },
    },
  ],
};

const animation: ChartAnimation = {
  durationX: 1400,
  durationY: 1400,
  easingX: 'EaseOutBack',
};

const legend: LegendConfig = {
  enabled: true,
  horizontalAlignment: 'CENTER',
  verticalAlignment: 'BOTTOM',
  orientation: 'HORIZONTAL',
  form: 'CIRCLE',
};

const xAxis: XAxisConfig = {
  enabled: true,
  drawLabels: true,
  textSize: 10,
  textColor: '#6B7280',
};

const yAxis: YAxisConfig = {
  enabled: true,
  axisMinimum: 0,
  axisMaximum: 100,
  labelCount: 5,
  drawLabels: true,
  textSize: 8,
  textColor: '#9CA3AF',
};
```

## Template

```html
<RadarChart
  #radarChart
  [data]="skillsData"
  [animation]="animation"
  [legend]="legend"
  [xAxis]="xAxis"
  [yAxis]="yAxis"
  [drawWeb]="true"
  [webLineWidth]="1.5"
  [webLineWidthInner]="1"
  [webColor]="'#E5E7EB'"
  [webColorInner]="'#F3F4F6'"
  [webAlpha]="200"
  [rotationEnabled]="true"
  [highlightPerTapEnabled]="true"
  (select)="onSelect($event)"
  class="h-80 w-full">
</RadarChart>
```

## Use Cases

- **Skills Assessment**: Compare skills across multiple dimensions
- **Product Comparison**: Compare products on various attributes
- **Performance Reviews**: Multi-criteria evaluation
- **Game Stats**: Character attributes visualization

## Styling Variations

### Minimal Web

```html
<RadarChart
  [drawWeb]="true"
  [webLineWidth]="1"
  [webLineWidthInner]="0.5"
  [webColor]="'#E5E7EB'"
  [webAlpha]="100"
  [skipWebLineCount]="2">
</RadarChart>
```

### No Fill (Line Only)

```typescript
config: {
  color: '#3B82F6',
  lineWidth: 2.5,
  drawFilled: false,
  drawCircles: true,
  circleRadius: 4,
  circleColor: '#3B82F6',
}
```

## See Also

- [Animation Configuration](/ncharts/config/animation)
- [Legend Configuration](/ncharts/config/legend)
