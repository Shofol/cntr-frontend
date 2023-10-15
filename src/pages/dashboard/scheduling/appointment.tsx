import Link from "next/link";
import type { ReactElement } from "react";
import AppointTypeCard from "~/components/dashboard/AppointTypeCard";
import AppointmentDocCard from "~/components/dashboard/AppointmentDocCard";
import DashboardLayout from "~/components/layout/DashboardLayout";
import type { NextPageWithLayout } from "~/pages/_app";

const Appointment: NextPageWithLayout = () => {
  return (
    <div className="mx-2 my-5 sm:mx-0 sm:mt-0">
      <h1 className="font-dm-sans text-3xl font-medium text-br-brown">
        Meet with your care team
      </h1>

      <div className="mt-10 w-full rounded-md border border-gray-200 px-10 py-8">
        <Link
          className="font-inter text-lg text-br-brown"
          href={"/dashboard/scheduling"}
        >
          ← Back
        </Link>

        <h1 className="font-dn-sans mt-8 text-3xl font-medium text-br-brown">
          Schedule a Therapy Appointment
        </h1>
        <p className="mt-8 font-inter text-lg font-medium text-br-brown">
          How long would you like to meet?
        </p>
        <div className="mt-6 flex flex-col space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
          <AppointTypeCard title="Quick chat" time="15" isActive={true} />
          <AppointTypeCard title="Standard visit" time="30" />
          <AppointTypeCard title="Long visit" time="60" />
        </div>

        <p className="mt-8 font-inter text-lg font-medium text-br-brown">
          Who would you like to meet with?
        </p>

        <div className="wrap mt-6 flex flex-col items-end space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
          <AppointmentDocCard
            title="Your last appointment"
            docName="Dr. John Doe"
            desc={" Lorem ipsum dolor sit, amet consectetur "}
            isActive={true}
          />

          <AppointmentDocCard
            title="First available"
            docName="Dr. John Doe"
            desc={" Lorem ipsum dolor sit, amet consectetur "}
          />

          <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 px-10 py-7 font-inter transition-all duration-200 hover:border-br-bgreen hover:bg-br-lbgreen">
            <p className="text-center">See More Providers</p>
          </div>
        </div>

        <button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          // onClick={() => router.push(link)}
          className="mb-10 mt-8 rounded-md bg-br-green px-10 py-4 font-dm-sans text-lg font-bold text-white transition-colors duration-75 hover:bg-br-primary"
        >
          Continue to select date & time →
        </button>
      </div>
    </div>
  );
};

Appointment.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Appointment;
