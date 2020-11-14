import { CSSObject } from "styled-components";
import { createTheme } from "./design-system";

type Additional = {
  components: {
    cta: {
      variants: {
        mission: CSSObject;
      };
    };
  };
};

const theme = createTheme<Additional>({
  components: {
    cta: {
      variants: {
        mission: {
          background: "deeppink",
        },
      },
    },
  },
});

export { theme };
