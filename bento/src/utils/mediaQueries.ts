import { DefaultTheme, useTheme } from "styled-components";

export const breakPointToMqUp = (breakpoint: string) =>
  `@media screen and (min-width: ${breakpoint})`;

export const breakPointToMqDown = (breakpoint: string) =>
  `@media screen and (max-width: ${breakpoint})`; // TODO -1.

export const useMediaQueryUp = (
  breakpoint: number | keyof DefaultTheme["breakpointAliases"],
  style: string
) => {
  const { breakpoints, breakpointAliases } = useTheme();
  let index;
  if (typeof breakpoint === "string") {
    index = breakpointAliases[breakpoint];
  } else if (typeof breakpoint === "number") {
    index = breakpoint;
  }
  return typeof index !== "undefined"
    ? `
    ${breakPointToMqUp(breakpoints[index])} {
      ${style}
    }
  `
    : "";
};

export const useMediaQueryDown = (
  breakpoint: number | keyof DefaultTheme["breakpointAliases"],
  style: string
) => {
  const { breakpoints, breakpointAliases } = useTheme();
  let index;
  if (typeof breakpoint === "string") {
    index = breakpointAliases[breakpoint];
  } else if (typeof breakpoint === "number") {
    index = breakpoint;
  }
  return typeof index !== "undefined"
    ? `
    ${breakPointToMqDown(breakpoints[index])} {
      ${style}
    }
  `
    : "";
};
