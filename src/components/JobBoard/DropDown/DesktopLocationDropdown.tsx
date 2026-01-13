"use client";

interface DesktopLocationDropdownProps {
  data: Record<string, string[]>;
  selectedState: string;
  selectedRegion: string;
  setSelectedState: (state: string) => void;
  setSelectedRegion: (region: string) => void;
}

export default function DesktopLocationDropdown({
  data,
  selectedState,
  selectedRegion,
  setSelectedState,
  setSelectedRegion,
}: DesktopLocationDropdownProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* STATES */}
      <div className="border-r pr-4">
        {Object.keys(data).map((state) => (
          <label key={state} className="flex items-center gap-2 py-2 cursor-pointer">
            <input
              type="radio"
              name="state"
              checked={selectedState === state}
              onChange={() => {
                setSelectedState(state);
                setSelectedRegion("");
              }}
            />
            <span>{state}</span>
          </label>
        ))}
      </div>

      {/* REGIONS */}
      <div className="pl-4">
        {!selectedState ? (
          <p className="text-gray-400 text-sm">Select a state</p>
        ) : (
          data[selectedState].map((region) => (
            <label key={region} className="flex items-center gap-2 py-2 cursor-pointer">
              <input
                type="radio"
                name="region"
                checked={selectedRegion === region}
                onChange={() => setSelectedRegion(region)}
              />
              <span>{region}</span>
            </label>
          ))
        )}
      </div>
    </div>
  );
}
