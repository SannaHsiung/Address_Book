import type { User } from "./types";
import UserItem from "./UserItem";

interface Props {
  users: User[];
}

export default function UsersList({ users }: Props) {
  return (
    <ul className="grid grid-cols-1 laptop:grid-cols-4 gap-4 justify-items-center mt-12">
      {users.map((user) => (
        <UserItem {...user} />
      ))}
    </ul>
  );
}
