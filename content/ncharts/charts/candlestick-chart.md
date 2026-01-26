# Candlestick Chart

Candlestick charts are essential for financial data visualization, showing OHLC (Open, High, Low, Close) data in an intuitive format.

## Basic Usage

<FrameworkTabs>
<template #angular>

```html
<CandleStickChart
  [data]="candleData"
  [legend]="legendConfig"
  [xAxis]="xAxisConfig"
  [yAxis]="yAxisConfig"
  [animation]="animationConfig">
</CandleStickChart>
```

</template>
<template #react>

```tsx
<candleStickChart
  data={candleData}
  legend={legendConfig}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  animation={animationConfig}
/>
```

</template>
<template #vue>

```vue
<CandleStickChart
  :data="candleData"
  :legend="legendConfig"
  :xAxis="xAxisConfig"
  :yAxis="yAxisConfig"
  :animation="animationConfig"
/>
```

</template>
<template #svelte>

```svelte
<candleStickChart
  data={candleData}
  legend={legendConfig}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  animation={animationConfig}
/>
```

</template>
<template #solid>

```jsx
<candleStickChart
  data={candleData()}
  legend={legendConfig}
  xAxis={xAxisConfig}
  yAxis={yAxisConfig}
  animation={animationConfig}
/>
```

</template>
</FrameworkTabs>

## Data Format

```typescript
import type { CandleChartData, CandleDataSet, CandleDataEntry } from '@nstudio/ncharts';

const candleData: CandleChartData = {
  dataSets: [
    {
      label: 'AAPL',
      values: [
        { x: 0, shadowH: 175, shadowL: 168, open: 170, close: 173 },
        { x: 1, shadowH: 178, shadowL: 171, open: 173, close: 171 },
        { x: 2, shadowH: 176, shadowL: 169, open: 171, close: 175 },
        // ... more candles
      ],
      config: {
        increasingColor: '#10B981',
        decreasingColor: '#EF4444',
        shadowColorSameAsCandle: true,
      },
    },
  ],
};
```

### CandleDataEntry

| Property | Type | Description |
|----------|------|-------------|
| `x` | `number` | X-axis position (time/index) |
| `shadowH` | `number` | High price (wick top) |
| `shadowL` | `number` | Low price (wick bottom) |
| `open` | `number` | Opening price |
| `close` | `number` | Closing price |
| `marker` | `string` | Custom marker text |

## DataSet Configuration

### Candle Styling

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `increasingColor` | `ChartColor` | - | Color when close > open |
| `decreasingColor` | `ChartColor` | - | Color when close < open |
| `neutralColor` | `ChartColor` | - | Color when close == open |
| `increasingPaintStyle` | `PaintStyle` | `'FILL'` | Style for increasing candles |
| `decreasingPaintStyle` | `PaintStyle` | `'FILL'` | Style for decreasing candles |

### Paint Styles

```typescript
type PaintStyle = 'FILL' | 'STROKE' | 'FILL_AND_STROKE';
```

### Shadow (Wick) Configuration

| Property | Type | Description |
|----------|------|-------------|
| `shadowWidth` | `number` | Shadow line width |
| `shadowColor` | `ChartColor` | Shadow color (if not same as candle) |
| `shadowColorSameAsCandle` | `boolean` | Use candle color for shadow |

### Spacing

| Property | Type | Description |
|----------|------|-------------|
| `barSpace` | `number` | Space between candles |

## Complete Example

```typescript
import type { CandleChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual } from '@nstudio/ncharts';

// Generate stock data
function generateStockData(count: number, startPrice: number): CandleDataEntry[] {
  const data = [];
  let price = startPrice;
  
  for (let i = 0; i < count; i++) {
    const change = (Math.random() - 0.5) * 10;
    const open = price;
    const close = price + change;
    const high = Math.max(open, close) + Math.random() * 5;
    const low = Math.min(open, close) - Math.random() * 5;
    
    data.push({
      x: i,
      shadowH: high,
      shadowL: low,
      open: open,
      close: close,
    });
    
    price = close;
  }
  
  return data;
}

const stockData: CandleChartData = {
  dataSets: [
    {
      label: 'AAPL Daily',
      values: generateStockData(30, 150),
      config: {
        increasingColor: '#10B981',
        decreasingColor: '#EF4444',
        increasingPaintStyle: 'FILL',
        decreasingPaintStyle: 'FILL',
        shadowColorSameAsCandle: true,
        shadowWidth: 1.5,
        barSpace: 0.1,
        highlightEnabled: true,
        highlightColor: '#3B82F6',
        highlightLineWidth: 1,
      },
    },
  ],
};

const animation: ChartAnimation = {
  durationX: 1000,
  durationY: 1000,
  easingX: 'EaseOutQuad',
};

const legend: LegendConfig = {
  enabled: true,
  horizontalAlignment: 'CENTER',
  verticalAlignment: 'BOTTOM',
  form: 'SQUARE',
};

const xAxis: XAxisConfig = {
  enabled: true,
  position: 'BOTTOM',
  drawGridLines: false,
  granularity: 1,
  labelRotationAngle: -45,
  textSize: 9,
};

const yAxis: YAxisConfigDual = {
  left: {
    enabled: true,
    drawGridLines: true,
    gridColor: '#E5E7EB',
    textSize: 10,
  },
  right: { enabled: false },
};
```

## Template

```html
<CandleStickChart
  #candleChart
  [data]="stockData"
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
  (select)="onCandleSelect($event)"
  (deselect)="onDeselect()"
  class="h-80 w-full">
</CandleStickChart>
```

## Selection Handling

```typescript
onCandleSelect(event: ChartSelectEvent): void {
  const { data } = event;
  if (data.data) {
    const candle = data.data;
    console.log(`
      Open: ${candle.open}
      High: ${candle.shadowH}
      Low: ${candle.shadowL}
      Close: ${candle.close}
    `);
  }
}
```

## Styling Variations

### Hollow Candles (Traditional Japanese Style)

```typescript
config: {
  increasingColor: '#10B981',
  decreasingColor: '#EF4444',
  increasingPaintStyle: 'STROKE',  // Hollow for up days
  decreasingPaintStyle: 'FILL',    // Filled for down days
}
```

### Monochrome

```typescript
config: {
  increasingColor: '#374151',
  decreasingColor: '#374151',
  increasingPaintStyle: 'STROKE',
  decreasingPaintStyle: 'FILL',
  shadowColor: '#374151',
}
```

## See Also

- [Combined Chart](/ncharts/charts/combined-chart) - Combine with line/bar
- [Axes Configuration](/ncharts/config/axes)
