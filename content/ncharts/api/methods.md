# Methods Reference

Programmatic methods available on all @nstudio/ncharts chart components.

## Accessing Chart Methods

```typescript
import { ViewChild, ElementRef } from '@angular/core';
import type { LineChart } from '@nstudio/ncharts';

@Component({...})
export class MyComponent {
  @ViewChild('chart') chartRef!: ElementRef;

  doSomething() {
    const chart = this.chartRef.nativeElement as LineChart;
    chart.animate({ durationX: 1000 });
  }
}
```

```html
<LineChart #chart [data]="chartData"></LineChart>
```

## Animation Methods

### animate()

Animate the chart with custom timing.

```typescript
animate(animation: ChartAnimation): void

chart.animate({
  durationX: 1000,
  durationY: 1000,
  easingX: 'EaseOutQuad',
  easingY: 'EaseOutQuad',
});
```

### animateX()

Animate only the X-axis.

```typescript
animateX(durationMillis: number, easing?: EasingFunction): void

chart.animateX(1000, 'EaseOutCubic');
```

### animateY()

Animate only the Y-axis.

```typescript
animateY(durationMillis: number, easing?: EasingFunction): void

chart.animateY(1000, 'EaseOutBack');
```

### animateXY()

Animate both axes with the same duration.

```typescript
animateXY(durationMillisX: number, durationMillisY: number): void

chart.animateXY(1000, 1200);
```

## Highlight Methods

### highlightValues()

Programmatically highlight data points.

```typescript
highlightValues(highlights: Highlight[]): void

// Highlight a single point
chart.highlightValues([
  { x: 2, dataSetIndex: 0 }
]);

// Highlight multiple points
chart.highlightValues([
  { x: 1, dataSetIndex: 0 },
  { x: 3, dataSetIndex: 1 },
]);

// Highlight with specific y value (for bar/line charts)
chart.highlightValues([
  { x: 2, y: 75, dataSetIndex: 0 }
]);
```

### clearHighlights()

Remove all active highlights.

```typescript
clearHighlights(): void

chart.clearHighlights();
```

## View Methods

### fitScreen()

Reset zoom and pan to fit all data.

```typescript
fitScreen(): void

chart.fitScreen();
```

### invalidate()

Force the chart to redraw.

```typescript
invalidate(): void

// After updating data
this.chartData = newData;
chart.invalidate();
```

### notifyDataSetChanged()

Notify the chart that the underlying data has changed.

```typescript
notifyDataSetChanged(): void

chart.notifyDataSetChanged();
```

## Zoom Methods

### zoom()

Zoom to a specific level.

```typescript
zoom(
  scaleX: number,
  scaleY: number,
  xValue: number,
  yValue: number,
  axis: AxisDependency
): void

// Zoom 2x at the center of data
chart.zoom(2, 2, 5, 50, 'LEFT');
```

### zoomIn()

Zoom in by a small increment.

```typescript
zoomIn(): void

chart.zoomIn();
```

### zoomOut()

Zoom out by a small increment.

```typescript
zoomOut(): void

chart.zoomOut();
```

### resetZoom()

Reset to the original zoom level.

```typescript
resetZoom(): void

chart.resetZoom();
```

## Movement Methods

### moveViewToX()

Move the chart viewport to a specific x-value.

```typescript
moveViewToX(xValue: number): void

chart.moveViewToX(10);
```

### moveViewToY()

Move the chart viewport to a specific y-value.

```typescript
moveViewToY(yValue: number, axis: AxisDependency): void

chart.moveViewToY(50, 'LEFT');
```

### moveViewTo()

Move the chart viewport to a specific position.

```typescript
moveViewTo(xValue: number, yValue: number, axis: AxisDependency): void

chart.moveViewTo(10, 50, 'LEFT');
```

### moveViewToAnimated()

Move the chart viewport with animation.

```typescript
moveViewToAnimated(
  xValue: number,
  yValue: number,
  axis: AxisDependency,
  duration: number
): void

chart.moveViewToAnimated(10, 50, 'LEFT', 500);
```

### centerViewTo()

