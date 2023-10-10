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

  return (
    <>
      <h1 className="text-br-brown font-dm-sans text-3xl font-medium">
        Meet with your care team
      </h1>

      <div className="flex justify-between">
        <p className="text-br-brown mt-8 font-dm-sans text-xl font-medium">
          Your appointment schedule
        </p>
        <button className="border-br-green text-br-green mt-4 rounded-md border-2 px-4 py-1 font-bold transition-colors duration-75 hover:bg-br-primary hover:text-white">
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

      <p className="text-br-brown mb-6 mt-8 font-dm-sans text-xl font-medium">
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
