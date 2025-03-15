import React,{useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import skymod from '../assets/3d/animesky.glb';
const Sky = ({isRotating}) => {
   const skyref=useRef();
  const skyscene=useGLTF(skymod)
   
  useFrame((_,delta)=>{
    if(isRotating){
      skyref.current.rotation.y+=0.25*delta
    }
  })
  return (
<mesh ref={skyref}>
 <primitive object={skyscene.scene}/>
</mesh>  )
}

export default Sky