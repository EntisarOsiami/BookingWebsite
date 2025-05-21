import React from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const links = [
  {
    title: "Plan your trip",
    desc: "Find a destination and any entry requirements.",
  },
  {
    title: "Visit the Help Center",
    desc: "Find info on refunds, bags, seats and more.",
  },
  {
    title: "Stay connected",
    desc: "Get Wi-Fi for your next flight.",
  },
  {
    title: "Time to start packing",
    desc: "Learn more about bringing bags on your trip.",
  },
  {
    title: "What to know before you go",
    desc: "The world of travel has changed, find out how.",
  },
  {
    title: "See what's on your flight",
    desc: "View your seating, food and entertainment options.",
  },
];

function UsefulLinks () {
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Useful links for you</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {links.map((link) => (
          <li>
            <a
              href="#"
              className="flex justify-between items-center border rounded-lg px-6 py-4 hover:shadow transition bg-white"
            >
              <article>
                <h3 className="font-semibold text-base">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.desc}</p>
              </article>
              <FaArrowRight className="text-xl text-blue-600" />
            </a>
          </li>
        ))}
      </ul>

      <article className="rounded-lg overflow-hidden bg-black text-white flex flex-col lg:flex-row">
        <section className="p-6 lg:w-1/2 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">
            Break the Wi-Fi barrier
          </h3>
          <p className="mb-4 text-sm">
            Join MileagePlus® to access the fastest connectivity in the sky, for
            free. Now available on select United flights.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 w-fit">
            Join now
          </button>
        </section>
        <figure className="lg:w-1/2">
          <img
            src="https://media.united.com/assets/m/730a5b86b08a82b3/original/1265_Starlink_BelowTheFold_500x300-new.jpg"
            alt="Wi-Fi"
            className="w-full h-full object-cover"
          />
        </figure>
      </article>

      <nav className="flex justify-center items-center gap-4 mt-6 text-sm text-gray-700">
        <button className="text-xl text-blue-600">
          <FaChevronLeft />
        </button>
        <span>1 / 6</span>
        <button className="text-xl text-blue-600">
          <FaChevronRight />
        </button>
      </nav>
    </section>
  );
};

export default UsefulLinks;
