import logo from "/images/logo.svg";
import iconMenu from "/images/icon-menu.svg";

export const Header = ({openNav} : { openNav: () => void}) => {
  return (
    <header className='pl-4 pr-4 py-7 flex justify-between items-center sm:px-[6.2rem] '>
        <picture>
          <img src={logo} alt="" className='w-11 sm:w-11' />
        </picture>
        <picture onClick={openNav}>
          <img src={iconMenu} alt="" className='h-[1.25rem] w-[2.5rem] block sm:hidden'/>
        </picture>
        <nav>
          <ul className='flex text-[0.65rem] gap-5 font-inter gap-[1.65rem] '>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
    </header>
  )
}
