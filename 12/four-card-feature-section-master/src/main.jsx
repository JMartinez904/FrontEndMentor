import React from 'react'
import ReactDOM from 'react-dom/client'
import { Article } from './components/Article';
import './index.css';

const info = [
  {
    title: 'Supervisor',
    desc: 'Monitors activity to identify project roadblocks',
    color: 'after:bg-Cyan',
    img: '/images/icon-supervisor.svg'
  },
  {
    title: 'Team Builder',
    desc: 'Scans our talent network to create the optimal team for your project',
    color: 'after:bg-Red',
    img: '/images/icon-team-builder.svg'

  },
  {
    title: 'Karma',
    desc: 'Regularly evaluates our talent to ensure quality',
    color:'after:bg-Orange',
    img: '/images/icon-karma.svg'
  },
  {
    title: 'Calculator',
    desc: 'Uses data from past projects to provide better delivery estimates',
    color: 'after:bg-Blue',
    img: '/images/icon-calculator.svg'
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main
      className='bg-VeryLightGray flex flex-col gap-y-14 items-center justify-center min-h-screen py-20 px-10
      lg:py-0'
    >
      <div 
        className='flex flex-col gap-y-4'>
        <h1
          className='font-extralight text-2xl text-center
            lg:text-4xl
            lg:text-VeryDarkBlue
          '>
          Reliable, efficient delivery
          <span className='block font-semibold text-VeryDarkBlue lg:mt-2'>
            Powered by Technology
          </span>
        </h1>
        <p
          className='text-center text-GrayishBlue text-[15px] 
          lg:px-12 lg:max-w-[65%] lg:self-center'
        >
          Our Artificial Intelligence powered tools use millions of project data 
          points to ensure that your project is successful
        </p>
      </div>
      <div 
        className='flex flex-col justify-center items-center relative gap-6
        lg:grid lg:grid-cols-3
        '
      >
        {
          info.map( (props,key) =>{

           return <Article key={key} props={props} index={key} /> 
          })
        }
      </div>
      <div className='lg:absolute  bottom-0'>
        <p className="text-center">
          Challenge by <a href="https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK/hub/  four-card-feature-section-xRy6dCRqX5" className='text-Blue' target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a href="https://www.frontendmentor.io/profile/JMartinez904">José Martínez</a>.
        </p>
      </div>
    </main>
  </React.StrictMode>
)
