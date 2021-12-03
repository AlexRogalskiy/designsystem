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
    React.createElement("path", { d: "m 140.02779,0.1233685 c -2.93735,0 -5.14234,2.3885665 -5.14234,5.1423414 l 0,15.0422221 -15.04223,0 c -2.93732,0 -5.14232,2.388567 -5.14232,5.142339 l 0,0.559713 c 0,2.937357 2.38857,5.142342 5.14232,5.142342 l 15.04223,0 0,15.042216 c 0,2.937361 2.38856,5.142341 5.14234,5.142341 l 0.55974,0 c 2.93738,0 5.14234,-2.388568 5.14234,-5.142341 l 0,-15.042216 15.0422,0 c 2.93735,0 5.14235,-2.388569 5.14235,-5.142342 l 0,-0.559713 c 0,-2.93736 -2.205,-5.142339 -5.14235,-5.142339 l -15.0422,0 0,-15.0422221 c 0,-2.9373623 -2.38856,-5.1423414 -5.14234,-5.1423414 l -0.55974,0 z M 83.846867,31.886941 c -18.725679,0 -33.757545,15.215447 -33.757545,33.757537 l 0,11.194214 c -0.183587,18.725675 15.031866,33.792518 33.757545,33.792518 l 0.559707,0 c 18.725676,0 33.792496,-15.250427 33.792496,-33.792518 l 0,-11.194214 c 0,-18.725673 -15.25041,-33.757537 -33.792496,-33.757537 l -0.559707,0 z m -0.174915,12.838361 0.734622,0 c 11.565857,0 20.919236,9.353319 20.919236,20.919176 l 0,11.194214 c 0,11.565859 -9.353379,20.954168 -20.919236,20.954168 l -0.559707,0 c -11.565867,0 -20.919185,-9.388309 -20.919185,-20.954168 l 0,-11.194214 -0.174905,0 c 0,-11.565857 9.353315,-20.919177 20.919175,-20.919177 z M 45.121889,116.82302 c -1.076765,0.0221 -2.149567,0.39711 -3.113383,1.15442 -11.749449,8.99561 -18.925218,22.94497 -18.925218,37.81542 l 0,33.40768 c 0,5.69122 4.58487,10.45962 10.459587,10.45962 l 100.607945,0 c 5.69117,0 10.45959,-4.5849 10.45959,-10.45962 l 0,-33.40768 c 0.18363,-14.87045 -6.79093,-29.00338 -18.54037,-37.81542 -2.5702,-1.83591 -6.04376,-1.28453 -7.69604,1.46925 l -1.29437,2.20382 c -1.28501,2.20303 -0.72503,5.14289 1.29437,6.61161 8.44492,6.42543 13.57297,16.69925 13.57297,27.53074 l 0,30.85402 -95.815431,0 0,-30.85402 c 0,-10.83149 5.128073,-21.10531 13.572982,-27.53074 2.019434,-1.65233 2.579429,-4.40858 1.294331,-6.61161 l -1.294331,-2.20382 c -1.032666,-1.72114 -2.788013,-2.65955 -4.582632,-2.62367 z" }));
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
Icon.displayName = 'PersonPlussIkon';
export default Icon;
