import user from "@/presentation/assets/user.svg";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { useAdminContext } from "@/app/context/AdminContext";
import authService from "@/infrastructure/services/authService";
import { Link, useNavigate } from "react-router-dom";
import { User } from "@/domain/models/user";

export default function User() {
  const { admin, setAdmin } = useAdminContext();
  const navigate = useNavigate();
  return (
    <Popover>
      <PopoverTrigger className="rounded-full bg-slate-100 hover:bg-slate-300 p-2">
        <div className="">
          <img src={user} alt="user icon" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-fit mr-4 flex flex-col p-0">
        <div className="p-4 flex gap-1 font-bold">
          <img
            src={user}
            alt=""
            className="w-6 rounded-full border border-black"
          />

          <span className="text-gray-500">{admin?.name?.toUpperCase()}</span>
        </div>

        <ul>
          {admin?.role === "ADMIN" && (
            <li className="hover:bg-gray-200 w-full h-full px-4 py-2 text-center">
              <Link to="../management">Managers</Link>
            </li>
          )}
          <li className="hover:bg-gray-200 w-full h-full px-4 py-2 text-center">
            <button
              className="text-center"
              onClick={async () => {
                await authService.logout();
                setAdmin({} as User);
                navigate("/login");
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
