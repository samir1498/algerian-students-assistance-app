import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./common/RootLayout";
import ErrorPage from "./common/ErrorPage";
import Home from "./home/Home";
import HelpForm from "./help/HelpForm";
import NotFound from "./common/NotFound";

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
            element: <HelpForm title={"Offer Help"} />,
          },
          {
            path: "offer-help",
            element: <HelpForm title={"Request Help"} />,
          },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
]);
