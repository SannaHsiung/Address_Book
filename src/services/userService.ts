import axios from "axios";
import type { User } from "../types";

const API_URL = "https://randomuser.me/api/?results=10&seed=sanna&nat=gb";

export async function getUsers(): Promise<User[]> {
  const res = await axios.get(API_URL);
  return mapToUsers(res.data.results);
}

function mapToUsers(results: any): User[] {
  return results.map(
    (result: any) =>
      ({
        id: result.name.uuid,
        name: `${result.name.first} ${result.name.last}`,
        email: result.email,
        phone: result.phone,
        avatar: result.picture.large,
      }) as User,
  );
}
