const AppointTypeCard = ({
  title,
  time,
  isActive,
}: {
  title: string;
  time: string;
  isActive?: boolean;
}) => {
  return (
    <div
      className={
        "hover:border-br-bgreen hover:bg-br-lbgreen flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 px-10 py-4 font-inter transition-all duration-200 " +
        (isActive ? "bg-br-lbgreen border-br-bgreen" : "border-gray-200")
      }
    >
      <p className="font-bold">{title}</p>
      <p>{time} min</p>
    </div>
  );
};

export default AppointTypeCard;
