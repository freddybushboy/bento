import { ComponentTheme, Theme as BentoTheme } from "bento";
import { CSSObject } from "styled-components";

export type DefaultTokens = typeof defaultTokens;
export type Theme = BentoTheme &
  DefaultTokens & {
    components: {
      cta: ComponentTheme<{
        borderRadius: string;
        elevations: {
          raised: CSSObject;
        };
      }>;
    };
  };

export const defaultTokens = {
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
  shadows: { standard: "0 0 6px 0 rgba(0, 0, 0, 0.1)" },
  opacities: { standard: "1" },
  zIndices: { standard: "1" },
  styles: {
    focusRing: {
      outline: "none",
      boxShadow: "0 0 0 0.2rem white, 0 0 0 0.4rem blue",
    },
  },
};
