import { useRouter } from "next/router";

const WhiteButton = ({ text, link }: { text: string; link: string }) => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="rounded-md border border-black bg-white px-5 py-2 font-inter hover:bg-green-50 focus:bg-green-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        router.push("/auth/signin");
      }}
    >
      {text}
    </button>
  );
};

export default WhiteButton;
