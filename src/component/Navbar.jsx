import React from 'react'

function Navbar() {

  return (
    <>
      <div className='flex justify-around mt-4 bg-slate-300 p-5 shadow-lg'>
        <div className=''>
            <img src='' alt='' className=''/>
        </div>
        <div className='ml-auto pr-10 '>
            <ul className='flex gap-12 text-lg '>
                <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer'>Home</li>
                <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer'>CBC Center</li>
                <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer'>About Us</li>
                <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer'>Contact Us</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
