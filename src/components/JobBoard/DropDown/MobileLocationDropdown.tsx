"use client";

interface MobileLocationDropdownProps {
  data: Record<string, string[]>;
  selectedState: string;
  selectedRegion: string;
  setSelectedState: (state: string) => void;
  setSelectedRegion: (region: string) => void;
  closeModal: () => void;
}

export default function MobileLocationDropdown({
  data,
  selectedState,
  selectedRegion,
  setSelectedState,
  setSelectedRegion,
  closeModal,
}: MobileLocationDropdownProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {!selectedState ? (
        <>
          <h4 className="text-gray-800 font-medium mb-3">States</h4>
          {Object.keys(data).map((state) => (
            <div
              key={state}
              className="p-3 border rounded-lg mb-2 bg-gray-50 active:bg-gray-100 cursor-pointer"
              onClick={() => setSelectedState(state)}
            >
              {state}
            </div>
          ))}
        </>
      ) : !selectedRegion ? (
        <>
          <button className="text-blue-600 mb-4" onClick={() => setSelectedState("")}>
            ← Back to States
          </button>

          <h4 className="text-gray-800 font-medium mb-3">Regions</h4>
          {data[selectedState].map((region) => (
            <div
              key={region}
              className="p-3 border rounded-lg mb-2 bg-gray-50 active:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedRegion(region);
                closeModal();
              }}
            >
              {region}
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}
