# Calendar

A full-featured native calendar view for NativeScript with month, week, and year display modes, multiple selection modes, event markers, custom styling, and programmatic control.

The plugin wraps two best-in-class native libraries:

- **iOS**: [HorizonCalendar](https://github.com/airbnb/HorizonCalendar) by Airbnb
- **Android**: [kizitonwose Calendar](https://github.com/kizitonwose/Calendar)

## Installation

```bash
npm install @nstudio/nativescript-calendar
```

## Usage

### NativeScript Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:cal="@nstudio/nativescript-calendar"
  navigatingTo="navigatingTo">
  <cal:NCalendar
    id="calendar"
    displayMode="month"
    selectionMode="single"
    orientation="vertical"
    interMonthSpacing="16"
    daySelect="{{ onDaySelect }}" />
</Page>
```

```typescript
import { EventData, Page } from '@nativescript/core';
import { NCalendar, CalendarDayEventData } from '@nstudio/nativescript-calendar';

export function navigatingTo(args: EventData) {
  const page = args.object as Page;
  page.bindingContext = {
    onDaySelect(args: CalendarDayEventData) {
      const day = args.data.day;
      console.log(`Selected: ${day.year}-${day.month}-${day.day}`);
    },
  };
}
```

### Angular

```typescript
import { registerElement } from '@nativescript/angular';
import { NCalendar } from '@nstudio/nativescript-calendar';

registerElement('NCalendar', () => NCalendar);
```

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

onDaySelect(args: CalendarDayEventData) {
  console.log('Selected:', args.data.day.date);
}
```

### Other Flavors

```typescript
import { NCalendar } from '@nstudio/nativescript-calendar';

// Vue
Vue.registerElement('NCalendar', () => NCalendar);

// React
registerElement('nCalendar', () => NCalendar);

// Svelte
registerNativeViewElement('nCalendar', () => NCalendar);

// Solid
registerElement('nCalendar', NCalendar);
```

## Display Modes

### Month (default)

The standard month view with continuous vertical or horizontal scrolling.

```xml
<NCalendar displayMode="month" />
```

### Week

A single-row week strip. Swipe left or right to navigate between weeks.

```xml
<NCalendar displayMode="week" />
```

### Year

A grid of mini-month calendars. Control the number of columns with `monthColumns`.

```xml
<NCalendar displayMode="year" monthColumns="3" />
```

## Selection Modes

### Single (default)

Tap to select one date. Tap again to deselect.

```xml
<NCalendar selectionMode="single" />
```

### Range

Tap a start date, then tap an end date. Dates in between are highlighted with a range band.

```xml
<NCalendar selectionMode="range" />
```

```typescript
calendar.on('daySelect', () => {
  const range = calendar.selectedDateRange;
  if (range) {
    console.log(`${range.start} to ${range.end}`);
  }
});
```

### Multiple

Tap to toggle individual dates on or off.

```xml
<NCalendar selectionMode="multiple" />
```

```typescript
const selected = calendar.getSelectedDates();
console.log(`${selected.length} dates selected`);
```

### None

Day taps are disabled. Useful for display-only calendars.

```xml
<NCalendar selectionMode="none" />
```

## Orientation & Paging

### Vertical Scroll (default)

Months flow top to bottom in a continuous scroll.

```xml
<NCalendar orientation="vertical" />
```

### Horizontal Paged

One month at a time. Swipe left or right to navigate.

```xml
<NCalendar orientation="horizontal" scrollPaged="true" />
```

## Events / Markers

Add colored dot markers to calendar days using the `events` property.

```typescript
import { CalendarEvent } from '@nstudio/nativescript-calendar';

const events: CalendarEvent[] = [
  { date: new Date(2026, 2, 3), color: '#E91E63', data: { title: 'Team Standup', time: '9:00 AM' } },
  { date: new Date(2026, 2, 3), color: '#2196F3', data: { title: 'Design Review', time: '2:00 PM' } },
  { date: new Date(2026, 2, 7), color: '#4CAF50', data: { title: 'Lunch with Sarah', time: '12:30 PM' } },
];

calendar.events = events;
```

Each event produces a small colored dot below the day number. Multiple events on the same day show multiple dots. The `data` field is passed through for your use (e.g. to display event details on tap).

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

## Styling

All style properties can be set via XML attributes or programmatically.

```xml
<NCalendar
  dayTextColor="#212121"
  dayFontSize="16"
  todayTextColor="#FF6B6B"
  todayBackgroundColor="#2D2D2D"
  selectedDayTextColor="#FFFFFF"
  selectedDayBackgroundColor="#FF6B6B"
  selectedRangeColor="#FF6B6B40"
  weekendTextColor="#666666"
  disabledDayTextColor="#E0E0E0"
  outDateTextColor="#CCCCCC"
  monthHeaderTextColor="#FF6B6B"
  monthHeaderFontSize="20"
  dayOfWeekTextColor="#999999"
  dayOfWeekFontSize="14" />
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
