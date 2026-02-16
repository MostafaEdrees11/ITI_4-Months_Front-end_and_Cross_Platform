"use server";
import { signIn } from "@/services/auth";

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signInFacebookAction() {
  await signIn("facebook", { redirectTo: "/" });
}
