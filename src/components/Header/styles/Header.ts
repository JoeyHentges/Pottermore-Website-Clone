import styled from 'styled-components';

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ background }) => background};
  transition: background 0.5s ease;
`;

export const HeaderContainer = styled.div`
  width: calc(100% - 200px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
  flex-basis: 33.33%;
  transition: background-color 0.5s ease;

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

  &.active {
    ${Navbar} {
      background: ${({ navbarDefaultBackground }) => navbarDefaultBackground};
    }
    ${HeaderContainer} {
      background: ${({ defaultBackground }) => defaultBackground};
    }
  }

  &:hover {
    ${Navbar} {
      background: ${({ navbarDefaultBackground }) => navbarDefaultBackground};
    }
    ${HeaderContainer} {
      background: ${({ defaultBackground }) => defaultBackground};
    }
  }
`;

export const HeaderItem = styled.div`
  margin-top: 5px;
  width: 100%;

  :nth-child(1) {
    
  }

  :nth-child(2) {
    text-align: center;
  }

  :nth-child(3) {
    text-align: right;
  }
`;
