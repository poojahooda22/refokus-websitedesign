import React from 'react'
import Faq from './Faq'
import Form from './Form'

function ContactForm() {
  return (
    <div className='w-full relative'>
      <div 
        className=' max-w-screen-xl mx-auto pt-[8vw] px-[5vw] sm:px-0 mt-[10vw] 
        sm:mt-[0vw]  flex flex-col-reverse sm:flex sm:flex-row justify-between'
      >
        <div className='w-full sm:w-1/2'>
          <div className='w-full min-h-[20vw] flex flex-col justify-between '>
            <h1 className='hidden sm:inline-block text-[5vw] uppercase leading-none'>
              Don&apos;t Be Shy with us
            </h1>
            <div>
              <p className='sm:w-1/2 sm:text-[.8vw] tracking-tight mt-[10vw] sm:mt-0'>
                Don&apos;t like forms? Well, too bad! This one is connected 
                to our CRM and makes everything 
                easier. Ok ok... here we go:
              </p>
              <button 
                className='text-[3vw] sm:text-[.8vw]
                py-[3vw] px-[5vw] sm:px-[1.3vw] mt-[4vw]
                sm:py-[.5vw] rounded-full sm:mt-[1.5vw] 
                border-[1px] border-secondary'
              >
                hello@refokus.com  
              </button>
            </div>  
          </div>
          <div className='mt-[10vw] sm:mt-[6vw]'>
            <Faq /> 
          </div>
        </div>
        
        {/* //form */}
        <div className='sm:w-1/3 '>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default ContactForm
