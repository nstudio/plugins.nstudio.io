# Freshchat

In-app messaging and customer support with Freshchat SDK for NativeScript.

## Installation

```bash
npm install @nstudio/nativescript-freshchat
```

## Reference

- [iOS SDK Guide](https://support.freshchat.com/en/support/solutions/articles/50000000048-freshchat-ios-sdk-integration-steps)
- [Android SDK Guide](https://support.freshchat.com/en/support/solutions/articles/50000000207-freshchat-android-sdk-integration-steps)

## Usage

### Initialize

Initialize as early as possible in your app lifecycle:

```typescript
import { FreshChatSDK } from '@nstudio/nativescript-freshchat';

const appID = 'YOUR_APP_ID';
const appKey = 'YOUR_APP_KEY';
const domain = 'YOUR_DOMAIN.freshchat.com';

FreshChatSDK.init(appID, appKey, domain);
```

### Set User

Provide user information for support context:

```typescript
const user = FreshChatSDK.setUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phoneCountryCode: '1',
  phoneNumber: '5551234567'
});

if (user) {
  console.log('Freshchat user set!');
}
```

### Set User Properties

Capture additional metadata for segmentation:

```typescript
FreshChatSDK.setUserProperties({
  plan: 'premium',
  signupDate: '2024-01-15',
  accountId: 'acc_123'
});
```

### Track Events

Track user events for insights:

```typescript
FreshChatSDK.trackEvent('purchase_completed', {
  orderId: 'order_456',
  amount: 99.99
});
```

### Show Conversations

Open the conversations view:

```typescript
// Show all conversations
FreshChatSDK.showConversations();

// Show filtered by tags
FreshChatSDK.showConversations(['billing', 'support']);
```

### Show FAQs

Display the FAQ section:

```typescript
FreshChatSDK.showFAQs({
  showContactUsOnAppBar: true,
  showFaqCategoriesAsGrid: true,
  filterByTags: {
    tags: ['getting-started', 'payments'],
    title: 'Help Topics',
    type: 'ARTICLE'
  }
});
```

### User Identification & Restore

#### Set External ID

```typescript
FreshChatSDK.identifyUser('your-external-user-id', null);
```

#### Get Restore ID

```typescript
const restoreID = FreshChatSDK.getRestoreID();
// Save this ID in your backend
```

#### Restore User on New Device

```typescript
FreshChatSDK.identifyUser('your-external-user-id', savedRestoreID);
```

### Send Message

Send a message on behalf of the user:

```typescript
FreshChatSDK.sendMessage('How do I upgrade my plan?', 'billing');
FreshChatSDK.showConversations();
```

### Get Unread Count

```typescript
FreshChatSDK.getUnreadCount((count) => {
  console.log('Unread messages:', count);
});
```

### Reset User

Clear user data on logout:

```typescript
FreshChatSDK.resetUser(() => {
  console.log('User reset complete');
});
```

## FAQ Options

```typescript
interface FreshchatFAQOptions {
  showFaqCategoriesAsGrid?: boolean;
  showContactUsOnFaqScreens?: boolean;
  showContactUsOnFaqNotHelpful?: boolean;
  showContactUsOnAppBar?: boolean;
  filterByTags?: {
    tags: string[];
    title: string;
    type: 'ARTICLE' | 'CATEGORY';
  };
  filterContactUsByTags?: {
    tags: string[];
    title: string;
  };
}
```

## License

Apache License Version 2.0
