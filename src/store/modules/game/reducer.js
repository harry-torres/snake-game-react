import produce from 'immer';
import randomColor from 'randomcolor';
import _ from 'lodash';
import actions from './actions';

function setupGame() {
  return {
    snakePosition: [
      { x: 48, y: 400 },
      { x: 32, y: 400 },
      { x: 16, y: 400 },
      { x: 0, y: 400 },
    ],
    direction: 'right',
    directionBuffer: /* 39 */ [],
    size: 4,
    screenSize: 800,
    delta: 0,
    refreshRate: 20,
    score: 0,
    highscore: 0,
    isSpecialFood: false,
    foodColor: '#a20',
    isGameOver: false,
  };
}

const INITIAL_STATE = setupGame();

const REVERSE_DIRECTION = {
  up: 'down',
  down: 'up',
  right: 'left',
  left: 'right',
};

function snakeHeadHitsWall(position, screenSize) {
  return (
    Object.values(position).filter(pos => pos >= 0 && pos <= screenSize - 16)
      .length !== 2
  );
}

function snakeHeadHitsBody(headPosition, bodyPosition) {
  return bodyPosition.filter(pos => _.isEqual(pos, headPosition)).length > 0;
}

function getNextPos(position, direction, speed) {
  const newPos = { ...position[0] };
  switch (direction) {
    case /* 38 */ 'up':
      newPos.y += speed;
      break;
    case /* 40 */ 'down':
      newPos.y -= speed;
      break;
    case /* 39 */ 'right':
      newPos.x += speed;
      break;
    case /* 37 */ 'left':
      newPos.x -= speed;
      break;
    default:
  }
  return newPos;
}
function getFood() {
  return Math.random() > 0.8
    ? {
        isSpecialFood: true,
        foodColor: randomColor({ luminosity: 'dark' }),
        foodTimeout: Math.max(Math.random() * 5000, 1000),
      }
    : {
        isSpecialFood: false,
        foodColor: '#a20',
        foodTimeout: Math.max(Math.random() * 10000, 4000),
      };
}

export default function game(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case actions.UPDATE: {
        if (!draft.isGameOver) {
          draft.delta += 20;
          draft.foodTimeout -= 20;
          const secondsPerFrame = Math.max(500 / draft.size, 40);
          if (draft.delta > secondsPerFrame) {
            draft.delta -= secondsPerFrame;
            const speed = 16;
            draft.direction = draft.directionBuffer.filter(newDir =>
                newDir !== REVERSE_DIRECTION[draft.direction]
              )[0] || draft.direction;
              draft.directionBuffer = [];
            const nextPos = getNextPos(
              draft.snakePosition,
              draft.direction,
              speed
            );
            if (snakeHeadHitsWall(nextPos, draft.screenSize)) {
              if (draft.screenSize > 300) {
                draft.screenSize -= 113;
                draft.snakePosition = draft.snakePosition.map(pos => ({
                  x: nextPos.x >= draft.screenSize ? pos.x - 128 : pos.x,
                  y: nextPos.y >= draft.screenSize ? pos.y - 128 : pos.y,
                }));
                draft.foodTimeout = 0;
                draft.snakePosition.reverse();
                draft.direction = REVERSE_DIRECTION[draft.direction];
              } else {
                draft.isGameOver = true;
              }
            } else if (snakeHeadHitsBody(nextPos, draft.snakePosition)) {
              draft.isGameOver = true;
            } else {
              draft.snakePosition = [nextPos, ...draft.snakePosition];
              if (draft.snakePosition.length > draft.size)
                draft.snakePosition = draft.snakePosition.splice(
                  0,
                  draft.snakePosition.length - 1
                );
            }
          }
        }
        break;
      }
      case actions.CHANGE_DIRECTION: {
        draft.directionBuffer.push(action.payload.direction);
        break;
      }
      case actions.GROW: {
        if (!draft.isSpecialFood) {
          draft.size += 1;
          draft.score += 1;
        } else {
          draft.size += 2;
          draft.score += 9;
        }
        break;
      }
      case actions.REPLACE_FOOD: {
        const { isSpecialFood, foodColor, foodTimeout } = getFood();
        draft.isSpecialFood = isSpecialFood;
        draft.foodColor = foodColor;
        draft.foodTimeout = foodTimeout;
        break;
      }
      case actions.NEW_GAME: {
        const hs = Math.max(draft.score, draft.highscore);
        draft = Object.assign(draft, setupGame());
        draft.highscore = hs;
        break;
      }
      default:
    }
  });
}
