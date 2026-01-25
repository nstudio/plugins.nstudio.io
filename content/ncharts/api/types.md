# Types Reference

Complete TypeScript type definitions for @nstudio/ncharts.

## Chart Data Types

### LineChartData

```typescript
interface LineChartData {
  dataSets: LineChartDataSet[];
}

interface LineChartDataSet {
  label?: string;
  values: LineChartDataEntry[];
  config?: LineChartDataSetConfig;
}

interface LineChartDataEntry {
  x?: number;
  y: number;
  marker?: string;
  icon?: ImageSource;
}
```

### BarChartData

```typescript
interface BarChartData {
  dataSets: BarChartDataSet[];
}

interface BarChartDataSet {
  label?: string;
  values: BarChartDataEntry[];
  config?: BarChartDataSetConfig;
}

interface BarChartDataEntry {
  x?: number;
  y: number | number[];  // Array for stacked bars
  marker?: string | string[];
  icon?: ImageSource;
}
```

### PieChartData

```typescript
interface PieChartData {
  dataSets: PieChartDataSet[];
}

interface PieChartDataSet {
  label?: string;
  values: PieChartDataEntry[];
  config?: PieChartDataSetConfig;
}

interface PieChartDataEntry {
  value: number;
  label: string;
}
```

### ScatterChartData

```typescript
interface ScatterChartData {
  dataSets: ScatterChartDataSet[];
}

interface ScatterChartDataSet {
  label?: string;
  values: ScatterChartDataEntry[];
  config?: ScatterChartDataSetConfig;
}

interface ScatterChartDataEntry {
  x: number;
  y: number;
  marker?: string;
  icon?: ImageSource;
}
```

### BubbleChartData

```typescript
interface BubbleChartData {
  dataSets: BubbleChartDataSet[];
}

interface BubbleChartDataSet {
  label?: string;
  values: BubbleChartDataEntry[];
  config?: BubbleChartDataSetConfig;
}

interface BubbleChartDataEntry {
  x: number;
  y: number;
  size: number;  // Bubble size dimension
  marker?: string;
  icon?: ImageSource;
}
```

### CandleChartData

```typescript
interface CandleChartData {
  dataSets: CandleChartDataSet[];
}

interface CandleChartDataSet {
  label?: string;
  values: CandleChartDataEntry[];
  config?: CandleChartDataSetConfig;
}

interface CandleChartDataEntry {
  x?: number;
  shadowH: number;   // High
  shadowL: number;   // Low
  open: number;
  close: number;
  marker?: string;
  icon?: ImageSource;
}
```

### RadarChartData

```typescript
interface RadarChartData {
  labels: string[];  // Axis labels
  dataSets: RadarChartDataSet[];
}

interface RadarChartDataSet {
  label?: string;
  values: RadarChartDataEntry[];
  config?: RadarChartDataSetConfig;
}

interface RadarChartDataEntry {
  value: number;
  marker?: string;
  icon?: ImageSource;
}
```

### CombinedChartData

```typescript
interface CombinedChartData {
  lineData?: LineChartData;
  barData?: BarChartData;
  bubbleData?: BubbleChartData;
  scatterData?: ScatterChartData;
  candleData?: CandleChartData;
}
```

## DataSet Configuration Types

### Base Configuration

All dataset configs extend:

```typescript
interface ChartDataSetConfigBase {
  drawValues?: boolean;
  valueTextSize?: number;
  valueTextColor?: ChartColor;
  visible?: boolean;
  highlightEnabled?: boolean;
  axisDependency?: AxisDependency;
  form?: LegendForm;
  formSize?: number;
  formLineWidth?: number;
  drawIcons?: boolean;
  iconsOffset?: { x: number; y: number };
  valueFormatter?: ValueFormatter;
  colors?: ChartColor[];
}
```

### LineChartDataSetConfig

```typescript
interface LineChartDataSetConfig extends ChartDataSetConfigBase {
  mode?: LineMode;
  lineWidth?: number;
  drawCircles?: boolean;
  circleRadius?: number;
  circleColor?: ChartColor;
  circleHoleColor?: ChartColor;
  circleHoleRadius?: number;
  drawCircleHole?: boolean;
  drawFilled?: boolean;
  fillColor?: ChartColor;
  fillAlpha?: number;
  fillGradient?: ChartGradient;
  drawHorizontalHighlightIndicator?: boolean;
  drawVerticalHighlightIndicator?: boolean;
  highlightColor?: ChartColor;
  highlightLineWidth?: number;
  highlightLineDashLengths?: number[];
  dashedLine?: DashedLine;
  fillFormatter?: LineChartFillFormatter;
}

type LineMode = 
  | 'LINEAR'
  | 'STEPPED'
  | 'CUBIC_BEZIER'
  | 'HORIZONTAL_BEZIER';
```

### BarChartDataSetConfig

```typescript
interface BarChartDataSetConfig extends ChartDataSetConfigBase {
  barShadowColor?: ChartColor;
  barBorderWidth?: number;
  barBorderColor?: ChartColor;
  highlightAlpha?: number;
  stackLabels?: string[];
}
```

