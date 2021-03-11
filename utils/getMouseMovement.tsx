import { Coordinates } from "../types";

export default function getMouseMovement(
  clientX: number,
  clientY: number,
  initialMousePosition: Coordinates,
  previousMousePosition: Coordinates,
  imageBox: DOMRect,
  canvasBox: DOMRect
): Coordinates {
  let calcX: number =
    clientX - initialMousePosition.x + previousMousePosition.x;

  let calcY: number =
    clientY - initialMousePosition.y + previousMousePosition.y;

  if (calcX < 0) {
    calcX = 0;
  }
  if (
    imageBox &&
    calcX > canvasBox.right - canvasBox.left - imageBox.width
  ) {
    calcX = canvasBox.right - canvasBox.left - imageBox.width;
  }
  if (calcY < 0) {
    calcY = 0;
  }
  if (
    imageBox &&
    calcY > canvasBox.bottom - canvasBox.top - imageBox.height
  ) {
    calcY = canvasBox.bottom - canvasBox.top - imageBox.height;
  }

  return { x: calcX, y: calcY };
}
