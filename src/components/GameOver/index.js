import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, NewGameButton } from './styles';
import { newGame } from '~/store/modules/game/actions';

export default function GameOver() {
  const { screenSize, score, highscore } = useSelector(state => state.game);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(newGame());
  }
  return (
    <Container size={screenSize} isHighscore={score > highscore}>
      <strong>Game Over!</strong>
      <span>Score {score}</span>
      <NewGameButton onClick={handleClick}>Play Again</NewGameButton>
    </Container>
  );
}
