import React from 'react'

const About = () => {
  return (
    <div data-name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-center pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full sm: grid grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-bold text-4xl'>
                    <p >Hi. I'm Ravi , nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>
                    I'm passionate about building robust and scalable web applications, with a focus on both front-end and back-end technologies. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About