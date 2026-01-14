interface Props {
  formData: any;
  handleInputChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

export default function EmployerForm({
  formData,
  handleInputChange,
  handleSubmit,
}: Props) {

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          placeholder="Company Name"
          className="input"
        />

        <input
          name="companyEmail"
          value={formData.companyEmail}
          onChange={handleInputChange}
          placeholder="Company Email"
          className="input"
        />

        <input
          name="companyPhone"
          value={formData.companyPhone}
          onChange={handleInputChange}
          placeholder="Company Phone"
          className="input"
        />

        <input
          name="officeLocation"
          value={formData.officeLocation}
          onChange={handleInputChange}
          placeholder="Office Location"
          className="input"
        />
      </div>

      <label className="flex gap-2 mt-4">
        <input
          type="checkbox"
          name="agreeToTermsEmployer"
          checked={formData.agreeToTermsEmployer}
          onChange={handleInputChange}
        />
        I agree to terms
      </label>

      <button className="w-full mt-6 py-3 bg-[#0A2E5C] text-white rounded-lg">
        Register
      </button>
    </form>
  );
}
