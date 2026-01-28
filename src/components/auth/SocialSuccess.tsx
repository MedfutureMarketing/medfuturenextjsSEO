"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SocialSuccess() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("auth_token", token);
      // router.push("/dashboard");
    }
  }, []);

  return <p>Logging you in...</p>;
}
