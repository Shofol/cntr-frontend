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
import ConfirmationModal from "~/components/tailwindui/ConfirmationModal";
import { type NextPageWithLayout } from "~/pages/_app";
import api from "~/utils/axios";
// import api from "~/utils/axios";

const Booking: NextPageWithLayout = () => {
  const router = useRouter();
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [showConfirmModal, setshowConfirmModal] = useState(false);
  const [appointment, setAppointment] = useState<any>(null);
  const [onSchedToken, setOnSchedToken] = useState<string>("");

  const fetchOnSchedToken = async (apponitment: any) => {
    const result = await fetch("/api/onsched/token");
    const data = await result.json();
    setOnSchedToken(data.token.access_token as string);
    setshowConfirmModal(true);
  };

  const bookAppointment = async () => {
    try {
      const finalRes: any = await axios.put("/api/onsched/book-appointment", {
        id: appointment.detail.id,
        token: onSchedToken,
        email: router.query.email?.toString(),
      });

      // await finalRes.json();

      const meetingDetail = appointment.detail;

      const zoomMeetingData = {
        duration: meetingDetail.duration,
        password: "string",
        start_time: meetingDetail.startDateTime,
        timezone: "America/New_York",
        topic: `${meetingDetail.serviceName} with ${meetingDetail.resourceName}`,
        invitees: [meetingDetail.resourceEmail, router.query.email],
        patient_id: "610d98b0-723d-42cf-a01e-6481a79cda23",
        provider_id: router.query.provider,
      };

      const zoomRes: any = api.post("zoom/create_meeting", zoomMeetingData);
      toast.success("Succesfully Booked Meeting");

      // await zoomRes.json();
    } catch (error) {
      console.log(error);
    }
  };

  const cancelAppointment = async () => {
    const finalRes = await axios.put("/api/onsched/cancel-appointment", {
      id: appointment.detail.id,
      token: onSchedToken,
    });
    setshowConfirmModal(false);
    toast.success("Succesfully Cancelled Meeting");
  };

  useEffect(() => {
    if (router.query.email && scriptLoaded) {
      setAvailablitiy();
    }
  }, [router.query, scriptLoaded]);

  const setAvailablitiy = () => {
    // Your client credentials
    const your_client_id = process.env.NEXT_PUBLIC_ONSCHED_CLIENT_ID;
    // const locationId = process.env.NEXT_PUBLIC_ONSCHED_LOCATION_ID;

    // Initialize OnSched.js with clientId and environment (sbox or live)
    const onsched: any = window.OnSched(your_client_id, "sbox");

    // Get instance of elements to use for creating elements
    const elements = onsched.elements();

    // Configure Availability Element
    const availabilityParams = {
      resourceId: router.query.res,
      serviceId: router.query.serv,
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
    elAvailability.addEventListener("bookingConfirmation", (event: any) => {
      void fetchOnSchedToken(event);
      setAppointment(event);
    });

    availability.mount("availability");

    // // Configure Resources Element
    // const resourcesParams = { serviceId: null, locationId: locationId };
    // const resourcesOptions = {};
    // const resources = elements.create(
    //   "resources",
    //   resourcesParams,
    //   resourcesOptions,
    // );
    // const elResources = document.getElementById("resources")!;

    // // Configure Actions when Resource is selected
    // elResources.addEventListener("clickResource", (e: any) => {
    //   elResources.innerHTML = "";

    //   availabilityParams.resourceId = e.detail.resourceId;

    //   availability.mount("availability");
    // });

    // // Configure Services Element
    // const servicesParams = {
    //   locationId: locationId,
    // };
    // const servicesOptions = {};
    // const services = elements.create(
    //   "services",
    //   servicesParams,
    //   servicesOptions,
    // );
    // const elServices = document.getElementById("services")!;

    // // Configure Actions when Service is selected
    // elServices.addEventListener("clickService", (e: any) => {
    //   elServices.innerHTML = "";

    //   resourcesParams.serviceId = e.detail.serviceId;
    //   availabilityParams.serviceId = e.detail.serviceId;

    //   resources.mount("resources");
    // });

    // // Mount Services Element
    // services.mount("services");
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
      {scriptLoaded && (
        <ConfirmationModal
          title="Meeting Time Confirmation"
          message="Are you confirm to book this slot for meeting?"
          confirmFunction={async () => {
            setshowConfirmModal(false);
            await bookAppointment();
          }}
          cancelFunction={async () => {
            await cancelAppointment();
            setshowConfirmModal(false);
            setAppointment(null);
          }}
          isModalOpen={showConfirmModal}
        />
      )}
      {/* <div id="services"></div> */}
      {/* <div id="resources"></div> */}
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
