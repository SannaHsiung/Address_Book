import { useState } from "react";
import type { SortOrder } from "./types";
import _ from "lodash";
import useUsers from "./hooks/useUsers";
import ListHeader from "./ListHeader";
import Searchbox from "./Searchbox";
import Sort from "./Sort";
import UsersList from "./UsersList";

export default function Users() {
  const users = useUsers();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [darkMode, setDarkMode] = useState("");

  const filteredUsers = searchQuery
    ? users.filter((u) =>
        u.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : users;

  const sortedUsers = _.orderBy(filteredUsers, "name", sortOrder);

  return (
    <div
      className={`${darkMode ? "dark" : ""} p-8 h-screen w-full bg-gray-300 dark:bg-slate-900`}
    >
      <ListHeader />
      <Searchbox value={searchQuery} onChange={setSearchQuery} />
      <Sort value={sortOrder} onChange={setSortOrder} />
      <button
        className="ml-4 p-2 bg-white border-2 border-neutral-500 rounded hover:bg-slate-400"
        onClick={() => setDarkMode("")}
      >
        <i className="fa-solid fa-sun" />
      </button>
      <button
        className="ml-2 p-2 bg-white border-2 border-neutral-500 rounded hover:bg-slate-400"
        onClick={() => setDarkMode("dark")}
      >
        <i className="fa-solid fa-moon" />
      </button>
      <UsersList users={sortedUsers} />
    </div>
  );
}
