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
    React.createElement("path", { d: "M46.94,17c-43.23,0-46.94,15.7-46.94,18.53v127.7c0,3.9,1.975,7.8,5.25,10,6.11,4.1,18.54,9.8,41.69,9.8,23.14,0,35.6-5.5,41.72-9.8,3.27-2.2,5.22-6.1,5.22-10v-127.7c0-3.05-3.71-18.53-46.94-18.53zm0,15.25c12.01,0,20.98,1.53,26.44,3.06-5.46,1.52-14.43,3.03-26.44,3.03s-20.95-1.51-26.41-3.03c5.46-1.53,14.62-3.06,26.41-3.06zm-31.66,17.66c6.99,2.39,17.03,3.9,31.66,3.9s24.67-1.51,31.65-3.9v14.15c-9.39,6.1-19.64,6.75-31.65,6.75s-22.05-0.65-31.66-6.75v-14.15zm0,31.34c10.26,4.36,20.96,4.81,31.66,4.81s21.39-0.45,31.65-4.81v15.06c-9.39,6.29-19.64,6.79-31.65,6.79s-22.05-0.7-31.66-6.79v-15.06zm0,32.25c10.26,4.4,20.96,4.8,31.66,4.8s21.39-0.4,31.65-4.8v15c-9.39,6.4-19.64,6.8-31.65,6.8s-22.05-0.7-31.66-6.8v-15zm137.8,0.4c-43.3,0-47,15.3-47,18.5v30.3c0,4.2,2,8.1,5.5,10.3,6.3,4.3,19.2,9.8,41.5,9.8,22.2,0,34.9-5.7,41.4-9.8,3.5-2.2,5.5-6.1,5.5-10.3v-30.3c0-3.4-3.7-18.5-46.9-18.5zm0,15.3c12,0,20.9,1.5,26.4,3-5.5,1.6-14.4,3.1-26.4,3.1s-21-1.5-26.5-3.1c5.5-1.5,14.5-3,26.5-3zm-137.8,16.8c10.26,4.3,20.96,4.8,31.66,4.8s21.39-0.5,31.65-4.8v15c-9.39,6.3-19.64,6.8-31.65,6.8s-22.05-0.5-31.66-6.8v-15zm106.1,0.8c7,2.4,17,4,31.7,4,14.6,0,24.6-1.6,31.6-4v14.2c-9.6,6.3-19.6,6.8-31.6,6.8s-22.1-0.5-31.7-6.8v-14.2z" }));
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
Icon.displayName = 'MynterToStablerIkon';
export default Icon;
