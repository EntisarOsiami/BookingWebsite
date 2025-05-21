import React from "react";
import { FaChevronUp, FaExclamationTriangle } from "react-icons/fa";

function Explore() {
  return (
    <main className="bg-white min-h-screen px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Explore destinations
      </h1>
      <p className="text-gray-700 text-sm mb-6">
        Not sure where to go? Use our interactive map to find flights to great
        destinations.
      </p>

      <section className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded mb-8 text-sm flex items-start gap-3">
        <FaExclamationTriangle className="text-lg flex-shrink-0" />
        <div>
          <p className="font-semibold">Sorry, no results have been found.</p>
          <p>
            Please enter a different origin location or expand your search area.
          </p>
        </div>
      </section>

      <form className="flex flex-wrap gap-4 items-end mb-6">
        <label className="block">
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Flying from
          </span>
          <input
            type="text"
            defaultValue="Riyadh RUH"
            className="border border-gray-300 rounded px-4 py-2 w-48"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Search type
          </span>
          <select className="border border-gray-300 rounded px-4 py-2 w-40">
            <option>Roundtrip</option>
            <option>One way</option>
          </select>
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Dates
          </span>
          <input
            type="text"
            defaultValue="Flexible dates"
            className="border border-gray-300 rounded px-4 py-2 w-48"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Max price
          </span>
          <input
            type="text"
            defaultValue="$2000"
            className="border border-gray-300 rounded px-4 py-2 w-28"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700"
        >
          Search
        </button>

        <button
          type="button"
          className="text-blue-600 hover:underline font-medium text-sm"
        >
          Refine search
        </button>
      </form>

      <figure className="w-full aspect-[3/2] border relative overflow-hidden rounded-md shadow">
        <iframe
          className="w-full h-full absolute top-0 left-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7233194.346697908!2d38.01877811251456!3d23.85774627188095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e8332bd163c1c5%3A0x43b5d705b47a694a!2sSaudi%20Arabia!5e0!3m2!1sen!2ssa!4v1716302461791!5m2!1sen!2ssa"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </figure>

      <p className="text-xs text-gray-500 text-center mt-4">
        *The prices shown are roundtrip fares and have been available within the
        last 48 hours. Additional baggage fees may apply. Fare prices in miles
        will include additional taxes and fees.
      </p>
    </main>
  );
}

export default Explore;