### PieChartDataSetConfig

```typescript
interface PieChartDataSetConfig extends ChartDataSetConfigBase {
  sliceSpace?: number;
  selectionShift?: number;
  drawHole?: boolean;
  holeColor?: ChartColor;
  transparentCircleColor?: ChartColor;
  transparentCircleAlpha?: number;
  holeRadius?: number;
  transparentCircleRadius?: number;
  centerText?: string;
  centerTextColor?: ChartColor;
  centerTextSize?: number;
  maxAngle?: number;
  drawEntryLabels?: boolean;
  entryLabelColor?: ChartColor;
  entryLabelTextSize?: number;
  valueLinePart1OffsetPercentage?: number;
  valueLinePart1Length?: number;
  valueLinePart2Length?: number;
  valueLineColor?: ChartColor;
  valueLineWidth?: number;
  valueLineVariableLength?: boolean;
  xValuePosition?: PieValuePosition;
  yValuePosition?: PieValuePosition;
}

type PieValuePosition = 'INSIDE_SLICE' | 'OUTSIDE_SLICE';
```

### ScatterChartDataSetConfig

```typescript
interface ScatterChartDataSetConfig extends ChartDataSetConfigBase {
  scatterShape?: ScatterShape;
  scatterShapeSize?: number;
  scatterShapeHoleColor?: ChartColor;
  scatterShapeHoleRadius?: number;
  highlightColor?: ChartColor;
  highlightLineWidth?: number;
}

type ScatterShape = 
  | 'SQUARE'
  | 'CIRCLE'
  | 'TRIANGLE'
  | 'CROSS'
  | 'X';
```

### BubbleChartDataSetConfig

```typescript
interface BubbleChartDataSetConfig extends ChartDataSetConfigBase {
  highlightColor?: ChartColor;
  highlightCircleWidth?: number;
}
```

### CandleChartDataSetConfig

```typescript
interface CandleChartDataSetConfig extends ChartDataSetConfigBase {
  barSpace?: number;
  shadowWidth?: number;
  shadowColor?: ChartColor;
  shadowColorSameAsCandle?: boolean;
  neutralColor?: ChartColor;
  increasingColor?: ChartColor;
  decreasingColor?: ChartColor;
  increasingPaintStyle?: PaintStyle;
  decreasingPaintStyle?: PaintStyle;
  highlightColor?: ChartColor;
  highlightLineWidth?: number;
}

type PaintStyle = 'FILL' | 'STROKE' | 'FILL_AND_STROKE';
```

### RadarChartDataSetConfig

```typescript
interface RadarChartDataSetConfig extends ChartDataSetConfigBase {
  color?: ChartColor;
  lineWidth?: number;
  drawFilled?: boolean;
  fillColor?: ChartColor;
  fillAlpha?: number;
  drawHighlightCircleEnabled?: boolean;
  highlightCircleFillColor?: ChartColor;
  highlightCircleStrokeColor?: ChartColor;
  highlightCircleStrokeAlpha?: number;
  highlightCircleInnerRadius?: number;
  highlightCircleOuterRadius?: number;
  highlightCircleStrokeWidth?: number;
}
```

## Chart Configuration Types

### XAxisConfig

```typescript
interface XAxisConfig extends AxisBase {
  enabled?: boolean;
  position?: XAxisPosition;
  yOffset?: number;
}

type XAxisPosition = 
  | 'TOP'
  | 'BOTTOM'
  | 'BOTH_SIDED'
  | 'TOP_INSIDE'
  | 'BOTTOM_INSIDE';
```

### YAxisConfig

```typescript
interface YAxisConfig extends AxisBase {
  enabled?: boolean;
  position?: YAxisPosition;
  zeroLine?: ZeroLineConfig;
}

type YAxisPosition = 'OUTSIDE_CHART' | 'INSIDE_CHART';

interface YAxisConfigDual {
  left?: YAxisConfig;
  right?: YAxisConfig;
}
```

### AxisBase

```typescript
interface AxisBase {
  // Lines
  drawGridLines?: boolean;
  drawAxisLine?: boolean;
  drawLabels?: boolean;
  
  // Text Styling
  textColor?: ChartColor;
  textSize?: number;
  fontFamily?: string;
  fontStyle?: number;
  
  // Grid Styling
  gridColor?: ChartColor;
  gridLineWidth?: number;
  gridDashedLine?: DashedLine;
  
  // Axis Line Styling
  axisLineColor?: ChartColor;
  axisLineWidth?: number;
  
  // Value Range
  axisMinimum?: number;
  axisMaximum?: number;
  inverted?: boolean;
  spaceTop?: number;
  spaceBottom?: number;
  
  // Labels
  labelCount?: number;
  labelCountForce?: boolean;
  granularity?: number;
  granularityEnabled?: boolean;
  centerAxisLabels?: boolean;
  labelRotationAngle?: number;
  avoidFirstLastClipping?: boolean;
  
  // Value Formatting
  valueFormatter?: string | string[] | 'largeValue' | 'percent' | 'date' | 'labelByXValue';
  valueFormatterPattern?: string;
  valueFormatterLabels?: { x: number; label: string }[];
  
  // Limit Lines
  limitLines?: LimitLine[];
  drawLimitLinesBehindData?: boolean;
}
```

