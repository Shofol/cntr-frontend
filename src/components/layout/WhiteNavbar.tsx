import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

export default function WhiteNavbar() {
  return (
    <Disclosure as="nav" className="relative font-inter">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 flex-wrap items-center justify-between">
              <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
                <Link
                  href="/"
                  className="flex flex-shrink-0 items-center bg-white p-2"
                >
                  <Image
                    width={143}
                    height={24}
                    src="/images/logo-bold.png"
                    alt="Contour Health"
                  />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
