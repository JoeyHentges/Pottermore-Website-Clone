import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { useWheelListener, usePreviousState } from '../hooks';

import { ScrollPosition } from '../containers';

const Home: React.FC<{}> = () => {
  const wheelListener = useWheelListener();
  const prevWheelListener = usePreviousState(wheelListener);

  const [scrollPosition, setScrollPosition] = useState(1);
  const numberScrollPositions = 4;

  useEffect(() => {
    if (!prevWheelListener) return;
    if (wheelListener.changed === prevWheelListener.changed) return;

    if (wheelListener.goingUp) {
      scrollPosition > 1 && setScrollPosition(scrollPosition-1) 
    } else {
      scrollPosition < numberScrollPositions && setScrollPosition(scrollPosition+1);
    }
  }, [wheelListener])

  return (
    <>
      <Helmet title="Home" />
      <ScrollPosition numberPositions={numberScrollPositions} scrollPosition={scrollPosition} onPositionClicked={setScrollPosition} />
      <h1>Home</h1>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps, null)(Home);
