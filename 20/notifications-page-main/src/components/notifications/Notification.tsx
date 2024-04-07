import { Notification as INotification } from "../../models/Notification";
import { Message } from "./Message";

export const Notification = ({
  imgProfile = "",
  profileName = "",
  action = "",
  post = "",
  postingTime = "",
  isChecked = true,
  group = "",
  message = "",
  imgPost = "",
}: INotification) => {
  return (
    <section
      className={`${
        isChecked ? "bg-white" : "bg-veryLightGrayishBlue"
      } rounded-lg flex gap-[0.85rem] sm:gap-[1.2rem] sm:relative`}
    >
      <picture className="py-4 pl-4 sm:py-[1.1rem] sm:pl-[1.2rem] ">
        <img src={imgProfile} alt="profile-img" className="profile-img" />
      </picture>
      <div>
        <div className="flex ">
          <p
            className={`pt-[1rem] ${
              group ? "leading-[1.1215rem]" : "leading-[1.15rem]"
            } ${isChecked ? "text-[0.875rem] " : "text-[0.89rem]"} text-darkGrayishBlue max-w-[16rem] font-medium sm:max-w-xl sm:text-base
            ${(isChecked && post) && "sm:word-spacing-md"}
            ${imgPost && "sm:mb-[.1rem] "}
            `}
          >
            <b className={`tracking-normal ${isChecked ? " pr-[0.25rem]" : " pr-[0.2rem] sm:pr-[0.35rem] "} text-[0.88rem] text-black sm:text-base hover:cursor-pointer hover:text-blue transition-all`}>
              {profileName}
            </b>{" "}
            {action}
            {post && (
              <b className={`${isChecked ? "pl-[0.1rem]" : "pl-[0.35rem] sm:pl-2 "} text-[0.875rem] text-darkGrayishBlue sm:text-[1.01rem] hover:cursor-pointer hover:text-blue transition-all`}>
                {post}
              </b>
            )}
            {group && (
              <a
                href=""
                className={`text-blue font-bold ${isChecked ? "pl-[0.3rem]" : "pl-[0.5rem]"}  text-[0.875rem] sm:text-base sm:pl-[0.35rem] `}
              >
                {group}
              </a>
            )}
            {!isChecked && (
              <span className="h-full inline-flex">
                <span className="h-2 w-2 rounded-full bg-red inline-block ml-[.45rem] "></span>
              </span>
            )}
          </p>
          {imgPost && (
            <picture className="flex justify-center items-center mt-[1.1rem] sm:absolute sm:right-[-.35rem]  sm:mt-[.9rem] ">
              <img src={imgPost} alt="" className="max-w-[61%] sm:max-w-[50%] sm:min-w-[54%] hover:border-lightGrayishBlue2 hover:border-xl border-4 border-white transition-all duration-300 rounded-lg cursor-pointer" />
            </picture>
          )}
        </div>
        <p
          className={`text-[0.88rem] pt-[0.1rem] text-grayishBlue ${
            message ? "pb-[0.6rem]" : "pb-[0.84rem]"
          } 
          ${imgPost && "mt-[-0.15rem] sm:pb-[1.25rem]"} sm:text-base
          ${(post && isChecked) && "sm:!pt-0 sm:pb-4"}
          `}
        >
          {postingTime}
        </p>
        {message && <Message message={message} />}
      </div>
    </section>
  );
};
