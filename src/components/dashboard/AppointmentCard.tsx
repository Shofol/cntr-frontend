import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { type AppointmentAd } from "types/dashboard";

const AppointmentCard = (props: AppointmentAd) => {
  const { title, description, src, buttonText, link, linkText } = props;
  const router = useRouter();

  return (
    <div className="border-br-sage rounded-lg border p-10">
      <div className="grid grid-cols-3">
        <div className="col-span-2 pr-8">
          <p className="text-br-green font-dm-sans text-3xl font-bold">
            {title}
          </p>
          <p className="fonter-inter mt-3 text-lg">{description}</p>
        </div>
        <div className="col-span-1">
          <Image src={src} alt="title" width={160} height={133} />
        </div>
      </div>

      <button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => router.push(link)}
        className="bg-br-green mb-10 mt-16 w-full rounded-md py-4 font-dm-sans text-lg font-bold text-white transition-colors duration-75 hover:bg-br-primary"
      >
        {buttonText}
      </button>

      <Link
        href={link}
        className="text-br-green  block text-center font-inter text-lg font-bold"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default AppointmentCard;
