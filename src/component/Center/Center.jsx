import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Button from './Button'
const Center = () => {
  return (
    <div>
        
    <div>
        <Navbar/>
        <div className='flex justify-around m-16'>
        <a href='/creater'><Button title="Create by Creators"/></a>
        <a href='/coder'><Button title="Create by Coders"/></a>
        </div>
        <div></div>
        <Footer/>
    </div>
    </div>
  )
}

export default Center
