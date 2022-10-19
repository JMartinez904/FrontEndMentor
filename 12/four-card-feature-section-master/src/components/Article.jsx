/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

export const Article = ({props, index}) => {

  const { title, desc, img, color} = props;

  return (
    <article 
      className={ index !== 2 ? color+` bg-white drop-shadow-xl flex flex-col p-6 gap-8 rounded-lg overflow-hidden
      after:content-[""] after:w-full after:h-1 after:absolute after:left-0 after:top-0
      lg:first-of-type:row-start-1 lg:first-of-type:row-end-3
      lg:last-of-type:row-start-1 lg:last-of-type:row-end-3
      lg:max-w-[300px]
      `
      : 
      color+` bg-white drop-shadow-xl flex flex-col p-6 gap-8 rounded-lg overflow-hidden
      after:content-[""] after:w-full after:h-1 after:absolute after:left-0 after:top-0
      lg:row-start-2 lg:col-start-2
      lg:max-w-[300px]
      `}>
      <div
        className='flex flex-col gap-1'
      >
        <h3
          className='font-semibold text-VeryDarkBlue text-lg'
        >
          { title }
        </h3>
        <p
          className='text-GrayishBlue text-xs leading-6 pr-4 lg:pr-3'
        >
          { desc }
        </p>
      </div>
      <picture className='self-end'>
        <img className='max-w-[90%]' src={img} alt="Supervisor" />
      </picture>
    </article>
  )
};

Article.proptypes = {
  props : PropTypes.object.isRequired
}
