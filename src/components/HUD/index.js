import React from 'react';
import { useSelector } from 'react-redux';

export default function HUD() {
  const score = useSelector(state => state.game.score);
  return <div>Score: {score}</div>;
}
