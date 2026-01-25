# Axes

Configure X and Y axes for precise control over chart labels, grid lines, and value formatting.

## X-Axis Configuration

```typescript
import type { XAxisConfig } from '@nstudio/ncharts';

const xAxis: XAxisConfig = {
  enabled: true,
  position: 'BOTTOM',
  drawGridLines: true,
  drawLabels: true,
  granularity: 1,
  textSize: 10,
  valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};
```

### X-Axis Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Show/hide axis |
| `position` | `XAxisPosition` | `'BOTTOM'` | Axis position |
| `yOffset` | `number` | - | Vertical offset from position |

```typescript
type XAxisPosition = 
  | 'TOP'
  | 'BOTTOM'
  | 'BOTH_SIDED'
  | 'TOP_INSIDE'
  | 'BOTTOM_INSIDE';
```

## Y-Axis Configuration

Bar and line charts support dual Y-axes:

```typescript
import type { YAxisConfigDual } from '@nstudio/ncharts';

const yAxis: YAxisConfigDual = {
  left: {
    enabled: true,
    drawGridLines: true,
    axisMinimum: 0,
    axisMaximum: 100,
  },
  right: {
    enabled: false,
  },
};
```

### Y-Axis Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Show/hide axis |
| `position` | `YAxisPosition` | `'OUTSIDE_CHART'` | Label position |

```typescript
type YAxisPosition = 'OUTSIDE_CHART' | 'INSIDE_CHART';
```

## Common Axis Properties

These properties apply to both X and Y axes:

### Lines & Labels

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `drawGridLines` | `boolean` | `true` | Show grid lines |
| `drawAxisLine` | `boolean` | `true` | Show axis line |
| `drawLabels` | `boolean` | `true` | Show labels |

### Text Styling

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `textColor` | `ChartColor` | - | Label text color |
| `textSize` | `number` | `10` | Label text size |
| `fontFamily` | `string` | - | Font family |
| `fontStyle` | `number` | - | 0=normal, 1=bold, 2=italic |

### Grid Line Styling

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `gridColor` | `ChartColor` | - | Grid line color |
| `gridLineWidth` | `number` | `1` | Grid line width |
| `gridDashedLine` | `object` | - | Dashed grid line config |

```typescript
gridDashedLine: {
  lineLength: 10,
  spaceLength: 5,
  phase: 0,
}
```

### Axis Line Styling

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `axisLineColor` | `ChartColor` | - | Axis line color |
| `axisLineWidth` | `number` | `1` | Axis line width |

### Value Range

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `axisMinimum` | `number` | - | Minimum value (auto if not set) |
| `axisMaximum` | `number` | - | Maximum value (auto if not set) |
| `inverted` | `boolean` | `false` | Invert axis direction |
| `spaceTop` | `number` | `10` | Extra space at top (%) |
| `spaceBottom` | `number` | `10` | Extra space at bottom (%) |

### Labels

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `labelCount` | `number` | - | Number of labels |
| `labelCountForce` | `boolean` | `false` | Force exact label count |
| `granularity` | `number` | `1` | Minimum step between labels |
| `granularityEnabled` | `boolean` | `false` | Enable granularity |
| `centerAxisLabels` | `boolean` | `false` | Center labels between ticks |
| `labelRotationAngle` | `number` | `0` | Rotation angle in degrees |
| `avoidFirstLastClipping` | `boolean` | `false` | Prevent label clipping |

## Value Formatters

### Built-in Formatters

```typescript
valueFormatter: 'largeValue'  // 1000 → 1K, 1000000 → 1M
valueFormatter: 'percent'     // 0.5 → 50%
valueFormatter: 'date'        // Uses valueFormatterPattern
```

### Custom Labels Array

```typescript
valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
```

### Date Formatting

```typescript
valueFormatter: 'date',
valueFormatterPattern: 'MMM dd',  // iOS/Android date pattern
```

### Label by X Value

