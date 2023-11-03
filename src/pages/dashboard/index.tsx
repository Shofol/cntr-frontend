import { SessionProvider } from "next-auth/react";
import { type ReactElement } from "react";
import { type AppointmentType } from "types/dashboard";
import AppointmentStat from "~/components/dashboard/ApponitmentStat";
import DashboardLayout from "~/components/layout/DashboardLayout";
import type { NextPageWithLayout } from "~/pages/_app";

const Dashboard: NextPageWithLayout = () => {
  const appointment: AppointmentType = {
    service_name: "Palliative Assessment",
    time: "1:30-2:00pm",
    date: "Tuesday, September 23",
    provider_name: "Dr. Lorem Ipsum",
  };

  return (
    <div className="mx-2 sm:mx-0">
      <h1 className="mb-8 mt-5 font-dm-sans text-3xl font-medium text-br-brown sm:mt-0">
        Your care team is here for you
      </h1>

      <div className="bg-br-lpink border-br-pink my-8 flex items-start justify-between rounded-md border p-6 font-dm-sans text-xl text-[#222] sm:space-x-10">
        <div>
          <button className=" font-semibold text-br-brown ">
            Important alert{" "}
          </button>
          <p>
            Your insurance needs to be updated before you can continue care.
          </p>
        </div>
        <button
          className="bg-br-pink flex-shrink-0 rounded-md px-8 py-3 text-xl font-semibold text-white transition-opacity duration-75 hover:opacity-80"
          onClick={() => {
            // void joinMeeting();
          }}
        >
          {"Update now"}
        </button>
      </div>

      <div className="mb-6 flex space-x-8">
        <div className="flex flex-col">
          <p className="mb-6 font-dm-sans text-lg font-semibold text-br-brown">
            Your next appointment
          </p>
          <AppointmentStat appointment={appointment} />
        </div>

        <div className="flex flex-col">
          <p className="mb-6 font-dm-sans text-lg font-semibold text-br-brown">
            Messages
          </p>
        </div>
      </div>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <SessionProvider>
      <DashboardLayout>{page}</DashboardLayout>
    </SessionProvider>
  );
};

export default Dashboard;
