// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AssetsTable from "../src/components/asset/table/AssetsTable";

import {
  ethereumClient,
  projectId,
  wagmiClient,
  WagmiConfig,
  Web3Modal,
  store,
  Snackbars,
  StoreType,
  getAllSnackbars,
} from "evmos-wallet";
import { Footer, Container, TermOfServices } from "ui-helpers";
import { Provider, useDispatch, useSelector } from "react-redux";

import { StatefulHeader } from "../src/StatefulHeader";
import { HeadComponent } from "../src/components/asset/HeadComponent";
import { GoogleAnalytics } from "../src/components/asset/GoogleAnalytics";
function SnackbarsInternal() {
  const valueRedux = useSelector((state: StoreType) => getAllSnackbars(state));
  const dispatch = useDispatch();
  return <Snackbars valueRedux={valueRedux} dispatch={dispatch} />;
}
export default function Home() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig client={wagmiClient}>
          <>
            <HeadComponent />
            <GoogleAnalytics />
            <main>
              <TermOfServices />
              <Container>
                <>
                  <SnackbarsInternal />
                  <StatefulHeader pageName="Assets" />
                  <div className="container mx-auto mb-auto overflow-auto">
                    <AssetsTable />
                  </div>
                  <Footer />
                </>
              </Container>
            </main>
          </>
        </WagmiConfig>
      </QueryClientProvider>

      <Web3Modal
        projectId={projectId}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ethereumClient={ethereumClient}
      />
    </Provider>
  );
}
