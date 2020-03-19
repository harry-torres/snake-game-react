const actions = {
  GROW: '@game/GROW',
  UPDATE: '@game/UPDATE',
  NEW_GAME: '@game/NEW_GAME',
  REPLACE_FOOD: '@game/REPLACE_FOOD',
  CHANGE_DIRECTION: '@game/CHANGE_DIRECTION',
};

export default actions;

export function update() {
  return {
    type: actions.UPDATE,
    payload: {},
  };
}

export function changeDirection(direction) {
  return {
    type: actions.CHANGE_DIRECTION,
    payload: { direction },
  };
}

export function replaceFood(direction) {
  return {
    type: actions.REPLACE_FOOD,
    payload: { direction },
  };
}

export function newGame() {
  return {
    type: actions.NEW_GAME,
    payload: {},
  };
}

export function grow() {
  return {
    type: actions.GROW,
    payload: {},
  };
}
