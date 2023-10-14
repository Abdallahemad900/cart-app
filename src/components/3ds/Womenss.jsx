import React, { useRef, useState, useEffect } from 'react';
import { Canvas, extend, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import dat from 'dat.gui';

// Ensure you have extended OrbitControls and added SpotLightHelper (optional)
extend({ OrbitControls });

const Models = ({ setActions, lights }) => {
  const gltf = useLoader(GLTFLoader, './ani/womens.glb');
  const mixer = useRef();
  const model = useRef();

  useEffect(() => {
    mixer.current = new THREE.AnimationMixer(gltf.scene);
    const animationActions = gltf.animations.map((clip) => mixer.current.clipAction(clip));
    setActions(animationActions);
  }, [gltf.scene, setActions]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <group ref={model}>
      {/* Set up shadow properties for the character model */}
      <mesh
        receiveShadow // Enable shadow receiving
        castShadow   // Enable shadow casting
      >
        <primitive object={gltf.scene} scale={0.4} />
      </mesh>
      {lights}
    </group>
  );
};

export default function Women() {
  const [actions, setActions] = useState([]);
  const [activeActionIndex, setActiveActionIndex] = useState(null);

  // Create lights
  const lights = (
    <>
      {/* Directional Light */}
      <directionalLight
        color="#ffff00"
        intensity={3}
        position={[3, 3, 3]}
        
        shadow-mapSize-x={1024}
        shadow-mapSize-y={1024}
        shadow-bias={-0.00002}
        shadow-camera-top={2}
        shadow-camera-bottom={-2}
        shadow-camera-left={-2}
        shadow-camera-right={2}
      />
      {/* Ambient Light */}
      <ambientLight color="#0000ff" intensity={1} />
    </>
  );

  const handleAnimationClick = (index) => {
    if (activeActionIndex !== null) {
      actions[activeActionIndex].stop();
    }
    actions[index].play();
    setActiveActionIndex(index);
  };

  return (
    <div className="App">
      <Canvas
        camera={{
          position: [0, 0.5, 0.9],
        }}
        background={null}
      >
        <Suspense fallback={null}>
          {/* Add ambient light to the scene */}
          <ambientLight intensity={0.7} color={0x333333} />
          <Models setActions={setActions} lights={lights} />
          <OrbitControls />
          {/* Create the floor */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]} // Rotate the floor to be horizontal
            position={[0, -.01, 0]} // Position the floor under the character
          >
            <circleGeometry args={[8, 32]} attach="geometry" />
            <meshStandardMaterial attach="material" color="pink" roughness={0.5} />
          </mesh>
        </Suspense>
        {/* Set up shadow properties for the entire scene */}
        <fog attach="fog" args={['gray', 10, 50]} />
      </Canvas>
      <div style={{marginTop:"100px"}}>
        <button onClick={() => handleAnimationClick(0)}>Play Idle</button>
        <button onClick={() => handleAnimationClick(1)}>Play Run</button>
        <button onClick={() => handleAnimationClick(2)}>Play Walk</button>
      </div>
    </div>
  );
}
