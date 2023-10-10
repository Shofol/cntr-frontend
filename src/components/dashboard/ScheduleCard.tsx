import Image from "next/image";
import { useEffect, useState } from "react";

const ScheduleCard = ({ date }: { date: Date }) => {
  // const today = new Date().getTime() === date.getTime();
  const [today, setToday] = useState<boolean>(false);

  useEffect(() => {
    setToday(new Date().toString() === date.toString());
  }, [date]);

  return (
    <div className="border-br-sage flex h-64 min-h-[253px] min-w-[190px] flex-1 flex-col rounded-lg border font-dm-sans">
      <div
        className={
          "bg-br-dark-red rounded-tl-lg rounded-tr-lg " +
          (today ? "bg-br-red" : "")
        }
      >
        <p className=" py-1 text-center font-bold text-white">
          {today ? "Today" : "Tue 9/9"}
        </p>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        {!today && (
          <p className="text-center text-[#5F5F5F]">
            No appointments scheduled
          </p>
        )}
        {today && (
          <div className="px-4">
            <div className="bg-br-orange flex max-w-fit rounded-full px-3 py-1 font-bold">
              <Image
                src="/images/repeat.svg"
                width={24}
                height={24}
                alt="icon"
                className="mr-1"
              />
              <span>Weekly</span>
            </div>
            <p className="mt-3 font-bold">Therapy Appointment</p>
            <p>1:30-2:30</p>
            <p>Dr. John Doe</p>

            <button className="bg-br-green mt-4 w-full rounded-md py-1 font-bold text-white transition-colors duration-75 hover:bg-br-primary">
              {"Join now"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleCard;
