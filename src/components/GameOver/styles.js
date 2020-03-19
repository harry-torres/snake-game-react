import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => Math.floor(props.size / 3)}px;
  align-items: center;
  justify-content: center;

  strong {
    z-index: 1;
    font-size: 30px;
  }
  span {
    z-index: 1;
    margin-top: 10px;
    font-size: 26px;
    color: ${props => (props.isHighscore ? '#3a1' : '#000')};
  }
  button {
    z-index: 1;
    margin: 20px 0 0;
    height: 44px;
    background: #3a1;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, '#3a1')};
    }
  }
`;
export const NewGameButton = styled.button``;
