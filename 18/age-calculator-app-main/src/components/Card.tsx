import React, { useEffect, useRef, useState } from "react";
import arrow from "/vite.svg";
import { calculateAge, days, months, year } from "../validations/dates";
import { months as Tmonths } from "../types/months";

export const Card = () => {
  const [dates, setDates] = useState({
    days: "--",
    months: "--",
    years: "--",
  });

  const [date, setDate] = useState({
    days: "--",
    months: "--",
    years: "--",
  });

  const incNbrRec = (i = 0, maxValue = 1,date : any) => {
    if (i <= maxValue) {
      
      setDate({
        days: i > date.days ? date.days : i,
        months: i > date.months ? date.months : i,
        years: i > date.years ? date.years : i,
      })

      setTimeout(function() {//Delay a bit before calling the function again.
        incNbrRec(i + 1, maxValue, date);
      }, 10);
    }
  }

  useEffect(() => {
    const maxValue = Math.max(Number.parseInt(dates.days),Number.parseInt(dates.months),Number.parseInt(dates.years));
    incNbrRec(0,maxValue,dates);
  }, [dates]);
  

  return (
    <div className="flex flex-col gap-10 max-w-[90vw] md:min-h-[657px] md:max-w-[841px] bg-white w-full rounded-cardMobile sm:rounded-card p-8 sm:pt-14 sm:px-12">
      <FormDate setDates={setDates}></FormDate>
      <section className="font-poppins md:h-[25rem] flex flex-col text-5xl sm:text-8xl italic font-bold justify-center gap-4 pt-16 sm:pt-0">
        <p>
          <span className="text-purple">{date.years}</span> years
        </p>
        <p>
          <span className="text-purple">{date.months}</span> months
        </p>
        <p>
          <span className="text-purple">{date.days}</span> days
        </p>
      </section>
    </div>
  );
};

