# Intercom

Customer messaging platform integration with Intercom SDK for NativeScript.

## Installation

```bash
npm install @nstudio/nativescript-intercom
```

## Reference

- [Intercom Android SDK](https://developers.intercom.com/installing-intercom/docs/intercom-for-android)
- [Intercom iOS SDK](https://developers.intercom.com/installing-intercom/docs/intercom-for-ios)

## Usage

### Initialize

```typescript
import { IntercomModule } from '@nstudio/nativescript-intercom';

IntercomModule.init('<your-api-key>', '<your-app-id>');
```

Get your API key and App ID from the [Intercom Developer Hub](https://developers.intercom.com/).

### Show Messenger

Open the Intercom messenger:

```typescript
IntercomModule.displayMessenger();
```

### Hide Messenger

Close the Intercom messenger:

```typescript
IntercomModule.hideMessenger();
```

## API Reference

### `IntercomModule.init(apiKey, appId)`

Initialize the Intercom SDK. Call this early in your app lifecycle.

| Parameter | Type | Description |
| --- | --- | --- |
| `apiKey` | string | Your Intercom API key |
| `appId` | string | Your Intercom App ID |

### `IntercomModule.displayMessenger()`

Display the Intercom messenger UI.

### `IntercomModule.hideMessenger()`

Hide the Intercom messenger UI.

## Platform Setup

### iOS

Ensure you have the required permissions in your `Info.plist` if using push notifications or other Intercom features.

### Android

Follow the [Intercom Android setup guide](https://developers.intercom.com/installing-intercom/docs/intercom-for-android) for any additional configuration needed.

## License

Apache License Version 2.0
