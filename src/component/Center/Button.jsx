import React from 'react'


const Button = (props) => {
  return (
    <div>
      <div className='border border-black p-5 font-bold text-5xl m-6 font-serif rounded-full shadow-lg hover:bg-slate-200 cursor-pointer duration-700'>
            {props.title}
      </div>
    </div>
  )
}

export default Button
