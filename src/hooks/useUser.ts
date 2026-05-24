import { useEffect, useState } from "react";
import type { User } from "../types";
import { getUser } from "../services/userService";

export default function useUser(id: string) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (!id) return;
    getUser(id).then((user) => setUser(user));
  }, []);

  return user;
}
