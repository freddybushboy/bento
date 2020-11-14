var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { css, useTheme } from "styled-components";
import { breakPointToMqUp } from "./mediaQueries";
export var componentStyle = function (componentValue, variant, elevation) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n    ", "\n"], ["\n  ", "\n  ",
    "\n    ",
    "\n"])), componentValue.style ? componentValue.style : "", variant && componentValue.variants && componentValue.variants[variant]
    ? componentValue.variants[variant]
    : "", elevation &&
    componentValue.elevations &&
    componentValue.elevations[elevation]
    ? componentValue.elevations[elevation]
    : ""); };
export var useResponsiveStyle = function (property, value, formatter) {
    var _a;
    var breakpoints = useTheme().breakpoints;
    var values;
    if (Array.isArray(value)) {
        values = value;
    }
    else {
        values = [value];
    }
    var ascMediaQueries = breakpoints.map(breakPointToMqUp);
    var base = values[0], rest = values.slice(1);
    return __assign((_a = {}, _a[property] = formatter ? formatter(base) : base, _a), rest.reduce(function (acc, val, i) {
        var _a, _b;
        return (__assign(__assign({}, acc), (_a = {}, _a[ascMediaQueries[i]] = (_b = {},
            _b[property] = formatter ? formatter(val) : val,
            _b), _a)));
    }, {}));
};
var templateObject_1;
