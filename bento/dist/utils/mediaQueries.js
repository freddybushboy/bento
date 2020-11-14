"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaQueryDown = exports.useMediaQueryUp = exports.breakPointToMqDown = exports.breakPointToMqUp = void 0;
var styled_components_1 = require("styled-components");
exports.breakPointToMqUp = function (breakpoint) {
    return "@media screen and (min-width: " + breakpoint + ")";
};
exports.breakPointToMqDown = function (breakpoint) {
    return "@media screen and (max-width: " + breakpoint + ")";
}; // TODO -1.
exports.useMediaQueryUp = function (breakpoint, style) {
    var _a = styled_components_1.useTheme(), breakpoints = _a.breakpoints, breakpointAliases = _a.breakpointAliases;
    var index;
    if (typeof breakpoint === "string") {
        index = breakpointAliases[breakpoint];
    }
    else if (typeof breakpoint === "number") {
        index = breakpoint;
    }
    return typeof index !== "undefined"
        ? "\n    " + exports.breakPointToMqUp(breakpoints[index]) + " {\n      " + style + "\n    }\n  "
        : "";
};
exports.useMediaQueryDown = function (breakpoint, style) {
    var _a = styled_components_1.useTheme(), breakpoints = _a.breakpoints, breakpointAliases = _a.breakpointAliases;
    var index;
    if (typeof breakpoint === "string") {
        index = breakpointAliases[breakpoint];
    }
    else if (typeof breakpoint === "number") {
        index = breakpoint;
    }
    return typeof index !== "undefined"
        ? "\n    " + exports.breakPointToMqDown(breakpoints[index]) + " {\n      " + style + "\n    }\n  "
        : "";
};
