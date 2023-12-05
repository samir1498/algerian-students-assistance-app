import { User } from "@/domain/models/user";
import React, { ReactNode, useContext } from "react";
import { createContext } from "react";
import { useSessionStorage } from "usehooks-ts";


type AdminContextType = {
  admin: User | undefined;
  setAdmin: React.Dispatch<React.SetStateAction<User>>;
};

const AdminContext = createContext<AdminContextType | null>(null);

export function useAdminContext() {
  const adminContext = useContext(AdminContext);
  if (adminContext == null) {
    throw new Error("Must be used inside context");
  }
  return adminContext;
}

export default function AdminContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [admin, setAdmin] = useSessionStorage<User>("admin", {} as User);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}
