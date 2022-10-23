import React from 'react';
import { useState } from 'react';

export const Layout = () => {

    const [ inputEmailValue, setInputEmailValue ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const errorMsg = document.querySelector('.error-msg');
        const errorIcon = document.getElementById('errorIcon');
        const input = document.querySelector('input[name="email"]');

       if( !(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputEmailValue)) ) {
        errorMsg.classList.remove('opacity-0');
        errorMsg.classList.add('opacity-100');
        errorIcon.classList.add('opacity-100');
        input.classList.remove('border-DesaturatedRed/50');
        input.classList.remove('outline-DesaturatedRed');
        input.classList.add('border-SoftRed','outline-SoftRed');
    } else {
        errorMsg.classList.remove('opacity-100');
        errorMsg.classList.add('opacity-0');
        errorIcon.classList.remove('opacity-100');
        input.classList.remove('border-SoftRed','outline-SoftRed');
        input.classList.add('border-DesaturatedRed/50');
        input.classList.add('outline-DesaturatedRed');
       }
    }

  return (
    <main 
    className='items-center flex flex-col min-h-screen gradient__block 
        lg:grid lg:grid-rows-[100px_minmax(0,1fr)] lg:grid-cols-[12%_33%_13%_42%] lg:grid-flow-col lg:bg-no-repeat'>
        <nav className='self-start p-8
            lg:col-start-2 lg:col-end-3 lg:p-0 lg:flex lg:flex-col lg:justify-end lg:h-full lg:pb-1
        '>
            <a href="">
                <picture>
                    <img src="/images/logo.svg" alt="BrandMark" 
                        className='h-5 lg:h-[2.05rem]'
                    />
                </picture>
            </a>
        </nav>
        <picture
            className='lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3'
        >
            <img src="/images/hero-mobile.jpg" alt="girl" className='block lg:hidden' />
            <img src="/images/hero-desktop.jpg" alt="girl" 
            className='hidden lg:block lg:max-w-none lg:w-full lg:h-screen' />
        </picture>
        <blockquote 
            className='flex flex-col items-center gap-4 py-14 px-8
            lg:col-start-2 lg:col-end-3 lg:px-0 lg:items-start lg:pr-8
            '>
            <h1
                className='font-josefinsan font-semibold text-4xl tracking-[0.5rem] text-center uppercase
                lg:text-left lg:text-[4rem] lg:tracking-[1rem] lg:leading-[1.1]
                '
            >
                <span className='block font-normal font-light text-DesaturatedRed 
                    lg:leading-[1]
                '>We're </span> 
                coming 
                soon 
            </h1>
            <p
                className='font-josefinsan text-center text-DesaturatedRed text-[14px] pb-4
                lg:text-left lg:text-base lg:leading-[1.75rem] lg:pb-6
                '
            >
            Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
            </p>
            <form 
                className='w-full relative mb-8'
                onSubmit={handleSubmit}
            >
                <input type="text" name="email" id="" autoComplete='off'
                    className='border border-DesaturatedRed/50 bg-transparent text-[14px] font-semibold text-josefinsan py-3 px-6 rounded-l-full rounded-r-full text-DarkGrayishRed w-full outline-DesaturatedRed duration-300
                    transition-colors duration-500 z-0
                    placeholder:text-josefinsan placeholder:text-DesaturatedRed placeholder:opacity-50 
                    lg:px-8 lg:text-[15px] lg:py-[0.9rem]
                    '
                    onChange={({target:{value}}) => setInputEmailValue(value)}
                    placeholder='Email Address'
                />
                <p 
                    className='error-msg absolute bottom-[-1.5rem] left-[1.5rem] text-[13px] text-SoftRed/[0.8] font-josefinsan font-semibold opacity-0 transition-opacity duration-200
                    lg:left-[2rem] lg:bottom-[-1.75rem]
                    '
                >Please provide a valid email</p>
                <svg 
                    className='absolute top-[50%] translate-y-[-50%] right-[4.5rem] opacity-0 transition-opacity duration-200
                    lg:right-[7.5rem]
                    '
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="errorIcon"><g fill="none" fillRule="evenodd"><circle cx="12" cy="12" r="12" fill="#F96464"/><path fill="#FFF" fillRule="nonzero" d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"/></g></svg>
                <button
                    className='absolute py-[0.87rem] px-6 gradient__unfocus top-[50%] translate-y-[-50%] right-0 rounded-l-full rounded-r-full
                    shadow-2xl
                    outline-none
                    z-10
                    lg:py-[1.1rem] lg:px-[2.7rem]
                    '
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-3' ><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 1l8.836 8.836L1 18.671"/></svg>
                </button>
            </form>
        </blockquote>
    </main>
  )
};
