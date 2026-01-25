# ExoPlayer

NativeScript plugin that uses the ExoPlayer video player on Android and AVPlayerViewController on iOS to play local and remote videos.

## Installation

```bash
npm install @nstudio/nativescript-exoplayer
```

## Platform Controls

| Android | iOS |
| --- | --- |
| [Google ExoPlayer](https://github.com/google/ExoPlayer) | [iOS AVPlayer](https://developer.apple.com/library/prerelease/ios/documentation/AVFoundation/Reference/AVPlayer_Class/index.html) |

## Usage

### NativeScript Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:exoplayer="@nstudio/nativescript-exoplayer">
  <StackLayout>
    <exoplayer:Video 
      id="nativeexoplayer"
      controls="true" 
      finished="{{ videoFinished }}"
      loop="true" 
      autoplay="false" 
      height="280"
      src="~/videos/big_buck_bunny.mp4" />
  </StackLayout>
</Page>
```

### Angular

```typescript
import { registerElement } from "@nativescript/angular";
import { Video } from '@nstudio/nativescript-exoplayer';

registerElement("Video", () => Video);
```

```html
<Video
  src="https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
  autoplay="true"
  height="300">
</Video>
```

## Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | string | - | **Required.** Video file path or URL |
| `srcType` | number | 0 | Android only: 0=DETECT, 1=SS, 2=DASH, 3=HLS, 4=OTHER |
| `autoplay` | boolean | false | Start playing immediately |
| `controls` | boolean | false | Show native playback controls |
| `muted` | boolean | false | Mute the video |
| `loop` | boolean | false | Loop playback |
| `fill` | VideoFill | - | Video fill mode |
| `enableSubtitles` | boolean | false | Enable subtitle support |
| `subtitles` | string | - | Path to .srt subtitle file |
| `backgroundAudio` | boolean | false | Play audio alongside existing audio |
| `observeCurrentTime` | boolean | false | Enable currentTimeUpdated event |

## Events

| Event | Description |
| --- | --- |
| `finished` | Video reached end of duration |
| `playbackReady` | Video is ready to play |
| `seekToTimeComplete` | Seek operation completed |
| `currentTimeUpdated` | Time updated (requires `observeCurrentTime`) |

## API Methods

| Method | Description |
| --- | --- |
| `play()` | Start playing |
| `pause()` | Pause playback |
| `seekToTime(ms)` | Seek to time in milliseconds |
| `getCurrentTime()` | Get current time in ms |
| `getDuration()` | Get duration in ms |
| `destroy()` | Destroy player and free resources |
| `mute(boolean)` | Mute/unmute video |
| `setVolume(vol)` | Set volume (0-1) |
| `getVideoSize()` | Get video dimensions |
| `getPlayer()` | Get native player instance |

### Android Only

| Method | Description |
| --- | --- |
| `stop()` | Stop playback and reset player |

## VideoFill Options

**Android:**
- `VideoFill.aspectFill` - Fill space, ignore aspect ratio

**iOS:**
- `VideoFill.default` - AVLayerVideoGravityResize
- `VideoFill.aspect` - AVLayerVideoGravityResizeAspect
- `VideoFill.aspectFill` - AVLayerVideoGravityResizeAspectFill

## iOS Audio Session

Set the audio session category for background playback:

```typescript
import { Video } from '@nstudio/nativescript-exoplayer';

Video.iosAudioSessionCategory = 'AVAudioSessionCategoryPlayback';
```

Available categories:
- `AVAudioSessionCategoryAmbient`
- `AVAudioSessionCategoryPlayback`
- `AVAudioSessionCategoryPlayAndRecord`
- `AVAudioSessionCategorySoloAmbient`
- And more...

## License

Apache License Version 2.0
