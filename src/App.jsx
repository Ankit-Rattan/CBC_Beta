import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Main from './component/Main'
import About from './component/About'
import Form from './component/Form'
import Footer from './component/Footer'
import Enter from './component/Enter'
import Loader from './component/Loader'


function App() {

  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 5000)
  },[])




  return (
    <div>
    {
      loading ? 
      <Loader/>
      :
      <div>

      <Navbar/>
      <Main/>
      <About/>
      <Enter/>
      <Form/>
      <Footer/>
      </div>
    }

    </div>
  )
}

export default App
