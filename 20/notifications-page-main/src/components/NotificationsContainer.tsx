import { Container } from "./Container";
import { Notification } from "./notifications/Notification";
import { NotificationHeader } from "./notifications/NotificationHeader";
import { Notification as INotification } from "../models/Notification";
import Notifications from "../mocks/Notifications.json";

export const NotificationsContainer = () => {



  return (
    <Container className="font-plusJakartaSans py-6 px-4 gap-[1.30rem] md:my-[3.9rem] md:pt-[2.1rem] sm:pb-0  bg-white md:rounded-lg md:min-w-[735px] md:gap-[1.85rem]  sm:shadow-md ">
      <NotificationHeader />
      <main className="min-w-full flex flex-col gap-[0.65rem] sm:px-4 sm:gap-[0.4rem]">
        {Notifications.map((notification: INotification) => (
          <Notification
            imgProfile={notification.imgProfile}
            profileName={notification.profileName}
            action={notification.action}
            post={notification.post}
            postingTime={notification.postingTime}
            group={notification.group}
            message={notification.message}
            imgPost={notification.imgPost}
            isChecked={notification.isChecked}
          />
        ))}
      </main>
    </Container>
  );
};
