import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, type ReactElement } from "react";
import { type ProviderType, type Service } from "types/dashboard";
import AppointTypeCard from "~/components/dashboard/AppointTypeCard";
import AppointmentDocCard from "~/components/dashboard/AppointmentDocCard";
import DashboardLayout from "~/components/layout/DashboardLayout";
import type { NextPageWithLayout } from "~/pages/_app";
import api from "~/utils/axios";

const Appointment: NextPageWithLayout = () => {
  const [activeService, setActiveService] = useState<Service>({
    duration: 0,
    serviceId: "",
  });
  const [providers, setProviders] = useState<ProviderType[]>([]);
  const router = useRouter();

  const fetchProviders = async () => {
    const result = await api.get("providers/providers");
    // const providers = await result.json();
    console.log(result.data);
    setProviders(result.data as ProviderType[]);
  };

  const handleSelectedProvider = async (
    resourceId: number,
    providerId: string,
  ) => {
    await router.push(
      `/dashboard/scheduling/booking?serv=${activeService.serviceId}&res=${resourceId}&email=frontend@mycontourhealth.com&provider=${providerId}`,
    );
  };

  useEffect(() => {
    void fetchProviders();
  }, []);

  return (
    <div className="mx-2 my-5 sm:mx-0 sm:mt-0">
      <h1 className="font-dm-sans text-3xl font-medium text-br-brown">
        Meet with your care team
      </h1>

      <div className="mt-10 w-full rounded-md border border-gray-200 px-10 py-8">
        <Link
          className="font-inter text-lg text-br-brown"
          href={"/dashboard/scheduling"}
        >
          ← Back
        </Link>

        <h1 className="font-dn-sans mt-8 text-3xl font-medium text-br-brown">
          Schedule a Therapy Appointment
        </h1>
        <p className="mt-8 font-inter text-lg font-medium text-br-brown">
          How long would you like to meet?
        </p>
        <div className="mt-6 flex flex-col space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
          <AppointTypeCard
            onServiceSelect={(value: Service) => {
              setActiveService(value);
            }}
            serviceId="283730"
            title="Quick chat"
            time={15}
            isActive={activeService.duration === 15}
          />
          <AppointTypeCard
            onServiceSelect={(value: Service) => {
              setActiveService(value);
            }}
            title="Standard visit"
            time={30}
            isActive={activeService.duration === 30}
            serviceId="283729"
          />
          <AppointTypeCard
            onServiceSelect={(value: Service) => {
              setActiveService(value);
            }}
            title="Long visit"
            time={60}
            isActive={activeService.duration == 60}
            serviceId="283729"
          />
        </div>

        <p className="mt-8 font-inter text-lg font-medium text-br-brown">
          Who would you like to meet with?
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 ">
          {providers.map((provider: ProviderType) => {
            return (
              <AppointmentDocCard
                onProviderSelect={(resourceId: number, providerId: string) => {
                  void handleSelectedProvider(resourceId, providerId);
                }}
                provider={provider}
                key={provider.id}
                title="First available"
                docName={`${provider.first_name} ${provider.last_name}`}
                desc={" Lorem ipsum dolor sit, amet consectetur "}
                isActive={false}
              />
            );
          })}

          {/* <AppointmentDocCard
            title="First available"
            docName="Dr. John Doe"
            desc={" Lorem ipsum dolor sit, amet consectetur "}
          /> */}

          <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 px-10 py-7 font-inter transition-all duration-200 hover:border-br-bgreen hover:bg-br-lbgreen sm:mr-4">
            <p className="text-center">See More Providers</p>
          </div>
        </div>

        <button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          // onClick={() => router.push(link)}
          className="mb-10 mt-8 rounded-md bg-br-green px-10 py-4 font-dm-sans text-lg font-bold text-white transition-colors duration-75 hover:bg-br-primary"
        >
          Continue to select date & time →
        </button>
      </div>
    </div>
  );
};

Appointment.getLayout = function getLayout(page: ReactElement) {
  return (
    <SessionProvider>
      <DashboardLayout>{page}</DashboardLayout>
    </SessionProvider>
  );
};

export default Appointment;
