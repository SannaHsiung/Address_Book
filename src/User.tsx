import { Link, useParams } from "react-router-dom";
import type { User } from "./types";
import useUser from "./hooks/useUser";

export default function User() {
  const { id } = useParams();
  const user = useUser(id!);

  if (!user) {
    return;
  }

  return (
    <div className="m-4">
      <Link to="/">
        <i className="fa-solid fa-arrow-left" />
        <span className="font-bold ml-1">Tillbaka</span>
      </Link>
      <div className="mt-4 p-4 rounded shadow-xl ring ring-white bg-white w-96">
        <img src={user.avatar} className="rounded mb-4" alt="profile-img" />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">{user.name}</h1>
          <p>
            <i className="fa-solid fa-envelope mr-2" />
            {user.email}
          </p>
          <p>
            <i className="fa-solid fa-mobile-screen mr-2" />
            {user.phone}
          </p>
          <div className="mt-8">
            <h1 className="font-bold">
              <i className="fa-solid fa-location-dot mr-1" />
              Address
            </h1>
            <p>
              <span className="font-semibold">Street:</span>{" "}
              {`${user.streetNumber} ${user.streetName}`}
            </p>
            <p>
              <span className="font-semibold">City:</span> {user.city}
            </p>
            <p>
              <span className="font-semibold">State:</span> {user.state}
            </p>
            <p>
              <span className="font-semibold">Country:</span> {user.country}
            </p>
          </div>
          <div className="mt-8">
            <h1 className="font-bold">
              <i className="fa-solid fa-pen mr-2" />
              Registered
            </h1>
            <p>{user.registered}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
