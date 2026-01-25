# Animation

@nstudio/ncharts provides smooth, native animations with extensive easing function options.

## Basic Configuration

```typescript
import type { ChartAnimation } from '@nstudio/ncharts';

const animation: ChartAnimation = {
  durationX: 1000,      // X-axis animation duration (ms)
  durationY: 1000,      // Y-axis animation duration (ms)
  easingX: 'EaseOutQuad', // X-axis easing function
  easingY: 'EaseOutQuad', // Y-axis easing function
};
```

## Animation Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `durationX` | `number` | `0` | X-axis animation duration in milliseconds |
| `durationY` | `number` | `0` | Y-axis animation duration in milliseconds |
| `easingX` | `EasingFunction` | `'Linear'` | Easing function for X-axis |
| `easingY` | `EasingFunction` | `'Linear'` | Easing function for Y-axis |

## Easing Functions

All available easing functions:

```typescript
type EasingFunction = 
  // Linear
  | 'Linear'
  
  // Quadratic
  | 'EaseInQuad'
  | 'EaseOutQuad'      // ← Recommended for most charts
  | 'EaseInOutQuad'
  
  // Cubic
  | 'EaseInCubic'
  | 'EaseOutCubic'
  | 'EaseInOutCubic'   // ← Smooth professional feel
  
  // Quartic
  | 'EaseInQuart'
  | 'EaseOutQuart'
  | 'EaseInOutQuart'
  
  // Sine
  | 'EaseInSine'
  | 'EaseOutSine'
  | 'EaseInOutSine'
  
  // Exponential
  | 'EaseInExpo'
  | 'EaseOutExpo'
  | 'EaseInOutExpo'
  
  // Circular
  | 'EaseInCirc'
  | 'EaseOutCirc'
  | 'EaseInOutCirc'
  
  // Elastic (bouncy)
  | 'EaseInElastic'
  | 'EaseOutElastic'   // ← Fun, attention-grabbing
  | 'EaseInOutElastic'
  
  // Back (overshoot)
  | 'EaseInBack'
  | 'EaseOutBack'      // ← Popular for bar charts
  | 'EaseInOutBack'
  
  // Bounce
  | 'EaseInBounce'
  | 'EaseOutBounce'    // ← Great for pie charts
  | 'EaseInOutBounce';
```

## Recommended Combinations

### Professional/Business Charts

```typescript
const animation: ChartAnimation = {
  durationX: 800,
  durationY: 800,
  easingX: 'EaseOutQuad',
  easingY: 'EaseOutQuad',
};
```

### Smooth & Elegant

```typescript
const animation: ChartAnimation = {
  durationX: 1200,
  durationY: 1200,
  easingX: 'EaseInOutCubic',
  easingY: 'EaseInOutCubic',
};
```

### Playful/Engaging

```typescript
const animation: ChartAnimation = {
  durationX: 1400,
  durationY: 1400,
  easingX: 'EaseOutBack',
  easingY: 'EaseOutBack',
};
```

### Pie/Donut Charts

```typescript
const animation: ChartAnimation = {
  durationX: 1400,
  durationY: 1400,
  easingX: 'EaseOutBounce',
  easingY: 'EaseOutBounce',
};
```

## Using in Templates

### Property Binding

```html
<LineChart
  [data]="chartData"
  [animation]="{ durationX: 1000, durationY: 1000, easingX: 'EaseOutQuad' }">
</LineChart>
```

### Component Property

```typescript
@Component({...})
export class MyComponent {
  animation: ChartAnimation = {
    durationX: 1200,
    durationY: 1200,
    easingX: 'EaseOutCubic',
  };
}
```

```html
<LineChart [data]="chartData" [animation]="animation"></LineChart>
```

## Programmatic Animation

Trigger animations on demand:

```typescript
import { ViewChild, ElementRef } from '@angular/core';
import type { LineChart, ChartAnimation } from '@nstudio/ncharts';

@ViewChild('chart') chartRef!: ElementRef;

// Re-animate the chart
animateChart(): void {
  const chart = this.chartRef.nativeElement as LineChart;
  chart.animate({
    durationX: 1000,
    durationY: 1000,
    easingX: 'EaseOutBack',
  });
}

// Different animation for data updates
animateDataUpdate(): void {
  const chart = this.chartRef.nativeElement as LineChart;
  chart.animate({
    durationX: 600,
    durationY: 600,
    easingX: 'EaseOutQuad',
  });
}
```

## Animation Tips

### Performance

- Keep durations under 2000ms for best user experience
- Use simpler easing (Quad, Cubic) for complex charts with many data points
- Elastic and Bounce easings are more CPU-intensive

### User Experience

- **Initial load**: Use longer durations (1000-1500ms)
- **Data updates**: Use shorter durations (400-800ms)
- **User-triggered**: Match the interaction feel

### Disable Animation

```typescript
const noAnimation: ChartAnimation = {
  durationX: 0,
  durationY: 0,
};
```

Or simply don't set the `animation` property.

## Per-Axis Animation

Animate X and Y axes differently for interesting effects:

```typescript
// Y-axis leads, X follows
const animation: ChartAnimation = {
  durationX: 1200,
  durationY: 800,
  easingX: 'EaseOutQuad',
  easingY: 'EaseOutBack',
};
```

This can create a "growing up then spreading out" effect for bar charts.

## See Also

- [Styling Guide](/ncharts/config/styling)
- [Quick Start](/ncharts/quick-start)
