import React, { useEffect, useState } from 'react';
import { Header } from '../components';

interface HeaderContainerProps {
  // header
  height?: number;
  background?: string;
  defaultBackground?: string;
  left?: JSX.Element;
  center?: JSX.Element;
  right?: JSX.Element;

  // navbar
  navbarBackground?: string;
  navbarDefaultBackground?: string;
  navbar?: JSX.Element;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({
  height = 100,
  background = '#242633',
  defaultBackground = '#242633',
  left,
  center,
  right,
  navbarBackground = '#10141b',
  navbarDefaultBackground = '#10141b',
  navbar,
}) => {
  const [atTop, setAtTop] = useState(true);

  function onScroll() {
    if (window.pageYOffset < 1) {
      setAtTop(true);
    } else {
      setAtTop(false);
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', onScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
    ``;
  });

  return (
    <Header
      className={atTop ? '' : 'active'}
      defaultBackground={defaultBackground}
      navbarDefaultBackground={navbarDefaultBackground}
    >
      <Header.HeaderContainer height={height} background={background}>
        <Header.HeaderItem>{left && left}</Header.HeaderItem>
        <Header.HeaderItem>{center && center}</Header.HeaderItem>
        <Header.HeaderItem>{right && right}</Header.HeaderItem>
      </Header.HeaderContainer>
      <Header.Navbar background={navbarBackground}>{navbar}</Header.Navbar>
    </Header>
  );
};

export default HeaderContainer;
