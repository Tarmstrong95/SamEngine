import {
  Sky,
  GizmoHelper,
  GizmoViewport,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import { Camera } from "@react-three/fiber";
import React from "react";

interface SceneProps {
    camRef: React.RefObject<Camera>
}

export default ({camRef}: SceneProps) => {

  return (
    <>
      <Sky />
      <GizmoHelper alignment="top-right">
        <GizmoViewport />
      </GizmoHelper>
      <OrbitControls
        enableDamping={true}
        enablePan={true}
        enableRotate={true}
        enableZoom={true}
        reverseOrbit={false}
        ref={camRef}
      />
      <gridHelper scale={1} />
      <axesHelper scale={1} />
      <ambientLight/>
    </>
  );
};
