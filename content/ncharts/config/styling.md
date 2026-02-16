# Styling

Customize every aspect of your charts with @nstudio/ncharts' comprehensive styling options.

## Color Format

Colors can be specified as:

```typescript
type ChartColor = string | number;

// Hex string (recommended)
color: '#3B82F6'
color: '#803B82F6'  // With alpha (AARRGGBB)

// ARGB number
color: 0xFF3B82F6
```

## Chart Background

### Overall Background

```html
<LineChart
  [chartBackgroundColor]="'#F8FAFC'"
  [chartGridBackgroundColor]="'#FFFFFF'">
</LineChart>
```

| Property | Type | Description |
|----------|------|-------------|
| `chartBackgroundColor` | `ChartColor` | Overall chart background |
| `chartGridBackgroundColor` | `ChartColor` | Grid area background |

### Grid Background (Bar/Line charts)

```typescript
drawGridBackground: true,
gridBackgroundColor: '#F3F4F6',
```

## Borders

```typescript
drawBorders: true,
borderColor: '#E5E7EB',
borderWidth: 1,
```

## No Data State

When no data is provided:

```html
<LineChart
  [noDataText]="'No chart data available'"
  [noDataTextColor]="'#9CA3AF'">
</LineChart>
```

## Chart Description

Add a description label:

```typescript
import type { ChartDescription } from '@nstudio/ncharts';

const description: ChartDescription = {
  text: 'Sales Performance',
  textColor: '#6B7280',
  textSize: 12,
  positionX: undefined,  // Auto-positioned
  positionY: undefined,
};
```

```html
<LineChart [chartDescription]="description"></LineChart>
```

## Color Palettes

### Recommended Color Palettes

**Blue Gradient:**
```typescript
colors: ['#1E40AF', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE']
```

**Multi-color:**
```typescript
colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']
```

**Warm:**
```typescript
colors: ['#EF4444', '#F97316', '#F59E0B', '#EAB308', '#84CC16']
```

**Cool:**
```typescript
colors: ['#06B6D4', '#0EA5E9', '#3B82F6', '#6366F1', '#8B5CF6']
```

**Monochrome:**
```typescript
colors: ['#111827', '#374151', '#6B7280', '#9CA3AF', '#D1D5DB']
```

## Gradient Fills

### Line Chart Gradient

```typescript
config: {
  drawFilled: true,
  fillGradient: {
    colors: ['#3B82F6', '#06B6D4'],
    // iOS
    angle: 90,
    // Android
    orientation: 'TOP_BOTTOM',
  },
}
```

### Gradient Orientations (Android)

```typescript
type GradientOrientation = 
  | 'TOP_BOTTOM'    // Vertical, top to bottom
  | 'TR_BL'         // Top-right to bottom-left
  | 'RIGHT_LEFT'    // Horizontal, right to left
  | 'BR_TL'         // Bottom-right to top-left
  | 'BOTTOM_TOP'    // Vertical, bottom to top
  | 'BL_TR'         // Bottom-left to top-right
  | 'LEFT_RIGHT'    // Horizontal, left to right
  | 'TL_BR';        // Top-left to bottom-right
```

## Typography

Text color styling is supported consistently across all chart types on iOS and Android.

### Axis Labels

```typescript
const xAxis: XAxisConfig = {
  textColor: '#6B7280',
  textSize: 10,
  fontFamily: 'Inter',
  fontStyle: 0,  // 0=normal, 1=bold, 2=italic
};
```

### Legend Text

```typescript
const legend: LegendConfig = {
  textColor: '#374151',
  textSize: 11,
  fontFamily: 'Inter',
  fontWeight: 500,
};
```

### Value Labels

```typescript
config: {
  drawValues: true,
  valueTextSize: 10,
  valueTextColor: '#374151',
}
```

### Shared Text Styling (All Charts)

```typescript
const legend: LegendConfig = {
  textColor: '#F3F4F6',
};

const xAxis: XAxisConfig = {
  textColor: '#D1D5DB',
};

const yAxis: YAxisConfigDual = {
  left: { textColor: '#D1D5DB' },
  right: { textColor: '#D1D5DB' },
};

const chartDescription: ChartDescription = {
  text: '',
  textColor: '#9CA3AF',
};

// Also supported on all charts:
// noDataTextColor: '#9CA3AF'
```

## Dark Theme Example

```typescript
// Chart properties
chartBackgroundColor: '#1F2937',
chartGridBackgroundColor: '#111827',

// X-Axis
const xAxis: XAxisConfig = {
  textColor: '#D1D5DB',
  gridColor: '#374151',
  axisLineColor: '#4B5563',
};

// Y-Axis
const yAxis: YAxisConfigDual = {
  left: {
    textColor: '#D1D5DB',
    gridColor: '#374151',
    axisLineColor: '#4B5563',
  },
};

// Legend
const legend: LegendConfig = {
  textColor: '#F3F4F6',
};

// Marker
const marker: MarkerConfig = {
  markerColor: '#374151',
  textColor: '#F9FAFB',
};
```

## Light Theme Example

```typescript
// Chart properties
chartBackgroundColor: '#FFFFFF',
chartGridBackgroundColor: '#FAFAFA',

// X-Axis
const xAxis: XAxisConfig = {
  textColor: '#6B7280',
  gridColor: '#E5E7EB',
  axisLineColor: '#D1D5DB',
};

// Y-Axis
const yAxis: YAxisConfigDual = {
  left: {
    textColor: '#6B7280',
    gridColor: '#E5E7EB',
    axisLineColor: '#D1D5DB',
  },
};

// Legend
const legend: LegendConfig = {
  textColor: '#374151',
};

// Marker
const marker: MarkerConfig = {
  markerColor: '#1F2937',
  textColor: '#FFFFFF',
};
```

## Highlight Styling

```typescript
config: {
  highlightEnabled: true,
  highlightColor: '#1D4ED8',
  highlightLineWidth: 2,
  drawVerticalHighlightIndicator: true,
  drawHorizontalHighlightIndicator: true,
}
```

For bar charts:

```typescript
config: {
  highlightAlpha: 180,  // 0-255
}
```

## Viewport Offsets

Control padding around the chart:

```typescript
viewPortOffsets: {
  left: 20,
  top: 20,
  right: 20,
  bottom: 20,
},
extraOffsets: {
  left: 10,
  top: 10,
  right: 10,
  bottom: 10,
},
```

## Responsive Styling

Adjust styling based on screen size:

```typescript
import { Screen } from '@nativescript/core';

const isLargeScreen = Screen.mainScreen.widthDIPs > 600;

const xAxis: XAxisConfig = {
  textSize: isLargeScreen ? 12 : 9,
  labelRotationAngle: isLargeScreen ? 0 : -45,
};

const legend: LegendConfig = {
  textSize: isLargeScreen ? 12 : 10,
  orientation: isLargeScreen ? 'HORIZONTAL' : 'VERTICAL',
};
```

## CSS Integration

The chart components support CSS classes:

```html
<LineChart class="h-80 w-full rounded-xl shadow-lg"></LineChart>
```

For NativeScript-specific styling:

```css
LineChart {
  height: 320;
  border-radius: 16;
}
```

## See Also

- [Animation](/ncharts/config/animation)
- [Legend](/ncharts/config/legend)
- [Axes](/ncharts/config/axes)
