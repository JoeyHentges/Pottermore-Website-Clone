import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  height: ${({ fullscreen }) => fullscreen ? '100vh' : '100%'};
  background: ${({ background, imageUrls }) => imageUrls ? `url(${imageUrls.desktop})` : background};
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: space-between;
  align-tems: center;

  @media only screen and (max-width: 600px) {
    background: ${({ background, imageUrls }) => imageUrls ? `url(${imageUrls.mobile})` : background};
  }
`;