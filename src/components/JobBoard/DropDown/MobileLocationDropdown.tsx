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
    <div className="flex-1 overflow-y-auto p-4 bg-white">
      {/* STATES */}
      {!selectedState ? (
        <>
          <h4 className="text-gray-900 font-semibold text-lg mb-4">Select a State</h4>
          <div className="space-y-3">
            {Object.keys(data).map((state) => (
              <div
                key={state}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-blue-50 transition cursor-pointer shadow-sm"
                onClick={() => setSelectedState(state)}
              >
                <span className="text-gray-800 font-medium">{state}</span>
                <span className="text-gray-400 text-lg">{'→'}</span>
              </div>
            ))}
          </div>
        </>
      ) : !selectedRegion ? (
        <>
          <button
            className="mb-4 text-blue-600 font-medium flex items-center gap-2"
            onClick={() => setSelectedState("")}
          >
            {'←'} Back to States
          </button>

          <h4 className="text-gray-900 font-semibold text-lg mb-4">Select a Region</h4>
          <div className="space-y-3">
            {data[selectedState].map((region) => (
              <div
                key={region}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-blue-50 transition cursor-pointer shadow-sm"
                onClick={() => {
                  setSelectedRegion(region);
                  closeModal();
                }}
              >
                <span className="text-gray-800 font-medium">{region}</span>
                <span className="text-gray-400 text-lg">{'→'}</span>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
