import Image from "next/image";
import { type ProviderType } from "types/dashboard";

const ProviderCard = ({ provider }: { provider: ProviderType }) => {
  return (
    <div className="group mb-6 flex max-w-xs flex-col rounded-xl border border-br-sage p-6 font-inter text-br-brown sm:mr-4">
      <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <div className="flex flex-col items-start sm:flex-row ">
          <div className="py-4 text-xl sm:py-0 sm:pr-4">
            <p className="font-bold text-br-green">
              {provider.first_name} {provider.last_name}
            </p>
            <p className="text-lg">{provider.middle_name}</p>
          </div>
          <Image
            src={"/images/doctor.png"}
            width={94}
            height={94}
            alt={provider.first_name}
            className="rounded-md"
          />
        </div>
      </div>

      <button
        className="mt-8 w-full rounded-md border border-br-green py-4 font-dm-sans font-semibold text-br-green transition-colors duration-75 hover:bg-br-primary hover:text-white"
        // onClick={() => {
        // }}
      >
        Schedule appointment
      </button>

      <div className="mt-6 flex flex-col font-dm-sans font-semibold text-br-green lg:flex-row">
        <button className="mb-2 flex flex-1 items-center justify-center lg:mb-0 lg:border-r lg:border-br-sage">
          <Image
            src="/icons/ChatText.svg"
            width={24}
            height={24}
            alt="message button icon"
            className="mr-1"
          />
          <span>Message</span>
        </button>

        <button className="mb-2 flex flex-1 items-center justify-center lg:mb-0">
          <Image
            src="/icons/UserCircle.svg"
            width={24}
            height={24}
            alt="view bio button icon"
            className="mr-1"
          />
          <span>View Bio</span>
        </button>
      </div>
    </div>
  );
};

export default ProviderCard;
