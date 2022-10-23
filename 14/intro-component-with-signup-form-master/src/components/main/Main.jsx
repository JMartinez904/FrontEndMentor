import React from 'react';
import Form from './Form';

export const Main = () => {
    return (
        <main
            className='bg-[url("images/bg-intro-mobile.png")] bg-no-repeat bg-Red flex flex-col gap-20 items-center justify-center min-h-screen font-poppins px-8 py-24
            lg:bg-[url("images/bg-intro-desktop.png")] lg:flex-row lg:px-[9rem] lg:gap-4
            lg:pt-16 lg:pb-14
        '
        >
            <blockquote
                className='flex flex-col gap-4 lg:w-1/2 lg:gap-8 lg:pt-5 lg:pl-2'
            >
                <h1
                    className='text-2xl font-bold text-center text-white px-2
            lg:text-5xl lg:text-left lg:px-0 lg:leading-[1.1] 
            '
                >
                    Learn to code by watching others
                </h1>
                <p
                    className='text-[16px] text-center text-white leading-normal
                    lg:text-left lg:leading-[1.625]'
                >
                    See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
                </p>
            </blockquote>
            <aside
                className='flex flex-col gap-8 
                lg:w-1/2 lg:gap-6 lg:pr-8'
            >
                <p
                    className='bg-Blue font-[16px] text-sm text-center text-white py-5 px-16 rounded-lg shadow-[0px_8px_0px_hsl(249,10%,26%,0.2)]
                    lg:text-normal lg:text-[15px]
                    '
                >
                    <span className='font-semibold'>Try it free 7 days</span> then $20/mo. thereafter
                </p>
                <Form/>
            </aside>
        </main>
    )
};
