export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  streetNumber: number;
  streetName: string;
  city: string;
  state: string;
  country: string;
  registered: string;
  nat: string;
}

export type SortOrder = "asc" | "desc";
