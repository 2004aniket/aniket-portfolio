import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='flex rounded-lg h-50 w-30 items-center justify-center gap-x-96 pt-5 bg-transparent p-5 text-3xl font-mono bg-gradient-to-r from-blue-200 to-cyan-200'>
        <NavLink to={'/'}>
          <p className='text-blue-500 font-mono font-bold text-3xl'>AP</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-bold' >
           <NavLink to={'/About'} className={({isActive})=>isActive?'text-blue-500':'text-black'}>About</NavLink>
           <NavLink to={'/Projects'} className={({isActive})=>isActive?'text-blue-500':'text-black'}>Projects</NavLink>

            
        </nav>
    </header>
  )
}

export default Navbar