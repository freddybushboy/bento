import { css, useTheme } from "styled-components";
import { ComponentTheme } from "../theme";
import { breakPointToMqUp } from "./mediaQueries";

export const componentStyle = (
  componentValue: Partial<ComponentTheme>,
  variant?: string | undefined,
  elevation?: string | undefined
) => css`
  ${componentValue.style ? componentValue.style : ""}
  ${variant && componentValue.variants && componentValue.variants[variant]
    ? componentValue.variants[variant]
    : ""}
    ${elevation &&
  componentValue.elevations &&
  componentValue.elevations[elevation]
    ? componentValue.elevations[elevation]
    : ""}
`;

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
