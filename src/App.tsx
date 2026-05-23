import { useEffect, useState } from "react";
import type { SortOrder, User } from "./types";
import { getUsers } from "./services/userService";
import _ from "lodash";
import UserList from "./UserList";
import ListHeader from "./ListHeader";
import Searchbox from "./Searchbox";
import Sort from "./Sort";

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
      <Searchbox value={searchQuery} onChange={setSearchQuery} />
      <Sort value={sortOrder} onChange={setSortOrder} />
      <UserList users={sortedUsers} />
    </div>
  );
}
