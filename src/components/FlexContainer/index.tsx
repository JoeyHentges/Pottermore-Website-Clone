import React from 'react';

import { Container } from './styles/FlexContainer';

type Images = {
  desktop?: string;
  mobile?: string; // defaults to desktop
};

interface FlexContainerProps {
  fullscreen?: boolean; // defaults to false
  flexDirection?: string; // default row
  background?: string; // defaults to white background
  images?: Images; // defaults to white background or background
}

export const FlexContainer: React.FC<FlexContainerProps> = ({
  fullscreen = false,
  flexDirection = 'row',
  background = 'white',
  images,
  children,
  ...restProps
}) => {
  return (
    <Container
      fullscreen={fullscreen}
      flexDirection={flexDirection}
      background={background}
      images={images}
      {...restProps}
    >
      {children}
    </Container>
  );
};
