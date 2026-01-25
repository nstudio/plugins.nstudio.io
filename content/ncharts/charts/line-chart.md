# Line Chart

Line charts are perfect for visualizing trends over time, comparing multiple data series, and showing continuous data.

## Basic Usage

```html
<LineChart
  [data]="lineData"
  [legend]="legendConfig"
  [xAxis]="xAxisConfig"
  [yAxis]="yAxisConfig"
  [animation]="animationConfig">
</LineChart>
```

## Data Format

```typescript
import type { LineChartData, LineDataSet, LineDataEntry } from '@nstudio/ncharts';

const lineData: LineChartData = {
  dataSets: [
    {
      label: 'Dataset Label',
      values: [
        { x: 0, y: 45 },
        { x: 1, y: 52 },
        { x: 2, y: 48 },
        // ... more data points
      ],
      config: {
        // DataSet configuration options
      },
    },
  ],
};
```

### LineDataEntry

| Property | Type | Description |
|----------|------|-------------|
| `x` | `number` | X-axis value (optional, defaults to index) |
| `y` | `number` | Y-axis value (required) |
| `marker` | `string` | Custom marker text for this point |
| `icon` | `object` | Icon to display at this data point |

## DataSet Configuration

The `config` object on each dataset controls the appearance:

### Line Styling

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | `ChartColor` | - | Line color (hex string or number) |
| `lineWidth` | `number` | `1` | Line stroke width (0.2 - 10) |
| `mode` | `LineChartMode` | `'LINEAR'` | Line interpolation mode |
| `dashedLine` | `object` | - | Dashed line configuration |

### Line Modes

```typescript
type LineChartMode = 
  | 'LINEAR'           // Straight lines between points
  | 'STEPPED'          // Step/staircase pattern
  | 'CUBIC_BEZIER'     // Smooth curved lines
  | 'HORIZONTAL_BEZIER'; // Horizontal bezier curves
```

**Example with cubic bezier:**

```typescript
config: {
  color: '#3B82F6',
  lineWidth: 2.5,
  mode: 'CUBIC_BEZIER',
  drawCubicIntensity: 0.2, // Curve intensity (0-1)
}
```

### Circle Markers

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `drawCircles` | `boolean` | `true` | Show circles at data points |
| `circleRadius` | `number` | `4` | Circle radius in dp |
| `circleColor` | `ChartColor` | - | Circle fill color |
| `circleColors` | `ChartColor[]` | - | Different colors per point |
| `drawCircleHole` | `boolean` | `true` | Draw hole in center of circle |
| `circleHoleColor` | `ChartColor` | - | Circle hole color |

**Example:**

```typescript
config: {
  drawCircles: true,
  circleRadius: 5,
  circleColor: '#3B82F6',
  drawCircleHole: true,
  circleHoleColor: '#FFFFFF',
}
```

### Fill Area

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `drawFilled` | `boolean` | `false` | Enable area fill below line |
| `fillColor` | `ChartColor` | - | Solid fill color |
| `fillAlpha` | `number` | `255` | Fill opacity (0-255) |
| `fillGradient` | `object` | - | Gradient fill configuration |

**Solid fill example:**

```typescript
config: {
  drawFilled: true,
  fillColor: '#3B82F6',
  fillAlpha: 50,
}
```

**Gradient fill example:**

```typescript
config: {
  drawFilled: true,
  fillGradient: {
    colors: ['#3B82F6', '#06B6D4'],
    // iOS: angle in degrees
    angle: 90,
    // Android: orientation
    orientation: 'TOP_BOTTOM',
  },
}
```

### Dashed Lines

```typescript
config: {
  dashedLine: {
    lineLength: 10,   // Length of dash
    spaceLength: 5,   // Length of space
    phase: 0,         // Starting phase
  },
}
```

### Highlighting

