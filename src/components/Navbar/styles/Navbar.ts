import styled from 'styled-components';

export const NavbarText = styled.span`
  color: white;
  text-transform: uppercase;
  padding-bottom: 5px;
`;

export const Container = styled.div`
  padding: 15px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid hsla(0,0%,100%,.15);

  &.dropdown-active {
    ${NavbarText} {
      opacity: 0.5;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;

export const NavbarDropdownIcon = styled.span`
  display: inline-block;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  transform: rotate(0deg);
  transition: transform .2s ease-in;
  -webkit-transition: -webkit-transform .2s ease-in;
  -moz-transition: -moz-transform .2s ease-in;
`;

export const NavbarDropdown = styled.div`
  display: none;
  padding: 50px 0;
  margin-top: 35px;
  position: absolute;
  width: 100%;
  
  &.dropdown-active {
    display: block;
  }

  
  color: white;
`;

export const NavbarItem = styled.div`
  position: relative;
  cursor: pointer;

  &.dropdown-active {
    ${NavbarDropdownIcon} {
      -webkit-transform: rotate(-180deg);
      -moz-transform: rotate(-180deg);
      transform: rotate(-180deg);
      margin-bottom: 25px;
    }
    
    ${NavbarText} {
      opacity: 1 !important;
      border-bottom: 1px solid ${({ theme }) => theme.colors.purple};
    }
  }
  
  &.active {
    ${NavbarText} {
      border-bottom: 1px solid ${({ theme }) => theme.colors.purple};
    }
  }

  &:hover {
    ${NavbarText} {
      border-bottom: 1px solid ${({ theme }) => theme.colors.purple};
    }
  }
`;

export const NavbarLink = styled.a`
  text-decoration: none;
`;