import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Element, scroller } from 'react-scroll'

import { FlexContainer } from '../components';
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
        <FlexContainer fullscreen flexDirection="column" imageUrls={{ desktop: 'https://my.wizardingworld.com/static/media/bg.6a589e6d.jpg' }}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </FlexContainer>
      </Element>
      <Element name="scroll-position-2">
        <FlexContainer fullscreen flexDirection="column" imageUrls={{ desktop: 'https://my.wizardingworld.com/static/media/bg.ab868aaa.jpg' }}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </FlexContainer>
      </Element>
      <Element name="scroll-position-3">
        <FlexContainer fullscreen flexDirection="column" imageUrls={{ desktop: 'https://my.wizardingworld.com/static/media/bg.42ff4c84.jpg' }}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </FlexContainer>
      </Element>
      <Element name="scroll-position-4">
        <FlexContainer fullscreen flexDirection="column" imageUrls={{ desktop: 'https://my.wizardingworld.com/static/media/bg.d26c2b3f.jpg' }}>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </FlexContainer>
      </Element>

    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps, null)(Home);
