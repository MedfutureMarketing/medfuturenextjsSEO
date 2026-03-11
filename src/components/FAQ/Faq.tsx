// 'use client';
// import React, { useState } from "react";
// import { usePathname } from "next/navigation";

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// interface FAQData {
//   [key: string]: FAQItem[];
// }

// const faqData: FAQData = {
//   "/job-seeker-hub": [
//     {
//       "question": "What types of healthcare professionals does Medfuture recruit?",
//       "answer": "Medfuture recruits across a broad range of medical and healthcare disciplines, including General Practitioners, Allied Health Professionals, Dentists, Psychologists, Nurses, and Health Executives. We support both primary care and specialist healthcare settings across Australia and New Zealand."
//     },
//     {
//       "question": "Does Medfuture offer both permanent and locum recruitment solutions?",
//       "answer": "Yes. Medfuture provides permanent placements, short-term and long-term locum staffing, and tailored workforce solutions. This flexibility allows employers to manage staffing shortages, planned leave, service expansion, or long-term growth with confidence."
//     },
//     {
//       "question": "How does Medfuture ensure the quality of candidates?",
//       "answer": "All candidates undergo a comprehensive screening process, including qualification verification, AHPRA registration checks (where applicable), experience assessment, and suitability for the specific role and location. Our consultants specialise in healthcare recruitment, ensuring only well-matched candidates are presented."
//     },
//     {
//       "question": "What makes Medfuture different from other medical recruitment agencies?",
//       "answer": "Medfuture combines deep healthcare industry knowledge, an extensive national talent network, and a consultative approach. Since 2014, we have successfully placed over 1,000 GPs across Australia, earning a strong reputation for reliability, compliance, and long-term employer satisfaction."
//     },
//     {
//       "question": "Can Medfuture help with hard-to-fill or regional roles?",
//       "answer": "Absolutely. Medfuture has extensive experience recruiting for regional, rural, and hard-to-fill positions across Australia. We actively source both local and internationally trained healthcare professionals and support them through the recruitment and onboarding process."
//     }
//   ],
//   "/jobs/locum": [
//     { question: "What is a locum position?", answer: "Locum positions are temporary jobs covering short-term staffing needs, often with flexible hours." },
//     { question: "Are locum jobs full-time?", answer: "No, they are usually temporary or part-time, but can sometimes be full-time." },
//   ],
//   "/jobs/international": [
//     { question: "Can I work internationally?", answer: "Yes, international roles require eligibility for work visas and often offer relocation support." },
//   ],
//   "/general-practice-division/fracgp-facrrm": [
//     { question: "What types of GP roles does Medfuture offer for FRACGP & FACRRM Fellows?", answer: "We offer permanent, locum, DPA, MMM, and private or mixed billing GP positions across metro, regional, and rural Australia. Each role is curated to ensure clinical autonomy, supportive culture, and transparent earnings." },
//     { question: " Can I choose a specific location or region?", answer: "Yes. Whether you prefer metro, regional, or rural practice, we match you with roles in your preferred locations while considering lifestyle, commute, and career goals." },

//     { question: "Does Medfuture assist with private billing or mixed billing practices?", answer: "Absolutely. We guide you through private, mixed, and fully bulk-billing practices, providing earnings clarity so you can make informed career decisions." },

//     { question: "How quickly can I expect job matches after registration?", answer: "Once you provide your preferences, we typically send a curated shortlist within 48 hours. We focus on quality matches rather than overwhelming you with multiple options." },
//     { question: " Can I discuss my career confidentially with a consultant?", answer: "Yes. Our specialist GP consultants offer confidential consultations, helping you explore opportunities, negotiate contracts, and protect income without obligation." },
//   ],
// };


// export default function FAQ() {
//   const pathname = usePathname();
//   const faqs = faqData[pathname] || [];
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   // JSON-LD schema
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQ",
//     mainEntity: faqs.map(faq => ({
//       "@type": "Question",
//       name: faq.question,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: faq.answer
//       }
//     }))
//   };

//   return (
//     <section className=" mt-[150px] full-width-section mb-[140px]">
//       {/* Inject JSON-LD directly */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//       />

