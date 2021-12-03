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
    React.createElement("path", { d: "m106 45.211c-2.19 0-4.21 1.011-5.39 2.865l-12.479 19.387h-5.395c-0.505 0-0.842 0.001-1.179 0.17l-80.92 1.517-0.00028 48.89h51.248c-5.395 2.53-11.294 7.92-16.014 15.17l-0.676 1.01c-1.854 2.87-2.023 6.41-0.506 9.95 1.181 3.03 3.71 5.73 6.745 7.75 2.865 1.86 6.236 2.87 9.439 2.87 4.046 0 7.419-1.69 9.273-4.55l0.674-1.01c5.226-8.1 8.767-18.55 6.407-25.63l3.539-5.39h74.344c0.34 0 0.67 0.17 0.84 0.17 1.35 0 2.87-0.68 3.88-1.69l47.88-51.924c2.02-2.361 2.19-5.225 0.5-7.248-1.51-2.192-4.38-2.698-6.74-1.518-13.15 6.912-54.28 9.948-83.95 10.959l-4.22 0.168 7.93-12.139c0.84-1.348 1.18-3.035 0.84-4.72-0.34-1.686-1.35-3.034-2.7-4.045-1.01-0.675-2.19-1.012-3.37-1.012zm71.14 26.131l-33.38 36.078h-66.418l19.049-29.504h3.541c20.228-0.506 53.948-2.023 77.208-6.574zm-97.945 6.912h2.024l-18.881 29.166h-51.08v-27.818l67.937-1.348zm-21.578 46.866h0.844l0.168 0.34c1.686 2.19 0.673 10.11-5.059 19.05l-0.674 1.01c-0.337 0.5-1.179 0.67-2.191 0.67-1.517 0-3.203-0.5-4.889-1.52-1.685-1.01-2.866-2.52-3.541-3.87-0.337-0.85-0.505-1.69-0.168-2.03l0.674-1.01c5.563-8.76 12.139-12.64 14.836-12.64z" }));
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
Icon.displayName = 'RobatIkon';
export default Icon;
