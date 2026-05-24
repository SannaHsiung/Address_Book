import { Link } from "react-router-dom";
import type { User } from "./types";

export default function UserItem({ id, name, email, phone, avatar }: User) {
  return (
    <li
      className=" bg-white w-full p-4 shadow rounded cursor-pointer hover:scale-105 transition-transform duration-300"
      key={id}
    >
      <Link to={`/${id}`} className="flex">
        <div className="flex items-center">
          <img className="w-12 h-12 rounded-full mr-4" src={avatar} />
        </div>
        <div>
          <p className="font-semibold">
            <i className="fa-solid fa-user mr-1" />
            {name}
          </p>
          <p className="text-gray-500">
            <i className="fa-solid fa-envelope mr-1" />
            {email}
          </p>
          <p>
            <i className="fa-solid fa-mobile-screen mr-1" />
            {phone}
          </p>
        </div>
      </Link>
    </li>
  );
}
