interface Props {
  formData: any;
  showEmailForm: boolean;
  setShowEmailForm: (value: boolean) => void;
  handleInputChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

export default function CandidateForm({
  formData,
  showEmailForm,
  setShowEmailForm,
  handleInputChange,
  handleSubmit,
}: Props) {

  if (!showEmailForm) {
    return (
      <>
        {/* Social login section */}
        <button
          onClick={() => setShowEmailForm(true)}
          className="w-full py-3 bg-gray-400 text-white rounded-lg"
        >
          Register via Email
        </button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="button"
        onClick={() => setShowEmailForm(false)}
        className="mb-4 text-blue-600"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          className="input"
        />

        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          className="input"
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="input"
        />

        <input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone"
          className="input"
        />
      </div>

      <label className="flex gap-2 mt-4">
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
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
