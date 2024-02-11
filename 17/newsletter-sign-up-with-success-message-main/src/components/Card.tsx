import React, { useContext, useRef, useState } from "react";
import iconList from "/images/icon-list.svg";
import iconSuccess from "/images/icon-success.svg";
import imgDesktop from "/images/illustration-sign-up-desktop.svg";
import imgMobile from "/images/illustration-sign-up-mobile.svg";
import { emailRegex } from "../regex/emailRegex";
import { SignUpStatus } from "../context/SignUpStatus";

const Paragraph = ({ text }: { text: string }) => {
  return (
    <p className="flex gap-4 text-charcoalGrey text-sm md:text-base font-medium pb-3 md:pb-0 items-start ">
      <img src={iconList} className="logo" alt="Vite logo" />
      {text}
    </p>
  );
};

const FormEmail = () => {
  const [error, setError] = useState(false);
  const email = useRef<HTMLInputElement>();
  const { setValuesSignUp }  = useContext(SignUpStatus);

  const handleClick = (): void => {
    setValuesSignUp({email : email.current?.value, sent : true});
  }
  const handleInputEmail = (): void => {
    const emailValue = email.current?.value;

    if (!emailRegex.test(emailValue || "")) {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <form className="text-roboto flex flex-col gap-6 pt-[1.5rem] ">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label className="text-xs md:text-sm text-darkSlateGrey font-bold " htmlFor="">
            Email address
          </label>
          <p
            className={`text-xs md:text-sm text-tomato font-bold ${
              error ? "visible" : "invisible"
            }`}
          >
            Valid email required
          </p>
        </div>
        <input
          type="email"
          className={`px-5 py-3 md:px-6 md:py-4 rounded-lg w-full font-normal md:font-medium border-[1px] md:border-[2px]  ${
            error
              ? "bg-tomato/25 text-tomato focus:!border-tomato border-tomato "
              : "focus:border-charcoalGrey border border-grey"
          }`}
          onChange={handleInputEmail}
          placeholder="email@company.com"
          ref={email}
        />
      </div>
      <button
        className="px-3 py-4 rounded-lg text-center w-full text-white text-sm md:text-normal font-medium 
      bg-gradient-to-r from-charcoalGrey to-charcoalGrey transition-all
      hover:from-pink-500 hover:to-orange-600"
        disabled={error || !email.current?.value}
        onClick={handleClick}
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export const CardSignUp = () => {
  const paragraphs: string[] = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  return (
    /* 790px */
    <div className="bg-white  flex flex-col-reverse min-w-[100vw] md:min-h-0 md:min-w-0 min-h-[100vh] md:rounded-[1.75rem] md:flex-row gap-[1rem] md:max-w-[90vw] lg:max-w-[58rem] justify-end md:justify-center">
      <section className="flex flex-col justify-center font-roboto px-5 md:px-[2.75rem] md:gap-2 lg:gap-3 md:max-w-[50%] ">
        <h1 className="text-[2rem] pb-2 md:pb-0 md:text-[2.5rem] lg:text-[3.5rem] font-bold text-charcoalGrey">
          Stay updated!
        </h1>
        <p className="text-charcoalGrey font-medium text-sm md:text-base md:pb-[0.45rem] pb-6">
          Join 60,000+ product managers receiving monthly updates on:{" "}
        </p>
        {paragraphs.map((value: string, key: number) => (
          <Paragraph text={value} key={key} />
        ))}
        <FormEmail />
      </section>
      <section>
        <picture>
          <img
            src={imgDesktop}
            alt="sign up desktop"
            className="h-[100%] hidden md:block object-contain md:py-5 md:pr-2 lg:py-5 hover:rounded-none"
          />
          <img
            src={imgMobile}
            alt="sign up mobile"
            className="h-[100%] block md:hidden object-contain md:py-5 md:pr-2 lg:py-5 hover:rounded-none"
          />
        </picture>
      </section>
    </div>
  );
};
export const Card = () => {
  
  const { signUpValues, setValuesSignUp }  = useContext(SignUpStatus);

  const handleClick = (): void => {
    setValuesSignUp({email : "", sent : false});
  }

  return (
    /* 790px */
    <div className="bg-white min-h-[100vh] md:rounded-[1.75rem] flex flex-col gap-5 md:gap-[1rem] md:w-[25rem] md:min-h-[25rem] md:justify-center font-roboto md:p-12 px-6 pt-24 relative">
      <img src={iconSuccess} className="w-14" alt="Vite logo" />
      <h1 className=" font-bold text-4xl md:text-5xl text-charcoalGrey">
        Thanks for subscribing!
      </h1>
      <p className="text-sm text-darkSlateGrey font-medium">
        A confirmation email has been sent to <b className="font-bold"> {signUpValues.email}</b>. Please open it and
        click the button inside to confirm your subscription
      </p>
      <button
        className="px-3 py-4 rounded-lg text-center md:w-full text-white text-normal font-medium 
      bg-gradient-to-r from-charcoalGrey to-charcoalGrey transition-all
      hover:from-pink-500 hover:to-orange-600 absolute md:relative bottom-[5%] w-[90vw] left-[50%] translate-x-[-50%] "
      onClick={handleClick}
      >
        Dimiss message
      </button>
    </div>
  );
};
