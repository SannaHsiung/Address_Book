import { Link, useParams } from "react-router-dom";
import type { User } from "./types";
import useUser from "./hooks/useUser";

export default function User() {
  const { id } = useParams();
  const user = useUser(id!);

  if (!user) return;

  return (
    <div className="flex h-screen w-full bg-gray-300 justify-center items-center">
      <div className="text-center">
        <Link to="/">
          <i className="fa-solid fa-arrow-left" />
          <span className="font-bold ml-1">Tillbaka</span>
        </Link>
        <h1 className="mt-8 mb-4 text-2xl font-bold">Information</h1>
        <div className="p-5 rounded shadow-xl bg-gray-600 w-96 text-white">
          <div className="grid place-items-center">
            <img src={user.avatar} className="rounded mb-4" alt="profile-img" />
          </div>
          <h1 className="text-xl font-bold">{user.name}</h1>
          <div className="grid text-left ml-16">
            <p>
              <i className="fa-solid fa-envelope mr-2" />
              {user.email}
            </p>
            <p>
              <i className="fa-solid fa-mobile-screen mr-2" />
              {user.phone}
            </p>
          </div>
          <div className="mt-8">
            <h1 className="font-bold">
              <i className="fa-solid fa-location-dot mr-1" />
              Adress
            </h1>
            <div className="grid text-left ml-24">
              <p>
                <span className="font-semibold">Gata: </span>
                {`${user.streetNumber} ${user.streetName}`}
              </p>
              <p>
                <span className="font-semibold">Stad:</span> {user.city}
              </p>
              <p>
                <span className="font-semibold">Delstat:</span> {user.state}
              </p>
              <p>
                <span className="font-semibold">Land:</span> {user.country}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="font-bold">
              <i className="fa-solid fa-file-pen mr-2" />
              Anställningsdatum
            </h1>
            <p>{user.registered}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
