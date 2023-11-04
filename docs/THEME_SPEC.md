**🚧 WIP: these docs are a work in progress and need revision**

# Theme Spec

This theme spec, inspired by [Theme UI](https://theme-ui.com/theme-spec), contains a set of values and constraints to keep consistency with the brand.

TODO: describe the methodology here, raw value -> semantic -> components etc

Note that Bento utilities do not rely on this structure except where noted.

| Key                 | Type                                       | Description                                                                                |
|---------------------|--------------------------------------------|--------------------------------------------------------------------------------------------|
| `spaceScale`*       | `string[];`                                | Spacing scale used for layouts. Multiples work well: `['0', '4px', '8px', '12px', ...etc]` |
| `sizes`*            | `Record<string, ResponsiveValue<string>>;` | Named sets of responsive spaces or common sizes not tied to space e.g. "touchArea"         |
| `colors`            | `Record<string, string>;`                  |                                                                                            |
| `palettes`          | `Record<string, ColorPalette>;`            |                                                                                            |
| `fontScale`         | `string[];`                                |                                                                                            |
| `fontSizes`         | `Record<string, ResponsiveValue<string>>;` | Named sets of responsive font sizes                                                        |
| `fonts`             | `Record<string, string>;`                  |                                                                                            |
| `fontWeights`       | `Record<string, string>;`                  |                                                                                            |
| `lineHeights`       | `Record<string, string>;`                  |                                                                                            |
| `breakpoints`*      | `string[];`                                |                                                                                            |
| `breakpointAliases` | `Record<string, number>;`                  | Aliases for the breakpoint indices used for mediaQuery utils                               |
| `mediaQueries`      | `Record<string, string>;`                  | Named custom media queries                                                                 |
| `radii`             | `Record<string, string>;`                  |                                                                                            |
| `borderWidths`      | `Record<string, string>;`                  |                                                                                            |
| `borderStyles`      | `Record<string, string>;`                  |                                                                                            |
| `shadows`           | `Record<string, string>;`                  |                                                                                            |
| `opacities`         | `Record<string, string>;`                  |                                                                                            |
| `zIndices`          | `Record<string, string>;`                  |                                                                                            |
| `transitions`       | `Record<string, string>;`                  |                                                                                            |
| `styles`            | `Record<string, CSSObject>;`               | Reusable styles/mixins/transitions e.g. "focusRing"                                        |
| `components`*       | `Record<string, ComponentTheme>;`          | Theme components, see below                                                                |
