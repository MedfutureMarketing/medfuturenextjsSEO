"use client";

import React from "react";

type JobLink = {
    title: string;
    url: string;
};

const jobLinks: JobLink[] = [
    { title: "GP Specialist Jobs", url: "https://medfuture.com.au/permanent/gp-specialist-jobs?page=1" },
    { title: "Osteopathy", url: "https://medfuture.com.au/permanent/osteopathy?page=1" },
    { title: "Oral Hygienist Jobs", url: "https://medfuture.com.au/permanent/oral-hygienist-jobs?page=1" },
    { title: "Speech Pathologist", url: "https://medfuture.com.au/permanent/speech-pathologist?page=1" },
    { title: "Podiatrist", url: "https://medfuture.com.au/permanent/podiatrist?page=1" },
    { title: "Oral Health Therapist", url: "https://medfuture.com.au/permanent/oral-health-therapist?page=1" },
    { title: "Psychology Jobs", url: "https://medfuture.com.au/permanent/psychology?page=1" },
    { title: "General Jobs", url: "https://medfuture.com.au/permanent/job?page=1" },
    { title: "Behavior Support Practitioner", url: "https://medfuture.com.au/permanent/behavior-support-practitioner?page=1" },
    { title: "GP Jobs", url: "https://medfuture.com.au/permanent/gp-jobs?page=1" },
    { title: "GP Registrar Jobs", url: "https://medfuture.com.au/permanent/gp-registrar-jobs?page=1" },
    { title: "Medical Jobs", url: "https://medfuture.com.au/permanent/medical-jobs?page=1" },
    { title: "Dental Jobs", url: "https://medfuture.com.au/permanent/dental-jobs?page=1" },
    { title: "Registrar Jobs", url: "https://medfuture.com.au/permanent/registrar-jobs?page=1" },
    { title: "Healthcare Executives", url: "https://medfuture.com.au/permanent/healthcare-executives?page=1" },
    { title: "Nursing Care Workers", url: "https://medfuture.com.au/permanent/nursing-care-workers-jobs?page=1" },
    { title: "Exercise Physiologist", url: "https://medfuture.com.au/permanent/exercise-physiologist?page=1" },
    { title: "Behavioural Therapist", url: "https://medfuture.com.au/permanent/behavioural-therapist?page=1" },
    { title: "Physiotherapist", url: "https://medfuture.com.au/permanent/physiotherapist?page=1" },
    { title: "General Dentist Jobs", url: "https://medfuture.com.au/permanent/general-dentist-jobs?page=1" },
    { title: "Dental Assistant", url: "https://medfuture.com.au/permanent/dental-assistant?page=1" },
    { title: "Physiotherapy Jobs", url: "https://medfuture.com.au/permanent/physiotherapy-jobs?page=1" },
    { title: "Occupational Therapists", url: "https://medfuture.com.au/permanent/occupational-therapists?page=1" },
    { title: "Oral Health Jobs", url: "https://medfuture.com.au/permanent/oral-health-jobs?page=1" },
    { title: "General Practitioner", url: "https://medfuture.com.au/permanent/general-practitioner?page=1" },
    { title: "Healthcare Executive Jobs", url: "https://medfuture.com.au/permanent/healthcare-executive-jobs?page=1" },
    { title: "AHP Jobs", url: "https://medfuture.com.au/permanent/ahp-jobs?page=1" },
    { title: "Nursing Jobs", url: "https://medfuture.com.au/permanent/nursing?page=1" },
    { title: "Podiatry Jobs", url: "https://medfuture.com.au/permanent/podiatry-jobs?page=1" },
    { title: "Dietitian", url: "https://medfuture.com.au/permanent/dietitian?page=1" },
    { title: "Dentists", url: "https://medfuture.com.au/permanent/dentists?page=1" },
    { title: "Psychiatry", url: "https://medfuture.com.au/permanent/psychiatry?page=1 " },

    { title: "All Jobs", url: "https://medfuture.com.au/permanent/jobs?page=1" },
];

export default function JobLinks() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-blue-900">Healthcare Job Categories</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {jobLinks.map((job, index) => (
                    <a
                        key={index}
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 border rounded-2xl shadow-sm text-gray-500 hover:shadow-md transition hover:bg-gray-50"
                    >
                        <h2 className="text-lg font-semibold">{job.title}</h2>
                        <p className="text-sm text-gray-500 mt-1">View jobs →</p>
                    </a>
                ))}
            </div>
        </div>
    );
}