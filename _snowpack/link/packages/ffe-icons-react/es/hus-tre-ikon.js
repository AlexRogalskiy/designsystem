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
    React.createElement("path", { d: "M158.705 142.377h-4.698V66.76c0-.92.746-1.668 1.664-1.668h1.37c.92 0 1.665.747 1.665 1.667v75.617z", fill: "#008a00", fillRule: "evenodd" }),
    React.createElement("path", { d: "M174.164 100.198h-.133l-3.535-.018c-.92-.004-1.66-.755-1.655-1.676l.007-1.37c.004-.92.752-1.663 1.672-1.658l3.535.018h.108c11.426 0 20.748-9.166 20.805-20.483.027-5.493-2.107-10.67-6.008-14.576-3.91-3.915-9.124-6.085-14.687-6.113l-2.348-.01.01-1.98c.02-3.602-1.083-7.17-3.355-9.96-2.906-3.568-7.114-5.57-11.64-5.594h-.076c-2.398 0-4.797.494-6.907 1.636-5.17 2.795-8.145 7.86-8.174 13.393l-.01 2.352-2.35-.013c-7.228-.027-13.897 3.632-17.854 10.134-.89 1.464-1.575 3.053-2.026 4.706-3.752 13.75 6.5 26.267 19.67 26.333l2.75.014c.92.006 1.66.756 1.656 1.677l-.007 1.37c-.004.92-.753 1.663-1.672 1.658l-2.092-.01c-13.94-.07-25.902-11.55-25.783-25.51.057-6.723 2.714-13.026 7.487-17.758 4.263-4.226 9.762-6.75 15.672-7.232.52-4.435 2.51-8.533 5.726-11.72 3.754-3.725 8.742-5.734 14.015-5.733 5.283.027 10.24 2.112 13.953 5.873 3.18 3.22 5.125 7.337 5.602 11.776 5.966.54 11.497 3.116 15.76 7.387 4.797 4.8 7.42 11.168 7.385 17.93-.07 13.9-11.498 25.16-25.5 25.16", mask: "url(#mask-2)", fill: "#008a00", fillRule: "evenodd" }),
    React.createElement("path", { d: "M157.663 85.41l-2.835-3.75 10.165-7.708c.733-.556 1.777-.412 2.332.323l.826 1.093c.555.734.41 1.78-.322 2.334l-10.165 7.708zM154.643 93.32l-9.003-8.414c-.672-.63-.71-1.682-.08-2.356l.933-1c.627-.675 1.68-.71 2.352-.082l9.002 8.414-3.204 3.44z", fill: "#008a00", fillRule: "evenodd" }),
    React.createElement("path", { d: "M27.422 143.067H1.92c-.92 0-1.666-.747-1.666-1.667v-1.37c0-.92.745-1.667 1.665-1.667H27.42v4.704z", mask: "url(#mask-4)", fill: "#008a00", fillRule: "evenodd" }),
    React.createElement("path", { d: "M198.316 143.067H99.452v-4.704h98.864c.92 0 1.664.747 1.664 1.666v1.37c0 .92-.745 1.667-1.664 1.667", fill: "#008a00", fillRule: "evenodd" }),
    React.createElement("path", { d: "M13.438 113.934l-.97-1.228c-1.14-1.444-.894-3.54.548-4.68l47.398-37.522c2.456-1.944 5.932-1.912 8.352.076l6.306 5.182v-.908c0-3.682 2.98-6.666 6.657-6.666h13.146c3.676 0 6.657 2.984 6.657 6.666V97.49l13.11 10.55c1.434 1.155 1.662 3.253.51 4.69l-.98 1.218c-1.15 1.435-3.246 1.663-4.678.51l-16.182-13.023V76.42h-10.02v16.743l-18.77-15.42-46.41 36.74c-1.442 1.14-3.535.895-4.675-.55", fillRule: "evenodd" }),
    React.createElement("path", { d: "M93.407 114.543v40.317h-59.19v-39.833l-8.22 6.508v34.89c0 3.682 2.982 6.667 6.658 6.667H94.97c3.677 0 6.658-2.985 6.658-6.667V121.25l-8.22-6.707z", fillRule: "evenodd" }));
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
Icon.displayName = 'HusTreIkon';
export default Icon;
