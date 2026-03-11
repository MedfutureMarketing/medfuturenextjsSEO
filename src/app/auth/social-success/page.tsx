import { Suspense } from "react";
import SocialSuccess from "@/components/auth/SocialSuccess";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SocialSuccess />
    </Suspense>
  );
}