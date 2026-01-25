# Label Marquee

A Label which scrolls with a marquee effect when the text outgrows the available width.

## Installation

```bash
npm install @nstudio/nativescript-label-marquee
```

## Usage

### NativeScript Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:lm="@nstudio/nativescript-label-marquee">
  <StackLayout>
    <lm:LabelMarquee 
      text="Lorem Ipsum; this is a long string of text that will animate because it's longer than the width of the view."
      fadeLength="150" 
      scrollDuration="20">
    </lm:LabelMarquee>
  </StackLayout>
</Page>
```

### Angular

```typescript
import { registerElement } from '@nativescript/angular';
import { LabelMarquee } from '@nstudio/nativescript-label-marquee';

registerElement('LabelMarquee', () => LabelMarquee);
```

```html
<LabelMarquee 
  text="Lorem Ipsum; this is a long string of text that will animate."
  fadeLength="150" 
  scrollDuration="20">
</LabelMarquee>
```

### Other Flavors

```typescript
import { LabelMarquee } from '@nstudio/nativescript-label-marquee';

// Vue
Vue.registerElement('LabelMarquee', () => LabelMarquee);

// React
registerElement('labelMarquee', () => LabelMarquee);

// Svelte
registerNativeViewElement('labelMarquee', () => LabelMarquee);

// Solid
registerElement('labelMarquee', LabelMarquee);
```

## Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | string | - | The text to display |
| `labelize` | boolean | false | Turn off scrolling to display as normal Label |
| `fadeLength` | number | - | (iOS) Width of the fade effect on edges |
| `scrollDuration` | number | - | (iOS) Duration in seconds for one scroll cycle |

## Notes

- The marquee effect only activates when text is longer than the available width
- `fadeLength` and `scrollDuration` are iOS-only properties
- Set `labelize="true"` to disable the marquee effect

## License

Apache License Version 2.0
