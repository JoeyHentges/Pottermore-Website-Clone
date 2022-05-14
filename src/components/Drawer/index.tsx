import React from 'react';
import { Container, DrawerBackground, DrawerHeader, DrawerCloseButton } from './styles/Drawer';

export default function Drawer({ width, right, children, ...restProps }) {
  return (
    <Container width={width} right={right} {...restProps}>
      {children}
    </Container>
  );
}

Drawer.DrawerBackground = function DrawerDrawerBackground({ ...restProps }) {
  return <DrawerBackground {...restProps} />;
};

Drawer.DrawerHeader = function DrawerDrawerHeader({ children, ...restProps }) {
  return <DrawerHeader {...restProps}>{children}</DrawerHeader>;
};

Drawer.DrawerCloseButton = function DrawerDrawerCloseButton({ children, ...restProps }) {
  return <DrawerCloseButton {...restProps}>{children}</DrawerCloseButton>;
};
