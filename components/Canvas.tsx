import React, { useRef, useState } from "react";
import { Coordinates } from "../types";
import getMouseMovement from "./../utils/getMouseMovement";

export default function Canvas({ image }) {
  //State Variables
  const [dragging, setDragging] = useState<boolean>(false);
  const [dragStartPosition, setDragStartPosition] = useState<Coordinates>({
    x: 0,
    y: 0,
  });
  const [dragEndPosition, setDragEndPosition] = useState<Coordinates>({
    x: 0,
    y: 0,
  });
  const [imagePosition, setImagePosition] = useState<Coordinates>({
    x: 0,
    y: 0,
  });

  //On mouse down, store the mouse's starting position and set dragging to true
  const handleDragMouseDown = (e: React.MouseEvent) => {
    setDragStartPosition({
      x: e.clientX,
      y: e.clientY,
    });
    setDragging(true);
  };

  //Fires while dragging is true, calculates mouse travel from starting click position using getMouseMovement
  const handleDragMouseMove = (e: React.MouseEvent) => {
    const imageBox: DOMRect = imageRef.current.getBoundingClientRect();
    const canvasBox: DOMRect = canvasRef.current.getBoundingClientRect();
    const { x, y } = getMouseMovement(
      e.clientX,
      e.clientY,
      dragStartPosition,
      dragEndPosition,
      imageBox,
      canvasBox
    );

    setImagePosition({ x, y });
  };

  //Releases drag
  const handleDragMouseUp = (e: React.MouseEvent) => {
    setDragEndPosition({ x: imagePosition.x, y: imagePosition.y });
    setDragging(false);
  };

  //Refs
  const imageRef: React.MutableRefObject<HTMLImageElement> = useRef(null);
  const canvasRef: React.MutableRefObject<HTMLDivElement> = useRef(null);

  return (
    <div className="canvas" ref={canvasRef}>
      <div className="image-container">
        {image && (
          <img
            ref={imageRef}
            src={image}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleDragMouseDown(e);
            }}
            onMouseMove={(e) => {
              dragging && handleDragMouseMove(e);
            }}
            onMouseUp={(e) => {
              handleDragMouseUp(e);
            }}
            onMouseLeave={(e) => {
              handleDragMouseUp(e);
            }}
          />
        )}
      </div>
      <style jsx>
        {`
          .image-container {
            transform: translateX(${imagePosition.x - 10}px)
              translateY(${imagePosition.y - 10}px);
          }
        `}
      </style>
    </div>
  );
}
