import { columns } from "./help-table/columns";
import { DataTable } from "./help-table/data-table";
import { HelpRequestOffer } from "../help/HelpForm";

type HelpTableProps = {
  title: string;
  data: HelpRequestOffer[];
};

export default function HelpTable({ title, data }: HelpTableProps) {
  return (
    <div className="pt-5 px-10">
      <h1 className="font-bold text-3xl p-4 pl-0">{title}</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
