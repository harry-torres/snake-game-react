import React from 'react';

import { Container } from './styles';
import Snake from '~/components/Snake';

export default function Game() {
  function handleKeyPress(e) {
    console.tron.log(e.key);
  }
  return (
    <Container
      onKeyDown={e => {
        handleKeyPress(e);
      }}
    >
      <Snake />
    </Container>
  );
}
