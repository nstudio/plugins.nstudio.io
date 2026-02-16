# Legend

Configure the chart legend to help users understand your data series.

Legend text styling (`textColor`, `textSize`) is consistently applied across all chart types on iOS and Android.

## Basic Configuration

```typescript
import type { LegendConfig } from '@nstudio/ncharts';

const legend: LegendConfig = {
  enabled: true,
  horizontalAlignment: 'CENTER',
  verticalAlignment: 'BOTTOM',
  orientation: 'HORIZONTAL',
  form: 'CIRCLE',
  textSize: 11,
};
```

## Legend Properties

### Visibility

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Show/hide legend |

### Positioning

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `horizontalAlignment` | `LegendHorizontalAlignment` | `'LEFT'` | Horizontal position |
| `verticalAlignment` | `LegendVerticalAlignment` | `'BOTTOM'` | Vertical position |
| `drawInside` | `boolean` | `false` | Draw inside chart area |

```typescript
type LegendHorizontalAlignment = 'LEFT' | 'CENTER' | 'RIGHT';
type LegendVerticalAlignment = 'TOP' | 'CENTER' | 'BOTTOM';
```

### Layout

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `orientation` | `LegendOrientation` | `'HORIZONTAL'` | Entry layout direction |
| `direction` | `LegendDirection` | `'LEFT_TO_RIGHT'` | Text direction |
| `wordWrapEnabled` | `boolean` | `false` | Wrap text to multiple lines |
| `maxSizePercent` | `number` | `0.95` | Max size as % of chart |

```typescript
type LegendOrientation = 'HORIZONTAL' | 'VERTICAL';
type LegendDirection = 'LEFT_TO_RIGHT' | 'RIGHT_TO_LEFT';
```

### Form (Symbol) Shape

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `form` | `LegendForm` | `'DEFAULT'` | Symbol shape |
| `formSize` | `number` | - | Symbol size in dp |

```typescript
type LegendForm = 
  | 'NONE'     // No symbol
  | 'EMPTY'    // Empty/hollow
  | 'DEFAULT'  // Default for chart type
  | 'SQUARE'   // Square shape
  | 'CIRCLE'   // Circle shape
  | 'LINE';    // Line segment
```

### Text Styling

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `textColor` | `ChartColor` | - | Text color |
| `textSize` | `number` | `10` | Text size in dp |
| `fontFamily` | `string` | - | Font family name |
| `fontStyle` | `number` | `0` | 0=normal, 1=bold, 2=italic |
| `fontWeight` | `number` | - | Font weight |

### Spacing

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `xEntrySpace` | `number` | - | Horizontal space between entries |
| `yEntrySpace` | `number` | - | Vertical space between entries |
| `formToTextSpace` | `number` | - | Space between form and text |

## Common Configurations

### Bottom Center (Recommended)

```typescript
const legend: LegendConfig = {
  enabled: true,
  horizontalAlignment: 'CENTER',
  verticalAlignment: 'BOTTOM',
  orientation: 'HORIZONTAL',
  form: 'CIRCLE',
  textSize: 11,
  xEntrySpace: 20,
};
```

### Top Right

```typescript
const legend: LegendConfig = {
  enabled: true,
  horizontalAlignment: 'RIGHT',
  verticalAlignment: 'TOP',
  orientation: 'VERTICAL',
  form: 'SQUARE',
  textSize: 10,
};
```

### Inside Chart (Top Left)

```typescript
const legend: LegendConfig = {
  enabled: true,
  horizontalAlignment: 'LEFT',
  verticalAlignment: 'TOP',
  drawInside: true,
  orientation: 'VERTICAL',
  form: 'LINE',
  textSize: 10,
};
```

## Custom Legend Entries

Override the automatic legend with custom entries:

```typescript
const legend: LegendConfig = {
  enabled: true,
  custom: {
    colors: ['#3B82F6', '#10B981', '#F59E0B'],
    labels: ['Revenue', 'Expenses', 'Profit'],
  },
  horizontalAlignment: 'CENTER',
  verticalAlignment: 'BOTTOM',
  form: 'CIRCLE',
};
```

## Template Usage

```html
<LineChart
  [data]="chartData"
  [legend]="{
    enabled: true,
    horizontalAlignment: 'CENTER',
    verticalAlignment: 'BOTTOM',
    orientation: 'HORIZONTAL',
    form: 'CIRCLE',
    textSize: 11,
    textColor: '#374151'
  }">
</LineChart>
```

Or with a component property:

```typescript
legend: LegendConfig = {
  enabled: true,
  horizontalAlignment: 'CENTER',
  verticalAlignment: 'BOTTOM',
  orientation: 'HORIZONTAL',
  form: 'CIRCLE',
};
```

```html
<LineChart [data]="chartData" [legend]="legend"></LineChart>
```

## Legend Forms by Chart Type

| Chart Type | Recommended Form |
|------------|------------------|
| Line Chart | `'LINE'` or `'CIRCLE'` |
| Bar Chart | `'SQUARE'` |
| Pie Chart | `'CIRCLE'` |
| Scatter | `'CIRCLE'` |
| Radar | `'CIRCLE'` |

## Disable Legend

```typescript
const legend: LegendConfig = {
  enabled: false,
};
```

Or simply omit the legend configuration.

## Responsive Considerations

For smaller screens:

```typescript
const mobileLegend: LegendConfig = {
  enabled: true,
  horizontalAlignment: 'CENTER',
  verticalAlignment: 'BOTTOM',
  orientation: 'HORIZONTAL',
  form: 'CIRCLE',
  formSize: 8,
  textSize: 9,
  xEntrySpace: 10,
  wordWrapEnabled: true,
};
```

## See Also

- [Axes Configuration](/ncharts/config/axes)
- [Styling Guide](/ncharts/config/styling)
