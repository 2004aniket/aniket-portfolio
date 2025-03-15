import React,{useEffect,useRef} from 'react'
import bird from '../assets/3d/bird.glb'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'
const Bird = () => {
  const birdref=useRef()

    const {scene,animations}=useGLTF(bird)
    const {actions}=useAnimations(animations,birdref)
   useEffect(() => {
     actions['Take 001'].play();
   

   })

   useFrame(({clock,camera})=>{
      birdref.current.position.y=Math.sin(clock.elapsedTime)*0.2+2
      if(birdref.current.position.x>camera.position.x+10){
        birdref.current.rotation.y=Math.PI
      }else if(birdref.current.position.x<camera.position.x-10){
        birdref.current.rotation.y=0
      }


       if(birdref.current.rotation.y===0){
        birdref.current.position.x+=0.01
        birdref.current.position.z-=0.01

       }else{
        birdref.current.position.x-=0.01
        birdref.current.position.z+=0.01
       }


   })
   

  return (
   <mesh scale={[0.003,0.003,0.003]} ref={birdref}>
      <primitive object={scene}/>
   </mesh>
  )
}

export default Bird