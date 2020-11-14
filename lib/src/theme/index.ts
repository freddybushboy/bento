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

export type Theme = {
  spaces: string[];
  responsiveSpaces: Record<string, string[]>;
  sizes: Record<string, string>;
  colors: Record<string, string>;
  palettes: Record<string, ColorPalette>;
  fontSizes: string[];
  responsiveFontSizes: Record<string, string[]>;
  fonts: Record<string, string>;
  fontWeights: Record<string, string>;
  lineHeights: Record<string, string>;
  breakpoints: string[];
  breakpointAliases: Record<string, number>;
  radii: Record<string, string>;
  borderWidths: Record<string, string>;
  borderStyles: Record<string, string>;
  transitionSpeeds: Record<string, string>;
  shadows: Record<string, string>;
  styles?: Record<string, CSSObject>;
  components?: Record<string, ComponentTheme>;
};

export type ThemeComponent = { variant?: string; elevation?: string };
