import { useState } from "react";

export const useForm = (initialValue = {}) => {

  const [input, setInputValue] = useState(initialValue);

  const handleInputChange = (e) => {

    const inputName = e.target.name;
    const value = e.target.value;
    const paragraph = e.target.parentElement.querySelector('.p-error');

    value === '' ?
      (() => {
        e.target.classList.add('bg-error');
        paragraph.classList.remove('hidden');
      })()
      :
      (() => {
        e.target.classList.remove('bg-error');
        paragraph.classList.add('hidden');
      })();

    /**
     * This is a bad practice, don't reply
     */

    inputName === 'EmailAddress'
      ?
      (() =>
      (
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) ?
          (() => {
            e.target.classList.remove('bg-error');
            e.target.parentElement.querySelector('.p-email__error').classList.add('hidden');
          })()
          :
          (() => {
            e.target.classList.add('bg-error');
            e.target.parentElement.querySelector('.p-email__error').classList.remove('hidden');
          })()
      )
      )() : '';


    setInputValue((prev) => {
      return {
        ...prev,
        [inputName]: value
      }
    })
  };

  return [
    input,
    handleInputChange
  ]

}
