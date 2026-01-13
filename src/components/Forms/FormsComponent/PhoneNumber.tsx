import { useState } from 'react';

interface PhoneNumberProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  inputClasses?: string;
}

interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

const countries: Country[] = [
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  // Add more countries as needed
];

export default function PhoneNumber({ 
  value, 
  onChange, 
  required = false,
  inputClasses = "w-full px-3 py-3 border border-[#66768F29] text-[#333333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent placeholder:text-[#666666]"
}: PhoneNumberProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState(value);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode = e.target.value;
    const country = countries.find(c => c.code === countryCode) || countries[0];
    setSelectedCountry(country);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPhoneNumber(newValue);
    
    
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        name: 'phone',
        value: `${selectedCountry.dialCode} ${newValue}`
      }
    };
    
    onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 ">
       
      </label>
      <div className="flex gap-2">
        {/* Country Selector */}
        <div className="w-32 mt-1 ">
          <select
            value={selectedCountry.code}
            onChange={handleCountryChange}
            className={inputClasses}
          >
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.dialCode}
              </option>
            ))}
          </select>
        </div>
        
        {/* Phone Number Input */}
        <div className="w-full">
          <input
            type="tel"
            name="phone"
            value={phoneNumber}
            onChange={handlePhoneChange}
            required={required}
            className={inputClasses}
            placeholder="Enter your phone number"
          />
        </div>
      </div>
    </div>
  );
}