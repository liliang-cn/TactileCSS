# Tactile Component Map

## File responsibilities

- `src/index.css`: source of truth for component and utility styles
- `dist/tactile.css`: generated expanded CSS
- `dist/tactile.min.css`: generated minified CSS
- `src/react.mjs`: React component wrappers and default export map
- `src/react.d.ts`: React type declarations and default export map
- `src/vue.mjs`: Vue component wrappers and default export map
- `src/vue.d.ts`: Vue type declarations and default export map
- `README.md`: install docs, export lists, HTML examples, React examples, Vue examples
- `package.json`: package exports, peer dependencies, release version
- `.node-version`: pinned Node runtime for local work

## Typical change matrix

### Add a new visual component

1. Add CSS in `src/index.css`
2. Rebuild `dist/tactile.css` and `dist/tactile.min.css`
3. Add React wrapper in `src/react.mjs`
4. Add React types in `src/react.d.ts`
5. Add Vue wrapper in `src/vue.mjs`
6. Add Vue types in `src/vue.d.ts`
7. Add README export lines and examples

### Add a styling-only utility

1. Add CSS in `src/index.css`
2. Rebuild dist files
3. Document in `README.md`
4. Add framework wrappers only if the utility is likely to be used as a component primitive

### Add a composite pattern

Prefer multiple small exports when the structure can be composed:

- Example pattern: modal shell + header + title + close + body + footer
- Example pattern: AI chat shell + message + message meta + message body + toolbar
- Example pattern: calendar shell + header + nav + weekdays + day grid + day cell

## Build and validation commands

```bash
fnm use
fnm exec --using=22.18.0 node --check src/react.mjs
fnm exec --using=22.18.0 node --check src/vue.mjs
fnm exec --using=22.18.0 npm run build
npm pack --dry-run
```

## House style

- Keep component names prefixed with `Tactile` in wrappers.
- Keep CSS classes prefixed with `tactile-`.
- Use lowercase hyphenated names for CSS sections and classes.
- Favor semantic props like `variant`, `tone`, `state`, `selected`, `active`, `today`, `muted`.
- Keep wrapper logic light; let CSS do most of the work.
