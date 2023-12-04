import { Admin } from "@/domain/models/admin";
import React, { ReactNode, useContext } from "react";
import { createContext } from "react";
import { useSessionStorage } from "usehooks-ts";

type AdminContextType = {
  admin: Admin | undefined;
  setAdmin: React.Dispatch<React.SetStateAction<Admin>>;
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
  const [admin, setAdmin] = useSessionStorage<Admin>("admin", {} as Admin);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}
