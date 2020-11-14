import { useTheme } from "styled-components";
export var breakPointToMqUp = function (breakpoint) {
    return "@media screen and (min-width: " + breakpoint + ")";
};
export var breakPointToMqDown = function (breakpoint) {
    return "@media screen and (max-width: " + breakpoint + ")";
}; // TODO -1.
export var useMediaQueryUp = function (breakpoint, style) {
    var _a = useTheme(), breakpoints = _a.breakpoints, breakpointAliases = _a.breakpointAliases;
    var index;
    if (typeof breakpoint === "string") {
        index = breakpointAliases[breakpoint];
    }
    else if (typeof breakpoint === "number") {
        index = breakpoint;
    }
    return typeof index !== "undefined"
        ? "\n    " + breakPointToMqUp(breakpoints[index]) + " {\n      " + style + "\n    }\n  "
        : "";
};
export var useMediaQueryDown = function (breakpoint, style) {
    var _a = useTheme(), breakpoints = _a.breakpoints, breakpointAliases = _a.breakpointAliases;
    var index;
    if (typeof breakpoint === "string") {
        index = breakpointAliases[breakpoint];
    }
    else if (typeof breakpoint === "number") {
        index = breakpoint;
    }
    return typeof index !== "undefined"
        ? "\n    " + breakPointToMqDown(breakpoints[index]) + " {\n      " + style + "\n    }\n  "
        : "";
};
