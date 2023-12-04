import {
  Link,
  Navigate,
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigation,
} from "react-router-dom";
import Spinner from "./Spinner";
import { useAdminContext } from "@/context/AdminContext";

export function Layout() {
  const { state } = useNavigation();
  const location = useLocation();

  const isLoading = state === "loading";

  const IsManagement = location.pathname === "/management";
  const IsAdmin = location.pathname.includes("/admin/");

  const { admin } = useAdminContext();

  if (IsAdmin && !admin?.name) {
    console.log("no admin or manager");
    return <Navigate to="/admin/" />;
  }

  if (IsManagement && admin?.role !== "ADMIN") {
    console.log("no admin");
    return <Navigate to="/admin/help-requests/" />;
  }

  return (
    <Container>
      <NavBar />
      <ScrollRestoration />
      {isLoading && <Spinner />}
      <Main isLoading={isLoading}>
        <Outlet />
      </Main>
    </Container>
  );
}

function NavBar() {
  const location = useLocation();

  const showRequestHelp =
    location.pathname === "/offer-help" || location.pathname === "/";
  const showOfferHelp =
    location.pathname === "/request-help" || location.pathname === "/";

  const showHelpRequests = location.pathname === "/admin/help-offers";
  const showHelpOffers = location.pathname === "/admin/help-requests";
  return (
    <nav className="flex justify-between items-center gap-4 z-50 px-4 py-3 border-b border-b-black shadow-md">
      <div className="text-2xl font-bold">
        <Link to="/">My App</Link>
      </div>
      <ul className="m-0 flex gap-2 list-none items-stretch">
        {showRequestHelp && (
          <li>
            <Link
              to="/request-help"
              className="bg-gray-800 px-4 py-2 text-white rounded-lg hover:bg-white hover:text-black border border-gray-800"
            >
              Request Help
            </Link>
          </li>
        )}
        {showOfferHelp && (
          <li>
            <Link
              to="/offer-help"
              className="bg-gray-800 px-4 py-2 text-white rounded-lg hover:bg-white hover:text-black border border-gray-800"
            >
              Offer Help
            </Link>
          </li>
        )}
        {showHelpRequests && (
          <li>
            <Link
              to="./help-requests"
              className="bg-gray-800 px-4 py-2 text-white rounded-lg hover:bg-white hover:text-black border border-gray-800"
            >
              Help Requests
            </Link>
          </li>
        )}
        {showHelpOffers && (
          <li>
            <Link
              to="./help-offers"
              className="bg-gray-800 px-4 py-2 text-white rounded-lg hover:bg-white hover:text-black border border-gray-800"
            >
              Help Offers
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}

function Main({
  children,
  isLoading,
}: {
  children: React.ReactNode;
  isLoading: boolean;
}) {
  return (
    <main
      className={`max-w-6xl my-0 mx-auto mb-8 py-0 px-4 flex flex-col items-center ${
        isLoading ? "blur pointer-events-none" : ""
      }`}
    >
      {children}
    </main>
  );
}
