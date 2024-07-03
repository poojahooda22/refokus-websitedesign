'use client'

import React from 'react'
import Cursor from "@/components/StickyCursor/Index";
import { useRef} from 'react';
import Header from '@/components/header/Index'
import ContactForm from '@/components/ContactPage';

function Contact() {
    const stickyElement = useRef(null);
  return (
    <div 
        className='w-full min-h-[100vh] relative 
      bg-primary text-secondary overflow-hidden'
    >
      {/* <Cursor stickEemnt={stickyElem>*/}
      <Header/>
      <ContactForm/>
    </div>
  )
}

export default Contact
