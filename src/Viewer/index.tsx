import { Canvas } from "@react-three/fiber"
import { Box } from "../Meshes/Box"
import {useControls, folder, Leva} from 'leva'

const Viewer = () => {
  useControls({'some control': true})
    return (
      <>
          <Leva/>
          <Canvas>
            <Box dimensions={[2, 2, 2]} position={[-1.2, 0, 0]} />
          </Canvas>
        </>
    )
}

export default Viewer