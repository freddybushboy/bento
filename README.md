**🚧 WIP: this project is an evolving set of ideas and is currently unpublished**

# 🍱 Bento - _for deliciously structured themes_

Bento provides a highly structured, customisable theme spec and utilities for `styled-components` that can be extended at both the brand and application level. Inspired by [Theme UI](https://theme-ui.com/theme-spec) and [Nebula](https://nebula.kaluza.com/).

As well as **outlining a suggested theme structure**, there are concepts and utilities that can be used independently:

- **Theme components** - a structured way of declaring components in the theme that can be overridden and extended using **variants**, **elevations**, and **additional styles**.
- **Responsive utilities** - apply styles responsively using the breakpoints defined in the theme.
- **Color palettes** - a way of grouping sets of related colors with predefined AA contrast relationships.
- **Practices** (🚧 WIP) - guidelines and best practices around building themes and components.

## Theme Spec

The theme defines a set of values and constraints to keep consistency with the brand. The values in the theme can be used directly throughout applications.

| Key                 | Type                                       | Description                                                                                |
| ------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `spaceScale`        | `string[];`                                | Spacing scale used for layouts. Multiples work well: `['0', '4px', '8px', '12px', ...etc]` |
| `spaces`            | `Record<string, ResponsiveValue<string>>;` | Named sets of responsive spaces                                                          |
| `sizes`             | `Record<string, ResponsiveValue<string>>;` | Common sizes not tied to space e.g. "touchArea"                                            |
| `colors`            | `Record<string, string>;`                  |                                                                                            |
| `palettes`          | `Record<string, ColorPalette>;`            |                                                                                            |
| `fontScale`         | `string[];`                                |                                                                                            |
| `fontSizes`         | `Record<string, ResponsiveValue<string>>;` | Named sets of responsive font sizes                                                       |
| `fonts`             | `Record<string, string>;`                  |                                                                                            |
| `fontWeights`       | `Record<string, string>;`                  |                                                                                            |
| `lineHeights`       | `Record<string, string>;`                  |                                                                                            |
| `breakpoints`       | `string[];`                                |                                                                                            |
| `breakpointAliases` | `Record<string, number>;`                  | Aliases for the breakpoint indices used for mediaQuery utils                               |
| `radii`             | `Record<string, string>;`                  |                                                                                            |
| `borderWidths`      | `Record<string, string>;`                  |                                                                                            |
| `borderStyles`      | `Record<string, string>;`                  |                                                                                            |
| `shadows`           | `Record<string, string>;`                  |                                                                                            |
| `opacities`         | `Record<string, string>;`                  |                                                                                            |
| `zIndices`          | `Record<string, string>;`                  |                                                                                            |
| `styles`            | `Record<string, CSSObject>;`               | Reusable styles/mixins/transitions e.g. "focusRing"                                       |
| `components`        | `Record<string, ComponentTheme>;`          | Theme components, see below                                                               |

## Theme Components

Theme components are components that can optionally be overidden and extended using the theme. To keep the theme as lightweight as possible, the base tokens are used directly in our components, but we call the `useComponentStyles` hook, which allows additional styles to be added to the theme where needed. As well as allowing for generic styles to be altered, theme components also support:

- **Variants** defined named sets of "variant" styles that can be conditionally applied to components using the `variant` prop.

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
  cta: ComponentTheme<{ borderRadius: string }>;
};

const components: Components = {
  cta: {
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

`useComponentStyle` is used to render the component styles (variants, elevation) for components. Accepts the name of the `ThemeComponent`. This should be called last. The `ThemeComponent` type adds the additional `variant` and `elevation` properties.

```tsx
const CTA = styled.button<ThemeComponent>`
  text-decoration: none;
  ${useComponentStyle("cta")}
`;

const Example = () => (
  <CTA variant="mission" elevation="raised">
    Example
  </CTA>
);
```

## Responsive utilities

### Media queries

React hooks `useMediaQueryUp` and `useMediaQueryDown`. First argument is the breakpoint, can take either a breakpoint index or alias defined in the theme. Second argument can be either a style string or a CSSObject.

```tsx
const CTA = styled.button`
  ${useMediaQueryUp(1, "color: red;")}
  ${useMediaQueryUp("small", "color: red;")}
`;
```

### Responsive styles

`useResponsiveStyle` is used to render a `ResponsiveValue` (either an array or single value). Takes the css property, the responsive value, and optionally, a formatter.

```tsx
const CTA = styled.button<ThemeComponent>(
  ({ theme: { radii } }) => css`
    ${useResponsiveStyle("border-radius", radii.standard)}
    ${useResponsiveStyle("border-radius", radii.standard, formatPx)}
  `
);
```

Can also be useful for exposing resposive values through props.

```tsx
const Spacer = styled.div<{ space: ResponsiveValue<string> }>(({ space }) =>
  useResponsiveStyle("margin-top", space)
);

const Example = () => <Spacer space={["10px", "20px"]} />;
```

## Color palettes

Color Palettes are a group of colours containing a base, alt, contrast, and muted colour. Palettes classify a set of colours with defined contrast relationships. Essentially, `base` and `alt` should both be meet AA contrast requirements against the "canvas" color (typically white). The `contrast` and `muted` colours should meet AA contrast against `base` and `alt`.

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

## Practices

### 🚧 WIP: Spreading props

When building basic, single element components such as a button, spreading props is fairly straightforward and styled-components takes care of it.

```tsx
const CTA = styled.button<ThemeComponent>(() => useComponentStyle("cta"));
```

However, when building components that are made up of multiple elements, it can be less obvious where props will spread to. To provide flexibility when extending styles and variants it's recommended to use `useComponentStyle` on the uppermost element where possible - as well as the style and class props. Remaining props can be spread to the most _logical_ element and documented accordingly.

```tsx
const Field = styled.div<ThemeComponent>(() => useComponentStyle("field"));

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
