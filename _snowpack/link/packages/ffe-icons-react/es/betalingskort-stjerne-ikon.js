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
    React.createElement("path", { d: "M153.15625,20.5c-12.98182-0.188606-25.78103,4.914551-35,14.15625-9.03083,9.053093-13.9375,21.11339-13.9375,33.75,0,1.320243-0.00064,2.648508,0.1875,3.96875h-93.6875c-5.832411,0-10.71875,4.714605-10.71875,10.75v85.625c0,5.84679,4.698197,10.75,10.71875,10.75h136.96875c5.83241,0,10.71875-4.7146,10.71875-10.75v-52.625c23.1415-3.2063,41.21747-23.015774,41.59375-46.96875,0.37628-26.216249-20.69197-48.090432-46.84375-48.65625zm-0.9375,13.21875h0.75c18.81423,0.377212,34.03189,16.200782,33.84375,35.25-0.37628,18.860611-15.96638,34.34375-34.96875,34.34375h-0.5625c-18.81423-0.37721-33.875-16.045639-33.875-34.90625,0-9.241699,3.57127-17.899892,10.15625-24.3125,6.58498-6.601214,15.43728-10.375,24.65625-10.375zm0.28125,17.375c-1.08182,0-2.18622,0.61781-2.5625,1.84375l-2.8125,8.3125-8.65625,0.1875c-2.63399,0-3.56957,3.208795-1.5,4.90625l6.96875,5.09375-2.65625,8.28125c-0.75257,2.451879,2.08668,4.540099,4.15625,3.03125l7.15625-5.09375,7.125,5.09375c2.06957,1.508849,4.90882-0.57937,4.15625-3.03125l-2.625-8.28125,6.9375-5.09375c2.06957-1.508849,0.94585-4.717644-1.5-4.90625l-8.84375-0.1875-2.8125-8.3125c-0.37628-1.225939-1.44943-1.84375-2.53125-1.84375zm-139.34375,34.46875h94.09375c6.02055,16.03152,20.50341,27.92201,37.8125,30.5625v13.96875h-131.90625v-44.53125zm0,67.15625h131.90625v13.59375h-131.90625v-13.59375z" }));
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
Icon.displayName = 'BetalingskortStjerneIkon';
export default Icon;
