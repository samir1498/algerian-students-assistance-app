import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./common/RootLayout";
import { ProtectedRoute } from "./common/ProtectedRoute";
import ErrorPage from "./router/ErrorPage";
import Home from "./home/Home";
import HelpForm from "./help/HelpForm";
import NotFound from "./router/NotFound";
import LoginPage from "./admin/LoginPage";
import HelpTable from "./admin/HelpTable";

import data from "../infrastructure/api/help.json";

const admin = {
  name: "Samir",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "request-help",
            element: <HelpForm title={"Request Help"} />,
          },
          {
            path: "offer-help",
            element: <HelpForm title={"Offer Help"} />,
          },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
  {
    path: "/admin",
    children: [
      {
        index: true,
        element: <LoginPage admin={admin} />,
      },
      {
        element: <ProtectedRoute admin={admin} />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/admin/help-requests",
            element: (
              <HelpTable title="Help Requests" data={data.helpRequests} />
            ),
          },
          {
            path: "/admin/help-offers",
            element: <HelpTable title="Help Offers" data={data.helpOffers} />,
          },
        ],
      },
    ],
  },
]);
