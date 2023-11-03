const SenderBox = ({
  sender,
  excerpt,
  count,
}: {
  sender: string;
  excerpt: string;
  count: number;
}) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-br-sage p-4">
      <div>
        <p className="font-bold">{sender}</p>
        <p>{excerpt}</p>
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-br-green font-semibold text-white">
        {count}
      </div>
    </div>
  );
};

export default SenderBox;
