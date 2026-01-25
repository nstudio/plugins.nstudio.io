# Checkbox

A NativeScript plugin to provide a checkbox widget. Radio buttons are also possible.

## Installation

```bash
npm install @nstudio/nativescript-checkbox
```

## Platform Controls

| Android | iOS |
| --- | --- |
| [Android CheckBox](https://developer.android.com/reference/android/widget/CheckBox.html) | [BEMCheckBox](http://cocoapods.org/pods/BEMCheckBox) |

## Usage

### NativeScript Core

```xml
<Page
  xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:CheckBox="@nstudio/nativescript-checkbox">
  <StackLayout>
    <CheckBox:CheckBox 
      checked="{{ checkProp }}" 
      text="{{ myCheckText }}" 
      fillColor="{{ myCheckColor }}" 
      id="myCheckbox" />
    <CheckBox:CheckBox text="CheckBox Label" checked="false" />
  </StackLayout>
</Page>
```

```typescript
import { CheckBox } from '@nstudio/nativescript-checkbox';
import { Frame } from '@nativescript/core';

public toggleCheck() {
  const checkBox = Frame.topmost().getViewById('yourCheckBoxId');
  checkBox.toggle();
}

public getCheckProp() {
  const checkBox = Frame.topmost().getViewById('yourCheckBoxId');
  console.log('checked prop value = ' + checkBox.checked);
}
```

### Angular

```typescript
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';

@NgModule({
  imports: [TNSCheckBoxModule]
})
export class YourModule {}
```

```html
<StackLayout>
  <CheckBox #CB1 text="CheckBox Label" checked="false"></CheckBox>
  <button (tap)="toggleCheck()" text="Toggle it!"></button>
</StackLayout>
```

### Vue

```js
import { CheckBox } from '@nstudio/nativescript-checkbox';

Vue.registerElement('CheckBox', () => CheckBox, {
  model: {
    prop: 'checked',
    event: 'checkedChange'
  }
});
```

```html
<check-box :checked="isChecked" @checkedChange="isChecked = $event.value" />
```

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `checked` | boolean | Whether the checkbox is checked |
| `text` | string | Text label for the checkbox |
| `fillColor` | string | Color of the checkbox element |
| `boxType` | string | 'square' (default) or 'circle' for radio buttons |

## Events

| Event | Description |
| --- | --- |
| `checkedChange` | Fired when the checked state changes |

## API

| Method | Description |
| --- | --- |
| `toggle()` | Toggle the checked state |

## CSS Styling

| Property | Description |
| --- | --- |
| `color` | Set the text label color |
| `font-size` | Checkbox is sized to text (default 15) |
| `border-width` | Set the line width (iOS only) |

## Radio Buttons

Want to use radiobutton behavior? Set `boxType="circle"` and manage the state yourself to ensure only one option is selected at a time.

## License

Apache License Version 2.0
