import { useRouter } from "next/router";
import Navbar from "~/components/home/Navbar";

export default function SignUp() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="bg-auth flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[680px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-36">
            <h2 className="text-center font-spectral text-4xl font-bold text-br-brown">
              Welcome John
            </h2>
            <p className="text-center font-inter text-[#3A3A3A]">
              Review or enter the information below
            </p>
            <form className="space-y-4 pt-14" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="number"
                    autoComplete="current-phone"
                    required
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <p className="border-b border-b-gray-300 pb-2 pt-4 font-dm-sans text-xl text-br-brown">
                Address
              </p>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country/region
                </label>
                <div className="mt-1">
                  <input
                    id="country"
                    name="country"
                    type="text"
                    autoComplete="current-country"
                    required
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="street"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-1">
                  <input
                    id="street"
                    name="street"
                    type="text"
                    autoComplete="current-street"
                    required
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="address-2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Address 2
                </label>
                <div className="mt-1">
                  <input
                    id="address-2"
                    name="address-2"
                    type="text"
                    autoComplete="current-address-2"
                    required
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="current-city"
                    required
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 sm:space-x-5">
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State
                  </label>
                  <div className="mt-1">
                    <input
                      id="state"
                      name="state"
                      type="text"
                      autoComplete="current-state"
                      required
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP Code
                  </label>
                  <div className="mt-1">
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      autoComplete="current-zip"
                      required
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <p className="border-b border-b-gray-300 pb-2 pt-4 font-dm-sans text-xl text-br-brown">
                Insurance information
              </p>

              <div>
                <label
                  htmlFor="provider"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Insurance provider
                </label>
                <div className="mt-1">
                  <input
                    id="provider"
                    name="provider"
                    type="text"
                    autoComplete="current-provider"
                    required
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Member ID
                </label>
                <div className="mt-1">
                  <input
                    id="id"
                    name="id"
                    type="text"
                    autoComplete="current-id"
                    required
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="focus-visible:outline-bg-br-green flex w-full justify-center rounded-md bg-br-green px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-br-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  onClick={() => {
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    router.push("/dashboard/scheduling");
                  }}
                >
                  Create account
                </button>
              </div>
            </form>

            <p className="pt-4 text-center text-[#3A3A3A]">
              By continuing, you agree to the{" "}
              <a href="https://www.notion.so/mycontourhealth/Terms-of-Use-7190f6490b7d4742be69823cc6bee08b?pvs=4" className="font-bold">
                Terms of use
              </a>{" "}
              and{" "}
              <a href="https://mycontourhealth.notion.site/Privacy-Policy-b9f9abdb219d487a895eed9885b24e21?pvs=4" className="font-bold">
                Privacy policy
              </a>{" "}
              of Contour Health, Inc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
