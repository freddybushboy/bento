**🚧 WIP: these docs are a work in progress and need revision**

# Color palettes

Color Palettes are a group of colours containing a base, alt, contrast, and muted colour. Palettes classify a set of colours with defined contrast relationships. Essentially, `base` and `alt` should both be meet AA contrast requirements against top level the "canvas" color (typically white). The `contrast` and `muted` colours should meet AA contrast against `base` and `alt`.

TODO: is canvas required? (it could be its own palette), could potentially add a "surface" color to palettes.
TODO: palette generation cli?

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
