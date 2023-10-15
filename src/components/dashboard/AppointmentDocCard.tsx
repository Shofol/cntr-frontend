import Image from "next/image";

const AppointmentDocCard = ({
  title,
  docName,
  desc,
  isActive,
}: {
  title: string;
  docName: string;
  desc: string;
  isActive?: boolean;
}) => {
  return (
    <div
      className={
        "group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 font-inter transition-all duration-200 hover:border-br-bgreen hover:bg-br-lbgreen " +
        (isActive ? "border-br-bgreen bg-br-lbgreen" : "border-gray-200")
      }
    >
      <div
        className={
          "w-full rounded-tl-lg rounded-tr-lg border-b-2 border-b-gray-200 px-4 py-2 font-semibold group-hover:bg-br-bgreen group-hover:text-white " +
          (isActive ? "bg-br-bgreen text-white" : "bg-gray-100 text-[#2B2C34]")
        }
      >
        <p>{title}</p>
      </div>
      <div className="flex items-center p-4">
        <Image
          src={"/images/doctor.png"}
          width={80}
          height={80}
          alt={docName}
          className="rounded-md"
        />
        <div className="pl-4">
          <p className="font-bold">{docName}</p>
          <p>{desc} min</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDocCard;
