import navLogo from "../assets/navLogo.png";
import navJSAT from "../assets/navJSAT.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "What We Do", path: "/what-we-do" },
    { name: "Industries", path: "/industries" },
    { name: "Insights", path: "/insights" },
    { name: "About Us", path: "/about-us" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white">
      <div className="relative mx-auto flex max-w-7xl items-center px-6 py-4">
        {/* Logo (Left) */}

        <div className=" flex-shrink-0">
          <Link
            to="/"
            className="text-lg font-bold tracking-tight text-gray-900"
          >
            <span className="flex">
              <img src={navLogo} alt="navLogo" />
              <img src={navJSAT} alt="navJSAT" />
            </span>
          </Link>
        </div>

        {/* Desktop Nav (Center) */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 md:flex items-center gap-10 text-sm font-medium text-gray-600">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-orange-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-4">
          {/* Contact Button (Desktop) */}
          <Link
            to="/contact"
            className="hidden md:inline-flex rounded-full bg-orange-500 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-orange-600"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden border-t bg-white">
          <ul className="flex flex-col gap-4 px-6 py-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block text-gray-700 hover:text-orange-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Contact CTA (Mobile) */}
            <li className="pt-2">
              <Link
                to="/contact"
                className="block rounded-full bg-orange-500 px-6 py-3 text-center text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
