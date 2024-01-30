import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LayOut = () => {
  return (
    <div className="font-libreFranklin text-center min-h-screen w-screen pt-5 sm:py-2 flex flex-col gap-5 sm:justify-center">
      <div className="flex items-baseline justify-center gap-x-0.5">
        <h2 className="uppercase text-[20px] font-bold sm:text-[20px]">ping</h2>
        <span className="w-[5px] h-[5px] bg-blue"></span>
      </div>
      <section className="flex gap-2 flex-col sm:flex">
        <h1 className="text-[20px] sm:text-[30px] text-grayLight">
          We are launching{" "}
          <span className="font-bold text-veryDarkBlue">soon!</span>
        </h1>
        <p className="text-xs sm:text-[14px] text-veryDarkBlue">
          Subscribe and get notified
        </p>
      </section>
      <section className="flex justify-center">
        <form
          action=""
          className="flex flex-col sm:flex-row gap-4 justify-center relative w-fit h-[110px] sm:h-auto"
        >
          <div>
            <input
              className="peer py-2 px-6 w-[15rem] text-xs sm:py-3 sm:px-6 rounded-3xl border border-paleBlue sm:w-[18rem] invalid:border-lightRed"
              placeholder="Your email address..."
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
            />
            <p className="hidden text-lightRed text-[10px] italic pt-1 sm:absolute sm:bottom-[-1.5rem] sm:left-[1.5rem] peer-invalid:block">
              <i>Please provide a valid email address.</i>
            </p>
          </div>
          <button
            className="rounded-3xl bg-blue py-2 text-[11px] sm:py-3 px-6 text-white font-semibold sm:text-[12px] w-full sm:w-[9rem] drop-shadow-lg
             "
            onClick={(e) => {
              e.preventDefault();
            }}
            type="submit"
          >
            Notify Me
          </button>
        </form>
      </section>
      <figure className="flex justify-center px-6 mt-3 mb-9 sm:my-8 sm:mx-0">
        <img
          src="/illustration-dashboard.png"
          alt="illustration-dashboard"
          className="object-contain max-h-[16rem] "
        />
      </figure>
      <section className="flex flex-col gap-5 sm:gap-6">
        <div className="flex gap-2 justify-center">
          <FontAwesomeIcon icon={faFacebookF} className="media-icons" />
          <FontAwesomeIcon icon={faTwitter} className="media-icons" />
          <FontAwesomeIcon icon={faInstagram} className="media-icons " />
        </div>
        <p className="sm:text-xs text-[10px] text-grayLight ">
          ©Copyright Ping. All rights reserved.
        </p>
      </section>
    </div>
  );
};
