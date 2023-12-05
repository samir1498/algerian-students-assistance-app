import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const HelpTable = React.lazy(() => import("@/presentation/admin/HelpTable"));
const LoginPage = React.lazy(() => import("@/presentation/ui/pages/LoginPage"));

import { Layout } from "@/presentation/ui/components/Layout";

import ErrorPage from "@/presentation/ui/pages/ErrorPage";
import NotFound from "@/presentation/ui/pages/NotFound";
import ManagementTable from "@/presentation/admin/ManagementTable";
import Home from "@/presentation/ui/pages/Home";
import HelpForm from "@/presentation/help/HelpForm";
import Success from "@/presentation/ui/pages/Success";

import { AssistanceRepositoryImpl } from "@/domain/repositories/assistance/assistanceRepositoryImpl";
import { getAllManagers } from "@/domain/useCases/getAllManagers";
import { UserRepositoryImpl } from "@/domain/repositories/user/userRepositoryImpl";
import { getAllAssistanceOffers } from "@/domain/useCases/assistance/getAssistanceOffers";
import { getAllAssistanceRequests } from "@/domain/useCases/assistance/getAssistanceRequests";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route errorElement={<ErrorPage />}>
        <Route index={true} element={<Home />} />
        <Route
          path="request-help"
          element={<HelpForm title={"Request"} url={"/assistance/request"} />}
        />
        <Route
          path="offer-help"
          element={<HelpForm title={"Offer"} url={"/assistance/offer"} />}
        />
        <Route path="success" element={<Success />} />
        {/* management */}
        <Route
          path="management"
          element={<ManagementTable title="Managers" />}
          loader={async () => {
            return await getAllManagers(new UserRepositoryImpl());
          }}
        />
        {/* login page */}
        <Route path="login" element={<LoginPage />} />
        {/* admin route */}
        <Route errorElement={<ErrorPage />}>
          <Route
            path="/admin/help-offers"
            element={<HelpTable title="Offers" />}
            loader={async () => {
              return await getAllAssistanceOffers(
                new AssistanceRepositoryImpl()
              );
            }}
          />
          <Route
            path="/admin/help-requests"
            element={<HelpTable title="Requests" />}
            loader={async () => {
              return await getAllAssistanceRequests(
                new AssistanceRepositoryImpl()
              );
            }}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);
