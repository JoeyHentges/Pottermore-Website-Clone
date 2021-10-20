import { useEffect, useRef } from 'react';

/*
  The purpose of this hook is the keep track of the previous state of some variable.

  Example Usage:
  {
    const [value, setValue] = useState(null);
    const previousValue = usePreviousState(value);
  }
*/

export const usePreviousState = (value: any) => {
  const ref = useRef<any>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
