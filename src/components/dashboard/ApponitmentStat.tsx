import Image from "next/image";
import { type AppointmentType } from "types/dashboard";

const AppointmentStat = ({ appointment }: { appointment: AppointmentType }) => {
  return (
    <div className="group mb-6 flex max-w-lg flex-col rounded-xl border-2 p-6 font-inter text-br-brown sm:mr-4">
      <div className="flex items-center justify-between">
        <div className="rounded-md bg-[#EFE271] px-4 py-3 font-bold leading-none">
          Today
        </div>
        <div className="bg-pink border-br-pink bg-br-lpink rounded-md border px-4 py-3 font-bold leading-none">
          Cancelled
        </div>

        {/* <p className="text-base">{appointment.date}</p> */}

        <button className=" text-br-brown underline">Reschedule</button>
      </div>
      <div className="mt-8 flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <div className="flex flex-col items-start sm:flex-row sm:items-center">
          <Image
            src={"/images/doctor.png"}
            width={120}
            height={120}
            alt={appointment.provider_name}
            className="rounded-md"
          />
          <div className="py-4 text-xl sm:py-0 sm:pl-4">
            <p className="font-semibold">{appointment.service_name}</p>
            <p className="font-semibold">{appointment.time}</p>
            <p className="font-thin ">{appointment.provider_name}</p>
          </div>
        </div>
      </div>
      <button
        className="mt-8 w-full rounded-md bg-br-green py-4 font-semibold text-white transition-colors duration-75 hover:bg-br-primary"
        onClick={() => {
          // void joinMeeting();
        }}
      >
        {"Join now"}
      </button>

      <button
        className="mt-8 w-full rounded-md border border-br-green py-4 font-semibold text-br-green transition-colors duration-75 hover:bg-br-primary hover:text-white"
        onClick={() => {
          // void joinMeeting();
        }}
      >
        Reschedule
      </button>

      <div className="bg-br-lpink border-br-pink mt-8 rounded-md border px-3 py-4 font-inter">
        <p>
          Originally scheduled for Mon Oct 1, 2023 from 1:30-2pm. Auto canceled
          due to outdated insurance.
        </p>
        <button className=" font-semibold text-br-brown underline">
          Update Now
        </button>
      </div>
    </div>
  );
};

export default AppointmentStat;
