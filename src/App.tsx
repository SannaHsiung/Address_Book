import { useState } from "react";
import type { SortOrder } from "./types";
import _ from "lodash";
import UserList from "./UserList";
import ListHeader from "./ListHeader";
import Searchbox from "./Searchbox";
import Sort from "./Sort";
import useUsers from "./hooks/useUsers";

export default function App() {
  const users = useUsers();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

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
