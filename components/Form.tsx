import React from 'react'

function Form() {
  return (
    <div className='w-[100%] h-[20vw] bg-black rounded-xl py-[1vw] px-[2vw]'>
        <div className=''>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-[.7vw] mb-[.4vw]'>Full Name</h4>
                    <input
                        type="text"
                        placeholder=""
                        className='w-full bg-gray4 p-4 rounded-xl'
                    />
                </div>
                <div>
                    <h4 className='text-[.7vw] mb-[.4vw]'>Company</h4>
                    <input
                        type="text"
                        placeholder=''
                        className='w-full bg-gray4 p-4 rounded-xl' 
                    />
                </div>
            </div>
            
        </div>
        <div>
            <h4 className='text-[.7vw] mb-[.4vw]'>Email address</h4>
            <input
                type="text"
                placeholder=''
                className='w-full bg-gray4 p-4 rounded-xl' 
            />
        </div>
        
    </div>
  )
}

export default Form
