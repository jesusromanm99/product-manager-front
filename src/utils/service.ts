import { RLogin } from "./interface";

const BASE_URL = "http://127.0.0.1:8000";

export async function login({ username, password }: { username: string; password: string }) {
  const data_ = JSON.stringify({ username, password });
  const res = await fetch(`${BASE_URL}/api/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    body: data_,
  });
  if (res.ok) {
    return res.json() as Promise<RLogin>;
  }
  throw new Error("No se pudo");
}
