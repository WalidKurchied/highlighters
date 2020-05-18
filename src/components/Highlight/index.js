import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Highlight = ({ children, color, bg, customBG, customColor }) => {
    let CustomComponent = 'span';
    let classes = `highlighter highlighter-bg-${bg} highlighter-color-${color}`; 

    return (
        <CustomComponent className={classes}>
            {children}
        </CustomComponent>
    );
};

Highlight.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired
};

Highlight.defaultProps = {
    color: 'black',
    bg: 'yellow'
};

export default Highlight;
