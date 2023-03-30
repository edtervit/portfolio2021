import { Canvas, useThree, useFrame, extend } from '@react-three/fiber'
import { Environment, Center, Stars, Lightformer, Text3D, MeshWobbleMaterial, OrbitControls, Effects } from '@react-three/drei'
import { Vector3 } from 'three';
import { UnrealBloomPass } from 'three-stdlib'

extend({ UnrealBloomPass })

import Bebas from '../public/fonts/Bebas.json'

import { DarkModeContext } from "./context/DarkModeContext";
import { useContext } from 'react';

import useWindowSize from '../hooks/useWindowSize';

function CameraRig() {
  const { camera, mouse } = useThree();
  const vec = new Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 5, mouse.y * 5, camera.position.z), 0.1)
    camera.lookAt(0, 0, 0)
  })
}


function ThreeD() {

  const darkMode = useContext(DarkModeContext);
  const lightIntensity = darkMode ? 0.2 : 1;

  return (
    <div className='w-full h-screen'>
      <Canvas camera={{ position: [0, 0, 6] }}>
        {!darkMode && <Environment resolution={100} >
          <group rotation={[-Math.PI / 4, -0.3, 0]}>
            <Lightformer intensity={20 * lightIntensity} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={2 * lightIntensity} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
            <Lightformer intensity={2 * lightIntensity} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
            <Lightformer intensity={2 * lightIntensity} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
            <Lightformer type="ring" intensity={2 * lightIntensity} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />
          </group>
        </Environment>}
        <ambientLight intensity={0.1 * lightIntensity} />
        <spotLight position={[1, 20, 10]} angle={0.2} penumbra={1} distance={100} intensity={0.5} />
        <Center>
          {darkMode && <Effects disableGamma>
            {/* threshhold has to be 1, so nothing at all gets bloom by default */}
            <unrealBloomPass threshold={1} strength={2} radius={0.7} />
          </Effects>}
          {darkMode &&
            <Text3D
              bevelEnabled
              scale={5}
              letterSpacing={0}
              height={0}
              curveSegments={0.2}
              font={Bebas}
            >
              <meshBasicMaterial color={[5, 0.1, 0.2]} toneMapped={false} wireframe wireframeLinewidth={0.2} />
              ED
            </Text3D>
          }

          {!darkMode && <Text3D
            bevelEnabled
            scale={5}
            letterSpacing={0}
            height={0.25}
            bevelSize={0.02}
            bevelSegments={10}
            curveSegments={120}
            bevelThickness={0.03}
            font={Bebas}
          >
            <MeshWobbleMaterial speed={1} factor={0.5} color={'#dc143c'} />
            ED
          </Text3D>}
          {!darkMode && <Text3D
            scale={5}
            letterSpacing={0}
            height={0.25}
            bevelSize={0.02}
            bevelSegments={10}
            curveSegments={120}
            bevelThickness={0.02}
            font={Bebas}
            position={[0, 0, 0.2]}
          >
            <MeshWobbleMaterial speed={1} factor={0.5} color={'black'} />
            ED
          </Text3D>}

        </Center>
        {darkMode && (
          <Stars
            radius={10}
            depth={190}
            count={5000}
            factor={5}
            saturation={1}
            fade={true}
            speed={1}
          />
        )}
        {useWindowSize().width < 768 ? <OrbitControls minAzimuthAngle={-1} maxAzimuthAngle={1} minPolarAngle={1.2} maxPolarAngle={1.7} enableZoom={false} /> : <CameraRig />}
      </Canvas>
    </div>
  )
}

export default ThreeD