import React from 'react';
import { useSelector } from 'react-redux';

import Square from '../Square';

export const DIRECTIONS = {
  right: 0,
  up: 1,
  left: 2,
  down: 3,
};

export default function Snake() {
  const snakePosition = useSelector(state => state.game.snakePosition);
  const isSnakeRecovering = useSelector(state => state.game.isSnakeRecovering);

  return (
    <>
      {snakePosition.map(pos => (
        <Square
          key={`snake_${pos.x}_${pos.y}`}
          x={pos.x}
          y={pos.y}
          opacity={isSnakeRecovering ? 0.6 : 1}
        />
      ))}
    </>
  );
}
