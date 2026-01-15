import React from 'react';

// Define your form data interface
interface EmployerFormData {
  companyName: string;
  companyEmail: string;
  companyPhone: string;
  officeLocation: string;
  agreeToTermsEmployer: boolean;
}

// Define props interface
interface EmployerFormProps {
  formData: EmployerFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

// If you have other types like form errors or API responses, define them:
interface FormErrors {
  companyName?: string;
  companyEmail?: string;
  companyPhone?: string;
  officeLocation?: string;
  agreeToTermsEmployer?: string;
}

// If you have API response types:
interface ApiResponse {
  success: boolean;
  message?: string;
  data?: EmployerFormData;
  errors?: Record<string, string[]>;
}

// Main component
export default function EmployerRegistrationForm({
  formData,
  handleInputChange,
  handleSubmit,
}: EmployerFormProps): React.JSX.Element {
  
  // If you have state or other variables, type them properly:
  // ❌ Don't do this:
  // const [errors, setErrors] = useState<any>({});
  
  // ✅ Do this:
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  
  // If you have event handlers with proper typing:
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSubmit(e);
  };

  // If you have functions that process data:
  const validateForm = (data: EmployerFormData): boolean => {
    // Validation logic here
    return Object.keys(data).every(key => 
      data[key as keyof EmployerFormData] !== ''
    );
  };

  // If you're making API calls, type the response:
  const submitFormData = async (data: EmployerFormData): Promise<ApiResponse> => {
    try {
      const response = await fetch('/api/employer/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result: ApiResponse = await response.json();
      return result;
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'An error occurred',
      };
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
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

      <button 
        type="submit" 
        className="w-full mt-6 py-3 bg-[#0A2E5C] text-white rounded-lg"
        disabled={isLoading}
      >
        {isLoading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
}