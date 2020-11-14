# Bento Example

## Running locally

From the root folder (above this one), run:

```shell
yarn install # install dependencies
yarn bootstrap # lerna bootstrap
```

From this folder, run:

```shell
yarn start
```

## Structure

### src/design-system

An example design system that uses and extends the spec - providing a `createTheme` function that sets default values and allows individual apps to generate their own theme.

### src/app

An example app that uses the example design system.
