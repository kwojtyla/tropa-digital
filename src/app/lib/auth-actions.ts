"use server";

import { redirect } from "next/navigation";
import { login, logout } from "./auth-server";
import { simulateLogin } from "./auth-client";

export async function loginAction(email: string, password: string) {
  const loginResult = await simulateLogin(email, password);

  if (loginResult.success && loginResult.user) {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    await login(formData);
    redirect("/dashboard");
  }

  return { success: false, message: loginResult.message };
}

export async function logoutAction() {
  await logout();
  redirect("/login");
}

export async function authenticateUser(email: string, password: string) {
  const loginResult = await simulateLogin(email, password);

  if (loginResult.success && loginResult.user) {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    // const result = await login(formData);
    return { success: true, user: loginResult.user };
  }

  return { success: false, message: loginResult.message };
}
