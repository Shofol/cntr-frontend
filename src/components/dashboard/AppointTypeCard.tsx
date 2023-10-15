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
        "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 px-10 py-4 font-inter transition-all duration-200 hover:border-br-bgreen hover:bg-br-lbgreen " +
        (isActive ? "border-br-bgreen bg-br-lbgreen" : "border-gray-200")
      }
    >
      <p className="font-bold">{title}</p>
      <p>{time} min</p>
    </div>
  );
};

export default AppointTypeCard;
