import { defaultTokens, Theme as DSTheme } from "./design-system";

type Additional = {
  widget: string;
};

const components: DSTheme["components"] = {
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
};

export type Theme = DSTheme & Additional;

export const theme: Theme = {
  ...defaultTokens,
  components,
  widget: "green",
};
