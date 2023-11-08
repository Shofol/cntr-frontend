import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ScheduleCard = ({ date }: { date: Date }) => {
  // const today = new Date().getTime() === date.getTime();
  const [today, setToday] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setToday(new Date().toString() === date.toString());
  }, []);

  const joinMeeting = async () => {
    await router.push(
      "/dashboard/scheduling/meeting?userName=patient&meetingNumber=89974991853&password=string",
    );
  };

  return (
    <div className="flex h-64 min-h-[253px] min-w-[190px] flex-1 flex-col rounded-lg border border-br-sage font-dm-sans">
      <div
        className={
          "rounded-tl-lg rounded-tr-lg bg-br-dark-red " +
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
            <div className="flex max-w-fit rounded-full bg-br-orange px-3 py-1 font-bold">
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
            <p>Dr. RN Carla Espinosa</p>

            <button
              className="mt-4 w-full rounded-md bg-br-green py-1 font-bold text-white transition-colors duration-75 hover:bg-br-primary"
              onClick={() => {
                void joinMeeting();
              }}
            >
              {"Join now"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleCard;
