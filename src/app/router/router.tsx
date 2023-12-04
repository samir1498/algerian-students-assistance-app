import React from "react";
import { createBrowserRouter } from "react-router-dom";

const HelpTable = React.lazy(() => import("@/presentation/admin/HelpTable"));
const LoginPage = React.lazy(() => import("@/presentation/ui/pages/LoginPage"));

import { Layout } from "../presentation/ui/components/Layout";

import ErrorPage from "../presentation/ui/pages/ErrorPage";
import NotFound from "../presentation/ui/pages/NotFound";
import ManagementTable from "@/presentation/admin/ManagementTable";
import { getAllManagers } from "@/infrastructure/api/managementApi";
import Home from "@/presentation/ui/pages/Home";
import HelpForm from "@/presentation/help/HelpForm";
import {
  getAllHelpOffers,
  getAllHelpRequests,
} from "@/infrastructure/api/helpRequests";
import Success from "@/presentation/ui/pages/Success";

const managementRoute = {
  path: "/",
  children: [
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/management/",
          element: <ManagementTable title="Managers" />,
          loader: getAllManagers,
        },
      ],
    },
  ],
};

const publicRoute = {
  path: "/",
  element: <Layout />,
  children: [
    {
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "request-help",
          element: (
            <HelpForm title={"Request Help"} url={"/assistance/request"} />
          ),
        },
        {
          path: "offer-help",
          element: <HelpForm title={"Offer Help"} url={"/assistance/offer"} />,
        },
        {
          path: "success",
          element: <Success />,
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
};

const adminRoute = {
  path: "/admin",
  children: [
    {
      index: true,
      element: <LoginPage />,
    },
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/admin/help-requests",
          element: <HelpTable title="Help Requests" />,
          loader: getAllHelpRequests,
        },
        {
          path: "/admin/help-offers",
          element: <HelpTable title="Help Offers" />,
          loader: getAllHelpOffers,
        },
      ],
    },
  ],
};

export const router = createBrowserRouter([
  publicRoute,
  adminRoute,
  managementRoute,
]);
