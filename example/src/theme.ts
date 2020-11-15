import deepMerge from "deepmerge";
import { createTheme } from "bento/src";
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