Center the viewport on a specific value.

```typescript
centerViewTo(
  xValue: number,
  yValue: number,
  axis: AxisDependency
): void

chart.centerViewTo(5, 40, 'LEFT');
```

### centerViewToAnimated()

Center the viewport with animation.

```typescript
centerViewToAnimated(
  xValue: number,
  yValue: number,
  axis: AxisDependency,
  duration: number
): void

chart.centerViewToAnimated(5, 40, 'LEFT', 500);
```

## Offset Methods

### setViewPortOffsets()

Set custom viewport offsets (padding).

```typescript
setViewPortOffsets(
  left: number,
  top: number,
  right: number,
  bottom: number
): void

chart.setViewPortOffsets(50, 20, 20, 50);
```

### resetViewPortOffsets()

Reset viewport offsets to auto-calculation.

```typescript
resetViewPortOffsets(): void

chart.resetViewPortOffsets();
```

### setExtraOffsets()

Set extra offsets in addition to auto-calculated ones.

```typescript
setExtraOffsets(
  left: number,
  top: number,
  right: number,
  bottom: number
): void

chart.setExtraOffsets(10, 10, 10, 10);
```

## Pie Chart Specific Methods

### spin()

Spin the pie chart.

```typescript
spin(
  durationMillis: number,
  fromAngle: number,
  toAngle: number,
  easing?: EasingFunction
): void

// Spin 360 degrees
chart.spin(1000, 0, 360, 'EaseOutQuad');
```

## Utility Methods

### getHighlighted()

Get currently highlighted entries.

```typescript
getHighlighted(): Highlight[]

const highlights = chart.getHighlighted();
console.log('Selected:', highlights);
```

### getYMin()

Get the minimum y-value.

```typescript
getYMin(axis?: AxisDependency): number

const min = chart.getYMin('LEFT');
```

### getYMax()

Get the maximum y-value.

```typescript
getYMax(axis?: AxisDependency): number

const max = chart.getYMax('LEFT');
```

### getXMin()

Get the minimum x-value.

```typescript
getXMin(): number

const min = chart.getXMin();
```

### getXMax()

Get the maximum x-value.

```typescript
getXMax(): number

const max = chart.getXMax();
```

## Full Example

```typescript
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { LineChartDirective } from '@nstudio/ncharts/angular';
import type { LineChart, LineChartData } from '@nstudio/ncharts';

@Component({
  selector: 'app-interactive-chart',
  standalone: true,
  imports: [LineChartDirective],
  template: `
    <StackLayout>
      <LineChart
        #chart
        [data]="chartData"
        (select)="onSelect($event)">
      </LineChart>
      
      <GridLayout columns="*, *, *" class="mt-4">
        <Button (tap)="zoomIn()" text="Zoom +" col="0" />
        <Button (tap)="resetView()" text="Reset" col="1" />
        <Button (tap)="zoomOut()" text="Zoom -" col="2" />
      </GridLayout>
    </StackLayout>
  `,
})
export class InteractiveChartComponent implements AfterViewInit {
  @ViewChild('chart') chartRef!: ElementRef;
  
  chartData: LineChartData = {/*...*/};
  
  private get chart(): LineChart {
    return this.chartRef.nativeElement;
  }
  
  ngAfterViewInit() {
    // Initial animation
    setTimeout(() => {
      this.chart.animate({
        durationX: 1500,
        durationY: 1500,
        easingX: 'EaseOutCubic',
      });
    }, 100);
  }
  
  zoomIn() {
    this.chart.zoomIn();
  }
  
  zoomOut() {
    this.chart.zoomOut();
  }
  
  resetView() {
    this.chart.fitScreen();
    this.chart.clearHighlights();
  }
  
  highlightPoint(x: number) {
    this.chart.highlightValues([{ x, dataSetIndex: 0 }]);
  }
  
  onSelect(event: any) {
    if (event.entry) {
      console.log('Selected:', event.entry);
    }
  }
}
```

## See Also

- [Events Reference](/ncharts/api/events)
- [Types Reference](/ncharts/api/types)