//       <div className="inner-width-section  ">  
//         <p className="text-xs lg:text-[14px] text-[#074CA4] font-medium mb-2">
//                  FAQ
//                 </p>
//         <h2 className="lg:text-[36px] text-2xl font-[500] text-gray-900 mb-8 text-left">
//         Quick answers 
//         </h2>

//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="rounded-lg border-b  overflow-hidden">
//               {/* Question */}
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full px-0 py-4 text-left flex cursor-pointer justify-between items-center lg:text-[16px] text-sm font-[600] text-gray-900  transition"
//               >
//                 {faq.question}
//                 <span className="text-blue-600 font-bold">{openIndex === index ? "-" : "+"}</span>
//               </button>

//               {/* Answer */}
//               <div
//                 className={`px-0 pb-0 mb-4 text-gray-700 lg:text-[16px] text-xs transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100 pt-2" : "max-h-0 opacity-0 overflow-hidden"
//                   }`}
//               >
//                 {faq.answer}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';
import React, { useState } from "react";
import { usePathname } from "next/navigation";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  [key: string]: FAQItem[];
}

const faqData: FAQData = {
  "/job-seeker-hub": [
    {
      "question": "What types of healthcare professionals does Medfuture recruit?",
      "answer": "Medfuture recruits across a broad range of medical and healthcare disciplines, including General Practitioners, Allied Health Professionals, Dentists, Psychologists, Nurses, and Health Executives. We support both primary care and specialist healthcare settings across Australia and New Zealand."
    },
    {
      "question": "Does Medfuture offer both permanent and locum recruitment solutions?",
      "answer": "Yes. Medfuture provides permanent placements, short-term and long-term locum staffing, and tailored workforce solutions. This flexibility allows employers to manage staffing shortages, planned leave, service expansion, or long-term growth with confidence."
    },
    {
      "question": "How does Medfuture ensure the quality of candidates?",
      "answer": "All candidates undergo a comprehensive screening process, including qualification verification, AHPRA registration checks (where applicable), experience assessment, and suitability for the specific role and location. Our consultants specialise in healthcare recruitment, ensuring only well-matched candidates are presented."
    },
    {
      "question": "What makes Medfuture different from other medical recruitment agencies?",
      "answer": "Medfuture combines deep healthcare industry knowledge, an extensive national talent network, and a consultative approach. Since 2014, we have successfully placed over 1,000 GPs across Australia, earning a strong reputation for reliability, compliance, and long-term employer satisfaction."
    },
    {
      "question": "Can Medfuture help with hard-to-fill or regional roles?",
      "answer": "Absolutely. Medfuture has extensive experience recruiting for regional, rural, and hard-to-fill positions across Australia. We actively source both local and internationally trained healthcare professionals and support them through the recruitment and onboarding process."
    }
  ],
  "/jobs/locum": [
    { question: "What is a locum position?", answer: "Locum positions are temporary jobs covering short-term staffing needs, often with flexible hours." },
    { question: "Are locum jobs full-time?", answer: "No, they are usually temporary or part-time, but can sometimes be full-time." },
  ],
  "/jobs/international": [
    { question: "Can I work internationally?", answer: "Yes, international roles require eligibility for work visas and often offer relocation support." },
  ],
  "/general-practice-division/fracgp-facrrm": [
    { question: "What types of GP roles does Medfuture offer for FRACGP & FACRRM Fellows?", answer: "We offer permanent, locum, DPA, MMM, and private or mixed billing GP positions across metro, regional, and rural Australia. Each role is curated to ensure clinical autonomy, supportive culture, and transparent earnings." },
    { question: " Can I choose a specific location or region?", answer: "Yes. Whether you prefer metro, regional, or rural practice, we match you with roles in your preferred locations while considering lifestyle, commute, and career goals." },

    { question: "Does Medfuture assist with private billing or mixed billing practices?", answer: "Absolutely. We guide you through private, mixed, and fully bulk-billing practices, providing earnings clarity so you can make informed career decisions." },

    { question: "How quickly can I expect job matches after registration?", answer: "Once you provide your preferences, we typically send a curated shortlist within 48 hours. We focus on quality matches rather than overwhelming you with multiple options." },
    { question: " Can I discuss my career confidentially with a consultant?", answer: "Yes. Our specialist GP consultants offer confidential consultations, helping you explore opportunities, negotiate contracts, and protect income without obligation." },
  ],
  "/general-practice-division/locum-gp": [
    { question: "Who is eligible to work as a locum GP in Australia?", answer: "Most locum GP roles require doctors to be FRACGP or FACRRM, with current AHPRA registration. Some rural, remote or ED/VMO roles may also require recent emergency or hospital experience, ALS certification, and Medicare provider eligibility. Medfuture matches roles strictly to your scope and credentials." },
    { question: "  How much do locum GPs earn in Australia?", answer: "Locum GP rates vary based on location, urgency, scope, and setting. Rural and remote roles generally offer higher daily rates, often with travel, accommodation and vehicle included. ED/VMO and urgent care shifts may pay premium rates depending on demand. Your consultant will clearly outline remuneration and inclusions before placement." },

    { question: " Can I choose where and when I work as a locum GP?", answer: "Absolutely. Locum work is designed around flexibility. You can choose locations (metro, rural or remote), duration (short stints or block rosters), clinical scope, and availability. Medfuture’s advisor-first model ensures roles align with your lifestyle, income goals and professional boundaries." },

    { question: "Why choose Medfuture for locum GP jobs in Australia?", answer: "Medfuture specialises in fellowship-qualified locum GP placements across Australia. We focus on control, continuity and respect offering clear role briefs, repeat placements, and a single named consultant who understands your preferences. Our approach reduces admin, avoids last-minute surprises, and supports long-term locum careers." },
    { question: "What is Medfuture’s one-profile credentialing approach?", answer: "With Medfuture, you credential once and reuse your profile nationally. We manage documentation, compliance and renewals, significantly reducing paperwork and speeding up placements. This allows you to move between roles smoothly without re-credentialing for every new site." },
  ],
  "/general-practice-division/gp-registrars": [
    // { question: "Can I work internationally?", answer: "Yes, international roles require eligibility for work visas and often offer relocation support." },
    { question: "What is a training-aligned GP job for FRACGP/FACRRM pathways?", answer: "A training-aligned role matches your pathway requirements (FSP/PEP/PFP/RVTS/Independent), has appropriate supervision arrangements, and supports progression toward FRACGP or FACRRM with sustainable rosters and a suitable case mix." },
    { question: "Do you recruit for MMM1 to MMM7 locations across Australia?", answer: "Yes. Medfuture sources GP opportunities across MMM1–MMM7, with strong demand in rural and remote communities (MMM3–MMM7)." },

    { question: "Can a non-VR GP find PEP or FSP compatible roles through Medfuture?", answer: "Yes. We match AHPRA-registered non‑VR GPs to roles that are realistic for exam preparation and progression, including roles aligned to PEP and FSP." },

    { question: "What makes rural GP jobs (MMM3–MMM7) attractive for fellowship goals?", answer: "Rural clinics often offer broader exposure, continuity of care, strong mentorship culture, and incentives. With the right supervision, rural work can be a strategic career accelerator." },

    { question: "Do you help with clinic selection beyond salary?", answer: "Yes. We focus on supervision quality, roster safety, governance, billing model, clinical support and realistic patient load—so you choose a clinic that supports fellowship success and wellbeing." },




  ],
  "/ahp-division/speech-pathology": [
    { question: "Do you recruit Speech Pathologist / Speech Therapist jobs across Australia?", answer: "Yes. Medfuture recruits Speech Pathology roles Australia-wide across private practice, NDIS, schools, health services, community organisations and telehealth providers." },
    { question: "Do I need to be an SPA member to apply?", answer: "Many employers prefer SPA membership or SPA-eligible qualifications. If you’re unsure about eligibility, we’ll guide you and match you to suitable employers." },

    { question: "How do you make sure caseload details are transparent?", answer: "We request role-specific caseload disclosure before interviews: client age mix, diagnostic profile, sessions/day, reporting expectations, billable vs non-billable allocation, travel radius, supervision model and PD support." },
    { question: "Can new graduates apply through Medfuture?", answer: "Absolutely. We prioritise structured supervision, gradual caseload ramp-up, mentoring and realistic KPIs for new graduate and early-career clinicians." },

    { question: "Do you charge candidates any fees?", answer: "No. Medfuture does not charge candidates recruitment or placement fees." },

    { question: "Are telehealth Speech Pathology roles available?", answer: "Yes. We work with providers offering telehealth and hybrid models and we clarify tech expectations, session flow and KPI differences up front." },

    // { question: "", answer: "Y" },


  ],



  "/ahp-division/occupational-therapist": [
    { question: "What is the average caseload for an Occupational Therapist in Australia?", answer: "Caseloads vary by setting. Community/NDIS roles commonly sit around 25–45 active clients depending on complexity, travel and reporting. A safe caseload includes protected admin and report time—not just face-to-face hours." },
    { question: "How many billable hours should an OT be expected to work?", answer: "Many roles target roughly 22–30 billable hours per week. Higher expectations should come with strong admin support, reduced complexity, protected documentation time, and/or higher remuneration." },
    { question: "Are Occupational Therapists in demand in Australia?", answer: "Demand remains strong across NDIS/community, paediatrics, mental health and hospital settings, with particularly high demand in growth corridors and regional areas." },
    { question: "What should OTs check before accepting an NDIS role?", answer: "Report time allocation, cancellation policy, complexity mix, supervision access, admin support, travel expectations, and ethical practice culture around funding recommendations." },
    { question: "Do recruitment agencies help Occupational Therapists?", answer: "A specialist OT recruiter can reduce career risk by verifying role realities, protecting confidentiality, and supporting negotiation—if they prioritise OT wellbeing over placement volume." },
    { question: "How does Medfuture reduce burnout risk for OTs?", answer: "By pre-verifying caseload/KPIs, checking supervision and admin time, limiting role shortlists to 2–3 best-fit options, and staying connected after placement with structured check-ins." },
    { question: "Will Medfuture send my CV without consent?", answer: "No. Your profile should only be submitted role-by-role with your explicit consent." },
    { question: "What OT settings does Medfuture recruit for?", answer: "NDIS & community, paediatrics, hospitals/rehab, mental health, aged care, and senior/leadership OT roles across Australia." },

  ],

  "/ahp-division/podiatrist": [
    { question: "What is a reasonable KPI for a podiatrist in Australia?", answer: "A sustainable KPI depends on appointment length, caseload complexity (MSK vs High Risk Foot), documentation load (including NDIS) and admin support. Transparent clinics explain whether KPIs are revenue-based, patient-based, or mixed, and how targets ramp over time especially for graduates." },
    { question: "How many patients per day is realistic for a podiatrist?", answer: "For many podiatrists, 20–28 patients/day can be sustainable depending on appointment length (20/30/40+ minutes), case complexity and admin time. Higher volumes should be assessed carefully against documentation requirements and clinical risk." },
    { question: "Do Medfuture services cost podiatrists anything?", answer: "No. Medfuture does not charge podiatrists recruitment fees. Our recruitment services are funded by employers." },
    { question: "Can Medfuture help if I’m not ready to move roles yet?", answer: "Yes. Many podiatrists engage months before a move through a confidential Podiatry Career Check, market benchmarking and role-fit planning—without pressure to apply." },
    { question: "Are regional podiatry jobs worth considering?", answer: "Regional roles often provide stronger packages (salary incentives, relocation support), broader clinical exposure and high community impact. They can suit podiatrists seeking accelerated growth, lifestyle change or reduced metro competition." },
    { question: "What practice settings do Medfuture podiatry roles include?", answer: "We recruit across private practice, community health, aged care/outreach, and senior/lead roles. We focus on transparent caseload expectations such as MSK/biomechanics, sports, paediatrics, nail surgery, and High Risk Foot/diabetes and wound care." },
    { question: "How does Medfuture match podiatrists to clinics?", answer: "We prioritise clinical fit and transparency. Before presenting roles, we clarify caseload mix, appointment length, patient numbers, KPI model, admin/NDIS documentation expectations, team structure, and clinic support so you can visualise day-to-day work before interviews." },
  ],
  "/ahp-division/physiotherapy": [
    { question: "What is the average caseload for a Physiotherapist in Australia?", answer: "Caseloads vary by setting. Private practice commonly runs higher patient volumes (often shorter consults), while hospital, rehab and community/NDIS roles may have fewer daily patients with higher complexity and documentation. The key is clarity on session length, daily targets, admin time and report load before you accept." },
    { question: "Are KPI-based Physiotherapist jobs bad?", answer: "Not inherently. KPI roles can be excellent when expectations are transparent, achievable, and supported with mentoring and a fair ramp-up period. Problems usually come from unclear targets, revenue-only pressure without support, or unrealistic timeframes." },
    { question: "How do I know if a Physiotherapist job is a burnout risk?", answer: "Common red flags include no clarity on daily consult targets, revenue KPIs without a ramp-up period, no protected admin time, high rebooking pressure, or “supportive team” messaging with no defined supervision structure." },
    { question: "Should new graduate Physiotherapists work in private practice?", answer: "Yes—if the clinic provides structured supervision, reduced/adjusted KPIs, protected learning time, and a clear development plan. Without those, the first role can become unnecessarily stressful and limit growth." },
    { question: "Do Physiotherapists need to pay recruitment fees?", answer: "No. Ethical healthcare recruitment should not charge candidates fees for placement. Medfuture does not charge Physiotherapists recruitment fees." },
    { question: "Can Medfuture help if I am not actively looking?", answer: "Are regional Physiotherapist jobs worth considering?" },
    { question: "How often do Physiotherapists change jobs?", answer: "It varies. Many Physiotherapists reassess roles every 2–4 years, often triggered by workload, mentorship gaps, progression limits, or lifestyle changes. Your best move is to compare role realities (caseload, KPIs, mentoring, autonomy), not just salary." },
  ],
  "/general-practice-division": [
    { question: "How is Medfuture different from GP job boards?", answer: "Job boards advertise roles. Medfuture provides structured permanent recruitment for employers  including clinic intake, suitability assessment, compliance-aware delivery, and retention-focused matching to reduce failed hires and vacancy cycles." },
    { question: "Do you recruit for regional and DPA clinics?", answer: "Yes. We support metro, regional, and DPA GP recruitment across Australia with a retention-first approach and realistic fit assessment." },
    { question: "How long does permanent GP recruitment take?", answer: "Timelines vary by location and complexity. Medfuture provides realistic delivery timelines upfront and recommends the right recruitment model based on urgency and risk." },
    { question: "How do you reduce failed GP hires?", answer: "Through structured clinic intake, GP fit screening, compliance-aware delivery (role dependent), earnings realism checks, and retention-focused matching before shortlisting." },
    { question: "How are recruitment fees structured?", answer: "Fees typically align to role difficulty and risk. Standard metro roles differ from regional, chronic vacancy, and senior roles. Medfuture aligns commercials to complexity and delivery model." },
    { question: "What information do you need to start?", answer: "Clinic location(s), FT/PT preference, target start date, billing model, practice structure, and any credentialing or onboarding requirements. We will respond with a proposal-ready scope." },
  ],
  "/ahp-division": [
    { question: "What is Allied Health permanent recruitment?", answer: "Allied Health permanent recruitment is the hiring of clinicians into ongoing roles with a focus on workforce stability, caseload sustainability, supervision fit, funding continuity (where relevant), and long-term retention—not just filling vacancies quickly." },
    { question: "How is Medfuture different from a typical Allied Health recruitment agency?", answer: "Medfuture operates as a permanent recruitment solution provider for employers. We use a Suitability & Stability Framework (setting fit, caseload match, supervision capacity, sustainability/retention risk) to reduce churn and protect service continuity." },
    { question: "Do you recruit Allied Health clinicians for NDIS providers?", answer: "Yes. We support NDIS providers with recruitment aligned to service continuity, caseload realism, supervision capacity, and defensible recruitment decisions." },
    { question: "Which Allied Health professions do you focus on?", answer: "Our primary focus is Speech Pathology, Occupational Therapy, Physiotherapy, and Podiatry. We also recruit across broader Allied Health disciplines depending on employer needs." },
    { question: "How do you reduce Allied Health staff turnover?", answer: "By aligning clinicians to the right setting and caseload, validating supervision support, screening for sustainability and burnout risk, and ensuring expectations are realistic before shortlisting." },
    { question: "How long does permanent Allied Health recruitment take?", answer: "Timelines vary by location, seniority, and caseload complexity. Medfuture provides realistic delivery timelines upfront and recommends the right engagement model for urgency and risk." },
    { question: "How are recruitment fees structured?", answer: "Fees typically align to role difficulty and risk. Standard metro roles differ from hard-to-fill, regional, and senior roles. Medfuture aligns commercials to complexity and the chosen delivery model." },
    { question: "What information do you need to start?", answer: "Service setting(s), location(s), caseload type and complexity, supervision model, key expectations, target start date, and any governance/credentialing requirements. We respond with a proposal-ready scope." },

  ],
  "/mental-health": [
    { question: "Do I need to be AHPRA registered to apply?", answer: "Yes. All roles require current AHPRA registration (or eligibility to hold registration) as a Psychologist or Psychiatrist in Australia. If you are in progress, we can advise on role timing and employer preferences." },
    { question: "Are NDIS psychology jobs ethically screened?", answer: "Yes. We assess caseload expectations, reporting pressure, session lengths, administrative support, and supervision arrangements before presenting roles—so you can practice safely and sustainably." },
    { question: "Can psychiatrists work part-time or fractional FTE?", answer: "Absolutely. Many psychiatry roles offer flexible FTE, sessional, VMO, or mixed public-private arrangements—especially where services are expanding access and waitlist reduction programs." },
    { question: "How quickly can Medfuture match me to a role?", answer: "Psychologists often receive suitable options within days once your preferences are clear. Psychiatry timelines vary by specialty, location, and credentialing requirements, but we prioritise urgent service needs and high-fit roles." },
    { question: "Do you recruit early-career psychologists?", answer: "Yes. We recruit for early-career, general, and endorsed psychologist roles—matching you with employers that provide appropriate supervision, onboarding, and sustainable caseload structures." },
    { question: "Do you offer telehealth psychologist and psychiatrist jobs?", answer: "Yes. We recruit for telehealth, hybrid, and in-clinic roles Australia-wide, depending on employer model, service needs, and your preferences." },
    { question: "Do you recruit for regional and rural Australia?", answer: "Yes. We specialise in regional and rural recruitment and can support relocation planning, incentives conversations, and hybrid/telepsychiatry options where available." },
    { question: "Is Medfuture aligned with ethical recruitment standards?", answer: "Yes. Our Mental Health Hub is clinician-first, privacy-aware, and compliance-led. We screen employers for fit, governance, and sustainability—not just vacancy pressure." },





  ],



};
// { question: "", answer: "" },

export default function FAQ() {
  const pathname = usePathname();
  const faqs = faqData[pathname] || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQ",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <section className=" mt-[140px] full-width-section mb-[140px]">
      {/* Inject JSON-LD directly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="inner-width-section  ">
        <div className=" px-0  lg:px-0 md:px-8">
          <p className="text-xs lg:text-[14px] text-[#074CA4] font-medium mb-2">
            FAQ
          </p>
          <h2 className="lg:text-[36px] text-2xl font-[500] text-gray-900 mb-8 text-left">
            Quick answers
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg border-b  overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-0 py-4 text-left flex cursor-pointer justify-between items-center lg:text-[16px] text-sm font-[600] text-gray-900  transition"
                >
                  {faq.question}
                  <span className="text-blue-600 font-bold">{openIndex === index ? "-" : "+"}</span>
                </button>

                {/* Answer */}
                <div
                  className={`px-0 pb-0 mb-4 text-gray-700 lg:text-[16px] text-xs transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100 pt-2" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div></div>
    </section>
  );
}