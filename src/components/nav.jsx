import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { DiamondsFourIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import ContainComponent from "./contain";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/case-studies" },
  // { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isLightBgPage =
    location.pathname === "/about" ||
    location.pathname.startsWith("/case-studies/");

  return (
    <nav className="absolute px-6 lg:px-8 top-0 left-0 w-full z-50 bg-transparent">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between h-20 border-b ${
          isLightBgPage ? "border-gray-200" : "border-white/10"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center gap-2 group ${
            isLightBgPage ? "text-primary" : "text-white"
          }`}
        >
          <DiamondsFourIcon
            size={28}
            weight="fill"
            className={isLightBgPage ? "text-primary" : "text-[#a3b8b8]"}
          />
          <span className="text-xl font-medium tracking-tight">
            Companyname
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => {
                  if (isLightBgPage) {
                    return `text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-gray-400"
                    }`;
                  }
                  return `text-sm font-medium transition-colors hover:text-white ${
                    isActive ? "text-white" : "text-gray-300"
                  }`;
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <Link to="/contact" className="btn btn-main !h-8 !px-3">
            Contact us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 ${
            isLightBgPage ? "text-primary" : "text-white"
          }`}
          onClick={() => setIsOpen(true)}
        >
          <ListIcon size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary/95 backdrop-blur-md text-white lg:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white p-2"
          >
            <XIcon size={28} />
          </button>
          <ul className="flex flex-col space-y-8 text-3xl">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `transition-colors hover:text-gray-300 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                className="btn btn-main !text-2xl !py-[30px]"
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
