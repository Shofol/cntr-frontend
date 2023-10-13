import { useSession } from "next-auth/react";
import type { ReactElement } from "react";
import AppointmentCard from "~/components/dashboard/AppointmentCard";
import ScheduleCard from "~/components/dashboard/ScheduleCard";
import DashboardLayout from "~/components/layout/DashboardLayout";
import type { NextPageWithLayout } from "~/pages/_app";

const Scheduling: NextPageWithLayout = () => {
  const dates = [...Array(10).keys()].map((item: number) => {
    const date = new Date();
    date.setDate(date.getDate() + item);
    return date;
  });
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <h1 className="font-dm-sans text-3xl font-medium text-br-brown">
        Meet with your care team
      </h1>

      <div className="flex justify-between">
        <p className="mt-8 font-dm-sans text-xl font-medium text-br-brown">
          Your appointment schedule
        </p>
        <button className="mt-4 rounded-md border-2 border-br-green px-4 py-1 font-bold text-br-green transition-colors duration-75 hover:bg-br-primary hover:text-white">
          View all appointments
        </button>
      </div>

      <p className="mt-6 rounded-md border border-gray-200 bg-gray-100 px-5 py-2 font-dm-sans ">
        No appointments scheduled
      </p>

      <div className="r-10 mt-8 flex space-x-5 overflow-x-scroll">
        {dates.map((date) => {
          return <ScheduleCard key={date.toString()} date={date} />;
        })}
      </div>

      <p className="mb-6 mt-8 font-dm-sans text-xl font-medium text-br-brown">
        How Can we help?
      </p>

      <div className="flex space-x-5">
        <AppointmentCard
          title="Therapy appointment"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, facere."
          src="/images/therapist.png"
          buttonText="Schedule therapy appointment"
          link="/dashboard/scheduling/appointment"
          linkText="Learn more about therapy appointments →"
        />

        <AppointmentCard
          title="Palliative assessment"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, facere."
          src="/images/palliative.png"
          buttonText="Schedule palliative assessment"
          link="/dashboard/scheduling/appointment"
          linkText="Learn more about palliative assessments →"
        />
      </div>
    </>
  );
};

Scheduling.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Scheduling;
