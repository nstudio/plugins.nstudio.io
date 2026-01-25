# Onfido

Identity verification and document scanning with Onfido SDK for NativeScript.

## Installation

```bash
npm install @nstudio/nativescript-onfido
```

## Reference

- [Onfido Android SDK](https://documentation.onfido.com/sdk/android/)
- [Onfido iOS SDK](https://documentation.onfido.com/sdk/ios/)

## Usage

### Initialize

```typescript
import { OnfidoUtils, Onfido, OnfidoCaptureType } from '@nstudio/nativescript-onfido';

OnfidoUtils.init('<your-token>', '<your-app-id>');
```

### Start Verification Flow

```typescript
Onfido.debugMode = true;

Onfido.start({
  sdkToken: token,
  flowSteps: {
    welcome: true,
    captureDocument: {},
    captureFace: {
      type: OnfidoCaptureType.PHOTO,
    },
  },
}).then(data => {
  console.log('Verification complete:', data);
}).catch((error) => {
  console.error('Verification failed:', error);
});
```

## Configuration Options

### Flow Steps

| Step | Description |
| --- | --- |
| `welcome` | Show welcome screen |
| `captureDocument` | Document capture step |
| `captureFace` | Face capture step |

### Capture Types

| Type | Description |
| --- | --- |
| `OnfidoCaptureType.PHOTO` | Capture a photo |
| `OnfidoCaptureType.VIDEO` | Capture a video |

### Document Types

Configure `captureDocument` to specify document types:

```typescript
captureDocument: {
  docType: OnfidoDocumentType.PASSPORT,
  countryCode: 'USA'
}
```

## API Reference

### `OnfidoUtils.init(token, appId)`

Initialize the Onfido SDK.

### `Onfido.start(config)`

Start the verification flow. Returns a Promise.

### `Onfido.debugMode`

Set to `true` to enable debug logging.

## Platform Notes

### iOS

Ensure camera permissions are configured in `Info.plist`:

```xml
<key>NSCameraUsageDescription</key>
<string>We need camera access for identity verification</string>
```

### Android

Add camera permission to your AndroidManifest.xml:

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

## License

Apache License Version 2.0
