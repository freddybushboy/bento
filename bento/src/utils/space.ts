import { DefaultTheme, useTheme } from "styled-components";
import { ResponsiveValue } from "../theme";

export type SpaceValue =
  | keyof DefaultTheme["sizes"]
  | ResponsiveValue<number | string>;

export const useSpaceValue = <T>(
  value?: SpaceValue
): ResponsiveValue<string> | undefined => {
  const { spaceScale, sizes } = useTheme();

  if (typeof value === "undefined") {
    return;
  }

  if (typeof value === "number") {
    return spaceScale[value];
  }

  if (typeof value === "string") {
    return sizes[value] || value;
  }

  if (Array.isArray(value)) {
    return value.map((v) => (typeof v === "number" ? spaceScale[v] : v));
  }
};
