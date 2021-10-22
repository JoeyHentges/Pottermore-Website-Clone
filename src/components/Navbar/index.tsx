import React from 'react';

import {
  Container,
  NavbarItemContainer,
  NavbarItem,
  NavbarText,
  NavbarLink,
  NavbarDropdownBackground,
  NavbarDropdown,
  NavbarDropdownIcon,
} from './styles/Navbar';

export default function Navbar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navbar.NavbarItemContainer = function NavbarNavbarItemContainer({ children, ...restProps }) {
  return <NavbarItemContainer {...restProps}>{children}</NavbarItemContainer>;
};

Navbar.NavbarItem = function NavbarNavbarItem({ children, ...restProps }) {
  return <NavbarItem {...restProps}>{children}</NavbarItem>;
};

Navbar.NavbarText = function NavbarNavbarText({ children, ...restProps }) {
  return <NavbarText {...restProps}>{children}</NavbarText>;
};

Navbar.NavbarLink = function NavbarNavbarLink({ children, ...restProps }) {
  return <NavbarLink {...restProps}>{children}</NavbarLink>;
};

Navbar.NavbarDropdown = function NavbarNavbarDropdown({ children, ...restProps }) {
  return <NavbarDropdown {...restProps}>{children}</NavbarDropdown>;
};

Navbar.NavbarDropdownBackground = function NavbarNavbarDropdownBackground({ ...restProps }) {
  return <NavbarDropdownBackground {...restProps} />;
};

Navbar.NavbarDropdownIcon = function NavbarNavbarDropdownIcon({ children, ...restProps }) {
  return <NavbarDropdownIcon {...restProps}>{children}</NavbarDropdownIcon>;
};
