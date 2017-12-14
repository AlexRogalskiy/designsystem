import React from 'react';
import { node } from 'prop-types';
import Button from './Button';

export default function SecondaryButton(props) {
    const {
        children,
        ...rest
    } = props;

    return (
        <Button
            {...rest}
            buttonType="secondary"
        >
            {children}
        </Button>
    );
}

SecondaryButton.propTypes = {
    children: node,
};
