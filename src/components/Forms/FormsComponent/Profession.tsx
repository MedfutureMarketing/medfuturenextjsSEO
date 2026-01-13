interface ProfessionProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  inputClasses?: string;
}

export default function Profession({ 
  value, 
  onChange, 
  required = false,
  inputClasses = "w-full px-3 py-3 border border-[#66768F29] text-[#333333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent placeholder:text-[#666666]"
}: ProfessionProps) {
  const professionOptions = [
    { value: "", label: "Profession" },
    { value: "medical-practitioner", label: "Medical Practitioner" },
    { value: "gp-registrar", label: "GP Registrar" },
    { value: "non-vr-gp", label: "Non-VR GP" },
    { value: "vr-gp", label: "VR GP" },
    { value: "specialist", label: "Specialist" },
    { value: "nurse", label: "Nurse" },
    { value: "allied-health", label: "Allied Health Professional" },
    { value: "other", label: "Other" }
  ];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Profession {required && '*'}
      </label>
      <select
        name="profession"
        value={value}
        onChange={onChange}
        required={required}
        className={inputClasses}
      >
        {professionOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}