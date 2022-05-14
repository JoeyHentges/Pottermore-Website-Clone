import styled from 'styled-components';

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: background 0.4s ease-in;

  .navbar-dropdown {
    background: ${({ dropdownBackground }) => dropdownBackground};
  }
`;

export const HeaderContainer = styled.div`
  width: calc(100% - 200px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
  flex-basis: 33.33%;
  transition: background-color 0.4s ease-in;

  height: 85px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: calc(100% - 50px);
    padding: 0px 25px;
    background-color:rgba(0, 0, 0, 0.2);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001;

  ${HeaderContainer} {
    background: ${({ theme, transparent, alwaysTransparent }) => transparent || alwaysTransparent ? 'transparent' : theme.background.highlight};
  }

  ${Navbar} {
    background: ${({ theme, transparent, alwaysTransparent }) => transparent || alwaysTransparent ? 'transparent' : theme.background.default};
  }

  &.active {
    ${Navbar} {
      background: ${({ theme, alwaysTransparent }) => alwaysTransparent ? 'transparent' : theme.background.default};
    }
    ${HeaderContainer} {
      background: ${({ theme, alwaysTransparent }) => alwaysTransparent ? 'transparent' : theme.background.highlight};
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
        background-color:rgba(0, 0, 0, 0.2);
      }
    }
    .navbar-dropdown {
      background: ${({ dropdownBackground }) => dropdownBackground};
    }
  }

  &:hover {
    ${Navbar} {
      background: ${({ theme, alwaysTransparent }) => alwaysTransparent ? 'transparent' : theme.background.default};
    }
    ${HeaderContainer} {
      background: ${({ theme, alwaysTransparent }) => alwaysTransparent ? 'transparent' : theme.background.highlight};
    }
    .navbar-dropdown {
      background: ${({ dropdownBackground }) => dropdownBackground};
    }
  }

  .dropdown-active {
    ${Navbar} {
      background: ${({ dropdownBackground }) => dropdownBackground};
    }
    .navbar-dropdown {
      background: ${({ dropdownBackground }) => dropdownBackground};
    }
  }
`;

export const HeaderItem = styled.div`
  margin-top: 5px;
  width: 100%;

  :nth-child(2) {
    text-align: center;
  }

  :nth-child(3) {
    text-align: right;
  }
`;