### LimitLine

```typescript
interface LimitLine {
  limit: number;
  label?: string;
  lineColor?: ChartColor;
  lineWidth?: number;
  labelPosition?: LimitLineLabelPosition;
  valueTextColor?: ChartColor;
  valueTextSize?: number;
  lineDashLengths?: number[];
  lineDashPhase?: number;
}

type LimitLineLabelPosition = 
  | 'LEFT_TOP'
  | 'LEFT_BOTTOM'
  | 'RIGHT_TOP'
  | 'RIGHT_BOTTOM';
```

### LegendConfig

```typescript
interface LegendConfig {
  enabled?: boolean;
  horizontalAlignment?: LegendHorizontalAlignment;
  verticalAlignment?: LegendVerticalAlignment;
  orientation?: LegendOrientation;
  direction?: LegendDirection;
  drawInside?: boolean;
  form?: LegendForm;
  formSize?: number;
  textColor?: ChartColor;
  textSize?: number;
  fontFamily?: string;
  fontStyle?: number;
  fontWeight?: number;
  xEntrySpace?: number;
  yEntrySpace?: number;
  formToTextSpace?: number;
  wordWrapEnabled?: boolean;
  maxSizePercent?: number;
  custom?: {
    colors: ChartColor[];
    labels: string[];
  };
}

type LegendHorizontalAlignment = 'LEFT' | 'CENTER' | 'RIGHT';
type LegendVerticalAlignment = 'TOP' | 'CENTER' | 'BOTTOM';
type LegendOrientation = 'HORIZONTAL' | 'VERTICAL';
type LegendDirection = 'LEFT_TO_RIGHT' | 'RIGHT_TO_LEFT';
type LegendForm = 'NONE' | 'EMPTY' | 'DEFAULT' | 'SQUARE' | 'CIRCLE' | 'LINE';
```

### ChartAnimation

```typescript
interface ChartAnimation {
  durationX?: number;
  durationY?: number;
  easingX?: EasingFunction;
  easingY?: EasingFunction;
}

type EasingFunction = 
  | 'Linear'
  | 'EaseInQuad' | 'EaseOutQuad' | 'EaseInOutQuad'
  | 'EaseInCubic' | 'EaseOutCubic' | 'EaseInOutCubic'
  | 'EaseInQuart' | 'EaseOutQuart' | 'EaseInOutQuart'
  | 'EaseInSine' | 'EaseOutSine' | 'EaseInOutSine'
  | 'EaseInExpo' | 'EaseOutExpo' | 'EaseInOutExpo'
  | 'EaseInCirc' | 'EaseOutCirc' | 'EaseInOutCirc'
  | 'EaseInElastic' | 'EaseOutElastic' | 'EaseInOutElastic'
  | 'EaseInBack' | 'EaseOutBack' | 'EaseInOutBack'
  | 'EaseInBounce' | 'EaseOutBounce' | 'EaseInOutBounce';
```

### MarkerConfig

```typescript
interface MarkerConfig {
  enabled?: boolean;
  digits?: number;
  markerColor?: ChartColor;
  textColor?: ChartColor;
  textSize?: number;
}
```

### ChartDescription

```typescript
interface ChartDescription {
  text: string;
  textColor?: ChartColor;
  textSize?: number;
  positionX?: number;
  positionY?: number;
}
```

## Gradient Types

```typescript
interface ChartGradient {
  colors: ChartColor[];
  positions?: number[];
  angle?: number;            // iOS
  orientation?: GradientOrientation;  // Android
}

type GradientOrientation = 
  | 'TOP_BOTTOM'
  | 'TR_BL'
  | 'RIGHT_LEFT'
  | 'BR_TL'
  | 'BOTTOM_TOP'
  | 'BL_TR'
  | 'LEFT_RIGHT'
  | 'TL_BR';
```

## Utility Types

```typescript
type ChartColor = string | number;

type AxisDependency = 'LEFT' | 'RIGHT';

interface DashedLine {
  lineLength: number;
  spaceLength: number;
  phase?: number;
}

interface ZeroLineConfig {
  enabled: boolean;
  lineWidth?: number;
  lineColor?: ChartColor;
}

interface ChartOffsets {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}
```

## Highlight Types

```typescript
interface Highlight {
  x: number;
  y?: number;
  dataSetIndex?: number;
  dataIndex?: number;
  stackIndex?: number;
  axis?: AxisDependency;
  drawY?: number;
  drawX?: number;
}

interface ChartSelectEvent {
  eventName: 'select';
  object: any;
  entry?: {
    x: number;
    y: number;
    marker?: string;
  };
  highlight?: Highlight;
}
```

## See Also

- [Methods Reference](/ncharts/api/methods)
- [Events Reference](/ncharts/api/events)
