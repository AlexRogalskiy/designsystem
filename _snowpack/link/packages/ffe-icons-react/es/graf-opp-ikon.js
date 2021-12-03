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
    React.createElement("path", { d: "m158.05,5c-5.14439,0-7.84287,6.20104-4.1389,9.59739l1.64854,1.59366-71.5889,64.7381-19.9579-17.7782c-4.52706-3.9957-11.327-3.9957-15.8541,0l-45.4934,40.762c-1.23465,0.99893-1.859,2.58065-1.859,4.17894v3.61231c0,4.99463,5.97685,7.3755,9.68081,4.17893l45.4928-40.9394,19.9579,17.7782c4.52707,3.99569,11.327,3.99569,15.8541,0l73.8688-66.7213,3.29709,3.18732c3.70396,3.59614,9.85619,0.992762,9.85619-4.00186v-14.5904c0-3.19657-2.66573-5.59553-5.75237-5.59553h-15.0123zm-13.7846,66.1193c-6.37906,0-11.7503,5.01041-11.7503,11.4035v98.7009h-9.26v-57.3364c0-6.19333-5.13037-11.4035-11.7152-11.4035h-22.6589c-6.37904,0-11.7152,5.01041-11.7152,11.4035v57.3364h-9.25991v-24.7903c0-6.19335-5.13037-11.3681-11.7152-11.3681h-22.6587c-6.37905,0-11.7152,4.97499-11.7152,11.3681v24.7903h-16.0645c-3.29241,0-5.75237,2.598-5.75237,5.595v2.58526c0,3.197,2.66573,5.596,5.75237,5.596h188.495c3.29237,0,5.75237-2.599,5.75237-5.596v-2.58526c0-3.19657-2.66573-5.59553-5.75237-5.59553h-15.644v-98.7002c0-6.19334-5.13037-11.4035-11.7152-11.4035h-22.6236zm2.66573,13.9888,17.0817,0,0,96.1156-17.0817,0,0-96.1156zm-54.9632,41.5769,17.0817,0,0,54.5387-17.0817,0,0-54.5387zm-55.1385,32.369,17.0817,0,0,22.1696-17.0817,0,0-22.1696z" }));
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
Icon.displayName = 'GrafOppIkon';
export default Icon;
