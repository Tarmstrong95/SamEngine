import { Select, TransformControls } from "@react-three/drei";
import { Camera } from "@react-three/fiber";
import React from "react";
import { Box } from "../Meshes/Box";

interface MeshContainerProps {
  camRef: React.RefObject<Camera>;
}

export default ({ camRef }: MeshContainerProps) => {
  const [meshes, setMeshes] = React.useState<any[]>([]);
  const [selected, setSelected] = React.useState<any[]>([]);
  const transformRef = React.useRef<any>(null!);
  const active = selected[0];

  React.useEffect(() => {
    console.log(selected)}, [selected])

  React.useEffect(() => {
    // initial meshes on program start
    setMeshes([
      <group>
        <Box position={[1, 0.5, 0]} dimensions={[1, 1, 1]} />
      </group>,
      <group>
        <Box position={[2, 0.5, 1]} dimensions={[1, 1, 1]} />
      </group>,
      <group>
        <directionalLight position={[5, 5, 5]} />
      </group>,
    ]);
  }, []);

  React.useEffect(() => {
    if (!transformRef.current) return;

    const { current: controls } = transformRef;
    const callback = (event: { value: any }) =>
      (camRef.current.enabled = !event.value);
    controls.addEventListener("dragging-changed", callback);

    // cleanup
    return () => controls.removeEventListener("dragging-changed", callback);
  });

  return (
    <Select box onChange={selected => {
        selected[0]?.type == 'Mesh' && setSelected(selected)
        }}>
      {active && <TransformControls object={active} ref={transformRef} />}
      {meshes}
    </Select>
  );
};
