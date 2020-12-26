import styled, { css, CSSObject } from "styled-components";
import {
  ThemeComponent,
  useComponentStyle,
  useMediaQueryUp,
  useResponsiveStyle,
  ColorPalette,
} from "bento";

const styleFromPalette = ({
  base,
  alt,
  contrast,
}: ColorPalette): CSSObject => ({
  background: base,
  color: contrast,
  ":hover": {
    background: alt,
  },
});

export const CTA = styled.button<ThemeComponent>(
  ({
    theme: {
      responsiveFontSizes,
      radii,
      palettes: { primary },
      styles: { focusRing },
    },
  }) => css`
    // Custom styles not exposed through theme
    border: none;
    padding: 20px;
    width: 100%;
    color: white;

    // Use values from the theme directly.
    border-radius: ${radii.standard};

    // Set responsive styles,
    ${useResponsiveStyle("font-size", responsiveFontSizes.body)}

    // Media query with index.
    ${useMediaQueryUp(2, `text-decoration: none;`)}

    // Media query with alias.
    ${useMediaQueryUp("small", `width: auto;`)}

    // Example using palette.
    ${styleFromPalette(primary)}

    &:focus {
      // Using styles.
      ${focusRing}
    }

    // Every component should call this (last).
    ${useComponentStyle("cta")}
  `
);
