import React from 'react'
import Stripe from './Stripe'

function Stripes({padding}: {padding: string}) {
    var data = [
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            number: "15",
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            number: "52",
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            number: "2",
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            number: "15",
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            number: "52",
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            number: "2",
        }, 

    ]
  return (
    <div className={`${padding}`}>
        <p 
            className='hidden sm:hidden text-[4.2vw]  text-center
            sm:text-[1.5vw] xl:text-[1vw] font-regular text-[#787878] pt-[12vw]'
            >
            Web Design, Webflow Development, Creative Development
        </p> 
        <div className='hidden w-full sm:flex'>
            {data.map((elem, index) => (
                <Stripe key={index} val={elem} />
            ))}
        </div>
        
    </div>
  )
}

export default Stripes
