import React from 'react'
import Github from '../assets/github.png';

const Work = () => {
  return (
    <div className='w-full sm:h-screen bg-[#0a192f] text-gray-300'>
     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
            <p className='py-4'>// Check out some of my recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 '>
           
              <a href='https://github.com/RaviiiiYadav'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className=' w-20 mx-auto ' src={Github} alt='github logo'></img>
                <p className='my-4 align-text-center'>Github</p>
                </div>
              </a>
            
        </div>

     </div>
    </div>
    
  )
}

export default Work