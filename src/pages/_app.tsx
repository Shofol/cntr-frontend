import type { NextPage } from "next";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { type ReactElement, type ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "~/styles/globals.css";
import { api } from "~/utils/api";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  session: Session;
};

const MyApp = ({ Component, session, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Toaster
        containerStyle={{
          top: 90,
        }}
        position="top-right"
        toastOptions={toastOptions}
      />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>,
  );
};

const toastOptions = {
  style: {
    minWidth: "250px",
    minHeight: "60px",
  },
  className: "font-dm-sans",
  success: {
    duration: 2000,
    iconTheme: {
      primary: "#1B9C9C",
      secondary: "white",
    },
  },
};

export default api.withTRPC(MyApp);
