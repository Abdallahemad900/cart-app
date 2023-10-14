

// import React, { useRef, useState } from 'react';
// import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
// import { useLoader } from '@react-three/fiber';
// import { Environment } from '@react-three/drei';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { Suspense, useEffect } from 'react';
// import { OrbitControls } from '@react-three/drei';

// extend({ OrbitControls });

// const Model = () => {
//   const gltf = useLoader(GLTFLoader, './scene.gltf');
//   const modelRef = useRef();
//   const { camera } = useThree();

//   useFrame(() => {
//     // Your animation code here, if needed
//   });

//   return (
//     <>
//       <primitive object={gltf.scene} scale={0.4} ref={modelRef} />
//       <OrbitControls enableZoom={true} minDistance={2} maxDistance={10} />
//     </>
//   );
// };

// export default function TDcomp() {
//   return (
//     <div className="App">
//       <Canvas
//         camera={{
//           position: [0, 0, 5],
//         }}
//       >
//         <Suspense fallback={null}>
//           <Model />
//           <Environment preset="sunset" background />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }














import React, { useRef, useState } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';

extend({ OrbitControls });

const Model = ({ moveModel }) => {
  const gltf = useLoader(GLTFLoader, './scene.gltf');
  const modelRef = useRef();
  const { camera } = useThree();
  const [moveState, setMoveState] = useState({
    front: false,
    back: false,
    left: false,
    right: false,
  });
  const [speed, setSpeed] = useState(0.1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setMoveState({ ...moveState, front: true });
          break;
        case 'ArrowDown':
          setMoveState({ ...moveState, back: true });
          break;
        case 'ArrowLeft':
          setMoveState({ ...moveState, left: true });
          break;
        case 'ArrowRight':
          setMoveState({ ...moveState, right: true });
          break;
        case 'Shift':
          setSpeed(0.2); // Increase speed when Shift is pressed
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setMoveState({ ...moveState, front: false });
          break;
        case 'ArrowDown':
          setMoveState({ ...moveState, back: false });
          break;
        case 'ArrowLeft':
          setMoveState({ ...moveState, left: false });
          break;
        case 'ArrowRight':
          setMoveState({ ...moveState, right: false });
          break;
        case 'Shift':
          setSpeed(0.1); // Reset speed when Shift is released
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [moveState]);

  useFrame(() => {
    if (moveState.front) {
      modelRef.current.position.z -= speed;
    }
    if (moveState.back) {
      modelRef.current.position.z += speed;
    }
    if (moveState.left) {
      modelRef.current.position.x -= speed;
    }
    if (moveState.right) {
      modelRef.current.position.x += speed;
    }
  });

  return (
    <>
      <primitive object={gltf.scene} scale={0.4} ref={modelRef} />
      <OrbitControls enableZoom={true} minDistance={2} maxDistance={10} />
    </>
  );
};

export default function TDcomp() {
  return (
    <div className="App">
      <Canvas
        camera={{
          position: [0, 0, 5],
        }}
      >
        <Suspense fallback={null}>
          <Model />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
