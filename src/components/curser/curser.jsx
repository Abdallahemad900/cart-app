import { useState, useEffect } from 'react';

export function usePointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener('mousemove', handleMove); // Use 'mousemove' instead of 'pointermove'

    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return position;
}
