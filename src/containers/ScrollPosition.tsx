import React from 'react';

import { ScrollPosition } from '../components';

interface ScrollPositionContainerProps {
  color?: string;
  numberPositions: number;
  scrollPosition: number;
  onPositionClicked: (index: number) => void;
}

/*
  Example Usage:
  {
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
        <ScrollPosition numberPositions={numberScrollPositions} scrollPosition={scrollPosition} />
      </>
    );
  }
*/

const ScrollPositionContainer: React.FC<ScrollPositionContainerProps> = ({color, numberPositions, scrollPosition, onPositionClicked}) => {

  const getPositionContainers = () => {
    const array = [];
    for (let i = 0; i < numberPositions; i += 1) {
      array.push(<ScrollPosition.PositionContainer key={`scroll-position-${i}`} active={i+1 === scrollPosition} onClick={() => onPositionClicked(i+1)} />)
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
