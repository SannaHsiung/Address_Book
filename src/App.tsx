import { useEffect, useState } from "react";
import { getUsers } from "./services/userService";
import type { User } from "./types";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <div className="m-8">
      <h1 className="text-xl">Användare</h1>
      <ul className="grid grid-cols-1 laptop:grid-cols-4 gap-8 justify-items-center mt-4">
        {users.map((user: User) => (
          <li className="w-full p-4 shadow rounded" key={user.id}>
            <div className="flex">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src={user.avatar}
                alt=""
              />
              <div className="flex flex-col">
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
                <p>Phone {user.phone}</p>
              </div>
            </div>
            <div className="flex justify-between"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
