"use strict";
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
exports.__esModule = true;
var React = require("react");
var prop_types_1 = require("prop-types");
var PropTypes = require("prop-types");
var svg = React.createElement("svg", { viewBox: "0 0 200 200" },
    React.createElement("path", { d: "m100-0.0003388c-35.47,0-65.5,28.32-65.5,61.88,0,21.22,7.235,31.9,14.91,43.13,3.558,5.222,7.221,10.57,10.67,17.57,4.448,9.222,5.775,19.97,6.22,25.42v0.1389c0.4419,5.52,4.948,9.806,10.46,9.861h0.1042,46.28c5.56,0,10.23-4.306,10.56-9.861v-0.1389c0.3336-5.444,1.661-16.31,6.22-25.42,3.447-7,7.109-12.35,10.67-17.57,7.7-11.22,14.9-21.9,14.9-43.13,0-33.55-29.9-61.87-65.5-61.87zm0,13.13c28.02,0,52.47,22.75,52.47,48.75,0,17.22-5.31,25.02-12.65,35.8-3.558,5.222-7.679,11.32-11.57,19.1-5.004,10-6.804,21.24-7.471,28.13h-15.12l-0.0348-55.69,14.94-15.42c2.113-2.111,2.008-5.465-0.1042-7.465l-0.4517-0.4167c-2.113-2.111-5.435-2.007-7.436,0.1042l-12.4,12.92-12.54-12.91c-2-2.11-5.36-2.11-7.47-0.11l-0.4517,0.4167c-2.113,2-2.106,5.354-0.1042,7.465l14.87,15.35,0.03475,55.76h-15.22c-0.67-6.9-2.58-18.1-7.47-28.1-3.89-7.8-7.9-13.8-11.57-19.13-7.34-10.77-12.65-18.57-12.65-35.8,0-26,24.56-48.75,52.47-48.75zm-30.47,153.2c-3.002,0-5.316,2.458-5.316,5.347v2.431c0,3,2.425,5.347,5.316,5.347h62.16c3.002,0,5.351-2.458,5.351-5.347v-2.431c0-3-2.46-5.347-5.351-5.347h-62.16zm8.131,20.56c-3.002,0-5.351,2.458-5.351,5.347v2.431c0,3,2.46,5.347,5.351,5.347h45.9c3.002,0,5.351-2.458,5.351-5.347v-2.431c0-3-2.46-5.347-5.351-5.347h-45.9z" }));
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
    desc: prop_types_1.string,
    title: prop_types_1.string,
    focusable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: prop_types_1.string
};
Icon.displayName = 'LyspareIkon';
exports["default"] = Icon;
