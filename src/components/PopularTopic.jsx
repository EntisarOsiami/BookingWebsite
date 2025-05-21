import React from "react";
import {
  FaWifi,
  FaPlaneDeparture,
  FaRegBookmark,
  FaSuitcaseRolling,
  FaMoneyBillWave,
  FaHeadphonesAlt,
  FaSearch,
} from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { GiWineGlass } from "react-icons/gi";

let topicItems = [
  { icon: FaWifi, text: "Wi-Fi" },
  { icon: FaPlaneDeparture, text: "Change flight" },
  { icon: GiWineGlass, text: "United Club" },
  { icon: MdPets, text: "Traveling with pets" },
  { icon: FaRegBookmark, text: "MileagePlus" },
  { icon: FaSuitcaseRolling, text: "Baggage" },
  { icon: FaMoneyBillWave, text: "Refund" },
  { icon: FaHeadphonesAlt, text: "Help Center" },
];

let links = [
  { text: "about United", href: "#" },
  { text: "products and services", href: "#" },
  { text: "popular destinations", href: "#" },
  { text: "careers", href: "#" },
  { text: "Important notices", href: "#", isBlue: true },
];

function PopularTopic() {
  return (
    <section className="bg-[#03284E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <h2 className="text-2xl font-semibold">popular topics</h2>

        <form className="flex w-full max-w-xl bg-white text-black rounded-md overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="search united"
            className="flex-1 px-4 py-2 outline-none"
          />
          <button type="submit" className="px-4 text-blue-600 text-xl bg-white">
            <FaSearch />
            <span className="sr-only">Search</span>
          </button>
        </form>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-4">
          {topicItems.map((item) => (
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-white/90 hover:text-white"
              >
                <item.icon className="text-lg" />
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav className="bg-gray-100 text-sm text-center py-4 text-gray-800 flex flex-col md:flex-row md:justify-center md:items-center gap-4 flex-wrap px-6">
        {links.map((link) => (
          <a
            href={link.href}
            className={`hover:underline ${
              link.isBlue ? "text-blue-600 font-medium" : ""
            }`}
          >
            {link.text}
          </a>
        ))}
      </nav>
    </section>
  );
}

export default PopularTopic;
