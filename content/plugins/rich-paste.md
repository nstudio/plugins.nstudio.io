# Rich Paste

Rich paste and drag-and-drop support for NativeScript text inputs. Handles images, GIFs, files, and text from the clipboard with one shared TypeScript API across iOS and Android.

The plugin supports:

- Pasting images, GIFs, and static images from the clipboard
- Pasting files (PDF, RTF, HTML) from the clipboard
- Drag-and-drop of images and files into text inputs
- MIME-based accept filtering (`all`, `image/*`, `text/plain`, etc.)
- Drop-in replacements for TextField and TextView
- Automatic temp file management for pasted binary content

## Installation

```bash
npm install @nstudio/nativescript-rich-paste
```

## Usage

### NativeScript Core

Drop-in replacements for [TextField](https://docs.nativescript.org/ui/text-field) and [TextView](https://docs.nativescript.org/ui/text-view) which work identically but with enhanced rich paste features. Just append `RichPaste` to the end of the element name.

```xml
<Page xmlns:rp="@nstudio/nativescript-rich-paste">
  <StackLayout class="p-20">
    <rp:TextFieldRichPaste accept="all" hint="Paste rich data..." paste="{{ onPaste }}" />
    <rp:TextViewRichPaste accept="image/*" hint="Drop images here..." enableDragDrop="true" paste="{{ onPaste }}" drop="{{ onDrop }}" />
  </StackLayout>
</Page>
```

```typescript
import { EventData, Page } from '@nativescript/core';
import { PasteEventData } from '@nstudio/nativescript-rich-paste';

export function navigatingTo(args: EventData) {
  const page = args.object as Page;
  page.bindingContext = new DemoModel();
}

class DemoModel {
  onPaste(args: PasteEventData) {
    const payload = args.data;
    switch (payload.type) {
      case 'text':
        console.log('Text:', payload.value);
        break;
      case 'images':
        payload.items.forEach((img) => {
          console.log(img.uri, img.mimeType, img.animated);
        });
        break;
      case 'files':
        payload.items.forEach((file) => {
          console.log(file.name, file.mimeType, file.size);
        });
        break;
    }
  }

  onDrop(args: PasteEventData) {
    console.log('Dropped:', args.data);
  }
}
```

### Angular

```typescript
import { registerElement } from '@nativescript/angular';
import { TextFieldRichPaste, TextViewRichPaste } from '@nstudio/nativescript-rich-paste';

registerElement('TextFieldRichPaste', () => TextFieldRichPaste);
registerElement('TextViewRichPaste', () => TextViewRichPaste);
```

```html
<TextFieldRichPaste
  accept="all"
  hint="Paste rich data..."
  (paste)="onPaste($event)"
></TextFieldRichPaste>

<TextViewRichPaste
  accept="image/*"
  hint="Drop images here..."
  enableDragDrop="true"
  (paste)="onPaste($event)"
  (drop)="onDrop($event)"
></TextViewRichPaste>
```

### Other Flavors

```typescript
import { TextFieldRichPaste, TextViewRichPaste } from '@nstudio/nativescript-rich-paste';

// Vue
registerElement('TextFieldRichPaste', () => TextFieldRichPaste);
registerElement('TextViewRichPaste', () => TextViewRichPaste);

// React
registerElement('textFieldRichPaste', () => TextFieldRichPaste);
registerElement('textViewRichPaste', () => TextViewRichPaste);

// Svelte
registerNativeViewElement('textFieldRichPaste', () => TextFieldRichPaste);
registerNativeViewElement('textViewRichPaste', () => TextViewRichPaste);

// Solid
registerElement('textFieldRichPaste', TextFieldRichPaste);
registerElement('textViewRichPaste', TextViewRichPaste);
```

## Paste Payload

The `paste` and `drop` events emit a `PasteEventData` object whose `data` property is a discriminated union:

### Text

```typescript
interface PasteTextPayload {
  type: 'text';
  value: string;
}
```

### Images

```typescript
interface PasteImagesPayload {
  type: 'images';
  items: PasteImageItem[];
}

interface PasteImageItem {
  uri: string;        // file:// URI to a temp file
  mimeType: string;   // e.g. 'image/png', 'image/gif'
  width?: number;
  height?: number;
  animated: boolean;   // true for GIFs
}
```

### Files

```typescript
interface PasteFilesPayload {
  type: 'files';
  items: PasteFileItem[];
}

interface PasteFileItem {
  uri: string;        // file:// URI to a temp file
  mimeType: string;   // e.g. 'application/pdf'
  name?: string;
  size?: number;
}
```

### Unsupported

Returned when the clipboard contains data that does not match the `accept` filter.

```typescript
interface PasteUnsupportedPayload {
  type: 'unsupported';
  availableTypes: string[];
}
```

## Events

### paste

Emitted when rich content is pasted from the clipboard.

```typescript
import { PasteEventData } from '@nstudio/nativescript-rich-paste';

function onPaste(args: PasteEventData) {
  const payload = args.data;
  console.log('Paste type:', payload.type);
}
```

For text pastes, the default TextField/TextView behavior still applies (the text is inserted into the field) and the `paste` event is also fired.

### drop

Emitted when content is dragged and dropped onto the input. Requires `enableDragDrop="true"`.

```typescript
import { DropEventData } from '@nstudio/nativescript-rich-paste';

function onDrop(args: DropEventData) {
  const payload = args.data;
  console.log('Drop type:', payload.type);
}
```

## Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| accept | string | `'all'` | MIME filter for accepted paste content |
| enableDragDrop | boolean | `false` | Enable drag-and-drop support |

### accept filter

The `accept` property controls which content types are processed. Supported values:

- `'all'` — accept everything (default)
- `'image/*'` — accept all image types
- `'image/png'` — accept only PNG images
- `'image/gif'` — accept only GIF images
- `'text/plain'` — accept only plain text
- `'application/pdf'` — accept only PDF files
- Comma-separated — e.g. `'image/*,application/pdf'`

## Classes

- **TextFieldRichPaste** — extends NativeScript TextField
- **TextViewRichPaste** — extends NativeScript TextView

Both classes expose the same `accept`, `enableDragDrop` properties and emit `paste` and `drop` events.

## Temp File Management

Pasted binary content (images, files) is written to temporary files under the app's temp directory. You can clean up temp files at any time:

```typescript
import { PasteInputTempFiles } from '@nstudio/nativescript-rich-paste';

// Remove all temp files created by rich paste
PasteInputTempFiles.cleanupAll();
```

## Platform Notes

### iOS

- Uses custom UITextField/UITextView subclasses that intercept the native `paste:` action
- Reads from `UIPasteboard.generalPasteboard` with support for images, GIFs, file URLs, and UTI-based document types
- Drag-and-drop uses `UIDropInteraction` with a native delegate
- GIF animation is preserved by detecting `com.compuserve.gif` UTI and writing raw data to temp files
- Supports file reference URL resolution including Finder bookmark data

### Android

- Uses `OnReceiveContentListener` on API 31+ for unified paste and drag-and-drop handling
- Falls back to `onTextContextMenuItem` interception on older API levels
- Resolves MIME types via ContentResolver, file extension mapping, and ClipDescription
- Validates GIF files by checking the file header magic bytes
- Images are decoded via `BitmapFactory` and compressed to JPEG temp files

## License

Apache License Version 2.0
