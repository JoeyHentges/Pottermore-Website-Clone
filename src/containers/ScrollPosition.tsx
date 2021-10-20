import React, { useEffect, useState } from 'react';

import { ScrollPosition } from '../components';
import { usePreviousState, useWheelListener } from '../hooks';

interface ScrollPositionContainerProps {
  color?: string;
  pauseScrolling: boolean;
  numberPositions: number;
  scrollPosition: number;
  onScrollPositionChange: (index: number) => void;
}

/*
  Example Usage:
  {
    const [scrollPosition, setScrollPosition] = useState(1);
    const numberScrollPositions = 4;

    useEffect(() => {
      console.log("scroll positon changed ", scrollPosition);
    }, [scrollPosition])

    return (
      <>
        <ScrollPosition numberPositions={numberScrollPositions} scrollPosition={scrollPosition} onScrollPositionChange={setScrollPosition} />
      </>
    );
  }
*/

const ScrollPositionContainer: React.FC<ScrollPositionContainerProps> = ({ color, pauseScrolling, numberPositions, scrollPosition, onScrollPositionChange }) => {
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
