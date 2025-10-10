import JobSeekerSection from "@/components/Home/JobSeakersection/JobSeekerSection";
export default function ImpJobSeekerSection() {
     const divisions = [
        { key: "medical", title: "Medical", href: "/divisions/medical" },
        { key: "nursing", title: "Nursing", href: "/divisions/nursing" },
        { key: "ahp", title: "Allied Health", href: "/divisions/ahp" },
      ];
    
    
      const latestJobsByDivision = {
        medical: [
          { role: "General Practitioner", location: "Brisbane, QLD", href: "/jobs/gp-brisbane" },
          { role: "Emergency Physician", location: "Perth, WA", href: "/jobs/ed-perth" },
        ],
        nursing: [
          { role: "RN – Aged Care", location: "Sydney, NSW", href: "/jobs/rn-agedcare" },
        ],
        ahp: [
          { role: "Physiotherapist", location: "Adelaide, SA", href: "/jobs/physio-adelaide" },
        ],
      };
return (
      <JobSeekerSection
        divisions={divisions}
        latestJobsByDivision={latestJobsByDivision}
      />


);



}