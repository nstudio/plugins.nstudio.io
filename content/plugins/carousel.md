# Carousel

A simple carousel component for NativeScript.

| Platform | Supported | Version | Native View |
| --- | :---: | :---: | :---: |
| iOS | ✅ | iOS 8.1+ | [DKCarouselView](https://github.com/manijak/DKCarouselView) |
| Android | ✅ | API 15+ | ViewPager with [PageIndicatorView](https://github.com/romandanylyk/PageIndicatorView) |

## Installation

```bash
npm install @nstudio/nativescript-carousel
```

## Demo

| iOS | Android |
| --- | --- |
| ![iOS](https://github.com/manijak/nativescript-carousel/raw/master/screenshots/ios_carousel.gif) | ![Android](https://github.com/manijak/nativescript-carousel/raw/master/screenshots/android_carousel.gif) |

## Usage

### NativeScript Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:carousel="@nstudio/nativescript-carousel">
  <carousel:Carousel 
    height="300" 
    showIndicator="true" 
    indicatorColor="#FF5722"
    selectedPage="0">
    <carousel:CarouselItem backgroundColor="#e67e22">
      <Label text="Slide 1" />
    </carousel:CarouselItem>
    <carousel:CarouselItem backgroundColor="#3498db">
      <Label text="Slide 2" />
    </carousel:CarouselItem>
  </carousel:Carousel>
</Page>
```

### With Data Binding

```xml
<carousel:Carousel items="{{ items }}" selectedPage="{{ selectedPage }}">
  <carousel:Carousel.itemTemplate>
    <StackLayout>
      <Image src="{{ image }}" />
      <Label text="{{ title }}" />
    </StackLayout>
  </carousel:Carousel.itemTemplate>
</carousel:Carousel>
```

## Common Attributes

| Property | Description |
| --- | --- |
| `items` | Data array for generating slides (use with `itemTemplate`) |
| `itemTemplate` | View template for each slide |
| `selectedPage` | Sets/Gets the active page by index |
| `showIndicator` | Shows or hides the page indicator |
| `indicatorColor` | Color of the active indicator |
| `indicatorColorUnselected` | Color of unselected indicators |
| `indicatorOffset` | Position offset for the indicator (x,y) |

## iOS Specific

| Property | Description |
| --- | --- |
| `finite` | If true, last slide wraps to first |
| `bounce` | Enable bounce at first/last page |
| `autoPagingInterval` | Auto-advance interval in seconds |
| `scrollEnabled` | Enable/disable user scroll |

## Android Specific

| Property | Description |
| --- | --- |
| `indicatorAnimation` | Animation type: `color`, `slide`, `scale`, `worm`, `thin_worm`, `fill`, `drop`, `none` |
| `indicatorAnimationDuration` | Animation duration in ms (default 500) |
| `indicatorAlignment` | `top` or `bottom` |
| `indicatorRadius` | Dot radius |
| `indicatorPadding` | Dot padding |

## Indicator Animations (Android)

| NONE | COLOR | SCALE | SLIDE |
| --- | --- | --- | --- |
| ![none](https://raw.githubusercontent.com/romandanylyk/PageIndicatorView/master/assets/anim_none.gif) | ![color](https://raw.githubusercontent.com/romandanylyk/PageIndicatorView/master/assets/anim_color.gif) | ![scale](https://raw.githubusercontent.com/romandanylyk/PageIndicatorView/master/assets/anim_scale.gif) | ![slide](https://raw.githubusercontent.com/romandanylyk/PageIndicatorView/master/assets/anim_slide.gif) |

| WORM | THIN_WORM | FILL | DROP |
| --- | --- | --- | --- |
| ![worm](https://raw.githubusercontent.com/romandanylyk/PageIndicatorView/master/assets/anim_worm.gif) | ![thin_worm](https://raw.githubusercontent.com/romandanylyk/PageIndicatorView/master/assets/anim_thin_worm.gif) | ![fill](https://raw.githubusercontent.com/romandanylyk/PageIndicatorView/master/assets/anim_fill.gif) | ![drop](https://raw.githubusercontent.com/romandanylyk/PageIndicatorView/master/assets/anim_drop.gif) |

## Limitations

- iOS: PagerIndicator animations not available
- Android: Auto-paging and infinite-paging not available
- Android: Carousel should be wrapped in GridLayout for indicator overlay

## License

Apache License Version 2.0
