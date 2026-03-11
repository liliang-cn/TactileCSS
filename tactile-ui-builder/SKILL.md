---
name: tactile-ui-builder
description: Build interfaces with tactile-css in plain HTML/CSS, React, Vue, or Tailwind. Use when a user wants to install this package, choose between raw CSS classes and framework wrappers, apply Tactile themes, or compose neumorphic UI with the library's exported components in another project.
---

# Tactile UI Builder

Use this skill when the task is about consuming `tactile-css`, not maintaining this repository.

## Quick Start

1. Read [references/usage-map.md](references/usage-map.md).
2. Pick the integration path that matches the user's app:
   - Plain HTML/CSS for static pages or framework-agnostic markup.
   - React for JSX apps using `tactile-css/react`.
   - Vue for Vue 3 apps using `tactile-css/vue`.
   - Tailwind when the user wants Tactile shadows and tokens mixed with utility classes.
3. Import the stylesheet once with `import 'tactile-css/css'` unless the user is on a CDN-only setup.
4. Apply a theme early with `data-theme` or `TactileTheme`.
5. Prefer the smallest surface that solves the task:
   - Raw classes for existing markup.
   - React/Vue wrappers for componentized apps.
   - Tailwind plugin when the app is already utility-first.

## Integration Rules

- Default package install: `npm install tactile-css`
- React apps also need `react`; Vue apps also need `vue`.
- Do not import the CSS multiple times across app entrypoints.
- In React and Vue, use the exported wrappers first; drop to raw classes only when the wrapper surface does not cover the needed markup.
- In Vue, prefer `v-model` for supported inputs instead of manually wiring `modelValue`.
- For theme switches, use one of: `classic`, `mono`, `iron`, `paper`, `terminal`, `warm`.

## Component Selection

Use [references/usage-map.md](references/usage-map.md) for concrete imports and examples.

- General UI: buttons, cards, inputs, fields, segmented controls, tabs, badges, avatars, divider, modal, toast, accordion.
- Control objects: `TactileDisplay`, `TactileKnob`, `TactileMeter`.
- Input-heavy UI: `TactileInput`, `TactileSelect`, `TactileTextarea`, `TactileCheckbox`, `TactileSwitch`, `TactileSlider`.
- AI/chat UI: `TactileAIChat`, `TactileAIMessage`, `TactileAIToolbar`, `TactileAISuggestions`, `TactileAIComposer`, `TactileAIStatus`.
- Date/time UI: `TactileDateInput`, `TactileTimeInput`, `TactileCalendar*`, `TactileTimeCard*`, `TactileClock`.

## Response Pattern

When using this skill for a user request:

1. State the chosen integration path.
2. Provide the minimum install and import snippet.
3. Compose the requested UI with Tactile components or classes.
4. Mention theme choice if none was specified.
5. Keep examples copyable and aligned with the package exports.

## Boundaries

- This skill is for building with the library in another app.
- If the task is to add or change components inside this repository, use the maintainer workflow instead.
- If the user wants publish, release, or lockfile work, do not use this skill as the primary workflow.
