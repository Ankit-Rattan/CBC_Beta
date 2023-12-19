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
import Coder from './component/Center/Coders/Coder'
import Creater from './component/Center/Creaters/Creater'
import Blog from './component/Center/Coders/Blog'
import ChatCode from './component/Center/Coders/ChatCode'


function App() {



  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='/center' element={<Center/>}> </Route>
            <Route path='/coder' element={<Coder/>}> </Route>
            <Route path='/creater' element={<Creater/>}> </Route>
            <Route path='/blog' element={<Blog/>}> </Route>
            <Route path='/chatcode' element={<ChatCode/>}> </Route>
          </Routes>
        </BrowserRouter>    

    </div>
  )
}

export default App
