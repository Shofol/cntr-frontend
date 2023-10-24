import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { type ReactElement } from "react";
import { type AppointmentType } from "types/dashboard";
import AppointmentDetail from "~/components/dashboard/appointments/AppointmentDetail";
import DashboardLayout from "~/components/layout/DashboardLayout";
import { type NextPageWithLayout } from "~/pages/_app";

const Appointments: NextPageWithLayout = () => {
  const appointment: AppointmentType = {
    service_name: "Palliative Assessment",
    time: "1:30-2:00pm",
    date: "Tuesday, September 23",
    provider_name: "Dr. Lorem Ipsum",
  };
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

        <h2 className="font-dn-sans mt-8 text-2xl font-medium text-br-brown">
          All appointments
        </h2>
        <div className="my-4">
          <AppointmentDetail appointment={appointment} />
          <AppointmentDetail appointment={appointment} />
          <AppointmentDetail appointment={appointment} />
        </div>
      </div>
    </div>
  );
};

Appointments.getLayout = function getLayout(page: ReactElement) {
  return (
    <SessionProvider>
      <DashboardLayout>{page}</DashboardLayout>
    </SessionProvider>
  );
};

export default Appointments;
