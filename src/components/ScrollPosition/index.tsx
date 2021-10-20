import React from 'react';

import { Container, PositionContainer, PositionInner } from './styles/ScrollPosition';

export default function ScrollPosition({ color, children, ...restProps }) {
  return <Container color={color} {...restProps}>{children}</Container>
}

ScrollPosition.PositionContainer = function ScrollPositionPositionContainer({ active = false, ...restProps }) {
  return active ? (
    <PositionContainer active={active} {...restProps}><PositionInner /></PositionContainer>
  ) : (
    <PositionContainer active={active} {...restProps} />
  );
}
