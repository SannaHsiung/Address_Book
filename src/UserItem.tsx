import { Link } from "react-router-dom";
import type { User } from "./types";

export default function UserItem({ id, name, email, phone, avatar }: User) {
  return (
    <li
      className=" bg-white w-full p-4 shadow rounded cursor-pointer hover:scale-105 transition-transform duration-300"
      key={id}
    >
      <Link to={`/${id}`} className="flex">
        <img className="w-12 h-12 rounded-full mr-4" src={avatar} />
        <div className="flex flex-col">
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500">{email}</p>
          <p>Phone {phone}</p>
        </div>
        <div className="flex justify-between"></div>
      </Link>
    </li>
  );
}
