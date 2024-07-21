import React from 'react'

function Form() {
  return (
    <div 
        className='w-[100%] min-h-[20vw] bg-black rounded-xl 
        px-[4vw] py-[4vw] sm:py-[1.5vw] sm:px-[1.5vw]'
    >
        <div className=' flex flex-col gap-[5vw] sm:gap-[1vw]'>
            <div className='flex gap-[4vw] sm:justify-between text-gray3'>
                <div>
                    <h4 className='text-[3vw] sm:text-[.7vw] mb-[2vw] sm:mb-[.4vw]'>
                        Full Name
                    </h4>
                    <input
                        type="text"
                        placeholder=""
                        className='w-full bg-gray4 p-4 
                        rounded-xl'
                    />
                </div>
                <div>
                    <h4 
                        className='text-[3vw] 
                        sm:text-[.7vw] 
                        mb-[2vw] sm:mb-[.4vw]'
                    >
                        Company
                    </h4>
                    <input
                        type="text"
                        placeholder=''
                        className='w-full bg-gray4 p-4 
                        rounded-xl' 
                    />
                </div>
            </div>

            <div className='text-gray3'>
                <h4 className='text-[3vw] 
                    sm:text-[.7vw] 
                    mb-[2vw] sm:mb-[.4vw]'
                >
                    Email address
                </h4>
                <input
                    type="text"
                    placeholder=''
                    className='w-full bg-gray4 
                    p-4 rounded-xl' 
                />
            </div>
            <div className='text-gray3'>
                <h4 className='text-[3vw] sm:text-[.7vw] mb-[2vw] sm:mb-[.4vw]'>Your budget</h4>
                <select
                    name="budget"
                    id="budget"   
                    className='w-full bg-gray4 p-4 rounded-xl ' 
                >
                    <option value="30000-50000">Select one...</option>
                    <option value="50000-100000">$20,000 to $40,000</option>
                    <option value="100000-200000">$50,000 to $100,000</option>
                    <option value="200000+">$100,000 above </option>
                </select>
            </div>
            <div className='text-gray3'>
                <h4 className='text-[3vw] sm:text-[.7vw] mb-[2vw] sm:mb-[.4vw]'>What&apos;s on your mind</h4>
                <textarea
                    name="message"
                    id="message"
                    cols={20}
                    rows={10}
                    className='w-full bg-gray4 p-4 rounded-xl'
                    placeholder='Message'
                ></textarea>
            </div> 
        </div> 
        <button 
            className='text-[3vw] sm:text-[.8vw]
            py-[3vw] px-[5vw] sm:px-[1.3vw] mt-[4vw]
            sm:py-[.5vw] rounded-full sm:mt-[1.5vw] 
            border-[1px] border-secondary'
        >
            Send Message  
        </button>      
    </div>
  )
}

export default Form
