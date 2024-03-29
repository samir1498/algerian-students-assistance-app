import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/presentation/ui/components/button";
import { ArrowUpDown } from "lucide-react";
import { Assistance } from "@/domain/models/assistance";
import { DataTable } from "@/presentation/ui/components/data-table";

type HelpTableProps = {
  title: string;
};

const columns: ColumnDef<Assistance>[] = [
  {
    accessorKey: "firstName",

    header: ({ column }) => {
      return (
        <Button
          className="flex gap-1"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <ArrowUpDown className="h-4 w-4" />
          First Name
        </Button>
      );
    },
  },
  {
    accessorKey: "lastName",

    header: "Last Name",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "houseNumber",
    header: "House Number",
  },
  {
    accessorKey: "streetName",
    header: "Street Name",
  },
  {
    accessorKey: "city",
    header: ({ column }) => {
      return (
        <Button
          className="flex gap-1"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <ArrowUpDown className="h-4 w-4" />
          City
        </Button>
      );
    },
  },
  {
    accessorKey: "postalCode",
    header: "Postal Code",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "helpType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="flex gap-1"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <ArrowUpDown className="h-4 w-4" />
          Help Type
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "details",
    header: "Details",
    minSize: 360,
  },
];

export default function HelpTable({ title }: HelpTableProps) {
  const data = useLoaderData() as Assistance[];
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className="pt-5 px-10">
      <h1 className="font-bold text-3xl p-4 pl-0">{`Help ${title}`}</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
