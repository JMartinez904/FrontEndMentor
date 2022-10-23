
import React from 'react';
import { useForm } from '../../customHooks/useForm';
import { Input } from './Input';

const initialValue = {
    FirstName: '',
    LastName: '',
    EmailAddress: '',
    Password: ''
}

export default function Form() {

    const [ , handleInputChange ] = useForm(initialValue);

    const inputFields = [
        {
            name: 'FirstName',
            placeholder: 'First Name'
        },
        {
            name: 'LastName',
            placeholder: 'Last Name',
        },
        {
            name: 'EmailAddress',
            placeholder: 'Email Address'
        },
        {
            name: 'Password',
            placeholder: 'Password'
        },
    ]

    return (
        <form action=""
            className='bg-white p-6 rounded-xl flex flex-col gap-4 
                shadow-[0px_8px_0px_hsl(249,10%,26%,0.2)]
                    lg:p-10 lg:justify-beetween lg:gap-5
                '
        >
            {
                inputFields.map(({ name, placeholder}) => {
                   return (
                   <Input
                        key = { name }
                        name = { name }
                        placeholder = { placeholder }
                        event = { handleInputChange }
                    />
                    )
                })
            }
            <button
                className='bg-Green font-medium text-white uppercase py-4 rounded-lg shadow-[0px_4px_0px_hsl(154,59%,40%,0.8)]
                        
                        '
            >
                Claim your free trial
            </button>
            <p
                className='text-GrayishBlue text-[10px] text-center px-8 leading-[1.75] lg:text-[11px]'
            >
                By clicking the button, you are agreeing to our <span className='text-Red font-bold'>Terms and Services</span>
            </p>
        </form>
    )
}
