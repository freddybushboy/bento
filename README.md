# 🍱 Bento - _for deliciously structured themes_

Bento provides a highly structured, customisable theme spec and utilities for `styled-components that can be extended at both the brand and application level. Inspired by [Theme UI](https://theme-ui.com/theme-spec) and [Nebula](https://nebula.kaluza.com/).

As well as **outlining a suggested theme structure**, there are concepts and utilities that can be used independently:

- **Theme components** - a structured way of declaring components in the theme that can be overridden and extended using **variants**, **elevations**, and **additional styles**.
- **Responsive utilities** - apply styles responsively using the breakpoints defined in the theme.
- **Color palettes** - a way of grouping sets of related colors with predefined AA contrast relationships.
- **Practices** (🚧 WIP) - guidelines and best practices around building themes and components.

## Types

### Theme

The theme defines a set of values and constraints to keep consistency with the brand. The values in the theme can be used directly throughout applications.

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

Generic type that includes the properties to support variants, elevation, and additional styles. Any component-specific properties and customisations (e.g. "radioSize") can be included, ideally made up from the theme tokens (see [the example design system](example/src/design-system/theme.ts)).

- **Variants** defined named sets of "variant" styles that can be conditionally applied to components using the `variant` prop.

- **Additional styles** allow apps to add any styles that are not exposed through the theme by default. Additional styles apply to all variations and elevations but are less specific so can be overridden.

- **Elevations** (🚧 WIP) works the same way as variants do, but are for defining "elevations" - styles relevant to where the component appears in the context of "elevation". Elevations are selected with the `elevation` prop.

**Type:**

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

**Example usage:**

```tsx
type Components = {
  cta: ComponentTheme<{ borderRaduis: string }>;
};

const components: Components = {
  cta: {
    borderRadius: "10px",
    variants: {
      mission: {
        background: "pink",
      },
    },
    style: {
      textDecoration: "underline",
    },
  },
};
```

### ThemeComponent

Generic type to be added to components, includes `variant` and `elevation`.

```tsx
const CTA = styled.button<ThemeComponent>(
  ({ theme, variant, elevation }) => css`
    ${componentStyle(theme.components.cta, variant, elevation)}
  `
);

const Example = () => (
  <CTA variant="mission" elevation="raised">
    Example
  </CTA>
);
```

### ResponsiveValue

Indicates a value that can be "responsive" - either a single value or a responsive array. For use with `useResponsiveStyle`.

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

A group of colours containing a base, alt, contrast, and muted colour. Palettes classify a set of colours with defined contrast relationships. Essentially, `base` and `alt` should both be meet AA contrast requirements against the "canvas" color (typically white). The `contast` and `muted` colours should meet AA contrast against `base` and `alt`.

```tsx
const PrimaryPalette: ColorPalette = {
  base: "#0C7494",
  alt: "#096885",
  contrast: "#F3F7F9",
  muted: "#FFFFFF",
};
```

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

## Utilities

### Media queries

React hooks `useMediaQueryUp` and `useMediaQueryDown`, can take a breakpoint index or alias defined in the theme.

```tsx
const CTA = styled.button`
  ${useMediaQueryUp(1, "color: red;")}
  ${useMediaQueryUp("small", "color: red;")}
`;
```

### Styles

`componentStyle` is used to render the component styles (variants, elevation) for components. Accepts the `ThemeComponent`, `variant`, and `elevation`.

```tsx
const CTA = styled.button<ThemeComponent>(
  ({ theme: { cta }, variant, elevation }) => css`
    ${componentStyle(cta, variant, elevation)}
  `
);
```

`useResponsiveStyle` is used to render a `ResponsiveValue`. Takes the css property, the responsive value, and optionally, a formatter.

```tsx
const CTA = styled.button<ThemeComponent>(
  ({ theme: { cta } }) => css`
    ${useResponsiveStyle("border-radius", cta.borderRadius)}
    ${useResponsiveStyle("border-radius", cta.borderRadius, formatPx)}
  `
);
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
