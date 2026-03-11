import { getPageMetadata } from "@/lib/getPageMetadata";
import { Metadata } from "next";
import SignupPage from "@/components/Signinpage/SignupPage";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("signin");
}

export default function Signup() {
  return (
    <main>
      <SignupPage />
    </main>
  );
}