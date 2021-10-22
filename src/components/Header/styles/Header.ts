import styled from 'styled-components';

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ background }) => background};
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

  height: ${({ height }) => height}px;
  background: ${({ background }) => background};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: calc(100% - 40px);
    padding: 0px 20px;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  &.active {
    ${Navbar} {
      background: ${({ navbarDefaultBackground }) => navbarDefaultBackground};
    }
    ${HeaderContainer} {
      background: ${({ defaultBackground }) => defaultBackground};
    }
    .navbar-dropdown {
      background: ${({ dropdownBackground }) => dropdownBackground};
    }
  }

  &:hover {
    ${Navbar} {
      background: ${({ navbarDefaultBackground }) => navbarDefaultBackground};
    }
    ${HeaderContainer} {
      background: ${({ defaultBackground }) => defaultBackground};
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
