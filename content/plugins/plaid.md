# Plaid

Bank account linking with Plaid Link for financial apps.

## Installation

```bash
npm install @nstudio/nativescript-plaid
```

## Demo

![Plaid Demo](https://github.com/nstudio/nativescript-plugins/raw/master/packages/nativescript-plaid/demo.gif)

## Usage

This plugin opens the Plaid Link flow, which walks the user through finding their institution and linking their bank account. It opens the flow in a modal view and returns metadata for events, on exit, and on success.

### Basic Example

```typescript
import { PlaidLink } from '@nstudio/nativescript-plaid';

export class BankLinkingComponent {
  successPublicToken: string;

  open() {
    // Set an event listener for Plaid events
    PlaidLink.setLinkEventListener((event) => {
      console.log('Link Event:', event);
    });

    // Create a handler with your link token
    const handler = PlaidLink.createHandler({
      token: 'YOUR_LINK_TOKEN',
      onSuccess: (linkSuccess) => {
        console.log('Success:', linkSuccess);
        this.successPublicToken = linkSuccess.publicToken;
      },
      onExit: (linkExit) => {
        console.log('Exit:', linkExit);
      }
    });

    // Open the Plaid Link flow
    handler.open();
  }
}
```

## Getting a Link Token

You need to generate a link token from your server using the [Plaid API](https://plaid.com/docs/api/tokens/).

```typescript
// Example: Fetch link token from your backend
async function getLinkToken(): Promise<string> {
  const response = await fetch('https://your-api.com/create-link-token');
  const data = await response.json();
  return data.link_token;
}
```

## API Reference

### `PlaidLink.setLinkEventListener(callback)`

Set a listener for events during the Link flow.

```typescript
PlaidLink.setLinkEventListener((event) => {
  console.log('Event name:', event.eventName);
  console.log('Event metadata:', event.metadata);
});
```

### `PlaidLink.createHandler(config)`

Create a Plaid Link handler with the given configuration.

| Option | Type | Description |
| --- | --- | --- |
| `token` | string | Your Plaid link token (required) |
| `onSuccess` | function | Called when linking succeeds |
| `onExit` | function | Called when user exits the flow |

### `handler.open()`

Open the Plaid Link modal flow.

## Success Response

The `onSuccess` callback receives a `LinkSuccess` object:

```typescript
interface LinkSuccess {
  publicToken: string;
  metadata: {
    institution: {
      id: string;
      name: string;
    };
    accounts: Array<{
      id: string;
      name: string;
      type: string;
      subtype: string;
      mask: string;
    }>;
    linkSessionId: string;
  };
}
```

## Exit Response

The `onExit` callback receives a `LinkExit` object:

```typescript
interface LinkExit {
  error?: {
    errorCode: string;
    errorMessage: string;
  };
  metadata: {
    institution?: {
      id: string;
      name: string;
    };
    linkSessionId: string;
    status: string;
  };
}
```

## License

Apache License Version 2.0
