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

  useEffect(() => {
    console.log("scroll position", scrollPosition);
    setPauseScrolling(true);
    scroller.scrollTo(`scroll-position-${scrollPosition}`, {
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
      <ScrollPosition pauseScrolling={pauseScrolling} numberPositions={4} scrollPosition={scrollPosition} onScrollPositionChange={setScrollPosition} />

      <Element name="scroll-position-1">
        <div style={{ height: '100vh', backgroundImage: 'url(https://my.wizardingworld.com/static/media/bg.6a589e6d.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </div>
      </Element>
      <Element name="scroll-position-2">
        <div style={{ height: '100vh', backgroundImage: 'url(https://my.wizardingworld.com/static/media/bg.ab868aaa.jpg)', backgroundSize: 'cover' }} />
      </Element>
      <Element name="scroll-position-3">
        <div style={{ height: '100vh', backgroundImage: 'url(	https://my.wizardingworld.com/static/media/bg.42ff4c84.jpg)', backgroundSize: 'cover' }} />
      </Element>
      <Element name="scroll-position-4">
        <div style={{ height: '100vh', backgroundImage: 'url(https://my.wizardingworld.com/static/media/bg.d26c2b3f.jpg)', backgroundSize: 'cover' }} />
      </Element>

    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps, null)(Home);
