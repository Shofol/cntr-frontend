import {
  type EmbeddedClient,
  type SuspensionViewType,
} from "@zoomus/websdk/embedded";
import axios from "axios";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { type ParsedUrlQuery } from "querystring";
import { useEffect, type ReactElement } from "react";
import { type ZoomClientConfig } from "types/dashboard";

import DashboardLayout from "~/components/layout/DashboardLayout";
import { type NextPageWithLayout } from "~/pages/_app";
import api from "~/utils/axios";

const Meeting: NextPageWithLayout = () => {
  const router = useRouter();
  const payload = router.query;

  useEffect(() => {
    // checking if SharedArrayBuffer is enabled. Or the cross origin isolation is enabled.
    // If not then it's getting reloaded. Check next.config.mjs to see which
    // headers are getting added on page reload

    if (!crossOriginIsolated) {
      location.reload();
    }
  }, []);

  useEffect(() => {
    if (payload.meetingNumber && payload.password && payload.userName) {
      void initZoomApp(payload);
    }
  }, [payload]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mb-8 flex  w-full justify-start">
        <Link
          className="font-inter text-lg text-br-brown"
          href={"/dashboard/scheduling"}
        >
          ← Back
        </Link>
      </div>
      <div className="flex-1">
        <div id="meetingSDKElement" data-testid="meetingSDK"></div>
      </div>
      {/* <div className="flex-1">
        <div id="meetingSDKChatElement" data-testid="meetingChat"></div>
      </div> */}
    </div>
  );
};

const initZoomApp = async (payload: ParsedUrlQuery) => {
  await fetchToken();
  const { client, clientConf } = await initClient(payload);
  await startMeeting(client, clientConf);
  const containerWidth: number =
    document.getElementById("meetingSDKElement")?.offsetWidth ?? 1000;

  client.updateVideoOptions({
    viewSizes: {
      default: {
        width: containerWidth,
        height: 300,
      },
    },
  });
};

const fetchToken = async () => {
  try {
    await api.get("zoom/token");
  } catch (error) {
    console.log(error);
  }
};

const initClient = async (payload: ParsedUrlQuery) => {
  const ZoomMtgEmbedded = (await import("@zoomus/websdk/embedded")).default;
  const client: typeof EmbeddedClient = ZoomMtgEmbedded.createClient();

  const clientConf = {
    authEndpoint: "https://kempsey-wallaby-dmpe.2.us-1.fl0.io",
    sdkKey: process.env.NEXT_PUBLIC_ZOOM_SDK_KEY!,
    signature: "",
    meetingNumber: payload.meetingNumber as string,
    passWord: payload.password as string,
    role: 0,
    userName: payload.userName as string,
    userEmail: "",
  };

  const { signature } = await getSignature(
    clientConf.meetingNumber,
    clientConf.role,
  );

  clientConf.signature = signature;

  const meetingSDKElement = document.getElementById("meetingSDKElement");
  // const meetingSDKChatElement = document.getElementById(
  //   "meetingSDKChatElement",
  // );

  await client.init({
    zoomAppRoot: meetingSDKElement!,
    language: "en-US",
    customize: {
      video: {
        isResizable: true,
        popper: {
          disableDraggable: true,
        },
        defaultViewType: "gallery" as SuspensionViewType,
        // viewSizes: {
        //   default: {
        //     width: 900,
        //     height: 200,
        //   },
        //   ribbon: {
        //     width: 700,
        //     height: 200,
        //   },
        // },
      },
      // chat: {
      //   popper: {
      //     disableDraggable: true,
      //     anchorElement: meetingSDKChatElement,
      //     placement: "top",
      //   },
      // },
    },
  });

  return { client: client, clientConf: clientConf };
};

async function getSignature(meetingNumber: string, role: number) {
  const data: Response = await axios.post(
    // TODO: https://kempsey-wallaby-dmpe.2.us-1.fl0.io
    "/api/signature",
    {
      meetingNumber: meetingNumber,
      role: role,
    },
  );
  // TODO: const response: SignatureResponse = (await data.json()) as SignatureResponse;
  const response: SignatureResponse = (await data.data) as SignatureResponse;

  return response;
}

type SignatureResponse = {
  signature: string;
};

async function startMeeting(
  client: typeof EmbeddedClient,
  clientConf: ZoomClientConfig,
) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  await client.join({
    signature: clientConf.signature,
    sdkKey: clientConf.sdkKey,
    meetingNumber: clientConf.meetingNumber,
    password: clientConf.passWord,
    userName: clientConf.userName,
  });
}

Meeting.getLayout = function getLayout(page: ReactElement) {
  return (
    <SessionProvider>
      <DashboardLayout showSidebar={false}>{page}</DashboardLayout>
    </SessionProvider>
  );
};

export default Meeting;
