# Events Reference

@nstudio/ncharts provides events for user interactions and chart state changes.

## Selection Events

### select

Fired when a user taps on a data point.

```html
<LineChart
  [data]="chartData"
  [highlightPerTapEnabled]="true"
  (select)="onSelect($event)">
</LineChart>
```

```typescript
import type { ChartSelectEvent } from '@nstudio/ncharts';

onSelect(event: ChartSelectEvent): void {
  if (event.entry) {
    console.log('Selected X:', event.entry.x);
    console.log('Selected Y:', event.entry.y);
    console.log('Marker:', event.entry.marker);
  }
  
  if (event.highlight) {
    console.log('DataSet Index:', event.highlight.dataSetIndex);
    console.log('Data Index:', event.highlight.dataIndex);
  }
}
```

#### ChartSelectEvent

```typescript
interface ChartSelectEvent {
  eventName: 'select';
  object: any;  // The chart view
  entry?: {
    x: number;
    y: number;
    marker?: string;
  };
  highlight?: Highlight;
}

interface Highlight {
  x: number;
  y?: number;
  dataSetIndex?: number;
  dataIndex?: number;
  stackIndex?: number;   // For stacked bars
  axis?: AxisDependency;
  drawY?: number;        // Pixel position
  drawX?: number;        // Pixel position
}
```

## Gesture Events

Gesture events are fired during user pan/zoom interactions.

```html
<LineChart
  [data]="chartData"
  [dragEnabled]="true"
  [scaleXEnabled]="true"
  [scaleYEnabled]="true"
  (chartGesture)="onGesture($event)">
</LineChart>
```

```typescript
import type { ChartGestureEvent } from '@nstudio/ncharts';

onGesture(event: ChartGestureEvent): void {
  switch (event.gesture) {
    case 'START':
      console.log('Touch started');
      break;
    case 'LONG_PRESS':
      console.log('Long press detected');
      break;
    case 'SINGLE_TAP':
      console.log('Single tap');
      break;
    case 'DOUBLE_TAP':
      console.log('Double tap');
      break;
    case 'DRAG':
      console.log('Dragging');
      break;
    case 'PINCH_ZOOM':
      console.log('Pinch zoom');
      break;
    case 'ZOOM_IN':
      console.log('Zooming in');
      break;
    case 'ZOOM_OUT':
      console.log('Zooming out');
      break;
    case 'PAN':
      console.log('Panning');
      break;
    case 'ROTATE':
      console.log('Rotating');
      break;
    case 'FLING':
      console.log('Fling');
      break;
    case 'END':
      console.log('Touch ended');
      break;
    case 'NONE':
      break;
  }
}
```

#### ChartGestureEvent

```typescript
interface ChartGestureEvent {
  eventName: 'chartGesture';
  object: any;  // The chart view
  gesture: ChartGesture;
}

type ChartGesture = 
  | 'NONE'
  | 'START'
  | 'END'
  | 'LONG_PRESS'
  | 'SINGLE_TAP'
  | 'DOUBLE_TAP'
  | 'DRAG'
  | 'PINCH_ZOOM'
  | 'ZOOM_IN'
  | 'ZOOM_OUT'
  | 'PAN'
  | 'ROTATE'
  | 'FLING';
```

## Y-Axis Min/Max Change Event

Fired when the visible Y-axis range changes (due to zoom/pan).

```html
<LineChart
  [data]="chartData"
  [scaleYEnabled]="true"
  (yAxisMinMaxChange)="onYAxisChange($event)">
</LineChart>
```

```typescript
import type { YAxisMinMaxChangeEvent } from '@nstudio/ncharts';

onYAxisChange(event: YAxisMinMaxChangeEvent): void {
  console.log('Left Axis - Min:', event.leftAxisMin, 'Max:', event.leftAxisMax);
  console.log('Right Axis - Min:', event.rightAxisMin, 'Max:', event.rightAxisMax);
}
```

#### YAxisMinMaxChangeEvent

```typescript
interface YAxisMinMaxChangeEvent {
  eventName: 'yAxisMinMaxChange';
  object: any;  // The chart view
  leftAxisMin?: number;
  leftAxisMax?: number;
  rightAxisMin?: number;
  rightAxisMax?: number;
}
```

## Enabling Interactions

Events require their corresponding interaction modes to be enabled:

