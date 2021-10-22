import styled from 'styled-components';

export const NavbarText = styled.span`
  color: white;
  text-transform: uppercase;
  padding-bottom: 5px;
`;

export const Container = styled.div`
  padding: 15px 0;
  width: 100%;
  border-top: 1px solid hsla(0,0%,100%,.15);

  &.dropdown-active {
    ${NavbarText} {
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;

export const NavbarItemContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`;

export const NavbarDropdownIcon = styled.span`
  display: inline-block;
  transform-origin: 50% 45%;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  transform: rotate(0deg);
  transition: transform .2s ease-in;
  -webkit-transition: -webkit-transform .2s ease-in;
  -moz-transition: -moz-transform .2s ease-in;
`;

export const NavbarDropdownBackground = styled.div`
  height: 100vh;
  background-color: #101117 !important;
  display: none;
  position: absolute;
  top: 200px;
  width: 100%;
  opacity: .8;

  &.dropdown-active {
    display: block;
  }
`;

export const NavbarDropdown = styled.div`
  display: none;
  padding: 50px 0;
  position: absolute;
  width: 100%;
  z-index: 1000;
  
  &.dropdown-active {
    display: block;
  }

  &:after {
    content: "";
    background: #bdd5ff;
    opacity: 0.5;
    position: absolute;
    height: 1px;
    width: 75%;
    bottom: 0;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
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