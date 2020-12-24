import deepMerge from "deepmerge";
import { createTheme } from "bento";
import {
  defaultTokens,
  defaultComponents,
  Tokens,
  Components,
} from "./design-system";
import { CSSObject } from "styled-components";

type Additional = {
  widget: string;
};

// Bento utility for this?
const components = deepMerge(defaultComponents, {
  cta: {
    style: {
      textDecoration: "underline",
    },
    variants: {
      mission: {
        background: "magenta",
        ":hover": {
          background: "darkmagenta",
        },
      },
    },
  },
});

type NewComponents = Components & {
  cta: {
    style: CSSObject;
    variants: {
      mission: CSSObject;
    };
  };
};

export const theme = createTheme<Tokens, NewComponents, Additional>(
  defaultTokens,
  components,
  {
    widget: "green",
  }
);

export type Theme = typeof theme;
