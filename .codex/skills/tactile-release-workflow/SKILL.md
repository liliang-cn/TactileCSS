---
name: tactile-release-workflow
description: Release and version the Tactile CSS package, including lockfile sync, fnm/Node selection, build verification, npm pack checks, git commit creation, tag management, push, and publish preparation for this repository. Use when bumping versions, fixing CI/package-lock drift, creating or recreating tags, or preparing npm releases.
---

# Tactile Release Workflow

Use this skill when preparing or repairing a release for this repository.

## Workflow

1. Read [references/release-checklist.md](references/release-checklist.md) before changing versions or tags.
2. Ensure the repo uses Node `22.18.0` via `fnm use` or `fnm exec --using=22.18.0 ...`.
3. Sync `package.json` and `package-lock.json` before any release action.
4. If the release includes feature, export, theme, or usage changes, update the consumer-facing skill in `tactile-ui-builder/` before tagging.
5. Validate with build and pack checks before tagging.
6. Create the commit first, then tag, then push branch, then push tag.
7. If a tag points at the wrong commit, delete the local and remote tag and recreate it on the intended commit.

## Versioning

- Use `npm version <version> --no-git-tag-version` to bump package files without creating an automatic tag.
- Choose a new version when the existing tag already exists remotely.
- Keep `package.json` and `package-lock.json` aligned.

## Validation

Run these before tagging or publishing:

```bash
fnm exec --using=22.18.0 node --check src/react.mjs
fnm exec --using=22.18.0 node --check src/vue.mjs
fnm exec --using=22.18.0 npm run build
npm pack --dry-run
```

Run `npm install` when CI reports `npm ci` drift or lockfile mismatch.

## Git Operations

- Use non-interactive git commands only.
- Confirm the worktree is clean before tagging.
- Push `main` before or together with a release tag.
- When re-tagging, delete remote tag with `git push origin :refs/tags/<tag>`.

## Publish Readiness

- Confirm `package.json` exports include every public entrypoint that should ship.
- Confirm tarball contents contain all source entrypoints and generated CSS files.
- Confirm `tactile-ui-builder/` still matches the package's shipped usage surface when release-visible features changed.
- Do not publish if build artifacts are stale.
