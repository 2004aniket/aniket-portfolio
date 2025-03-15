import React from 'react'
import {Route,BrowserRouter as Router,Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import {Home,About,Projects,Contact} from "./components/index"
const App = () => {
    return (
       <main className='bg-slate-300/20'>
          <Router>
           <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Projects' element={<Projects/>}/>
                <Route path='/Contacts' element={<Contact/>}/>
            </Routes>
          </Router>
       </main>
    )
}

export default App