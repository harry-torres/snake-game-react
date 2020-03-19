import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import Square from '../Square';
import { grow, replaceFood } from '~/store/modules/game/actions';

export default function Food() {
  const snakeHeadPosition = useSelector(state => state.game.snakePosition)[0];
  const screenSize = useSelector(state => state.game.screenSize);
  const isSpecialFood = useSelector(state => state.game.isSpecialFood);
  const foodTimeout = useSelector(state => state.game.foodTimeout);
  const foodColor = useSelector(state => state.game.foodColor);
  const dispatch = useDispatch();
  function getRandomPosition() {
    const x = Math.floor((Math.random() * screenSize) / 16) * 16;
    const y = Math.floor((Math.random() * screenSize) / 16) * 16;
    const newPos = { x, y };
    return newPos;
  }
  const [position, setPosition] = useState(getRandomPosition());

  function snakeAteFood() {
    return _.isEqual(position, snakeHeadPosition);
  }
  useEffect(() => {
    if (foodTimeout <= 0) {
      setPosition(getRandomPosition());
      dispatch(replaceFood());
    } else if (snakeAteFood()) {
      setPosition(getRandomPosition());
      dispatch(grow());
      dispatch(replaceFood());
    }
  }, [snakeHeadPosition]);

  return (
    <Square
      x={position.x}
      y={position.y}
      bgColor={foodColor}
      size={isSpecialFood ? 28 : 16}
      bRadius={isSpecialFood ? 50 : 30}
    />
  );
}
