import {
  Link,
  Navigate,
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigation,
} from "react-router-dom";
import Spinner from "../router/Spinner";

type ProtectedRouteProps = {
  admin: {
    name: string;
  };
};
export function ProtectedRoute({ admin }: ProtectedRouteProps) {
  const { state } = useNavigation();
  const isLoading = state === "loading";
  const location = useLocation();
  const showHelpRequests = location.pathname === "/admin/help-offers";
  const showHelpOffers = location.pathname === "/admin/help-requests";

  if (!admin) {
    console.log("no admin");
    return <Navigate to="/admin/" />;
  }

  return (
    <div className="flex flex-col">
      <nav className="flex justify-between items-center gap-4 z-50 px-4 py-3 border-b border-b-black shadow-md">
        <div className="text-2xl font-bold">
          <Link to="/admin">My App</Link>
        </div>
        <ul className="m-0 flex gap-2 list-none items-stretch">
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
      <ScrollRestoration />
      {isLoading && <Spinner />}
      <div
        className={`my-0 mx-auto mb-8 py-0 px-4 flex flex-col items-center ${
          isLoading ? "blur pointer-events-none" : ""
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
