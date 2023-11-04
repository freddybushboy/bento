**🚧 WIP: this project is an evolving set of ideas and is currently unpublished**

# 🍱 Bento - _for deliciously structured themes_

Bento provides a highly structured, customisable theme spec and utilities for `styled-components` that can be extended at both the brand and application level. Inspired by [Theme UI](https://theme-ui.com/theme-spec) and [Nebula](https://nebula.kaluza.com/).

As well as **outlining a suggested theme structure**, there are concepts and utilities that can be used independently:

- **Theme components** - a structured way of declaring components in the theme that can be overridden and extended.
- **Theme utilities** - simple functions and components that work with your theme.
- **Theme spec** - a recommended on how to structure your theme.
- **Color palettes** - a way of grouping sets of related colors with predefined AA contrast relationships.
- **Practices** - guidelines and best practices around building themes and components.


## Theme structure

Bento utilities rely on the following theme properties. See the wider [theme spec recommendation](./docs/THEME_SPEC.md) for a more comprehensive spec.

| Key                 | Type                                       | Description                                                                                                  |
|---------------------|--------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| `spaceScale`        | `string[];`                                | An ascending spacing scale used for layouts. Multiples work well, e.g. `['0', '4px', '8px', '12px', ...etc]` |
| `sizes`             | `Record<string, ResponsiveValue<string>>;` | Named sets of responsive spaces or common sizes not tied to space e.g. "touchArea"                           |
| `breakpoints`       | `string[];`                                | An ascending set of breakpoints used when writing responsive styles, e.g. `['480px', '768px', '1208px']`     |
| `breakpointAliases` | `Record<string, number>;`                  | Aliases for the breakpoint indices used for mediaQuery utils                                                 |
| `components`        | `Record<string, ComponentTheme>;`          | Theme components, [see below](#theme-components)                                                                                  |


## Theme Components

Theme Components are designed with **brand-agnostic** component libraries in mind and allow components to be created in a way that can optionally be overridden and extended using the theme.

Theme Components make use of the `useComponentStyles` hook, which allows additional styles to be added to the theme where needed. Theme Components can be customised with:

- **Styles** generic custom styles to add to the component.
- **Variants** defined named sets of "variant" styles that can be conditionally applied to components using the `variant` prop.
- **Elevations** (🚧 WIP) works the same way as variants do, but are for defining "elevations" - styles relevant to where the component appears in the context of "elevation". Elevations are selected with the `elevation` prop.

### Adding Theme Components to your theme

Theme Components are declared in the theme by adding a `components` property of the type `Record<string, ComponentTheme>` (exported from bento as type `Components`).

```ts
import { Components } from "bento";

type Theme = { components: Components };

const theme: Theme = {
  components: {} // Customisations to Theme Components go here.
}
```

Lets create a Theme Component: "cta". When creating your components write them as you normally would, using the basic theme tokens followed by `useComponentStyle` which used to render the component styles (overrides, variants and elevation). Accepts the name of the `ThemeComponent`. This should be called last. The `ThemeComponent` type adds the additional `variant` and `elevation` properties to your component.

```ts
const CTA = styled.button<ThemeComponent>(({ theme: { radii } }) => `
  border-radius: ${radii.standard};
  ${useComponentStyle("cta")}
`);
```

Theme components can be customised by adding a `ComponentTheme` for it under the `components` property.

```tsx
const theme = {
  components: {
    cta: {
      variants: {
        promotion: {
          background: "pink",
        },
      },
      style: {
        textDecoration: "underline",
      },
    },
  }
};

const Example = () => (
  <CTA variant="promotion">
    Example
  </CTA>
);
```

The `ComponentTheme` works using styled component's `CSSObject` type. Any valid `CSSObject` can be passed to either `style` or to a names `variant` or `elevation`.

```ts
type ComponentTheme = {
  style?: CSSObject;
  variants?: Record<string, CSSObject>;
  elevations?: Record<string, CSSObject>;
};
```

## Media queries

### Media queries

Bento contains the media query hooks `useMediaQueryUp` and `useMediaQueryDown` which work with the `breakpoints` and `breakpointAliases` theme properties. First argument is the breakpoint which can either be a `breakpoints` index or a `breakpointAlias` key. The second argument can be either a style string or a `CSSObject`.

```ts
const CTA = styled.button`
  ${useMediaQueryUp(1, "color: red; background: green;")}
  ${useMediaQueryUp("small", { backgroundColor: 'red'})}
`;
```

### Responsive styles

The `useResponsiveStyle` hook works with the `breakpoints` theme property and is used to render a `ResponsiveValue` (either an array or single value). Takes the css property, the responsive value, and optionally, a formatter.

```ts
const CTA = styled.button<ThemeComponent>(
  ({ theme: { radii } }) => css`
    ${useResponsiveStyle("border-radius", radii.standard)}
    ${useResponsiveStyle("border-radius", radii.standard, formatPx)}
  `
);
```

A `ResponsiveValue` allows for values to be declared in relation to **ascending breakpoints** in the `breakpoints` theme property - the first value in an array will be the base style and `undefined`` values are skipped. For example, if we had two breakpoints we could create the following responsive style:

```ts
const theme = {
  breakpoints: ['480px', '768px']
}

const CTA = styled.button`
  ${useResponsiveStyle("padding", ['10px', undefined, '30px'])}
`,
```

This would result in the following `padding` values:

- `10px` the base value.
- `30px` from a screen width of `768px` and above.

When a single value is passed to `useResponsiveStyle` it will be used as the base style, without any media queries. This defensive approach allows flexibility in the theme in a multi-brand context where some brands may want certain styles to be static rather than change based on screen size.

## Spacing

TODO: add spacing components