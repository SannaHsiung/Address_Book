import { useEffect, useState } from "react";
import type { User } from "../types";
import { getUsers } from "../services/userService";

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return users;
}
