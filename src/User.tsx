import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { User } from "./types";
import { getUser } from "./services/userService";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (!id) return;
    getUser(id).then((user) => setUser(user));
  }, []);

  if (!user) return;

  return (
    <div className="m-4 p-4 rounded shadow-xl ring ring-neutral-200">
      <img src={user.avatar} className="rounded-full" />
      <div className="text-xl font-bold mt-2">{user.name}</div>
      <p>{user.phone}</p>
      <p>{user.email}</p>
    </div>
  );
}