| Property | Type | Description |
|----------|------|-------------|
| `highlightEnabled` | `boolean` | Enable touch highlighting |
| `highlightColor` | `ChartColor` | Highlight indicator color |
| `highlightLineWidth` | `number` | Highlight line width |
| `drawVerticalHighlightIndicator` | `boolean` | Show vertical line |
| `drawHorizontalHighlightIndicator` | `boolean` | Show horizontal line |

### Value Labels

| Property | Type | Description |
|----------|------|-------------|
| `drawValues` | `boolean` | Show value labels on data points |
| `valueTextSize` | `number` | Value text size |
| `valueTextColor` | `ChartColor` | Value text color |
| `valueFormatter` | `string \| string[]` | Custom value formatting |

## Complete Example

```typescript
import type { LineChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual } from '@nstudio/ncharts';

// Data with two series for comparison
const revenueData: LineChartData = {
  dataSets: [
    {
      label: '2024 Revenue',
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
        mode: 'CUBIC_BEZIER',
        drawCircles: true,
        circleRadius: 4,
        circleColor: '#3B82F6',
        drawFilled: true,
        fillColor: '#3B82F6',
        fillAlpha: 40,
        highlightColor: '#1D4ED8',
        highlightLineWidth: 2,
        drawValues: false,
      },
    },
    {
      label: '2023 Revenue',
      values: [
        { x: 0, y: 35000 },
        { x: 1, y: 42000 },
        { x: 2, y: 38000 },
        { x: 3, y: 55000 },
        { x: 4, y: 62000 },
        { x: 5, y: 58000 },
        { x: 6, y: 70000 },
        { x: 7, y: 75000 },
        { x: 8, y: 72000 },
        { x: 9, y: 85000 },
        { x: 10, y: 95000 },
        { x: 11, y: 110000 },
      ],
      config: {
        color: '#10B981',
        lineWidth: 2,
        mode: 'CUBIC_BEZIER',
        drawCircles: true,
        circleRadius: 3,
        circleColor: '#10B981',
        drawFilled: false,
        dashedLine: {
          lineLength: 8,
          spaceLength: 4,
        },
        drawValues: false,
      },
    },
  ],
};

// Configuration
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
  form: 'CIRCLE',
  textSize: 11,
};

const xAxis: XAxisConfig = {
  enabled: true,
  position: 'BOTTOM',
  drawGridLines: true,
  gridColor: '#E5E7EB',
  granularity: 1,
  textSize: 10,
  valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

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
<LineChart
  #lineChart
  [data]="revenueData"
  [animation]="animation"
  [legend]="legend"
  [xAxis]="xAxis"
  [yAxis]="yAxis"
  [touchEnabled]="true"
  [dragEnabled]="true"
  [scaleEnabled]="true"
  [pinchZoom]="true"
  [highlightPerTapEnabled]="true"
  [highlightPerDragEnabled]="true"
  (select)="onSelect($event)"
  (deselect)="onDeselect()"
  class="h-80 w-full">
</LineChart>
```

## Methods

The LineChart component exposes these methods:

| Method | Parameters | Description |
|--------|------------|-------------|
| `animate()` | `ChartAnimation` | Trigger chart animation |
| `highlightValues()` | `Highlight[]` | Programmatically highlight values |
| `clearHighlights()` | - | Clear all highlights |
| `moveViewToX()` | `number` | Move view to X position |
| `moveViewToY()` | `number, AxisDependency` | Move view to Y position |
| `zoom()` | `scaleX, scaleY, x, y` | Zoom to specific scale |
| `fitScreen()` | - | Reset zoom/pan to fit all data |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `select` | `ChartSelectEvent` | Fired when data point is selected |
| `deselect` | - | Fired when selection is cleared |
| `gesture` | `ChartGestureEvent` | Fired on pan/zoom gestures |

## See Also

- [Animation Configuration](/ncharts/config/animation)
- [Axes Configuration](/ncharts/config/axes)
- [Legend Configuration](/ncharts/config/legend)
- [Styling Guide](/ncharts/config/styling)
