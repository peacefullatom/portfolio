import { useEffect, useRef } from 'react';

/**
 * - source and explanation here
 * - https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 * - this hook realizes setInterval wrapper
 */
const useInterval = (callback: () => void, delay: number): void => {
  const savedCallback = useRef<typeof callback>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = (): void => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };
    if (delay !== null) {
      const id = window.setInterval(tick, delay);
      return () => window.clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
