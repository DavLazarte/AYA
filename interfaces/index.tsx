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

type Menu = {
  name: string;
  description: string;
  price: string;
  state: boolean;
};
export type Entity = {
  _id: number;
  name: string;
  description: string;
  location: Location;
  contact: Contact;
  imagePath: string;
  categories: [];
  subcategories: [];
  businessHours: string;
  turno: number;
  menus: Menu;
  desayuno: boolean;
  delivery: boolean;
  almuerzo: boolean;
  merienda: boolean;
  plan: number;
  destacada: boolean;
  state: boolean;
};
