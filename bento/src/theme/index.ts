import { CSSObject } from "styled-components";
export * from "../utils";

export type ComponentTheme<T = Record<string, unknown>> = {
  style?: CSSObject;
  variants?: {
    [k: string]: CSSObject;
  };
  elevations?: {
    [k: string]: CSSObject;
  };
} & T;

export type ColorPalette = Record<
  "base" | "alt" | "contrast" | "muted",
  string
>;

export type ResponsiveValue<T> = T | T[];

export type Tokens = {
  // Sizes
  spaces: string[];
  responsiveSpaces: Record<string, string[]>;
  sizes: Record<string, ResponsiveValue<string>>;
  fontSizes: string[];
  responsiveFontSizes: Record<string, string[]>;
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
  // Borders
  radii: Record<string, string>;
  borderWidths: Record<string, string>;
  borderStyles: Record<string, string>;
  // Elevation
  shadows: Record<string, string>;
  opacities: Record<string, string>;
  zIndices: Record<string, string>;
  // Special
  styles?: Record<string, CSSObject>;
};

export type Components = {
  components: Record<string, ComponentTheme>;
};

export type Theme = Tokens & Components;

export type ThemeComponent = { variant?: string; elevation?: string };
