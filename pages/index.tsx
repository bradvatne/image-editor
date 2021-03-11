import { useMousePosition, useBoundingBox } from "../utils";
import { Canvas, Toolbar } from "../components";
import React, { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<Blob>();

  return (
    <div className="app-wrapper">
      <div className="app-grid">
        <Canvas image={image} />
        <Toolbar setImage={setImage}/>
      </div>
    </div>
  );
}
