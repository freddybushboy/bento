import deepMerge from "deepmerge";
import { defaultTokens, DefaultTokens, Theme } from "./theme";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

// TODO: Bento should really take care of this.
export function createTheme<T, A = {}>(
  customTheme: DeepPartial<Theme> & T,
  additional?: DeepPartial<Theme> & A
): Theme & T & A {
  const mergeOptions = { arrayMerge: (_: any[], source: any[]) => source };

  // Merge the both values being passed in into one.
  const customThemeWithAdditional = deepMerge<DeepPartial<Theme> & T & A>(
    customTheme,
    additional || {},
    mergeOptions
  );

  // Merge the default tokens with the additional ones.
  const theme = deepMerge<DefaultTokens, DeepPartial<Theme> & T & A>(
    defaultTokens,
    customThemeWithAdditional,
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

  return deepMerge<DeepPartial<Theme>, Theme & T & A>(
    defaults,
    theme,
    mergeOptions
  );
}
