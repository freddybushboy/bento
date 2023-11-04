import { CSSObject, DefaultTheme, useTheme, css } from "styled-components";

type BreakpointDirection = "up" | "down";

const breakPoint = (breakpoint: string, direction: BreakpointDirection) =>
  direction === "up"
    ? breakPointToMqUp(breakpoint)
    : breakPointToMqDown(breakpoint);

export const breakPointToMqUp = (breakpoint: string) =>
  `@media screen and (min-width: ${breakpoint})`;

export const breakPointToMqDown = (breakpoint: string) =>
  `@media screen and (max-width: calc(${breakpoint} - 1px))`;

const useMediaQuery = (
  breakpoint: number | keyof DefaultTheme["breakpointAliases"],
  style: string | CSSObject,
  direction: BreakpointDirection = "up"
) => {
  const { breakpoints, breakpointAliases } = useTheme();
  const index =
    typeof breakpoint === "string"
      ? breakpointAliases[breakpoint]
      : typeof breakpoint === "number"
      ? breakpoint
      : undefined;

  return typeof index !== "undefined"
    ? css`
        ${breakPoint(breakpoints[index], direction)} {
          ${style}
        }
      `
    : "";
};

export const useMediaQueryUp = (
  breakpoint: number | keyof DefaultTheme["breakpointAliases"],
  style: string | CSSObject
) => useMediaQuery(breakpoint, style, "up");

export const useMediaQueryDown = (
  breakpoint: number | keyof DefaultTheme["breakpointAliases"],
  style: string | CSSObject
) => useMediaQuery(breakpoint, style, "down");