### Selection Events

```html
<LineChart
  [highlightPerTapEnabled]="true"
  [highlightPerDragEnabled]="true"
  (select)="onSelect($event)">
</LineChart>
```

### Gesture Events

```html
<LineChart
  [dragEnabled]="true"
  [scaleXEnabled]="true"
  [scaleYEnabled]="true"
  [pinchZoomEnabled]="true"
  [doubleTapToZoomEnabled]="true"
  (chartGesture)="onGesture($event)">
</LineChart>
```

## Interaction Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `touchEnabled` | `boolean` | `true` | Enable all touch interactions |
| `dragEnabled` | `boolean` | `true` | Enable drag/pan |
| `scaleXEnabled` | `boolean` | `true` | Enable X-axis scaling |
| `scaleYEnabled` | `boolean` | `true` | Enable Y-axis scaling |
| `pinchZoomEnabled` | `boolean` | `true` | Enable pinch zoom |
| `doubleTapToZoomEnabled` | `boolean` | `true` | Enable double-tap zoom |
| `highlightPerTapEnabled` | `boolean` | `true` | Highlight on tap |
| `highlightPerDragEnabled` | `boolean` | `false` | Highlight while dragging |
| `dragDecelerationEnabled` | `boolean` | `true` | Enable momentum after drag |
| `dragDecelerationFrictionCoef` | `number` | `0.9` | Deceleration friction (0-1) |

## Full Example

```typescript
import { Component } from '@angular/core';
import { LineChartDirective } from '@nstudio/ncharts/angular';
import type { 
  LineChartData, 
  ChartSelectEvent, 
  ChartGestureEvent,
  YAxisMinMaxChangeEvent 
} from '@nstudio/ncharts';

@Component({
  selector: 'app-event-demo',
  standalone: true,
  imports: [LineChartDirective],
  template: `
    <StackLayout>
      <Label [text]="statusText" class="text-sm text-gray-600 mb-2" />
      
      <LineChart
        [data]="chartData"
        [touchEnabled]="true"
        [dragEnabled]="true"
        [scaleXEnabled]="true"
        [scaleYEnabled]="true"
        [pinchZoomEnabled]="true"
        [doubleTapToZoomEnabled]="true"
        [highlightPerTapEnabled]="true"
        [highlightPerDragEnabled]="true"
        [marker]="{ enabled: true }"
        (select)="onSelect($event)"
        (chartGesture)="onGesture($event)"
        (yAxisMinMaxChange)="onYAxisChange($event)">
      </LineChart>
    </StackLayout>
  `,
})
export class EventDemoComponent {
  chartData: LineChartData = {
    dataSets: [
      {
        label: 'Sales',
        values: [
          { x: 0, y: 45, marker: 'Jan: $45K' },
          { x: 1, y: 52, marker: 'Feb: $52K' },
          { x: 2, y: 48, marker: 'Mar: $48K' },
          { x: 3, y: 61, marker: 'Apr: $61K' },
          { x: 4, y: 55, marker: 'May: $55K' },
        ],
        config: {
          colors: ['#3B82F6'],
          lineWidth: 2,
          drawCircles: true,
          circleRadius: 4,
        },
      },
    ],
  };
  
  statusText = 'Tap a data point';
  
  onSelect(event: ChartSelectEvent): void {
    if (event.entry) {
      this.statusText = `Selected: ${event.entry.marker || event.entry.y}`;
    } else {
      this.statusText = 'Selection cleared';
    }
  }
  
  onGesture(event: ChartGestureEvent): void {
    switch (event.gesture) {
      case 'DRAG':
        this.statusText = 'Dragging chart...';
        break;
      case 'PINCH_ZOOM':
        this.statusText = 'Pinch zooming...';
        break;
      case 'DOUBLE_TAP':
        this.statusText = 'Double tap - resetting zoom';
        break;
      case 'END':
        this.statusText = 'Tap a data point';
        break;
    }
  }
  
  onYAxisChange(event: YAxisMinMaxChangeEvent): void {
    console.log(
      `Y-axis range: ${event.leftAxisMin?.toFixed(1)} - ${event.leftAxisMax?.toFixed(1)}`
    );
  }
}
```

## See Also

- [Methods Reference](/ncharts/api/methods)
- [Markers Configuration](/ncharts/config/markers)
