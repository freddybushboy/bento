# 🍱 Bento - _a deliciously structured theme_

Bento is a theme spec and set of utilities for `styled-components` inspired by [Theme UI](https://github.com/system-ui/theme-ui) and [Nebula](http://github.com/ovotech/nebula).

Bento's primary use case is a **design system used by multiple brands and applications** - it allows for a structured, highly usable theme that can be extended at both the brand and application level.

As well as **outlining a suggested theme structure**, there are some concepts here that can be used independently:

- **ThemeComponents** a structured way of declaring components in the theme that can be overridden and extended using:
  - **Additional styles** - optional CSSObject where generic overrides can be applied.
  - **Variants** - optional set of named CSSObjects that can be applied using the `variant` prop on the component.
  - **Elevations** - 🚧 WIP: same concept as variants, but specifically for the concept of "elevations".
- **useMediaQueryUp** and **useMediaQueryDown** - utility functions to create media queries from the breakpoints defined in the theme. Additionally, the idea of `breakpointAliases`, which allows naming of the breakpoints.
- **useResponsiveStyle** - a utility function that applies array values responsively across the breakpoints declared in the theme. Also handles single values and treats them as not responsive.
- **createTheme** - a utility used by the design system to allow apps to easily extend the theme. Overriding tokens like `colors.primary` will also update everywhere that token is used in component.
- **ColorPalette** - a way of grouping a set of related colors with predefined AA relationships. WIP.

## Types

### Theme

The theme defines a set of values and constraints to keep consistency with the brand. The values in the theme can be used directly throughout applications.

"Components" add an extra layer, containing component-specific values ideally made up from the theme values above (see `/example`). Components also support "variants", "elevations", and "additional styles".

| Key                   | Type                                       | Description                                                                                |
| --------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `spaces`              | `string[];`                                | Spacing scale used for layouts. Multiples work well: `['0', '4px', '8px', '12px', ...etc]` |
| `responsiveSpaces`    | `Record<string, string[]>;`                | Named sets of responsive spaces                                                            |
| `sizes`               | `Record<string, ResponsiveValue<string>>;` | Common sizes not tied to space e.g. "touchArea"                                            |
| `colors`              | `Record<string, string>;`                  |                                                                                            |
| `palettes`            | `Record<string, ColorPalette>;`            |                                                                                            |
| `fontSizes`           | `string[];`                                |                                                                                            |
| `responsiveFontSizes` | `Record<string, string[]>;`                | Named sets of responsive font sizes                                                        |
| `fonts`               | `Record<string, string>;`                  |                                                                                            |
| `fontWeights`         | `Record<string, string>;`                  |                                                                                            |
| `lineHeights`         | `Record<string, string>;`                  |                                                                                            |
| `breakpoints`         | `string[];`                                |                                                                                            |
| `breakpointAliases`   | `Record<string, number>;`                  | Aliases for the breakpoint indices use for mediaQuery utils                                |
| `radii`               | `Record<string, string>;`                  |                                                                                            |
| `borderWidths`        | `Record<string, string>;`                  |                                                                                            |
| `borderStyles`        | `Record<string, string>;`                  |                                                                                            |
| `shadows`             | `Record<string, string>;`                  |                                                                                            |
| `opacities`           | `Record<string, string>;`                  |                                                                                            |
| `zIndices`            | `Record<string, string>;`                  |                                                                                            |
| `styles`              | `Record<string, CSSObject>;`               | Reusable styles/mixins/transitions. e.g. "focusRing"                                       |
| `components`          | `Record<string, ComponentTheme>;`          | Component styles                                                                           |

### ComponentTheme

Generic type that includes the properties to support variants, elevation, and additional styles. Any component-specific properties and customisations (e.g. "radioSize") can be included.

- **Variants** allow multiple "variant" styles to be defined which can be selected with the `variant` prop.

- **Elevations** works the same way as variants do, but are for defining "elevations" - sets of styles relevant to where the component appears in the context of "elevation". Elevations are selected with the `elevation` prop.

- **Additional styles** allow apps to override any additional styles that are not exposed through the theme. Additional styles apply to all variations and elevations but are less specific so can be overridden.

```tsx
type ComponentTheme<T = Record<string, unknown>> = {
  style?: CSSObject;
  variants?: {
    [k: string]: CSSObject;
  };
  elevations?: {
    [k: string]: CSSObject;
  };
} & T;
```

### ThemeComponent

Generic type to be added to "components", includes `variant` and `elevation`.

```tsx
const CTA = styled.button<ThemeComponent>(
  ({ theme, variant, elevation }) => css`
    ${componentStyle(theme.components.cta, variant, elevation)}
  `
);
```

### ResponsiveValue

Indicates a value that can be "responsive" - either a single value or a responsive array.

```tsx
type CTAComponent = ComponentTheme<{
  fontWeight: ResponsiveValue<string>;
  fontSize: ResponsiveValue<string>;
}>;

const cta: CTAComponent = {
  fontWeight: "bold",
  fontSize: ["16px", "18px"],
};
```

### ColorPalette

A group of colours containing a base, alt, contrast, and muted colour.

```tsx
const PrimaryPalette: ColorPalette = {
  base: "#0C7494",
  alt: "#096885",
  contrast: "#F3F7F9",
  muted: "#FFFFFF",
};
```

Palettes classify a set of colours with defined contrast relationships. Essentially, `base` and `alt` should both be meet AA contrast requirements against the "canvas" color (generally white). The `contast` and `muted` colours should meet AA contrast against `base` and `alt`.

Using palettes we can reliably put together components without needing to know what the colors are specifically. For example:

```tsx
const styleFromPalette = ({
  base,
  alt,
  contrast,
  muted,
}: ColorPalette): CSSObject => ({
  background: contrast,
  color: base,
  borderColor: base,
  ":hover": {
    background: muted,
    color: alt,
    borderColor: alt,
  },
});
```

## Utils

### Media queries

React hooks `useMediaQueryUp` and `useMediaQueryDown`, can take a breakpoint index or alias.

```tsx
useMediaQueryUp(1, "color: red;");
useMediaQueryUp("small", "color: red;");
```

### Styles

`componentStyle` is used to render the component styles (variants, elevation) for components. Accepts the ThemeComponent, variant, and elevation.

```tsx
componentStyle(cta, variant, elevation);
```

`useResponsiveStyle` is used to render a `ResponsiveValue`. Takes the css property, the responsive value, and optionally, a formatter.

```tsx
useResponsiveStyle("border-radius", cta.borderRadius);
useResponsiveStyle("border-radius", cta.borderRadius, formatPx);
```

## Practices

### 🚧 WIP: Spreading props

When building basic, single element components such as a button, spreading props is fairly straightforward and styled-components takes care of it.

```tsx
const CTA = styled.button<ThemeComponent>(
  ({ theme, variant, elevation }) => css`
    ${componentStyle(theme.components.cta, variant, elevation)}
  `
);
```

However, when building components that are made up of multiple elements, it can be less obvious where props will spread to. To provide flexibility when extending styles and variants it's recommended to use `componentStyle` on the uppermost element where possible - as well as the style and class props. Remaining props can be spread to the most _logical_ element and documented accordingly.

```tsx
const Field = styled.div<ThemeComponent>(
  ({ theme, variant, elevation }) => css`
    ${componentStyle(theme.components.field, variant, elevation)}
  `
);

type Props = JSX.IntrinsicElements["input"] & { label: string };
const TextField = ({ label, className, style, ...rest }: Props) => {
  return (
    <Field className={className} style={style}>
      <label>{label}</label>
      <input type="text" {...rest} />
    </Field>
  );
};
```

This allows variants and overrides that target all elements in the component, and make sure layout styles such as margin are applied to relevant outer element.

```tsx
const StyledField = styled(Field)`
  color: goldenrod;
  margin-top: 10px;

  input {
    border: 1px solid tomato;
  }
`;
```
