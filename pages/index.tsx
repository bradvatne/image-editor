import { useMousePosition, useBoundingBox } from "../utils";
import { Canvas, Toolbar } from "../components";

export default function Home() {
  const { x, y } = useMousePosition();
  return (
    <div className="app-wrapper">
      <div className="app-grid">
        <Canvas />
        <Toolbar />
      </div>
    </div>
  );
}
