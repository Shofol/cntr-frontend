// import { type Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";
// import { type AppType } from "next/app";

// import { api } from "~/utils/api";

// import "~/styles/globals.css";

// const MyApp: AppType<{ session: Session | null }> = ({
//   Component,
//   pageProps: { session, ...pageProps },
// }) => {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// };

// export default api.withTRPC(MyApp);

import type { NextPage } from "next";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
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
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>,
  );
};

export default api.withTRPC(MyApp);
