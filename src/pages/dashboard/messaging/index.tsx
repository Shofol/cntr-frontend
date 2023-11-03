import { SessionProvider } from "next-auth/react";
import { type ReactElement } from "react";
import ChatSection from "~/components/dashboard/messaging/ChatSection";
import SenderBox from "~/components/dashboard/messaging/SenderBox";
import DashboardLayout from "~/components/layout/DashboardLayout";
import type { NextPageWithLayout } from "~/pages/_app";

const Messaging: NextPageWithLayout = () => {
  const dates = [...Array(10).keys()].map((item: number) => {
    const date = new Date();
    date.setDate(date.getDate() + item);
    return date;
  });

  return (
    <div className="mx-2  font-inter sm:mx-0">
      <h1 className="mt-5 font-dm-sans text-3xl font-medium text-br-brown sm:mt-0">
        Your messages
      </h1>

      <div className="mt-10 flex max-h-[70vh] sm:space-x-8">
        <div className="hidden w-[28%] flex-col overflow-y-scroll rounded-xl  border border-br-sage p-6 sm:flex sm:space-y-4">
          <SenderBox sender="Anower" excerpt="Hi! How are you?" count={1} />
          <SenderBox sender="Anower" excerpt="Hi! How are you?" count={1} />
        </div>
        <div className="relative flex flex-1 flex-col space-y-2 pb-4 sm:max-h-[70vh] sm:space-y-4 sm:pb-0">
          <div className="flex flex-col overflow-y-scroll rounded-xl border border-br-sage p-6">
            <ChatSection
              name="Anower"
              date="09/09/2023"
              messages={[
                `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus asperiores laborum, sequi provident rerum aspernatur
            autem obcaecati blanditiis voluptate earum.`,
                `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus asperiores`,
              ]}
            />
            <ChatSection
              isOwn={true}
              name="Anower"
              date="09/09/2023"
              messages={[
                `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus asperiores laborum, sequi provident rerum aspernatur
            autem obcaecati blanditiis voluptate earum.`,
                `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus asperiores`,
              ]}
            />
          </div>
          <div className="flex-1 rounded-lg border border-br-dark p-4">
            <input
              type="text"
              name="message"
              placeholder="Type here"
              id=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Messaging.getLayout = function getLayout(page: ReactElement) {
  return (
    <SessionProvider>
      <DashboardLayout>{page}</DashboardLayout>
    </SessionProvider>
  );
};

export default Messaging;
