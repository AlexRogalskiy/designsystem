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
    React.createElement("path", { d: "M11.40625,33c-6.40641,0-11.40625,5.196983-11.40625,11.40625v111.1875c0,6.40957,5.200041,11.40625,11.40625,11.40625h176.96875c6.40641,0,11.4248-4.99668,11.625-11.40625v-111.1875c0-6.409566-5.20004-11.40625-11.40625-11.40625h-177.1875zm2.59375,14.21875h171.78125v105.75h-171.78125v-105.75zm107.53125,14.625c-12.9364,0-23.4375,10.494723-23.4375,23.4375s10.5011,23.4375,23.4375,23.4375c4.93251,0,9.50647-1.52003,13.28125-4.125,3.81371,2.71502,8.47183,4.3125,13.53125,4.3125,12.81282,0,23.4375-10.418068,23.4375-23.4375-0.2002-13.019432-10.62468-23.4375-23.4375-23.4375-4.89886,0-9.46496,1.547682-13.25,4.15625-3.83002-2.730399-8.50133-4.34375-13.5625-4.34375zm26.8125,12.21875c6.20621,0,11.40625,4.996684,11.40625,11.40625,0,6.209267-4.99984,11.4375-11.40625,11.4375-2.05353,0-4.00546-0.565391-5.6875-1.53125,1.46126-3.057574,2.28125-6.478527,2.28125-10.09375,0-3.495178-0.78498-6.801863-2.15625-9.78125,1.65376-0.922909,3.55841-1.4375,5.5625-1.4375zm-108.90625,48.65625c-3.003004,0-5.59375,2.42022-5.59375,5.625v2.59375c0,3.00448,2.390545,5.625,5.59375,5.625h58.875c3.20321,0,5.78125-2.62052,5.78125-5.625v-2.59375c0-3.00448-2.39055-5.625-5.59375-5.625h-59.0625z" }));
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
Icon.displayName = 'BetalingskortKredittIkon';
export default Icon;
