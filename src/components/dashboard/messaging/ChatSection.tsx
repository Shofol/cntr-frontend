import Image from "next/image";

const ChatSection = ({
  name,
  date,
  messages,
  isOwn,
}: {
  name: string;
  date: string;
  messages: string[];
  isOwn?: boolean;
}) => {
  return (
    <>
      <div className="mb-4 flex items-start space-x-4 sm:mb-10">
        <div className="relative h-8 w-8 rounded-full sm:h-16 sm:w-16">
          <Image
            src="/images/doctor.png"
            alt="doctor image"
            fill={true}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <p>
            <span className="font-bold">{name}</span>{" "}
            <span className="text-[#555]">{date}</span>
          </p>
          {messages.map((message, idx) => {
            return (
              <div
                key={idx}
                className={
                  "mb-4 mt-2 rounded-lg border p-4 text-sm sm:px-8 sm:py-6 sm:text-base " +
                  (isOwn
                    ? "border-br-secondary bg-br-secondary text-white"
                    : "border-gray-200 bg-gray-100 ")
                }
              >
                {message}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChatSection;
