import {
  Link,
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigation,
} from "react-router-dom";
import Spinner from "./Spinner";

export function RootLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";
  const location = useLocation();
  const showRequestHelp =
    location.pathname === "/offer-help" || location.pathname === "/";
  const showOfferHelp =
    location.pathname === "/request-help" || location.pathname === "/";

  return (
    <div className="flex flex-col">
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
        </ul>
      </nav>
      <ScrollRestoration />
      {isLoading && <Spinner />}
      <div
        className={`max-w-6xl my-0 mx-auto mb-8 py-0 px-4 flex flex-col items-center ${
          isLoading ? "blur pointer-events-none" : ""
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
