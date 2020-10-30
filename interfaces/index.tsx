import { type } from "os";

type Location = {
  address?: string;
  locality: string;
  city: string;
  province: string;
  zipcode: string;
  latitud: string;
  longitud: string;
  country: string;
};
type Contact = {
  cellphone?: string;
  telephone: string;
  facebook: string;
  instagram: string;
  web: string;
  email: string;
};
type Category = {
  _id: number;
  name: string;
  description: string;
  subcategory: string;
  state: boolean;
};
export type Entity = {
  _id: number;
  name: string;
  location: Location;
  contact: Contact;
  imagePath: string;
  category: Category[];
  businesshours: string;
  state: boolean;
};
