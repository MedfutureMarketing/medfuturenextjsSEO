// layout.tsx
import type { Metadata } from "next";
import { schemaList } from "@/Data/schemaList";

export const metadata: Metadata = {
  title: "Medfuture",
  description: "Medfuture is a leading medical and healthcare recruitment brand in Australia & NZ",
};

function getSchema(page: string) {
  return schemaList[page]?.jsonLd || null;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = getSchema("home"); // static global schema

  return (
    <html lang="en">
      <body>
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
        {children}
      </body>
    </html>
  );
}
