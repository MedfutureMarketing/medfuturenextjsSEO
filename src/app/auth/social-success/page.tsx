// app/about/page.tsx
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import SocialSuccess from "@/components/auth/SocialSuccess";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("about"); 
}

export default function SocialSuccessPage() {
  return (
    <section className="">
      <SocialSuccess/>     
    </section>
  );
}
