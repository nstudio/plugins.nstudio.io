# CardView

Material Design CardView component for NativeScript.

## Installation

```bash
npm install @nstudio/nativescript-cardview
```

## References

- [Material Design Card Spec](https://www.google.com/design/spec/components/cards.html)
- [CardView Android Documentation](http://developer.android.com/intl/zh-tw/reference/android/support/v7/widget/CardView.html)

## Usage

### NativeScript Core

```xml
<Page xmlns:Card="@nstudio/nativescript-cardview">
  <StackLayout>
    <Card:CardView class="cardStyle" margin="10" elevation="40" radius="5">
      <GridLayout rows="200, auto, auto" columns="auto, auto, *">
        <Image src="~/images/batman.jpg" stretch="aspectFill" colSpan="3" row="0" />
        <Label text="Batman wants to be friends?" textWrap="true" row="1" colSpan="3" />
        <Button text="DECLINE" row="2" col="0" />
        <Button text="ACCEPT" row="2" col="1" />
      </GridLayout>
    </Card:CardView>
  </StackLayout>
</Page>
```

```css
.cardStyle {
  background-color: #3489db;
  color: #fff;
}
```

### Angular

```typescript
import { registerElement } from '@nativescript/angular';
import { CardView } from '@nstudio/nativescript-cardview';

registerElement('CardView', () => CardView);
```

```html
<CardView class="cardStyle" margin="10" elevation="40" radius="1">
  <GridLayout rows="auto, auto" columns="*">
    <Image [src]="imageUrl" row="0" />
    <Label [text]="title" row="1" />
  </GridLayout>
</CardView>
```

### Vue

```javascript
import Vue from 'nativescript-vue';

Vue.registerElement('CardView', () => 
  require('@nstudio/nativescript-cardview').CardView
);
```

```html
<card-view margin="10" elevation="40" radius="1">
  <stack-layout>
    <label text="Hello World" />
  </stack-layout>
</card-view>
```

## Attributes

### Common

| Property | Description |
| --- | --- |
| `radius` | Controls the border-radius of the card |

### Android Only

| Property | Description |
| --- | --- |
| `elevation` | Sets the elevation (drop-shadow) of the card |

## iOS Note

Setting a `background-color` will help if you do not see the card on the page.

## License

Apache License Version 2.0
