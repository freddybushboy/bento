import { css, useTheme } from "styled-components";
import { breakPointToMqUp } from "./mediaQueries";

export const useComponentStyle = (componentName: string) => {
  const { components } = useTheme();
  const { style, variants, elevations } =
    components && components[componentName]
      ? components[componentName]
      : { style: {}, variants: {}, elevations: {} };

  return ({
    variant,
    elevation,
  }: {
    variant?: string | undefined;
    elevation?: string | undefined;
  }) => css`
    ${style ? style : ""}
    ${variant && variants && variants[variant] ? variants[variant] : ""}
    ${elevation && elevations && elevations[elevation]
      ? elevations[elevation]
      : ""}
  `;
};

export const useResponsiveStyle = (
  property: string,
  value: any,
  formatter?: (v: any) => string
) => {
  const { breakpoints } = useTheme();
  let values;

  if (Array.isArray(value)) {
    values = value;
  } else {
    values = [value];
  }

  const ascMediaQueries = breakpoints.map(breakPointToMqUp);
  const [base, ...rest] = values;

  return {
    [property]: formatter ? formatter(base) : base,
    ...rest.reduce(
      (acc, val, i) => ({
        ...acc,
        [ascMediaQueries[i]]: {
          [property]: formatter ? formatter(val) : val,
        },
      }),
      {}
    ),
  };
};
