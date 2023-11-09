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
  breakpoint: number | keyof DefaultTheme["breakpoints"],
  style: string | CSSObject,
  direction: BreakpointDirection = "up"
) => {
  const { breakpointScale, breakpoints } = useTheme();
  const value =
    typeof breakpoint === "string"
      ? breakpoints[breakpoint]
      : typeof breakpoint === "number"
      ? breakpointScale[breakpoint]
      : undefined;

  return typeof value !== "undefined"
    ? css`
        ${breakPoint(value, direction)} {
          ${style}
        }
      `
    : "";
};

export const useMediaQueryUp = (
  breakpoint: number | keyof DefaultTheme["breakpoints"],
  style: string | CSSObject
) => useMediaQuery(breakpoint, style, "up");

export const useMediaQueryDown = (
  breakpoint: number | keyof DefaultTheme["breakpoints"],
  style: string | CSSObject
) => useMediaQuery(breakpoint, style, "down");
