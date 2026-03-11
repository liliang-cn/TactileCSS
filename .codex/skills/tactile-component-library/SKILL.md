---
name: tactile-component-library
description: Maintain and expand the Tactile CSS component library across its CSS source, generated dist files, React wrappers, Vue wrappers, TypeScript declarations, and README examples. Use when adding new components, updating existing components, changing class names, extending React/Vue exports, or keeping framework wrappers and docs in sync for this repository.
---

# Tactile Component Library

Use this skill when changing the design-system surface of this repository.

## Workflow

1. Read [references/component-map.md](references/component-map.md) before editing.
2. Identify the source-of-truth layer first:
   Usually `src/index.css` for styles, then `src/react.mjs` and `src/vue.mjs` for framework wrappers, then `src/react.d.ts` and `src/vue.d.ts`, then `README.md`.
3. Keep naming aligned across CSS classes, React exports, Vue exports, docs, and the consumer skill at `tactile-ui-builder/`.
4. When a feature, export, theme, or usage pattern changes, update the consumer-facing skill in `tactile-ui-builder/` so downstream users get current install and usage guidance.
5. Rebuild generated CSS with `fnm exec --using=22.18.0 npm run build` after touching `src/index.css`.
6. Validate syntax for wrapper files with:
   `fnm exec --using=22.18.0 node --check src/react.mjs`
   `fnm exec --using=22.18.0 node --check src/vue.mjs`
7. Run `npm pack --dry-run` before release-facing changes.

## Component Changes

- Add CSS primitives in `src/index.css` first.
- Keep component sections grouped and labeled consistently.
- Prefer composable primitives over monolithic widgets when a pattern will be reused.
- When adding interactive wrappers, expose a small API and keep class application deterministic.
- Mirror React and Vue capabilities unless the platform has a strong reason not to.

## Docs Expectations

- Update the React export list when exports change.
- Update the Vue section when Vue exports or behavior change.
- Add or adjust the HTML example under the matching component heading when a new visual pattern is introduced.
- Keep examples short and copyable.
- Keep `tactile-ui-builder/SKILL.md` and `tactile-ui-builder/references/usage-map.md` aligned with the current public package surface.

## Repository Rules

- Use `fnm` / Node `22.18.0` for builds in this repo.
- Treat `dist/tactile.css` and `dist/tactile.min.css` as generated outputs that must stay in sync with `src/index.css`.
- Do not ship wrapper exports without matching `.d.ts` changes.
- Prefer extending the existing tactile visual language instead of introducing a separate design direction.
