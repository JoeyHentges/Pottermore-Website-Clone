import React, { useEffect, useState } from 'react';

import { Drawer, Navbar } from '.';
import { Header } from '../components';
import { useMobile } from '../hooks';

const dropdownBackground =
  'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABfKADAAQAAAABAAABHQAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/9sAhAAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQyAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAEdAXwDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAECAwQFB//aAAgBAQAAAAD8TAAAAAAAAAAAAAACwAa6cQBvMAAFgOvIALAB255AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAO3KAAAduUA9fkAAAAAAAD0ecAAAAAAAAABYAAAAAAAAAAAAAAAALvmAsAAAAAAqALDfr8IAsBrIAAAAABfV5AvfziwACwAAAAAAAAAAAAAAAAAAsAAAAAAAD1+aQAAABYAAAAAAAAA9/gAAAAAAAAAAAAAWB15ADpzAAAAAAADeABvAAAAAAAWB9T5YAF3zAAAAAADUgAAAAAAA684AAAAAAAAAAAAAAAAAABfo/NAAAAAAACwAAABvAAAAAAAayAAAAAADWR34AAAsAAFgAAAAAAAAAAAGpAAB//EABUBAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAgBAxAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/8QALBAAAgIBAgMIAQUBAAAAAAAAAQIDEQQAEiEwUAUTICIxQFFgQRQyYXGhcP/aAAgBAQABPwD6zXLUWdZOO+LPJBJQeNirbWBF/wBjlxxtI4RFLMTQAFk6ZSp9iRXjinaEOFrzqUNgHho8oHRN8vGyZcSeOeCRopo2DI6Gip+QdOxdiSbJ4k/9KFVyMdoVlBnRnj/Ko1HTe0gjjkepJRGu0ncVJ41wGjyMXs3LzYppMeB5EgTfIVH7R8nRFHp8GbPjRyJDK6LIu1wrVuHwdE2evEUAfn7KosgamjMUrISpKki1Ng/0eTXhroINaJvk34IiqyAsLAPEa7VycTKznlwsUYsBqot11ygL0V8ZUgdIU0dZmbJmCHvBGO5iES7EC+UfNep/nxA0dZGZNkpCkr7hCndxiv2rZNf6fCBd86uH3AAn3tezw8mLGeQyY0U4aNkAkvykjgwr8jTcTogj3dmq5NdQxMzFghKTdnQ5LXe95HU/1wP1Eij4l7vumsN3ljb8V+eWkLyBiiMwQbmoXQ+Tojp6SMgYKxAYUaPqNE8oRsV3Ua6UQQfFD21ND2JN2WEiMMsgkLFfMCPg6PrzVq+OpdneN3YYJfl3etdKSNpGCqpZj6ACzoiunwTy40qywyNHIvo6GiNE390As67R7MGBBiSjJhm/URd5tjayn8HqBYn3dr3dUd9+t8K6VsNX0oakXY7KGVqNbl9D4RlSrjNjCRhCzhyl8CwBAP8Ap9mBfsRV8fT6Uos6Psf/xAAUEQEAAAAAAAAAAAAAAAAAAACA/9oACAECAQE/AFh//8QAFBEBAAAAAAAAAAAAAAAAAAAAgP/aAAgBAwEBPwBYf//Z)';

interface HeaderContainerProps {
  transparent?: boolean;
  alwaysTransparent?: boolean;

  // header
  left?: JSX.Element;
  center?: JSX.Element;
  right?: JSX.Element;

  // navbar
  showNavbar?: boolean;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({
  transparent = false,
  alwaysTransparent = false,
  left,
  center,
  right,
  showNavbar = false,
}) => {
  const isMobile = useMobile('lg');
  const [atTop, setAtTop] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);

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
    <>
      <Header
        className={atTop ? '' : 'active'}
        transparent={transparent}
        alwaysTransparent={alwaysTransparent}
        dropdownBackground={dropdownBackground}
      >
        <Header.HeaderContainer>
          <Header.HeaderItem>
            {isMobile && showNavbar ? (
              <img src="icons/burger_icon.svg" onClick={() => setShowDrawer(!showDrawer)} />
            ) : (
              left && left
            )}
          </Header.HeaderItem>
          <Header.HeaderItem>{center && center}</Header.HeaderItem>
          <Header.HeaderItem>{right && right}</Header.HeaderItem>
        </Header.HeaderContainer>
        {!isMobile && showNavbar && (
          <Header.Navbar>
            <Navbar />
          </Header.Navbar>
        )}
      </Header>
      {showNavbar && (
        <Drawer show={showDrawer} setShow={setShowDrawer}>
          <Navbar />
        </Drawer>
      )}
    </>
  );
};

export default HeaderContainer;
