import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/components/button";
import { Assistance } from "@/domain/models/assistance";
import { DataTable } from "../ui/components/data-table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/components/dialog";

type HelpTableProps = {
  title: string;
};

const columns: ColumnDef<Assistance>[] = [
  {
    accessorKey: "username",

    header: ({ column }) => {
      return (
        <Button
          className="flex gap-1"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <ArrowUpDown className="h-4 w-4" />
          Moderator Name
        </Button>
      );
    },
  },
];

export default function ManagementTable({ title }: HelpTableProps) {
  const data = useLoaderData() as Assistance[];
  const [open, setOpen] = useState(false);
  return (
    <div className="pt-5 px-10">
      <h1 className="font-bold text-3xl p-4 pl-0">{title}</h1>

      <div className="w-full flex justify-end">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <span className="bg-green-500 font-bold hover:bg-green-600 hover:shadow-lg text-white py-2 px-4 rounded-lg">
              Add manager
            </span>
          </DialogTrigger>
          <DialogContent className="max-w-fit">
            <DialogHeader>
              <DialogTitle className="font-bold text-center pb-4">
                Add Manager
              </DialogTitle>
              <div className="flex flex-col items-center">
                <form className="px-6 flex flex-col gap-2">
                  <div className="flex flex-col justify-between gap-1">
                    <label htmlFor="name" className="font-bold">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="border border-black outline-1 outline-gray-200"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-1">
                    <label htmlFor="email" className="font-bold">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="border border-black outline-1 outline-gray-200"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-1">
                    <label htmlFor="password" className="font-bold">
                      Password
                    </label>
                    <input
                      type="text"
                      id="password"
                      className="border border-black outline-1 outline-gray-200"
                    />
                  </div>
                  <Button
                    onClick={() => setOpen(false)}
                    className="bg-green-500 w-fit self-center mt-2 rounded-lg h-fit"
                  >
                    Add
                  </Button>
                </form>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
