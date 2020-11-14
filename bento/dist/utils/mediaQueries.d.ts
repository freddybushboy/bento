import { DefaultTheme } from "styled-components";
export declare const breakPointToMqUp: (breakpoint: string) => string;
export declare const breakPointToMqDown: (breakpoint: string) => string;
export declare const useMediaQueryUp: (breakpoint: number | keyof DefaultTheme["breakpointAliases"], style: string) => string;
export declare const useMediaQueryDown: (breakpoint: number | keyof DefaultTheme["breakpointAliases"], style: string) => string;
