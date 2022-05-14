import React from 'react';

import { Container, HeaderContainer, HeaderItem, Navbar } from './styles/Header';

export default function Header({ transparent, alwaysTransparent, dropdownBackground, children, ...restProps }) {
  return (
    <Container
      transparent={transparent}
      alwaysTransparent={alwaysTransparent}
      dropdownBackground={dropdownBackground}
      {...restProps}
    >
      {children}
    </Container>
  );
}

Header.HeaderContainer = function HeaderHeaderContainer({ children, ...restProps }) {
  return <HeaderContainer {...restProps}>{children}</HeaderContainer>;
};

Header.HeaderItem = function HeaderHeaderItem({ children = null, ...restProps }) {
  return <HeaderItem {...restProps}>{children}</HeaderItem>;
};

Header.Navbar = function HeaderNavbar({ children, ...restProps }) {
  return <Navbar {...restProps}>{children}</Navbar>;
};
