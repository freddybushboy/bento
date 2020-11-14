import deepMerge from "deepmerge";
import {
  theme as dsTheme,
  Theme as DSTheme,
  DeepPartial,
} from "./design-system";

type Additional = {
  widget: string;
};

export const theme = deepMerge<DSTheme, DeepPartial<DSTheme> & Additional>(
  dsTheme,
  {
    widget: "red",
    components: {
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
    },
  }
);

export type Theme = typeof theme;
