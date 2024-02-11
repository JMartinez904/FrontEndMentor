import React from 'react'

interface Props {
    children ?: JSX.Element;
    bgColor ?: string;
    className ?: string | string[];
}

export const Container = ({children, bgColor, className} : Props) => {
  return (
    <div className={`${Array.isArray(className) ? className.join(' ') : className} ${bgColor}`}>
        { children }
    </div>
  )
}
