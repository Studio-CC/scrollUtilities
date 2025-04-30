# ScrollHandler

A Lenis-powered smooth scroll handler for `Three.js` or DOM-based interactive experiences, with support for scroll animations, horizontal scrolling, and scroll-to triggers.

## Installation

```js
import { ScrollHandler } from './ScrollModules/ScrollHandler'
```

## Usage

### Configuration

```js
const scrollHandlerSettings = {

  scrollBreakpoint: 1280,

  wheelMultiplier: 0.5,
  duration: 1.2,
  lerp: 0.066,

  scrollTriggerDuration: scrollTriggerDuration,
  contentContainer: contentContainer,

}
```

### Initialization

```js
const scrollHandler = ScrollHandler(scrollHandlerSettings)
```

### Scroll Callback

```js
scrollHandler.onScroll((s) => {
  console.log('(Smooth) Scroll position:' + s)
})
```

## Available Scroll Animations

- **Translate** – Up, Down, Left, Right
- **Stick**
- **Fade**
- **Scale**

All are triggered via data attributes with configurable parameters:

- `data-scroll-direction`
- `data-scroll-strength`
- `data-scroll-trigger`
- `data-scroll-duration`

## Features

- Built on Lenis for smooth scrolling behavior
- Native horizontal scroll support with breakpoint toggle
- Scroll-triggered anchor jumps using `data-scroll-trigger`
- Configurable:
  - Scroll speed, strength, duration, easing
  - Breakpoint to enable/disable Lenis
  - Vertical/horizontal scroll mode
- Returns multiple utility methods:
  - `resetScroll()`
  - `toggleHorizontalScroll()`
  - `scrollTriggerHandler()`
  - `resize()`
  - `initModules()`
  - `onScroll(callback)`

## License

MIT

