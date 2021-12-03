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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from '../../../../pkg/react.js';
import { string } from '../../../../pkg/prop-types.js';
import * as PropTypes from '../../../../pkg/prop-types.js';
var svg = React.createElement("svg", { viewBox: "0 0 200 200" },
    React.createElement("path", { d: "M9.969,38c-5.498,0-9.969,4.48-9.969,10v104c0,5.5,4.471,10,9.969,10h147.2c5.5,0,10-4.5,10-10v-25.2c0-2.7-2.3-5-5-5h-1.5c-2.7,0-4.9,2.3-4.9,5v23.8h-144.4v-101.2h144.4v23.62c0,2.76,2.2,5,4.9,5h1.5c2.7,0,5-2.24,5-5v-25.06c0-5.52-4.5-10-10-10h-147.2zm37.69,39.53c-2.28,0-3.47,1.22-3.47,3.5v38.47c0,2.3,1.19,3.5,3.47,3.5h4.12c2.28,0,3.5-1.2,3.5-3.5v-15h4.53l8.25,16c0.95,1.7,2.23,2.5,4.13,2.5h4.87c2.79,0,3.8-1.8,2.47-4.2l-10.65-19.39v-0.13l9.9-17.53c1.33-2.42,0.32-4.22-2.47-4.22h-4.31c-1.9,0-3.17,0.79-4.12,2.5l-8.07,15.06h-4.53v-14.06c0-2.29-1.22-3.5-3.5-3.5h-4.12zm41.68,0c-2.28,0-3.5,1.22-3.5,3.5v38.47c0,2.3,1.23,3.5,3.5,3.5h4.13c2.28,0,3.47-1.2,3.47-3.5v-11.8h5.16l6.7,12.8c1,1.7,2.3,2.5,4.2,2.5h4.8c2.7,0,3.8-1.8,2.4-4.2l-6.5-11.7c-1.1-1.9-1.7-2.8-1.7-2.8v-0.1c4.5-2.3,6.8-7.53,6.8-12.36,0-6.61-3.2-11.25-8.4-13.22-1.9-0.76-4.1-1.09-8.8-1.09h-12.26zm94.56,6.22c-1.7,0.18-3.3,1.61-3.3,3.72v6.59h-37.1c-2.7,0-5,2.25-5,5v1.94c0,2.8,2.3,5,5,5h37.1v6.6c0,3.4,4.1,5,6.4,2.6l12-12.6c1.3-1.4,1.3-3.68,0-5.13l-12-12.56c-0.9-0.92-2-1.27-3.1-1.16zm-86.96,3.31h3.76c1.8,0,3.1,0.21,4.1,0.66,2.1,0.82,2.7,2.52,2.7,4.81,0,3.62-2.2,5.59-5.7,5.59h-4.86v-11.06z" }));
var Icon = function (_a) {
    var desc = _a.desc, title = _a.title, iconName = _a.iconName, rest = __rest(_a, ["desc", "title", "iconName"]);
    return (React.createElement("svg", __assign({}, svg.props, rest),
        title &&
            React.createElement("title", null, title),
        desc &&
            React.createElement("desc", null, desc),
        svg.props.children));
};
Icon.propTypes = {
    desc: string,
    title: string,
    focusable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: string
};
Icon.displayName = 'KrPilIkon';
export default Icon;
