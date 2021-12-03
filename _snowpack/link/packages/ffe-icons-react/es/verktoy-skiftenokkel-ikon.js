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
    React.createElement("path", { stroke: "null", d: "M27.949,200c-11.11,0-21.443-7.11-25.887-17.78-4.2218-10.22-1.8887-21.11,6.3327-29.33l77.326-77.334c-6.333-20.556-0.889-43,14.559-58.445,10.99-11,25.66-17.111,41.33-17.111,6.4439,0,12.777,1.1111,18.887,3.1111,0.1111,0,0.2222,0.11111,0.3333,0.11111,7.5549,2.8889,9.4436,12.556,3.7774,18.333l-24.67,24.667c-3.89,3.889-3.56,7.778-2.45,10.222,1.6665,4,5.6662,6.8889,9.5547,6.8889,2.4442,0,4.6662-1.1111,6.7772-3.2222l24.664-24.667c5.6662-5.6667,15.221-3.6667,18.221,3.6667,0.1111,0.33333,0.2222,0.66667,0.33331,0.88889,6.8883,20.778,1.5554,44-14.11,59.667-10.999,11-25.664,17.111-41.33,17.111-5.8884,0-11.554-0.88889-17.11-2.5556l-77.311,77.34c-5.444,5.44-12.11,8.33-19.22,8.33zm113.66-185.22c-11.666,0-22.665,4.5556-30.886,12.778-12.333,12.444-16.222,30.888-9.67,47.222l1.7776,4.5556-83.992,84c-4.9995,5-4.444,10-3.1108,13.222,2.1109,5,7.2216,8.6667,12.221,8.6667,3.1108,0,6.1106-1.3333,8.777-4.1111l83.992-84,4.5551,1.7778c5.21,2.112,10.66,3.112,16.33,3.112,11.666,0,22.665-4.5556,30.886-12.778,10.332-10.333,14.665-25,11.999-39l-20.23,20.222c-4.89,4.889-10.89,7.556-17.22,7.556-9.888,0-19.22-6.4444-23.22-16-3.7774-9.1111-1.6665-19,5.6662-26.333l20.22-20.223c-2.6664-0.55556-5.4439-0.77778-8.1104-0.77778z" }));
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
Icon.displayName = 'VerktoySkiftenokkelIkon';
export default Icon;
