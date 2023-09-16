export interface RLogin {
  username: string;
  password: string;
}

export interface User {
  username: string;
  password: string;
  email: string;
  isStaff: boolean;
  isSuperUser: boolean;
}

export interface Categoria {
  id: number;
  name: string;
}

export interface Imagen {
  id: number;
  url: string;
}

export interface Product {
  Nombre: string;
  Estado: string;
  Categorías: Categoria[];
  Imágenes: Imagen[];
}
