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
    React.createElement("path", { d: "m48.882 0.26083c-0.9339 0.080782-1.8799 0.38859-2.7589 0.95733h-0.41202c-13.443 8.6862-21.509 30.818-22.75 40.745-2.0682 15.718 0.82645 27.918 8.4786 36.605 2.8954 3.309 6.6205 5.9976 10.757 8.2726l-6.827 11.168c-11.788 19.441-17.991 41.771-17.991 64.521v25.44c0 6.4113 5.1688 11.787 11.787 11.787h96.375v-0.20599c31.85-2.0682 57.08-28.331 57.08-60.594 0-11.995-3.5126-23.785-10.131-33.712-1.8613-2.8954-5.7924-4.3439-8.8947-2.8962-4.3431 1.8613-5.7908 7.0341-3.1022 10.757 5.1704 7.6522 7.8606 16.545 7.8606 25.852 0 24.197-18.614 44.05-42.191 45.911v-19.235c0-24.818-6.8249-49.222-19.647-70.317l-4.9644-8.0626c4.5499-2.275 8.2726-4.9668 11.375-8.4826 7.6522-8.6862 10.547-21.094 8.4786-36.605-1.2409-9.9271-9.0999-32.055-22.75-40.741l-0.411-0.2128c-3.516-2.275-8.068-0.2052-8.895 3.7242l-2.0682 10.135h-30.194l-2.068-10.135c-0.621-3.1018-3.334-4.9235-6.136-4.6812zm-3.5829 18.953 1.6521 8.2726h50.258l1.6521-8.2726c5.584 7.859 9.3083 18.821 9.9288 24.612 1.4477 11.995-0.41202 21.095-5.5824 26.886-5.7908 6.6181-16.342 9.9239-31.232 10.131-14.891 0-25.437-3.5126-31.228-10.131-4.9636-6.2045-6.8241-15.308-5.3764-27.096 0.62044-5.7908 4.3447-16.543 9.9287-24.402zm26.47 31.85a8.0658 8.0658 0 0 0 -8.0666 8.0626 8.0658 8.0658 0 0 0 8.0666 8.0666 8.0658 8.0658 0 0 0 8.0666 -8.0666 8.0658 8.0658 0 0 0 -8.0666 -8.0626zm-15.095 40.535c4.5499 0.82726 9.7179 1.2393 15.095 1.4461h0.62206c5.1704 0 10.134-0.41282 14.477-1.2401l6.8225 11.169c11.582 19.027 17.579 40.743 17.579 62.873v19.437h-16.751v-28.954h-12.409v28.954h-20.476v-28.954h-12.409v28.954h-16.957v-22.75c0-20.061 5.5824-39.708 15.923-56.874l8.4827-14.061z" }));
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
Icon.displayName = 'KattIkon';
export default Icon;
