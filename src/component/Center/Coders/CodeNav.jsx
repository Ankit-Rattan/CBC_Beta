import React from 'react';
import Footer from '../../Footer';
    

const CodeNav = () => {
  return (
    <>
        <div className='mt-4 bg-slate-300 p-5 shadow-lg items-center'>
          <div className='justify-center'>
            <ul className='flex text-lg text-center justify-around'>
              <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer'><a href='/blog'>Bytes</a></li>
              <li className='border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer'><a href='/chatcode'>OPEN Chat</a></li>
            </ul>
          </div>
        </div>

    </>
  );
};

export default CodeNav;
