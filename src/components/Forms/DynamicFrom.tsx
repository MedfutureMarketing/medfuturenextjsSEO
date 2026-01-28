'use client';
/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const FormComponent = () => {
  return (
    <form className="space-y-5">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-1">
          Get matched (60 seconds)
        </h2>
        <p className="text-xs text-gray-600">
          Tell us what matters — we'll send a curated shortlist within 48 hours.
        </p>
      </div>

      {/* First / Last Name */}
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="input"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="input"
        />
      </div>

      {/* Phone / Email */}
      <div className="grid grid-cols-2 gap-3">
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          className="input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input"
        />
      </div>

      {/* AHPRA / State */}
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          name="ahpraNo"
          placeholder="AHPRA / Provider No."
          className="input"
        />
        <select name="preferredState" className="input">
          <option value="">Select state</option>
          <option value="NSW">NSW</option>
          <option value="VIC">VIC</option>
          <option value="QLD">QLD</option>
          <option value="WA">WA</option>
          <option value="SA">SA</option>
          <option value="TAS">TAS</option>
          <option value="ACT">ACT</option>
          <option value="NT">NT</option>
        </select>
      </div>

      {/* Income */}
      <select name="incomeTarget" className="input">
        <option value="">Select income range</option>
        <option value="50k-100k">$50,000 - $100,000</option>
        <option value="100k-150k">$100,000 - $150,000</option>
        <option value="150k-200k">$150,000 - $200,000</option>
        <option value="200k+">$200,000+</option>
      </select>

      {/* Terms */}
      <label className="flex gap-2 text-xs text-gray-600">
        <input type="checkbox" name="agreeTerms" />
        I agree to the Terms and Privacy Policy at Medfuture
      </label>

      {/* Submit */}
      <button
        type="button"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md transition"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
