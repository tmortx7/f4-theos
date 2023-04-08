import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Layout } from "~/components/Layout";
import DrawerLayout from "~/components/DrawerLayout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <DrawerLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DrawerLayout>
  );
};

export default api.withTRPC(MyApp);
