import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <h1 className="text-6xl text-[#040D48] font-bold mb-6" aria-label="404 - Page Not Found">
        404 - Page Not Found
      </h1>
      <p
        className="text-2xl text-gray-600 mb-3"
        aria-label="The page you are looking for does not exist."
      >
        The page you are looking for doesn&apos;t exist.
      </p>

      <Link href="/">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          aria-label="Go back to homepage"
        >
          Go back to homepage
        </button>
      </Link>
    </div>
  );
}