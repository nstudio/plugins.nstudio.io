# Calendar

A full-featured native calendar view for NativeScript with month, week, and year display modes, multiple selection modes, event markers, custom styling, and programmatic control.

The plugin celebrates two best-in-class native libraries:

- **iOS**: [HorizonCalendar](https://github.com/airbnb/HorizonCalendar) by Airbnb
- **Android**: [kizitonwose Calendar](https://github.com/kizitonwose/Calendar)
  
<iframe style="width: 100%; min-height: 200px; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/LBkGhH9JVHY" title="
NativeScript Calendar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Installation

```bash
npm install @nstudio/nativescript-calendar
```

## Register the Component

<FrameworkTabs>
<template #angular>

```typescript
import { registerElement } from '@nativescript/angular';
import { NCalendar } from '@nstudio/nativescript-calendar';

registerElement('NCalendar', () => NCalendar);
```

</template>
<template #react>

```typescript
import { registerElement } from 'react-nativescript';
import { NCalendar } from '@nstudio/nativescript-calendar';

registerElement('nCalendar', () => NCalendar);
```

</template>
<template #vue>

```typescript
import { registerElement } from 'nativescript-vue';
import { NCalendar } from '@nstudio/nativescript-calendar';

registerElement('NCalendar', () => NCalendar);
```

</template>
<template #svelte>

```typescript
import { registerNativeViewElement } from '@nativescript-community/svelte-native/dom';
import { NCalendar } from '@nstudio/nativescript-calendar';

registerNativeViewElement('nCalendar', () => NCalendar);
```

</template>
<template #solid>

```typescript
import { registerElement } from 'dominative';
import { NCalendar } from '@nstudio/nativescript-calendar';

registerElement('nCalendar', NCalendar);
```

</template>
</FrameworkTabs>

NativeScript Core does not require registration — use the XML namespace:

```xml
<Page xmlns:cal="@nstudio/nativescript-calendar">
  ...
</Page>
```

## Basic Usage

<FrameworkTabs>
<template #angular>

```html
<NCalendar
  displayMode="month"
  selectionMode="single"
  orientation="vertical"
  interMonthSpacing="16"
  (daySelect)="onDaySelect($event)">
</NCalendar>
```

```typescript
import { CalendarDayEventData } from '@nstudio/nativescript-calendar';

export class CalendarComponent {
  onDaySelect(args: CalendarDayEventData) {
    const day = args.data.day;
    console.log(`Selected: ${day.year}-${day.month}-${day.day}`);
  }
}
```

</template>
<template #react>

```tsx
<nCalendar
  displayMode="month"
  selectionMode="single"
  orientation="vertical"
  interMonthSpacing={16}
  onDaySelect={handleDaySelect}
  className="h-full"
/>
```

```typescript
import { CalendarDayEventData } from '@nstudio/nativescript-calendar';

function handleDaySelect(args: CalendarDayEventData) {
  const day = args.data.day;
  console.log(`Selected: ${day.year}-${day.month}-${day.day}`);
}
```

</template>
<template #vue>

```vue
<NCalendar
  displayMode="month"
  selectionMode="single"
  orientation="vertical"
  :interMonthSpacing="16"
  @daySelect="onDaySelect"
/>
```

```typescript
import { CalendarDayEventData } from '@nstudio/nativescript-calendar';

function onDaySelect(args: CalendarDayEventData) {
  const day = args.data.day;
  console.log(`Selected: ${day.year}-${day.month}-${day.day}`);
}
```

</template>
<template #svelte>

```svelte
<nCalendar
  displayMode="month"
  selectionMode="single"
  orientation="vertical"
  interMonthSpacing={16}
  on:daySelect={handleDaySelect}
/>
```

```typescript
import { CalendarDayEventData } from '@nstudio/nativescript-calendar';

function handleDaySelect(args: CalendarDayEventData) {
  const day = args.data.day;
  console.log(`Selected: ${day.year}-${day.month}-${day.day}`);
}
```

</template>
<template #solid>

```jsx
<nCalendar
  displayMode="month"
  selectionMode="single"
  orientation="vertical"
  interMonthSpacing={16}
  onDaySelect={handleDaySelect}
/>
```

```typescript
import { CalendarDayEventData } from '@nstudio/nativescript-calendar';

function handleDaySelect(args: CalendarDayEventData) {
  const day = args.data.day;
  console.log(`Selected: ${day.year}-${day.month}-${day.day}`);
}
```

</template>
</FrameworkTabs>

## Display Modes

### Month (default)

The standard month view with continuous vertical or horizontal scrolling.

<FrameworkTabs>
<template #angular>

```html
<NCalendar displayMode="month"></NCalendar>
```

</template>
<template #react>

```tsx
<nCalendar displayMode="month" />
```

</template>
<template #vue>

```vue
<NCalendar displayMode="month" />
```

</template>
<template #svelte>

```svelte
<nCalendar displayMode="month" />
```

</template>
<template #solid>

```jsx
<nCalendar displayMode="month" />
```

</template>
</FrameworkTabs>

### Week

A single-row week strip. Swipe left or right to navigate between weeks.

<FrameworkTabs>
<template #angular>

```html
<NCalendar displayMode="week"></NCalendar>
```

</template>
<template #react>

```tsx
<nCalendar displayMode="week" />
```

</template>
<template #vue>

```vue
<NCalendar displayMode="week" />
```

</template>
<template #svelte>

```svelte
<nCalendar displayMode="week" />
```

</template>
<template #solid>

```jsx
<nCalendar displayMode="week" />
```

</template>
</FrameworkTabs>

### Year

A grid of mini-month calendars. Control the number of columns with `monthColumns`.

<FrameworkTabs>
<template #angular>

```html
<NCalendar displayMode="year" [monthColumns]="3"></NCalendar>
```

</template>
<template #react>

```tsx
<nCalendar displayMode="year" monthColumns={3} />
```

</template>
<template #vue>

```vue
<NCalendar displayMode="year" :monthColumns="3" />
```

</template>
<template #svelte>

```svelte
<nCalendar displayMode="year" monthColumns={3} />
```

</template>
<template #solid>

```jsx
<nCalendar displayMode="year" monthColumns={3} />
```

</template>
</FrameworkTabs>

## Selection Modes

### Single (default)

Tap to select one date. Tap again to deselect.

### Range

Tap a start date, then tap an end date. Dates in between are highlighted with a range band.

<FrameworkTabs>
<template #angular>

```html
<NCalendar selectionMode="range" (daySelect)="onRangeSelect($event)"></NCalendar>
```

```typescript
onRangeSelect(args: CalendarDayEventData) {
  const calendar = args.object as NCalendar;
  const range = calendar.selectedDateRange;
  if (range) {
    console.log(`${range.start} to ${range.end}`);
  }
}
```

</template>
<template #react>

```tsx
<nCalendar
  selectionMode="range"
  onDaySelect={handleRangeSelect}
/>
```

```typescript
function handleRangeSelect(args: CalendarDayEventData) {
  const calendar = args.object as NCalendar;
  const range = calendar.selectedDateRange;
  if (range) {
    console.log(`${range.start} to ${range.end}`);
  }
}
```

</template>
<template #vue>

```vue
<NCalendar selectionMode="range" @daySelect="onRangeSelect" />
```

```typescript
function onRangeSelect(args: CalendarDayEventData) {
  const calendar = args.object as NCalendar;
  const range = calendar.selectedDateRange;
  if (range) {
    console.log(`${range.start} to ${range.end}`);
  }
}
```

</template>
<template #svelte>

```svelte
<nCalendar selectionMode="range" on:daySelect={handleRangeSelect} />
```

```typescript
function handleRangeSelect(args: CalendarDayEventData) {
  const calendar = args.object as NCalendar;
  const range = calendar.selectedDateRange;
  if (range) {
    console.log(`${range.start} to ${range.end}`);
  }
}
```

</template>
<template #solid>

```jsx
<nCalendar selectionMode="range" onDaySelect={handleRangeSelect} />
```

```typescript
function handleRangeSelect(args: CalendarDayEventData) {
  const calendar = args.object as NCalendar;
  const range = calendar.selectedDateRange;
  if (range) {
    console.log(`${range.start} to ${range.end}`);
  }
}
```

</template>
</FrameworkTabs>

### Multiple

Tap to toggle individual dates on or off.

```typescript
const selected = calendar.getSelectedDates();
console.log(`${selected.length} dates selected`);
```

### None

Day taps are disabled. Useful for display-only calendars.

## Orientation & Paging

### Vertical Scroll (default)

Months flow top to bottom in a continuous scroll.

### Horizontal Paged

One month at a time. Swipe left or right to navigate.

<FrameworkTabs>
<template #angular>

```html
<NCalendar orientation="horizontal" [scrollPaged]="true"></NCalendar>
```

</template>
<template #react>

```tsx
<nCalendar orientation="horizontal" scrollPaged={true} />
```

</template>
<template #vue>

```vue
<NCalendar orientation="horizontal" :scrollPaged="true" />
```

</template>
<template #svelte>

```svelte
<nCalendar orientation="horizontal" scrollPaged={true} />
```

</template>
<template #solid>

```jsx
<nCalendar orientation="horizontal" scrollPaged={true} />
```

</template>
</FrameworkTabs>

## Events / Markers

Add colored dot markers to calendar days using the `events` property.

```typescript
import { CalendarEvent } from '@nstudio/nativescript-calendar';

const events: CalendarEvent[] = [
  { date: new Date(2026, 2, 3), color: '#E91E63', data: { title: 'Team Standup', time: '9:00 AM' } },
  { date: new Date(2026, 2, 3), color: '#2196F3', data: { title: 'Design Review', time: '2:00 PM' } },
  { date: new Date(2026, 2, 7), color: '#4CAF50', data: { title: 'Lunch with Sarah', time: '12:30 PM' } },
];
```

<FrameworkTabs>
<template #angular>

```html
<NCalendar [events]="events" (daySelect)="onEventDaySelect($event)"></NCalendar>
```

</template>
<template #react>

```tsx
<nCalendar events={events} onDaySelect={handleEventDaySelect} />
```

</template>
<template #vue>

```vue
<NCalendar :events="events" @daySelect="onEventDaySelect" />
```

</template>
<template #svelte>

```svelte
<nCalendar events={events} on:daySelect={handleEventDaySelect} />
```

</template>
<template #solid>

```jsx
<nCalendar events={events()} onDaySelect={handleEventDaySelect} />
```

</template>
</FrameworkTabs>

Each event produces a small colored dot below the day number. Multiple events on the same day show multiple dots. The `data` field is passed through for your use (e.g. to display event details on tap).

## Custom Styling

All style properties can be set via template attributes or programmatically.

<FrameworkTabs>
<template #angular>

```html
<NCalendar
  dayTextColor="#212121"
  todayTextColor="#FF6B6B"
  todayBackgroundColor="#2D2D2D"
  selectedDayTextColor="#FFFFFF"
  selectedDayBackgroundColor="#FF6B6B"
  selectedRangeColor="#FF6B6B40"
  weekendTextColor="#666666"
  monthHeaderTextColor="#FF6B6B"
  dayOfWeekTextColor="#999999">
</NCalendar>
```

</template>
<template #react>

```tsx
<nCalendar
  dayTextColor="#212121"
  todayTextColor="#FF6B6B"
  todayBackgroundColor="#2D2D2D"
  selectedDayTextColor="#FFFFFF"
  selectedDayBackgroundColor="#FF6B6B"
  selectedRangeColor="#FF6B6B40"
  weekendTextColor="#666666"
  monthHeaderTextColor="#FF6B6B"
  dayOfWeekTextColor="#999999"
/>
```

</template>
<template #vue>

```vue
<NCalendar
  dayTextColor="#212121"
  todayTextColor="#FF6B6B"
  todayBackgroundColor="#2D2D2D"
  selectedDayTextColor="#FFFFFF"
  selectedDayBackgroundColor="#FF6B6B"
  selectedRangeColor="#FF6B6B40"
  weekendTextColor="#666666"
  monthHeaderTextColor="#FF6B6B"
  dayOfWeekTextColor="#999999"
/>
```

</template>
<template #svelte>

```svelte
<nCalendar
  dayTextColor="#212121"
  todayTextColor="#FF6B6B"
  todayBackgroundColor="#2D2D2D"
  selectedDayTextColor="#FFFFFF"
  selectedDayBackgroundColor="#FF6B6B"
  selectedRangeColor="#FF6B6B40"
  weekendTextColor="#666666"
  monthHeaderTextColor="#FF6B6B"
  dayOfWeekTextColor="#999999"
/>
```

</template>
<template #solid>

```jsx
<nCalendar
  dayTextColor="#212121"
  todayTextColor="#FF6B6B"
  todayBackgroundColor="#2D2D2D"
  selectedDayTextColor="#FFFFFF"
  selectedDayBackgroundColor="#FF6B6B"
  selectedRangeColor="#FF6B6B40"
  weekendTextColor="#666666"
  monthHeaderTextColor="#FF6B6B"
  dayOfWeekTextColor="#999999"
/>
```

</template>
</FrameworkTabs>

## Programmatic Control

### Scrolling

```typescript
// Scroll to today
calendar.goToToday(true);

// Scroll to a specific month
calendar.scrollToMonth(2026, 6, true);

// Scroll to a specific date
calendar.scrollToDate(new Date(2026, 5, 15), true);

// Navigate month by month
calendar.goToNextMonth(true);
calendar.goToPreviousMonth(true);
```

### Selection

```typescript
// Select a date
calendar.selectDate(new Date(2026, 2, 15));

// Deselect a date
calendar.deselectDate(new Date(2026, 2, 15));

// Select a range
calendar.selectDateRange(new Date(2026, 2, 1), new Date(2026, 2, 14));

// Get current selection
const dates: Date[] = calendar.getSelectedDates();

// Clear all selections
calendar.clearSelection();
```

### Refresh

Force a full rebuild of the calendar when needed:

```typescript
calendar.refresh();
```

## Properties

### Layout & Mode

| Property | Type | Default | Description |
|---|---|---|---|
| `displayMode` | `'month' \| 'week' \| 'year'` | `'month'` | Calendar display mode |
| `selectionMode` | `'none' \| 'single' \| 'multiple' \| 'range'` | `'single'` | How days are selected |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Scroll direction |
| `scrollPaged` | `boolean` | `false` | Snap to month/week boundaries |

### Date Range

| Property | Type | Default | Description |
|---|---|---|---|
| `minDate` | `Date` | 2 years ago | Start of scrollable range |
| `maxDate` | `Date` | 2 years ahead | End of scrollable range |
| `firstDayOfWeek` | `number` | `0` (Sun) | First day of week (0=Sun, 1=Mon...6=Sat) |

### Selection

| Property | Type | Default | Description |
|---|---|---|---|
| `selectedDates` | `Date[]` | `[]` | Currently selected dates (single/multiple) |
| `selectedDateRange` | `DateRange` | `undefined` | Currently selected range (range mode) |

### Events / Markers

| Property | Type | Default | Description |
|---|---|---|---|
| `events` | `CalendarEvent[]` | `[]` | Dot markers on days |

### Spacing

| Property | Type | Default | Description |
|---|---|---|---|
| `interMonthSpacing` | `number` | `0` | DIP between months |
| `verticalDayMargin` | `number` | `0` | DIP between day rows |
| `horizontalDayMargin` | `number` | `0` | DIP between day columns |

### Layout Options

| Property | Type | Default | Description |
|---|---|---|---|
| `pinDaysOfWeekToTop` | `boolean` | `true` | Sticky day-of-week header row |
| `outDateStyle` | `'endOfRow' \| 'endOfGrid'` | `'endOfRow'` | How trailing dates are shown |
| `monthColumns` | `number` | `3` | Columns in year view grid |

### Style

| Property | Type | Default |
|---|---|---|
| `dayTextColor` | `Color` | system |
| `dayFontSize` | `number` | `18` |
| `todayTextColor` | `Color` | accent |
| `todayBackgroundColor` | `Color` | transparent |
| `selectedDayTextColor` | `Color` | white |
| `selectedDayBackgroundColor` | `Color` | accent |
| `selectedRangeColor` | `Color` | light accent |
| `weekendTextColor` | `Color` | gray |
| `disabledDayTextColor` | `Color` | light gray |
| `outDateTextColor` | `Color` | very light gray |
| `monthHeaderTextColor` | `Color` | system |
| `monthHeaderFontSize` | `number` | `20` |
| `dayOfWeekTextColor` | `Color` | gray |
| `dayOfWeekFontSize` | `number` | `14` |

## Events

| Event | Data Type | Description |
|---|---|---|
| `daySelect` | `CalendarDayEventData` | A day was selected |
| `dayDeselect` | `CalendarDayEventData` | A day was deselected |
| `dateRangeDrag` | `CalendarDateRangeEventData` | Drag across days (range mode) |
| `scroll` | `CalendarScrollEventData` | During scroll |
| `scrollEnd` | `CalendarScrollEventData` | Scroll settled |
| `monthChanged` | `CalendarMonthEventData` | Visible month changed |
| `dayRender` | `CalendarDayRenderEventData` | Day cell rendered (custom styling) |

### Event Data Shapes

```typescript
interface CalendarDayEventData extends EventData {
  data: { day: CalendarDay };
}

interface CalendarMonthEventData extends EventData {
  data: { month: CalendarMonth };
}

interface CalendarDayRenderEventData extends EventData {
  data: {
    day: CalendarDay;
    view: any;       // native view reference
    isSelected: boolean;
    isInRange: boolean;
    isDisabled: boolean;
    events: CalendarEvent[];
  };
}
```

## Data Types

```typescript
interface CalendarDay {
  date: Date;
  day: number;       // 1-31
  month: number;     // 1-12
  year: number;
  position: DayPosition;
  isToday: boolean;
  isWeekend: boolean;
}

interface CalendarMonth {
  month: number;     // 1-12
  year: number;
}

interface DateRange {
  start: Date;
  end: Date;
}

interface CalendarEvent {
  date: Date;
  color?: string;
  data?: any;
}
```

## Methods

| Method | Description |
|---|---|
| `scrollToDate(date, animated?, position?)` | Scroll to a specific date |
| `scrollToMonth(year, month, animated?)` | Scroll to a specific month |
| `goToToday(animated?)` | Scroll to the current date |
| `goToNextMonth(animated?)` | Scroll forward one month |
| `goToPreviousMonth(animated?)` | Scroll back one month |
| `selectDate(date)` | Programmatically select a date |
| `deselectDate(date)` | Programmatically deselect a date |
| `selectDateRange(start, end)` | Programmatically select a range |
| `clearSelection()` | Clear all selections |
| `getSelectedDates()` | Returns `Date[]` of selected dates |
| `refresh()` | Force a full calendar rebuild |

## Platform Notes

### iOS

- Uses Airbnb's [HorizonCalendar](https://github.com/airbnb/HorizonCalendar) via CocoaPods
- Vertical month view supports pinned day-of-week headers (`pinDaysOfWeekToTop`)
- Week view is implemented as a constrained single-row CalendarView

### Android

- Uses [kizitonwose Calendar](https://github.com/kizitonwose/Calendar) via Gradle
- Native `CalendarView`, `WeekCalendarView`, and `YearCalendarView` for each display mode
- Range selection renders with Airbnb-style start/end circles and connecting band
- Day-of-week header row is managed natively with proper locale support
- Requires `coreLibraryDesugaring` for `java.time` APIs on older Android versions

## License

Apache License Version 2.0
