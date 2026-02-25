export default function EmployerForm() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Company Name"
        className="w-full border p-3 rounded"
      />

      <input
        type="email"
        placeholder="Contact Email"
        className="w-full border p-3 rounded"
      />

      <textarea
        placeholder="Describe the position"
        className="w-full border p-3 rounded"
      />

      <button
        type="submit"
        className="w-full bg-[#074CA4] text-white py-3 rounded-lg font-medium"
      >
        Submit Job
      </button>
    </form>
  );
}
