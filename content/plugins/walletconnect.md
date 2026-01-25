# WalletConnect

Connect to crypto wallets with WalletConnect protocol for NativeScript.

## Installation

```bash
npm install @nstudio/nativescript-walletconnect
```

**Note:** Requires Android minSdk 23.

## Usage

### Create Connector

```typescript
import { WalletConnect } from '@nstudio/nativescript-walletconnect';

const connector = new WalletConnect({
  uri: 'wc:8a5e5bdc-a0e4-47...TJRNmhWJmoxdFo6UDk2WlhaOyQ5N0U=',
  clientMeta: {
    description: 'My Awesome App',
    url: 'https://myapp.com',
    icons: ['https://myapp.com/icon.png'],
    name: 'My App',
  },
});
```

### Subscribe to Events

#### Session Request

```typescript
connector.on('session_request', (error, payload) => {
  if (error) {
    throw error;
  }

  // Handle session request
  console.log('Peer ID:', payload.params[0].peerId);
  console.log('Peer Meta:', payload.params[0].peerMeta);
  
  // Approve or reject the session
});
```

#### Call Request

```typescript
connector.on('call_request', (error, payload) => {
  if (error) {
    throw error;
  }

  // Handle call request (e.g., eth_sign, eth_sendTransaction)
  console.log('Method:', payload.method);
  console.log('Params:', payload.params);
});
```

#### Disconnect

```typescript
connector.on('disconnect', (error, payload) => {
  if (error) {
    throw error;
  }

  // Clean up connector
});
```

### Manage Session

#### Approve Session

```typescript
connector.approveSession({
  accounts: [
    '0x4292...931B3',
    '0xa4a7...784E8',
  ],
  chainId: 1,
});
```

#### Reject Session

```typescript
connector.rejectSession({
  message: 'User rejected the session',
});
```

#### Kill Session

```typescript
connector.killSession();
```

### Manage Call Requests

#### Approve Request

```typescript
connector.approveRequest({
  id: 1,
  result: '0x41791102999c339c844880b23950704cc43aa840f3739e365323cda4dfa89e7a'
});
```

#### Reject Request

```typescript
connector.rejectRequest({
  id: 1,
  error: {
    code: -32000,
    message: 'User rejected the request'
  }
});
```

## API Reference

### Constructor Options

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `uri` | string | Yes | WalletConnect URI |
| `clientMeta` | object | Yes | Client metadata |

### Client Meta

| Property | Type | Description |
| --- | --- | --- |
| `description` | string | App description |
| `url` | string | App URL |
| `icons` | string[] | App icon URLs |
| `name` | string | App name |

### Events

| Event | Description |
| --- | --- |
| `session_request` | New session requested |
| `call_request` | RPC call requested |
| `disconnect` | Session disconnected |

### Methods

| Method | Description |
| --- | --- |
| `approveSession(params)` | Approve a session request |
| `rejectSession(params)` | Reject a session request |
| `killSession()` | End the current session |
| `approveRequest(params)` | Approve a call request |
| `rejectRequest(params)` | Reject a call request |

## License

Apache License Version 2.0
