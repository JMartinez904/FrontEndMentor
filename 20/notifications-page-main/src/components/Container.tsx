
export const Container = ({children, className = ""} : { children : (JSX.Element[] | JSX.Element), className : (string ) }) => {
  return (
    <section className={`${className} flex flex-col justify-start items-center min-h-screen min-w-screen `} >
        {children}
    </section>
  )
}
