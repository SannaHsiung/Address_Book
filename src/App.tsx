import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { User } from "./types";
import { getUsers } from "./services/userService";
import _ from "lodash";

type SortOrder = "asc" | "desc";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  const filteredUsers = searchQuery
    ? users.filter((u) =>
        u.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : users;

  const sortedUsers = _.orderBy(filteredUsers, "name", sortOrder);

  return (
    <div className="m-8">
      <h1 className="text-xl">Användare</h1>
      <input
        className="w-80 mt-2 p-2 border-2 border-neutral-500 rounded"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select
        className="ml-4 w-40 mt-2 p-2 border-2 border-neutral-500 rounded"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as SortOrder)}
      >
        <option value="asc">Stigande</option>
        <option value="desc">Fallande</option>
      </select>
      <ul className="grid grid-cols-1 laptop:grid-cols-4 gap-8 justify-items-center mt-4">
        {sortedUsers.map((user) => (
          <li
            className="w-full p-4 shadow rounded cursor-pointer hover:scale-105 transition-transform duration-300"
            key={user.id}
          >
            <Link to={`/${user.id}`} className="flex">
              <img className="w-12 h-12 rounded-full mr-4" src={user.avatar} />
              <div className="flex flex-col">
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
                <p>Phone {user.phone}</p>
              </div>
              <div className="flex justify-between"></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
