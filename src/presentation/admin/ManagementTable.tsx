import { DataTable } from "../../shadcn/components/data-table";
import { HelpRequestOffer } from "../HelpForm";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/ui/shadcn/components/button";
import { ArrowUpDown } from "lucide-react";

type HelpTableProps = {
  title: string;
};

const columns: ColumnDef<HelpRequestOffer>[] = [
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
  const data = useLoaderData() as HelpRequestOffer[];
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="pt-5 px-10">
      <h1 className="font-bold text-3xl p-4 pl-0">{title}</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
