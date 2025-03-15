import React, { Suspense,useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../utils/Loader'
import { Island } from '../models/island'
import Sky from '../models/sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from './HomeInfo'
const Home = () => {
  const [isRotating, setisRotating] = useState(false)
  const [currentStage, setcurrentStage] = useState(1)
  const AdjustIslandModel=()=>{
    let islandscale=null
    let islandpositon=[0,-6.5,-43]
    let islandrotation=[0.1,4.7,0]

    if(window.innerWidth<768){
      islandscale=[0.9,0.9,0.9]

    }else{
      islandscale=[1,1,1]
    }
    return [islandscale,islandpositon,islandrotation];
  }
  
  const AdjustPlaneModel=()=>{
    let planescale=null
    let planepositon=null
    // let islandrotation=[0.1,4.7,0]

    if(window.innerWidth<768){
      planescale=[1.5,1.5,1.5]
      planepositon=[0,-1.5,0]

    }else{
      planescale=[3,3,3]
      planepositon=[0,-4,-4]
    }
    return [planescale,planepositon];
  }
const [islandscale,islandpositon,islandrotation]=AdjustIslandModel();
const [planescale,planepositon]=AdjustPlaneModel();
  return (
    <section className='w-full h-screen relative'>
    <div className='absolute top-28 left-0 right-0 z-10 flex justify-center items-center'>{currentStage&&<HomeInfo currentStage={currentStage}/>}</div>
      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000, }}
      >
        <Suspense fallback={<Loader />}
        >
          <directionalLight positon={[1,1,1]} intensity={3}/>
          <ambientLight intensity={0.5} color={"#0x0000ff"}/>
          <hemisphereLight skyColor={"0x0000ff"} groundColor={'0x00ff00'}/>
          <Bird/>
          <Sky isRotating={isRotating}/>
          <Island position={islandpositon} scale={islandscale} rotation={islandrotation} isRotating={isRotating} setIsRotating={setisRotating} setCurrentStage={setcurrentStage}/>
          <Plane isRotating={isRotating} planescale={planescale} planeposition={planepositon} rotation={[0,20,0]}/>

        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home