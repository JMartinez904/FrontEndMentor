
export const ArticlesAds = () => {
  return (
    <section className="bg-veryDarkBlue pt-5 pb-6 px-5 mt-16 font-inter sm:mt-2 sm:max-w-[235px] sm:max-h-[340px] sm:px-4 sm:pt-4">
      <h2 className="text-softOrange text-3xl font-bold tracking-wider sm:text-[1.75rem] sm:tracking-normal">New</h2>
      <div className="flex flex-col pt-8 divide-y sm:pt-[1.15rem] ">
        <article className="flex flex-col gap-3 pb-8 pt-8 first:pt-0 last:pb-0 sm:gap-[0.35rem] sm:pb-5">
          <h3 className="text-offWhite font-bold text-[1.20rem] tracking-[0.0315em] sm:tracking-[0.07em] leading-[1.5rem] sm:text-xs "> Hydrogen VS Electric Cars </h3>
          <p className="text-grayishBlue text-[0.95rem] leading-6	sm:leading-4 sm:text-[0.63rem] ">Will hydrogen-fueled cars ever catch up to EVs?</p>
        </article>
        <article className="flex flex-col gap-3 pb-8 pt-7 first:pt-0 last:pb-0 sm:gap-[0.35rem] sm:pb-5 sm:pt-5">
          <h3 className="text-offWhite font-bold text-[1.20rem] tracking-[0.0315em] sm:tracking-[0.07em] leading-[1.5rem] sm:text-xs sm:tracking-[0.07em]">The Downsides of AI Artistry</h3>
          <p className="text-grayishBlue text-[0.95rem] leading-6	sm:leading-[1.1rem] sm:text-[0.63rem]">What are the possible adverse effects of on-demand AI image generation?</p>
        </article>
        <article className="flex flex-col gap-3 pb-8 pt-7  first:pt-0 last:pb-0 sm:gap-[0.35rem] sm:pt-5">
          <h3 className="text-offWhite font-bold text-[1.20rem] tracking-[0.0315em] sm:tracking-[0.07em] leading-[1.5rem] sm:text-xs">Is VC Funding Drying Up?</h3>
          <p className="text-grayishBlue text-[0.95rem] leading-6	sm:leading-[1.1rem] sm:text-[0.63rem]">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </article>
      </div>
    </section>
  );
};
