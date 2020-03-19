import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 10px auto;
  left: 0px;
  top: 0px;
  /* background-color: #333; */
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 1px solid #006;
  &:focus {
    outline: none;
  }
`;

export const GameObjects = styled.div`
  opacity: ${props => (props.isGameOver ? 0.6 : 1)};
`;
