# Tactile CSS Consumer Map

Use this file when you need concrete package imports, theme choices, and component families while building with `tactile-css`.

## Install Paths

### Plain CSS / framework-agnostic

```bash
npm install tactile-css
```

```js
import 'tactile-css/css'
```

### React

```bash
npm install tactile-css react
```

```jsx
import 'tactile-css/css'
import { TactileButton, TactileCard, TactileTheme } from 'tactile-css/react'
```

### Vue 3

```bash
npm install tactile-css vue
```

```vue
<script setup>
import 'tactile-css/css'
import { TactileButton, TactileCard, TactileTheme } from 'tactile-css/vue'
</script>
```

### Tailwind

```bash
npm install tactile-css tailwindcss
```

```js
// tailwind.config.js
module.exports = {
  plugins: [require('tactile-css/tailwind')],
}
```

## Theme Choices

- `classic`: default soft gray-blue
- `mono`: grayscale minimal UI
- `iron`: dark cast-iron / fitness feel
- `paper`: warm reading / note-card feel
- `terminal`: dark GitHub-like UI
- `warm`: cozy retro look

Apply with:

```html
<html data-theme="paper">
```

or:

```jsx
<TactileTheme theme="paper">...</TactileTheme>
```

## Pick the Right Surface

- Use raw CSS classes when the user already has HTML or another framework.
- Use React wrappers when the user wants JSX components and prop-driven state.
- Use Vue wrappers when the user wants Vue 3 components and `v-model`.
- Use the Tailwind plugin when the project is already utility-first and only needs Tactile shadows/tokens layered in.

## Core Component Families

### Base UI

- Buttons: `tactile-button`, `tactile-button-primary`, `TactileButton`
- Surfaces/cards: `tactile-card`, `tactile-clay`, `TactileSurface`, `TactileCard`
- Inputs/forms: `tactile-input`, `tactile-select`, `tactile-textarea`, `TactileInput`, `TactileSelect`, `TactileTextarea`
- Navigation: `TactileSegmented`, `TactileTabs`, `TactileAccordion`
- Feedback: `TactileBadge`, `TactileModal`, `TactileToast`

### AI UI

- Chat shell: `TactileAIChat`
- Messages: `TactileAIMessage`, `TactileAIMessageMeta`, `TactileAIMessageBody`
- Actions: `TactileAIToolbar`, `TactileAIAction`
- Prompt entry: `TactileAIComposer`, `TactileAIComposerRow`, `TactileAIPrompt`
- Status and prompts: `TactileAIStatus`, `TactileAISuggestions`, `TactileAISuggestion`

### Time UI

- Native controls: `TactileDateInput`, `TactileTimeInput`
- Calendar: `TactileCalendar`, `TactileCalendarHeader`, `TactileCalendarGrid`, `TactileCalendarDay`
- Time display: `TactileTimeCard`, `TactileTimeLabel`, `TactileTimeValue`
- Analog clock: `TactileClock`

## Vue `v-model` Notes

Use `v-model` on:

- `TactileInput`
- `TactileTextarea`
- `TactileSelect`
- `TactileCheckbox`
- `TactileSwitch`
- `TactileSlider`
- `TactileAIPrompt`
- `TactileDateInput`
- `TactileTimeInput`

## Usage Rules

- Import `tactile-css/css` once near the app entrypoint.
- Keep examples small and copyable.
- Match the library naming exactly; imports come from `tactile-css/react` or `tactile-css/vue`, not separate npm packages.
- If the user needs total visual control over dropdown popovers or advanced interactions, note that raw browser controls have platform styling limits and may need custom composition.
