import styled from 'styled-components';

export const DrawerBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: black;
  z-index: 9998;
  opacity: 0;
  display: none;

  transition: all 0.3s;

  &.active {
    display: block;
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: ${({ width }) => width};
  max-width: 100%;
  z-index: 9999;
  opacity: 0;
  background: ${({ theme }) => theme.background.default};
  position: fixed;
  top: 0;
  ${({ right, width }) => right ? `right: -${width}` : `left: -${width}`};

  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;

  &.active {
    ${({ right }) => right ? `right: 0px` : `left: 0px`};
    opacity: 1;
  }
`;

export const DrawerHeader = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid hsla(0,0%,100%,.15);
`;

export const DrawerCloseButton = styled.button`
  position: absolute;
  bottom: 15px;
  left: 20px;
  background: transparent;
  border: none;
  color: white;
`;