import axios from "axios";
import { RLogin } from "./interface";
//import axiosClient from "./axiosClient";
import { BASE_URL } from "./constants";

export async function login({ username, password }: { username: string; password: string }) {
  //const data_ = JSON.stringify({ username, password });
  try {
    const { data } = await axios.post(`${BASE_URL}api/token/`, { username, password });
    return data as RLogin;
  } catch {
    throw new Error("No se pudo");
  }
}
