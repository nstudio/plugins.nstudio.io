# Smartlook

[Smartlook](https://www.smartlook.com) SDK for NativeScript. Comprehensive product analytics and visual user insights.

## Installation

```bash
npm install @nstudio/nativescript-smartlook
```

### iOS Configuration

Configure your `nativescript.config.ts` to use the Swift Package:

```typescript
ios: {
  SPMPackages: [
    {
      name: "SmartlookAnalytics",
      libs: ["SmartlookAnalytics"],
      repositoryURL: "https://github.com/smartlook/analytics-swift-package.git",
      version: "2.2.4"
    }
  ]
}
```

## Usage

### Initialize

Start the SDK with your API key before the app boots:

```typescript
import { Application } from '@nativescript/core';
import { Smartlook } from '@nstudio/nativescript-smartlook';

Application.on(Application.launchEvent, () => {
  Smartlook.start('<your-api-key>');
});

// Bootstrap app...
```

### Set User

```typescript
Smartlook.setUser('user-123', 'John Doe', 'john@example.com', {
  plan: 'premium',
  company: 'Acme Inc'
});
```

### Track Events

```typescript
// Track simple event
Smartlook.trackEvent('button_clicked');

// Track with properties
Smartlook.trackEvent('purchase', {
  productId: 'prod-123',
  price: 29.99
});
```

### Track Navigation

```typescript
Smartlook.trackNavigationEvent('HomeScreen');
```

### Control Recording

```typescript
// Stop recording
Smartlook.stop();

// Check if recording
const isRecording = Smartlook.isRecording();

// Get session URL
const sessionUrl = Smartlook.sessionUrl(true); // with timestamp
```

### Sensitivity

Mark views as sensitive to hide them in recordings:

```typescript
Smartlook.setSensitivity(passwordField, true);
```

### Rendering Mode

Control what's visible in recordings:

```typescript
import { SmartlookRenderMode } from '@nstudio/nativescript-smartlook';

Smartlook.setRenderingMode(SmartlookRenderMode.Native);
```

## API Reference

| Method | Description |
| --- | --- |
| `start(key)` | Start recording with API key |
| `stop()` | Stop recording |
| `isRecording()` | Check if currently recording |
| `sessionUrl(withTimestamp?)` | Get current session URL |
| `setRenderingMode(mode)` | Set rendering mode |
| `getRenderingMode()` | Get current rendering mode |
| `setSensitivity(view, sensitive)` | Mark view as sensitive |
| `setUser(id, name?, email?, extraData?)` | Set user details |
| `trackEvent(name, properties?)` | Track custom event |
| `trackNavigationEvent(name)` | Track screen navigation |

## License

Apache License Version 2.0
