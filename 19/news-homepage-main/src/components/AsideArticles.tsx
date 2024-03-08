
export const AsideArticles = () => {
  return (
    <aside className="mt-[4.25rem] font-inter flex flex-col gap-8 pb-4 sm:col-span-2 sm:flex-row sm:mt-[1.75rem] sm:gap-4">
      <article className="flex gap-6 sm:gap-4">
        <picture>
          <img
            className="min-w-[6.25rem] max-w-[6.25rem] sm:max-w-[4.15rem] sm:min-w-[4.15rem] sm:min-h-[5.25rem] sm:max-h-[5.25rem] "
            src="/images/image-retro-pcs.jpg"
            alt=""
          />
        </picture>
        <section className="flex flex-col gap-[0.8rem] sm:max-w-[154px] sm:gap-[0.20rem] ">
          <div className="flex flex-col gap-[0.9rem] sm:gap-2">
            <span className="text-3xl leading-7 font-bold text-grayishBlue sm:text-lg sm:leading-5 sm:text-[1.4rem] ">
              01
            </span>
            <h4 className="text-[1.15rem] leading-6 font-extrabold sm:text-xs">
              Reviving Retro PCs
            </h4>
          </div>
          <p className="leading-6 text-[0.94rem] sm:text-[0.63rem] sm:leading-[1.23rem] ">
            What happens when old PCs are given modern upgrades?
          </p>
        </section>
      </article>
      <article className="flex gap-6 sm:gap-4">
        <picture>
          <img
            className="min-w-[6.25rem] max-w-[6.25rem] sm:min-w-[4.15rem] sm:min-h-[5.25rem] sm:max-h-[5.25rem]"
            src="/images/image-top-laptops.jpg"
            alt=""
          />
        </picture>
        <section className="flex flex-col gap-[0.8rem] sm:max-w-[154px] sm:gap-[0.20rem]">
          <div className="flex flex-col gap-[0.9rem] sm:gap-2">
            <span className="text-3xl leading-7 font-bold text-grayishBlue sm:text-lg sm:leading-5 sm:text-[1.4rem]">
              02
            </span>
            <h4 className="text-[1.15rem] font-extrabold leading-6 sm:text-xs">
              Top 10 Laptops of 2022
            </h4>
          </div>
          <p className=" leading-6 text-[0.94rem] sm:text-[0.63rem] sm:leading-[1.23rem]">
            Our best picks for various needs and budgets.
          </p>
        </section>
      </article>
      <article className="flex gap-6 sm:gap-4">
        <picture>
          <img
            className=" max-w-[6.25rem] sm:min-w-[4.15rem] sm:min-h-[5.25rem] sm:max-h-[5.25rem]"
            src="/images/image-gaming-growth.jpg"
            alt=""
          />
        </picture>
        <section className="flex flex-col gap-[0.8rem] sm:max-w-[154px] sm:gap-[0.20rem]">
          <div className="flex flex-col gap-[0.9rem] sm:gap-2">
            <span className="text-3xl leading-7 font-bold text-grayishBlue sm:text-lg sm:leading-5 sm:text-[1.4rem]">
              03
            </span>
            <h4 className="text-[1.15rem] font-extrabold leading-6  sm:text-xs">
              The Growth of Gaming
            </h4>
          </div>
          <p className="leading-6 text-[0.94rem] sm:text-[0.63rem] sm:leading-[1.23rem]">
            How the pandemic has sparked fresh opportunities.
          </p>
        </section>
      </article>
    </aside>
  );
};
