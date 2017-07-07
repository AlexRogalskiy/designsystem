import React from 'react';
import { bool, number, oneOfType, shape, string } from 'prop-types';
import classNames from 'classnames';

function camelCaseToDashCase(str) {
    if (!str) {
        return str;
    }
    return str.split('').reduce((previous, current) => (
        /[A-Z]/.test(current) ?
            `${previous}-${current.toLowerCase()}` :
            `${previous}${current}`
    ));
}

const MODIFIER_LIST = [
    'around',
    'between',
    'bottom',
    'center',
    'end',
    'middle',
    'noBottomPadding',
    'reverse',
    'start',
    'top',
    'vertical',
];
const SIZE_LIST = [
    'sm',
    'md',
    'lg',
];

const sizeClasses = (size, def) => {
    switch (typeof def) {
        case 'undefined': return '';
        case 'object':
            return classNames({
                [`ffe-grid__col--${size}-${def.cols}`]: def.cols || def.cols === 0,
                [`ffe-grid__col--${size}-offset-${def.offset}`]: def.offset || def.offset === 0,
            });
        default: return `ffe-grid__col--${size}-${def}`;
    }
};

const modifiers = props => Object.keys(props)
        .filter(key => MODIFIER_LIST.indexOf(key) !== -1 && !!props[key])
        .map(key => `ffe-grid__col--${camelCaseToDashCase(key)}`)
        .join(' ');

export default function GridCol(props) {
    const {
        children,
        className,
        element,
        lg,
        md,
        sm,
        ...rest
    } = props;

    Object.keys(rest).forEach(key => {
        if (MODIFIER_LIST.includes(key)) {
            delete rest[key];
        }
    });

    const classes = [
        className,
        'ffe-grid__col',
        sizeClasses('lg', lg),
        sizeClasses('md', md),
        sizeClasses('sm', sm),
        modifiers(props),
    ].filter(x => x).join(' ');

    const Element = element || 'div';

    return (
        <Element className={classes} {...rest}>
            {children}
        </Element>
    );
}

GridCol.propTypes = {
    className: string,
    ...MODIFIER_LIST.reduce((props, mod) => ({
        ...props,
        [mod]: oneOfType([bool, string]),
    }), {}),
    ...SIZE_LIST.reduce((props, size) => ({
        ...props,
        [size]: oneOfType([
            oneOfType([number, string]),
            shape({
                cols: oneOfType([number, string]),
                offset: oneOfType([number, string]),
            }),
        ]),
    }), {}),
};
