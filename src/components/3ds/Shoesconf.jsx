import { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF,PerspectiveCamera, TransformControls,useCursor,OrbitControls } from "@react-three/drei"
import { HexColorPicker } from "react-colorful"
import { proxy,  useSnapshot } from "valtio"
import {create} from 'zustand'
import { useControls } from 'leva'


const useStore = create((set) => ({ target: null, setTarget: (target) => set({ target }) }))
function Box(props) {
  const setTarget = useStore((state) => state.setTarget)
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)
  return (
    <mesh {...props} onClick={(e) => setTarget(e.object)} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

const state = proxy({
    current: null,
    items: { laces: "#fff", mesh: "#fff", caps: "#fff", inner: "#fff", sole: "#fff", stripes: "#fff", band: "#fff", patch: "#fff" },
  })


export default function Shoesconf() {
    const { target, setTarget } = useStore()
    const { mode } = useControls({ mode: { value: 'translate', options: ['translate', 'rotate', 'scale'] } })
    const containerStyles = {
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden", 
      };
      const bodyStyles = {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };
      const canvasStyles = {
        position: "absolute",
        top: 0,
        left: 0,
      };
  const h1Styles = {
    margin: "0",
    padding: "0",
    fontSize: "5em",
    fontWeight: "400",
    lineHeight: "0.7em",
    letterSpacing: "-2px",
    color: "#272730",
    position: "absolute",
    top: "100px",
    left: "140px",
  };
  const pickerStyles = {
    margin: "0",
    position: "absolute",
    top: "100px",
    left: "250px",
    width: "120px",
    height: "120px",
  };
    return (
       
 <div style={containerStyles}>
      <div style={bodyStyles}>
      <h2 style={{color:"blue" , position: "absolute", top: "300px", left: "1100px" ,fontWeight: "bold"  }}>Click on shoes</h2>

        <Canvas 
        dpr={[1, 2]}
         onPointerMissed={() => setTarget(null)}
         style={canvasStyles}
        shadows
         camera={{ position: [0, 0, 0], fov: 10 }}>
        <ambientLight intensity={2.2} />
        <spotLight intensity={0.5} angle={0.1} penumbra={44} position={[0, 50, 0]} castShadow />
       
        {/* <Box position={[2, 2, 0]} /> */}
        {/* <Box /> */}
        {target && <TransformControls object={target} mode={mode} />}
        
          <group>
            <Suspense fallback={null}>
            <Shoes   />
            </Suspense>
          </group>
          
          <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[-5, -0.1, -2]} receiveShadow>
        <planeGeometry  args={[15, 10, 1, 1]} /> 
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
         
      
        <fog attach="fog" args={['yellow', 10, 50]} />
        <OrbitControls makeDefault autoRotate minDistance={2} maxDistance={10} />
        <PerspectiveCamera makeDefault position={[2, 0.5, 2]} near={0.8} far={1000} fov={9} />
        </Canvas>
        <div style={bodyStyles}>
        <h1 style={h1Styles}></h1>
        <div style={pickerStyles}>
          <Picker />
        </div>
      </div>
        
           </div>
    </div>

    )

  }


  
   function Shoes() {

    
    const ref = useRef()
    const snap = useSnapshot(state)
    const { nodes, materials } = useGLTF('/shoes.glb')
    const [hovered, set] = useState(null)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
        ref.current.position.y = (1 + Math.sin(t / 1.5)) / 28
      })
    
      useEffect(() => {
        const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="#fff-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
        const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
        if (hovered) {
          document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
          return () => (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`)
        }
      }, [hovered])
    

    return (
      <group 
      ref={ref}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onClick={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
      dispose={null}>
          <group position={[0.06, 0, 0]}>
          <mesh receiveShadow castShadow geometry={nodes.Plane017.geometry}   material-color={snap.items['Material.003']} material={materials['Material.003']}   />
        <mesh receiveShadow castShadow geometry={nodes.Plane017_1.geometry} material-color={snap.items.Plastik} material={materials.Plastik}          />
        <mesh receiveShadow castShadow geometry={nodes.Plane017_2.geometry} material-color={snap.items['leather 01.001']} material={materials['leather 01.001']}  />
        <mesh receiveShadow castShadow geometry={nodes.Plane017_3.geometry} material-color={snap.items.Stoff} material={materials.Stoff}             />
        <mesh receiveShadow castShadow geometry={nodes.Plane017_4.geometry} material-color={snap.items['leather 01.004']} material={materials['leather 01.004']} />
        <mesh receiveShadow castShadow geometry={nodes.Plane017_5.geometry} material-color={snap.items['leather 01.005']} material={materials['leather 01.005']} />
        <mesh receiveShadow castShadow geometry={nodes.Plane017_6.geometry} material-color={snap.items.Garn} material={materials.Garn}               />
        <mesh receiveShadow castShadow geometry={nodes.Plane017_7.geometry} material-color={snap.items.Auge} material={materials.Auge}               />
        <mesh receiveShadow castShadow geometry={nodes.Plane017_8.geometry} material-color={snap.items['Material.004']} material={materials['Material.004']}    />
          </group>
      </group>
    )
  }
  useGLTF.preload('/shoes.glb')



  function Picker() {
    const snap = useSnapshot(state)
    return (
      <div style={{ display: snap.current ? "block" : "none" }}>
        <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
        <h1>{snap.current}</h1>
        
      </div>
    )
  }