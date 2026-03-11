// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavigationMenu from "@/components/Navbar/MainMenu";
import Breadcrumb from "@/components/Breadcrumb";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import BottomNav from "@/components/Navbar/BottomNavbar";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Medfuture - Your Trusted Medical Recruitment Agency in Australia",
//   description: "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={inter.className}>
      <head>
  <Script
    id="microsoft-clarity"
    strategy="lazyOnload"
    dangerouslySetInnerHTML={{
      __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "vf3wuaoe41");`,
    }}
  />

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-GV3R8QX989"
    strategy="lazyOnload"
  />

  <Script
    id="google-analytics"
    strategy="lazyOnload"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-GV3R8QX989');
      `,
    }}
  />
</head>
      <body className="antialiased">

        {/* Preloader */}
        <Preloader />

        <NavigationMenu />
        <Breadcrumb />

        {children}

        <Footer />
        <BottomNav />

      </body>
    </html>
  );
}
