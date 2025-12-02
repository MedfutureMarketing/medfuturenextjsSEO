"use client";
import icon1 from "@/assets/homeico/2024-australia-achiever.png";
import apackinsider from "@/assets/homeico/apackinsider.png";
import "@/assets/css/hero.css";

export default function Hero() {
  const stats = [
    { label: "Employers", value: "500+" },
    { label: "Professional Placements", value: "10K+" },
    { label: "Avg, Time to Hire", value: "5K+" },
    { label: "Satisfaction", value: "98%" },
  ];

  return (
    <div className="full-width-section">
      <div className="hero-grid inner-width-section">
        <div className="hero-text">
          <h1 className="hero-title">
            Medfuture Australia – Elevate Your Medical Career
          </h1>
          <p className="hero-subtitle">
            Connecting healthcare professionals with trusted employers across Australia. Whether you’re seeking your next career opportunity or hiring top talent, we provide expert guidance, reliable placements, and tailored solutions that strengthen teams and advance careers.
          </p>
        </div>

        <div className="hero-images">
          <img src={icon1.src} alt="Australia Achiever" />
          <img src={apackinsider.src} alt="Apack Insider" />
        </div>
      </div>

      <div className="stats-row inner-width-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
