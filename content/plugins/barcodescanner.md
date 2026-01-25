# Barcode Scanner

Scan QR codes, barcodes, and more with native performance.

## Installation

```bash
npm install @nstudio/nativescript-barcodescanner
```

## Supported Barcode Types

### iOS and Android
- CODE_39, CODE_93, CODE_128
- DATA_MATRIX
- EAN_8, EAN_13
- ITF (also known as ITF14)
- PDF_417 (Android only when passed explicitly via `formats`)
- QR_CODE
- UPC_A, UPC_E

### Android Only
- CODABAR, MAXICODE, RSS_14

### iOS Only
- AZTEC, CODE_39_MOD_43, INTERLEAVED_2_OF_5

## iOS Permissions

Add to `App_Resources/iOS/Info.plist`:

```xml
<key>NSCameraUsageDescription</key>
<string>We need camera access to scan barcodes</string>
```

## Usage

### Scan (Single Mode)

```typescript
import { BarcodeScanner } from "@nstudio/nativescript-barcodescanner";

const barcodescanner = new BarcodeScanner();

barcodescanner.scan({
  formats: "QR_CODE, EAN_13",
  cancelLabel: "EXIT",
  message: "Place a barcode inside the viewfinder",
  showFlipCameraButton: true,
  preferFrontCamera: false,
  showTorchButton: true,
  beepOnScan: true,
  fullScreen: true,
  torchOn: false,
  resultDisplayDuration: 500,
  openSettingsIfPermissionWasPreviouslyDenied: true,
}).then((result) => {
  alert({
    title: "Scan result",
    message: "Format: " + result.format + ",\nValue: " + result.text,
    okButtonText: "OK"
  });
}, (errorMessage) => {
  console.log("No scan. " + errorMessage);
});
```

### Embedding the Scanner (iOS)

#### XML

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" 
      xmlns:Barcode="@nstudio/nativescript-barcodescanner">
  <iOS>
    <Barcode:BarcodeScannerView
      class="scanner-round"
      formats="QR_CODE, EAN_13"
      beepOnScan="true"
      reportDuplicates="true"
      preferFrontCamera="false"
      pause="{{ pause }}"
      scanResult="{{ onScanResult }}" />
  </iOS>
</Page>
```

#### Angular

```typescript
import { registerElement } from "@nativescript/angular";
registerElement("BarcodeScanner", () => 
  require("@nstudio/nativescript-barcodescanner").BarcodeScannerView
);
```

```html
<BarcodeScanner
  class="scanner-round"
  formats="QR_CODE, EAN_13"
  beepOnScan="true"
  reportDuplicates="true"
  preferFrontCamera="false"
  [pause]="pause"
  (scanResult)="onScanResult($event)">
</BarcodeScanner>
```

#### Vue

```typescript
Vue.registerElement('BarcodeScanner', () => 
  require('@nstudio/nativescript-barcodescanner').BarcodeScannerView
)
```

```html
<BarcodeScanner
  height="300"
  formats="QR_CODE, EAN_13, UPC_A"
  beepOnScan="true"
  reportDuplicates="true"
  :pause="pause"
  @scanResult="onScanResult"
  v-if="isIOS">
</BarcodeScanner>
```

## Scan Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `formats` | string | all | Comma-separated barcode formats |
| `cancelLabel` | string | 'Close' | iOS cancel button text |
| `message` | string | - | Android viewfinder message |
| `showFlipCameraButton` | boolean | false | Show camera flip button |
| `preferFrontCamera` | boolean | false | Use front camera |
| `showTorchButton` | boolean | false | Show flashlight toggle |
| `beepOnScan` | boolean | true | Play beep sound on scan |
| `fullScreen` | boolean | false | Full screen mode (iOS) |
| `torchOn` | boolean | false | Start with flash on |
| `resultDisplayDuration` | number | 1500 | Result display time (Android) |
| `orientation` | string | - | Lock orientation (Android) |

## API Methods

| Method | Description |
| --- | --- |
| `scan(options)` | Start scanning, returns Promise |
| `available()` | Check if camera is available |
| `hasCameraPermission()` | Check camera permission |
| `requestCameraPermission()` | Request camera permission |
| `stop()` | Stop scanning |

## License

Apache License Version 2.0
