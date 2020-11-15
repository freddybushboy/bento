import { defaultTokens } from "../fixtures";
import { createTheme } from "./createTheme";
import { ComponentTheme } from "../theme";

test("createTheme", () => {
  type Tokens = typeof defaultTokens;
  type Components = {
    cta: ComponentTheme<{
      borderRadius: Tokens["radii"]["standard"];
      fontSize: Tokens["responsiveFontSizes"]["body"];
    }>;
  };

  const theme = createTheme<Tokens, Components>(defaultTokens, {
    cta: {
      borderRadius: "radii.standard",
      fontSize: "responsiveFontSizes.body",
      style: {
        background: "red",
      },
    },
  });
  expect(theme.components.cta.borderRadius).toBe(defaultTokens.radii.standard);
  expect(theme.components.cta.fontSize).toBe(
    defaultTokens.responsiveFontSizes.body
  );
  expect(theme.components.cta.style!.background).toBe("red");
});
