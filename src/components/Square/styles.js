import styled from 'styled-components';

export const SquareStyle = styled.div`
  height: ${props => (props.size ? props.size : 16)}px;
  width: ${props => (props.size ? props.size : 16)}px;
  background-color: ${props => (props.bgColor ? props.bgColor : '#a20')};
  position: absolute;
  bottom: ${props => props.y}px;
  left: ${props => props.x}px;
  border-radius: ${props => (props.bRadius ? props.bRadius : 30)}%;
  opacity: ${props => (props.opacity ? props.opacity : 1)};
  border: 2px solid #620;
`;
