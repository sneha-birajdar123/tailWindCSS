import React, { useState } from 'react'
import image from "./assets/image.png"

const App = () => {
  
  return (
    <>
      <div>
        <div>
        <h1 className='text-4xl mt-10 ml-40 text-blue-500 font-semibold'>Devkit.</h1>
        </div>

      <div className='flex ml-250 mt-1 gap-10'>
        <a href="#" className='font-normal'>Account</a>
        <a href="#" className='font-normal'>About</a>
        <a href="#" className='font-normal'>Contact</a>
        <a href="#" className='font-normal'>Service</a>
      </div>
        
      </div>

      <div className='m-20  flex'>
        <div className='ml-20'>
          <h1 className='text-4xl font-semibold mt-20'>Welcome to <span className='text-blue-500'>Devkit.</span> <br /> Develop Anything</h1>
          <p className='mt-10 text-gray-800 font-normal'>Build a beautiful, modern website with flexible <br />components built from scratch</p>
        </div>

        <div> 
          <img src={image} alt="" className='ml-90' />
        </div>
      </div>
      
    </>
  )
}

export default App