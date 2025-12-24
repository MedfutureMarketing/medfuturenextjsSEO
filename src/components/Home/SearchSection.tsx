"use client";
import { useState } from "react";
import "@/assets/css/search-section.css";

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
    // Add search logic here
  };

  return (
    <div className="search-section">
      <div className="search-wrapper">
        {/* Left: Search Bar */}
        <form onSubmit={handleSearch} className="search-bar-container">
          <input
            type="text"
            placeholder="Search jobs, companies, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            Find
          </button>
        </form>

        {/* Right: Hub Buttons */}
        <div className="hub-buttons-container">
          <button className="hub-btn-seeker">
            Job Seeker Hub
          </button>
          <button className="hub-btn-employer">
            Employer Hub
          </button>
        </div>
      </div>
    </div>
  );
}
