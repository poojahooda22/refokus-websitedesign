import React from 'react'

function Form() {
  return (
    <div className='w-[100%] h-[20vw] bg-black rounded-xl'>
        <div>
            <input
                type="text"
                placeholder="Name"
                className='w-full text-white p-4 rounded-xl'
            />
        </div>
    </div>
  )
}

export default Form
