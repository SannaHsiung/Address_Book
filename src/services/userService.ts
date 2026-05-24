import axios from "axios";
import type { User } from "../types";

const API_URL = "https://randomuser.me/api/?results=10&seed=sanna&nat=gb";

export async function getUsers(): Promise<User[]> {
  const res = await axios.get(API_URL);
  return mapToUsers(res.data.results);
}

export async function getUser(id: string): Promise<User | undefined> {
  const users = await getUsers();
  return users.find((u) => u.id === id);
}

function mapToUsers(results: any): User[] {
  return results.map(
    (result: any) =>
      ({
        id: result.login.uuid,
        name: `${result.name.first} ${result.name.last}`,
        email: result.email,
        phone: result.cell,
        avatar: result.picture.large,
        streetNumber: result.location.street.number,
        streetName: result.location.street.name,
        city: result.location.city,
        state: result.location.state,
        country: result.location.country,
        registered: result.registered.date,
        nat: result.nat,
      }) as User,
  );
}
