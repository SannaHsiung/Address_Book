import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { User } from "./types";
import { getUsers } from "./services/userService";

const UserContext = createContext([] as User[]);

export default function UserProvider({ children }: PropsWithChildren) {
  const [users, setUsers] = useState<User[]>([]);
  console.log(users);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
}

export function useUsers() {
  return useContext(UserContext);
}
