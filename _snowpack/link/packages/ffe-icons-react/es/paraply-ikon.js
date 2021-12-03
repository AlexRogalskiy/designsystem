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
    React.createElement("path", { d: "m98.765,0c-3.0048,0-5.321,2.4626-5.321,5.3565v14.017c-47.52,3.339-85.922,41.405-88.927,89.596-0.22258,3.0052,1.7667,5.6626,4.6603,6.3304,0.44516,0.1113,1.0155,0.24348,1.4607,0.24348,2.4484,0,4.6672-1.4609,5.6688-3.687,4.3403-9.6835,13.911-15.93,24.484-15.93,10.127,0,19.58,6.0313,24.032,15.27,1.0016,2.1148,3.2274,3.5478,5.5645,3.5478s4.5629-1.3217,5.5645-3.5478c3.45-7.2348,9.8978-12.362,17.354-14.365v75.896c0,13.579-13.334,13.913-14.781,13.913-3.8951,0-8.9171-1.44-12.033-5.113-1.4468-1.7809-3.9021-2.2052-6.0166-1.4261l-2.4345,0.97391c-3.2274,1.3356-4.4446,5.4609-2.3301,8.2435,5.12,6.7,13.466,10.7,22.815,10.7,14.022,0,28.135-9.3496,28.135-27.27v-75.896c7.4564,2.0035,13.939,7.1304,17.389,14.365,1.0016,2.1148,3.2274,3.5478,5.5645,3.5478s4.5629-1.3217,5.5645-3.5478c4.4516-9.2383,13.904-15.27,24.032-15.27,10.573,0,20.143,6.247,24.484,15.93,1.2242,2.7826,4.236,4.2156,7.1295,3.5478,2.8935-0.66783,4.8828-3.3252,4.6603-6.3304-2.8935-48.195-41.407-86.372-88.927-89.6l0.10434-0.10435v-14.017c0.02-3.0077-2.41-5.359-5.3-5.359h-2.5736zm1.3563,31.513c36.837,0,68.318,24.028,79.224,57.53-5.8984-3.5617-12.798-5.5652-20.032-5.5652-11.463,0-22.251,5.1339-29.596,13.704-7.3451-8.5704-18.133-13.704-29.596-13.704s-22.286,5.1339-29.631,13.704c-7.3451-8.5704-18.133-13.704-29.596-13.704-7.2338,0-14.022,2.0035-20.032,5.5652,10.918-33.502,42.545-57.53,79.269-57.53z" }));
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
Icon.displayName = 'ParaplyIkon';
export default Icon;
