import { css, useTheme } from "styled-components";
import { breakPointToMqUp } from "./mediaQueries";
import { ResponsiveValue } from "../theme";

export type ThemeComponent = { variant?: string; elevation?: string };

export const useComponentStyle = (componentName: string) => {
  const { components } = useTheme();
  const { style, variants, elevations } =
    components && components[componentName]
      ? components[componentName]
      : { style: {}, variants: {}, elevations: {} };

  return ({ variant, elevation }: ThemeComponent) => css`
    ${style ? style : ""}
    ${variant && variants && variants[variant] ? variants[variant] : ""}
    ${elevation && elevations && elevations[elevation]
      ? elevations[elevation]
      : ""}
  `;
};

export const responsiveValueArray = <T>(value: ResponsiveValue<T>): T[] =>
  Array.isArray(value) ? value : [value];

export const useResponsiveStyle = <T>(
  property: string,
  value?: ResponsiveValue<T>,
  formatter?: (v: T) => string
) => {
  const { breakpointScale } = useTheme();

  if (typeof value === "undefined") {
    return "";
  }

  const values = Array.isArray(value) ? value : [value];

  const ascMediaQueries = breakpointScale.map(breakPointToMqUp);
  const [base, ...rest] = values;

  return css({
    [property]: formatter ? formatter(base) : base,
    ...rest.reduce(
      (acc, val, i) =>
        val && ascMediaQueries[i] // Skip empty values and media queries.
          ? {
              ...acc,
              [ascMediaQueries[i]]: {
                [property]: formatter ? formatter(val) : val,
              },
            }
          : acc,
      {}
    ),
  });
};
