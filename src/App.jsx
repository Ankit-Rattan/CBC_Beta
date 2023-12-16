import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Main from './component/Main'
import About from './component/About'
import Form from './component/Form'
import Footer from './component/Footer'
import Enter from './component/Enter'


function App() {

  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Enter/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
