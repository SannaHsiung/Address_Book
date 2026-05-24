import { useParams } from "react-router-dom";
import type { User } from "./types";
import useUser from "./hooks/useUser";

export default function User() {
  const { id } = useParams();
  const user = useUser(id!);

  if (!user) return;

  return (
    <div className="m-4 p-4 rounded shadow-xl ring ring-white bg-white">
      <img src={user.avatar} className="rounded mb-4" />
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">{user.name}</h1>
        <p>
          <i className="fa-solid fa-envelope mr-1" />
          {user.email}
        </p>
        <p>
          <i className="fa-solid fa-mobile-screen mr-1" />
          {user.phone}
        </p>
        <p>
          {user.streetNumber}
          {user.streetName}
        </p>
        <p>{user.city}</p>
        <p>{user.state}</p>
        <p>{user.country}</p>
        <p>{user.nat}</p>
        <p>{user.registered}</p>
      </div>
    </div>
  );
}
