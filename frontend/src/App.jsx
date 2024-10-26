import React from 'react'
import { useState } from 'react'
//import { BrowserRouter,Routers,Route, Router, useNavigate } from 'react-router-dom'
import './App.css'
//import Loginmain from './Login/Loginmain'
//import Dashbordmain from './Dashbord/Dashbordmain'
import axios from 'axios'
function App() {

  
  const [file,Setfile] = useState("")
  const handlefile = (e)=>{
    e.preventDefault();
    const data = {img:file}
    axios.post('http://localhost:801/upload',data);
  }
  return (
   <>
   
      <form onSubmit={handlefile} className=''>
        <input type="file" name = 'profileimage' value={file} onChange={(e)=>Setfile(e.target.value)}/>
        <button type='submit' className='border border-red'>submit</button>
        
      </form>
    
   </>
  )
}

export default App
