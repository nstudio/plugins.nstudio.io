# Branch.io

Deep linking, mobile attribution, and analytics with Branch.io for NativeScript apps.

## Installation

```bash
npm install @nstudio/nativescript-branch
```

## Usage

Import `BranchIO` from your app's main entry point and call the `initSession` method before the app launches:

```typescript
import { BranchIO } from '@nstudio/nativescript-branch';

BranchIO.initSession();
```

## Configuration

### Android Setup

Follow the [Android basic integration guide](https://help.branch.io/developers-hub/docs/android-basic-integration#4-configure-app) to configure your Android app.

Key steps:
1. Add your Branch key to your Android manifest
2. Configure deep link routing
3. Add intent filters for your URL schemes

### iOS Setup

Follow the [iOS basic integration guide](https://help.branch.io/developers-hub/docs/ios-basic-integration) to configure your iOS app.

Key steps:
1. Add your Branch key to Info.plist
2. Configure Associated Domains
3. Handle Universal Links

## Features

Branch.io provides powerful features for mobile apps:

- **Deep Linking** - Direct users to specific content within your app
- **Attribution** - Track where your users come from
- **Analytics** - Understand user behavior and campaign performance
- **Smart Banners** - Display smart app banners on mobile web
- **QR Codes** - Generate and track QR code campaigns

## API Reference

### `BranchIO.initSession()`

Initialize the Branch session. Call this method from your app's main entry point before the app launches.

```typescript
import { BranchIO } from '@nstudio/nativescript-branch';

// Initialize Branch
BranchIO.initSession();
```

## Deep Link Handling

Branch allows you to handle deep links and route users to the appropriate content:

```typescript
import { BranchIO } from '@nstudio/nativescript-branch';

// Listen for deep link data
BranchIO.initSession((params) => {
  if (params['+clicked_branch_link']) {
    // User clicked a Branch link
    console.log('Deep link data:', params);

    // Route user based on deep link parameters
    if (params.product_id) {
      // Navigate to product page
    }
  }
});
```

## Creating Branch Links

Create Branch links programmatically to share content:

```typescript
const linkProperties = {
  feature: 'sharing',
  channel: 'email',
  campaign: 'product-launch',
  tags: ['tag1', 'tag2']
};

const branchUniversalObject = {
  canonicalIdentifier: 'product/123',
  title: 'Product Name',
  contentDescription: 'Product description',
  contentImageUrl: 'https://example.com/image.jpg'
};

// Generate a Branch link
const link = await BranchIO.generateShortUrl(
  branchUniversalObject,
  linkProperties
);
console.log('Share link:', link);
```

## Learn More

For complete documentation, visit the [Branch.io developers hub](https://help.branch.io/developers-hub/docs):

- [Android Integration](https://help.branch.io/developers-hub/docs/android-basic-integration)
- [iOS Integration](https://help.branch.io/developers-hub/docs/ios-basic-integration)
- [Branch Dashboard](https://dashboard.branch.io/)

## License

Apache License Version 2.0
