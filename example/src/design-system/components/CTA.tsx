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

    // Set responsive styles (which may or may not have multiple values)
    ${useResponsiveStyle("font-size", cta.fontSize)}
    ${useResponsiveStyle("border-radius", cta.borderRadius)}

    // Media query with alias.
    ${useMediaQueryUp("small", `width: auto;`)}

    // Example using palette.
    ${styleFromPalette(primary)}

    &:focus {
      // Using styles.
      ${focusRing}
    }

    // Every component should call this.
    ${useComponentStyle("cta")}
  `
);
