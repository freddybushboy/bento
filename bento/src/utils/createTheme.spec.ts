import { defaultTokens } from "../fixtures";
import { createTheme } from "./createTheme";
import { ComponentTheme } from "../theme";

type Tokens = typeof defaultTokens;

describe("createTheme", () => {
  test("components", () => {
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
    expect(theme.components.cta.borderRadius).toBe(
      defaultTokens.radii.standard
    );
    expect(theme.components.cta.fontSize).toBe(
      defaultTokens.responsiveFontSizes.body
    );
    expect(theme.components.cta.style!.background).toBe("red");
  });

  test("additional", () => {
    const theme = createTheme<
      Tokens,
      {},
      { widget: Tokens["radii"]["standard"]; custom: string }
    >(defaultTokens, {}, { widget: "radii.standard", custom: "red" });
    expect(theme.widget).toBe(defaultTokens.radii.standard);
    expect(theme.custom).toBe("red");
  });
});
