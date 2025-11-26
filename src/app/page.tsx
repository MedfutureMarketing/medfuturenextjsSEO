import { getPageMetadata } from "@/lib/getPageMetadata";
import { schemaList } from "@/Data/schemaList";

export function getSchema(page: string) {
  return schemaList[page]?.jsonLd || null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getSchema("home");

  return (
    <html lang="en">
      <head>
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased font-sans">
        {children}

        <footer className="bg-gray-200">
          <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-center text-sm">
            © {new Date().getFullYear()} My App. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
