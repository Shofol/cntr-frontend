/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import axios from "axios";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState, type ReactElement } from "react";
import toast from "react-hot-toast";
import DashboardLayout from "~/components/layout/DashboardLayout";
import { type NextPageWithLayout } from "~/pages/_app";
// import api from "~/utils/axios";

const Booking: NextPageWithLayout = () => {
  // useEffect(() => {
  //   const data = {
  //     duration: 30,
  //     password: "string",
  //     start_time: "2023-10-15T16:30:48.401327",
  //     timezone: "America/New_York",
  //     topic: "30 Minute Care Visit",
  //     invitees: ["user@example.com"],
  //     patient_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     provider_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   };

  //   const zoomRes = api.post("zoom/create_meeting", data);

  //   console.log(zoomRes);
  // }, []);

  const router = useRouter();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const fetchOnSchedToken = async (apponitment: any) => {
    const result = await fetch("/api/onsched/token");
    const data = await result.json();

    try {
      const finalRes = await axios.put("/api/onsched/book-appointment", {
        id: apponitment.detail.id,
        token: data.token.access_token,
        email: router.query.email?.toString(),
      });

      const meetingDetail = apponitment.detail;

      toast.success("Succesfully Booked Meeting");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (router.query.email && scriptLoaded) {
      setAvailablitiy();
    }
  }, [router.query, scriptLoaded]);

  const setAvailablitiy = () => {
    // Your client credentials
    const your_client_id = process.env.NEXT_PUBLIC_ONSCHED_CLIENT_ID;
    const locationId = process.env.NEXT_PUBLIC_ONSCHED_LOCATION_ID;

    // Initialize OnSched.js with clientId and environment (sbox or live)
    const onsched: any = window.OnSched(your_client_id, "sbox");

    // Get instance of elements to use for creating elements
    const elements = onsched.elements();

    // Configure Availability Element
    const availabilityParams = {
      resourceId: 0,
      serviceId: 0,
      completeBooking: "IN",
      fullAvailabilityDays: 90,
    };
    const availabilityOptions = {};
    const availability = elements.create(
      "availability",
      availabilityParams,
      availabilityOptions,
    );
    const elAvailability = document.getElementById("availability")!;

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    elAvailability.addEventListener(
      "bookingConfirmation",
      async (event: any) => {
        await fetchOnSchedToken(event);
      },
    );

    // Configure Resources Element
    const resourcesParams = { serviceId: null, locationId: locationId };
    const resourcesOptions = {};
    const resources = elements.create(
      "resources",
      resourcesParams,
      resourcesOptions,
    );
    const elResources = document.getElementById("resources")!;

    // Configure Actions when Resource is selected
    elResources.addEventListener("clickResource", (e: any) => {
      elResources.innerHTML = "";

      availabilityParams.resourceId = e.detail.resourceId;

      availability.mount("availability");
    });

    // Configure Services Element
    const servicesParams = {
      locationId: locationId,
    };
    const servicesOptions = {};
    const services = elements.create(
      "services",
      servicesParams,
      servicesOptions,
    );
    const elServices = document.getElementById("services")!;

    // Configure Actions when Service is selected
    elServices.addEventListener("clickService", (e: any) => {
      elServices.innerHTML = "";

      resourcesParams.serviceId = e.detail.serviceId;
      availabilityParams.serviceId = e.detail.serviceId;

      resources.mount("resources");
    });

    // Mount Services Element
    services.mount("services");
  };

  return (
    <div className="min-h-screen">
      <Script
        src="https://js.onsched.com/1.0.0/"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <div id="availability"></div>
      <div id="locations"></div>
      <div id="services"></div>
      <div id="resources"></div>
    </div>
  );
};

Booking.getLayout = function getLayout(page: ReactElement) {
  return (
    <SessionProvider>
      <DashboardLayout>{page}</DashboardLayout>
    </SessionProvider>
  );
};

export default Booking;

declare global {
  interface Window {
    OnSched: any;
  }
}

// https://onsched.com/dashboardjsbooking?
// userEmail=visits@mycontourhealth.com&
// client_id=sbox1696947491&
// locationId=39f27d8f-f9ce-442d-80e9-a9563a9affee&env=SBOX
