import Head from "next/head";
import Image from "next/image";
import Footer from "~/components/home/Footer";
import Navbar from "~/components/home/Navbar";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Contour</title>
        <meta name="description" content="Contour Health" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative flex max-h-screen flex-col bg-br-light">
        <Image
          src="/images/hero-bg.svg"
          fill
          alt="hero background"
          style={{ objectFit: "cover" }}
          className="-my-72"
        />
        <Navbar />
        <div className="relative mx-5 mt-20 flex flex-col items-center justify-start text-center sm:mx-0 sm:text-left">
          <h1 className="font-spectral text-5xl font-bold text-white sm:text-[5rem]">
            Care you can count on
          </h1>
          <p className="text-md mt-4 font-dm-sans text-white sm:text-[1.125rem]">
            Palliative care for the lorem ipsum moments that matter.
          </p>

          <button className="text-md mt-8 rounded-lg bg-br-light px-10 py-2 font-medium text-br-dark sm:px-20 sm:py-5 sm:text-lg">
            Get Started
          </button>
        </div>
        <div className="relative mt-16 flex w-full items-center justify-center">
          <Image
            src="/images/mockups/dashboard.png"
            width={744}
            height={516}
            alt="hero image"
          />
        </div>
      </header>
      <main>
        <div className="bg-br-light pb-20 pt-20 sm:pt-20 p-20">
          <div className="mx-auto flex max-w-7xl flex-col items-center sm:flex-row sm:space-x-10">
            <div className="flex flex-1 items-center justify-center">
              <div className="relative h-64 w-64 rounded-2xl bg-[#929C73] sm:h-[36rem] sm:w-[36rem]">
                <Image
                  src="/images/pexels/pexels-kampus-production-7551628.jpg"
                  fill
                  alt="test"
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="mx-5 flex-1 items-center justify-center pt-10 text-center sm:mx-0 sm:pt-0 sm:text-left">
              <h2 className="font-spectral text-4xl font-semibold text-[#595959] sm:text-7xl">
                Care by your <br className="hidden sm:block" />
                side
              </h2>
              <p className="text-md mt-2 font-dm-sans text-[#595959] sm:text-2xl">
                Match with a trained nurse who can guide you through the changes
                in your life.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center sm:mt-24 sm:flex-row sm:space-x-10">
            <div className="order-2 mx-5 flex-1 items-center justify-center pt-10 text-center sm:order-1 sm:mx-0 sm:pt-0 sm:text-left">
              <h2 className="font-spectral text-4xl font-semibold text-[#595959] sm:text-7xl">
                Stay informed
              </h2>
              <p className="text-md mt-2 font-dm-sans text-[#595959] sm:text-2xl">
                Easily keep your primary physicians and specialists informed on
                your care and progress.
              </p>
            </div>

            <div className="order-1 flex flex-1 items-center justify-center sm:order-2">
              <div className="relative h-64 w-64 rounded-2xl bg-[#929C73] sm:h-[36rem] sm:w-[36rem]">
                <Image
                  src="/images/pexels/pexels-karolina-grabowska-7195308.jpg"
                  fill
                  alt="test"
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-br-primary px-5 py-36 text-center sm:px-0 sm:text-left">
          <div className="relative flex flex-1 flex-col items-center justify-start">
            <h3 className="font-spectral text-5xl font-bold text-white sm:text-[5rem]">
              Care you can count on
            </h3>
            <p className="text-md mt-4 font-dm-sans text-white sm:text-[1.125rem]">
              Palliative care for the lorem ipsum moments that matter.
            </p>

            <button className="text-md mt-8 rounded-lg bg-br-light px-10 py-2 font-medium text-br-dark sm:px-20 sm:py-5 sm:text-lg">
              Get Started
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined },
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
