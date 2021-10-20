import React, { useEffect, useState } from 'react';

import { ScrollPosition } from '../components';
import { usePreviousState, useWheelListener } from '../hooks';

interface ScrollPositionContainerProps {
  color?: string;
  pauseScrolling?: boolean;
  numberPositions: number;
  scrollPosition: number;
  onScrollPositionChange: (index: number) => void;
}

/*
  Example Usage:
  
  import { Element, scroller } from 'react-scroll'
  {
    const [scrollPosition, setScrollPosition] = useState(1);
    const [pauseScrolling, setPauseScrolling] = useState(null);
    const [blockScroll] = useScrollBlock();
    blockScroll();

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
      <>
        <ScrollPosition pauseScrolling={pauseScrolling} numberPositions={numberScrollPositions} scrollPosition={scrollPosition} onScrollPositionChange={setScrollPosition} />
      </>
    );
  }
*/

const ScrollPositionContainer: React.FC<ScrollPositionContainerProps> = ({ color, pauseScrolling = false, numberPositions, scrollPosition, onScrollPositionChange }) => {
  const wheelListener = useWheelListener();
  const prevWheelListener = usePreviousState(wheelListener);

  useEffect(() => {
    if (pauseScrolling) return;
    if (!prevWheelListener) return;
    if (wheelListener.changed === prevWheelListener.changed) return;

    if (wheelListener.goingUp) {
      scrollPosition > 1 && onScrollPositionChange(scrollPosition - 1)
    } else {
      scrollPosition < numberPositions && onScrollPositionChange(scrollPosition + 1);
    }
  }, [wheelListener])

  const getPositionContainers = () => {
    const array = [];
    for (let i = 0; i < numberPositions; i += 1) {
      array.push(<ScrollPosition.PositionContainer key={`scroll-position-${i}`} active={i + 1 === scrollPosition} onClick={() => !pauseScrolling && onScrollPositionChange(i + 1)} />)
    }
    return array;
  }

  return (
    <>
      <ScrollPosition color={color}>
        {getPositionContainers()}
      </ScrollPosition>
    </>
  );
}

export default ScrollPositionContainer;
