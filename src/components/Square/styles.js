import styled from 'styled-components';

export const SquareStyle = styled.div`
  height: 8px;
  width: 8px;
  background-color: #a20;
  position: absolute;
  bottom: ${props => props.y}px;
  left: ${props => props.x}px;
`;
