import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AdminContextProvider from "./app/context/AdminContext.tsx";
import { router } from "./app/router/router.tsx";
import Spinner from "./presentation/ui/components/Spinner.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <AdminContextProvider>
        <RouterProvider router={router} />
      </AdminContextProvider>
    </Suspense>
  </React.StrictMode>
);
