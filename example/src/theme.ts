import { defaultTheme } from "./design-system";

// Additional properties added to the theme unique to this project.
type Additional = {
  widget: string;
};
const additional: Additional = {
  widget: "green",
};

// Overrides and additions made to components unique to this project.
const components = {
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

export const theme = {
  ...defaultTheme,
  ...additional,
  components,
};

export type Theme = typeof theme;
