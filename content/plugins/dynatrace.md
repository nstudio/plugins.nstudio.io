# Dynatrace

Application performance monitoring with Dynatrace OneAgent for NativeScript.

## Installation

```bash
npm install @nstudio/nativescript-dynatrace
```

## Configuration

### Automatic Startup

Configure automatic startup in `dynatrace.config.js`:

```javascript
module.exports = {
  android: {
    config: 'dynatrace { configurations { defaultConfig { autoStart.enabled true } } }',
  },
  ios: {
    config: '<key>DTXAutoStart</key> <true/>',
  },
};
```

### Manual Startup

For manual startup, first disable auto-start:

```javascript
// dynatrace.config.js
module.exports = {
  android: {
    config: 'dynatrace { configurations { defaultConfig { autoStart.enabled false } } }',
  },
  ios: {
    config: '<key>DTXAutoStart</key> <false/>',
  },
};
```

Then start manually in your app:

```typescript
import { TNSDynatrace, DynatraceStartupConfiguration } from '@nstudio/nativescript-dynatrace';

TNSDynatrace.start(new DynatraceStartupConfiguration({ 
  beaconUrl: 'your-beacon-url',
  applicationId: 'your-application-id'
}));
```

## Usage

### Import

```typescript
import { TNSDynatrace } from '@nstudio/nativescript-dynatrace';
```

### Create Actions

Track user actions:

```typescript
const myAction = TNSDynatrace.enterAction('MyButton tapped');
// Perform the action
myAction.leaveAction();
```

### Create Sub-Actions

```typescript
const myAction = TNSDynatrace.enterAction('MyButton tapped');
const mySubAction = TNSDynatrace.enterAction('MyButton Sub Action');
// Perform actions
mySubAction.leaveAction();
myAction.leaveAction();
```

### Report Values

```typescript
const myAction = TNSDynatrace.enterAction('MyButton tapped');

// Report string value
myAction.reportStringValue('ValueName', 'ImportantValue');

// Report int value
myAction.reportIntValue('Count', 42);

// Report double value
myAction.reportDoubleValue('Price', 19.99);

// Report error
myAction.reportError('ErrorName', 500);

// Report event
myAction.reportEvent('EventName');

myAction.leaveAction();
```

### Identify User

Tag the current session with a user:

```typescript
TNSDynatrace.identifyUser('User XY');
```

### Report Errors

```typescript
TNSDynatrace.reportError('errorName', 500);
```

## Startup Configuration

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `beaconUrl` | string | null | **Required for manual startup.** Your Dynatrace beacon URL |
| `applicationId` | string | null | **Required for manual startup.** Your application ID |
| `reportCrash` | boolean | true | Report crashes |
| `certificateValidation` | boolean | true | Validate SSL certificates |
| `userOptIn` | boolean | false | Require user consent for data collection |

## Data Privacy

Control data collection levels based on user preferences:

```typescript
// Set data collection level
TNSDynatrace.setDataCollectionLevel(DataCollectionLevel.Performance);

// Available levels:
// - DataCollectionLevel.Off
// - DataCollectionLevel.Performance
// - DataCollectionLevel.UserBehavior
```

## License

Apache License Version 2.0
