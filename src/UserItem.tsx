import { Link } from "react-router-dom";
import type { User } from "./types";

export default function UserItem({ id, name, email, phone, avatar }: User) {
  return (
    <li
      className=" bg-white dark:bg-slate-600 w-full p-4 shadow rounded cursor-pointer hover:scale-105 transition-transform duration-300"
      key={id}
    >
      <Link to={`/${id}`} className="grid mobile:flex">
        <div className="flex items-center mb-2 mobile:mb-0">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={avatar}
            alt="profile-img"
          />
        </div>
        <div className="text-black">
          <p className="font-semibold">
            <i className="fa-solid fa-user mr-2 dark:text-white" />
            <span className="dark:text-white">{name}</span>
          </p>
          <p>
            <i className="fa-solid fa-envelope mr-2  dark:text-white" />
            <span className="dark:text-white">{email}</span>
          </p>
          <p>
            <i className="fa-solid fa-mobile-screen mr-2  dark:text-white" />
            <span className="dark:text-white">{phone}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
