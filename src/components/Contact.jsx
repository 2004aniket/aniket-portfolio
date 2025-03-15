import React, { Suspense } from 'react'
import { useState,useRef } from 'react'
import Fox from '../models/Fox';
import { Canvas } from '@react-three/fiber';
import Loader from '../utils/Loader';





const Contact = () => {
  const formkey=useRef(null);
  const [form, setform] = useState({name:"",email:"",message:""})
  const [isLoading, setisLoading] = useState(false)
  const [currentAnimation, setcurrentAnimation] = useState('idle')

  const handleChange = ({ target: { name, value } }) => {
    setform({ ...form, [name]: value });
  };
  const handleSubmit=(e)=>{
      e.preventDefault()
      setisLoading(true)
      setcurrentAnimation('idle')
      // setTimeout(() => {
      //    setcurrentAnimation('hit')
      // }, 5000);
  }
  const handleFocus=()=>setcurrentAnimation('hit')
  const handleBlur=()=>setcurrentAnimation('idle')


  return (
    <section class="relative flex lg:flex-row flex-col max-container">
<div className='flex-1 min-w-[50%]'>
    <form ref={formkey} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="name" value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="email" value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
          Type Message
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="message" value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
      </div>
      <div class="flex items-center justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onSubmit={handleSubmit} disabled={isLoading} >
          {isLoading?"...sending":"send message"}
        </button>
      </div> 
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2025 Aniket Pise. All rights reserved.
    </p>
  </div>
  <div  className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
    <Canvas camera={{near:0.1,far:1000,fov:75,position:[0.1,0,5]}} >
     <Suspense fallback={<Loader/>}>
     <directionalLight intensity={1}/>
     <ambientLight intensity={0.5}/>
       <Fox position={[0.5,0.2,0]} rotation={[12.6,-0.8,0]} scale={[0.8,0.8,0.8]} currentAnimation={currentAnimation}/>
     </Suspense>
  </Canvas>
  
  </div>

    
    </section>
   
  )
}

export default Contact