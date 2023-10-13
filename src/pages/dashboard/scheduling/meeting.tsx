import {
  type EmbeddedClient,
  type SuspensionViewType,
} from "@zoomus/websdk/embedded";
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
    if (payload.meetingNumber && payload.password && payload.userName) {
      void initZoomApp(payload);
    }
  }, [payload]);

  return (
    <div className="flex min-h-screen items-start justify-center">
      <div className="flex-1">
        <div id="meetingSDKElement"></div>
      </div>
      <div className="flex-1">
        <div id="meetingSDKChatElement"></div>
      </div>
    </div>
  );
};

const initZoomApp = async (payload: ParsedUrlQuery) => {
  await fetchToken();
  const { client, clientConf } = await initClient(payload);
  await startMeeting(client, clientConf);
};

const fetchToken = async () => {
  try {
    const token = await api.get("zoom/token");
    console.log(token);
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
  const meetingSDKChatElement = document.getElementById(
    "meetingSDKChatElement",
  );

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
        viewSizes: {
          default: {
            width: 900,
            height: 200,
          },
          ribbon: {
            width: 700,
            height: 200,
          },
        },
      },
      chat: {
        popper: {
          disableDraggable: true,
          anchorElement: meetingSDKChatElement,
          placement: "top",
        },
      },
    },
  });

  return { client: client, clientConf: clientConf };
};

async function getSignature(meetingNumber: string, role: number) {
  const data: Response = await fetch(
    "https://kempsey-wallaby-dmpe.2.us-1.fl0.io",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role,
      }),
    },
  );

  const response: SignatureResponse = (await data.json()) as SignatureResponse;

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
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Meeting;
