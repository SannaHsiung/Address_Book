import { Link, useParams } from "react-router-dom";
import useUser from "./hooks/useUser";
import { useThemeContext } from "./ThemeProvider";

export default function UserPage() {
  const { id } = useParams();
  const user = useUser(id!);
  const { darkMode, setDarkMode } = useThemeContext();

  if (!user) return;

  return (
    <div
      className={`${darkMode ? "dark" : ""} flex h-screen w-full bg-gray-100 dark:bg-slate-900 justify-center items-center`}
    >
      <div className="text-center">
        <Link to="/">
          <i className="fa-solid fa-arrow-left dark:text-white" />
          <span className="font-bold ml-1 dark:text-white">Tillbaka</span>
        </Link>
        <div className="mt-4">
          <button
            className="p-2 bg-white border-2 border-neutral-500 rounded  hover:bg-slate-400"
            onClick={() => setDarkMode("")}
          >
            <i className="fa-solid fa-sun" />
          </button>
          <button
            className="ml-2 p-2 bg-white border-2 border-neutral-500 rounded  hover:bg-slate-400"
            onClick={() => setDarkMode("dark")}
          >
            <i className="fa-solid fa-moon" />
          </button>
        </div>
        <h1 className="mt-6 mb-4 text-2xl font-bold dark:text-white">
          Information
        </h1>

        <div className="grid place-items-center">
          <img src={user.avatar} className="rounded mb-4" alt="profile-img" />
        </div>
        <h1 className="text-xl font-bold dark:text-white">{user.name}</h1>
        <div className="grid text-left ml-2">
          <p>
            <i className="fa-solid fa-envelope mr-2 dark:text-white" />
            <span className="dark:text-white">{user.email}</span>
          </p>
          <p>
            <i className="fa-solid fa-mobile-screen mr-2 dark:text-white" />
            <span className="dark:text-white">{user.phone}</span>
          </p>
        </div>
        <div className="mt-8">
          <h1 className="font-bold -ml-6">
            <i className="fa-solid fa-location-dot mr-1 dark:text-white" />
            <span className="dark:text-white">Adress</span>
          </h1>
          <div className="grid text-left ml-8">
            <p>
              <span className="font-semibold dark:text-white">Gata: </span>
              <span className="dark:text-white">{`${user.streetNumber} ${user.streetName}`}</span>
            </p>
            <p>
              <span className="font-semibold dark:text-white">Stad: </span>
              <span className="dark:text-white">{user.city}</span>
            </p>
            <p>
              <span className="font-semibold dark:text-white">Delstat: </span>
              <span className="dark:text-white">{user.state}</span>
            </p>
            <p>
              <span className="font-semibold dark:text-white">Land: </span>
              <span className="dark:text-white">{user.country}</span>
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="font-bold">
            <i className="fa-solid fa-file-pen mr-2 dark:text-white" />
            <span className="dark:text-white">Anställningsdatum</span>
          </h1>
          <p className="dark:text-white">{user.registered}</p>
        </div>
      </div>
    </div>
  );
}
