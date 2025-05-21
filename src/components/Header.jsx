import { useState } from "react";
import {
  FaAngleDown,
  FaAngleRight,
  FaGlobe,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  let navItems = [
    { title: "Book", icon: FaAngleDown, type: "button" },
    { title: "My trips", icon: FaAngleDown, type: "button" },
    { title: "Travel info", icon: FaAngleDown, type: "button" },
    { title: "MileagePlus", icon: FaAngleDown, type: "button" },
    { title: "Deals", icon: FaAngleDown, type: "button" },
    { title: "Help", icon: FaAngleRight, type: "link", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 text-white p-3 mb-3">
      <div className="container max-w-[1136px] mx-auto flex justify-between items-center">
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="flex items-center border-amber-50 border-2">
            <img
              src="https://www.united.com/2500e4e62233fbfe8ac6.unitedLogoNew.svg"
              alt="logo"
              className="logo"
            />
          </a>

          {navItems.map((item) =>
            item.type === "button" ? (
              <button className="hover:text-blue-300 font-medium flex items-center">
                {item.title} <item.icon className="ml-1" />
              </button>
            ) : (
              <a
                href={item.href}
                className="hover:text-blue-300 flex items-center"
              >
                {item.title} <item.icon className="ml-1" />
              </a>
            )
          )}
        </nav>{" "}
        <nav className="flex items-center justify-between w-full md:w-auto">
          <button
            className="hover:text-blue-300 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="flex items-center space-x-4">
            <button className="hover:text-blue-300 flex items-center">
              <FaGlobe className="mr-1" />
              <span>English - US$</span>
            </button>
            <a href="#" target="_blank" className="hover:text-blue-300">
              <FaSearch />
            </a>
            <button className="hover:text-blue-300">
              <FaUser />
            </button>
            <button className="hover:text-blue-300">
              <FaShoppingCart />
            </button>
          </div>
        </nav>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-white text-blue-900 shadow px-4 py-3 space-y-2">
          {navItems.map((item) =>
            item.type === "button" ? (
              <button className="block w-full text-left hover:text-blue-300 font-medium">
                {item.title}
              </button>
            ) : (
              <a
                href={item.href}
                className="block w-full text-left hover:text-blue-300 font-medium"
              >
                {item.title}
              </a>
            )
          )}
        </nav>
      )}
    </header>
  );
}
