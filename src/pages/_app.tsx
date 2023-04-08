import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
import { api } from "~/utils/api";

import "~/styles/globals.css";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import DrawerLayout from "~/components/DrawerLayout";

const MyApp = ({
  Component,
  pageProps: { ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const layout = getLayout(<Component {...pageProps} />);

  return (
    <div>
      <ClerkProvider {...pageProps}>
        <DrawerLayout>{layout}</DrawerLayout>
      </ClerkProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
