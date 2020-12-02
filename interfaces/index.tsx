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
  delivery: boolean;
  almuerzo: boolean;
  merienda: boolean;
  destacada: boolean;
  state: boolean;
};

export type Farmacia = {
  _id: number;
  name: string;
  location: Location;
  contact: Contact;
  imagePath: string;
  categories: [];
  subcategories: [];
  businesshours: string;
  turno: number;
  menus: Menu;
  delivery: boolean;
  almuerzo: boolean;
  merienda: boolean;
  destacada: boolean;
  state: boolean;
};

export type GastronomyLocal = {
  _id: number;
  name: string;
  location: Location;
  contact: Contact;
  imagePath: string;
  categories: [];
  subcategories: [];
  menus: Menu;
  businesshours: string;
  delivery: boolean;
  almuerzo: boolean;
  merienda: boolean;
  destacada: boolean;
  state: boolean;
};

export type Services = {
  _id: number;
  name: string;
  description: string;
  location: Location;
  contact: Contact;
  imagePath: string;
  categories: [];
  subcategories: [];
  businesshours: string;
  destacada: boolean;
  state: boolean;
};
