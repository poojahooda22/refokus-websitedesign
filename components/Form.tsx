import React from 'react'

function Form() {
  return (
    <div className='w-[100%] h-[20vw] bg-black rounded-xl'>
        <div>
            <div>
                <h4>Full Name</h4>
                <input
                    type="text"
                    placeholder="Name"
                    className='w-full text-white p-4 rounded-xl'
                />
            </div>
            <div>
                <h4>Company</h4>
                <input
                type="text"
                placeholder=''
                className='w-full' 
                />
            </div>
        </div>
        
    </div>
  )
}

export default Form
