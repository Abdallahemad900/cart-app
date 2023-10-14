import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { BoxGeometry, MeshNormalMaterial, PlaneGeometry } from 'three'; // Import PlaneGeometry
import Womano from './Womens';
import Interface from './characteranime/interface';


const AnimLogic = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
      <group position={[0, -1, 0]}>
       <Womano/>
      </group>

      <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[10, 10, 1, 1]} /> 
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};

const Anime = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
      <AnimLogic />
    </Canvas>
    <Interface>

    </Interface>
    </>
  
  );
};

export default Anime;
