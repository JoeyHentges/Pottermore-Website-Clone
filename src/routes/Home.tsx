import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Element, scroller } from 'react-scroll'

import { ScrollPosition } from '../containers';
import { useScrollBlock } from '../hooks';

const Home: React.FC<{}> = () => {
  const [scrollPosition, setScrollPosition] = useState(1);
  const [pauseScrolling, setPauseScrolling] = useState(null);
  const [blockScroll] = useScrollBlock();
  blockScroll();
  const numberScrollPositions = 4;

  useEffect(() => {
    console.log("scroll position", scrollPosition);
    setPauseScrolling(true);
    scroller.scrollTo(`div${scrollPosition}`, {
      duration: 500,
      smooth: true
    });
    const timeout = setTimeout(() => {
      setPauseScrolling(false);
    }, 500)
    return () => clearTimeout(timeout)
  }, [scrollPosition])

  return (
    <div onWheel={(e: { target: Element }) => pauseScrolling && e.target.blur()}>
      <Helmet title="Home" />
      <ScrollPosition pauseScrolling={pauseScrolling} numberPositions={numberScrollPositions} scrollPosition={scrollPosition} onScrollPositionChange={setScrollPosition} />

      <Element name="div1">
        <div style={{ height: '100vh', backgroundColor: 'red' }}>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
        </div>
      </Element>
      <Element name="div2">
        <div style={{ height: '100vh', backgroundColor: 'blue' }} />
      </Element>
      <Element name="div3">
        <div style={{ height: '100vh', backgroundColor: 'purple' }} />
      </Element>
      <Element name="div4">
        <div style={{ height: '100vh', backgroundColor: 'green' }} />
      </Element>

    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps, null)(Home);
