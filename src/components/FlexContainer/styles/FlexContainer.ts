import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  height: ${({ fullscreen }) => fullscreen ? '100vh' : '100%'};
  justify-content: space-between;
  align-items: center;
  background: ${({ background, images }) => images ? `url(${images.desktop})` : background};
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    background: ${({ background, images }) => images ? `url(${images.mobile ? images.mobile : images.desktop})` : background};
    background-size: cover;
    background-repeat: no-repeat;
  }
`;