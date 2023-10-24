import Image from "next/image";
import { type AppointmentType } from "types/dashboard";

const AppointmentDetail = ({
  appointment,
}: {
  appointment: AppointmentType;
}) => {
  return (
    <div
      //   onClick={() => onProviderSelect(236742, provider.id)}
      className="group mb-6 flex cursor-pointer flex-col rounded-xl border-2 p-6 font-inter text-br-brown sm:mr-4"
    >
      <p className="text-base">{appointment.date}</p>
      <div className="mt-3 flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <div className="flex flex-col items-start sm:flex-row sm:items-center">
          <Image
            src={"/images/doctor.png"}
            width={150}
            height={150}
            alt={appointment.provider_name}
            className="rounded-md"
          />
          <div className="py-4 text-lg sm:py-0 sm:pl-4">
            <p className="font-bold">{appointment.service_name}</p>
            <p className="font-bold">{appointment.time}</p>
            <p className="font-thin ">{appointment.provider_name}</p>
          </div>
        </div>
        <button className="mr-2 rounded-md border border-br-green px-8 py-2 font-dm-sans font-bold text-br-green transition-colors duration-75 hover:bg-br-primary hover:text-white">
          Reschedule
        </button>
      </div>
    </div>
  );
};

export default AppointmentDetail;
