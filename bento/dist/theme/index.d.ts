import { CSSObject } from "styled-components";
export * from "../utils";
export declare type ComponentTheme<T = Record<string, unknown>> = {
    style?: CSSObject;
    variants?: {
        [k: string]: CSSObject;
    };
    elevations?: {
        [k: string]: CSSObject;
    };
} & T;
export declare type ColorPalette = Record<"base" | "alt" | "contrast" | "muted", string>;
export declare type ResponsiveValue<T> = T | T[];
export declare type Theme = {
    spaces: string[];
    responsiveSpaces: Record<string, string[]>;
    sizes: Record<string, ResponsiveValue<string>>;
    fontSizes: string[];
    responsiveFontSizes: Record<string, string[]>;
    colors: Record<string, string>;
    palettes: Record<string, ColorPalette>;
    fonts: Record<string, string>;
    fontWeights: Record<string, string>;
    lineHeights: Record<string, string>;
    breakpoints: string[];
    breakpointAliases: Record<string, number>;
    radii: Record<string, string>;
    borderWidths: Record<string, number>;
    borderStyles: Record<string, string>;
    shadows: Record<string, string>;
    opacities: Record<string, string>;
    zIndices: Record<string, string>;
    styles?: Record<string, CSSObject>;
    components?: Record<string, ComponentTheme>;
};
export declare type ThemeComponent = {
    variant?: string;
    elevation?: string;
};
