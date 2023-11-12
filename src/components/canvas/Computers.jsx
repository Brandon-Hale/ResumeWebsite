import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Computers = ( { isMobile} ) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  //sketchfab has lots of 3D models that can be used
  //calls a mesh that has a object of the computer - the lights are required to display the Computer as it is dark without them
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black"/>
      <pointLight intensity={10}/>
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
      <primitive object={computer.scene} scale={isMobile ? 0.7: 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //add event listenser for changes to screen size
    const mediaQuery = window.matchMedia('(max-width:500px)');

    //set initial value to the current state
    setIsMobile(mediaQuery.matches);

    //callback function to handle changes to media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    //add callback function as a listener
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    //remove when component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  //creates how the computer can be rotated and displayed on the canvas, preload these before website is loaded.
  return (
    <Canvas frameloop="demand" shadows camera={{position: [20, 3, 5], fov: 25}} gl={{ preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas