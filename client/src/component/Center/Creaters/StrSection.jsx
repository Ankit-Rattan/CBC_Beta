import React from 'react';

const StrSection = (props) => {
  return (
    <>
      <div className='justify-center items-center border rounded-lg p-4 m-10 max-w-xl shadow-2xl bg-slate-100'>
        <div className=''>
          {props.imglink ? (
            <img src={props.imglink} alt='' className='rounded-lg max-w-lg m-0' />
          ) : (
            <p>No image available</p>
          )}
        </div>
        <div className='justify-center text-center'>
          <div>
            <h1 className='font-semibold font-sans text-2xl'>{props.title}</h1>
          </div>
          <div>
            <p className='font-semibold font-sans text-sm'>Writte By : {props.name}</p>
            <p className='font-semibold font-sans text-sm'>Published On : {props.date}</p>
          </div>
          <div>
            <p className=''>{props.primarytext}</p>
          </div>
          <br />
        </div>
        <div className='text-right text-blue-700'>
          {props.link ? (
            <a href={props.link} target='_blank' rel='noopener noreferrer'>
              Read More
            </a>
          ) : (
            <span>No Link Available</span>
          )}
        </div>
      </div>
    </>
  );
};

export default StrSection;
