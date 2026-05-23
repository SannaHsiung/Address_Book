import { useEffect, useState } from "react";
import type { SortOrder, User } from "./types";
import { getUsers } from "./services/userService";
import _ from "lodash";
import UserList from "./UserList";
import ListHeader from "./ListHeader";

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
      <ListHeader />
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
      <UserList users={sortedUsers} />
    </div>
  );
}
