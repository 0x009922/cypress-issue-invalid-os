# Cypress issue: invalid os data

## Repro

Prepare:

```shell
pnpm i
```

Direct check:

```
$ pnpm check-direct
platform info: 'darwin arm64'
```

In Cypress' `plugins/index.js`:

```
$ pnpm check-cy
```

![cypress screenshot](./cy-screenshot.png)

System info: `macOS 11.4 20F71 arm64`

