import styled, { css, CSSObject } from "styled-components";
import {
  ThemeComponent,
  componentStyle,
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
      palettes: { primary },
      components: { cta },
      styles: { focusRing },
    },
    variant,
    elevation,
  }) => css`
    // Custom styles not exposed through theme
    border: none;
    padding: 20px;
    width: 100%;
    color: white;
    // Example using palette.
    ${styleFromPalette(primary)};
    // Every component should call this.
    ${componentStyle(cta, variant, elevation)}
    // Set responsive style with a single value.
    ${useResponsiveStyle("border-radius", cta.borderRadius)}
    // Set responsive style with multiple values.
    ${useResponsiveStyle("font-size", responsiveFontSizes.body)}
    // Media query with alias.
    ${useMediaQueryUp("medium", "width: auto;")}

    &:focus {
      // Using style.
      ${focusRing}
    }
  `
);
