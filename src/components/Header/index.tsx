import React from 'react';

import { Container, HeaderContainer, HeaderItem, Navbar } from './styles/Header';

export default function Header({
  defaultBackground,
  navbarDefaultBackground,
  dropdownBackground,
  children,
  ...restProps
}) {
  return (
    <Container
      defaultBackground={defaultBackground}
      navbarDefaultBackground={navbarDefaultBackground}
      dropdownBackground={dropdownBackground}
      {...restProps}
    >
      {children}
    </Container>
  );
}

Header.HeaderContainer = function HeaderHeaderContainer({ height, background, children, ...restProps }) {
  return (
    <HeaderContainer height={height} background={background} {...restProps}>
      {children}
    </HeaderContainer>
  );
};

Header.HeaderItem = function HeaderHeaderItem({ children = null, ...restProps }) {
  return <HeaderItem {...restProps}>{children}</HeaderItem>;
};

Header.Navbar = function HeaderNavbar({ background, children, ...restProps }) {
  return (
    <Navbar background={background} {...restProps}>
      {children}
    </Navbar>
  );
};
