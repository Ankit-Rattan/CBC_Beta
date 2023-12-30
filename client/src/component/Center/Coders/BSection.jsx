import React from 'react'

const BSection = (props) => {
  return (
    <>

    <div className='justify-center items-center border rounded-lg p-4 m-2 max-w-xl shadow-2xl bg-slate-100'>
      <div className=''>
        <img src={props.imglink} alt='' className='rounded-lg max-w-lg m-0 '/>
      </div>
      <div className='justify-center text-center'>

      <div>
        <h1 className='font-semibold font-sans text-2xl'>{props.title}</h1>
      </div>
      <div>
        <p className='font-semibold font-sans text-sm'>{props.name}</p>
        <p className='font-semibold font-sans text-sm'>{props.date}</p>
      </div>
      <div>
        <p className=''>{props.primarytext}</p>
      </div>
      <br/>
      </div>
      <div className='text-right text-blue-700'>
      <a href={props.link}>Read More</a>
      </div>
    </div>
    </>
  )
}

export default BSection
