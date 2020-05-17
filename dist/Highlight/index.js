import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Highlight = ({
  children,
  color,
  bg,
  customBG,
  customColor
}) => {
  let CustomComponent = 'span';
  let classes = `highlighter-bg-${bg} highlighter-co-${color}`;
  return /*#__PURE__*/React.createElement(CustomComponent, {
    className: classes
  }, children);
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