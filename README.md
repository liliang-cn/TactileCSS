# Tactile CSS

A minimal neumorphic CSS library with outer, inner, and clay shadow styles. Physical material themes included.

<p align="center">
  <img src="images/1.png" alt="Tactile CSS Preview 1" />
</p>

<p align="center">
  <img src="images/2.png" alt="Tactile CSS Preview 2" />
</p>

<p align="center">
  <img src="images/3.png" alt="Tactile CSS Preview 3" />
</p>

<p align="center">
  <img src="images/4.png" alt="Tactile CSS Preview 4" />
</p>

<p align="center">
  <img src="images/5.png" alt="Tactile CSS Preview 5" />
</p>

<p align="center">
  <img src="images/6.png" alt="Tactile CSS Preview 6" />
</p>

<p align="center">
  <img src="images/7.png" alt="Tactile CSS Preview 7" />
</p>

## Features

- **Three Shadow Styles**: Outer (raised), Inner (sculpted), and Clay (fluffy claymorphism)
- **Six Themes**: Classic, Mono, Iron, Paper, Terminal, Warm
- **Zero Dependencies**: Pure CSS, no JavaScript required
- **Tailwind Plugin**: Optional Tailwind CSS integration
- **Tiny**: ~22KB minified

## Installation

### npm

```bash
npm install tactile-css
```

### CDN (jsDelivr)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tactile-css/dist/tactile.min.css">
```

### CDN (unpkg)

```html
<link rel="stylesheet" href="https://unpkg.com/tactile-css/dist/tactile.min.css">
```

### Download

- [tactile.css](https://github.com/liliang-cn/TactileCSS/blob/main/dist/tactile.css)
- [tactile.min.css](https://github.com/liliang-cn/TactileCSS/blob/main/dist/tactile.min.css)

## Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tactile-css/dist/tactile.min.css">
</head>
<body class="tactile">
  <div class="tactile-outer p-6 rounded-xl">
    Hello, Tactile!
  </div>
</body>
</html>
```

## Shadow Styles

### Outer (Raised)

Creates a raised, elevated effect.

```html
<div class="tactile-outer">Raised element</div>
<div class="tactile-outer tactile-sm">Small raised</div>
<div class="tactile-outer tactile-lg">Large raised</div>
```

### Inner (Sculpted)

Creates an inset, sculpted effect.

```html
<div class="tactile-inner">Inset element</div>
<div class="tactile-inner tactile-sm">Small inset</div>
```

### Clay (Claymorphism)

Creates a fluffy, inflated balloon-like effect with dual inner shadows and floating outer shadow.

```html
<div class="tactile-clay">Fluffy element</div>
<div class="tactile-clay tactile-lg">Large fluffy</div>
```

## Themes

Switch themes by adding `data-theme` attribute to `<html>` or any parent element.

```html
<html data-theme="iron">
```

| Theme | Description |
|-------|-------------|
| `classic` | Soft gray-blue (default) |
| `mono` | Black and white minimalist |
| `iron` | Dark cast iron, gym/fitness feel |
| `paper` | Warm paper, reading/memory cards |
| `terminal` | GitHub dark theme style |
| `warm` | Warm retro, cozy feel |

## Components

### Buttons

```html
<button class="tactile-button">Default</button>
<button class="tactile-button-primary">Primary</button>
<button class="tactile-button-clay">Clay Button</button>
<button class="tactile-button-clay-primary">Clay Primary</button>
```

### Input

```html
<input type="text" class="tactile-input" placeholder="Search...">
<input type="text" class="tactile-input-clay" placeholder="Clay input...">
```

### Cards

```html
<div class="tactile-card tactile-outer">Raised card</div>
<div class="tactile-card tactile-inner">Inset card</div>
<div class="tactile-card-clay">Clay card</div>
```

### FAB (Floating Action Button)

```html
<button class="tactile-fab tactile-fab-sm">+</button>
<button class="tactile-fab">+</button>
<button class="tactile-fab tactile-fab-lg">+</button>
<button class="tactile-fab-clay">+</button>
```

