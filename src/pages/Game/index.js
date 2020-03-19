import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, GameObjects } from './styles';
import Snake from '~/components/Snake';
import Food from '~/components/Food';
import HUD from '~/components/HUD';
import GameOver from '~/components/GameOver';
import { update, changeDirection } from '~/store/modules/game/actions';

export default function Game() {
  const keyDirection = [
    { key: 'ArrowUp', direction: 'up' },
    { key: 'ArrowDown', direction: 'down' },
    { key: 'ArrowLeft', direction: 'left' },
    { key: 'ArrowRight', direction: 'right' },
    { key: ' ', direction: '' },
  ];

  const dispatch = useDispatch();
  const screenSize = useSelector(state => state.game.screenSize);
  const refreshRate = useSelector(state => state.game.refreshRate);
  const isGameOver = useSelector(state => state.game.isGameOver);

  function handleKeyPress(e) {
    const dir = keyDirection.filter(keyDir => keyDir.key === e.key)[0];
    if (e.keyCode > 36 && e.keyCode < 41) {
      dispatch(changeDirection(dir.direction));
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    setInterval(() => {
      dispatch(update());
    }, refreshRate);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  return (
    <Container size={screenSize}>
      {isGameOver ? <GameOver /> : <HUD />}
      <GameObjects isGameOver={isGameOver}>
        <Snake />
        <Food />
      </GameObjects>
    </Container>
  );
}
