export interface RLogin {
  username: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  is_staff: boolean;
  is_superuser: boolean;
}

export interface Category {
  id: number;
  name: string;
}

export interface RError {
  detail: string;
}
export interface Image {
  image: string;
}

export interface Product {
  name: string;
  status: string;
  categories: Category[];
  images: Image[];
}

export interface FiltersProduct {
  name: string;
  status: string;
  category: string;
}
