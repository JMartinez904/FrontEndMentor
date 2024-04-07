import React from "react";

export const NotificationHeader = () => {
  return (
    <header className="flex w-full justify-between relative md:pl-[1.15rem] md:pr-[1.1rem] ">
      <p className="text-xl font-extrabold flex md:text-2xl">
        Notifications
        <span className="bg-blue text-white rounded-md px-[0.7rem] ml-[0.65rem] flex justify-center items-center h-[1.55rem] sm:h-[1.65rem] sm:mt-[.10rem] sm:ml-[0.75rem] ">
          <span className="text-[1.0rem]">3</span>
        </span>
      </p>
      <p className="font-medium text-[0.875rem] pt-[0.20rem] sm:text-base transition-all hover:cursor-pointer hover:text-blue">
        Mark all as read
      </p>
    </header>
  );
};
