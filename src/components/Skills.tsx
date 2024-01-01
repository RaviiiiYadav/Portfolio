import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Github from '../assets/github.png';
import Javascript from '../assets/javascript.png';
import Java from '../assets/java-logo.png';
import ReactLogo from '../assets/react.png';
import Node from '../assets/node.png';

const Skills = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                <p className='py-4'>// Below are the technologies that I have worked with</p>
            </div>
            <div className='w-full grid gird-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className=' w-20 mx-auto ' src={HTML} alt='html logo'></img>
                <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className=' w-20 mx-auto ' src={CSS} alt='css logo'></img>
                <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className=' w-20 mx-auto ' src={Javascript} alt='js logo'></img>
                <p className='my-4'>Javascript</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className=' w-20 mx-auto ' src={ReactLogo} alt='react logo'></img>
                <p className='my-4'>React</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className=' w-20 mx-auto ' src={Node} alt='node logo'></img>
                <p className='my-4'>Node JS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className=' w-20 mx-auto ' src={Java} alt='java logo'></img>
                <p className='my-4'>Java</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className=' w-20 mx-auto ' src={Github} alt='github logo'></img>
                <p className='my-4'>Github</p>
                </div>




            </div>
         
        </div>
    </div>
  )
}

export default Skills