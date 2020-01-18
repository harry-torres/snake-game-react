import React from 'react';
import PropTypes from 'prop-types';

import { SquareStyle } from './styles';

export default function Square({ x, y }) {
  console.tron.log(x, y);
  return <SquareStyle x={x} y={y} />;
}
