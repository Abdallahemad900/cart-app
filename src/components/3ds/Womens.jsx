

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useCharacterAnimations } from './characteranime/characteranimation'

export function Womano(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./ani/womens.glb')
  const { actions , names } = useAnimations(animations, group)
  const { setAnimations, animationIndex } = useCharacterAnimations()

  
  useEffect(() => {
    setAnimations(names);
  }, [names]);



  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [animationIndex]);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="walk" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh castShadow name="Mesh" geometry={nodes.Mesh.geometry} material={materials.SpacePirate_M} skeleton={nodes.Mesh.skeleton} />
        </group>
        <group name="run" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips_1} />
        </group>
        <group name="idle" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips_2} />
        </group>
      </group>
    </group>
  )
}
export default Womano
useGLTF.preload('./ani/womens.glb')





