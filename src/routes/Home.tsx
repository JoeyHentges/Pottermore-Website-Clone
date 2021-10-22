import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FlexContainer } from '../components';

import { Header, Navbar } from '../containers';
import { useMobile } from '../hooks';

const Home: React.FC<{}> = ({}) => {
  const isMobile = useMobile('sm');

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  return (
    <>
      <Helmet title="Home" />
      <Header
        height={80}
        background="transparent"
        navbarBackground="transparent"
        center={
          <a href="/">
            <img style={{ width: 70, height: 51 }} src="images/wizarding_world_logo.svg" />
          </a>
        }
        right={
          <a href="/secure">
            <svg width="24" height="29">
              <path
                d="M.399 18.976A1.128 1.128 0 010 18.122V0h24v18.122c0 .326-.144.634-.399.854L12.001 29 .399 18.976zM12 6.766l5.76 5.8-5.76 5.8-5.76-5.8 5.76-5.8zM12 9.5l-3.046 3.066 3.046 3.066 3.044-3.066L12 9.5z"
                fill="#2C77DF"
                fillRule="evenodd"
              ></path>
            </svg>
          </a>
        }
        navbar={<Navbar />}
      />
      <FlexContainer
        fullscreen
        flexDirection="column"
        images={{
          desktop:
            '//images.ctfassets.net/usf1vwtuqyxm/w1yUca7UlkTzxZcWApxVx/1d7a0ad3a51162dae446c36370cb257f/WB-HP-F1-philosophers-stone-harrys-first-quidditch-oliver-harry-web-landscape.jpg?q=70',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            textAlign: 'center',
            maxWidth: '500px',
            color: 'white',
          }}
        >
          <h1>Celebrate 20 years of the first film, Harry Potter and the Philosopher's Stone</h1>
          <p>
            Join us for 20 Years of Movie Magic as we explore iconic scenes from the first film. This week, join us in
            the air as Harry takes flight at his first Quidditch match!
          </p>
        </div>
      </FlexContainer>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
    </>
  );
};

export default Home;
