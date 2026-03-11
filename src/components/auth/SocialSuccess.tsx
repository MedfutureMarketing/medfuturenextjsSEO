"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SocialSuccess() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const token = params.get("token");

    if (token) {
      localStorage.setItem("TOKEN", token);
      router.push("/my-account/candidate");
    } else {
      router.push("/login");
    }
  }, []);

  return <p>Logging you in...</p>;
}