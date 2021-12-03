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
    React.createElement("path", { d: "m100,21c-32.633,0-60.042,22.3-67.811,52.459-17.871,0.554-32.189,15.058-32.189,33.021,0,17.186,13.208,31.288,29.969,32.951h7.8737c2.9969,0,5.4457-2.4462,5.4457-5.4399v-41.925c0-30.824,24.19-56.977,55.047-57.864,32.078-0.99789,58.481,24.83,58.481,56.651v33.61l0.13874,0.10395c0,16.632-14.013,30.166-31.772,31.496-2.8859-6.2091-9.5179-10.325-17.066-9.2167-7.1037,0.99789-12.882,6.8952-13.77,14.102-1.114,9.76,6.54,18.06,16.09,18.06,6.5487,0,12.189-3.9777,14.742-9.6325,19.535-0.9979,35.963-13.201,42.178-29.833,18.09-0.23,32.64-14.99,32.64-33.06,0-17.963-14.32-32.467-32.19-33.021-7.77-30.159-35.29-52.459-67.81-52.459zm-69.719,65.868c-0.111,1.3305-0.10406,2.6541-0.10406,3.9846l-0.10406,0.10395v34.926c-9.4346-1.5523-16.545-9.6394-16.545-19.507,0-9.8681,7.2078-18.066,16.753-19.507zm139.85,0.10395c9.4346,1.4414,16.788,9.6394,16.788,19.507,0,9.8681-7.2147,17.99-16.649,19.542v-1.4553-33.61c0-1.3305-0.0277-2.6541-0.13874-3.9846z" }));
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
Icon.displayName = 'PersonMikrofonIkon';
export default Icon;
