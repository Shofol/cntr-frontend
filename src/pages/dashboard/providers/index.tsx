import { SessionProvider } from "next-auth/react";
import { type ReactElement } from "react";
import { type ProviderType } from "types/dashboard";
import ProviderCard from "~/components/dashboard/providers/ProviderCard";
import DashboardLayout from "~/components/layout/DashboardLayout";
import type { NextPageWithLayout } from "~/pages/_app";

const Providers: NextPageWithLayout = () => {
  const provider: ProviderType = {
    user_id: null,
    first_name: "BRADLEY",
    last_name: "RADFORD",
    middle_name: "MBBS",
    dob: "2020-10-16",
    gender: "MALE",
    phone_number: "+12083574633",
    address_id: "d4174300-75c0-45e8-8957-9d188d06dcb0",
    is_test: true,
    provider_type: null,
    npi_registry_data: null,
    id: "598065fd-f13c-4897-9860-657d9be1b3e1",
  };

  return (
    <div className="mx-2 sm:mx-0">
      <h1 className="mb-8 mt-5 font-dm-sans text-3xl font-medium text-br-brown sm:mt-0">
        Your care team is here for you
      </h1>

      <div className="mb-6 flex flex-col">
        <div className="mb-8 flex flex-col">
          <p className="mb-6 font-dm-sans text-lg font-semibold text-br-brown">
            Therapy providers
          </p>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <ProviderCard provider={provider} />
            <ProviderCard provider={provider} />
            <ProviderCard provider={provider} />
          </div>
        </div>

        <div className="mb-8 flex flex-col">
          <p className="mb-6 font-dm-sans text-lg font-semibold text-br-brown">
            Palliative care providers
          </p>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <ProviderCard provider={provider} />
            <ProviderCard provider={provider} />
            <ProviderCard provider={provider} />
          </div>
        </div>
      </div>
    </div>
  );
};

Providers.getLayout = function getLayout(page: ReactElement) {
  return (
    <SessionProvider>
      <DashboardLayout>{page}</DashboardLayout>
    </SessionProvider>
  );
};

export default Providers;
