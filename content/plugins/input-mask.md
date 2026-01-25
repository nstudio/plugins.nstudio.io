# Input Mask

Format user input and process only the characters valuable to your application. Use this plugin to format phone numbers, credit card numbers, and more.

This plugin makes the native libraries [InputMask (Android)](https://github.com/RedMadRobot/input-mask-android) and [InputMask (iOS)](https://github.com/RedMadRobot/input-mask-ios) compatible with NativeScript.

## Installation

```bash
npm install @nstudio/nativescript-input-mask
```

## Usage

### Angular

Register the element in your app module:

```typescript
import { registerElement } from '@nativescript/angular';
import { InputMask } from '@nstudio/nativescript-input-mask';

registerElement('InputMask', () => InputMask);
```

Use in your component:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-phone',
  template: `
    <StackLayout>
      <InputMask 
        mask="([000]) [000]-[0000]" 
        text="1235551111" 
        (maskedValueChange)="onMaskedValueChange($event)" 
        (completedChange)="onCompletedChange($event)">
      </InputMask>
    </StackLayout>
  `,
})
export class PhoneComponent {
  onMaskedValueChange(args) {
    console.log('Masked value:', args.value); // e.g. "(123) 555-1111"
  }

  onCompletedChange(args) {
    console.log('Completed:', args.value); // true when all required chars filled
  }
}
```

## Mask Syntax

Masks consist of blocks of symbols:

### `[]` - Block for User Input

- `0` - Mandatory digit. `[000]` allows "123"
- `9` - Optional digit. `[00099]` allows 3 to 5 digits
- `A` - Mandatory letter. `[AAA]` allows "abc"
- `a` - Optional letter. `[AAAaaa]` allows 3 to 6 letters
- `_` - Mandatory symbol (digit or letter)
- `-` - Optional symbol (digit or letter)

### `{}` - Fixed Symbols

Symbols within curly brackets are part of the extracted value but cannot be altered.

- `[00]-[00]` formats to "12-34", extracts "1234"
- `[00]{-}[00]` formats to "12-34", extracts "12-34"

## Mask Examples

| Mask | Description |
| --- | --- |
| `[00000000000]` | Simple number |
| `+1 ([000]) [000]-[0000]` | US phone number |
| `[0000]{-}[00]` | Date with separator |
| `[AAAA] [0000] [0000] [0000]` | Credit card |
| `8([000])[000]-[00]-[00]` | Russian phone |

## Properties

| Property | Default | Description |
| --- | --- | --- |
| `mask` | "" | The mask pattern to apply |
| `maskedValue` | "" | Formatted value with mask applied |
| `text` | "" | Raw extracted value |
| `completed` | false | True when all mandatory characters filled |

## Events

| Event | Description |
| --- | --- |
| `maskedValueChange` | Fired when the masked value changes |
| `completedChange` | Fired when completion status changes |

## Notes

- Masks can be changed on the fly
- The `text` property contains the extracted value (without mask formatting)
- The `maskedValue` property contains the formatted display value
- `InputMask` extends `TextField` so all TextField properties are available

## License

Apache License Version 2.0
