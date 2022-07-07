import React from 'react';
import { string, bool, oneOf } from 'prop-types';
import classNames from 'classnames';

export default function Wave(props) {
    const { size, position, rotate, color, ...rest } = props;

    return (
        <div
            aria-hidden="true"
            className={classNames('ffe-wave', `ffe-wave--${size}`, {
                'ffe-wave--rotate': rotate,
            })}
            style={{
                backgroundColor: `var(--ffe-farge-${color})`,
                maskPosition: position,
                WebkitMaskPosition: position,
            }}
            {...rest}
        />
    );
}

Wave.propTypes = {
    /* Choose between small, medium and large intensity of the wave */
    size: oneOf(['small', 'medium', 'large']).isRequired,
    /* Sets the mask-position property, setting a px/rem value will move the starting position of the wave */
    position: string,
    /* Rotates the wave 180 degrees :*/
    rotate: bool,
    /* Sets the color of the wave. Accepts ffe-color variables without the "ffe-farge-" bit of the name. */
    color: string.isRequired,
};
