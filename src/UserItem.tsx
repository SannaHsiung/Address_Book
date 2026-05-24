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
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={avatar}
            alt="profile-img"
          />
        </div>
        <div>
          <p className="font-semibold">
            <i className="fa-solid fa-user mr-2" />
            {name}
          </p>
          <p>
            <i className="fa-solid fa-envelope mr-2" />
            {email}
          </p>
          <p>
            <i className="fa-solid fa-mobile-screen mr-2" />
            {phone}
          </p>
        </div>
      </Link>
    </li>
  );
}
