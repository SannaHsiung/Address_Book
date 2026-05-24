import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <h1 className="font-bold text-xl">404 - Not Found</h1>
        <Link to="/">
          <i className="fa-solid fa-arrow-left" />
          <span className="font-bold ml-1">Tillbaka</span>
        </Link>
      </div>
    </div>
  );
}
