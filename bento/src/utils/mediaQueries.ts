import { CSSObject, DefaultTheme, useTheme, css } from "styled-components";

export const breakPointToMqUp = (breakpoint: string) =>
  `@media screen and (min-width: ${breakpoint})`;

export const breakPointToMqDown = (breakpoint: string) =>
  `@media screen and (max-width: calc(${breakpoint} - 1px))`;

export const useMediaQueryUp = (
  breakpoint: number | keyof DefaultTheme["breakpointAliases"],
  style: string | CSSObject
) => {
  const { breakpoints, breakpointAliases } = useTheme();
  let index;
  if (typeof breakpoint === "string") {
    index = breakpointAliases[breakpoint];
  } else if (typeof breakpoint === "number") {
    index = breakpoint;
  }
  return typeof index !== "undefined"
    ? css`
        ${breakPointToMqUp(breakpoints[index])} {
          ${style}
        }
      `
    : "";
};

export const useMediaQueryDown = (
  breakpoint: number | keyof DefaultTheme["breakpointAliases"],
  style: string | CSSObject
) => {
  const { breakpoints, breakpointAliases } = useTheme();
  let index;
  if (typeof breakpoint === "string") {
    index = breakpointAliases[breakpoint];
  } else if (typeof breakpoint === "number") {
    index = breakpoint;
  }
  return typeof index !== "undefined"
    ? css`
        ${breakPointToMqDown(breakpoints[index])} {
          ${style}
        }
      `
    : "";
};
