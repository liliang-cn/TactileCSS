# Tactile Release Checklist

## Runtime

- Use `.node-version`
- Preferred commands:

```bash
fnm use
fnm exec --using=22.18.0 npm run build
```

## Standard release flow

1. Check worktree: `git status --short`
2. Bump version: `npm version X.Y.Z --no-git-tag-version`
3. Sync lockfile if needed: `npm install`
4. Verify versions:
   `node -p "require('./package.json').version + ' ' + require('./package-lock.json').version"`
5. Validate:
   `fnm exec --using=22.18.0 node --check src/react.mjs`
   `fnm exec --using=22.18.0 node --check src/vue.mjs`
   `fnm exec --using=22.18.0 npm run build`
   `npm pack --dry-run`
6. Commit release-ready changes
7. Create annotated tag: `git tag -a vX.Y.Z -m "vX.Y.Z"`
8. Push branch: `git push origin main`
9. Push tag: `git push origin vX.Y.Z`

## Lockfile repair flow

Use when CI fails on `npm ci` with package-lock drift:

1. Run `npm install`
2. Re-run `npm ci`
3. Commit `package-lock.json`
4. Push `main`
5. Re-tag only if the release tag must include the lockfile fix

## Re-tag flow

Use when the tag exists but points at the wrong commit:

```bash
git tag -d vX.Y.Z
git push origin :refs/tags/vX.Y.Z
git tag -a vX.Y.Z -m "vX.Y.Z"
git push origin vX.Y.Z
```

## Checks specific to this repo

- `dist/tactile.css` and `dist/tactile.min.css` must be regenerated after `src/index.css` changes
- React and Vue wrapper changes should ship with matching `.d.ts` updates
- README examples and export lists should match package exports
