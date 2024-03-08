import iconMenuClose from "/images/icon-menu-close.svg";

export const SideNav = ({isNavOpen = false, closeNav} : {isNavOpen : boolean, closeNav : () => void}) => {
  return (
    <nav className={`absolute bg-white  w-[16.1rem] ${isNavOpen ? "right-0" : "right-[-150%]"} transition-all font-inter z-10`}>
      <div className="flex flex-col gap-[5.25rem] z-10 bg-white h-screen">
        <section className="flex justify-end pt-7 pr-5">
          <button onClick={closeNav}>
            <picture>
              <img src={iconMenuClose} alt="" className=" " />
            </picture>
          </button>
        </section>
        <ul className="flex flex-col text-[1.1rem] pl-[1.60rem] gap-[1.35rem]">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
      <div className={`bg-veryDarkBlue h-screen w-screen absolute top-0 z-[-1] left-[-50%] ${isNavOpen ? "opacity-50" : "opacity-0"} transition-all duration-500`}></div>
    </nav>
  );
};
