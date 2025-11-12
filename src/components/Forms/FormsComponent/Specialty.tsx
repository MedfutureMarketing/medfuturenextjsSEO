interface SpecialtyProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  inputClasses?: string;
}

export default function Specialty({ 
  value, 
  onChange, 
  required = false,
  inputClasses = "w-full px-3 py-3 border border-[#66768F29] text-[#333333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent placeholder:text-[#666666]"
}: SpecialtyProps) {
  const specialtyOptions = [
    { value: "", label: "Specialty" },
    { value: "general-practice", label: "General Practice" },
    { value: "emergency-medicine", label: "Emergency Medicine" },
    { value: "pediatrics", label: "Pediatrics" },
    { value: "surgery", label: "Surgery" },
    { value: "internal-medicine", label: "Internal Medicine" },
    { value: "psychiatry", label: "Psychiatry" },
    { value: "radiology", label: "Radiology" },
    { value: "anesthesiology", label: "Anesthesiology" },
    { value: "cardiology", label: "Cardiology" },
    { value: "dermatology", label: "Dermatology" },
    { value: "other", label: "Other" }
  ];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Specialty {required && '*'}
      </label>
      <select
        name="specialty"
        value={value}
        onChange={onChange}
        required={required}
        className={inputClasses}
      >
        {specialtyOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}