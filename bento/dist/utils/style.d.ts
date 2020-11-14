import { ComponentTheme } from "../theme";
export declare const componentStyle: (componentValue: Partial<ComponentTheme>, variant?: string | undefined, elevation?: string | undefined) => import("styled-components").FlattenSimpleInterpolation;
export declare const useResponsiveStyle: (property: string, value: any, formatter?: ((v: any) => string) | undefined) => any;
