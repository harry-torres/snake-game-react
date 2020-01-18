import React, { useState } from 'react';

import Square from '../Square';

export const DIRECTIONS = {
  right: 0,
  up: 1,
  left: 2,
  down: 3,
};

export default function Snake() {
  const [position, setPosition] = useState([
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 20, y: 0 },
    { x: 30, y: 0 },
    { x: 40, y: 0 },
    { x: 50, y: 0 },
  ]);

  const [direction, setDirection] = useState(DIRECTIONS.right);

  function move() {}
  return (
    <>
      {position.map(pos => (
        <Square x={pos.x} y={pos.y} />
      ))}
    </>
  );
}
