import React from 'react'

function Form() {
  return (
    <div className='w-[100%] h-[20vw] bg-black rounded-xl'>
        <div className='flex'>
            <div>
                <h4 className='text-[.7vw]'>Full Name</h4>
                <input
                    type="text"
                    placeholder=""
                    className='w-full bg-gray4 p-4 rounded-xl'
                />
            </div>
            <div>
                <h4>Company</h4>
                <input
                type="text"
                placeholder=''
                className='w-full bg-gray4 p-4 rounded-xl' 
                />
            </div>
        </div>
        
    </div>
  )
}

export default Form
