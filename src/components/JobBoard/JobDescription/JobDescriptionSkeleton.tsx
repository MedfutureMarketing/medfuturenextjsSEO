export default function JobDescriptionSkeleton() {
  return (
    <div className="animate-pulse p-6 space-y-4">

      {/* Title */}
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>

      {/* Tags */}
      <div className="flex gap-2 mt-4">
        <div className="h-5 bg-gray-300 rounded w-20"></div>
        <div className="h-5 bg-gray-300 rounded w-24"></div>
        <div className="h-5 bg-gray-300 rounded w-28"></div>
      </div>

      {/* Paragraphs */}
      <div className="space-y-3 mt-6">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>

      {/* List items */}
      <div className="space-y-2 mt-6">
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      </div>

      {/* Contact Section */}
      <div className="mt-6 space-y-3">
        <div className="h-5 bg-gray-300 rounded w-32"></div>
        <div className="h-4 bg-gray-300 rounded w-40"></div>
      </div>
    </div>
  );
}
