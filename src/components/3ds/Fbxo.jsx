import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";
import { DirectionalLight } from "three";

const Scene = () => {
  const fbx = useLoader(FBXLoader, "./Walking.fbx");
  const kk = useLoader(FBXLoader, "./textures/dwam.fbx");

  return (
    <>
      <primitive object={fbx} scale={0.005} />
      <primitive object={kk} position={[2, 0, 0]} scale={0.005} /> {/* Adjust position as needed */}
    </>
  );
};

export default function FBx() {
  return (
    <div className="App">
      <Canvas
        camera={{
          position: [0, 1.2, 1], // Adjust the position to zoom into the model
        }}
      >
        <Suspense fallback={null}>
          {/* Add DirectionalLight */}
          <directionalLight intensity={20} position={[0, 5, 0]} />
          <Scene />
          <OrbitControls />
          <Environment preset="sunset" background lightIntensity={10} />
        </Suspense>
      </Canvas>
    </div>
  );
}
