import React from 'react'
import Logo from './images/CBC.png'
import Center from './Center/Center'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function Navbar() {

  return (
    <>

      <div className='flex justify-around mt-4 bg-slate-300 p-5 shadow-lg items-center p-px'>
        <div className='p-0 ml-2 '>
            <img src={Logo} alt='' className='rounded-full w-24 m-0 '/>
        </div>
        <div className='ml-auto pr-10 '>
            <ul className='flex gap-12 text-lg '>
                <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer'>Home</li>
                <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer'><a href='/center'>CBC Center</a></li>
                <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer'>About Us</li>
                <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer'>Contact Us</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
