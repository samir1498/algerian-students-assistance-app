import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <h1 className="font-bold text-2xl">Something went wrong</h1>
      <Link to="../login/">Login again</Link>
    </>
  );
}
