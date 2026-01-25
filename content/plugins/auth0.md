# Auth0

Auth0 authentication integration for NativeScript apps.

## Installation

```bash
npm install @nstudio/nativescript-auth0
```

## Usage

### Basic Setup

```typescript
import { Auth0 } from '@nstudio/nativescript-auth0';

const auth0Client = new Auth0({
  clientId: '<your-client-id>',
  domain: '<your-domain>.auth0.com'
});
```

### Web Authentication

Start the web authentication flow:

```typescript
try {
  const credentials = await auth0Client.webAuth.start();
  console.log('Access Token:', credentials.accessToken);
  console.log('ID Token:', credentials.idToken);
  console.log('Expires In:', credentials.expiresIn);
} catch (error) {
  console.error('Authentication failed:', error);
}
```

### Configuration

Get your credentials from the [Auth0 Dashboard](https://manage.auth0.com/):

1. Create a new Application (Native type)
2. Note your Client ID and Domain
3. Configure your callback URLs

### iOS Setup

Add your callback URL to `App_Resources/iOS/Info.plist`:

```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
    </array>
  </dict>
</array>
```

### Android Setup

Add your callback URL scheme to your Android manifest or gradle configuration as needed.

## API Reference

### `new Auth0(options)`

Create a new Auth0 client instance.

| Option | Type | Description |
| --- | --- | --- |
| `clientId` | string | Your Auth0 Client ID |
| `domain` | string | Your Auth0 domain |

### `auth0Client.webAuth.start()`

Start the web authentication flow. Returns a Promise with credentials:

```typescript
interface Credentials {
  accessToken: string;
  idToken: string;
  expiresIn: number;
  tokenType: string;
  refreshToken?: string;
  scope?: string;
}
```

## License

Apache License Version 2.0
