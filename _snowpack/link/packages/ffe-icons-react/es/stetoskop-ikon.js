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
    React.createElement("path", { d: "m 49.713697,1.436e-4 c -5.9608,0 -12.077,2.6661 -15.999,7.2151 -3.451,4.0784004 -5.0208,9.0980004 -4.3934,14.1180004 l 8.7837,65.57 c 0.4565,3.1303 1.5694,6.0709 3.1801,8.7868 l -0.0429,-0.004 0.83026,1.2776 c 0.10014,0.14873 0.18771,0.30321 0.29105,0.45036 l 29.626,45.584996 0,33.943 c 0.15686,12.706 10.978,23.058 24.154,23.058 13.333003,0 24.157003,-10.352 24.157003,-23.058 l 0,-47.215 c 0,-6.5882 5.9614,-12.08 13.177,-12.08 7.2157,0 13.177,5.3352 13.177,12.08 l 0,21.805 c -7.775,2.3152 -13.49,9.5351 -13.49,18.036 0,10.353 8.4706,18.824 18.824,18.824 10.3534,0 18.824,-8.4706 18.824,-18.824 0,-8.3866 -5.5623,-15.533 -13.177,-17.947 l 0,-21.893 c -0.15686,-12.706 -10.981,-23.061 -24.157,-23.061 -13.333,0 -24.157,10.355 -24.157,23.061 l 0,47.215 c 0,6.5882 -5.9614,12.077 -13.177003,12.077 -7.2157,0 -13.174,-5.3321 -13.174,-12.077 l 0,-33.428 31.213003,-47.827996 -0.21752,0.0154 c 1.5571,-2.7579 2.5568,-5.762 2.886,-8.9553 l 8.4712,-65.414 c 0.78431,-5.0196 -0.9424,-9.8799 -4.3934,-13.9580004 -3.9216,-4.549 -9.8811,-7.2181 -15.999,-7.2181 -2.9804,0 -5.490203,2.5098 -5.490203,5.4902 0,2.9804 2.509803,5.4902004 5.490203,5.4902004 2.9804,0 5.9608,1.2567 7.8431,3.4528 1.098,1.098 2.1949,2.981 1.8811,5.3339 l -8.4712,65.411 c -1.098,8 -11.449003,16.470996 -28.704003,16.470996 -17.098,0 -27.609,-8.626796 -28.707,-16.626996 l -8.7837,-65.414 c -0.31372,-2.3529 0.93996,-4.2329 1.8811,-5.3309 1.8824,-2.0392 4.8627,-3.4528 7.8431,-3.4528 2.9804,0 5.4902,-2.5098004 5.4902,-5.4902004 0,-2.9804 -2.5098,-5.4902 -5.4902,-5.4902 z m 14.632,111.3099964 c 4.147,1.0441 8.6061,1.633 13.29,1.633 4.6841,0 9.13,-0.57107 13.26,-1.587 l -13.26,20.254 -13.29,-20.3 z m 87.644003,50.417 c 4.3922,0 7.8431,3.451 7.8431,7.8431 0,4.3922 -3.451,7.8431 -7.8431,7.8431 -4.3922,0 -7.8431,-3.451 -7.8431,-7.8431 0,-4.3922 3.6078,-7.8431 7.8431,-7.8431 z" }));
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
Icon.displayName = 'StetoskopIkon';
export default Icon;
