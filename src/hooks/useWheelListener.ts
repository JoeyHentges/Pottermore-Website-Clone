import { useEffect, useState } from 'react';

/*
  The purpose of this hook is to check if the scroll wheel has been moved, and its direction.
  It determines if the wheel scrolled up or down.

  Return Values: {
    goingUp: boolean = did the wheel scrolled up?
    direction: string = the wheel scroll direction ('up' or 'down')
    changed: boolean = a required boolean value to note if the wheel actually scrolled. -- example usage below
  }

  Example Usage:
  {
    const wheelListener = useWheelListener();
    const prevWheelListener = usePreviousState(wheelListener);

    const [scrollPosition, setScrollPosition] = useState(1);

    useEffect(() => {

      if (!prevWheelListener) return;

      if (wheelListener.changed === prevWheelListener.changed) return;

      if (wheelListener.goingUp) {
        scrollPosition > 1 && setScrollPosition(scrollPosition-1) 
      } else {
        scrollPosition < numberScrollPositions && setScrollPosition(scrollPosition+1);
      }

    }, [wheelListener])
  }
*/

export interface WheelListener {
  goingUp: boolean;
  direction: string;
  changed: boolean;
}

export const useWheelListener = () => {
  const [goingUp, setGoingUp] = useState(false);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY < 0) {
        setGoingUp(true);
      }
      else {
        setGoingUp(false);
      }
      setChanged(!changed)
    }

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => window.removeEventListener("wheel", handleWheel);
  }, [goingUp, changed]);

  return { goingUp, direction: goingUp ? 'up' : 'down', changed } as WheelListener;
};
