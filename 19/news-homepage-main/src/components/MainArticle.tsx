import imageWebMobile from "/images/image-web-3-mobile.jpg";
import imageWebDesktop from "/images/image-web-3-desktop.jpg";

export const MainArticle = () => {
  return (
    <article className="font-inter sm:grid sm:grid-cols-2 sm:max-w-[485px] ">
      <picture className="pt-[0.45rem] col-span-2">
        <img src={imageWebMobile} alt="" className="block sm:hidden" />
        <img
          src={imageWebDesktop}
          alt=""
          className="hidden sm:block h-[12.5rem] "
        />
      </picture>
      <h1 className="text-[2.5rem] leading-10 font-black pt-6 sm:text-[2.3rem] sm:leading-[2.3rem] sm:tracking-[0.005em] ">
        The Bright Future of Web 3.0?
      </h1>
      <div>
        <p className="pt-4 leading-[1.6rem] tracking-tight sm:text-[0.65rem] sm:leading-4 sm:pl-3 sm:pt-5 sm:tracking-[-0.02em]">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="mt-6 py-3 px-8 text-white text-sm leading-6 font-bold uppercase bg-softRed tracking-[.35em] sm:text-[0.5rem] sm:pl-[1.3rem] sm:pr-[1.4rem]
         sm:py-1 sm:ml-3 sm:tracking-[.45em]">
          Read More
        </button>
      </div>
    </article>
  );
};
