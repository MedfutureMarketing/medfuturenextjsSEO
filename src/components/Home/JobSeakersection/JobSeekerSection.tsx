// "use client";

import React from "react";
import Link from "next/link";

interface Division {
  key: string;
  title: string;
  href: string;
}

interface Job {
  role: string;
  location: string;
  href: string;
}

interface JobSeekerSectionProps {
  divisions: Division[];
  latestJobsByDivision: Record<string, Job[]>;
}

export default function JobSeekerSection({
  divisions,
  latestJobsByDivision,
}: JobSeekerSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Row */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#003087]">For Job Seekers</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Browse division pathways and discover the latest roles curated for
              your credentials and goals.
            </p>
          </div>

          <Link
            href="/services/job-seekers"
            className="bg-[#003087] text-white px-5 py-2 rounded-lg hover:bg-[#00246B] transition-colors"
          >
            View Job Seeker Hub
          </Link>
        </div>

        {/* Divisions Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {divisions.map((d) => (
            <div
              key={d.key}
              className="border rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-semibold">{d.title}</h3>
                <Link
                  href={d.href}
                  className="border border-gray-300 px-3 py-1 text-sm rounded hover:bg-gray-50"
                >
                  Explore
                </Link>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-3">
                <div className="text-sm text-gray-600">Latest Jobs</div>

                {(latestJobsByDivision[d.key] || []).map((job, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-3 border rounded-lg p-3"
                  >
                    <div>
                      <div className="font-medium text-gray-800">{job.role}</div>
                      <div className="text-xs text-gray-500">{job.location}</div>
                    </div>
                    <Link
                      href={job.href}
                      className="text-[#003087] text-sm font-medium hover:underline"
                    >
                      View
                    </Link>
                  </div>
                ))}

                <Link
                  href={`${d.href}/jobs`}
                  className="block w-full text-center border border-gray-300 rounded-lg py-2 mt-3 hover:bg-gray-50"
                >
                  View all {d.title} Jobs
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
