import { FormEvent, Suspense, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "../../../infrastructure/api/axios";
import { useAdminContext } from "../../../app/context/AdminContext";
import Spinner from "@/presentation/ui/components/Spinner";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const { admin, setAdmin } = useAdminContext();
  if (admin?.name) {
    console.log("admin");
    return <Navigate to="/admin/help-offers" />;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("logging in...");
    try {
      const response = await axios.post(
        "/auth/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 403) {
        setLoginError("Check your username or password.");
      } else if (response.status === 200) {
        setAdmin(response.data);
        navigate("/admin/help-requests");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("Somthing went worng.");
    }
  }

  return (
    <Suspense fallback={<Spinner />}>
      <div className="flex flex-col">
        <nav className="flex justify-between items-center gap-4 z-50 px-4 py-3 border-b border-b-black shadow-md">
          <div className="text-2xl font-bold">
            <Link to="/admin">My App</Link>
          </div>
        </nav>

        <div
          className={"my-0 mx-auto mb-8 py-0 px-4 flex flex-col items-center"}
        >
          <form
            className="mt-24 flex flex-col justify-start gap-2 rounded-xl border border-black p-2 px-20 shadow-xl"
            onSubmit={handleSubmit}
          >
            <span className="p-4 text-center text-4xl font-bold">Login</span>
            <div className="flex flex-col">
              <label htmlFor="username" className="font-bold">
                Username:
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="border-b border-black outline-gray-400"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-bold">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="border-b border-black outline-gray-400"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <div className="flex flex-col">
                {loginError !== "" && (
                  <span className="pt-2 text-xs text-red-500">
                    {loginError}
                  </span>
                )}
              </div>
            </div>
            <input
              type="submit"
              value="Login"
              className="mb-4 mt-4 self-center rounded-xl border border-black bg-gray-800 p-4 py-2 text-white hover:bg-white hover:text-black focus:bg-white focus:text-black"
            />
          </form>
        </div>
      </div>
    </Suspense>
  );
}