const FormDate = ({
  setDates,
}: {
  setDates: React.Dispatch<
    React.SetStateAction<{
      days: string;
      months: string;
      years: string;
    }>
  >;
}) => {
  const dayInputRef = useRef<HTMLInputElement>(null);
  const monthInputRef = useRef<HTMLInputElement>(null);
  const yearInputRef = useRef<HTMLInputElement>(null);

  const [inputErrors, setError] = useState({
    months: { message: "", isError: false },
    days: { message: "", isError: false },
    year: { message: "", isError: false },
  });

  const handleInputMonth = () => {
    const monthValue = monthInputRef.current?.value;

    if (!months(Number.parseInt(monthValue || "0"))) {
      setError((prev) => ({
        ...prev,
        months: { message: "Must be a valid month", isError: true },
      }));
      return;
    }

    setError((prev) => ({ ...prev, months: { message: "", isError: false } }));
    return;
  };

  const handleInputDay = () => {
    const dayValue = dayInputRef.current?.value;
    const monthValue = monthInputRef.current?.value;
    const yearValue = yearInputRef.current?.value;

    const month: Tmonths = monthValue ? Number.parseInt(monthValue || "1") : 1;

    if (!monthValue && Number.parseInt(dayValue || "1") >= 32) {
      setError((prev) => ({
        ...prev,
        days: { message: "Must be a valid day", isError: true },
      }));
      return;
    }

    if (
      days({
        day: Number.parseInt(dayValue || "0"),
        months: month,
        year: yearValue ? Number.parseInt(yearValue) : 0,
      })
    ) {
      setError((prev) => ({
        ...prev,
        days: { message: "Must be a valid day", isError: true },
      }));
      return;
    }

    setError((prev) => ({ ...prev, days: { message: "", isError: false } }));
    return;
  };

  const handleInputYear = () => {
    const yearValue = yearInputRef.current?.value;
    const currentYear = new Date().getFullYear();
    if (year(Number.parseInt(yearValue || "0"))) {
      if(Number.parseInt(yearValue || "0") > currentYear) {
        setError((prev) => ({
          ...prev,
          year: { message: "Must be in the past", isError: true },
        }));
      } else {
        setError((prev) => ({
          ...prev,
          year: { message: "Must be a valid year", isError: true },
        }));
      }
      
      return;
    }
    setError((prev) => ({ ...prev, year: { message: "", isError: false } }));
    return;
  };

  const handleBtnSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if(!yearInputRef.current?.value || !monthInputRef.current?.value || !dayInputRef.current?.value) {
      if(!yearInputRef.current?.value) {
        setError((prev) => ({ ...prev, year: { message: "This field is required", isError: true } }));
      }
      if(!monthInputRef.current?.value) {
        setError((prev) => ({ ...prev, months: { message: "This field is required", isError: true } }));
      }
      if(!dayInputRef.current?.value) {
        setError((prev) => ({ ...prev, days: { message: "This field is required", isError: true } }));
      }

      return;
    }

    const yearValue = Number.parseInt(yearInputRef.current?.value || "0");
    const monthValue = Number.parseInt(monthInputRef.current?.value || "0");
    const dayValue = Number.parseInt(dayInputRef.current?.value || "0");

    if(days({year : yearValue, months : monthValue , day: dayValue})) {
      setError((prev) => ({ ...prev, days: { message: "Must be a valid date", isError: true } }));
      setError((prev) => ({ ...prev, year: { message: "", isError: true } }));
      setError((prev) => ({ ...prev, months: { message: "", isError: true } }));

      return ;
    }


    const { daysRemain, monthsPassed, yearTranscurrent } = calculateAge(
      yearValue,
      monthValue,
      dayValue
    );

    setDates(prev => ({
      days : daysRemain.toFixed(),
      months : monthsPassed.toFixed(),
      years : yearTranscurrent.toFixed()
    }));
  };

  return (
    <form className="font-poppins flex pb-14 sm:pb-12 border-b gap-8 relative">
      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor=""
          className={`uppercase text-sm tracking-widest ${
            inputErrors.days.isError ? "text-lightRed" : "text-smokeyGrey"
          }`}
        >
          Day
        </label>
        <input
          type="number"
          className={`w-[100%] px-6 py-4 border  text-smokeyGrey sm:w-44 rounded-xl text-3xl focus:outline-purple ${
            inputErrors.days.isError ? "border-lightRed" : "border-lightGrey"
          }`}
          placeholder="DD"
          maxLength={2}
          ref={dayInputRef}
          onInput={handleInputDay}
        />
        <p className="text-lightRed italic text-sm absolute bottom-[-30%] ">
          {inputErrors.days.message}
        </p>
      </div>
      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor=""
          className={`uppercase text-sm tracking-widest ${
            inputErrors.months.isError ? "text-lightRed" : "text-smokeyGrey"
          }`}
        >
          Month
        </label>
        <input
          maxLength={2}
          type="text"
          className={`w-[100%] px-6 py-4 border border-lightGrey text-smokeyGrey sm:w-44 rounded-xl text-3xl ${
            inputErrors.months.isError ? "border-lightRed" : "border-lightGrey"
          }`}
          placeholder="MM"
          ref={monthInputRef}
          onInput={handleInputMonth}
        />
        <p className="text-lightRed italic text-sm absolute bottom-[-30%] ">
          {" "}
          {inputErrors.months.message}{" "}
        </p>
      </div>
      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor=""
          className={`uppercase text-sm tracking-widest ${
            inputErrors.year.isError ? "text-lightRed" : "text-smokeyGrey"
          }`}
        >
          Year
        </label>
        <input
          ref={yearInputRef}
          type="number"
          placeholder="YYYY"
          className={`w-[100%] px-6 py-4 border border-lightGrey text-smokeyGrey sm:w-44 rounded-xl text-3xl ${
            inputErrors.year.isError ? "border-lightRed" : "border-lightGrey"
          }`}
          onInput={handleInputYear}
        />
        <p className="text-lightRed italic text-sm absolute bottom-[-30%] ">
          {" "}
          {inputErrors.year.message}{" "}
        </p>
      </div>
      <button
        className="sm:w-20 bg-center bg-no-repeat w-16 text-xs bg-[length:30px] sm:bg-auto h-16 sm:h-20 bg-arrow bg-purple rounded-full absolute left-[50%] translate-x-[-50%]  sm:left-auto sm:translate-x-[0] sm:right-[0] bottom-[-25%] hover:bg-black transition-all disabled:bg-purple/85 disabled:cursor-not-allowed"
        onClick={(event) => handleBtnSubmit(event)}
        disabled= {inputErrors.days.isError || inputErrors.months.isError || inputErrors.days.isError}
      ></button>
    </form>
  );
};
