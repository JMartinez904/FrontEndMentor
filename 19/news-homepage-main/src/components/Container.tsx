
export const Container = ({children} : { children : JSX.Element[]}) => {
  return (
    <div className='flex flex-col min-h-screen min-w-screen relative overflow-hidden max-h-screen sm:mx-32 sm:px-14 sm:pt-8'>
        { children }
    </div>
  )
}
