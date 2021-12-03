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
    React.createElement("path", { d: "m 73.758401,31.582331 c -4.766447,0 -8.832693,3.852102 -8.832693,8.832545 l 0,117.100174 -58.7508096,0 -0.1338738,0 c -2.3949891,0.065 -4.2825147,2.12508 -4.2825147,4.41631 l 0,2.00749 c 0,2.49675 2.1080648,4.41632 4.4163345,4.41632 l 187.4940556,0 c 2.48384,0 4.41634,-2.08237 4.41634,-4.41632 l 0,-2.00749 c 0,-2.49664 -2.10809,-4.41631 -4.41634,-4.41631 l -58.88464,0 0,-117.100174 c 0,-4.830619 -3.77398,-8.832545 -8.69889,-8.832545 l -52.327015,0 z m 2.275088,10.840011 48.178341,0 0,115.092708 -48.178341,0 0,-115.092708 z m 12.446072,10.840205 c -2.441037,0 -4.282524,1.944153 -4.282524,4.28246 l 0,7.360576 c 0,2.329728 1.798669,4.416419 4.282524,4.416419 l 3.479543,0 c 2.462447,0 4.416358,-2.082365 4.416358,-4.416419 l 0,-7.360576 c 0,-2.483879 -2.108077,-4.28246 -4.416358,-4.28246 l -3.479543,0 z m 19.806659,0 c -2.4496,-0.159382 -4.41636,1.790124 -4.41636,4.28246 l -0.13389,0 0,7.360576 c 0,2.483879 2.1038,4.416419 4.41634,4.416419 l 3.61339,0 c 2.48385,0 4.28252,-2.082365 4.28252,-4.416419 l 0,-7.360576 c 0,-2.483879 -1.96996,-4.28246 -4.28252,-4.28246 l -3.47955,0 z M 88.613393,78.823711 c -2.458164,0 -4.282513,1.948602 -4.282513,4.282655 l 0,7.360478 c 0,2.483878 1.815786,4.282655 4.282513,4.282655 l 3.479544,0 c 2.466728,0 4.282525,-1.935793 4.282525,-4.282655 l 0,-7.360478 c 0,-2.483976 -1.987092,-4.282655 -4.282525,-4.282655 l -3.479544,0 z m 19.672827,0 c -2.44104,0 -4.28253,1.948602 -4.28253,4.282655 l 0,7.360478 c -0.15414,2.483878 1.83612,4.282655 4.14868,4.282655 l 3.61339,0 c 2.45389,0 4.28252,-1.940021 4.28252,-4.282655 l 0,-7.360478 c 0,-2.483976 -1.97852,-4.282655 -4.28252,-4.282655 l -3.47954,0 z m 0,25.561359 c -2.44104,0 -4.28253,2.061 -4.28253,4.41644 l 0,7.09292 c -0.15414,2.48379 1.83612,4.55021 4.14868,4.55021 l 3.61339,0 c 2.46673,0 4.41636,-1.92726 4.41636,-4.28255 l 0,-7.36058 c 0,-2.48387 -2.11236,-4.41644 -4.41636,-4.41644 l -3.47954,0 z m -19.672827,0.13323 c -2.458164,0 -4.416356,1.9485 -4.416356,4.28246 l 0,7.2268 c 0,2.48388 1.932503,4.41632 4.416356,4.41632 l 3.479544,0 c 2.458164,0 4.282525,-1.93992 4.282525,-4.28245 l 0,-7.36067 c 0,-2.48376 -1.974248,-4.28246 -4.282525,-4.28246 l -3.479544,0 z" }));
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
Icon.displayName = 'SkyskraperIkon';
export default Icon;
