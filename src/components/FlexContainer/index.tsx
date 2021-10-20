import React from 'react';

import { Container } from './styles/FlexContainer';

type ImageUrls = {
  desktop?: string;
  mobile?: string; // defaults to desktop
};

interface FlexContainerProps {
  fullscreen?: boolean; // defaults to false
  flexDirection?: string; // default row
  background?: string; // defaults to white background
  imageUrls?: ImageUrls; // defaults to white background or background
}

export const FlexContainer: React.FC<FlexContainerProps> = ({
  fullscreen = false,
  flexDirection = 'row',
  background = 'white',
  imageUrls,
  children,
  ...restProps
}) => {
  return (
    <Container
      fullscreen={fullscreen}
      flexDirection={flexDirection}
      background={background}
      imageUrls={imageUrls}
      {...restProps}
    >
      {children}
    </Container>
  );
};
