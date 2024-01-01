import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action='' className='flex flex-col  max-w[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-xl text-gray-400'>
                    Shoot me an email -raviyadavb02@gmail.com  
                </p>
            </div>
            {/* <input type='text' placeholder='Name' name='name'></input> */}

        </form>

    </div>
  )
}

export default Contact