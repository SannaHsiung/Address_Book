import { useEffect, useState } from "react";
import type { User } from "./types";
import { getUsers } from "./services/userService";
import _ from "lodash";
import UserItem from "./UserItem";

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
    <div className="p-8">
      <h1 className="text-xl font-bold">Anställda</h1>
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
      <ul className="grid grid-cols-1 laptop:grid-cols-4 gap-4 justify-items-center mt-12">
        {sortedUsers.map((user) => (
          <UserItem {...user} />
        ))}
      </ul>
    </div>
  );
}
