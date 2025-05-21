import React from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCreditCard,
  FaChevronDown,
  FaChevronRight,
  FaExchangeAlt,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      className="relative min-h-[85vh] bg-cover bg-center py-8 md:py-0 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://media.united.com/assets/m/6036467b6c6c2366/original/040125_FOC_95K_HPCARSUL1_2732x1536_TY.jpg')",
      }}
    >
      <div className="max-w-[1136px] items-center justify-center mx-auto grid grid-cols-1 md:grid-cols-2  px-4">
        <div className="flex justify-center  items-center md:justify-start">
          <div className="bg-white text-black w-full max-w-md rounded-lg shadow-xl p-6">
            <nav className="flex flex-wrap border-b border-gray-300 mb-4 text-sm sm:text-base">
              <button className="px-4 py-3 text-blue-600 border-b-2 border-blue-600 font-medium">
                Flight
              </button>
              <button className="px-4 py-3 text-gray-600 hover:text-gray-800">
                Packages
              </button>
              <button className="px-4 py-3 text-gray-600 hover:text-gray-800">
                Hotel
              </button>
              <button className="px-4 py-3 text-gray-600 hover:text-gray-800">
                Car
              </button>
              <a
                href="#"
                className="text-blue-600 flex items-center py-3 ml-auto"
              >
                Cruise
                <FaArrowRight className="ml-1 h-3 w-3" />
              </a>
            </nav>

            <form className="space-y-5 text-sm sm:text-base">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="trip"
                      defaultChecked
                      className="accent-blue-600 w-4 h-4"
                    />
                    <span>Roundtrip</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="trip"
                      className="accent-blue-600 w-4 h-4"
                    />
                    <span>One-way</span>
                  </label>
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-blue-600 w-4 h-4"
                    />
                    <span>Book with miles</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-blue-600 w-4 h-4"
                    />
                    <span>Flexible dates</span>
                  </label>
                </div>
              </div>{" "}
              <div className="grid grid-cols-2 gap-4 relative">
                <label className="block pr-4">
                  <span className="block text-xs font-medium mb-1">From</span>
                  <input
                    id="from"
                    type="text"
                    defaultValue="Riyadh RUH"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </label>
                <label className="block pl-4">
                  <span className="block text-xs font-medium mb-1">To</span>
                  <input
                    id="to"
                    type="text"
                    placeholder="Destination"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </label>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow">
                  <FaExchangeAlt className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <label className="block relative">
                  <span className="block text-xs font-medium mb-1">Dates</span>
                  <input
                    id="dates"
                    type="text"
                    defaultValue="Jul 18 - Jul 20"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <FaCalendarAlt className="absolute right-3 top-9 text-blue-600" />
                </label>
                <label className="block">
                  <span className="block text-xs font-medium mb-1">
                    Travelers
                  </span>
                  <input
                    id="travelers"
                    type="text"
                    defaultValue="1 Adult"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </label>
              </div>
              <label className="block">
                <span className="block text-xs font-medium mb-1">Cabin</span>
                <div className="relative">
                  <select
                    id="cabin"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option>Economy</option>
                    <option>Premium economy</option>
                    <option>Business or First</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
              </label>
              <div className="text-xs">
                <a
                  href="#"
                  className="text-blue-600 font-medium inline-flex items-center hover:underline"
                >
                  Advanced search
                  <FaChevronRight className="ml-1 w-3 h-3" />
                </a>
                <p className="text-[10px] text-gray-500 mt-1">
                  (Certificates, multi-city and upgrades)
                </p>
              </div>
              <div className="space-y-2 pt-1">
                <button
                  type="submit"
                  className="bg-[#0202ce] hover:bg-[#0000b0] text-white font-bold text-base py-3 px-5 rounded-md w-full"
                >
                  Find flights
                </button>
                <button
                  type="button"
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium text-base py-3 px-5 rounded-md w-full flex items-center justify-center"
                >
                  <FaCreditCard className="mr-2 w-5 h-5" />
                  Find your travel credits
                </button>
              </div>
              <p className="flex flex-wrap items-center gap-1 text-xs text-blue-600">
                <a href="#" className="hover:underline">
                  Changed bag rules
                </a>
                <span className="text-gray-500">and</span>
                <a href="#" className="hover:underline">
                  fees for optional services
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
