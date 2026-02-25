# TikTok

TikTok Business SDK (App Events) integration for NativeScript apps.

## Installation

```bash
npm install @nstudio/nativescript-tiktok
```

## Prerequisites

Before initializing the SDK, make sure you have:

- A TikTok Business account
- Access Token
- App ID
- TikTok App ID (single ID or multiple IDs)

Official TikTok docs:

- [TikTok Business SDK / App Events](https://business-api.tiktok.com/portal/docs?id=1739584951798785)

## Usage

### Initialize SDK

Initialize once when your app launches:

```typescript
import { Application } from '@nativescript/core';
import { BusinessSdk, Config, LogLevel } from '@nstudio/nativescript-tiktok';

Application.on(Application.launchEvent, async () => {
  const config = new Config(
    '<TIKTOK_ACCESS_TOKEN>',
    '<TIKTOK_APP_ID>',
    '<TIKTOK_SDK_APP_ID>'
  )
    .setLogLevel(LogLevel.Warning)
    .setFlushTimeInterval(15);

  config.debugMode = false;
  config.autoTracking = true;

  await BusinessSdk.initialize(config);
});
```

If auto tracking is disabled, start tracking manually:

```typescript
BusinessSdk.startTrack();
```

### Identify User

```typescript
BusinessSdk.identify(
  'external-user-id',
  'username',
  'user@example.com',
  '+11234567890'
);
```

Clear current user identity:

```typescript
BusinessSdk.logout();
```

### Track Events

Basic event:

```typescript
BusinessSdk.trackEvent({
  eventName: 'registration',
  eventId: 'evt-001',
  event: {
    type: 'registration',
    method: 'email',
  },
});
```

Typed standard event:

```typescript
import { StandardEvent } from '@nstudio/nativescript-tiktok';

BusinessSdk.trackEvent({
  eventName: StandardEvent.Purchase,
  eventId: 'order-1001',
  event: {
    type: StandardEvent.Purchase,
    content_type: 'product',
    content_id: 'sku_42',
    description: 'Premium Plan',
    currency: 'USD',
    value: '9.99',
  },
});
```

Flush queued events manually:

```typescript
BusinessSdk.flush();
```

Fetch deferred deep link:

```typescript
const deepLink = await BusinessSdk.fetchDeferredDeepLinkData();
console.log('Deferred deep link:', deepLink);
```

## API Reference

### Enums

#### `LogLevel`

```typescript
enum LogLevel {
  None = 0,
  Info = 1,
  Warning = 2,
  Debug = 3,
}
```

#### `StandardEvent`

Supported standard event names include:

- `achieveLevel`
- `addPaymentInfo`
- `addToCart`
- `addToWishlist`
- `adRevenue`
- `checkout`
- `completeTutorial`
- `createGroup`
- `createRole`
- `generateLead`
- `impressionLevelAdRevenue`
- `inAppADClick`
- `inAppADImpr`
- `installApp`
- `joinGroup`
- `launchAPP`
- `login`
- `purchase`
- `rate`
- `registration`
- `search`
- `spendCredits`
- `startTrial`
- `subscribe`
- `unlockAchievement`
- `viewContent`

### `Config`

#### `new Config(accessToken, appId, tiktokAppId)`

Create SDK configuration.

| Param | Type | Description |
| --- | --- | --- |
| `accessToken` | string | TikTok access token |
| `appId` | string | TikTok app ID |
| `tiktokAppId` | string \| string[] | TikTok SDK app ID or IDs |

#### Properties

| Property | Type | Description |
| --- | --- | --- |
| `paymentTracking` | boolean | Enable/disable payment tracking |
| `debugMode` | boolean | Enable/disable debug mode |
| `autoTracking` | boolean | Enable/disable automatic tracking |
| `launchTracking` | boolean | Enable/disable launch tracking |
| `retentionTracking` | boolean | Enable/disable retention tracking |
| `installTracking` | boolean | Enable/disable install tracking |

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `setFlushTimeInterval` | `(seconds: number) => this` | Set flush interval |
| `disableAutoEnhancedDataPostbackEvent` | `() => this` | Disable auto enhanced data postback event |
| `setIsLowPerformanceDevice` | `(isLowPerformanceDevice: boolean) => this` | Set low-performance device mode |
| `setLogLevel` | `(level: LogLevel) => this` | Set SDK log level |

### `BusinessSdk`

#### `BusinessSdk.initialize(config)`

Initialize SDK with provided `Config`. Returns `Promise<BusinessSdk>`.

#### `BusinessSdk.startTrack()`

Start tracking manually when auto tracking is disabled.

#### `BusinessSdk.identify(externalId, externalUserName, email, phoneNumber)`

Associate user identity to subsequent events.

#### `BusinessSdk.logout()`

Clear user identity from SDK state.

#### `BusinessSdk.flush()`

Immediately flush queued events.

#### `BusinessSdk.fetchDeferredDeepLinkData()`

Fetch deferred deep link data. Returns `Promise<string>`.

#### `BusinessSdk.trackEvent(options)`

Track custom or standard events.

```typescript
BusinessSdk.trackEvent({
  eventName: string;
  eventId?: string;
  event?: Events;
});
```

### Event Payload Types

The plugin exports typed event interfaces through `Events`, including:

- Generic event (`IEvent`)
- Content events (`AddToCartEvent`, `AddToWishlistEvent`, `CheckoutEvent`, `PurchaseEvent`, `ViewContentEvent`)
- Impression-level ad revenue events for:
  - `applovin_max_sdk`
  - `ironsource_sdk`
  - `admob_sdk`

For full typings, see [index.d.ts](https://github.com/nstudio/nativescript-plugins/blob/main/packages/nativescript-tiktok/index.d.ts).

## License

Apache License Version 2.0
