# Markers

Markers display additional information when users tap on data points.

## Basic Configuration

```typescript
import type { MarkerConfig } from '@nstudio/ncharts';

const marker: MarkerConfig = {
  enabled: true,
  digits: 2,
  markerColor: '#374151',
  textColor: '#FFFFFF',
  textSize: 12,
};
```

## Marker Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `boolean` | `false` | Enable marker display |
| `digits` | `number` | `2` | Decimal places for values |
| `markerColor` | `ChartColor` | - | Background color |
| `textColor` | `ChartColor` | - | Text color |
| `textSize` | `number` | `10` | Text size in dp |

## Usage in Template

```html
<LineChart
  [data]="chartData"
  [marker]="{
    enabled: true,
    markerColor: '#1F2937',
    textColor: '#FFFFFF',
    textSize: 12,
    digits: 2
  }"
  [highlightPerTapEnabled]="true">
</LineChart>
```

## Custom Marker Text

Override the default marker text per data point:

```typescript
const lineData: LineChartData = {
  dataSets: [
    {
      label: 'Sales',
      values: [
        { x: 0, y: 45000, marker: '$45,000 (Jan)' },
        { x: 1, y: 52000, marker: '$52,000 (Feb)' },
        { x: 2, y: 48000, marker: '$48,000 (Mar)' },
      ],
      config: {/* ... */},
    },
  ],
};
```

For stacked bars, use an array:

```typescript
values: [
  { x: 0, y: [100, 150, 80], marker: ['Product A: 100', 'Product B: 150', 'Product C: 80'] },
]
```

## Styling Examples

### Dark Theme

```typescript
const marker: MarkerConfig = {
  enabled: true,
  markerColor: '#1F2937',
  textColor: '#F9FAFB',
  textSize: 11,
  digits: 0,
};
```

### Light Theme

```typescript
const marker: MarkerConfig = {
  enabled: true,
  markerColor: '#FFFFFF',
  textColor: '#374151',
  textSize: 11,
  digits: 2,
};
```

### Accent Color

```typescript
const marker: MarkerConfig = {
  enabled: true,
  markerColor: '#3B82F6',
  textColor: '#FFFFFF',
  textSize: 12,
  digits: 1,
};
```

## Combining with Highlights

Markers work best with highlighting enabled:

```html
<LineChart
  [data]="chartData"
  [marker]="markerConfig"
  [highlightPerTapEnabled]="true"
  [highlightPerDragEnabled]="true"
  (select)="onSelect($event)">
</LineChart>
```

## Platform Notes

::: tip iOS vs Android
Marker appearance may vary slightly between platforms as they use native marker implementations from DGCharts (iOS) and MPAndroidChart (Android).
:::

## See Also

- [Events](/ncharts/api/events)
- [Styling Guide](/ncharts/config/styling)
