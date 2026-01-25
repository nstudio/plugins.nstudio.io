# Filterable Listpicker

A modal listpicker with search filtering capabilities for NativeScript.

The native listpickers on iOS and Android are not great for huge lists that users may want to filter. This plugin provides a modal that offers filtering capabilities.

## Installation

```bash
npm install @nstudio/nativescript-filterable-listpicker
```

## Demo

![Filterable Listpicker](https://github.com/kefahB/nativescript-filterable-listpicker/blob/master/assets/filterablelist.gif)

## Usage

### NativeScript Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" 
      xmlns:ui="@nstudio/nativescript-filterable-listpicker">
  <GridLayout>
    <StackLayout>
      <Button text="Pick Language" tap="{{ showPicker }}" />
      <Label text="{{ selection }}" />
    </StackLayout>
    
    <ui:FilterableListpicker 
      id="myfilter" 
      blur="dark" 
      hintText="Type to filter..."
      source="{{ listitems }}" 
      canceled="{{ cancelFilterableList }}" 
      itemTapped="{{ itemTapped }}" />
  </GridLayout>
</Page>
```

```typescript
export function showPicker() {
  page.getViewById('myfilter').show();
}

export function itemTapped(args) {
  alert(args.selectedItem + ' was tapped!');
}

export function cancelFilterableList() {
  console.log('User cancelled');
}
```

### Angular

```typescript
import { registerElement } from "@nativescript/angular";
import { FilterableListpicker } from '@nstudio/nativescript-filterable-listpicker';

registerElement("FilterableListpicker", () => FilterableListpicker);
```

```html
<GridLayout>
  <StackLayout>
    <Button text="Choose a Language" (tap)="showPicker()"></Button>
  </StackLayout>
  
  <FilterableListpicker 
    #myfilter 
    blur="dark" 
    hintText="Type to filter..." 
    [source]="listitems" 
    (canceled)="cancelFilterableList($event)" 
    (itemTapped)="itemTapped($event)">
  </FilterableListpicker>
</GridLayout>
```

```typescript
@ViewChild('myfilter') myfilter: ElementRef;

showPicker() {
  this.myfilter.nativeElement.show();
}

itemTapped(args) {
  alert(args.selectedItem);
}
```

## Source Array

You can supply either an array of strings or an array of objects:

### Simple Array

```typescript
listitems = ['JavaScript', 'TypeScript', 'Python', 'Java'];
```

### Object Array

```typescript
listitems = [
  {
    image: "https://example.com/bear.png",
    title: "Brown Bear",
    description: "Brown bear, what do you see?"
  },
  {
    title: "Red Bird",
    image: "http://example.com/bird.png"
  },
  {
    title: "Purple Cat",
    description: "Why are we teaching kids there are purple cats?"
  }
];
```

Object properties:
- `title` - **Required.** Display text (used for filtering)
- `image` - Optional. Image URL displayed on the left
- `description` - Optional. Smaller text below the title

## Autocomplete Mode

Use as autocomplete with remote data:

```typescript
const filterableListpicker = page.getViewById('myfilter');
filterableListpicker.isAutocomplete = true;
filterableListpicker.show();

filterableListpicker.autocomplete((data) => {
  // Fetch from API based on data.value
  http.getJSON(apiUrl + data.value).then((res) => {
    this.set("listitems", res.results);
  });
});
```

## Properties

| Property | Default | Description |
| --- | --- | --- |
| `source` | **Required** | Array of strings or objects |
| `hintText` | "Enter text to filter..." | Placeholder text for filter input |
| `listWidth` | 300 | Width of the modal |
| `blur` | - | Blur style: 'light' or 'dark' |
| `dimmerColor` | - | Background dimmer color |
| `focusOnShow` | true | Focus text field when shown |
| `enableSearch` | true | Show/hide search field |
| `showCancel` | true | Show/hide cancel button |
| `headingTitle` | - | Optional heading text |

## Events

| Event | Description |
| --- | --- |
| `itemTapped` | Fired when an item is selected |
| `canceled` | Fired when the modal is cancelled |

## API

| Method | Description |
| --- | --- |
| `show(container?)` | Show the picker |
| `autocomplete(callback)` | Set autocomplete callback |

## License

Apache License Version 2.0
