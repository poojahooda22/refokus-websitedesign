import React from 'react'

function Form() {
  return (
    <div className='w-[100%] h-[20vw] bg-black rounded-xl py-[1.5vw] px-[1.5vw]'>
        <div className=''>
            <div className='flex justify-between mb-[1vw] text-gray3'>
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
                        className='w-full bg-gray4 p-4 
                        rounded-xl' 
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
        <div className='mt-[1vw]'>
            <h4 className='text-[.7vw] mb-[.4vw]'>Budget</h4>
            <select
                name="budget"
                id="budget"   
                className='w-full bg-gray4 p-4 rounded-xl ' 
            >
                <option value="30000-50000">Select one...</option>
                <option value="50000-100000">$30,000 to $50,000</option>
                <option value="100000-200000">$100,000 to $200,000</option>
                <option value="200000+">$200,000 </option>
            </select>
        </div>
        
    </div>
  )
}

export default Form
