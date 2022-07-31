import { Select, TransformControls } from "@react-three/drei";
import { MeshProps, ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import {
  TransformControls as TransformControlsImpl,
  OrbitControls as OrbitControlsImpl,
} from "three-stdlib";

export interface BoxProps extends MeshProps {
  dimensions: [number, number, number];
}

export const Box: React.FC<BoxProps> = ({
  dimensions = [1, 1, 1],
  ...props
}) => {
  const ref = useRef<TransformControlsImpl>(null!);

  return (
      <mesh {...props} scale={1}>
        <boxGeometry args={dimensions} />
        <meshStandardMaterial color={"white"} />
      </mesh>
  );
};
