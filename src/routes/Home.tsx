import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { ScrollPosition } from '../containers';

const Home: React.FC<{}> = () => {
  const [scrollPosition, setScrollPosition] = useState(1);
  const numberScrollPositions = 4;

  useEffect(() => {
    console.log("scroll positon changed ", scrollPosition);
  }, [scrollPosition])

  return (
    <>
      <Helmet title="Home" />
      <ScrollPosition numberPositions={numberScrollPositions} scrollPosition={scrollPosition} onScrollPositionChange={setScrollPosition} />
      <h1>Home</h1>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps, null)(Home);
