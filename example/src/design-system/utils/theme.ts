import { CSSObject } from "styled-components";
import {
  ColorPalette,
  ComponentTheme,
  ResponsiveValue,
  Theme as SpecTheme,
} from "@freddybushboy/bento";

// Names values it _must_ have - standard, etc.
// Adds its components and styles.
export type Theme = SpecTheme & {
  sizes: Record<"touch", string>;
  palettes: Record<"primary", ColorPalette>;
  fonts: Record<"body" | "display", string>;
  fontWeights: Record<"body" | "display", string>;
  lineHeights: Record<"body" | "display", string>;
  radii: Record<"standard", string>;
  borderWidths: Record<"standard", string>;
  borderStyles: Record<"standard", string>;
  transitionSpeeds: Record<"standard", string>;
  shadows: Record<"standard", string>;
  styles: Record<"focusRing", CSSObject>;
  components: {
    cta: ComponentTheme<{
      borderRadius: ResponsiveValue<string>;
      elevations: { raised: CSSObject };
    }>;
  };
};

export type DefaultTokens = Pick<
  Theme,
  | "spaces"
  | "responsiveSpaces"
  | "sizes"
  | "colors"
  | "palettes"
  | "fontSizes"
  | "responsiveFontSizes"
  | "fonts"
  | "fontWeights"
  | "lineHeights"
  | "breakpoints"
  | "breakpointAliases"
  | "radii"
  | "borderWidths"
  | "borderStyles"
  | "transitionSpeeds"
  | "shadows"
  | "styles"
>;

export const defaultTokens: DefaultTokens = {
  spaces: [
    "0",
    "4px",
    "8px",
    "12px",
    "16px",
    "20px",
    "24px",
    "28px",
    "32px",
    "36px",
    "40px",
    "44px",
    "48px",
  ],
  responsiveSpaces: {
    standard: ["12px", "32px"],
  },
  sizes: { touch: "40px" },
  colors: { primary: "#0C7494" },
  palettes: {
    primary: {
      base: "#0C7494",
      alt: "#096885",
      contrast: "#FFFFFF",
      muted: "#F3F7F9",
    },
  },
  fontSizes: ["12px", "14px", "16px", "20px", "24px", "28px", "32px"],
  responsiveFontSizes: {
    small: ["12px", "14px"],
    body: ["14px", "16px"],
    level1: ["28px", "32px"],
    level2: ["24px", "28px"],
    level3: ["20px", "24px"],
    level4: ["16px", "20px"],
  },
  fonts: {
    body: "Arial",
    display: "Arial",
  },
  fontWeights: {
    body: "400",
    display: "600",
  },
  lineHeights: {
    body: "1.5",
    display: "1.5",
  },
  breakpoints: ["480px", "768px", "1208px"],
  breakpointAliases: { small: 0, medium: 1, large: 2 },
  radii: { standard: "4px" },
  borderWidths: { standard: "1px" },
  borderStyles: { standard: "solid" },
  transitionSpeeds: { standard: "0.3s" },
  shadows: { standard: "0 0 6px 0 rgba(0, 0, 0, 0.1)" },
  styles: {
    focusRing: {
      outline: "none",
      boxShadow: "0 0 0 0.2rem white, 0 0 0 0.4rem blue",
    },
  },
};