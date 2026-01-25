# Persona

Identity verification and KYC flows with Persona SDK for NativeScript.

## Installation

```bash
npm install @nstudio/nativescript-persona
```

## Usage

### Initialize

**Important:** Call `Inquiry.init()` before the app launches:

```typescript
import { Inquiry } from '@nstudio/nativescript-persona';

Inquiry.init();
```

### Start Verification

Start the Inquiry flow with your template ID from [Persona Dashboard](https://withpersona.com/dashboard):

```typescript
import { Dialogs } from '@nativescript/core';
import { Inquiry, Environment } from '@nstudio/nativescript-persona';

Inquiry.fromTemplate('my_template_id')
  .environment(Environment.SANDBOX)
  .onComplete((inquiryId, status, fields) => {
    Dialogs.alert({
      title: 'Complete',
      message: `Inquiry ${inquiryId} completed with status "${status}".`,
      okButtonText: 'Ok',
    });
    console.log('Fields:', fields);
  })
  .onCanceled((inquiryId, sessionToken) => {
    Dialogs.alert({
      title: 'Canceled',
      message: `Inquiry ${inquiryId} was cancelled`,
      okButtonText: 'Ok',
    });
  })
  .onError((error) => {
    Dialogs.alert({
      title: 'Error',
      message: error.message,
      okButtonText: 'Ok',
    });
  })
  .build()
  .start();
```

## Configuration Examples

### Basic Template

```typescript
Inquiry.fromTemplate("my_template_id")
  .build()
  .start();
```

### With Environment

```typescript
Inquiry.fromTemplate("my_template_id")
  .environment(Environment.SANDBOX)
  .build()
  .start();
```

### With Reference ID

```typescript
Inquiry.fromTemplate("my_template_id")
  .referenceId("myReference")
  .build()
  .start();
```

### With Account ID

```typescript
Inquiry.fromTemplate("my_template_id")
  .accountId("act_W6thEnEU19gphPqq5uTzZ4Y8")
  .build()
  .start();
```

### With Pre-filled Fields

```typescript
import { Fields } from '@nstudio/nativescript-persona';

Inquiry.fromTemplate("my_template_id")
  .fields(
    Fields.builder()
      .string('nameFirst', 'Alexander')
      .string('nameLast', 'Smith')
      .build()
  )
  .build()
  .start();
```

### Resume Existing Inquiry

```typescript
Inquiry.fromInquiry("inq_JAZjHuAT738Q63BdgCuEJQre")
  .build()
  .start();
```

### Resume with Session Token

```typescript
Inquiry.fromInquiry("inq_JAZjHuAT738Q63BdgCuEJQre")
  .sessionToken("SOME_SESSION_TOKEN")
  .build()
  .start();
```

## API Reference

### `Inquiry.init()`

Initialize the Persona SDK. Must be called before app launches.

### `Inquiry.fromTemplate(templateId)`

Create an inquiry builder from a template ID.

### `Inquiry.fromInquiry(inquiryId)`

Resume an existing inquiry by ID.

### Builder Methods

| Method | Description |
| --- | --- |
| `.environment(env)` | Set environment (SANDBOX or PRODUCTION) |
| `.referenceId(id)` | Set reference ID |
| `.accountId(id)` | Set account ID |
| `.sessionToken(token)` | Set session token for resuming |
| `.fields(fields)` | Pre-fill inquiry fields |
| `.onComplete(callback)` | Handle completion |
| `.onCanceled(callback)` | Handle cancellation |
| `.onError(callback)` | Handle errors |
| `.build()` | Build the inquiry |
| `.start()` | Start the inquiry flow |

## License

Apache License Version 2.0
