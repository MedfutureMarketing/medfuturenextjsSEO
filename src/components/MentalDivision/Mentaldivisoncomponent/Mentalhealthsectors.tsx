import React from 'react';

interface Sector {
  name: string;
}

export default function MentalHealthSectors() {
  const leftColumn: Sector[] = [
    { name: 'Private Psychology & Psychiatry Practices' },
    { name: 'NDIS Providers & Disability Services' },
    { name: 'Aboriginal & Torres Strait Islander Health Services' },
  ];

  const middleColumn: Sector[] = [
    { name: 'Public Hospitals & Health Services' },
    { name: 'Youth Mental Health Services (incl. headspace settings)' },
    { name: 'Telehealth & Digital Mental Health Platforms' },
  ];

  const rightColumn: Sector[] = [
    { name: 'Community Mental Health Teams' },
    { name: 'Correctional & Forensic Settings' },
  ];

  const renderSectorList = (sectors: Sector[]) => (
    <ul className="space-y-8">
      {sectors.map((sector, index) => (
        <li key={index} className="flex items-start gap-4">
          <div className="w-1 h-8 bg-[#074CA4] flex-shrink-0 mt-0"></div>
          <span className="text-[#4A5565] text-xs lg:text-[16px]">{sector.name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-white full-width-section  mt-[140px]  px-8">
      <div className="inner-width-section mx-auto">
        {/* Title */}
        <h2 className="text-xl lg:text-[30px] font-bold text-[#0F172A] mb-[53px]">
          Mental Health Sectors We Recruit Across
        </h2>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 text-[] md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {/* Left Column */}
          <div>
            {renderSectorList(leftColumn)}
          </div>

          {/* Middle Column */}
          <div>
            {renderSectorList(middleColumn)}
          </div>

          {/* Right Column */}
          <div>
            {renderSectorList(rightColumn)}
          </div>
        </div>
      </div>
    </div>
  );
}