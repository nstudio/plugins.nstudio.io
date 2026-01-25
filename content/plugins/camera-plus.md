# Camera Plus

A NativeScript camera with all the bells and whistles which can be embedded inside a view.

## Installation

```bash
npm install @nstudio/nativescript-camera-plus
```

**Note for Android**: Add the following to your app.gradle:

```gradle
android {
  compileOptions {
    sourceCompatibility JavaVersion.VERSION_1_8
    targetCompatibility JavaVersion.VERSION_1_8
  }
}
```

## Usage

### Angular

```typescript
import { Component, NgZone } from '@angular/core';
import { CameraPlus, CameraLoadedEvent, PhotoCapturedEvent } from '@nstudio/nativescript-camera-plus';
import { registerElement } from '@nativescript/angular';

registerElement('CameraPlus', () => CameraPlus);

@Component({
  selector: 'app-camera',
  template: `
    <CameraPlus
      debug="true"
      confirmRetakeText="RETAKE!"
      confirmSaveText="CONFIRM!"
      enableVideo="true"
      showCaptureIcon="true"
      showFlashIcon="true"
      showGalleryIcon="true"
      showToggleIcon="true"
      (loaded)="cameraLoadedEvent($event)"
    ></CameraPlus>
  `
})
export class CameraComponent {
  public cam: CameraPlus;

  cameraLoadedEvent(event: CameraLoadedEvent): void {
    this.cam = event.object;
    this.cam.autoFocus = true;
  }
}
```

## Properties

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `debug` | boolean | false | If true, logs will be output in the console |
| `confirmPhotos` | boolean | true | Present a confirmation dialog before saving |
| `confirmRetakeText` | string | 'Retake' | Text for retake button |
| `confirmSaveText` | string | 'Save' | Text for save button |
| `saveToGallery` | boolean | true | Save captured photos to device gallery |
| `galleryPickerMode` | string | 'multiple' | 'single' or 'multiple' image selection |
| `showFlashIcon` | boolean | true | Show flash toggle button |
| `showToggleIcon` | boolean | true | Show camera toggle button |
| `showCaptureIcon` | boolean | true | Show capture button |
| `showGalleryIcon` | boolean | true | Show gallery button |
| `enableVideo` | boolean | false | Enable video recording |

## Methods

| Method | Description |
| --- | --- |
| `isCameraAvailable()` | Returns true if the device has a camera |
| `toggleFlash()` | Toggles the flash mode |
| `toggleCamera()` | Toggles between front/back camera |
| `chooseFromLibrary(opts?)` | Opens the device gallery |
| `takePicture(opts?)` | Takes a picture |
| `getFlashMode()` | Returns the current flash mode |
| `record(opts?)` | Starts recording video |
| `stop()` | Stops video recording |

## Events

| Name | Description |
| --- | --- |
| `errorEvent` | Emitted when an error occurs |
| `photoCapturedEvent` | Emitted when a photo is taken |
| `toggleCameraEvent` | Emitted when camera is toggled |
| `imagesSelectedEvent` | Emitted when images are selected from gallery |
| `videoRecordingStartedEvent` | Emitted when video starts recording |
| `videoRecordingFinishedEvent` | Emitted when video stops recording |
| `videoRecordingReadyEvent` | Emitted when video is ready to use |

## License

Apache License Version 2.0
