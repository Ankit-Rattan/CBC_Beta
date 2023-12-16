import React from 'react'
import mainOne from './images/mainOne.jpg';
import mainTwo from './images/mainTwo.png';

function Main() {

  return (
    <div className=' main m-5'>
        <div className='flex justify-around flex-wrap'>
            <div className=' m-auto'>   
                <p className='font-extrabold font-mono text-8xl mb-3'>Now!</p>
                <p className='text-5xl flex gap-3 flex-wrap font-thin'><p className='text-purple-800 font-normal'>Creators</p> have their own place</p>
                <p className='text-4xl flex gap-3 flex-wrap font-thin'>Other than <p className='text-red-500 font-mono'>Work Place</p></p>
            </div>
            <div>
                <img src={mainTwo} alt='' className='mr-10'/>
            </div>
        </div>
    </div>
  )
}

export default Main;
