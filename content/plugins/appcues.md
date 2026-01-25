# Appcues

Integrate Appcues experiences into your iOS and Android apps for user onboarding and in-app guidance.

## Installation

```bash
npm install @nstudio/nativescript-appcues
```

### Prerequisites

**Android**: Your application's `App_Resources/Android/app.gradle` must have:
```gradle
android {
  compileSdkVersion 33

  defaultConfig {
    minSdkVersion 21
  }
}
```

**iOS**: Target iOS 11+ to install, iOS 13+ to render content. In `App_Resources/iOS/Podfile`:
```ruby
platform :ios, '11.0'
```

## Usage

### Initialize the SDK

Initialize when your app launches:

```typescript
import { Application } from '@nativescript/core';
import { AppcuesSDK } from '@nstudio/nativescript-appcues';

Application.on(Application.launchEvent, () => {
  AppcuesSDK.init('APPCUES_ACCOUNT_ID', 'APPCUES_APPLICATION_ID');
});
```

Get your account ID and application ID from [Appcues Settings](https://studio.appcues.com/settings/account).

### Identify Users

Identify users to target content at the right time:

```typescript
// Identify a user
AppcuesSDK.identify('my-user-id');

// Identify with properties
AppcuesSDK.identify('my-user-id', { 
  company: "Appcues",
  plan: "enterprise"
});
```

### Track Events

Track user actions to trigger experiences:

```typescript
// Track event
AppcuesSDK.track("Sent Message");

// Track with properties
AppcuesSDK.track("Deleted Contact", { id: 123 });
```

### Track Screens

Track screen views:

```typescript
// Track screen
AppcuesSDK.screen("Contact List");

// Track with properties
AppcuesSDK.screen("Contact Details", { contactId: "abc" });
```

## API Reference

### `AppcuesSDK.init(accountId, applicationId)`

Initialize the SDK. Call once at app launch.

### `AppcuesSDK.identify(userId, properties?)`

Identify the current user with an optional properties object.

### `AppcuesSDK.track(eventName, properties?)`

Track a user event with optional properties.

### `AppcuesSDK.screen(screenName, properties?)`

Track a screen view with optional properties.

## Documentation

Full documentation is available at [https://docs.appcues.com/](https://docs.appcues.com/)

## License

Apache License Version 2.0
