import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import WhiteButton from "./WhiteButton";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const AuthButtons = () => {
  return (
    <div className="ml-2 flex items-center space-x-2 pr-2 font-medium sm:static sm:inset-auto sm:ml-6 sm:space-x-5 sm:pr-0">
      <WhiteButton text="Log in" />
      <WhiteButton text="Sign up" />
    </div>
  );
};

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-br-secondary font-inter relative">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 flex-wrap items-center justify-between">
              <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center border-2 border-black bg-white p-2">
                  <Image
                    width={143}
                    height={24}
                    src="/images/logo.svg"
                    alt="Contour Health"
                  />
                </div>
                <div className="hidden items-center sm:ml-6 sm:flex">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={
                          "rounded-md px-3 py-2 text-sm font-medium " +
                          (item.current
                            ? "text-green-200"
                            : "text-white hover:text-gray-300")
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden sm:block">
                <AuthButtons />
              </div>

              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white  hover:border-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={
                    "block rounded-md px-3 py-2 text-base font-medium " +
                    (item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white")
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              <AuthButtons />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
