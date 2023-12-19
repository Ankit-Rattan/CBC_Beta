import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Main from './component/Main'
import About from './component/About'
import Form from './component/Form'
import Footer from './component/Footer'
import Enter from './component/Enter'
import Loader from './component/Loader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Center from './component/Center/Center'
import Home from './Home'


function App() {



  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='/center' element={<Center/>}> </Route>
          </Routes>
        </BrowserRouter>    

    </div>
  )
}

export default App
