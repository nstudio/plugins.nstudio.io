# Markdown View

A NativeScript view for displaying natively rendered Markdown.

Uses [Markwon](https://github.com/noties/Markwon) on Android and [TSMarkdownParser](https://github.com/laptobbe/TSMarkdownParser) on iOS.

## Installation

```bash
npm install @nstudio/nativescript-markdown-view
```

## Usage

### NativeScript Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" 
      xmlns:mv="@nstudio/nativescript-markdown-view">
  <StackLayout class="p-20">
    <mv:MarkdownView markdown="_This_ should be **bold**!" />
  </StackLayout>
</Page>
```

### Angular

```typescript
import { registerElement } from '@nativescript/angular';
import { MarkdownView } from '@nstudio/nativescript-markdown-view';

registerElement('MarkdownView', () => MarkdownView);
```

```html
<MarkdownView markdown="_This_ should be **bold**!"></MarkdownView>
```

### Other Flavors

```typescript
import { MarkdownView } from '@nstudio/nativescript-markdown-view';

// Vue
Vue.registerElement('MarkdownView', () => MarkdownView);

// React
registerElement('markdownview', () => MarkdownView);

// Svelte
registerNativeViewElement('markdownview', () => MarkdownView);

// Solid
registerElement('markdownview', MarkdownView);
```

## Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `markdown` | string | "" | The markdown content to render |

## Supported Markdown

Common markdown syntax is supported:

- **Bold**: `**text**` or `__text__`
- *Italic*: `*text*` or `_text_`
- Headers: `# H1`, `## H2`, `### H3`, etc.
- Lists: `- item` or `1. item`
- Links: `[text](url)`
- Code: `` `inline` `` or fenced blocks
- Blockquotes: `> quote`
- And more...

## Credits

Thank you to original author, [Florian Reifschneider](https://github.com/flore2003/nativescript-markdown-view)!

## License

Apache License Version 2.0
