import React from 'react';
import PropTypes from 'prop-types';

import { SquareStyle } from './styles';

export default function Square({ x, y, bgColor, size, bRadius, opacity }) {
  return (
    <SquareStyle
      x={x}
      y={y}
      bgColor={bgColor}
      size={size}
      bRadius={bRadius}
      opacity={opacity}
    />
  );
}

Square.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  bgColor: PropTypes.string,
  size: PropTypes.number,
  bRadius: PropTypes.number,
  opacity: PropTypes.number,
};

Square.defaultProps = {
  x: 0,
  y: 0,
  bgColor: '#a20',
  size: 16,
  bRadius: 30,
  opacity: 1,
};
