import deepMerge from "deepmerge";
import { defaultTokens, DefaultTokens, Theme } from "./theme";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

// Design system exports this function to allow apps to easily extend the theme.
export function createTheme<T>(
  customTheme: DeepPartial<Theme> & T
): Theme & DefaultTokens & T {
  const mergeOptions = { arrayMerge: (_: any[], source: any[]) => source };

  // Merge the default tokens with the additional ones.
  const theme = deepMerge<DefaultTokens, DeepPartial<Theme> & T>(
    defaultTokens,
    customTheme,
    mergeOptions
  );

  // Grab the updated tokens so they can be used to set default values.
  const { radii, shadows } = theme;

  const defaults: DeepPartial<Theme> = {
    components: {
      cta: {
        borderRadius: radii.standard,
        elevations: {
          raised: {
            boxShadow: shadows.standard,
          },
        },
      },
    },
  };

  return deepMerge<DeepPartial<Theme>, Theme & DefaultTokens & T>(
    defaults,
    theme,
    mergeOptions
  );
}
