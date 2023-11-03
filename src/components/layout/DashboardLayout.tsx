import { Dialog, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState, type ReactNode } from "react";
import { navigation } from "~/utils/config";

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardLayout({
  children,
  showSidebar = true,
}: {
  children: ReactNode;
  showSidebar?: boolean;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [deskSidebarOpen, setDeskSidebarOpen] = useState(true);

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (showSidebar !== undefined && showSidebar !== null) {
      setDeskSidebarOpen(showSidebar);
    }
  }, [showSidebar]);

  return (
    <>
      <div className="bg-dashboard relative max-h-full min-h-screen overflow-y-hidden">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Mobile Sidebar component */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-br-light px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <Image
                        className="h-8 w-auto"
                        src="/images/logo.svg"
                        alt="Contour Health logo"
                        width={100}
                        height={20}
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className={classNames(
                                    router.pathname === item.href
                                      ? "bg-gray-50 text-br-dark"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-br-dark",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    {
                                      <item.icon
                                        current={
                                          router.pathname === item.href
                                            ? "stroke-br-dark"
                                            : ""
                                        }
                                      />
                                    }
                                  </svg>
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        {deskSidebarOpen && (
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <div className="flex grow flex-col gap-y-5 overflow-y-auto  bg-transparent pb-4 ">
              <div className="flex h-20 shrink-0 items-center bg-white pl-6 shadow-md">
                <Image
                  className="h-8 w-auto"
                  src="/images/logo.svg"
                  alt="Contour Health logo"
                  width={150}
                  height={45}
                />
              </div>
              <nav className="mt-6 flex flex-1 flex-col pl-6">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name} className="group">
                          <Link
                            href={item.href}
                            className={classNames(
                              router.pathname === item.href
                                ? "bg-[#efe6d7] text-br-dark"
                                : "text-gray-700 hover:bg-[#efe6d7] hover:text-br-dark",
                              "group mr-2 flex gap-x-3 rounded-lg p-2 text-sm font-semibold leading-6",
                            )}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {
                                <item.icon
                                  current={
                                    router.pathname === item.href
                                      ? "stroke-br-dark"
                                      : ""
                                  }
                                />
                              }
                            </svg>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}

        <div className={deskSidebarOpen ? "lg:pl-72" : "lg:pl-0"}>
          {/* Navbar  */}

          {/* border-b border-gray-200 */}
          <div
            className={
              "fixed left-0 right-0 top-0 z-40 flex h-20 shrink-0 items-center justify-between gap-x-4 bg-white px-4 shadow-md sm:justify-end sm:gap-x-6 sm:px-6 lg:px-8 " +
              (deskSidebarOpen ? "xl:left-72" : "xl:left-0")
            }
          >
            <div
              className={
                "flex h-16 flex-1 shrink-0 items-center " +
                (deskSidebarOpen ? "sm:hidden" : "")
              }
            >
              <Image
                className="h-8 w-auto"
                src="/images/logo.svg"
                alt="Contour Health logo"
                width={60}
                height={10}
              />
            </div>

            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-200 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        {session?.userData.email}
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900",
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Child Pages */}
          <main className="relative mx-10 py-10 pt-[7.5rem]">
            <div className=" overflow-x-hidden overflow-y-scroll rounded-lg bg-white px-4 shadow-lg sm:p-6 lg:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
