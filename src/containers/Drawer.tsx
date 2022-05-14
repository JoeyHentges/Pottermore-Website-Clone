import React from 'react';

import { Drawer } from '../components';

interface DrawerContainerProps {
  right?: boolean;
  width?: number;
  show?: boolean;
  setShow?: (show: boolean) => void;
  children: JSX.Element;
}

const DrawerContainer: React.FC<DrawerContainerProps> = ({
  right = false,
  width = '550px',
  show = false,
  setShow,
  children,
}) => {
  const handleShadowClick = (e) => {
    const dataId = e.target.parentNode.attributes['data-id'];
    if (!dataId) {
      return;
    }
    if (dataId.value !== 'drawer-shadow') {
      setShow(!show);
    }
  };

  return (
    <span data-id="drawer-container">
      <Drawer width={width} right={right} className={show && 'active'}>
        <Drawer.DrawerHeader>
          <Drawer.DrawerCloseButton onClick={() => setShow(!show)}>
            <img src="icons/close_icon.svg" />
          </Drawer.DrawerCloseButton>
        </Drawer.DrawerHeader>
        {children}
      </Drawer>
      <Drawer.DrawerBackground data-id="drawer-shadow" className={show && 'active'} onClick={handleShadowClick} />
    </span>
  );
};

export default DrawerContainer;