### Segmented Control

```html
<div class="tactile-segmented tactile-inner">
  <button class="tactile-segment">Day</button>
  <button class="tactile-segment tactile-active">Week</button>
  <button class="tactile-segment">Month</button>
</div>

<div class="tactile-segmented-clay">
  <button class="tactile-segment tactile-active">Day</button>
  <button class="tactile-segment">Week</button>
  <button class="tactile-segment">Month</button>
</div>
```

### Keypad

```html
<div class="tactile-keypad tactile-inner">
  <button class="tactile-key">1</button>
  <button class="tactile-key">2</button>
  <button class="tactile-key">3</button>
  <!-- ... -->
  <button class="tactile-key tactile-key-action">→</button>
</div>
```

### Keyboard

```html
<div class="tactile-keyboard tactile-inner">
  <div class="tactile-keyboard-row">
    <button class="tactile-keyboard-key">Q</button>
    <button class="tactile-keyboard-key">W</button>
    <!-- ... -->
  </div>
  <div class="tactile-keyboard-row">
    <button class="tactile-keyboard-key tactile-keyboard-key-wide">⇧</button>
    <!-- ... -->
  </div>
</div>
```

### Progress & Slider

```html
<div class="tactile-track tactile-inner">
  <div class="tactile-track-fill" style="width: 60%;"></div>
</div>

<div class="tactile-slider">
  <div class="tactile-slider-track tactile-inner"></div>
  <div class="tactile-slider-thumb tactile-outer" style="left: 40%;"></div>
</div>
```

### Radial Gauge

```html
<div class="tactile-gauge tactile-inner" style="--progress: 70%;">
  <div class="tactile-gauge-center">
    <span class="tactile-gauge-value">70%</span>
  </div>
</div>
```

### Colors

```html
<div class="tactile-outer tactile-primary">Primary</div>
<div class="tactile-outer tactile-success">Success</div>
<div class="tactile-outer tactile-danger">Danger</div>
<div class="tactile-outer tactile-warning">Warning</div>
<div class="tactile-outer tactile-info">Info</div>
```

## Tailwind CSS Integration

### Install

```bash
npm install tactile-css tailwindcss
```

### Configure

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tactile-css/tailwind'),
  ],
}
```

### Usage

```html
<!-- Combine Tactile shadows with Tailwind utilities -->
<div class="tactile-outer p-6 rounded-xl">
  Card with Tailwind spacing
</div>

<button class="tactile-button px-6 py-3 rounded-full font-semibold">
  Button with Tailwind styles
</button>

<!-- Use extended colors -->
<div class="bg-tactile-primary text-white p-4">
  Primary background
</div>
```

## CSS Variables

All theme values are available as CSS variables:

```css
:root {
  --tactile-bg: #e0e5ec;
  --tactile-surface: #e0e5ec;
  --tactile-primary: #8B5CF6;
  --tactile-primary-light: #A78BFA;
  --tactile-primary-dark: #6D28D9;
  --tactile-text: #374151;
  --tactile-text-muted: #6b7280;
  --tactile-text-inverse: #ffffff;
  --tactile-success: #10B981;
  --tactile-danger: #EF4444;
  --tactile-warning: #F59E0B;
  --tactile-info: #3B82F6;
  --tactile-offset: 6px;
  --tactile-blur: 12px;
  --tactile-radius-sm: 6px;
  --tactile-radius-md: 12px;
  --tactile-radius-lg: 20px;
}
```

## Customization

Override CSS variables to customize:

```css
:root {
  --tactile-primary: #ff6b6b;
  --tactile-bg: #f8f9fa;
}
```

Or create a custom theme:

```css
:root[data-theme="custom"] {
  --tactile-bg: #your-color;
  --tactile-surface: #your-color;
  --tactile-primary: #your-color;
  /* ... */
}
```

## Browser Support

Works in all modern browsers that support CSS variables and box-shadow.

## License

MIT
