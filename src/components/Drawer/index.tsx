import React from 'react';
import { Container } from './styles/Drawer';

export default function Drawer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
