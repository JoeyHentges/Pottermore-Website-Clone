import React, { useEffect, useState } from 'react';

import { ScrollPosition } from '../components';
import { usePreviousState, useWheelListener } from '../hooks';

interface ScrollPositionContainerProps {
  color?: string;
  numberPositions: number;
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
        <ScrollPosition numberPositions={numberScrollPositions} onScrollPositionChange={setScrollPosition} />
      </>
    );
  }
*/

const ScrollPositionContainer: React.FC<ScrollPositionContainerProps> = ({color, numberPositions, onScrollPositionChange}) => {

  const wheelListener = useWheelListener();
  const prevWheelListener = usePreviousState(wheelListener);

  const [scrollPosition, setScrollPosition] = useState(1);

  useEffect(() => {
    if (!prevWheelListener) return;
    if (wheelListener.changed === prevWheelListener.changed) return;

    if (wheelListener.goingUp) {
      scrollPosition > 1 && setScrollPosition(scrollPosition-1) 
    } else {
      scrollPosition < numberPositions && setScrollPosition(scrollPosition+1);
    }
  }, [wheelListener])

  useEffect(() => {
    onScrollPositionChange(scrollPosition);
  }, [scrollPosition])

  const getPositionContainers = () => {
    const array = [];
    for (let i = 0; i < numberPositions; i += 1) {
      array.push(<ScrollPosition.PositionContainer key={`scroll-position-${i}`} active={i+1 === scrollPosition} onClick={() => setScrollPosition(i+1)} />)
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
