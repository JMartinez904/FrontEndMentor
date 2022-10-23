import React from 'react'

export const Input = ({ name, placeholder, event }) => {
  return (

    <div>
      <input type="text"
        className='border w-full py-4 text-[14px] px-4 rounded-lg
                        placeholder:font-bold
                        lg:px-8 
                        '
        placeholder={ placeholder }
        name={ name }
        onInput= { event }
      />
      <p
        className='p-error hidden'
      >
        {placeholder} cannot be empty
      </p>
      {
        name === 'EmailAddress' && (
          <p
            className='p-email__error hidden'
          >
            Looks like this is not an email
          </p>
        )
      }
    </div>

  )
}
