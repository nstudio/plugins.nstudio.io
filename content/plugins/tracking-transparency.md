# Tracking Transparency

🕵️ A NativeScript Library for interacting with the App Tracking Transparency API for iOS 14+.

## Installation

```bash
npm install @nstudio/nativescript-tracking-transparency
```

## iOS Setup

Add the tracking usage description to `App_Resources/iOS/Info.plist`:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>$(PRODUCT_NAME) would like permission to track your activity across apps and websites owned by other companies.</string>
```

Customize the description string to explain why your app needs tracking permission.

## Usage

```typescript
import { 
  TrackingTransparency, 
  TrackingStatus 
} from '@nstudio/nativescript-tracking-transparency';
```

### Check Current Status

```typescript
const status = TrackingTransparency.getTrackingStatus();

switch (status) {
  case TrackingStatus.Authorized:
    console.log('Tracking authorized');
    // Enable tracking features
    break;
  case TrackingStatus.Denied:
    console.log('Tracking denied');
    // Disable tracking features
    break;
  case TrackingStatus.NotDetermined:
    console.log('Not determined - show prompt');
    // Request permission
    break;
  case TrackingStatus.Restricted:
    console.log('Tracking restricted');
    break;
  case TrackingStatus.Unavailable:
    console.log('Tracking API not available');
    // On Android or iOS < 14
    break;
}
```

### Request Permission

```typescript
TrackingTransparency.requestTrackingPermission().then(status => {
  if (status === TrackingStatus.Authorized) {
    // Enable tracking features
    console.log('User granted tracking permission');
  } else {
    // Disable tracking features
    console.log('User denied tracking permission');
  }
});
```

## Tracking Status Values

| Status | Description |
| --- | --- |
| `TrackingStatus.Unavailable` | API not available (Android or iOS < 14) |
| `TrackingStatus.Denied` | User explicitly denied permission |
| `TrackingStatus.Authorized` | User granted permission |
| `TrackingStatus.Restricted` | Device is restricted from showing the prompt |
| `TrackingStatus.NotDetermined` | User hasn't been asked yet |

## API Reference

### `TrackingTransparency.getTrackingStatus()`

Returns the current tracking authorization status.

**Returns:** `TrackingStatus`

### `TrackingTransparency.requestTrackingPermission()`

Requests tracking authorization from the user. Shows the system prompt on iOS 14+.

**Returns:** `Promise<TrackingStatus>`

## Best Practices

1. **Check before requesting**: Always check the current status before requesting permission.

2. **Explain the value**: Update your `NSUserTrackingUsageDescription` to clearly explain why tracking benefits the user.

3. **Handle all states**: Make sure your app works correctly regardless of the user's choice.

4. **Cross-platform**: On Android and iOS < 14, the status will be `Unavailable`. Handle this gracefully.

## Platform Notes

- **iOS 14+**: Full ATT support with system prompt
- **iOS < 14**: Returns `Unavailable`
- **Android**: Returns `Unavailable` (tracking is handled differently)

## License

Apache License Version 2.0