```typescript
valueFormatter: 'labelByXValue',
valueFormatterLabels: [
  { x: 0, label: 'Start' },
  { x: 5, label: 'Middle' },
  { x: 10, label: 'End' },
],
```

## Limit Lines

Add reference lines to your axes:

```typescript
import type { LimitLine } from '@nstudio/ncharts';

const yAxis: YAxisConfig = {
  enabled: true,
  limitLines: [
    {
      limit: 75,
      label: 'Target',
      lineColor: '#EF4444',
      lineWidth: 2,
      labelPosition: 'RIGHT_TOP',
      valueTextColor: '#EF4444',
      valueTextSize: 10,
    },
    {
      limit: 50,
      label: 'Average',
      lineColor: '#F59E0B',
      lineWidth: 1,
      lineDashLengths: [10, 5],
    },
  ],
  drawLimitLinesBehindData: true,
};
```

### Limit Line Properties

| Property | Type | Description |
|----------|------|-------------|
| `limit` | `number` | Value on axis |
| `label` | `string` | Label text |
| `lineColor` | `ChartColor` | Line color |
| `lineWidth` | `number` | Line width |
| `labelPosition` | `LimitLineLabelPosition` | Label position |
| `valueTextColor` | `ChartColor` | Label text color |
| `valueTextSize` | `number` | Label text size |
| `lineDashLengths` | `number[]` | Dash pattern |
| `lineDashPhase` | `number` | Dash phase |

```typescript
type LimitLineLabelPosition = 
  | 'LEFT_TOP'
  | 'LEFT_BOTTOM'
  | 'RIGHT_TOP'
  | 'RIGHT_BOTTOM';
```

## Y-Axis Zero Line

Highlight the zero line:

```typescript
const yAxis: YAxisConfig = {
  enabled: true,
  zeroLine: {
    enabled: true,
    lineWidth: 1.5,
    lineColor: '#374151',
  },
};
```

## Complete Example

```typescript
import type { XAxisConfig, YAxisConfigDual } from '@nstudio/ncharts';

const xAxis: XAxisConfig = {
  enabled: true,
  position: 'BOTTOM',
  drawGridLines: true,
  drawAxisLine: true,
  drawLabels: true,
  gridColor: '#E5E7EB',
  gridLineWidth: 1,
  axisLineColor: '#9CA3AF',
  axisLineWidth: 1,
  textColor: '#6B7280',
  textSize: 10,
  granularity: 1,
  labelRotationAngle: -45,
  valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4'],
};

const yAxis: YAxisConfigDual = {
  left: {
    enabled: true,
    position: 'OUTSIDE_CHART',
    drawGridLines: true,
    drawAxisLine: false,
    gridColor: '#E5E7EB',
    textColor: '#6B7280',
    textSize: 10,
    axisMinimum: 0,
    spaceTop: 15,
    valueFormatter: 'largeValue',
    limitLines: [
      {
        limit: 80,
        label: 'Goal',
        lineColor: '#10B981',
        lineWidth: 2,
        lineDashLengths: [8, 4],
        labelPosition: 'RIGHT_TOP',
      },
    ],
  },
  right: {
    enabled: false,
  },
};
```

## Dual Axis Setup

For charts with two different scales:

```typescript
const yAxis: YAxisConfigDual = {
  left: {
    enabled: true,
    axisMinimum: 0,
    axisMaximum: 1000000,
    textColor: '#3B82F6',
    valueFormatter: 'largeValue',
  },
  right: {
    enabled: true,
    axisMinimum: 0,
    axisMaximum: 100,
    textColor: '#10B981',
    valueFormatter: 'percent',
  },
};
```

Then assign datasets to the appropriate axis:

```typescript
config: {
  axisDependency: 'LEFT',  // or 'RIGHT'
}
```

## See Also

- [Legend Configuration](/ncharts/config/legend)
- [Styling Guide](/ncharts/config/styling)
