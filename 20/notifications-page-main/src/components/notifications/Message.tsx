import React from 'react'

export const Message = ({message} : {message : string}) => {
  return (
    <p className='border border-lightGrayishBlue1 rounded-lg text-[.89rem] p-[0.9rem] leading-[1.14rem] max-w-[262px] mb-[0.9rem] sm:max-w-[35.5rem] sm:text-base sm:word-spacing-md sm:pl-[1.2rem] sm:leading-[1.3rem] sm:pt-[1.05rem] tracking-[0.001rem] sm:mb-[1.4rem] bg-lightGrayishBlue2/25   hover:cursor-pointer hover:bg-lightGrayishBlue1 transition-all'>
        {message}
    </p>
  )
}
