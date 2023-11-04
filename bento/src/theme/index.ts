import { CSSObject } from "styled-components";
export * from "../utils";

export type ComponentTheme = {
  style?: CSSObject;
  variants?: Record<string, CSSObject>;
  elevations?: Record<string, CSSObject>;
};

export type ColorPalette = Record<
  "base" | "alt" | "contrast" | "muted",
  string
>;

export type ResponsiveValue<T = string | number> = T | T[];

export type Tokens = {
  // Sizes
  spaceScale: string[];
  sizes: Record<string, ResponsiveValue<string>>;
  fontScale: string[];
  fontSizes: Record<string, ResponsiveValue<string>>;
  // Colors
  colors: Record<string, string>;
  palettes: Record<string, ColorPalette>;
  // Text
  fonts: Record<string, string>;
  fontWeights: Record<string, string>;
  lineHeights: Record<string, string>;
  // Breakpoints
  breakpoints: string[];
  breakpointAliases: Record<string, number>;
  mediaQueries: Record<string, string>;
  // Borders
  radii: Record<string, string>;
  borderWidths: Record<string, string>;
  borderStyles: Record<string, string>;
  // Elevation
  shadows: Record<string, string>;
  opacities: Record<string, string>;
  zIndices: Record<string, string>;
  // Transitions
  transitions: Record<string, string>;
};

export type Styles = Record<string, CSSObject>;

export type Components = Record<string, ComponentTheme>;

export type Theme<T = Tokens, C = Components, S = Styles> = T & {
  styles: S;
  components: C;
};
