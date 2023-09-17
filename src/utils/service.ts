import axios, { AxiosError } from "axios";
import { GetProductsParams, Product, RError, RLogin, User } from "./interface";
import axiosClient from "./axiosClient";
import { BASE_URL } from "./constants";

export async function login({ username, password }: { username: string; password: string }) {
  //const data_ = JSON.stringify({ username, password });
  try {
    const { data } = await axios.post(`${BASE_URL}api/token/`, { username, password });
    return { data: data as RLogin };
  } catch (error) {
    const err = error as AxiosError;
    return { error: err?.response?.data as RError };
  }
}

export async function getUsers() {
  //const data_ = JSON.stringify({ username, password });
  try {
    const { data } = await axiosClient.get(`${BASE_URL}users`);
    return { data: data["results"] as User[] };
  } catch (error) {
    return { error: "You do not have permission to see the list of users." };
  }
}

export async function getProducts(params: GetProductsParams) {
  //const data_ = JSON.stringify({ username, password });
  try {
    console.log({ params });

    const { data } = await axiosClient.get(`${BASE_URL}products/`, { params });

    return { data: data["results"] as Product[] };
  } catch (error) {
    return { error: "You do not have permission to see the list of products." };
  }
}

export async function approveUser({ id }: { id: number }) {
  //const data_ = JSON.stringify({ username, password });
  try {
    const { data } = await axiosClient.patch(`${BASE_URL}users/${id}/approve/`);
    return data as User;
  } catch {
    throw new Error("No se pudo");
  }
}

export async function deleteProduct({ id }: { id: number }) {
  //const data_ = JSON.stringify({ username, password });
  try {
    await axiosClient.delete(`${BASE_URL}products/${id}`);
    return {};
  } catch {
    return { error: "You do not have permission to delete product." };
  }
}

export async function updateProduct(product: Product) {
  try {
    const { data } = await axiosClient.patch(`${BASE_URL}products/${product.id}/`, product);
    return { data: data as Product };
  } catch {
    return { error: "You do not have permission to edit product." };
  }
}
export async function getProductById({ id }: { id?: string }) {
  //const data_ = JSON.stringify({ username, password });
  try {
    const { data } = await axiosClient.get(`${BASE_URL}products/${id}`);
    return { data: data as Product };
  } catch {
    return { error: "You do not have permission to edit product." };
  }
}

type CreateUserProps = {
  username: string;
  email: string;
  password: string;
};
export async function createUser(body: CreateUserProps) {
  //const data_ = JSON.stringify({ username, password });
  try {
    const { data } = await axiosClient.post(`${BASE_URL}users/`, body);
    return { data: data as User };
  } catch {
    return { error: "Error on create user, try later" };
  }
}
