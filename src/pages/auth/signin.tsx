import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "~/components/home/Navbar";
import ErrorAlert from "~/components/tailwindui/ErrorAlert";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSignIn = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError(null);
    const loader = toast.loading("Loading");
    signIn("credentials", {
      redirect: false,
      username: email,
      password: password,
    })
      .then(async (response) => {
        toast.dismiss(loader);
        if (response?.error) {
          const errorStr = response.error || "An unknown error occurred";
          console.error(errorStr);
          setError(errorStr);
        } else {
          console.log(response);
          toast.success("Succesfully Signed in");
          await router.push("/dashboard/scheduling");
        }
      })
      .catch((error) => {
        // handle network or JSON parsing errors here
        console.error(error);
        setError("An unexpected error occurred while signing in.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="bg-auth flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[680px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-36">
            <h2 className="text-center font-spectral text-4xl font-bold text-br-brown">
              Welcome to Contour
            </h2>
            <p className="text-center font-inter text-[#3A3A3A]">
              Your care team is here for you
            </p>
            <form className="space-y-4 pt-14" onSubmit={handleSignIn}>
              {error && <ErrorAlert message={error} level="error" />}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    minLength={10}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date of birth
                </label>
                <div className="mt-1">
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    autoComplete="current-dob"
                    required
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}

              <div className="pt-4">
                <button
                  type="submit"
                  className="focus-visible:outline-bg-br-green flex w-full justify-center rounded-md bg-br-green px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-br-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="pt-4 text-center text-[#3A3A3A]">
              By continuing, you agree to the{" "}
              <a
                href="https://www.notion.so/mycontourhealth/Terms-of-Use-7190f6490b7d4742be69823cc6bee08b?pvs=4"
                className="font-bold"
              >
                Terms of use
              </a>{" "}
              and{" "}
              <a
                href="https://mycontourhealth.notion.site/Privacy-Policy-b9f9abdb219d487a895eed9885b24e21?pvs=4"
                className="font-bold"
              >
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
