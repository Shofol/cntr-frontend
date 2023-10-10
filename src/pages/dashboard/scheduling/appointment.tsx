import Link from "next/link";
import type { ReactElement } from "react";
import AppointTypeCard from "~/components/dashboard/AppointTypeCard";
import AppointmentDocCard from "~/components/dashboard/AppointmentDocCard";
import DashboardLayout from "~/components/layout/DashboardLayout";
import type { NextPageWithLayout } from "~/pages/_app";

const Appointment: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="text-br-brown font-dm-sans text-3xl font-medium">
        Meet with your care team
      </h1>

      <div className="mt-10 w-full rounded-md border border-gray-200 px-10 py-8">
        <Link
          className="text-br-brown font-inter text-lg"
          href={"/dashboard/scheduling"}
        >
          ← Back
        </Link>

        <h1 className="font-dn-sans text-br-brown mt-8 text-3xl font-medium">
          Schedule a Therapy Appointment
        </h1>
        <p className="text-br-brown mt-8 font-inter text-lg font-medium">
          How long would you like to meet?
        </p>
        <div className="mt-6 flex space-x-6">
          <AppointTypeCard title="Quick chat" time="15" isActive={true} />
          <AppointTypeCard title="Standard visit" time="30" />
          <AppointTypeCard title="Long visit" time="60" />
        </div>

        <p className="text-br-brown mt-8 font-inter text-lg font-medium">
          Who would you like to meet with?
        </p>

        <div className="wrap mt-6 flex items-end space-x-6">
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

          <div className="hover:border-br-bgreen hover:bg-br-lbgreen flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 px-10 py-7 font-inter transition-all duration-200">
            <p className="text-center">See More Providers</p>
          </div>
        </div>

        <button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          // onClick={() => router.push(link)}
          className="bg-br-green mb-10 mt-8 rounded-md px-10 py-4 font-dm-sans text-lg font-bold text-white transition-colors duration-75 hover:bg-br-primary"
        >
          Continue to select date & time →
        </button>
      </div>
    </>
  );
};

Appointment.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Appointment;
