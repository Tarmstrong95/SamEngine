import { useEffect, useState } from "react";
import "./App.css";
import { Camera, Canvas } from "@react-three/fiber";
import { Box } from "./Meshes/Box";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  CubeCamera,
  Environment,
  GizmoHelper,
  GizmoViewcube,
  GizmoViewport,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Select,
  Sky,
  Stars,
  Stats,
} from "@react-three/drei";
import React from "react";
import Scene from "./Scene";
import MeshContainer from "./MeshContainer";

function App() {
  const [count, setCount] = useState(0);
  const camRef = React.useRef<Camera>(null)

  return (
    <Canvas frameloop="demand">
      <Stats />
      <Scene camRef={camRef}/>
      <MeshContainer camRef={camRef}/>
    </Canvas>
  );
}
export default App;
