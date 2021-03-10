import { useEffect, useState } from "react";

type MouseCoordinates = {
  x: number;
  y: number;
}

export const useMousePosition = ():MouseCoordinates => {
  const [position, setPosition] = useState<MouseCoordinates>({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) =>
      setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};

export default useMousePosition;